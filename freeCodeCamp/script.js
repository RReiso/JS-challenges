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



convertToRoman(3999);
