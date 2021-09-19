const express = require('express');
const app = express();

// línea antes de implementar carpeta partials
app.get("/homeViejo", (req, res) => res.sendFile(__dirname + "/views/indexViejo.html"));

app.set('view engine', 'ejs');

app.get("/home", (req, res) => res.render(__dirname + "/views/index"))

app.listen(3002, () => { console.log('Servidor arriba en http://localhost:3002');})