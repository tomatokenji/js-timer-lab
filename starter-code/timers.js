// your code here:
$(document).ready(function(){
  var seconds = 0;
  var timerId;
  var start = false;


  var updateTime = function(){
    var stringToDisplay = "Time elapsed: ";
    seconds += 1;
    stringToDisplay += seconds;
    $('#timer').html(stringToDisplay);
  }

  $('#start').click(function(){
    if(start===false){
      timerId = setInterval(updateTime,1000);
      console.log("timer started");
      start = true;
    };
  })

  $('#pause').click(function(){
    clearInterval(timerId);
    start = false;
  })

  $('#reset').click(function(){
    seconds = 0;
    timerId = null;
    clearInterval(timerId);
    $('#timer').html("Stop watch!");
    start = false;


  })




})
