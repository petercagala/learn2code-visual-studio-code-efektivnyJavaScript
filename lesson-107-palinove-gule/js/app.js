'use strict';

// const startAnimationButton = document.getElementsByClassName(".toggle-anim");
const startAnimationButton = document.querySelector(".toggle-anim"),
	balls = document.getElementsByClassName("ball");

let isAnimating = false;

startAnimationButton.addEventListener('click', () => {
	isAnimating = !isAnimating;

	startAnimationButton.textContent = isAnimating ? "Stop Animation": "Start Animation";

	for (const ballItem of balls) {
		// ballItem.className = isAnimating? "ball ball-running-limp-around": "ball";
		ballItem.className = isAnimating? "ball ball-running-run-around": "ball";
	}
})

for(let i = 0; i<balls.length; i++) {
	const ball = balls[i];

	ball.style.top = i  + 'px';
	ball.style.left = i + 'px';
}

