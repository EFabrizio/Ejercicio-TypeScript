import { Alumno } from './alumno';

var alumnos = Array<Alumno>();

function agregar(alumno:Alumno){
    alumnos.push(alumno);
0
}

function borrar(no_control:string) {
    let index = 0;
    for (let Alumno of alumnos) {
        if (Alumno.no_control == no_control) {
            alumnos.splice(index, 1);
            break;
        }
         index++;
    }
    console.log("Nocontrol: "+no_control+" borrado");
}

function imprimir(): void{
    for(let Alumno of alumnos)
        console.log(Alumno);
}

function modificar(no_control:string,alumno:Alumno){
    let index = 0;
    for (let arr of alumnos) {
        if (arr.no_control == no_control) {
            alumnos.splice(index, 1,alumno);
            break;
        }
        index++;

    }
    console.log("Nocontrol: "+no_control+" editado");
}

agregar({
    no_control:`13400419`,
    nombre:`Fabrizio`,
    apellidos:`Gonzalez`,
promedio:90,
    genero:`M`,
    fecha_nacimiento: new Date(`Febraury 28, 1994`),
    active:true});

agregar({
    no_control:`13400420`,
    nombre:`Edgar`,
    apellidos:`Castellanos`,
    promedio:92,
    genero:`M`,
    fecha_nacimiento: new Date(`March 20, 1994`),
    active:true});

agregar({
    no_control:`13400495`,
    nombre:`Fikri`,
    apellidos:`Azdine`,
    promedio:95,
    genero:`M`,
    fecha_nacimiento: new Date(`January 02, 1994`),
    active:true});

agregar({
    no_control:`13400490`,
    nombre:`Alexia`,
    apellidos:`Abrego`,
    promedio:100,
    genero:`F`,
    fecha_nacimiento: new Date(`Octuber 28, 1995`),
    active:true});

borrar(`13400490`);
modificar(`13400495`,{
    no_control:`13400590`,
    nombre:`Danny`,
    apellidos:`Vander`,
    promedio:88,
    genero:`M`,
    fecha_nacimiento: new Date(`September 28, 1995`),
    active:true})


imprimir();



