var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var FeedbackSchema = new Schema({
  // `title` is required and of type String
 // dateAdded: {
   // type: Date
  //},
  // `link` is required and of type String
  text: {
    type: String,
    required: true
  }
  // `note` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  //note: {
    //type: Schema.Types.ObjectId,
    //ref: "Note"
  //}
});
var Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
