'use strict';

let scheduled = false;

let lastEvent;

window.addEventListener('mousemove', function mouseEvent(event) {

    // !!! ked pouzijem takyto timing, tak udaje v event mozu byt neaktualne
    // preto si necham vypisat aktualny event v ramci timeru
    lastEvent = event;

    if(!scheduled) {
        scheduled = true;
            // POckat trochu, az potom zavolaj server
         window.setTimeout(() => {
            displayCords(lastEvent);
            scheduled = false;
        }, 1000);

    }

    
});

function displayCords(event) {
    document.body.textContent = `Mouse at ${event.pageX}, ${event.pageY}`;

    console.log("number of calls:")
}