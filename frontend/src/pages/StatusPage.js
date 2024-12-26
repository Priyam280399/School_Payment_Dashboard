import React, { useState } from "react";
import { checkTransactionStatus } from "../utils/api";

const StatusPage = () => {
  const [customOrderId, setCustomOrderId] = useState("");
  const [status, setStatus] = useState("");

  const handleCheckStatus = async () => {
    try {
      const { data } = await checkTransactionStatus(customOrderId);
      setStatus(data.status);
    } catch (error) {
      console.error("Error checking status:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Transaction Status Check</h2>
      <input
        type="text"
        className="border p-2 mr-4"
        placeholder="Custom Order ID"
        value={customOrderId}
        onChange={(e) => setCustomOrderId(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleCheckStatus}
      >
        Check Status
      </button>
      {status && <p className="mt-4">Transaction Status: {status}</p>}
    </div>
  );
};

export default StatusPage;
