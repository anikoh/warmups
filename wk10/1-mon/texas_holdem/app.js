
var deck = ['1S', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS',
            '1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC',
            '1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD',
            '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH'];







var randomCard = function(){
  return Math.floor(Math.random() * deck.length);
}





var deal = function(){


  var playerHand = [];

  var CPUhands = [];

  var flop = [];

  var CPUCounter = prompt("How many players (2-8)?");

  for(i=0; i<2; i++){
    playerHand = playerHand.concat(deck.splice(randomCard(), 1));
  }

  for(j=0; j<CPUCounter; j++){
    var CPUhand = [];
    for(i=0; i<2; i++){
      CPUhand = CPUhand.concat(deck.splice(randomCard(), 1));
    //  deckCounter--;
    }
    CPUhands.push(CPUhand);
  }

  for(i=0; i<2; i++){
    flop = flop.concat(deck.splice(randomCard(), 1));
  }

  var turn = deck.splice(randomCard(), 1);

  var river= deck.splice(randomCard(), 1);

  for(i=0; i<3; i++){
    deck.splice(randomCard(), 1);
  }


  console.log("Your hand: ", playerHand.join(", "));


  console.log("CPU's hands: ", CPUhands);
  console.log("flop: ", flop.join(", "));
  console.log("turn: ", turn);
  console.log("river", river);

}
