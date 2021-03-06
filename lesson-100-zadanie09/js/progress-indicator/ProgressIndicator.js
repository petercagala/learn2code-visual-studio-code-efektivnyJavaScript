class ProgressIndicator {

    PROGRESS_INDICATOR_POSITON = 2133;

    debounceTimer;

    /**
     * spustíš po načítaní stránky alebo resize okna
     */
    recalculate(pageYOffset) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            // tu by bol naozaj nejaky AJAXovy request, ktory by odoslal na server poziadavku na ulozenie pozicie
            console.log("Position started storing in DB");
    
            // po kazdom scrolle simulujem volanie servera
             this.setProgressIndicatorPossition(pageYOffset);
        }, 1000);
    
       // Nastavime pocet pixelov o ktore som sa odscrolloval od vrchu stranky
    //    progressBar.value = pageYOffset;

        console.log(pageYOffset);
    }

    recalculateWithoutDebounce(pageYOffset) {
         // tu by bol naozaj nejaky AJAXovy request, ktory by odoslal na server poziadavku na ulozenie pozicie
        console.log("Position started storing in DB");
    
        // po kazdom scrolle simulujem volanie servera
        this.setProgressIndicatorPossition(pageYOffset);
    
       // Nastavime pocet pixelov o ktore som sa odscrolloval od vrchu stranky
    //    progressBar.value = pageYOffset;

        console.log(pageYOffset);
    }

    /**
     * výpočet rozmerov a pixelov prescollovania
     */
    calculateProgressBarMax(document) {
        return document.body.scrollHeight - window.innerHeight;
    }

    setProgressIndicatorPossition(progressIndicatorPossition) {
        let start = Date.now();
        let stopTime = Math.floor(Math.random() * 40) + 40;
    
        /**
         * simulacia AJAX-oveho volania
         */
        while((Date.now() - start) < stopTime) {
            // sleep
        }
    
        console.log("Progress indicator position is saved as:" + progressIndicatorPossition);
    }

    getProgressIndicatorPossition() {
        let start = Date.now();
        let stopTime = Math.floor(Math.random() * 10) + 10;
    
        /**
         * simulacia AJAX-oveho volania
         */
        while((Date.now() - start) < stopTime) {
            // sleep
        }
    
        console.log("Progress indicator position is:" + this.PROGRESS_INDICATOR_POSITON);

        return  this.PROGRESS_INDICATOR_POSITON;
    }

    saveInputValue(inputValue) {
        let start = Date.now();
        let stopTime = Math.floor(Math.random() * 200) + 200;
    
        /**
         * simulacia AJAX-oveho volania
         */
        while((Date.now() - start) < stopTime) {
            // sleep
        }
    
        console.log("Input value is saved as: " + inputValue);       
    }

}