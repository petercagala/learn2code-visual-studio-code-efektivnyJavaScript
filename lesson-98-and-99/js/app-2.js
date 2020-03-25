'use strict';

let debounceTimer;

const progressBar = document.querySelector('progress');
// Dlzka celeho dokumenu - dlzka viditelnej casti stranky v 
// mojom okne prehliadaca
progressBar.max = calculateProgressBarMax();

/**
 * window tam vobec nemusi byt, lebo je to globalny objekt. Ak nezadam window,
 * tak sa chytam objektu window
 */
window.addEventListener('scroll', function scrollEvent(event) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        // tu by bol naozaj nejaky AJAXovy request, ktory by odoslal na server poziadavku na ulozenie pozicie
        console.log("Position started storing in DB");

        // po kazdom scrolle simulujem volanie servera
        heavyCoding();
    }, 1000);

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

function heavyCoding() {
    let start = Date.now();
    let stopTime = Math.floor(Math.random() * 10) + 10;

    /**
     * simulacia AJAX-oveho volania
     */
    while((Date.now() - start) < stopTime) {
        // sleep
    }

    console.log("fired", Date.now());
}