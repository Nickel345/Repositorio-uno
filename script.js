const varTitulo = document.getElementById("tituloInicio");
const divEs = document.getElementById("divS");
const varHabla = document.getElementById("Hab");
const listaHabla = ["Hola", "¿Cómo estas?", "Yo bien", "Pero mi amiga, terrible", "Veras, tiene un grupo", "En el cual no se logra organizar nada bien", "Las encargadas estan cambiando o moviendo todo a ultimo momento", "Incluso cuando ya se reunian para trabajar, siempre habia algo que no tenian preparado, lo cual demoraba o complicaba todo", "Por ejemplo:", "hace dos semanas, se reunieron para grabar, pero la persona encaragada del telefono (el cual usaban para grabar por la buena calidad) lo trajo con solo 7% de bateria cargada", "Les toco esperar a que cargara hasta 20%, perdiendo tiempo.", "Ademas, a cada rato su telefono se le acababa el espacio, forzandolas a tomar pausas cada vez que tocaba pasar los videos a otra parte.", "Las organizadoras sabian que escenas grabar pero no planeaban en que lugares especificos seria.", "Asi que terminaban perdiendo tiempo busca un sito que les gustara.", "Ni siquiera podian buscar un sitio general sin que haya algun problema.", "Seleccionaron un sitio que encontraron por internet e inmediatamente dijeron que querian usar ese sitio porque les parecia bueno.", "Al principio iban a grabar el domingo, pero cuando el dia llego una de ellas saco una razon entendible por la cual no podia ir.", "Se movio el plan para el lunes.", "Ese dia mi amiga reviso a que hora cierran el sitio seleccionado para saber cuanto tiempo tendrian", "Y vio que el sitio no habre los Lunes", "Detalle que las compañeras no investigaron cuando seleccionaron el sitio y movieron el plan al Lunes"];

let estadoInicio = true;
let estadoDiv = true;
let indiH = 0;

varTitulo.addEventListener("click", () => {
    if(estadoInicio === true) {
    varTitulo.innerText = "B";
    varTitulo.style.color = "#cc4949";
    varTitulo.style.backgroundColor = "white";
    } else  {
        varTitulo.innerText = "Él";
        varTitulo.style.color = "white";
        varTitulo.style.backgroundColor = "black";
    }
    estadoInicio = !estadoInicio;
})

divEs.addEventListener("click", () => {
    if(estadoDiv === true) {
    varTitulo.innerText = "AAAAAAAAAAA"
    } else {
        varTitulo.innerText = "él"
    }
    estadoDiv = !estadoDiv;
})


varHabla.addEventListener("click", () => {
    varHabla.innerText = listaHabla[indiH];
    if (indiH < listaHabla.length) {
    indiH += 1;
    } else {
        varHabla.innerText = "FIN.";
    }
})