require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// Uncomment and use this route once the `transactionRoutes` file is ready.
app.use('/api/transactions', transactionRoutes);



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
