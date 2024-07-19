import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Customer from './components/Customer/Customer';
import Admin from './components/Admin/Admin';
import Login from './components/Login';

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <main>
          <Routes>
            <Route path="/login" element={<Login setRole={setRole} />} />
            <Route path="/admin/*" element={role === 'admin' ? <Admin /> : <Navigate to="/login" />} />
            <Route path="/customer/*" element={role === 'customer' ? <Customer /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
      </main>
    </Router>
  );
}

export default App;
