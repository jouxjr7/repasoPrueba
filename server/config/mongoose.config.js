const mongoose = require("mongoose");

const db_name = "players_db";
mongoose
  .connect(`mongodb://localhost/${db_name}`, {
    /*Variables para evitar validaciones y controles de accesos de MongoDB */
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connection succeeded to database: [${db_name}]`))
  .catch((err) =>
    console.log("Something went wrong. Could not connect to database", err)
  );
