//Importamos Express y efinimos el puerto que vamos a utilizar

const express = require("express"),
    path = require("path"),
    app = express(),
    puerto = 3000;

app.get('/', (peticion, respuesta) => {
    // Podemos acceder a la petición HTTP
    let rutaDeArchivo = path.join(__dirname, "plantilla.html");
    respuesta.sendFile(rutaDeArchivo);
});


app.get('/mascota', (peticion, respuesta) => {
    let mascota = {
        nombre: "Maggie",
        edad: 2,
        raza: "criollo"
    };
    respuesta.json(mascota);
});

app.get('/moto', (peticion, respuesta) => {
    let moto = {
        marca: "tvs",
        referencia: "raider",
        modelo: 2023,
    };
    respuesta.json(moto);
});

app.get('/login', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "Login.html");
    respuesta.sendFile(rutaDeArchivo);
});
app.get('/register', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "register.html");
    respuesta.sendFile(rutaDeArchivo);
});
app.get('/Hi', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "./src/Content.jsx");
    respuesta.sendFile(rutaDeArchivo);
});

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${puerto}`);
});