var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  let queue = [beginWord];
  let wordPath = { [beginWord]: [beginWord] };

  while (wordPath) {
    word = queue.shift();

    if (word === endWord) return wordPath[word];
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < 26; j++) {
        const newWord =
          word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

        if (wordSet.has(newWord)) {
          wordSet.delete(newWord);
          queue.push(newWord);
          const path = wordPath[word];
          let newPath = [...path];
          newPath.push(newWord);
          wordPath[newWord] = newPath;
          console.log(wordPath);
        }
      }
    }
  }
  return null;
};

start = "tot";
end = "kid";
words = ["tod", "tid", "tim", "tom", "kim", "kid"];
console.log(ladderLength(start, end, words));

start = "dog";
end = "cat";
dictionary = ["dot", "dop", "dat", "opi", "cat"];
console.log(ladderLength(start, end, dictionary));
// ["dog", "dot", "dat", "cat"]

start = "dog";
end = "cat";
dictionary = ["dot", "tod", "dat", "dar"];
console.log(ladderLength(start, end, dictionary));
