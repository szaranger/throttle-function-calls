'use strict';

function debounce(fn, delay) {
  var timer = null,
    delay = delay || 250;

	return function () {
		var args = arguments;

		clearTimeout(timer);

		timer = setTimeout(function() {
			fn.apply(this, args);
		}.bind(this), delay);
	};
}
