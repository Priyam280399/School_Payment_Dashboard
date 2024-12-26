import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../utils/api';

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
        setFilteredTransactions(data); // Initialize filteredTransactions with all transactions
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    getTransactions();
  }, []);

  const handleFilter = () => {
    const filtered = transactions.filter((transaction) => {
      const matchesStatus = statusFilter
        ? transaction.status === statusFilter
        : true;

      const matchesDate = dateFilter
        ? new Date(transaction.date).toISOString().split('T')[0] === dateFilter
        : true;

      return matchesStatus && matchesDate;
    });

    setFilteredTransactions(filtered);
  };

  return (
    <div className="dashboard">
      <h2>Transactions Overview</h2>
      <div>
        <label>Status:</label>
        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All</option>
          <option value="Success">Success</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        <label>Date:</label>
        <input
          type="date"
          onChange={(e) => setDateFilter(e.target.value)}
        />

        <button onClick={handleFilter}>Apply Filter</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Collect ID</th>
            <th>School ID</th>
            <th>Gateway</th>
            <th>Order Amount</th>
            <th>Transaction Amount</th>
            <th>Status</th>
            <th>Custom Order ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.collect_id}>
              <td>{transaction.collect_id}</td>
              <td>{transaction.school_id}</td>
              <td>{transaction.gateway}</td>
              <td>{transaction.order_amount}</td>
              <td>{transaction.transaction_amount}</td>
              <td>{transaction.status}</td>
              <td>{transaction.custom_order_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
