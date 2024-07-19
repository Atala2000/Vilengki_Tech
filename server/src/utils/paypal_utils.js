import { btoa } from 'buffer'; // Assuming Node.js environment
import process from 'process';
import fetch from 'node-fetch';
import dotenv  from 'dotenv';
dotenv.config();


// Error handling and validation for environment variables
/**
 * Validates the existence of an environment variable and returns its value.
 *
 * @param {string} varName - The name of the environment variable to validate.
 * @returns {string} - The value of the environment variable.
 * @throws {Error} - If the environment variable is missing.
 */
const validateEnvVar = (varName) => {
  if (!process.env[varName]) {
    throw new Error(`Missing environment variable: ${varName}`);
  }
  return process.env[varName];
};

const PAYPAL_API = validateEnvVar('PAYPAL_API');
const CLIENT_ID = validateEnvVar('CLIENT_ID');
const CLIENT_SECRET = validateEnvVar('CLIENT_SECRET');

/**
 * Retrieves the access token from PayPal API using client credentials.
 * @returns {Promise<string>} The access token.
 * @throws {Error} If there is an error fetching the access token.
 */
const getAccessToken = async () => {
  const basicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  try {
    const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${basicAuth}`
      },
      body: 'grant_type=client_credentials'
    });

    if (!response.ok) {
      throw new Error(`Error fetching access token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

/**
 * Creates a PayPal order for the specified total amount and cart items.
 * @param {number} totalAmount - The total amount of the order.
 * @param {Array} cart - The cart items.
 * @returns {Promise<string>} - The PayPal approval link for the created order.
 * @throws {Error} - If there is an error creating the order.
 */
const createOrder = async (totalAmount) => {
    const accessToken = await getAccessToken();

    try {
        const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        description: 'Payments for water meter',
                        amount: {
                            currency_code: 'USD',
                            value: totalAmount.toFixed(2),
                            breakdown: {
                                item_total: {
                                        currency_code: "USD",
                                        value: totalAmount.toFixed(2)
                                }
                            }
                        }
                    }
                ],
                application_context: {
                    return_url: 'http://localhost:3000/complete-order',
                    cancel_url: 'http://localhost:3000/cancel-order',
                    user_action: 'PAY_NOW',
                    "shipping_preference": "NO_SHIPPING"
                }
            })
        });

        if (!response.ok) {
            throw new Error(`Error creating order: ${response.statusText}`);
        }

        const data = await response.json();
        return data.links.find(link => link.rel === 'approve').href;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

const captureOrder = async (orderID) => {
  const accessToken = await getAccessToken();

  try {
    const response = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error capturing order: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error capturing order:', error);
    throw error;
  }
}

export { getAccessToken, createOrder, captureOrder };