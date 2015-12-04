"use strict";

function day04(input) {
	var i = 0, a5, a6;
	while (!a5 || !a6) {
		var hash = md5(input + i)
		if (hash.substr(0, 5) === "00000" && !a5) a5 = i;
		if (hash.substr(0, 6) === "000000" && !a6) a6 = i;
		i++;
	}
	return [a5, a6];
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value;
	var result = day04(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

