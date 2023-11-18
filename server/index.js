import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import { config } from "dotenv";

const app = express();
const port = 3001;
config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.get("/", (req, res) => {
    res.send("HEllo");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});