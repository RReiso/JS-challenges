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
