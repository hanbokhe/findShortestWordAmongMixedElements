function findShortestWordAmongMixedElements(arr) {
  // your code here
  if (arr.length === 0)
  {
      return '';
  }
  var shortestWord = '';
  for (var i = 0; i< arr.length; i++)
  {
      if (typeof arr[i] === 'string')
      {
          if (shortestWord === '')
          {
              shortestWord = arr[i];
          }
          if (arr[i].length < shortestWord.length){
              shortestWord = arr[i];
          }
      }
  }
  return shortestWord;
}
