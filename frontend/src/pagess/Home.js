import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>School Payments Dashboard</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/details">Transaction Details</Link>
        <Link to="/status">Check Status</Link>
      </nav>
    </div>
  );
}

export default Home;
