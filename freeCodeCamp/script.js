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
