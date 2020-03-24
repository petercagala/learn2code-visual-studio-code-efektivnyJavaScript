'use strict';

const progressBar = document.querySelector('progress');
// Dlzka celeho dokumenu - dlzka viditelnej casti stranky v 
// mojom okne prehliadaca
progressBar.max = calculateProgressBarMax();

/**
 * window tam vobec nemusi byt, lebo je to globalny objekt. Ak nezadam window,
 * tak sa chytam objektu window
 */
window.addEventListener('scroll', function scrollEvent(event) {

   // Nastavime pocet pixelov o ktore som sa odscrolloval od vrchu stranky
   progressBar.value = window.pageYOffset;
//    console.log(window.pageYOffset);
});

window.addEventListener('resize', function resizeEvent() {
    progressBar.max = calculateProgressBarMax();
});

function calculateProgressBarMax() {
    return document.body.scrollHeight - window.innerHeight;
}