import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/transactions', // Update with your backend URL
});

export const fetchTransactions = async () => {
  const response = await apiClient.get('/transactions');
  return response.data;
};

export const fetchTransactionsBySchool = async (schoolId) => {
  const response = await apiClient.get(`/transactions/school/${schoolId}`);
  return response.data;
};

export const checkTransactionStatus = async (customOrderId) => {
  const response = await apiClient.post('/transactions/check-status', {
    custom_order_id: customOrderId,
  });
  return response.data;
};
