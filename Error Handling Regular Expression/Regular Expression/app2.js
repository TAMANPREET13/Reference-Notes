// Metacharacter Symbols

let re;
//Literal Character
re = /hello/;
re = /hello/i;

//Metacharacters
re = /^h/i; // Must start with (^)
re = / world$/i; // Must end with ($)
re = /h.llo/i; //Matches any ONE character
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y/i; //Optional character(g,r,y are compulsory and e,a optional)
re = /gre?a?y\?/i; //Escape character

//Brackets [] - character sets
re = /gr[ae]y/i; //Must be an a or e
re = /[GF]ray/i; //Must be an G or F
re = /[^GF]ray/i; //Match anything except G OR F
re = /[A-Z]ray/; //Match any upper case letter
re = /[a-z]ray/; //Match any lower case letter
re = /[A-Za-z]ray/; //Match any letter
re = /[0-9]ray/; //Match any digit


//Braces {} - Quantifiers
re = /Hel{2}o/i; //Must occur exactly {m} amounts of times
re = /Hel{2,4}o/i; //Must occur in the range {m,n} times
re = /Hel{2,}o/i; //Must occur at least {m,}  times

//Paranthesis () - Grouping
re = /^([0-9]x){3}$/

//Shorthand Character classes
re = /\w/; //Word character - alphanumeric or _
re = /\w+/; //+ = one or more character
re = /\W/; //Non Word character(for special character)
re = /\d/; // match any digit one time
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non-digit
re = /\s/; // match white space character
re = /\S/; // match NON white space character
re = /Hell\b/i; //Word boundary

//Assertions
re = /x(?=y)/; //Matches x only if followed by y
re = /x(?=!y)/; //Matches x only if NOT followed by y


//String to match
const str = 'xasdsadasxy';

//Log results
const results = re.exec(str);
console.log(results);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not matches ${re.source}`);

    }
}
reTest(re, str)