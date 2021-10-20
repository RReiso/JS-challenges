var ladderLength = function (beginWord, endWord, wordList) {
	const wordSet = new Set(wordList);
	let queue = [beginWord];
	res = [beginWord];

	while (queue.length) {
		let found = false;
		word = queue.shift();
		console.log(word);
		console.log(res);
		if (word === endWord) return res;
		for (let i = 0; i < word.length; i++) {
			for (let j = 0; j < 26; j++) {
				const newWord =
					word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

				if (wordSet.has(newWord)) {
					wordSet.delete(newWord);
					console.log(wordSet);
					res.push(newWord);
					console.log(res);
					queue.push(newWord);
					found = true;
				}
			}
		}
		if (found === false) {
			idx = res.indexOf(word);
			res.splice(idx, 1);
		}
	}
	return null;
};

start = "tot";
end = "kid";
words = ["tod", "tid", "tim", "tom", "kim", "kid"];
console.log(ladderLength(start, end, words));
// ["tot", "tod", "tid", "kid"];
