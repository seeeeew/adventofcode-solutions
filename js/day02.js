"use strict";

function day02(input) {
	var a = 0, r = 0, lines = input.split("\n");
	for (var i = 0; i < lines.length; i++) {
		var match = lines[i].match(/(\d+)x(\d+)x(\d+)/);
		var l = parseInt(match[1]);
		var w = parseInt(match[2]);
		var h = parseInt(match[3]);
		a += (l*w+w*h+h*l)*2 + Math.min(l*w, w*h, h*l);
		r += (l*w*h)+2*(l+w+h-Math.max(l, w, h));
	}
	return {
		paper: a,
		ribbon: r
	};
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value;
	var result = day02(input);
	document.getElementById("solution1").value = result.paper;
	document.getElementById("solution2").value = result.ribbon;
}

