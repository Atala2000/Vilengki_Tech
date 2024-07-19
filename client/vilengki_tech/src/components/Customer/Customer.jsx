import { Route, Link, Routes } from 'react-router-dom'; // Import Routes component
import Dashboard from './Dashboard';
import Billing from './Billing';
import PaymentHistory from './PaymentHistory';
import '../../assets/css/Customer.css';

const Customer = () => {
  return (
    <>
      <nav>
        <span className="profile__photo">
          {/* <img src="" alt="profile-photo" /> */}
        </span>
        <Link to='/customer' className='nav__link'>Dashboard</Link>
        <Link to='/customer/billing' className='nav__link'>Billing</Link>
        <Link to='/customer/payment-history' className='nav__link'>Payment History</Link>
      </nav>
      <section className='content'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='billing' element={<Billing />} />
          <Route path='payment-history' element={<PaymentHistory />} />
        </Routes>
      </section>
    </>
  );
};

export default Customer;
