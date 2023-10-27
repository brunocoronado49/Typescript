(() => {
    const addNumber = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hello ${name}`;
    const saveTheWorld = (): string => 'The World is saved';

    let myFunction: (y: number, z: number) => number;

    //* myFunction = 10;
    //* console.log(myFunction);

    myFunction = addNumber;
    console.log(myFunction(8, 10));

    // myFunction = greet;
    // console.log(myFunction('Bruce'));

    // myFunction = saveTheWorld;
    // console.log(myFunction());

})();


