"use strict";

function day12(input) {
	var result1 = eval(input.replace(/[^-\d]+/g, "+").replace(/[+]+$/, ""));
	
	function sum(object) {
		var keys = Object.keys(object);
		var result = 0;
		for (var i = 0; i < keys.length; i++) {
			var value = object[keys[i]];
			if (value == "red" && object.constructor == Object) return 0;
			switch(value.constructor) {
				case Number:
					result += value;
					break;
				case Array:
				case Object:
					result += sum(value);
					break;
			}
		}
		return result;
	}
	
	return [result1, sum(JSON.parse(input))];
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day12(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

