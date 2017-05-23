

//$(".secondhand").rotate(45);

var degrees = 0;

//$(".secondhand").css({'transform' : 'rotate('+ degrees +'deg)'})

// $(window).load(function() {
$(document).ready(function(){

    setInterval(moveSecondHand, 1000);

});

// function everySecond() {
//
// }



function moveSecondHand() {
    degrees += 6;

    if (degrees === 360){
      degrees = 0;
    }

    $(".secondhand").css({'transform' : 'rotate('+ degrees +'deg)'})
}
