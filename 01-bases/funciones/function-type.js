"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => 'The World is saved';
    let myFunction;
    //* myFunction = 10;
    //* console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(8, 10));
    // myFunction = greet;
    // console.log(myFunction('Bruce'));
    // myFunction = saveTheWorld;
    // console.log(myFunction());
})();
