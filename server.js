const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

/// middleware
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    return console.log(`Express is running on port ${port}`);
});