// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(session({ secret: 'codingdojorocks' }));
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    if(req.session.count){
        req.session.count++;
        // res.setHeader('Content-Type', 'text/html');
        // res.write("<h1>Counter</h1><br>" + req.session.count + " times.");
        // res.end();
    }else{
        req.session.count = 1;
        // res.end("<h1>Counter</h1><br>" + req.session.count+ " times.");
    }
    res.render("index", {count: req.session.count});
})
// post route for adding a user
app.get('/plustwo', function (req, res) {
    req.session.count++;
    res.redirect('/');
})

app.get('/reset', function(req, res){
    req.session.destroy();
    res.redirect('/');
})
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});