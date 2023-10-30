(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower(id: number): string;
    }

    interface Human {
        age: number;
    }

    // Las clases implementan de interfaces, no extienden
    class Mutant implements Xmen, Human {
        public age: number = 5;
        public name: string = '';
        public realName: string = '';

        mutantPower(id: number): string {
            this.age = id;
            return `Hi, ${this.name} ${this.age}`;
        }

    }


})();


