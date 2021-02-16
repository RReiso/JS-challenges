// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// Note:  When prompted, my solution assumes user enters only proper HEX or RGB values
// in format #ff0b1a or 255, 11, 26

function convertColor() {
	const color = prompt("Enter HEX or RGB color: ");
	const convertedColor = color.length === 7 ? hexToRgb(color) : rgbToHex(color);
	alert(convertedColor);
}

function hexToRgb(hexColorString) {
	// creating new array for storing the rgb numbers
	let outputArray = [];

	for (let i = 1; i < 6; i = i + 2) {
		// converting each two characters of the string from hex (base 16) number to base 10 number
		let rgbNumber = parseInt(hexColorString.substring(i, i + 2), 16);
		outputArray.push(rgbNumber);
	}
	return outputArray;
}

function rgbToHex(rgbColorString) {
	// splitting rgbColorString into sunbstrings of numbers, storing them in array
	const rgbArray = rgbColorString.split(",");

	// creating a string for the resulting hex color
	let hexColor = "#";

	for (let i = 0; i < 3; i++) {
		// converting each number from the string to hex number
		let hexNumber = Number(rgbArray[i]).toString(16);
		hexNumber = hexNumber.length == 1 ? "0" + hexNumber : hexNumber;
		hexColor = hexColor + hexNumber;
	}
	return hexColor;
}

convertColor();
