(() => {
    const hero: string = 'Batman';

    function returnName(): string {
        return hero;
    }

    const activateBatSignal = (): string => {
        return 'Batsignal activated!!!';
    }

    console.log(typeof activateBatSignal);


})();


