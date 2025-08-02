
# Scatch - E-commerce Application

Scatch is a fully functional e-commerce application designed to provide a seamless online shopping experience. This project is developed using modern web technologies, including EJS for templating, Tailwind CSS for styling, and Node.js for backend operations.

## 🚀 Features

- **User Authentication**: Secure login and registration system.
- **Product Management**: Add, edit, and remove products from the catalog.
- **Shopping Cart**: Users can add products to their cart, view, and manage their cart items.
- **Order Processing**: Place orders and track them.
- **Admin Panel**: Admins can manage products, orders, and users from a dedicated panel.
- **Responsive Design**: Optimized for all screen sizes.
- **Database Integration**: Persistent storage using MongoDB.

## 🛠️ Technologies Used

- **EJS** – For dynamic templating and rendering pages.
- **Tailwind CSS** – For responsive and modern UI design.
- **JavaScript** – Client-side scripting for interactivity.
- **Node.js** – Backend environment for server-side logic.
- **Express.js** – Web framework for routing and middleware.
- **MongoDB** – NoSQL database for storing data.
- **Mongoose** – ODM for MongoDB, simplifying schema and model handling.
- **Multer** – For handling file uploads (e.g., product images).
- **Passport.js** – For user authentication.
- **Bcrypt** – For hashing passwords securely.
- **Express-session** – For managing user sessions.
- **Dotenv** – For managing environment variables.

## 📦 Installation

```bash
git clone https://github.com/ITSEEFAT/Scatch.git
cd Scatch
npm install
```

### MongoDB Setup (Local)
1. Ensure MongoDB is installed.
2. Create the data directory if it doesn't exist:
```bash
mkdir C:\data\db
```
3. Run MongoDB:
```bash
"C:\Program Files\MongoDB\Server\<your-version>\bin\mongod.exe"
```
4. Add your MongoDB URI in a `.env` file like so:
```
MONGODB_URI=mongodb://localhost:27017/scatch
SESSION_SECRET=your_session_secret
```

## 🔧 Run the App

```bash
npm start
```

Visit: `http://localhost:3000`

## 📁 Folder Structure

- `routes/` – Express routes for user/admin
- `models/` – Mongoose schemas and models
- `views/` – EJS templates
- `public/` – Static files (images, CSS)
- `controllers/` – Logic for each route
- `middlewares/` – Auth and session middleware

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Developed with ❤️ by [ITSEEFAT](https://github.com/ITSEEFAT)
