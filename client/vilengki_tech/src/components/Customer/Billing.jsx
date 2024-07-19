import { useState } from "react";
import '../../assets/css/Billing.css';

const Billing = () => {
  const [formData, setFormData] = useState({
    amount: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = formData.amount;

    fetch("http://localhost:5600/api/createOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage("Order created successfully!");
        setFormData({ amount: '' }); // Clear form
      })
      .catch((error) => {
        console.error(error);
        setMessage("Failed to create order. Please try again.");
      });
  };

  return (
    <>
      <h1 className="billing__title">
        Price per litre: <span className="price__per__litre">100</span>
      </h1>
      <form onSubmit={handleSubmit} className="payment__form">
        <div className="form__group">
          <label htmlFor="amount" className="form__label">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="form__input"
            required
          />
        </div>
        <button type="submit" className="form__button">Pay</button>
      </form>
      {message && <p className="form__message">{message}</p>}
    </>
  );
};

export default Billing;
