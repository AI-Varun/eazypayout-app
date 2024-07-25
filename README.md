# Eazypayout App

## Overview
This project is a web application that allows users to view and manage company accounts and transactions. The frontend is built with React, and the backend is powered by Express.js with MongoDB as the database. 


![eazypayout](https://github.com/user-attachments/assets/52d0d25e-efa8-4cf7-96bc-eb97e391f040)


## Features

- **View Companies**: List all companies with their account names.
- **Select Company**: Fetch and display accounts associated with a selected company.
- **Select Account**: Retrieve and display transactions for the selected account.
- **Responsive Design**: The UI is designed to be responsive and user-friendly.

## Setup and Installation

### Prerequisites

- Node.js (v14 or later)
- MongoDB (installed and running)

### Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd server
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Add initial data to the database:**

    Before starting the server, run the following command to add initial data to the database:

    ```bash
    node ./addData.js
    ```

4. **Start the backend server:**

    ```bash
    npm start
    ```
### The backend server will be running at:

```http://localhost:5000```

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd client
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend application:**

    ```bash
    npm start
    ```
### The frontend application will be running at:

```http://localhost:3000```

### API Endpoints

- **Get Companies**
  - `GET /api/companies`
  - Retrieves a list of companies with their associated account IDs and names.

- **Get Accounts by Company**
  - `GET /api/accounts/:companyId/accounts`
  - Retrieves accounts associated with the specified company ID.

- **Get Account Details**
  - `GET /api/accounts/:accountId`
  - Retrieves details of a specific account based on the account ID.

### Contact
For any questions or feedback, please contact rajvarun1902@gmail.com.
