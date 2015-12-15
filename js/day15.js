"use strict";

function day15(input) {
	var lines = input.split("\n");
	var properties = [];
	var ingredients = {
		names: []
	};
	for (var i = 0; i < lines.length; i++) {
		var match = lines[i].match(/(.*): (.*)/);
		if (match) {
			var name = match[1];
			var ingredient = {};
			if (ingredients.names.indexOf(name) < 0) ingredients.names.push(name);
			match[2].replace(/(\S+) (-?\d+)/g, function(match, property, value) {
				ingredient[property] = +value;
				if (properties.indexOf(property) < 0) properties.push(property);
			});
			ingredients[name] = ingredient;
		}
	}
	
	function score(quantities, calories) {
		var score = 1;
		for (var p = 0; p < properties.length; p++) {
			var property = properties[p];
			var propertyscore = 0;
			for (var i = 0; i < quantities.length; i++) {
				propertyscore += ingredients[ingredients.names[i]][property] * quantities[i];
			}
			if (property == "calories") {
				if (calories && propertyscore != calories) return 0;
				continue;
			}
			if (propertyscore <= 0) return 0;
			score *= propertyscore;
		}
		return score;
	}
	
	var mixture = [];
	var highscore = 0;
	var highscore500 = 0;
	(function mix(i, left) {
		for (var j = 0; j <= left; j++) {
			mixture[i] = j;
			if (i == ingredients.names.length - 1) {
				mixture[i] = left - j;
				var current = score(mixture);
				var current500 = score(mixture, 500);
				if (current > highscore) highscore = current;
				if (current500 > highscore500) highscore500 = current500;
			} else {
				mix(i + 1, left - j);
			}
		}
	})(0, 100);

	return [highscore, highscore500];
}

document.getElementById("solve").onclick = function() {
	var input = document.getElementById("input").value.trim();
	var result = day15(input);
	document.getElementById("solution1").value = result[0];
	document.getElementById("solution2").value = result[1];
}

