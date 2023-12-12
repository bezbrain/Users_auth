const express = require("express");
const app = express();

// Import db connection function
const connectDB = require("./db/connect");

// Import the env package and invoke
require("dotenv").config();
// Import the async error that handles the async..await
require("express-async-error");
// Import error handling middleware
const errorHandlingMiddleware = require("./middleware/error-handler");
// Import not found middleware
const notFoundMiddleware = require("./middleware/not-found");

// Import routers
const loginRouter = require("./routes/login.route");
const registerRouter = require("./routes/reg.route");

const port = process.env.PORT || 3000;

// ROUTES
// Home Page
app.get("/", (req, res) => {
  res.send(
    '<h1>This is the home page</h1><a href="/api/v1/users/login">Go to users</a>'
  );
});
// Root routes
app.use("/api/v1/users", loginRouter);
app.use("/api/v1/users", registerRouter);

// MIDDLEWARE
// Error handling middleware
app.use(errorHandlingMiddleware);
// Not found middleware
app.use(notFoundMiddleware);

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
