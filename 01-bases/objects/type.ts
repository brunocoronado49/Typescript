(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Sueprstrenght'],
        getName() {
            return this.name;
        } 
    }
    
})();

