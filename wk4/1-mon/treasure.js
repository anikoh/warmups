

var treasureFinder = function(map, key){

  var height = map.length;
  var length = map[0].length;
  var treasureCoord = [];

    for(var i=0; i< height; i++){
      for(var j=0; j< length; j++){
        if(map[i][j] === key){
          treasureCoord.push(i);
          treasureCoord.push(j);
        }
      }
    }

    // handles no key found as well as multiple keys found
  if(treasureCoord.length != 2){
      console.log('that doesnt belong in a museum!');
  }
  else{
    console.log(treasureCoord);
  }

}
