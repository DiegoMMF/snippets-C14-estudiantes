const express = require('express');
const app = express();
const POST = process.env.POST || 3000;

// interpreta info codificados con el MIME 'application/x-www-form-urlencoded'
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/form", (req, res) => res.send(req.body));

app.listen(POST, () => console.log('SRV at http://localhost:3000'))