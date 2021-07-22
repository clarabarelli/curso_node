const express = require("express");
const app = express(); // instancia de express
const routerConfig = require("./routes/route");

const configApi = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

const configRouter = (app) => {
  app.use("/api/v1/", routerConfig.init); //init se encarga de juntar todas las rutas
  app.get("/", (req, res) => {
    res.send("Ruta raiz");
  });
};

const init = () => {
  const app = express();
  configApi(app);
  configRouter(app);
  app.listen(6000);
  console.log("Su app se está ejecutando")
};

init();
