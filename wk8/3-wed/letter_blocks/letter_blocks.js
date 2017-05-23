sample =
[['B','O'],
['X','K'],
['D','Q'],
['C','P'],
['N','A'],
['G','T'],
['R','E'],
['T','G'],
['Q','D'],
['F','S'],
['J','W'],
['H','U'],
['V','I'],
['A','N'],
['E','R'],
['F','S'],
['L','Y'],
['P','C'],
['Z','M'],]

// cycle through pairs, if either matches remove both

var canMakeWord = function(word){

  var canMake = false;
  var wordArray = word.split('');
  var merged = [].concat.apply([], sample);

  for(var i=0; i<wordArray.length; i++){
    if(merged.indexOf(wordArray[i] != -1)){
      merged[merged.indexOf(wordArray[i])] = '';
      wordArray[i] = '';
    }
  }
  console.log(merged);
  console.log(wordArray);

  if (wordArray.join('') === ''){
    return true;
  }
  else {
    return false;
  }
}
