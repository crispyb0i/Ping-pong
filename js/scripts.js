$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();
    $("#results").empty();

    var input = $("#number").val();

//No negative numbers
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
        console.log(i);
      }
    }
});
});
