//Palindrome Checker
function palindrome(str) {
	str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let strReverse = str.split("").reverse().join("")

  for (let i = 0; i <str.length; i++){
    if (str[i]!==strReverse[i]){
      return false;
    }
  }
	return true;
}

palindrome("1 eye for of 1 eye.")


//Roman Numeral Converter
function ToRoman(num) {
  const symbols = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  }
  let keys = Object.keys(symbols);
  
  let roman=""

  const numString = num.toString()
  for (let i=0; i<numString.length;i++){
    let remainder = num % (10 *Math.pow(10,i));
    let number = remainder - remainder % (10 *Math.pow(10,i-1))
  
    let power = 10 *Math.pow(10,i-1);
  
    createRoman(number,power );

  }

  function createRoman(number,power){
    if (number === 0){
      return
    }
  
    for (let i=0; i<keys.length;i++)
    {
      if (number <= keys[i]){
       
        
        if (number == keys[i]){
          roman = symbols[keys[i]]+roman;
          return
        }else if (keys[i]==4*power){
         
          for (let j =0; j<number/power;j++){
            roman = symbols[keys[i-1]] + roman
          }
          return;
        }else{
         
          for (let j =0; j<number/power-5;j++){
            roman = symbols[keys[i-3]] + roman
          }
           roman = symbols[keys[i-1]] + roman
          return;
        }
    }else if (number>1000){
      for (let j =0; j<number/power;j++){
     
            roman = "M" + roman
          }
          return;
    }
    }
      
       
    
  }
         console.log("atb",roman);
}


ToRoman(3999);


//Second (better) version of Roman Numeral Converter:
function convertToRoman(num) {

  const ones = ["I","II","III","IV","V","VI","VII","VIII","IX"];
  const tens = ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
  const hundreds = ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  const thousands = ["M","MM","MMM"];

  
  let result=""
  const numString = num.toString();

  for (let i=0; i<numString.length; i++){
    let power = numString.length-1; //power of 10
    let divisor = (Math.pow(10,power-i)); //divisor will decrease 1000,100,10,1.
    let quotient = Math.floor(num/divisor);
  
    createRoman(quotient,divisor);

    num = num - quotient*divisor;
  }

  function createRoman(number,placeValue){
    if (number === 0){
      return;
    }
    switch(placeValue) {
  case 1:
    result = result + ones[number-1]
    break;
  case 10:
    result = result + tens[number-1]
    break;
  case 100:
    result = result + hundreds[number-1]
    break;
  default:
    result = result + thousands[number-1]
}
  }

  console.log(result)
  return result;
}

convertToRoman(2014);


//Caesars Cipher
function rot13(str) {

//check if last char is a punctuation character:
let lastChar=""
if (!!str.match(/[.,:!?]$/)){
  lastChar = str.slice(-1);
  str = str.slice(0, -1) //remove last char from string
};

const arrayOfWords = str.split(" ");
const arrayOfResult=[];

arrayOfWords.forEach(word=>{
  let result = "";

  for (let i=0; i<word.length; i++){
    let asciiCode = word[i].charCodeAt();
    let newCode = asciiCode > 77? asciiCode - 13 : asciiCode + 13;
    result = result + String.fromCharCode(newCode);
  }
  arrayOfResult.push(result);
})

str = arrayOfResult.join(" ") + lastChar;
return str;
}

rot13("SERR PBQR PNZC!");

//Telephone Number Validator
function telephoneCheck(str) {

  str = str.replace(/\s/g, '');//remove spaces
  var regex = /^1?(\d{3}|\(\d{3}\))[-]?\d{3}[-]?\d{4}$/;
  var bool = regex.test(str);

  console.log(bool);
  return bool;
}

telephoneCheck("1 555)555-5555");
