$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    $("#backPic").hide();

    var input = $("#number").val();

    if(input!=''){
      $("#frontPic").show();
    }
    if(input<0){
      alert("Please pick a number that is greater than 0")
    }
    for(var i=1;i<=input;i++){
      if(i%3===0 && i%5===0){
        $('#results').append('<li>ping-pong</li>')
      }else if(i%3===0){
        $('#results').append('<li>ping</li>')
      }else if(i%5===0){
        $('#results').append('<li>pong</li>')
      }else{
        $('#results').append('<li>' + i + '</li>')
      }
    }
  });
  $("#form2").submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    $("#frontPic").hide();

    var input = $("#number").val();

    if(input!=""){
      $("#backPic").show();
    }
    if(input<0){
      alert("Please pick a number that is greater than 0")
    }
    for(var i=1;i<=input;i++){
      if(i%3===0 && i%5===0){
        $('#results').prepend('<li>ping-pong</li>')
      }else if(i%3===0){
        $('#results').prepend('<li>ping</li>')
      }else if(i%5===0){
        $('#results').prepend('<li>pong</li>')
      }else{
        $('#results').prepend('<li>' + i + '</li>')
      }
    }
  });
});
