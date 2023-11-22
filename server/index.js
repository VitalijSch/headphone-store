import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import { config } from "dotenv";

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

app.get("/login", async (req, res) => {
    try {
        const [row] = await db.query("SELECT * FROM users");
        res.send(row);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/article", async (req, res) => {
    try {
        const [row] = await db.query("SELECT * FROM article");
        res.send(row);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});