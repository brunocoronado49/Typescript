"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    const error1 = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 2;
    };
    error('Ayyyy mi dedo con artriti');
})();
