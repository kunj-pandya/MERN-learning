const express = require("express");
const path = require("path");


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// "static" every req (images,videos,stylesheets) find in public folder
// path.join => joins the path for __dirname + /public
// console.log(__dirname); folder name were we are working.
// C:\Users\kingk\Desktop\Sheryians-backend\Master EJS
app.set('view engine', 'ejs');



app.get("/", function (req, res) {
    res.render("index");
});


app.get("/profile/:username", function (req, res) {
    res.send(`welcome ${req.params.username}`);
});

app.listen(3000, function () {
    console.log(`server is running on http://localhost:3000`)
})
