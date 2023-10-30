"use strict";
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Apocalipsis prros!');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apoca1 = Apocalipsis.callApocalipsis();
    apoca1.changeName('Fulanito');
    console.log(apoca1);
    // const apocalipsis: Apocalipsis = new Apocalipsis('Apocalipsis...');
    // console.log(apocalipsis);
})();
