var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  
 
  feedback: {
    type: Schema.Types.ObjectId,
    ref: "Feedback"
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
