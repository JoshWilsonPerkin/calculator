let previousString = '';
let currentString = '';
let divideIt = false;
let multiplyIt = false;
let subtractIt = false;
let addIt = false;

let screen = document.querySelector(".screen");
screen.textContent = '0';

function assignPreviousString() { previousString = screen.textContent };
function assignCurrentString() { currentString = screen.textContent };
function divideNums() { screen.textContent = (Number(previousString) / Number(currentString)).toString().substring(0, 11) };
function multiplyNums() { screen.textContent = (Number(previousString) * Number(currentString)).toString().substring(0, 11) };
function subtractNums() { screen.textContent = (Number(previousString) - Number(currentString)).toString().substring(0, 11) };
function addNums() { screen.textContent = (Number(previousString) + Number(currentString)).toString().substring(0, 11) };

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', function clearScreen() {
	screen.textContent = '0';
	previousString = '';
	currentString = '';
	let divideIt = false;
	let multiplyIt = false;
	let subtractIt = false;
	let addIt = false;
});

const plusMinusButton = document.querySelector(".plusMinus");
plusMinusButton.addEventListener('click', function plusMinus() { screen.textContent = Number(screen.textContent) * -1 });

const percentageButton = document.querySelector(".percentage");
percentageButton.addEventListener('click', function percentage() { screen.textContent = Number(screen.textContent) / 100 });

const divideButton = document.querySelector(".divide");
divideButton.addEventListener('click', function divide() {
	divideIt = true;

	if ((addIt === true) || (subtractIt === true) || (multiplyIt === true)) {
		if (addIt === true) {
			assignCurrentString();
			previousString = Number(previousString) + Number(currentString);
			screen.textContent = previousString;
			addIt = false;
		}
		else if (subtractIt === true) {
			assignCurrentString();
			previousString = Number(previousString) - Number(currentString);
			screen.textContent = previousString;
			subtractIt = false;
		}
		else {
			assignCurrentString();
			previousString = Number(previousString) * Number(currentString);
			screen.textContent = previousString;
			multiplyIt = false;
		}
	}
	else {
		if (previousString === '') {
			assignPreviousString();
			screen.textContent = '0';
		}
		else {
			assignCurrentString();
			previousString = Number(previousString) / Number(currentString);
			screen.textContent = previousString;
		}
	}
});

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener('click', function multiply() {
	multiplyIt = true;

	if ((addIt === true) || (subtractIt === true) || (divideIt === true)) {
		if (addIt === true) {
			assignCurrentString();
			previousString = Number(previousString) + Number(currentString);
			screen.textContent = previousString;
			addIt = false;
		}
		else if (subtractIt === true) {
			assignCurrentString();
			previousString = Number(previousString) - Number(currentString);
			screen.textContent = previousString;
			subtractIt = false;
		}
		else {
			assignCurrentString();
			previousString = Number(previousString) / Number(currentString);
			screen.textContent = previousString;
			divideIt = false;
		}
	}
	else {

		if (previousString === '') {
			assignPreviousString();
			screen.textContent = '0';
		}
		else {
			assignCurrentString();
			previousString = Number(previousString) * Number(currentString);
			screen.textContent = previousString;
		}
	}
});

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener('click', function subtract() {
	subtractIt = true;

	if ((addIt === true) || (divideIt === true) || (multiplyIt === true)) {
		if (addIt === true) {
			assignCurrentString();
			previousString = Number(previousString) + Number(currentString);
			screen.textContent = previousString;
			addIt = false;
		}
		else if (divideIt === true) {
			assignCurrentString();
			previousString = Number(previousString) / Number(currentString);
			screen.textContent = previousString;
			divideIt = false;
		}
		else {
			assignCurrentString();
			previousString = Number(previousString) * Number(currentString);
			screen.textContent = previousString;
			multiplyIt = false;
		}
	}
	else {
		if (previousString === '') {
			assignPreviousString();
			screen.textContent = '0';
		}
		else {
			assignCurrentString();
			previousString = Number(previousString) - Number(currentString);
			screen.textContent = previousString;
		}
	}
});

const addButton = document.querySelector(".add");
addButton.addEventListener('click', function add() {
	addIt = true;

	if ((subtractIt === true) || (divideIt === true) || (multiplyIt === true)) {
		if (subtractIt === true) {
			assignCurrentString();
			previousString = Number(previousString) - Number(currentString);
			screen.textContent = previousString;
			subtractIt = false;
		}
		else if (divideIt === true) {
			assignCurrentString();
			previousString = Number(previousString) / Number(currentString);
			screen.textContent = previousString;
			divideIt = false;
		}
		else {
			assignCurrentString();
			previousString = Number(previousString) * Number(currentString);
			screen.textContent = previousString;
			multiplyIt = false;
		}
	}
	else {
		if (previousString === '') {
			assignPreviousString();
			screen.textContent = '0';
		}
		else {
			assignCurrentString();
			previousString = Number(previousString) + Number(currentString);
			screen.textContent = previousString;
		}
	}
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener('click', function equal() {
	assignCurrentString();
	switch (true) {

		case divideIt:
			divideNums();
			divideIt = false;
			break;

		case multiplyIt:
			multiplyNums();
			multiplyIt = false;
			break;

		case subtractIt:
			subtractNums();
			subtractIt = false;
			break;

		case addIt:
			addNums();
			addIt = false;
			break;
	}
});

const nine = document.querySelector(".nine");
nine.addEventListener('click', function nine() {
	if ((screen.textContent === '0') || (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '9';
});

const eight = document.querySelector(".eight");
eight.addEventListener('click', function eight() {
	if ((screen.textContent === '0') || (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '8';
});

const seven = document.querySelector(".seven");
seven.addEventListener('click', function seven() {
	if ((screen.textContent === '0') || (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '7';
});

const six = document.querySelector(".six");
six.addEventListener('click', function six() {
	if ((screen.textContent === '0') || (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '6';
});

const five = document.querySelector(".five");
five.addEventListener('click', function five() {
	if ((screen.textContent === '0') || (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '5';
});

const four = document.querySelector(".four");
four.addEventListener('click', function four() {
	if ((screen.textContent === '0') || (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '4';
});

const three = document.querySelector(".three");
three.addEventListener('click', function three() {
	if ((screen.textContent === '0') || (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '3';
});

const two = document.querySelector(".two");
two.addEventListener('click', function two() {
	if ((screen.textContent === '0') || (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '2';
});

const one = document.querySelector(".one");
one.addEventListener('click', function one() {
	if ((screen.textContent === '0') || (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '1';
});

const zero = document.querySelector(".zero");
zero.addEventListener('click', function zero() {
	if ((screen.textContent === '0') && (currentString !== '')) { screen.textContent = '' }
	screen.textContent += '0';
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener('click', function decimal() {
	if (!screen.textContent.includes('.')) { screen.textContent += '.' };
	screen.textContent += ''
});