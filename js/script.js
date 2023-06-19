document.addEventListener('DOMContentLoaded', function () {
	// INITIALIZATION
	const cInput = document.getElementById('celsius');
	const fInput = document.getElementById('fahrenheit');
	const explain = document.getElementById('explain');
	const explanation = document.getElementById('explanation');
	const resetBtn = document.getElementById('reset');
	const swapBtn = document.getElementById('swap');

	// FUNCTIONS
	const cTof = () => {
		let celsius = parseFloat(cInput.value);
		let fahrenheit = (celsius * 9) / 5 + 32;
		fahrenheit = round(fahrenheit.toFixed(2));

		fInput.value = fahrenheit;

		if (cInput.value === '') {
			explain.style.display = 'none';
			explanation.innerHTML = '';
		} else {
			explain.style.display = 'block';
			explanation.innerHTML = celsius + ' °C * 9/5 + 32 = ' + fahrenheit + ' °F';
		}
	};

	const fToc = () => {
		let fahrenheit = parseFloat(fInput.value);
		let celsius = ((fahrenheit - 32) * 5) / 9;
		celsius = round(celsius.toFixed(2));

		cInput.value = celsius;

		if (fInput.value === '') {
			explain.style.display = 'none';
			explanation.innerHTML = '';
		} else {
			explain.style.display = 'block';
			explanation.innerHTML = '(' + fahrenheit + ' °F - 32) * 5/9 = ' + celsius + ' °C';
		}
	};

	const reset = () => {
		explain.style.display = 'none';
		cInput.value = '';
		fInput.value = '';
		explanation.innerHTML = '';
	};

	const reverse = () => {
		let judul = document.getElementById('judul');

		if (cInput.readOnly) {
			cInput.readOnly = false;
			fInput.readOnly = true;
			judul.innerHTML = 'Konversi Suhu Celsius ke Fahrenheit';

			if (fInput.value === '') reset();
			else cTof();
		} else {
			cInput.readOnly = true;
			fInput.readOnly = false;
			judul.innerHTML = 'Konversi Suhu Fahrenheit ke Celsius';

			if (cInput.value === '') reset();
			else fToc();
		}

		let col = document.querySelectorAll('.col');
		col.forEach((el) => {
			el.classList.toggle('active');
		});
	};

	const round = (el) => {
		if (Number.isInteger(parseFloat(el))) {
			return Math.round(el);
		}
		return el;
	};

	// EVENT LISTENER
	cInput.addEventListener('keyup', cTof);
	fInput.addEventListener('keyup', fToc);
	resetBtn.addEventListener('click', reset);
	swapBtn.addEventListener('click', reverse);
});
