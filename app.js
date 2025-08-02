const express = require("express");
const app = express();

const connection = require("./config/mongoose-connection");
const path = require("path");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");
const colors = require("colors");
const mongoStore = require("connect-mongo");
const favicon = require("serve-favicon");

require("dotenv").config();

const indexRouter = require("./routes/index");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouters");

app.set("view engine", "ejs");

// Static + Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Add console log for debugging
console.log("MongoDB URL:", process.env.MONGODB_URL);

app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore.create({
      mongoUrl: process.env.MONGODB_URL,
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
  })
);

app.use(flash());
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// Connect to MongoDB
connection();

// Routes
app.use("/", indexRouter);
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(
    `Sctach is Running on `.yellow +
      `${process.env.NODE_MODE}`.cyan +
      ` Mode at: `.yellow +
      `port:${port}`
  );
});
