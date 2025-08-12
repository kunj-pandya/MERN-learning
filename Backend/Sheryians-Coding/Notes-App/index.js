const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const { log } = require("console");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    fs.readdir(`./files`, function (err, files) {
        res.render("index", { files: files });
    })
});

app.post("/create", function (req, res) {
    const title = req.body.title?.trim();
    const details = req.body.details?.trim();

    if (!title || !details) {
        return res.status(400).send("Title and details are required!");
    }

    const filename = `${title.split(" ").join("")}.txt`;

    fs.writeFile(`./files/${filename}`, details, function (err) {
        if (err) {
            console.error("Error writing file:", err);
            return res.status(500).send("Failed to create file.");
        }
        res.redirect("/");
    });
});

app.get("/file/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {

        if (err) {
            console.error("Error reading file:", err);
            return res.status(404).send("File not found.");
        }
        res.render('show', { filename: req.params.filename, filedata: filedata });
    })
});

app.get("/edit/:filename", function (req, res) {
    res.render("edit", { filename: req.params.filename });
})

app.post("/edit", function (req, res) {

    const previous = req.body.previous?.trim();
    const newName = req.body.new?.trim();


    if (!previous || !newName) {
        return res.status(400).send("Both old and new filenames are required.");
    }
    const oldPath = `./files/${previous}`;
    const newPath = `./files/${newName.split(" ").join("")}.txt`;

    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            console.error("Error renaming file:", err);
            return res.status(500).send("Failed to rename file.");
        }
        res.redirect("/");
    })
})


// DELETE File
app.post("/delete/:filename", function (req, res) {
    const filePath = `./files/${req.params.filename}`;

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error("Failed to delete file:", err);
            return res.status(500).send("Error deleting file.");
        }
        res.redirect("/");
    });
});

app.listen(3000, function () {
    console.log(`server is running here: http://localhost:3000`);
})