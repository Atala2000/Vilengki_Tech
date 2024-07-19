import React, { useState, useEffect } from "react";
import '../../assets/css/Dashboard.css';

const Dashboard = () => {
  const mockData = {
    litresPaid: 100,
    litresUsed: 50,
    prepaidBalance: 500,
    amount: 500,
  };

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
      <section className="water__level">
        <h1>Water Level</h1>
        <meter 
          value={mockData.litresUsed} 
          min="0" 
          max={mockData.litresPaid}
          low={mockData.litresPaid * 0.2}
          high={mockData.litresPaid * 0.8}
          optimum={mockData.litresPaid * 0.5}
        >
          {mockData.litresUsed}/{mockData.litresPaid}
        </meter>
        <p>{mockData.litresUsed} litres used out of {mockData.litresPaid} litres</p>
      </section>
    </>
  );
}

export default Dashboard;
