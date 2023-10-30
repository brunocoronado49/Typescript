(() => {
    class Avenger {
        // private name: string;
        // private team: string;
        // public realName?: string;
        static avgAge: number = 35;
        static getAvgAge(): string {
            return this.name;
        }

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
            avgAge: number = 55,
        ) {
            Avenger.avgAge = avgAge;
        }

        public bio(): string {
            return `${this.name} (${this.team})`;
        }
    }

    // const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang');
    // console.log(antman);

    // console.log(Avenger.getAvgAge());

})();

