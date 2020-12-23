//define a funciton thats accepts string as paramter and converts into number
function convertStingToNumber(str) {
  console.log(`converting string ${str} to number ~~~~~`);
  let filteredString = "";

  //initialize a string which will conatain only valid items in it as defined rules
  //loop thorugh all the characters in the string
  for (let i = 0; i < str.length; i++) {
    //check if ita a digit or an +/- operator
    let isDigit = /^([0-9()+\-])$/.test(str[i]);

    // if its an digit append to final string that needs to be converted to number
    if (isDigit) filteredString += str[i];
    //if the character is not a digit or valid operator break through the loop and stop further processing
    else break;
  }

  //now filteredString consists of only valid string with digits and typecast it o number by just subtracting it with 0
  let convertedNumber = filteredString - 0;
  console.log(
    `converted number is ${convertedNumber} and the type is ${typeof convertedNumber}`
  );
}

//dataset to test
let strs = ["42", "0", "42a", "42a35", "abc42", "-42"];

//loop thorugh each string and call the convert function
strs.forEach((str) => convertStingToNumber(str));

//Limitation of above function
/*
if the string is a floating value like 4.77 then only 4 is returned as response, ideally it should take the ceil of the number(roundoff to next digit) and the output should be 5

*/

// **********2nd question in the assessment***********

/*
the probelem is the alert will display ""undefined""" on click of any button beacuse the btnNum is decalred as var and its under global execution context.
so after the loop is excuted the last value of btnNum will be 3 and the same value is used to access the prizes array  for any of the button  click  and prizes[3] doesn't exist
SOLUTION :  define btnNum as let (which is a block level scope) instead of using var
*/
