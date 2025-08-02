# 🛒 Scatch E-Commerce Web Application

A complete multi-role E-Commerce website powered by **Node.js**, **Express**, and **MongoDB** with **EJS** templating. Crafted to simulate real-world e-commerce functionalities with full CRUD operations, user authentication, and session handling.

---

## 🌐 Live Demo

🔗 **Deployed Site:** [https://scatch-e-commerce-4.onrender.com/](https://scatch-e-commerce-4.onrender.com/) 
🔗 **Deployed Site:** [https://scatch-6sgl.onrender.com/)(IN CASE DOES NOT WORK).
---

## 🧰 Tech Stack

| Layer       | Technology                                               |
|-------------|-----------------------------------------------------------|
| **Frontend**| HTML, CSS, JavaScript, EJS (Embedded JavaScript Templates)|
| **Backend** | Node.js, Express.js                                       |
| **Database**| MongoDB (via Mongoose)                                    |
| **Sessions**| express-session + connect-mongo                           |
| **Utilities**| dotenv, cookie-parser, connect-flash, serve-favicon       |
| **Deployment**| Render                                                  |

---

## ✨ Features

- 🔐 **Authentication**: Secure user and owner login  
- 📦 **Product Management**: Add, update, delete, and view products  
- 💬 **Flash Messages**: For dynamic notifications  
- 💾 **MongoDB Session Store**: Persistent sessions across restarts  
- 📱 **Responsive UI**: Designed for all screen sizes  

---

## 🚀 Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/ITSEEFAT/SCATCH-E-COMMERCE.git
cd SCATCH-E-COMMERCE
```

2. **Install Dependencies**
```bash
npm install
```

3. **Set Up Environment Variables**
Create a `.env` file in the root directory with:
```env
MONGODB_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
NODE_MODE=development
PORT=3000
```

4. **Run Locally**
```bash
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure
```arduino
SCATCH-E-COMMERCE/
├── app.js
├── routes/
├── controllers/
├── config/
├── models/
├── views/
└── public/
```

---

## 👤 Author
**SEEFAT**  
🎓 G.L Bajaj Institute of Technology and Management  
🔗 LinkedIn: [www.linkedin.com/in/seefat12](https://www.linkedin.com/in/seefat12)

---

## 📝 License
This project is licensed under the ISC License.
