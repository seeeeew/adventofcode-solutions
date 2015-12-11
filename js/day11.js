"use strict";

function day11(input) {
	
	function increase(input) {
		for (var i = input.length - 1; i >= 0; i--) {
			var char = input.charCodeAt(i);
			var newchar = String.fromCharCode((char - 96) % 26 + 97);
			input = input.slice(0, i) + newchar + input.slice(i+1, input.length);
			if (newchar != "a") break;
		}
		return input;
	}
	
	function valid(input) {
		var valid = false;
		for (var i = 1; i < input.length - 2; i++) {
			var char1 = input.charCodeAt(i);
			var char2 = input.charCodeAt(i+1);
			var char3 = input.charCodeAt(i+2);
			if (char1+1 == char2 && char1+2 == char3) valid = true;
		}
		return valid && input.match(/(.)\1.*(.)\2/) && !input.match(/[ilo]/);
	}
	
	do {
		input = increase(input);
	} while (!valid(input));
	
	return input;
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result1 = day11(input);
	var result2 = day11(result1);
	document.getElementById("solution1").value = result1;
	document.getElementById("solution2").value = result2;
}

