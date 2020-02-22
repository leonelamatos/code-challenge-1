let nextButtons = document.querySelectorAll('.next-button');
let prevButtons = document.querySelectorAll('.prev-button');
const submit = document.getElementById('submit');
let steps = [...document.querySelectorAll('.step')];
let dots = [...document.querySelectorAll('.dot')];

const MAX_STEP = 3;
const MIN_STEP = 1;

let currentStep = 1;

nextButtons.forEach(next => {
	next.addEventListener('click', () => {
		const prevStep = steps[currentStep - 1];
		const prevDot = dots[currentStep - 1];
		const current = steps[currentStep];
		const currentDot = dots[currentStep];

		if (currentStep == MAX_STEP) {
			return;
		} else {
			// prevStep.classList.add('hide');
			prevStep.classList.remove('current');
			prevDot.classList.remove('current-dot');
			current.classList.add('current');
			currentDot.classList.add('current-dot');
		}
		currentStep++;
	});
});
// console.log(currentStep);

prevButtons.forEach(prev => {
	prev.addEventListener('click', () => {
		const prevStep = steps[currentStep - 1];
		const prevDot = dots[currentStep - 1];
		const current = steps[currentStep - 2];
		const currentDot = dots[currentStep - 2];

		prevStep.classList.remove('current');
		prevDot.classList.remove('current-dot');
		current.classList.add('current');
		currentDot.classList.add('current-dot');
		currentStep--;
	});
});

submit.addEventListener('click', e => {
	e.preventDefault();
	alert('submited');
});
