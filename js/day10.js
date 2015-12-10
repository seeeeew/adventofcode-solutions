"use strict";

function day10(input) {
	var result1;
	for (var i = 0; i < 50; i++) {
		if (i == 40) result1 = input.length;
		input = input.replace(/((\d)\2*)/g, function(match0, match1, match2) {
			return match0.length + match2;
		});
	}
	return [result1, input.length];
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day10(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

