

var checkPalindrome = function(word){

  var lowerCaseWord = word.toLowerCase();
  var noSpaces = lowerCaseWord.replace(" ", "");
  var forwardString = noSpaces.replace(/.,;?!/g, "");

  var index= forwardString.length;
  var tempString = forwardString.slice(0, index);
  var reverseString = tempString.split("").reverse().join("");


  var isPalindrome;

  if(forwardString === reverseString){
    isPalindrome = true;
  }
  else{
    isPalindrome = false;
  }

//debugger;

return isPalindrome;

}
