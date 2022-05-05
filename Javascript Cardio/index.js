// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

//Method 1
function reverseString(str) {
  const strArr = str.split("");
  strArr.reverse();
  //   console.log(strArr); // results - [ 'o', 'l', 'l', 'e', 'h' ]
  return strArr.join("");
  //   return str.split("").reverse().join(""); // will give the same result.
}

//Method 2
function reverseeString(str) {
  //   let answerStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     answerStr += str[i];
  //   }
  //   return answerStr;
  //////////////////////
  //   let answerStr = "";
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     answerStr = str[i] + answerStr;
  //   }
  //   return answerStr;
  //////////////////////
  //   let answerStr = "";
  //   for (let char of str) {
  //     answerStr = char + answerStr;
  //   }
  //   return answerStr;
  /////////////////////
  //   let answerStr = "";
  //   str.split("").forEach((char) => {
  //     answerStr = char + answerStr;
  //   });
  //   return answerStr;
  /////////////////////
  return str.split("").reduce((ansString, char) => char + ansString, "");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  //   let ansStr = "";
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     ansStr += str[i];
  //   }
  //   return ansStr === str;
  /////////////////////////////
  let ansStr = str.split("").reverse().join("");
  return ansStr === str;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt() {
  //   const ansString = int.toString().split("").reverse().join("");
  //   return parseInt(ansString) * Math.sign(int);
  /////////////////////////////

  let rev = 0;
  let int = 213;
  let lastDigit;
  while (int != 0) {
    lastDigit = int % 10;
    rev = rev * 10 + lastDigit;
    int = Math.floor(int / 10);
  }
  console.log("Reverse Number: " + rev);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  //   const strArr = str.toLowerCase().split(" ");
  //   for (let i = 0; i < strArr.length; i++) {
  //     strArr[i] =
  //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //   }
  //   return strArr.join(" ");
  ////////////////////////////////////
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
  ////////////////////////////////////
  //   return str.replace(/\b[a-z]/gi, (char) => {
  //     return char.toUpperCase();
  //   });
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  for (let char in charMap) {
    // debugger;
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

// Call Function
// const output =
// console.log(output);
fizzBuzz();

// reverseInt();
