var express = require("express");
var app = express();

app.use(express.static('../collectNumber'));

app.get("/", function(req, res){
  res.send("hello!");
});

app.get("/main.html", function(req, res){
  res.send(__dirname + "/main.html");
});

var server = app.listen(3001, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("visit url: http://%s:%s", host, port);
})

