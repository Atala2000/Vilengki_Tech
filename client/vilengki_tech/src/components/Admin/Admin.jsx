import { Link, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Payment from './Payment';

const Admin = () => {
    return (
        <>
            <nav>
                <span className="profile__photo">
                    {/* <img src="" alt="profile-photo" /> */}
                </span>
                <Link to='/admin' className='nav__link'>Dashboard</Link>
                <Link to='/admin/payment' className='nav__link'>Payment History</Link>
            </nav>
            <section className='content'>
                <Routes>
                    <Route path='/admin' element={<Dashboard />} />
                    <Route path='/admin/payment' element={<Payment />} />
                </Routes>
            </section>
        </>
    );
}

export default Admin;