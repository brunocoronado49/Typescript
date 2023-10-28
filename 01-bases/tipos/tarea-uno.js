"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
