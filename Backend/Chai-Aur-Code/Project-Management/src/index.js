import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Home page");
})

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is runnning on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB Connection error", error);
        process.exit(1);
    })
