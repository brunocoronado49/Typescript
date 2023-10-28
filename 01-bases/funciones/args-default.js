"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Bruce', 'Wayne', true);
    console.log({ name });
})();
