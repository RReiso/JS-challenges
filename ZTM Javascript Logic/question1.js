// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove)
//should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

const givenArray = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

function cleanArray(array) {
	//making a copy of the input array so the function input is not changed
	let workingArray = [...array];

	// sorting in ascending order
	workingArray.sort((a, b) => a - b);

	//empty array for the resulting output array
	const outputArray = [];

	while (workingArray.length > 0) {
		//creating array with duplicate elements
		let innerArray = workingArray.filter(
			(number) => number === workingArray[0]
		);

		// pushing single element into output array or pushing a subarray with duplicate elements
		if (innerArray.length === 1) {
			outputArray.push(innerArray[0]);
		} else {
			outputArray.push(innerArray);
		}

		// deleting the pushed elements from the array
		for (let i = 0; i < innerArray.length; i++) {
			workingArray.shift();
		}
	}
	return outputArray;
}

console.log(cleanArray(givenArray)); // [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
