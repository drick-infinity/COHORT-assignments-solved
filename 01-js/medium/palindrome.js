/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {
  // Convert the string to lowercase to handle case-insensitivity
  str = str.toLowerCase();

  // Initialize two pointers: one at the start and one at the end
  let left = 0;
  let right = str.length - 1;

  // Loop through the string, skipping non-alphanumeric characters
  while (left < right) {
      // Skip non-alphanumeric characters by checking if the character is a letter or a number
      if (!isAlphanumeric(str[left])) {
          left++;
      } else if (!isAlphanumeric(str[right])) {
          right--;
      } else {
          // Compare characters at the two pointers
          if (str[left] !== str[right]) {
              return false;
          }
          left++;
          right--;
      }
  }

  return true;
}

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}
console.log(isPalindrome("A man, a plan, a canal, Panama!"));
module.exports = isPalindrome;


