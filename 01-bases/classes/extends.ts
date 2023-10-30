(() => {

    class Avenger {
        constructor(public name: string, public realName: string) {
            console.log('Constructor Avenger!');
        }

        protected getFullName(): string {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(name : string, realName: string, public isMutant: boolean) {
            super(name, realName);
            console.log('Constructor Xmen!');
        }

        get fullName() {
            return `${this.name} - ${this.realName} - getter`;
        }

        set fullName(name: string) {
            if (name.length < 3) throw 'Must be more than 3 letters';
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


