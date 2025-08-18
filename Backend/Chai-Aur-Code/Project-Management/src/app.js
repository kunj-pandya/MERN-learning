import express from "express";
import cors from "cors";

const app = express();

// basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// cors configuartions
app.use(
    cors({
        origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// import the routes

import healthCheckRouter from "./routes/healthCheck.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);

app.get("/", (req, res) => {
    res.send("hello from home page"); 
});

app.get("/insta", (req, res) => {
    res.send("instagram page"); s
});

export default app;
