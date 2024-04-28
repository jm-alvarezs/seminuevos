import { Request, Response, NextFunction } from "express";
import { applyRoutes } from "./routes";

const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Permite URL de desarrollo y producción
const allowedOrigins = ["http://localhost:5173", "http://localhost:4000"];

// Evitar errores de CORS
app.use(
  cors({
    origin: function (origin: string, callback: Function) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin: " +
          origin;
        console.log(msg);
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// Agregamos las rutas
applyRoutes("/", app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/build`));

  app.get("/*", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(`${__dirname}/build/index.html`);
  });
}

// Función para manejar errores, se puede conectar con Sentry o similares
app.use(function onError(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).send({ error });
  console.log(error);
});

app.listen(port, () => {
  console.log(`Scraper Server running on port ${port}`);
});
