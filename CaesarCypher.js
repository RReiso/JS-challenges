const CaesarCypher = (str, shift) => {
  const alph = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = "";

  for (const char of str) {
    let idx = alph.indexOf(char);

    if (idx === -1) {
      res += char;
    } else {
      let newCharIdx = (idx + shift) % 26;
      res += alph[newCharIdx];
    }
  }
  return res;
};

// Time - O(n*m(because of indexOf))=O(n*26)=O(n) 
//space - O(n) - result string as long as Input string
