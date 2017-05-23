

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}




var makeFakeMap = function(width, height){

  var mapArray=[];


  for(var i=0; i< height; i++){
        var tempArray= [];
    for (var j=0; j< width; j++){

      tempArray.push('A');
    }
      mapArray.push(tempArray);
  }

  var randomWidth= getRandomInt(0, width-1);
  var randomHeight= getRandomInt(0, height-1);

  mapArray[randomHeight][randomWidth]= 'X';

  console.log('[');
  for (var k=0; k< height; k++){
  console.log(mapArray[k]);
  }
  console.log('];');

}
