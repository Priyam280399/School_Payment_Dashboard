const Transaction = require('../models/Transaction');

// Fetch all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};

// Fetch transactions by school
exports.getTransactionsBySchool = async (req, res) => {
  try {
    const { school_id } = req.params;
    const transactions = await Transaction.find({ school_id });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};

// Check transaction status
exports.checkTransactionStatus = async (req, res) => {
  try {
    const { custom_order_id } = req.params;
    const transaction = await Transaction.findOne({ custom_order_id });
    if (transaction) {
      res.status(200).json({ status: transaction.status });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error checking status', error });
  }
};

// Webhook for status updates
exports.webhookUpdate = async (req, res) => {
  try {
    
    const { status, order_info } = req.body;
    const { order_id } = order_info;
console.log(req);

    const transaction = await Transaction.findOne({ collect_id: order_id });
    if (transaction) {
      transaction.status = status;
      await transaction.save();
      res.status(200).json({ message: 'Status updated successfully' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating status', error });
  }
};

// Manual status update
exports.manualStatusUpdate = async (req, res) => {
  try {
    const { custom_order_id, status } = req.body;

    const transaction = await Transaction.findOne({ custom_order_id });
    if (transaction) {
      transaction.status = status;
      await transaction.save();
      res.status(200).json({ message: 'Status updated successfully' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating status', error });
  }
};
