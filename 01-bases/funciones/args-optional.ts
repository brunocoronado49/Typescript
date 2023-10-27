(() => {
    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'No last name'}`;
    }

    const name = fullName('Bruce');
    console.log({name});

})();


 