// Given a string s consisting of words and spaces, return the length of the last word in the string.


function lengthOfLastWord(s){

 const word = s.trim().split(" ")
 const lastword = word[word.length-1]

 return lastword.length
}


console.log(lengthOfLastWord("Hello World")) // Output: 5
console.log(lengthOfLastWord(" fly me   to   the moon ")) // Output: 4







// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.


function isAnagram(s,t){

    
}