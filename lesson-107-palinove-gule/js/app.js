'use strict';

const toggleAnim = document.querySelector('.toggle-anim'),
	  balls = document.getElementsByClassName('ball');

let animating = false;


toggleAnim.addEventListener('click', () => {

	animating = !animating;
	toggleAnim.textContent = animating ? 'Stop Animation' : 'Start Animation';

	for (const ball of balls) {
		ball.className = animating ? 'ball ball-running' : 'ball';
	}

});


// len aby sa poposuvali, aby si videl ze ich je tam kopa
for (let i = 0; i < balls.length; i++) {
	const ball = balls[i];

	ball.style.top  = i * 3 + 'px';
	ball.style.left = i * 3 + 'px';
}