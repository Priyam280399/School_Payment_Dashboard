import React, { useState } from 'react';
import { checkTransactionStatus } from '../utils/api';

function TransactionStatus() {
  const [customOrderId, setCustomOrderId] = useState('');
  const [status, setStatus] = useState(null);

  const getStatus = async () => {
    try {
      const data = await checkTransactionStatus(customOrderId);
      setStatus(data.status);
    } catch (error) {
      console.error('Error checking status:', error);
    }
  };

  return (
    <div className="transaction-status">
      <h2>Check Transaction Status</h2>
      <input
        type="text"
        placeholder="Enter Custom Order ID"
        value={customOrderId}
        onChange={(e) => setCustomOrderId(e.target.value)}
      />
      <button onClick={getStatus}>Check Status</button>
      {status && <p>Status: {status}</p>}
    </div>
  );
}

export default TransactionStatus;
