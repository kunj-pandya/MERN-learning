const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const owenerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productsRouter = require("./routes/productsRouter");

const dbConnection = require("./config/dbConnection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", owenerRouter);
app.use("/users", userRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
    console.log(`server is running on http://localhost:3000`);
})
