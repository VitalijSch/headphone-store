import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import { config } from "dotenv";
import Routes from "./route.js";

const app = express();
const port = 3001;

config();
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

Routes(app, db);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});