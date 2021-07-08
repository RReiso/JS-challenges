//Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
//and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				console.log([i, j]);
			}
		}
	}
};
twoSum([2, 11, 7, 15], 22);

//914. X of a Kind in a Deck of Cards
// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2
// such that it is possible to split the entire deck
// into 1 or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.

var hasGroupsSizeX = function (deck) {
	if (deck.length < 2) {
		return false;
	}
	//object to store cards and the number of occurances
	let cards = {};
	for (let i = 0; i < deck.length; i++) {
		let card = deck[i];
		cards[card] = cards[card] ? cards[card] + 1 : 1;
	}
	//creating an array of cards object values
	let cardCounts = Object.values(cards);
	let result = cardCounts[0];
	for (let i = 1; i < cardCounts.length; i++) {
		result = gcd(cardCounts[i], result);
		if (result === 1) {
			return false;
		}
	}
	return true;
};

function gcd(a, b) {
	if (a === 0) return b;
	return gcd(b % a, a);
}

hasGroupsSizeX([1]);

//Given numBottles full water bottles, you can exchange numExchange
//empty water bottles for one full water bottle.
//The operation of drinking a full water bottle turns it into an empty bottle.
//Return the maximum number of water bottles you can drink.
var numWaterBottles = function (numBottles, numExchange) {
	let result = numBottles;
	do {
		// how many new bottles to drink:
		let bottles = Math.floor(numBottles / numExchange);
		result = result + bottles;
		//how many empty bottles left:
		let eB = numBottles % numExchange;
		//new number of empty bottles:
		numBottles = bottles + eB;
	} while (Math.floor(numBottles / numExchange) !== 0);
	return result;
};
numWaterBottles(9, 3);

//Running Sum of 1d Array
//Given an array nums. We define a running sum of an array as
//runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.
var runningSum = function (nums) {
	let output = [];
	let accumulator = 0;
	nums.forEach((element) => {
		accumulator = accumulator + element;
		output.push(accumulator);
	});
	console.log(output);
	return output;
};

runningSum([1, 2, 3, 4]);

//Defanging an IP Address
//Given a valid (IPv4) IP address, return a defanged version of that IP address.
//A defanged IP address replaces every period "." with "[.]".

var defangIPaddr = function (address) {
	return address.split(".").join("[.]");
};

defangIPaddr("1.1.1.1");

//Kids With the Greatest Number of Candies
//Given the array candies and the integer extraCandies,
//where candies[i] represents the number of candies that the ith kid has.
//For each kid check if there is a way to distribute extraCandies
// among the kids such that he or she can have the greatest number
// of candies among them. Notice that multiple kids
// can have the greatest number of candies.
var kidsWithCandies = function (candies, extraCandies) {
	const largest = Math.max.apply(0, candies);
	const result = [];
	candies.forEach((element) => {
		if (element + extraCandies >= largest) {
			result.push(true);
		} else {
			result.push(false);
		}
	});
	console.log(largest);
	console.log(result);
	return result;
};

kidsWithCandies([2, 3, 5, 1, 3], 3);

//Excel Sheet Column Title
//Given an integer columnNumber, return its corresponding column title
//as it appears in an Excel sheet.
var convertToTitle = function (columnNumber) {
	let result = "";
	let ascii;
	do {
		let remainder = columnNumber % 26;
		let a = Math.floor(columnNumber / 26);

		if (remainder === 0) {
			columnNumber = a - 1;
			ascii = 90;
		} else {
			columnNumber = a;
			ascii = remainder + 64;
		}
		result = String.fromCharCode(ascii) + result;
	} while (columnNumber > 0);
	console.log(result);
	return result;
};
convertToTitle(1000);

// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function (nums) { //runtime 76 ms
	numLength = nums.length;
	counter = 0;
	for (let i = 0; i < numLength; i++) {
		if (nums[counter] === 0) {
			nums.splice(counter, 1);
			nums.push(0);
			counter--;
		}
		counter++;
	}
	console.log(nums);
	return nums;
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
moveZeroes([1]);
