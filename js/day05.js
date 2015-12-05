"use strict";

function day05(input) {
	var nice1 = 0, nice2 = 0, lines = input.split("\n");
	for (var i = 0; i < lines.length; i++) {
		if (isNice1(lines[i])) nice1++;
		if (isNice2(lines[i])) nice2++;
	}
	return [nice1, nice2];
}

function isNice1(input) {
	return input.replace(/[^aeiou]/g, '').length >= 3 && input.match(/(.)\1/) && !input.match(/ab|cd|pq|xy/);
}
function isNice2(input) {
	return input.match(/(..).*\1/) && input.match(/(.).\1/);
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day05(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

