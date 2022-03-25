const vowelCount = (str)=>{
   const vowels = "aeiou".split("");
   return str.split("").reduce((acc,char) => {
     return vowels.includes(char.toLowerCase()) ? acc + 1 : acc
   },0)
   // return str.toLowerCase().split('').filter(item => 'aeiou'.split('').includes(item)).length;
  }

  // Time- O(n)
  // Space- O(1)
