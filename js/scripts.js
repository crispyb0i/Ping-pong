//business-logic for normal PingPong
function pingPong(input){
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
  };

//user-logic for normal PingPong
$(document).ready(function(){
   
  $("#form1").submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    $("#backPic").hide();

    var input = $("#number").val();
    pingPong(input);
    
 //business-logic for reverse PingPong
    
 function reversePingPong(input){
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
 }
    //user-logic for reverse PingPong
  $("#form2").submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    $("#frontPic").hide();

    var input = $("#number").val();
    reversePingPong(input);

  });
});
});
