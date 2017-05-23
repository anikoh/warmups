
var decodeMessage = function(message){

  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  var alphabetArray = alphabet.toUpperCase().split("");

  var messageArray = message.split("");

  var decodedArray = [];

  var index = messageArray.length;

  var count = alphabetArray.length;

  console.log(messageArray);


  for(var i=0; i< index; i++){
    var letterIndex;
    if(messageArray[i] === ' '){
      decodedArray[i] = ' ';
    }
    else if(messageArray[i] === '.'){
      decodedArray[i] = '.';
    }
    else if(messageArray[i] === ','){
      decodedArray[i] = ',';
    }
    else{
      for(var j=0; j< count; j++){
        if(alphabetArray[j] === messageArray[i]){
          letterIndex = j;
        }
      }
      if(letterIndex- 3 < 0){
        decodedArray[i] = alphabetArray[count-(letterIndex+1)];
      }
      else{
        decodedArray[i] = alphabetArray[letterIndex-3];
      }
    }
  }

  console.log(decodedArray.join(''));

}

//
// using ascii codes you can -3 from each index number, then shift it back to text
// .charCodeAt(index)
// String.fromCharCode(index)
//
