(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero ) = 'Francisco';
    console.log(typeof myCustomVariable);

    myCustomVariable = 52;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Batman',
        age: 56,
        powers: ['Be rich']
    };
    console.log(typeof myCustomVariable);


})();

