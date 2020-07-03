import express from "express";
import bodyParser from "body-parser";
import { AuthenticationMiddleware } from "./middlewares/authentication";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(new AuthenticationMiddleware().init);

export default app;
