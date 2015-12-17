"use strict";

function day17(input) {
	var containers = input.split("\n");
	var eggnog = 150;
	var combinations = 0;
	var containersMin = containers.length;
	var combinationsMin = 0;
	
	function fill(containers, eggnog, used) {
		used++;
		for (var i = 0; i < containers.length; i++) {
			if (containers[i] == eggnog) {
				combinations++;
				if (used == containersMin) {
					combinationsMin++;
				}
				if (used < containersMin) {
					containersMin = used;
					combinationsMin = 1;
				}
			}
			if (containers[i] < eggnog) fill(containers.slice(i+1), eggnog - containers[i], used);
		}
	}
	fill(containers, eggnog, 0);
	
	return [combinations, combinationsMin];
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day17(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

