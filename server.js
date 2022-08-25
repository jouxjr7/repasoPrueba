// *** SERVER.JS ***
//Creacion de constantes para invocar express, al puerto y cors
const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

//Requerimiento de archivo de configuración de la db
require("./server/config/mongoose.config");

//Invocación de Middlewares
app.use(cors());
app.use(express.json()); //Utiliza métodos HTTP y obtiene los datos en JSON
app.use(express.urlencoded({ extended: true })); //Obtiene los datos de la URL

//Invocación de rutas
const playerRoutes = require("./server/routes/player.route");
playerRoutes(app); //Envía los datos a autor.route

//Se establece el puerto de escucha del servidor
app.listen(port, () => {
  console.log("Server at port: ", port);
});
