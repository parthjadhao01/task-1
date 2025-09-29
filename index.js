const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello from Node.js server!");
});

app.listen(PORT, "0.0.0.0",() => console.log(`Server running on port ${PORT}`));
