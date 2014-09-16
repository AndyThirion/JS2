// Prompt user for a word and report back info in a single alert box about the word
// they entered.
// Use variables and string concatenation to combine string values to be alerted
// 
// Report: 
// 		The word they entered verbatim (alert(word))
// 		How many characters are in it (string.length)
// 		What's the third character in string (charAt or string.split into array[2])
// 		The word in lowercase (.toLowerCase)
// 		The word in uppercase (.toUpperCase)
// 		The word in a sentence (string concatenation)
// 		The subword from the 2nd to the 4th character (.substring[1,4])

// Get word choice from user
var word = prompt("Which word are we working with?");

// Return the alert with word info

alert("You entered: " + word +
	"\nThere are " + word.length + " characters in the word" +
	"\nThe third character is \'" + word.charAt(2) + ".\'" +
	"\nLowercase: " + word.toLowerCase() +
	"\nUppercase: " + word.toUpperCase() +
	"\nExample: " + word + " is a word. What were you expecting?" +
	"\nSubword: " + word.substring(1, 4)
	);