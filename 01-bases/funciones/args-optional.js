"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Bruce');
    console.log({ name });
})();
//# sourceMappingURL=args-optional.js.map