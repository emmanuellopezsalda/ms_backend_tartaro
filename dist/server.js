import express, { urlencoded } from 'express';
import { config } from 'dotenv';
import cors from "cors";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import indexRouter from './routes/index.js';
config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const server = express();
server.use(urlencoded({
  extended: true
}));
server.use(express.static(path.join(__dirname, "../../frontend/app/public")));
server.use(express.json());
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, '../../frontend/app/views'));
server.use(cors());
server.set('port', process.env.PORT || 9200);
server.use("/", indexRouter);
export default server;