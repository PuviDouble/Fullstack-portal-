# Full-Stack Web Portal (Authentication & Product Management)

A full-stack RESTful web portal application built with Node.js, Express, MongoDB (Mongoose), JWT Authentication, and a lightweight HTML/CSS/JavaScript frontend interface.

---

## 🚀 Features

- **User Authentication**: Secure user registration and login with password hashing via `bcryptjs` and session tokens using `jsonwebtoken` (JWT).
- **Product Management API**: Complete CRUD operations for products backed by MongoDB.
- **Route Protection**: Custom Express authentication middleware (`authMiddleware`) protecting REST API endpoints.
- **Frontend Dashboard**: Interactive web interface for login and product management dashboard.
- **API Testing Ready**: Postman workspace configurations included.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express 5, Mongoose (MongoDB ORM), dotenv, CORS, bcryptjs, jsonwebtoken
- **Frontend**: HTML5, Vanilla CSS3, JavaScript (Fetch API)
- **Database**: MongoDB

---

## 📁 Project Structure

```text
portal/
├── middleware/
│   └── authMiddleware.js    # JWT verification middleware
├── models/
│   ├── User.js              # User Mongoose schema
│   └── Product.js           # Product Mongoose schema
├── routes/
│   ├── auth.js              # Authentication endpoints (/api/auth)
│   └── product.js           # Product CRUD endpoints (/api/products)
├── public/
│   ├── login.html           # Login page UI
│   ├── dashboard.html       # Dashboard page UI
│   ├── script.js            # Client-side JavaScript
│   └── style.css            # Custom CSS styling
├── server.js                # Express app entry point
├── package.json
└── .env (Excluded from Git)
```

---

## ⚙️ Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) server running locally or a MongoDB Atlas URI

### 2. Environment Setup
Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portal_db
JWT_SECRET=your_jwt_secret_key
```

### 3. Installation & Running
```bash
# Install dependencies
npm install

# Run the server with nodemon (development mode)
npx nodemon server.js

# Or start directly
node server.js
```

Open `http://localhost:5000` (or `http://localhost:5000/login.html`) in your browser.
