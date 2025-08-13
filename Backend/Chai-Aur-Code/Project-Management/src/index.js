import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Home page");
})

app.listen(port, () => {
    console.log(`Server is runnning on http://localhost:${port}`);
});
