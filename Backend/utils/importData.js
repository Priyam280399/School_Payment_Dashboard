const mongoose = require('mongoose');
const csvtojson = require('csvtojson');
const Transaction = require('../models/Transaction');
const dotenv = require('dotenv');

dotenv.config();

// mongoose.connect(process.env.MONGO_URI, {
  
//   tls: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const importData = async () => {
  try {
    const transactions = await csvtojson().fromFile('./data/transactions.csv');
    await Transaction.insertMany(transactions);
    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

importData();
