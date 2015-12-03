"use strict";

(function() {
	var arrowNext = document.getElementById("next");
	var arrowPrev = document.getElementById("prev");
	var selectDay = document.getElementById("day");
	var currentDay = 0;
	document.getElementsByTagName("iframe")[0].onload = function() {
		this.style.height = this.contentWindow.document.body.scrollHeight + "px";
	}
	var setDay = selectDay.onchange = function(day) {
		if (!isNaN(day)) {
			var src = selectDay.children[day].value;
			selectDay.value = src;
			currentDay = day;
		} else {
			var src = selectDay.value;
			currentDay = parseInt(selectDay.value.replace(/\D/g, ""))-1;
		}
		updateArrows();
		document.getElementsByTagName("iframe")[0].src = src + ".html";
	}
	arrowNext.onclick = function() {
		if (this.classList.contains("disabled")) return;
		setDay(++currentDay);
	}
	arrowPrev.onclick = function() {
		if (this.classList.contains("disabled")) return;
		setDay(--currentDay);
	}
	function updateArrows() {
		if (currentDay == 0) {
			arrowPrev.classList.add("disabled");
		} else {
			arrowPrev.classList.remove("disabled");
		}
		if (currentDay == selectDay.children.length - 1) {
			arrowNext.classList.add("disabled");
		} else {
			arrowNext.classList.remove("disabled");
		}
	}
	setDay(selectDay.children.length-1);
	
})();
