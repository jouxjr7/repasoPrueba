// *** AUTOR.ROUTE.JS ***

//Invocación al controlador de autores
const PlayerController = require("../controllers/player.controller");

//Definición de rutas
module.exports = function (app) {
  app.post("/api/player/new", PlayerController.createPlayer);
  app.get("/api/player", PlayerController.getAllPlayer);
  app.get("/api/player/:id", PlayerController.getPlayer);
  app.put("/api/player/:id/", PlayerController.updatePlayer);
  app.delete("/api/player/:id", PlayerController.deletePlayer);
};
