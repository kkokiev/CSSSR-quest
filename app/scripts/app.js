var sliderElem = document.getElementById('slider');
var thumbElem = sliderElem.children[0];

	thumbElem.onmousedown = function(e) {
		var thumbCoords = getCoords(thumbElem);
		var shiftX = e.pageX - thumbCoords.left;


		var sliderCoords = getCoords(sliderElem);

		document.onmousemove = function(e) {
			var newLeft = e.pageX - shiftX - sliderCoords.left;

			if (newLeft < 0) {
				newLeft = 0;
			}

			var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
			if (newLeft > rightEdge) {
				newLeft = rightEdge;
			}

			thumbElem.style.left = newLeft + 'px';
		}

		document.onmouseup = function() {
			document.onmousemove = document.onmouseup = null;
		};

		return false;
	};

		thumbElem.ondragstart = function() {
			return false;
		};

		function getCoords(elem) {
			var box = elem.getBoundingClientRect();

			return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
			};

		}
