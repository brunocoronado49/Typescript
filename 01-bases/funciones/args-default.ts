(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        return `${firstName} ${lastName || 'No last name'}`;
    }

    const name = fullName('Bruce', 'Wayne', true);
    console.log({name});

})();


 