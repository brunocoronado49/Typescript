"use strict";
(() => {
    const client = {
        name: 'Fran',
        age: 26,
        address: {
            id: 512,
            zip: 'dsf sdf',
            city: 'Mexico'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Jenni',
        age: 35,
        address: {
            id: 598,
            zip: 'ewf 584',
            city: 'Canada'
        },
        getFullAddress() {
            return this.address.city;
        }
    };
})();
