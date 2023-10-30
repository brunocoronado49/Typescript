(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(): void;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
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
    }

    const client2: Client = {
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
    }



})();


