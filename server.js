/**require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./src/routes/eventRoutes');

// Create the Express app
const app = express();

// Get PORT and MONGO_URI from your .env file
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// --- Mongoose Connection ---

// Create an async function to connect to the DB
const connectDB = async () => {
  try {
    // Mongoose.connect returns a promise
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected successfully!');
    
    // Start listening for requests ONLY after the DB connection is successful
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    // If connection fails, log the error and exit the process
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};

// Call the function to connect to the database
connectDB();


// --- Your Routes and Other App Logic Below ---

app.get('/', (req, res) => {
  res.send('API is running...');
});

// ... other routes**/

const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();

// Only use hot reload in development
if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config");
  const compiler = webpack(webpackConfig);

  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
    })
  );
  app.use(webpackHotMiddleware(compiler));
}


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// Test route
app.get("/api/test", (req, res) => res.json({ message: "Backend running" }));

// Default page (EJS + React entry)
app.use((req, res) => {
  res.render('index', { title: 'Event Management System' });
});



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));