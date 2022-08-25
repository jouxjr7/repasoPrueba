// *** AUTOR.MODEL.JS ***

//Invocación de mongoose para hacer uso de mongo db
const mongoose = require("mongoose");

//Creación del esquema para el autor
const PlayerScheme = new mongoose.Schema({
    name: {
        type:  String,
        minlength: [
            3,
            "El nombre del jugador deberia tener mínimo 3 caracteres"
          ],
          required: [
            true,
             "El nombre del autor es obligatorio"
          ],
        
    },
    posicion: {
        type: String,
        
    }
});

//Definición del modelo
const Player = mongoose.model("Player", PlayerScheme);
module.exports = Player;
