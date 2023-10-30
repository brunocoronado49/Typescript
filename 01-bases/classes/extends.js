"use strict";
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen!');
        }
        get fullName() {
            return `${this.name} - ${this.realName} - getter`;
        }
        set fullName(name) {
            if (name.length < 3)
                throw 'Must be more than 3 letters';
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
    // const wolverine: Xmen = new Xmen('Wolverine', 'Logan', true);
    // wolverine.getFullNameFromXmen();
    // console.log(wolverine.fullName);
    // wolverine.fullName = 'Francisco';
    // console.log(wolverine.fullName);
})();
