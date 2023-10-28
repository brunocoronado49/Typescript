"use strict";
(() => {
    const a = 10;
    console.log(a);
})();
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
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Bruce');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => 'The World is saved';
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(8, 10));
})();
(() => {
    const hero = 'Batman';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Batsignal activated!!!';
    };
    console.log(typeof activateBatSignal);
})();
const sumar = (a, b) => a + b;
const contar = (heroes) => heroes.length;
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman(true);
const unirheroes = (...personas) => personas.join(", ");
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Sueprstrenght'],
    };
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
console.log(apocalipsis);
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Sueprstrenght'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'Francisco';
    console.log(typeof myCustomVariable);
    myCustomVariable = 52;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Batman',
        age: 56,
        powers: ['Be rich']
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 120.4845684;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 2, 3, 8, 4, 5];
    numbers.push(7);
    console.log(numbers);
    const villians = ['Omega Rojo', 'Dormammu', 'Duende verde'];
    villians.forEach((villian) => console.log(villian.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
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
(() => {
    let nada = undefined;
    console.log({ nada });
    let nada1 = null;
    console.log({ nada1 });
})();
(() => {
    let avengers = 18;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('We are in trouble');
    }
    else {
        console.log('We are saved');
    }
    avengers = 3;
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Volcan Negro`;
    console.log(`I'am ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'Letra fuera de rango');
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let FuerzaPoder;
    (function (FuerzaPoder) {
        FuerzaPoder[FuerzaPoder["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        FuerzaPoder[FuerzaPoder["fuerzaBatman"] = 1] = "fuerzaBatman";
        FuerzaPoder[FuerzaPoder["fuerzaFlash"] = 5] = "fuerzaFlash";
        FuerzaPoder[FuerzaPoder["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(FuerzaPoder || (FuerzaPoder = {}));
    const fuerzaFlash = FuerzaPoder.fuerzaFlash;
    const fuerzaSuperman = FuerzaPoder.fuerzaSuperman;
    const fuerzaBatman = FuerzaPoder.fuerzaBatman;
    const fuerzaAcuaman = FuerzaPoder.fuerzaAcuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Spiderman';
    hero[1] = 80;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
    };
    const a = callSuperman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map