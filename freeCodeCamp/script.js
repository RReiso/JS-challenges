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
function convertToRoman(num) {
  const symbols = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  }
  let keys = Object.keys(symbols);
  
  let roman=""

  const numString = num.toString()
  for (let i=0; i<numString.length;i++){
    let remainder = num % (10 *Math.pow(10,i));
    let number = remainder - remainder % (10 *Math.pow(10,i-1))
    let power = 10 *Math.pow(10,i-1);
    console.log(10 *Math.pow(10,i-1));
    createRoman(number,power );

  }
  }




convertToRoman(3999);
