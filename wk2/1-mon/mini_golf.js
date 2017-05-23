
var totalScores = function(scoresArray){

var index = scoresArray.length;

for(var i=0; i< index; i++){
  var counter = 0;
  for(var j=0; j< 9; j++){
    counter += scoresArray[i].scores[j];
  }
  console.log("The score for " + scoresArray[i].player + " is " + counter);
}

}





var compareCoursePar = function(scoresArray, coursePar){

  var index = scoresArray.length;

  for(var i=0; i< index; i++){
    var counter = 0;
    for(var j=0; j< 9; j++){
      counter += scoresArray[i].scores[j]-coursePar.scores[j];
    }
    console.log("The score over par for " + scoresArray[i].player + " is " + counter);
  }


}


var fishBet = function (Bob, Jimbo, coursePar){

  var total=0;

  for(var j=0; j< 9; j++){
    total += Bob.scores[j]- coursePar.scores[j];
  }
  for(var j=0; j< 9; j++){
    total += Jimbo.scores[j]- coursePar.scores[j];
  }
  console.log("Fish won $" + total);
}



var allScoreFunctions = function(){

  var coursePar = {
    player: "par",
    scores: [3, 4, 5, 5, 3, 3, 4, 3, 5]
  }

  var scoresArray = [
    {
    player: "Bob",
    scores: [3, 2, 6, 11, 9, 2, 6, 9, 10]
  },
  {
    player: "Jimbo",
    scores: [5, 12, 9, 22, 13, 7, 16, 10, 11]
  },
  {
    player: "Fish",
    scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
  }
  ]

  totalScores(scoresArray);

  compareCoursePar(scoresArray, coursePar);

  fishBet(scoresArray[0], scoresArray[1], coursePar);

}
