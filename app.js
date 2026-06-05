const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// server listen

const port = process.env.PORT || 5000;

app.listen(port, () => {
  try {
    console.log("App is running on", port);
  } catch (error) {
    console.log("Error", error.message);
  }
});
