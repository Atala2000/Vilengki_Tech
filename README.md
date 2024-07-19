# Virtual Meter Application
This is a virtual meter application that simulates a meter reading system. The application is built using Express and FlaReactsk. The application is a RESTful API that allows users to create, read, update, and delete meter readings. The application also provides a way to calculate the total usage of a meter.

## Installation
To install the application, clone the repository and run the following commands:
```bash
cd server
npm install
cd ../client
npm install
```

## Running the Application
To run the application, run the following commands:
```bash
cd server
npm start
cd ../client
npm start
```
## Payments
- Ensure that you have a paypal sandbox account
- Create a .env file in the server directory
- Add the following to the .env file
```bash
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
```
- Run the application
- Navigate to the payments page
- Click on the pay button