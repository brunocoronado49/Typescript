(() => {
    // const numbers: (number | string)[] = [1,2,2,3,'4',8,4,5];
    const numbers: number[] = [1,2,2,3,8,4,5];
    numbers.push(7);

    console.log(numbers);

    const villians: string[] = ['Omega Rojo', 'Dormammu', 'Duende verde'];
    villians.forEach((villian: string) => console.log(villian.toUpperCase()));

})();

