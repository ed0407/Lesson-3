// var os = require("os");
// var messege = "the platform is ";

// function main(){
//     console.log(messege + os.platform());
// }

// main();

var express = require("express");
var app = express();

app.get("/google/:search", function(req,res){
    var value = req.params.search;
   res.redirect("http://google.com/search?q=" + value);
});

app.get("/", function(req,res){
    res.send("<h1>Hello world</h1>");
});

app.get("/:name/:surname", function(req, res){
    var n = req.params.name;
    var s = req.params.surname;
    res.send("<h1>Hello " + n + " " + s +"</h1>");
 });
 app.get("/google", function(req,res){
     res.redirect('http://google.com');
 })


app.listen(3000,function(){
    console.log("Example is running on port 3000");
});