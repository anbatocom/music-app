import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { connect } from "./config/database";
connect();

import { routeClient } from "./routes/client/index.route";

const app: Express = express();
const port: number = 3000;

app.set('views', `${__dirname}/views`) //tìm đến thư mục tên là views
app.set('view engine', 'pug') // xác định view engine có đuôi .pug

routeClient(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
