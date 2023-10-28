"use strict";
(() => {
    let avengers = 18;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('We are in trouble');
    }
    else {
        console.log('We are saved');
    }
    avengers = 3;
    console.log({ avengers });
})();
