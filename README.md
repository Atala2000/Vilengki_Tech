# Prepaid Billing Management Software for Smart Meter

## Overview
This project is a prepaid billing management software designed for smart meters. It allows users to manage their prepaid electricity consumption, view billing information, and recharge their accounts conveniently.

## Team Members
- Eric Getange
- Eric Ngigi
- Kidiavayi Atala

## Technologies Used
- Frontend: React
- Backend: Node.js
- Database: MySQL

## Installation Instructions

### Prerequisites
Before you begin, ensure you have installed the following:
- Node.js (v20.x or later)
- npm (v6.x or later)
- MySQL server

### Steps to Install

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Atala2000/Vilengki_Tech.git
   cd Vilengki_Techi/
   ```

2. **Install dependencies:**
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client/Vilengki_Tech
   npm install
   ```

3. **Backend configuration:**
   - Rename `server/.env.example` to `server/.env`.
   - Edit `server/.env` and provide your MySQL database credentials.

4. **Start the backend server:**
   ```bash
   # From the 'backend' directory
   cd server
   npm run dev
   ```

5. **Start the frontend development server:**
   ```bash
   # From the 'frontend' directory
   cd ../client/Vilengki_Tech
   npm run dev
   ```

8. **Access the application:**
   Open your web browser and navigate to `http://localhost:5173` to view the application.

## Usage
- Register or log in to your account.
- View your prepaid electricity balance and billing information.
- Recharge your account using available payment methods.

## Contributing
We welcome contributions to improve this project! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).
