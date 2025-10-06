const mongoose = require('mongoose');
const config = require("config");


mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
    .then(function () {
        console.log("connected");
    })
    .catch(function (error) {
        console.log(error);
    })

module.exports = mongoose.connect;
