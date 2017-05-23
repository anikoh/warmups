

var checkPalindrome = function(word){


//turn word all lower case first
//remove spaces

// string of the alphabet, use filter to remove anything that
// doesn't match that
// replace(/characterlist/g, "")
// eg replace(/.,!/g, "");    \s for space

// use splice() then reverse() to create a copy and reverse it
// doesn't need to use arrays at all

  var lowerCaseWord = word.toLowerCase();
  var noSpaces = lowerCaseWord.replace(" ", "");
  var noCommas = noSpaces.replace(",", "");

  var wordArray= noCommas.split("");
  index= wordArray.length;

  //reverseArray= wordArray.reverse();
  var reverseArray=[];

  for(var i=0; i<index; i++){
    reverseArray[i]= wordArray[index-i-1];
  }

  //debugger;

  var isPalindrome= true;

// if I turn the arrays back to string I can compare
// whether they're equal without a for loop

  for(var j=0; j< index; j++){
    if (reverseArray[j] !== wordArray[j]){
      isPalindrome = false;
    }
  }

//debugger;

return isPalindrome;

}
//

// debugger;
//
//   if(reverseArray === wordArray){
//     return true;
// //    console.log(word + " is a palindrome");
//   }
//   else{
//     return false;
//   //  console.log(word + " is not a palindrome");
//   }
