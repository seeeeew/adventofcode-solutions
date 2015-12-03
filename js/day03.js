"use strict";

function day03(input, useBot) {
	var position = {santa: {x: 0, y: 0}, robot: {x: 0, y: 0}}, houses = ["0,0"];
	input = input.replace(/[^>v<^]/, ""); // regex looks happy
	for (var i = 0; i < input.length; i++) {
		var deliverer = i%2 && useBot ? "robot" : "santa";
		if (input[i] == "^") position[deliverer].y++;
		if (input[i] == "v") position[deliverer].y--;
		if (input[i] == ">") position[deliverer].x++;
		if (input[i] == "<") position[deliverer].x--;
		var coords = position[deliverer].x + "," + position[deliverer].y;
		if (houses.indexOf(coords) < 0) houses[houses.length] = coords;
	}
	return houses.length;
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value;
	document.getElementById("solution1").value = day03(input, false);
	document.getElementById("solution2").value = day03(input, true);
}

