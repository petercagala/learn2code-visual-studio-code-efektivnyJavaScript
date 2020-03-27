'use strict';

var progressIndicator = new ProgressIndicator();

const input = document.querySelector('input');

const progressBarSmart = document.querySelector('.progress'); // tento krat chcem element s classom progress
const progressBarShit = document.querySelector('progress');
// Dlzka celeho dokumenu - dlzka viditelnej casti stranky v 
// mojom okne prehliadaca
progressBarShit.max = progressIndicator.calculateProgressBarMax(document);
let documentHeight = progressIndicator.calculateProgressBarMax(document);
let ratioProgressBar;

var keyCounter = 0;

var scheduled = false;


/**
 * window tam vobec nemusi byt, lebo je to globalny objekt. Ak nezadam window,
 * tak sa chytam objektu window
 */
window.addEventListener('scroll', function scrollEvent(event) {

    // throttling: dusime kod
    if(!scheduled) {
        scheduled = true;

        setTimeout(() => {
            scheduled = false;

            ratioProgressBar = (window.pageYOffset / documentHeight);

            console.log(documentHeight, window.pageYOffset, Math.round(ratioProgressBar * 100) + '%');
        
            // Nastav percentualnu sirku progress baru
            progressBarShit.style.width = (ratioProgressBar * 100) + "%";
            //ale teraz cez tansform, aby sme sli cez graficku kartu, super pre optimalizaciu
            progressBarSmart.style.transform = `scaleX(${ratioProgressBar})`;
        }, 100);
    }



    //AJAX
     progressIndicator.recalculate(window.pageYOffset);

     // Pri tomto ajaxovom volani sa neuplatne debounce, teda sa zavola ajaxove volanie po kazdom jednom scrolle
    //  progressIndicator.recalculateWithoutDebounce(window.pageYOffset);
});

/**
 * Pri nacitani stranky sa spusti metoda recalculate(), ktora bude akoze volat databazu, aby sa 
 * text zobrazil na tej pozicii progress baru ako naposledy
 */
// window.addEventListener('load', (event) => {
//     let progressIndicatorPossition = progressIndicator.getProgressIndicatorPossition();
//     console.log("Stranka bola nacitana s poziciou:" + progressIndicatorPossition);

//     // Nastavime progress bar possition
//     progressBar.value = progressIndicatorPossition;

//     // Nastavime konkretnu poziciu window.pageYOffset
//     window.scrollTo(0, progressIndicatorPossition);
// });



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
 * V pripade zmeny velkosti okna dojde k prepocitaniu pozicie progress baru
 */
// window.addEventListener('resize', function resizeEvent() {
//     progressBar.max = progressIndicator.calculateProgressBarMax(document);
// });



