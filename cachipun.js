var papel = "papel";
var tijera = "tijera";
var piedra = "piedra";

function cachipun (opcion1, opcion2) {
    if (opcion1  === tijera && opcion2 === tijera || opcion1 === papel && opcion2 === papel || opcion1 === piedra && opcion2 === piedra ) {
        return "empate vuelve a jugar!!! ";
    } else if ( opcion1 === papel && opcion2 === piedra || opcion1 === piedra & opcion2 === papel) {
        return "Gana Papel!!!";
    } else if ( opcion1 === papel && opcion2 === tijera || opcion1 === tijera && opcion2 === papel) {
        return "Gana Tijera!!!";
    } else if ( opcion1 === piedra && opcion2 === tijera || opcion1 === tijera && opcion2 === piedra ) {
        return "Gana Piedra!!!"
    }
}