// palindromes.test.js
const palindromes = require("../palindromes");

const {prepareStr, isPalindrome, findLongestPalindrome} = palindromes;

describe("prepareStr", () => {
  it("converts the given string to lowercase", () => {
    expect(prepareStr("aAaA")).toBe("aaaa");
  });

  it("removes all non-letter characters", () => {
    expect(prepareStr("To infinity, and beyond!")).toBe("toinfinityandbeyond");
  });
});

describe("isPalindrome()", () => {
  it("returns true when given a palindrome", () => {
    expect(isPalindrome("aba")).toBe(true);
    expect(isPalindrome("abba")).toBe(true);
  });
  it("returns false when given a non-palindrome", () => {
    expect(isPalindrome("abb")).toBe(false);
    expect(isPalindrome("aaba")).toBe(false);
  });
});

describe("findLongestPalindrome()", () => {
  it("returns the longest palindrome at the start of the string", () => {
    expect(findLongestPalindrome("wow")).toBe("wow");
    expect(findLongestPalindrome("ahha")).toBe("ahha");
    expect(findLongestPalindrome("hohoho")).toBe("hohoh");
  });

  it("returns null if no length 3+ palindrome starts the string", () => {
    expect(findLongestPalindrome("ww")).toBe(null);
    expect(findLongestPalindrome("abcda")).toBe(null);
    expect(findLongestPalindrome("bananarama")).toBe(null);
  });
});

describe("palindromes()", () => {
  it("correctly identifies one-word palindromes", () => {
    expect(palindromes("madam")).toEqual(["madam"]);
    expect(palindromes("racecar")).toEqual(["racecar"]);
  });

  it("returns an empty array when given no palindromes", () => {
    expect(palindromes("tic tac toe")).toEqual([]);
  });

  it("ignores casing", () => {
    expect(palindromes("WoW")).toEqual(["wow"]);
  });

  it("ignores punctuation", () => {
    expect(palindromes("yo, banana boy!")).toEqual(["yobananaboy"]);
  });

  it("detects multi-world palindromes", () => {
    expect(palindromes("A man, a plan, a canal, Panama")).toEqual([
      "amanaplanacanalpanama",
    ]);
  });
});
