const express = require('express');
const app = express();

const path = require('path');

// 1) Importamos el módulo de terceros
const multer = require('multer');

// 2) Seteamos las opciones 'destino' y 'nombre de archivo'
const options = {
    destination: (req, file, cb) => cb(
        null,
        path.resolve('uploads')
    ),
    filename: (req, file, cb) => cb(
        null,
        Date.now() + "_" + path.basename(file.originalname)
    )
}

// 3) Ejecutamos el método diskStorage con las configuraciones anteriores
const storage = multer.diskStorage(options)

// 4) Ejecutamos multer con 'storage' como atributo dentro del objeto de
const upload = multer({ storage });
// que es lo mismo que poner:
// const upload = multer({ storage: storage })
// pero no es lo mismo que ponerlo solo y sin llaves:
// const upload = multer(storage);

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.sendFile(path.resolve("index.html")));

app.post(
    '/register',
    // 'archivo' es el nombre del atributo name="archivo" de nuestro input
    upload.single('archivo'),
    (req, res) => {
        console.log(req.file);
        // Nos devuelve un objeto con la información del archivo
        res.send('Archivo subido correctamente')
    }
);


app.listen(3001, () => console.log('Servidor en http://localhost:3001'));