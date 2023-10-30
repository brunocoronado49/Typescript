"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            Avenger.avgAge = avgAge;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    // private name: string;
    // private team: string;
    // public realName?: string;
    Avenger.avgAge = 35;
    // const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.getAvgAge());
})();
