// PRIMERA PRUEBA TS
// let nombre: string = "Juanan";
// function saludo(nombre){
//     return "Hola "+nombre;
// }
// document.getElementById("encabezado").innerHTML = saludo(nombre);
// SEGUNDA PRUEBA TS
// function imprPantalla(a,b){
//     return a+b;
//     }
//     let a: number = 10;
//     let b: number = 5;
//     document.getElementById("encabezado").innerHTML = imprPantalla(a,b);
// Ejemplo de declaracion con Let: Variable local
var a = 10;
if (true) {
    var a_1 = 15;
    console.log("Dentro del if a tiene un valor de " + a_1); // Dentro igual a 15
}
else {
    //
}
console.log("Fuera del if a tiene un valor de " + a); // Fuera es igual a 10
// Ejemplo de declaracion con Var: Variable global
var b = 10;
if (true) {
    var b = 15;
    console.log("Dentro del if a tiene un valor de " + b); // Dentro se le asigna un valor de 15
}
else {
    //
}
console.log("Fuera del if a tiene un valor de " + b); // como es global sigue con el valor asignado de 15
// CLASES POO
var Curso = /** @class */ (function () {
    function Curso() {
        this.titulo = "Nombre del curso";
        this.descripcion = "Lorem ipsum";
        this.horas = 20;
        this.inscritos = 0;
    }
    Curso.prototype.getInscritos = function () {
        return this.inscritos;
    };
    Curso.prototype.setInscritos = function (inscritos) {
        this.inscritos = inscritos;
    };
    Curso.prototype.addInscrito = function () {
        this.inscritos++;
    };
    Curso.prototype.remInscrito = function () {
        this.inscritos--;
    };
    return Curso;
}());
var cursoAngular = new Curso();
cursoAngular.setInscritos(9);
cursoAngular.addInscrito();
console.log(cursoAngular.getInscritos());
var Curso = /** @class */ (function () {
    function Curso() {
    }
    return Curso;
}());
