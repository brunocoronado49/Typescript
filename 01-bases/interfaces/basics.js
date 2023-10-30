"use strict";
(() => {
    //? Las interfaces a diferencia de los types
    //? se pueden expandir
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Sueprstrenght'],
        getName() {
            return this.name;
        }
    };
})();
