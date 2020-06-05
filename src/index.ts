import express from "express";
import * as swaggerUi from "swagger-ui-express";
import { Server } from "typescript-rest";

import controllers from "./controllers";
import swaggerDocument from "./swagger.json";

const app: express.Application = express();

Server.buildServices(app, ...controllers);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, function() {
  console.log("Rest Server listening on port 3000!");
});
