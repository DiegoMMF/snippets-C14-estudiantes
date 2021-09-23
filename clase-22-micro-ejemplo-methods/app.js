const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(methodOverride("_method"));

// línea antes de implementar carpeta partials
app.get("/homeViejo", (req, res) => res.sendFile(__dirname + "/views/indexViejo.html"));

app.set('view engine', 'ejs');

app.get("/", (req, res) => res.render(__dirname + "/views/index"))

app.get("/article/:pato", (req, res) => {
    console.log(`pato`, req.params.pato);
    res.send(req.params.pato);
});

app.post("/body", (req, res) => {
    res.send(req.body.valor)
});

app.put("/body", (req, res) => {
    res.send(req.body.valor)
});

app.listen(3002, () => { console.log('Servidor arriba en http://localhost:3002');})