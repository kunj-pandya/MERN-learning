const express = require("express");
const app = express();

const userModel = require("./user.model");

app.get("/", function (req, res) {
    res.send("hey");
});

app.get("/create", async function (req, res) {
    let createdUser = await userModel.create({
        name: "parth j pandya",
        username: "parth",
        email: "parth@gmail.com"
    })
    res.send(createdUser);
});

app.get("/read", async function (req, res) {
    let users = await userModel.find(); //read all user => [{}, {}] ,if no users still it will give array(empty).
    res.send(users);
    // let user = await userModel.find({username: "kunj"}); //read one [{}]
    // res.send(user);
    // find onw will give only object not array.
})

app.get("/update", async function (req, res) {
    let updatedUser = await userModel.findOneAndUpdate({ username: "kunj" }, { name: "Kunj Pandya" }, { new: true });
    res.send(updatedUser);
    console.log(updatedUser);
});

app.get("/delete", async function (req, res) {
    let deletedUser = await userModel.findOneAndDelete({ username: "kunj" });
    res.send(deletedUser);
})



app.listen(3000, function () {
    console.log(`server is listing on http://localhost:3000`);
})