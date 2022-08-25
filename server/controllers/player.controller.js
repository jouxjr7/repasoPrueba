//Obtención del modelo
const Player = require("../models/player.model");

//Crear un autor
module.exports.createPlayer = (request, response) => {
  const { name, posicion } = request.body; //Obtener las variables de la solicitud
  Player.create({ name, posicion }
    )
    .then((player) =>
      response.json({ insertedPlayer: player, msg: "Successful creation" })
    )
    .catch((err) => response.status(400).json(err));
};

//Mostrar todos los autores
module.exports.getAllPlayer = (_, response) => {
    Player.find({}) //Recuperar todos los autores de la consulta
    .then((players) => response.json(players))
    .catch((err) => response.json(err));
};

//Mostrar un autor
module.exports.getPlayer = (request, response) => {
    Player.findOne({ _id: request.params.id }) //Recupera un autor de la consulta de acuerdo al ID ingresado en la URL
    .then((player) => response.json(player))
    .catch((err) => response.json(err));
};

//Actualizar un autor
module.exports.updatePlayer = (request, response) => {
    Player.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  }) //Actualiza un autor de la consulta de acuerdo al ID ingresado en la URL
    .then((updatePlayer) => response.json(updatePlayer))
    .catch((err) => response.json(err));
};

//Borrar un autor
module.exports.deletePlayer = (request, response) => {
    Player.deleteOne({ _id: request.params.id })
    .then((deletePlayer) => response.json(deletePlayer))
    .catch((err) => response.json(err));
};
