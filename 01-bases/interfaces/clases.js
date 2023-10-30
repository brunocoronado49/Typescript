"use strict";
(() => {
    // Las clases implementan de interfaces, no extienden
    class Mutant {
        constructor() {
            this.age = 5;
            this.name = '';
            this.realName = '';
        }
        mutantPower(id) {
            this.age = id;
            return `Hi, ${this.name} ${this.age}`;
        }
    }
})();
