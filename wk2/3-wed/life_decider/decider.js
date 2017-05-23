
//
// coinFlip= function(tailsCounter, headsCounter){}
// return counters /as an object or an array
//
//


var headsCounter= 0;
var tailsCounter= 0;



var coinFlip =function(){
//  var headsCounter;
//  var tailsCounter;

  var flip= Math.round(Math.random());

  if(headsCounter === 0 && tailsCounter === 0){
    document.getElementById('winner').textContent = '';
    document.getElementById('heads').textContent = 'Heads: 0';
    document.getElementById('tails').textContent = 'Tails: 0';

  }


  if (flip){
    console.log("heads");
    headsCounter++;
    document.getElementById('heads').textContent = 'Heads: ' + headsCounter;
  }
  else{
    console.log("tails");
    tailsCounter++;
    document.getElementById('tails').textContent = 'Tails: ' + tailsCounter;
  }

  if (headsCounter === 5){
    document.getElementById('winner').textContent = 'WINNER HEADS';
    console.log("WINNER heads");
    headsCounter= 0;
    tailsCounter= 0;
  }
  if(tailsCounter === 5){
    document.getElementById('winner').textContent = 'WINNER TAILS';
    console.log("WINNER tails");
    headsCounter= 0;
    tailsCounter= 0;
  }
}



var flipBtn = document.getElementById('flip');
flipBtn.addEventListener('click', coinFlip);
