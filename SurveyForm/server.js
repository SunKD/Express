// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render("index");
})

app.post('/process', function(req, res){
    var user = [
        {
            name: req.body.name,
            location: req.body.location,
            fav: req.body.favLan,
            comment: req.body.comment
        }
    ]
    res.render('result', {user: user})
})
// post route for adding a user
// app.get('/plustwo', function (req, res) {
//     req.session.count++;
//     res.redirect('/');
// })

// app.get('/reset', function(req, res){
//     req.session.destroy();
//     res.redirect('/');
// })
// tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
});