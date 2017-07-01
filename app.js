var express = require("express"),
    app = express(),
    path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

// Middleware
app.use(express.static(path.join(__dirname + "/public")));

// Root Route
app.get("/", function(req, res){
    res.render("home");
});

// About route
app.get("/about", function(req, res){
    res.render("about");
});

// Contact Page
app.get("/contact", function(req, res){
    res.render("contact");
});

// 404 route
app.use(function(req, res){
    res.status(404);
    res.render("404");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is started");
});