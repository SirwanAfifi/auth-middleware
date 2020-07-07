import express from "express";
import bodyParser from "body-parser";
import { AuthenticationMiddleware } from "./middlewares/authentication";
import { HomeController } from "./controllers/HomeController";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(new AuthenticationMiddleware().init);
app.get("/", (request, response) => new HomeController(request, response));

export default app;
