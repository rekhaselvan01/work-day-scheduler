var pEl = $('#currentDay');
var timeblockEl= $('.timeblock');
pEl.text(moment().format(' dddd, MMMM Do YYYY'));
var idClicked;
//write function for saveEvent

$(".timeblock").click(function(event){
    var elementClicked = event.target.id;
    console.log(elementClicked);
   if(elementClicked=="saveButton1"){

    console.log("first button was clicked");
   }
   else{
       console.log("someother button was clicked")
   }
    
  });