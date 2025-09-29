const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("testing-2");
});

app.listen(PORT, "0.0.0.0",() => console.log(`Server running on port ${PORT}`));
