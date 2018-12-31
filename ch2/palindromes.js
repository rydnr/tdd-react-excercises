// palindromes.js
const prepareStr = str => str.toLowerCase().replace(/[^a-z]/g, '');

const isPalindrome = str => {
  const endIndex = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[endIndex - i]) return false;
  }
  return true;
};

const findLongestPalindrome = str => {
  const firstLetter = str[0];
  let lastIndex = str.lastIndexOf(firstLetter);
  while (lastIndex >= 2) {
    const candidate = str.substring(0, lastIndex + 1);
    if (isPalindrome(candidate)) {
      return candidate;
    }
    lastIndex = str.lastIndexOf(firstLetter, lastIndex - 1);
  }
  return null;
};

const palindromes = str => {
  const matches = [];
  let startIndex = 0;
  str = prepareStr(str);
  while (startIndex < str.length / 2) {
    const palindrome = findLongestPalindrome(str.substring(startIndex));
    if (palindrome) {
      matches.push(palindrome);
      startIndex += palindrome.length;
    } else {
      startIndex++;
    }
  }
  return matches;
};

palindromes.prepareStr = prepareStr;
palindromes.isPalindrome = isPalindrome;
palindromes.findLongestPalindrome = findLongestPalindrome;
module.exports = palindromes;
