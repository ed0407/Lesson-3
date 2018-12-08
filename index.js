// var os = require("os");
// var messege = "the platform is ";

// function main(){
//     console.log(messege + os.platform());
// }

// main();
//________________________________
// var express = require("express");
// var app = express();

// app.get("/google/:search", function(req,res){
//     var value = req.params.search;
//    res.redirect("http://google.com/search?q=" + value);
// });

// app.get("/", function(req,res){
//     res.send("<h1>Hello world</h1>");
// });

// app.get("/:name/:surname", function(req, res){
//     var n = req.params.name;
//     var s = req.params.surname;
//     res.send("<h1>Hello " + n + " " + s +"</h1>");
//  });
//  app.get("/google", function(req,res){
//      res.redirect('http://google.com');
//  })
//  app.get("/*", function(req,res){
//     res.status(404).send("<h1>Error 404</h1>");
// })

// app.listen(3000,function(){
//     console.log("Example is running on port 3000");
// });

//Project_________________________________
// var express = require("express");
// var app = express();

// app.use(express.static("public"));

// app.get("/", function(req, res){
//    res.redirect("index.html");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

//_______________________________

// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();

//____________________________

// var fs = require('fs');

// function main(){
//    fs.writeFile("hello.txt", "Hello world\n", function(err){
//        console.log("fs.writeFile ended");
//    });
//    console.log("fs.writeFile");
// }
// main();

//__________________________

// var fs = require('fs');

// function main() {
//    fs.writeFileSync("hello.txt", "Hello world\n");
//    console.log("fs.writeFile");
// }
// main();

//____________________________

// var fs = require('fs');
// var dummyText = "Apple yep";

// function main(){
//     fs.writeFileSync("dummytext.txt",dummyText);
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//         text.replace("Apple","Microsoft")
//     );
// }
// main();

var f = require('./fstests');
var fs = require('fs');

function main(){
    fs.writeFileSync("obj.json",f)
    console.log("+++");
}
main();
