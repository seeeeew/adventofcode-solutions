"use strict";

function day14(input) {
	var t = 2503;
	var lines = input.split("\n");
	var reindeers = {};
	for (var i = 0; i < lines.length; i++) {
		var match = lines[i].match(/(.+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds\./);
		if (match) {
			reindeers[match[1]] = {
				speed: +match[2],
				flight: +match[3],
				rest: +match[4],
				points: 0
			}
		}
	}
	reindeers.names = Object.keys(reindeers);
	for (var s = 1; s <= t; s++) {
		var farthest = 0;
		var leading = [];
		for (var r = 0; r < reindeers.names.length; r++) {
			var name = reindeers.names[r];
			var traveled = distance(reindeers[name], s);
			if (traveled > farthest) {
				farthest = traveled;
				leading = [name];
			} else if (traveled == farthest) {
				leading.push(name);
			}
		}
		for (var l = 0; l < leading.length; l++) {
			reindeers[leading[l]].points++;
		}
	}
	var winner = 0;
	for (var r = 0; r < reindeers.names.length; r++) {
		var points = reindeers[reindeers.names[r]].points;
		if (points > winner) winner = points;
	}
	return [farthest, winner];
}

function distance(reindeer, t) {
	return (Math.floor(t / (reindeer.flight + reindeer.rest)) * reindeer.flight + Math.min(t % (reindeer.flight + reindeer.rest), reindeer.flight)) * reindeer.speed;
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day14(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

