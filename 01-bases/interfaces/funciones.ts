(() => {

    interface AddTwoNumbers {
        (a: number, b: number): number;
    }

    let sumar: AddTwoNumbers;

    sumar = (a: number, b: number) => {
        return a + b;
    }


})();


