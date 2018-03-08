"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alumnos = Array();
function agregar(alumno) {
    alumnos.push(alumno);
}
function borrar(no_control) {
    var index = 0;
    for (var _i = 0, alumnos_1 = alumnos; _i < alumnos_1.length; _i++) {
        var Alumno = alumnos_1[_i];
        if (Alumno.no_control == no_control) {
            alumnos.splice(index, 1);
            break;
        }
        index++;
    }
}
function imprimir() {
    for (var _i = 0, alumnos_2 = alumnos; _i < alumnos_2.length; _i++) {
        var Alumno = alumnos_2[_i];
        console.log(Alumno);
    }
}
function modificar(no_control, alumno) {
    var index = 0;
    for (var _i = 0, alumnos_3 = alumnos; _i < alumnos_3.length; _i++) {
        var arr = alumnos_3[_i];
        if (arr.no_control == no_control) {
            alumnos.splice(index, 1, alumno);
            break;
        }
        index++;
    }
}
agregar({
    no_control: "13400419",
    nombre: "Fabrizio",
    apellidos: "Gonzalez",
    promedio: 90,
    genero: "M",
    fecha_nacimiento: new Date("Febraury 28, 1994"),
    active: true
});
agregar({
    no_control: "13400420",
    nombre: "Edgar",
    apellidos: "Castellanos",
    promedio: 92,
    genero: "M",
    fecha_nacimiento: new Date("March 20, 1994"),
    active: true
});
agregar({
    no_control: "13400495",
    nombre: "Fikri",
    apellidos: "Azdine",
    promedio: 95,
    genero: "M",
    fecha_nacimiento: new Date("January 02, 1994"),
    active: true
});
agregar({
    no_control: "13400490",
    nombre: "Alexia",
    apellidos: "Abrego",
    promedio: 100,
    genero: "F",
    fecha_nacimiento: new Date("Octuber 28, 1995"),
    active: true
});
borrar("13400490");
modificar("13400495", {
    no_control: "13400590",
    nombre: "Danny",
    apellidos: "Vander",
    promedio: 88,
    genero: "M",
    fecha_nacimiento: new Date("September 28, 1995"),
    active: true
});
imprimir();
