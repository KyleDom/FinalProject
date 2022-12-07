const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ "users": ["kyle", "dominic", "lomigo"]})
})

app.listen(5000, () => {
    console.log("Server starter on port 5000")
})

