"use strict";

function day08(input) {
	var total = input.replace(/\n/g, "").length;
	var unescaped = input.replace(/\"([^\n]*)\"(?:\n|$)/g, function(match, inner) {
		return inner.replace(/\\(["\\]|x[0-9a-f]{2})/gi, "x");
	}).length;
	var escaped = input.replace(/(\"[^\n]*\")(?:\n|$)/g, function(match, full) {
		return "\"" + full.replace(/([\\"])/g, "\\$1") + "\"";
	}).length;
	return [total - unescaped, escaped - total];
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day08(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

