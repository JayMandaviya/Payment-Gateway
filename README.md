Payment Gateway API
This project implements a basic payment gateway API using Node.js, Express, Sequelize, and MySQL. The API allows users to initiate payments for products, send verification codes for transactions, and verify the codes to complete purchases.

Features
Initiate Payment: Users can request to pay for a product by providing its ID. The API generates a transaction ID for the payment.

Send Verification Code: Users can request a verification code for a transaction ID. The code is sent to the user's email address.

Verify Code: Users can input the verification code to confirm the transaction and complete the purchase.

Tech Stack
Node.js
Express.js
TypeScript
Sequelize (ORM for MySQL)
MySQL (Database)
Nodemailer (Email sending)
dotenv (Environment variables)
Other dependencies (check package.json)

Set up environment variables:

Create a .env file in the root directory.
Define the following variables in the .env file:
makefile
Copy code

PORT=3000
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
MAIL_HOST=your_mail_host
MAIL_PORT=your_mail_port
MAIL_USER=your_mail_username
MAIL_PASSWORD=your_mail_password
Initialize the database:

Create a MySQL database with the name specified in the .env file.
npm start

The server will start running at http://localhost:3000.
