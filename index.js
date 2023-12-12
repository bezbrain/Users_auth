const express = require("express");
const app = express();

// Import db connection function
const connectDB = require("./db/connect");

// Imvoke the req body middleware
app.use(express.json());

// Import the async error that handles the async..await
require("express-async-errors");

// Import routers
const loginRouter = require("./routes/login.route");
const registerRouter = require("./routes/reg.route");

// Import the env package and invoke
require("dotenv").config();

// Import not found middleware
const notFoundMiddleware = require("./middleware/not-found");
// Import error handling middleware
const errorHandlingMiddleware = require("./middleware/error-handler");

// The dynamic port
const port = process.env.PORT || 3000;

// ROUTES
// Home Page
app.get("/", (req, res) => {
  res.send(
    '<h1>This is the home page</h1><a href="/api/v1/users/login">Go to users</a>'
  );
});
// Root routes
app.use("/api/v1/users", registerRouter);
app.use("/api/v1/users", loginRouter);

// MIDDLEWARE
// Not found middleware
app.use(notFoundMiddleware);
// Error handling middleware
app.use(errorHandlingMiddleware);

// Start server and DB
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
