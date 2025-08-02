const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");
const colors = require("colors");
const mongoStore = require("connect-mongo");
const favicon = require("serve-favicon");
require("dotenv").config(); // ✅ Load env vars first

const connection = require("./config/mongoose-connection");

const indexRouter = require("./routes/index");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouters");

const app = express();

// ✅ View Engine
app.set("view engine", "ejs");

// ✅ Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET, // ✅ Fixed here
    store: mongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
    }),
  })
);
app.use(flash());
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// ✅ Database connection
connection();

// ✅ Routes
app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// ✅ Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `Scatch is Running on `.yellow +
      `${process.env.NODE_MODE || "development"}`.cyan +
      ` Mode at: `.yellow +
      `port:${port}`
  );
});
