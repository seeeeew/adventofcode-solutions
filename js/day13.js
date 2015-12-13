"use strict";

function day13(input) {
	var lines = input.split("\n");
	var edge = [];
	var nodes = [];
	for (var i = 0; i < lines.length; i++) {
		var match = lines[i].match(/(.+) would (gain|lose) (\d+) happiness units by sitting next to (.+)\./);
		if (match) {
			edge[[match[1], match[4]].join(",")] = match[2] == "gain" ? +match[3] : -match[3];
			if (nodes.indexOf(match[1]) < 0) nodes.push(match[1]);
			if (nodes.indexOf(match[4]) < 0) nodes.push(match[4]);
		}
	}

	function happiness(nodes) {
		var happiness = 0;
		for (var i = 0; i < nodes.length; i++) {
			happiness += edge[[nodes[i], nodes[(i + 1) % nodes.length]].join(",")] || 0;
			happiness += edge[[nodes[i], nodes[(i - 1 + nodes.length) % nodes.length]].join(",")] || 0;
		}
		return happiness;
	}

	var arrangements = permutations(nodes);
	
	var happiest = happiness(arrangements[0]);
	for (var i = 1; i < arrangements.length; i++) {
		var current = happiness(arrangements[i]);
		if (current > happiest) {
			happiest = current;
		}
	}
	
	var result1 = happiest;
	nodes.push("I");

	arrangements = permutations(nodes);
	
	happiest = happiness(arrangements[0]);
	for (var i = 1; i < arrangements.length; i++) {
		var current = happiness(arrangements[i]);
		if (current > happiest) {
			happiest = current;
		}
	}
		
	return [result1, happiest];
}

function permutations(array) {
	if (array.length <= 1) {
		return array;
	} else {
		var result = [];
		for (var i = 0; i < array.length; i++) {
			var remaining = array.slice(0);
			remaining.splice(i, 1);
			var subpermutations = permutations(remaining);
			for (var j = 0; j < subpermutations.length; j++) {
				result.push([array[i]].concat(subpermutations[j]));
			}
		}
		return result;
	}
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day13(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

