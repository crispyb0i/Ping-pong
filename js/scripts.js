$(document).ready(function(){
  $("#form").submit(function(event) {
    event.preventDefault();

    var input = $("#number").val()

//No negative numbers
    if(input<0){
      alert("Please pick a number that is greater than 0")
    }

    for(var i=0;i<input;i++){

    }
});
});
