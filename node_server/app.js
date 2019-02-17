const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const ejs = require("ejs");
app.set('view engine', 'ejs');

app.use(
    bodyParser.urlencoded({ extended: true}), 
    // bodyParser.json({})
);
app.use(express.static("public"));

const routes = require("./routes/router");
app.use(routes);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});