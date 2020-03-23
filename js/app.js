function sleep(milliseconds) {
    var start = new Date().getTime();

    for(let i = 0; i < 1e7; i++) {
        if((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

// chillout
sleep(5000);

// it's me
console.log("from app.js, bro");
