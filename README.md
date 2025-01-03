School Payments and Dashboard Application

This project consists of a backend and frontend for a School Payments and Dashboard Application. The backend is built using Node.js, Express.js, and MongoDB, while the frontend is developed with React.js and styled using Tailwind CSS.

Table of Contents

Project Overview

Technologies Used

Backend Setup

Features

Setup Instructions

Testing with Postman

Frontend Setup

Features

Setup Instructions

Usage

File Structure

License

Project Overview

The School Payments and Dashboard Application allows users to:

View and manage payment transactions.

Filter transactions by status and date.

Check transaction statuses and update them manually.

Technologies Used

Backend:

Node.js

Express.js

MongoDB (Atlas)

Mongoose

Frontend:

React.js

Tailwind CSS

Axios

React Router

Backend Setup

Features

Fetch all transactions.

Retrieve transactions by school ID.

Check the status of transactions using custom_order_id.

Webhook for status updates.

Manual transaction status update.

Setup Instructions

Clone the repository:

git clone <repository_url>
cd backend

Install dependencies:

npm install

Set up environment variables in a .env file:

PORT=5000
MONGO_URI=<your_mongo_connection_string>

Start the backend server:

npm start

The server will run on http://localhost:5000.

Testing with Postman

Import the provided Postman collection or use the following endpoints:

Fetch All Transactions: GET /api/transactions

Fetch Transactions by School ID: GET /api/transactions/:school_id

Check Transaction Status: POST /api/transactions/check-status

Webhook for Status Updates: POST /api/transactions/webhook

Manual Status Update: POST /api/transactions/manual-update

Frontend Setup

Features

View a paginated, searchable list of transactions.

Filter transactions by status and date.

View transactions for a specific school ID.

Check transaction statuses in real-time.

Setup Instructions

Navigate to the frontend directory:

cd frontend

Install dependencies:

c

Start the development server:

npm start

The frontend will run on http://localhost:3000.

Configuration

Update the API base URL in src/utils/api.js to match your backend URL if different:

const API_BASE_URL = "http://localhost:5000/api";

Usage

Open the frontend in your browser (http://localhost:3000).

Navigate through the application to view and manage transactions.

Use the search and filter options to refine transaction views.

Update transaction statuses manually or check them in real-time.

File Structure

Backend

backend/
├── config/
│   └── db.js          # Database connection
├── controllers/
│   └── transactionController.js  # API logic
├── models/
│   └── Transaction.js # MongoDB schema
├── routes/
│   └── transactionRoutes.js  # API routes
├── .env               # Environment variables
├── server.js          # Entry point
└── package.json       # Dependencies and scripts

Frontend

frontend/
├── src/
│   ├── components/
│   │   ├── Dashboard.js          # Main dashboard component
│   │   ├── TransactionDetails.js # View transactions by school
│   │   └── TransactionStatus.js  # Check transaction status
│   ├── utils/
│   │   └── api.js                # API service
│   ├── App.js                    # Root component
│   ├── index.js                  # Entry point
│   └── styles.css                # Custom styles
├── public/
│   └── index.html                # Main HTML file
└── package.json                  # Dependencies and scripts

License

This project is licensed under the MIT License.

