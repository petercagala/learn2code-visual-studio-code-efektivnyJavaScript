'use strict';

var progressIndicator = new ProgressIndicator();

const input = document.querySelector('input');

const progressBar = document.querySelector('progress');
// Dlzka celeho dokumenu - dlzka viditelnej casti stranky v 
// mojom okne prehliadaca
progressBar.max = progressIndicator.calculateProgressBarMax(document);

var keyCounter = 0;

/**
 * Pri nacitani stranky sa spusti metoda recalculate(), ktora bude akoze volat databazu, aby sa 
 * text zobrazil na tej pozicii progress baru ako naposledy
 */
window.addEventListener('load', (event) => {
    let progressIndicatorPossition = progressIndicator.getProgressIndicatorPossition();
    console.log("Stranka bola nacitana s poziciou:" + progressIndicatorPossition);

    // Nastavime progress bar possition
    progressBar.value = progressIndicatorPossition;

    // Nastavime konkretnu poziciu window.pageYOffset
    window.scrollTo(0, progressIndicatorPossition);
});

/**
 * Dorob, aby sa nič nedialo, kým nenapíšeš aspoň 3 znaky.
 */
input.addEventListener('keyup', function pressKey(event) {
    keyCounter++;

    if(keyCounter === 3 || keyCounter > 3) {
        progressIndicator.saveInputValue(input.value);
    }
});


/**
 * window tam vobec nemusi byt, lebo je to globalny objekt. Ak nezadam window,
 * tak sa chytam objektu window
 */
window.addEventListener('scroll', function scrollEvent(event) {
    progressIndicator.recalculate(window.pageYOffset);
});

/**
 * V pripade zmeny velkosti okna dojde k prepocitaniu pozicie progress baru
 */
window.addEventListener('resize', function resizeEvent() {
    progressBar.max = progressIndicator.calculateProgressBarMax(document);
});



