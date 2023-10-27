(() => {
    const error = (message: string): never => {
        throw new Error(message);
    }

    const error1 = (message: string): (never | number) => {
        if (false) {
            throw new Error(message);
        }

        return 2;
    }

    error('Ayyyy mi dedo con artriti');

})();


