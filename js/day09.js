"use strict";

function day09(input) {
	var lines = input.split("\n");
	var edge = [];
	var nodes = [];
	for (var i = 0; i < lines.length; i++) {
		var match = lines[i].match(/(.+) to (.+) = (\d+)/);
		if (match) {
			edge[[match[1], match[2]].sort().join(",")] = +match[3];
			if (nodes.indexOf(match[1]) < 0) nodes.push(match[1]);
			if (nodes.indexOf(match[2]) < 0) nodes.push(match[2]);
		}
	}

	function distance(nodes) {
		var distance = 0;
		for (var i = 0; i < nodes.length - 1;) {
			distance += edge[[nodes[i], nodes[++i]].sort().join(",")];
		}
		return distance;
	}

	var routes = permutations(nodes);
	
	var shortest = distance(routes[0]);
	var longest = shortest;
	for (var i = 1; i < routes.length; i++) {
		var current = distance(routes[i]);
		if (current < shortest) {
			shortest = current;
		}
		if (current > longest) {
			longest = current;
		}
	}
	
	return [shortest, longest];
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
	var result = day09(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

