import { useState } from "react";
import '../../assets/css/Billing.css';

const Billing = () => {
  const [formData, setFormData] = useState({
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Submitted amount:', formData.amount);
  };

  return (
    <>
      <h1 className="billing__title">Price per litre: <span className="price__per__litre">100</span></h1>
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
    </>
  );
};

export default Billing;
