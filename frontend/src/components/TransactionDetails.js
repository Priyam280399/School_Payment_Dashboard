import React, { useState } from 'react';
import { fetchTransactionsBySchool } from '../utils/api';

function TransactionDetails() {
  const [schoolId, setSchoolId] = useState('');
  const [transactions, setTransactions] = useState([]);

  const getTransactionsBySchool = async () => {
    try {
      const data = await fetchTransactionsBySchool(schoolId);
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <div className="transaction-details">
      <h2>Transaction Details by School</h2>
      <input
        type="text"
        placeholder="Enter School ID"
        value={schoolId}
        onChange={(e) => setSchoolId(e.target.value)}
      />
      <button onClick={getTransactionsBySchool}>Fetch Transactions</button>

      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.collect_id}>
            {transaction.collect_id} - {transaction.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionDetails;
