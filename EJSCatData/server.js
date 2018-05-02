var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    // just for fun, take a look at the request and response objects
    console.log("The request object", request);
    console.log("The response object", response);
    // use the response object's .send() method to respond with an h1
    response.render("<h1>Hello Express</h1>");
})

app.get('/cats', function (request, response) {
    response.render('cats');
})

app.get('/cat1', function(request, response){
    var cat1 =[
        {name: "Kitty", age: "3", favorite: "Spaghetti", spots: ["Under the Bed", "in a sunbeam"], url:"../images/cat.jpg"}
    ]
    response.render('details', {cat: cat1})
})

app.get('/cat2', function(request, response){
    var cat2 =[
        {name: "Bean", age: "5", favorite: "Pizza", spots: ["Under the Sun", "Counter Top"], url:"../images/cat2.jpg"}
    ]
    response.render('details', {cat: cat2})
})

app.get('/cat3', function(request, response){
    var cat3 =[
        {name: "Shadow", age: "7", favorite: "Jerky", spots: ["Couch", "Under a table"], url:"../images/cat3.jpg"}
    ]
    response.render('details', {cat: cat3})
})

app.listen(8000, function () {
    console.log("listening on port 8000");
});