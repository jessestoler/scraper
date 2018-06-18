var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var app = express();
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var cheerio = require("cheerio");
var request = require("request");
var db = require("./models");
var PORT = 3000;
var results = [];


app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/hardtimes";


mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
var link;
var summary;
var title;

request("https://thehardtimes.net/", function(error, response, html) {
  var $ = cheerio.load(html);

  
  $(".post-title").each(function(i, element) {
   
    
          link = $(element).children().attr("href");
          summary = $(element).parent().siblings().text();
          title = $(element).text();

          results.push({
            title: title,
           summary: summary,
            link: link
           
          });
          
  

      });
      db.Article.create(results)
      .then(function(dbArticle) {
        console.log(dbArticle);
      })
      .catch(function(err) {
        return res.json(err);
      });
    
        });


      

var routes = require("./controllers/controllers.js");

app.use(routes);


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
  
});


