"use strict";

function day01(input, end) {
	var floor = 0;
	for (var i = 0; i < input.length; i++) {
		if (floor === end) return i;
		if (input[i] == "(") floor++;
		if (input[i] == ")") floor--;
	}
	return floor;
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value;
	document.getElementById("solution1").value = day01(input);
	document.getElementById("solution2").value = day01(input, -1);
}

