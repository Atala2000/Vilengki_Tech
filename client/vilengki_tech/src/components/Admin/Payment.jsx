import { useEffect, useState } from "react";

const PaymentList = () => {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchPayments = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/payments");
            const data = await response.json();
            setPayments(data);
            setLoading(false);

        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {

        fetchPayments();
    })
}


const Payment = () => {
    return (
        <div>
            <h1>Payment List</h1>
            <PaymentList />
        </div>
    )
}
export default Payment;