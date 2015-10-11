//Practice for iterating over Arrays and Strings by revoving vowels
//Remove all the vowels from a passed sentence using various techniques.


//using regular expressions
function removeVowels(str){
	return str.replace(/[aeiou]/gi, '');
}