// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  //Create filtered Array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  //Sort by length
  const sorted = wordArr.sort((a, b) => {
    return b.length - a.length;
  });
  // If multiple equal words, put in array
  const longestWordArr = sorted.filter((word) => {
    return word.length === sorted[0].length;
  });
  //Check if more then one array value
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

//SOLUTION-1
function chunkArray(arr, len) {
  //Init chunked arr
  const chunkedArr = [];
  //Set index
  let i = 0;

  //Loop while index is less than the array length
  while (i < arr.length) {
    //Slice out from the index to the index + the chunk length and push
    // onto chucked arr
    chunkedArr.push(arr.slice(i, i + len));
    // Increment by chunked length
    i += len;
  }
  return chunkedArr;
}

//SOLUTION-2
function chunkedArray(arr, len) {
  //Init chunked arr
  const chunkedArr = [];

  //loop through arr
  arr.forEach((val) => {
    //Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    //Check if last and if last length is equal to the chunk len
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

//SOLUTION-1
function flattenArray(arrays) {
  return arrays.reduce((a, b) => {
    return a.concat(b);
  });
}

//SOLUTION-2
function flattenArrayss(arrays) {
  return [].concat.apply([], arrays);
}

//SOLUTION-3
//Spread operator
// function add(a, b, c) {
//   return a + b + c;
// }
// const arr = [1, 2, 3];
// console.log(add(...arr));

function flattenArrayssss(arrays) {
  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

//Helper function
function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/[aeiou]/gi, (vowel) => {
    return vowel.toUpperCase();
  });

  return newStr;
}

// Call Function
const output = letterChanges("hello therezz");

console.log(output);
