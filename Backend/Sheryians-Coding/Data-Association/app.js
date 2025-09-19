const express = require("express");
const app = express();
const userModel = require("./models/user.model");
const postModel = require("./models/post.model");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/register", async (req, res) => {
    const { username, email, password, age, name } = req.body;
    const user = await userModel.findOne({ email });
    if (user) return res.status(500).send("User alredy register!");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                username,
                email,
                age,
                name,
                password: hash
            });

            let token = jwt.sign({ email: email, userid: user._id }, "shhhh");
            res.cookie("token", token);
            res.send("registered");
        });
    });

});


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(500).send("Somthing went wrong");

    bcrypt.compare(password, user.password, function (err, result) {
        if (result) res.status(200).send("you can login")
        else res.status(500).send("email or password is worng");
    })

});


app.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.redirect("/login");
});


app.listen(3000, () => {
    console.log(`app is listing on  http://localhost:3000`)
});