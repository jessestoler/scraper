$(document).ready(function(){

  var time = moment().format('MMMM Do YYYY, h:mm a');
  var thisId;
  var secondId;
  var thirdId;
  var link;
  var summary;
  var title;
  var saveThis = [];

  $(".time").html(time);
  $(".save").on("click", saveArticle);
  $(".write").on("click", notepad);

  $(".comments").on("click", getComments);
  $(".closeComments").on("click", closeComments);
  $("#submitNote").on("click", saveNote);




function closeComments() {
$(".commentModal").css("display", "none");
$(".closeComments").css("display", "none");
}

function getComments() {

thirdId = $(this).next().html();

$(".commentModal").css("display", "block");
$(".closeComments").css("display", "block");

$.ajax({
method: "GET",
url: "/api/saved/" + thirdId
})
.then(function(data) {
console.log(data);


if (data.feedback) {
  
  $(".commentModal").html(data.feedback.text);
}
else {
    $(".commentModal").html("No comments");
}
});
}



function saveArticle() {

 link = $(this).prev().text();
 summary = $(this).prev().prev().text();
 title = $(this).prev().prev().prev().html();

$.ajax({
method: "POST",
url: "/api/saved",
data: {
title: title,
     summary: summary,
      link: link
}
})
// With that done
.then(function(data) {
// Log the response
console.log(data);
// Empty the notes section

});
alert("article saved");


}


function saveNote() {


  $.ajax({
  method: "POST",
  url: "/api/saved/" + thisId,
  data: {

  text: $(".notepad").val()
  }
  })
  // With that done
  .then(function(data) {
  // Log the response
  console.log(data);
  // Empty the notes section
  
  });
  $(".note").css("display", "none");
  $(".items").css("width", "100%");
  
  }
  
  

function notepad() {
thisId = $(this).prev().html();

$(".note").css("display", "block");
$(".items").css("width", "75%");

}


});

