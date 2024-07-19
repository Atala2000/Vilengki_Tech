import React, { useState, useEffect } from "react";
import '../../assets/css/Dashboard.css';


const Dashboard = () => {

  const mockData = {
    litresPaid: 100,
    litresUsed: 50,
    prepaidBalance: 500,
    amount: 500,
  };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://api.example.com/data');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     setData(result);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <>
      <section className="amount__details">
        <span id="litres__paid">
          <h1>Litres Paid</h1>
          <p>{mockData?.litresPaid}</p>
        </span>
        <span id="liters__used">
          <h1>Litres Used</h1>
          <p>{mockData?.litresUsed}</p>
        </span>
      </section>
      <section className="amount__details">
        <span id="prepaid__balance">
          <h1>Prepaid Balance</h1>
          <p>{mockData?.prepaidBalance}</p>
        </span>
        <span className={`amount__ ${mockData.amount < 500 ? 'warning' : 'normal'}`}>
          <h1>Amount</h1>
          <p>{mockData?.amount}</p>
        </span>
      </section>
    </>
  );
}

export default Dashboard;
