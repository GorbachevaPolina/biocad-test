const express = require('express');
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.get('/', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, "public", "main.html"))
})
app.get('/analytics', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, "public", "analytics.html"))
})
app.get('*', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname, "public", "error.html"))
})

app.listen(8000, () => {
    console.log(`Running Server`)
})
