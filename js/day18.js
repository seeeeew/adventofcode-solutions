"use strict";

function day18(input) {
	var grid = {}, grid2 = {};
	var lines = input.split("\n");
	for (var y = 0; y < lines.length; y++) {
		var chars = lines[y].trim().split("");
		for (var x = 0; x < chars.length; x++) {
			var key = x + "," + y;
			grid[key] = grid2[key] = chars[x] == "#";
		}
	}
	var width = x;
	var height = y;
	grid2["0,0"] = grid2[(width - 1) + ",0"] = grid2["0," + (height - 1)] = grid2[(width - 1) + "," + (height - 1)] = true;

	function count(grid) {
		var on = 0;
		for (var x = 0; x < width; x++) {
			for (var y = 0; y < height; y++) {
				if (grid[x + "," + y]) on++;
			}
		}
		return on;
	}

	for (var i = 0; i < 100; i++) {
		var newgrid = {}, newgrid2 = {};
		for (var x = 0; x < width; x++) {
			for (var y = 0; y < height; y++) {
				var neighbors = 
					(grid[(x - 1) + "," + (y - 1)] || 0) +
					(grid[x + "," + (y - 1)] || 0) +
					(grid[(x + 1) + "," + (y - 1)] || 0) +
					(grid[(x - 1) + "," + y] || 0) +
					(grid[(x + 1) + "," + y] || 0) +
					(grid[(x - 1) + "," + (y + 1)] || 0) +
					(grid[x + "," + (y + 1)] || 0) +
					(grid[(x + 1) + "," + (y + 1)] || 0);
				newgrid[x + "," + y] = grid[x + "," + y] && neighbors == 2 || neighbors == 3;
				var neighbors2 = 
					(grid2[(x - 1) + "," + (y - 1)] || 0) +
					(grid2[x + "," + (y - 1)] || 0) +
					(grid2[(x + 1) + "," + (y - 1)] || 0) +
					(grid2[(x - 1) + "," + y] || 0) +
					(grid2[(x + 1) + "," + y] || 0) +
					(grid2[(x - 1) + "," + (y + 1)] || 0) +
					(grid2[x + "," + (y + 1)] || 0) +
					(grid2[(x + 1) + "," + (y + 1)] || 0);
				newgrid2[x + "," + y] = grid2[x + "," + y] && neighbors2 == 2 || neighbors2 == 3;
			}
		}
		grid = newgrid;
		grid2 = newgrid2;
		grid2["0,0"] = grid2[(width - 1) + ",0"] = grid2["0," + (height - 1)] = grid2[(width - 1) + "," + (height - 1)] = true;
	}

	return [count(grid), count(grid2)];
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day18(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

