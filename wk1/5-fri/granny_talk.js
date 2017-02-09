

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var granny_talk = function(question){

  var random_year = getRandomInt(1930, 1950);

  if (question === "BYE"){
    return ("What's that honey, I didn't hear you...");
  }
  else if(question === question.toUpperCase()){
    return("NO, NOT SINCE " +random_year);
  }
  else{
    return ("SPEAK UP SONNY JIM");
  }
}


var grandpa_talk = function(question){

  grannyString = granny_talk(question);

  grannyArray = grannyString.split('');
  grandpaArray= [];
  vowelsC = ["A", "E", "I", "O", "U"];
  vowels = ["a", "e", "i", "o", "u", ];
  index = grannyArray.length;
  vowelIndex = 5;

  for(var i=0; i< index; i++){
    if(vowels.includes(grannyArray[i])){
      grandpaArray[i]= vowels[getRandomInt(0, 5)];
    }
    else if(vowelsC.includes(grannyArray[i])){
      grandpaArray[i]= vowelsC[getRandomInt(0, 5)];
    }
    else{
      grandpaArray[i]=grannyArray[i];
    }
  }
return (grandpaArray.join(''));
}
