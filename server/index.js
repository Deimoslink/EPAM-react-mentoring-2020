var path = require("path");
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.listen(port);

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/*", function(req, res){
  res.sendFile("index.html", {root: path.join(__dirname, "../dist")});
});


