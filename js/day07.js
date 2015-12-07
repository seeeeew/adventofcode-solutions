"use strict";

function day07(input) {
	var wires = {};
	var lines = input.split("\n");
	for (var i = 0; i < lines.length; i++) {
		var match = lines[i].match(/^(?:(?:(\d+|[a-z]+) )?(AND|OR|[LR]SHIFT|NOT) )?(\d+|[a-z]+) -> ([a-z]+)$/);
		if (match) {
			wires[match[4]] = {
				left: match[1],
				operator: match[2],
				right: match[3],
			}
		}
	}
	
	function signal(wire) {
		var match = wires[wire];
		var result = +match || +wire;
		if (!isNaN(result)) {
			return result;
		}
		if (!match.operator) {
			result = signal(match.right);
		} else {
			switch(match.operator) {
				case "AND":
					result = signal(match.left) & signal(match.right);
					break;
				case "OR":
					result = signal(match.left) | signal(match.right);
					break;
				case "LSHIFT":
					result = (signal(match.left) << signal(match.right)) % 65536;
					break;
				case "RSHIFT":
					result = signal(match.left) >> signal(match.right);
					break;
				case "NOT":
					result = signal(match.right) ^ 65535;
					break;
			}
		}
		if (result) wires[wire] = result;
		return result;
	}
	
	return signal("a");
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result1 = day07(input);
	var result2 = day07(input + "\n" + result1 + " -> b");
	document.getElementById("solution1").value = result1;
	document.getElementById("solution2").value = result2;
}

