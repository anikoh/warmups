function findUnique(numbers){

  unique = [];

  for(i=0; i< numbers.length; i++){
    if(unique.indexOf(numbers[i]) === -1){
      unique.push(numbers[i]);
    }
  }
  return unique;
}

// Number.isInteger(Math.sqrt(16))

function getSquares(numbers){
  squares = [];

  for(i=0; i< numbers.length; i++){
    if (Math.sqrt(numbers[i]) % 1 === 0  ){
      squares.push(numbers[i]);
    }
  }
  uniqueSquares = findUnique(squares);

  return uniqueSquares.sort(function(a, b){return a-b});
}
