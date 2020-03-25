'use strict';

let debounceTimer;

addEventListener('mousemove', event => {
    // Ked ponem s mysou, tak ten timer znicim. 
    //Teda odpocitavanie sa vzdy vynuluje
    clearTimeout(debounceTimer);

    // Spusti sa po preckani pocas nastavenej doby
    debounceTimer = setTimeout(() => {
        displayCords(event);
    }, 500);
});

function displayCords(event) {
    document.body.textContent = `Mouse at: ${event.pageX}, ${event.pageY}`;
    console.log("fired");
}