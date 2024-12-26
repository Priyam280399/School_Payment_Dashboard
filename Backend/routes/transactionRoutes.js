const express = require('express');
const {
  getAllTransactions,
  getTransactionsBySchool,
  checkTransactionStatus,
  webhookUpdate,
  manualStatusUpdate,
} = require('../controllers/transactionController');

const router = express.Router();

router.get('/', getAllTransactions);
router.get('/school/:school_id', getTransactionsBySchool);
router.get('/status/:custom_order_id', checkTransactionStatus);
router.post('/webhook/status-update', webhookUpdate);
router.post('/update-status', manualStatusUpdate);

module.exports = router;
