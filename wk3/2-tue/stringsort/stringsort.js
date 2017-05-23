
var stringSort = function(string1, string2){


var stringArray = string1.split("").concat(string2.split(""));

var resultArray =[];

for(var i=0; i< stringArray.length; i++){
  if (!resultArray.includes(stringArray[i])){
    resultArray.push(stringArray[i]);
  }
}

resultArray.sort();

resultString = resultArray.join('');
console.log(resultString);

}
