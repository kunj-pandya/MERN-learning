const express = require('express');
const app = express();

const PORT = 3000;

app.get("/", function (req, res) {
    res.send("home route");
});

app.listen(PORT, function () {
    console.log(`app is listing on http://localhost:${PORT}`);
})



// ------------------------------------------------------------------------------------------------------------------
// file system opration that come's from node.js

// const fs = require('fs');

// fs.writeFile("hello.txt", "hello how are you", function (err) {
//     if (err) console.error(err);
//     else console.log("done");
// });

// fs.appendFile("hello.txt", "\n i'm good,What about you?", function (err) {
//     if (err) console.error(err);
//     else console.log("done");
// });

// fs.rename("hello.txt", "rename.txt", function (err) {
//     if (err) console.error(err);
//     else console.log("Done: File is renamed");
// });

// fs.copyFile("rename.txt", "./copy/copy.text", function (err) {
//     if (err) console.error(err);
//     else console.log("Done: File is copyed");
// });

// fs.unlink("rename.txt", function (err) {
//     if (err) console.error(err);
//     else console.log("Done:Unlinked renmae.txt");
// })

// fs.mkdir("folder", function (err) {
//     if (err) console.error(err);
//     else console.log("Done: folder is created");
// })

// fs.rmdir("folder", function (err) {
//     if (err) console.error(err);
//     else console.log("Done: folder is removed");
// })

// ------------------------------------------------------------------------------------------------------------------