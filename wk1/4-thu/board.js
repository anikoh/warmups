

var userSymbol = prompt("What symbol do you want to use?");

var userHeight = prompt("How many lines do you want the board to be?");


var boardString= '';
var lineString= '';
var firstLine= '';
var secondLine= '';


for(var i=0; i< userHeight; i++){
  if(i% 2 === 0){
    firstLine += userSymbol;
    secondLine += ' ';
  }
  else{
    firstLine += ' ';
    secondLine += userSymbol;

  }
}

for (var i=0; i< userHeight; i++){

  if(i% 2 === 0){
    boardString+= firstLine + "\n";
  }
  else{
    boardString+= secondLine + "\n";
  }
}


console.log(boardString);




// Zack's solution with arrays
//
// firstLine.push(' ');
// secondLine.push('#');
// using an array, create two lines at the same time,
// then assemble into the board in a separate for loop






//
// Version that prints all symbol board, no empty spaces
//
// var userSymbol = prompt("What symbol do you want to use?");
//
// var userHeight = prompt("How many lines do you want the board to be?");
//
//
// var boardString= '';
// var lineString= '';
//
//
//
// for(var i=0; i< userHeight; i++){
//
//     lineString+= userSymbol;
// }
//
// for (var i=0; i< userHeight; i++){
//
//     boardString+= lineString + "\n";
// }
//
//
// console.log(boardString);
