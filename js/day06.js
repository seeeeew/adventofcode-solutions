"use strict";

function day06(input) {
	var grid1 = initGrid(1000, 1000);
	var grid2 = initGrid(1000, 1000);
	var lines = input.split("\n");
	var on = 0;
	for (var i = 0; i < lines.length; i++) {
		var match = lines[i].match(/(toggle|turn (?:on|off)) (\d+),(\d+) through (\d+),(\d+)/);
		if (match) {
			var x1 = parseInt(match[2]);
			var y1 = parseInt(match[3]);
			var x2 = parseInt(match[4]);
			var y2 = parseInt(match[5]);
			for (var x = x1; x <= x2; x++) {
				for (var y = y1; y <= y2; y++) {
					switch(match[1]) {
						case "turn on": grid1[x][y] = true; grid2[x][y]++; break;
						case "turn off": grid1[x][y] = false; grid2[x][y] = Math.max(grid2[x][y]-1, 0); break;
						case "toggle": grid1[x][y] = !grid1[x][y]; grid2[x][y] += 2; break;
					}
				}
			}
		}
	}
	return [countOn(grid1), sumBrightness(grid2)];
}

function initGrid(w, h) {
	var grid = [];
	for (var x = 0; x < w; x++) {
		grid[x] = [];
		for (var y = 0; y < w; y++) {
			grid[x][y] = 0;
		}
	}
	return grid;
}

function countOn(grid) {
	var count = 0;
	for (var x = 0; x < grid.length; x++) {
		for (var y = 0; y < grid[x].length; y++) {
			if (grid[x][y]) count++;
		}
	}
	return count;
}

function sumBrightness(grid) {
	var brightness = 0;
	for (var x = 0; x < grid.length; x++) {
		for (var y = 0; y < grid[x].length; y++) {
			brightness += grid[x][y];
		}
	}
	return brightness;
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day06(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

