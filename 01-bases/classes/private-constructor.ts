(() => {
    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor(public name: string) {
            
        }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Apocalipsis prros!');
            }

            return Apocalipsis.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apoca1 = Apocalipsis.callApocalipsis();
    apoca1.changeName('Fulanito');
    console.log(apoca1);
    // const apocalipsis: Apocalipsis = new Apocalipsis('Apocalipsis...');
    // console.log(apocalipsis);



})();



