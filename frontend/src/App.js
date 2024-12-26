import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pagess/Home';
import Dashboard from './components/Dashboard';
import TransactionDetails from './components/TransactionDetails';
import TransactionStatus from './components/TransactionStatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<TransactionDetails />} />
        <Route path="/status" element={<TransactionStatus />} />
      </Routes>
    </Router>
  );
}

export default App;

