"use strict";

function day16(input) {
	var lines = input.split("\n");
	var profile = {
		children: 3,
		cats: 7,
		samoyeds: 2,
		pomeranians: 3,
		akitas: 0,
		vizslas: 0,
		goldfish: 5,
		trees: 3,
		cars: 2,
		perfumes: 1
	};
	var found;
	var found_real;
	for (var i = 0; i < lines.length && !(found && found_real); i++) {
		var match = lines[i].match(/Sue (\d+): (.*)/);
		if (match) {
			var hints = match[2].split(", ");
			if (!found) {
				found = +match[1];
				for (var h = 0; h < hints.length; h++) {
					var hint = hints[h].split(": ");
					if (hint[1] != profile[hint[0]]) {
						found = false;
						break;
					}
				}
			}
			if (!found_real) {
				found_real = +match[1];
				for (var h = 0; h < hints.length; h++) {
					var hint = hints[h].split(": ");
					var cond;
					switch(hint[0]) {
						case "cats":
						case "trees":
							cond = hint[1] > profile[hint[0]];
							break;
						case "pomeranians":
						case "goldfish":
							cond = hint[1] < profile[hint[0]];
							break;
						default:
							cond = hint[1] == profile[hint[0]];
							break;
					}
					if (!cond) {
						found_real = false;
						break;
					}
				}
			}
		}
	}

	return [found, found_real];
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day16(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

