 const obtenerInformacion = (materia)=>{  //generamos una funcion flecha, aca dentro creariamos todas las materias con sus alumnos y el profesor asigando
   const materias= { //aca vamos hacer un array para todas las materias que tengan
    fisica: ["Rodriguez", " Maria"," Sofia"," Roberto", " Juan", " Eva"," Lucia", " Ale"],
    logica:["Perez" ," Sofia", " Juan"," Lucia", " Ale", "Miguel", "Cofla"],
    programacion:["Hernandez" ," Sofia", " Juan", " Ale", " Miguel", " Cofla"," Eva"],
    quimica:["Garcia", " Maria"," Sofia"," Roberto", " Juan", " Eva"," Lucia", " Ale", " Cofla"],
    algebra:["Luna" ," Sofia", " Juan"," Lucia", " Ale", " Miguel", " Cofla", " Romina"," Eva"],
    matematicas:["Villar" ," Sofia", " Juan"," Lucia", " Ale", " Miguel", " Cofla", " Romina"," Eva"] //aca tenemos todos nuestros datos
   }

   
if(materias [materia] !== undefined){ // esto no va a devolver los nombres de las materias y en caso de no exista la materia seleccionada con el undefined me informa que no existe.
    return [materias[materia],materia, materias]; // lo coloco asi para poder estructura la informacion, para que cuando lo pueda escribir puede tambien aparecer el nombre de la materia y no solo el array
} else {
    return materias;
}
}

const mostrarInfomacion = (materia)=>{ // armamos una funcion flecha para que nos aparezca todas las materias que tenemos
    let informacion= obtenerInformacion(materia);


if (informacion !== false){
    profesor = obtenerInformacion(materia)[0][0]; //esto lo colocamos para que nos idique el profesor como el primer elemento del array, ponemos doble cero 
    alumnos =obtenerInformacion(materia)[0];
    alumnos.shift () ;//el shift lo utilizamos para eliminar el primer elemento por que ese el profesor, aca utilizamos un solo cero[0]  para que nos indique todo el array y nos elimine el primer elemento
    document.write (`El profesor de ${informacion[1]} es: <b> ${profesor}</b><br>
    Los alumnos son: <b>${alumnos}</b> <br><br>`)
}
}

const cantidadDeClases =(alumno)=>{
    let informacion = obtenerInformacion ()
    let cantidadTotal= 0;
   
    for(info in informacion){
        
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
        }
    }

    return cantidadTotal;
}

mostrarInfomacion("fisica");
mostrarInfomacion("logica");
mostrarInfomacion("programacion");
mostrarInfomacion("quimica");
mostrarInfomacion("algebra");
mostrarInfomacion("matematicas");

// ahora vamos armar una funcion para que nos diga en que cantidad de clases esta un alumno en particular
document.write (cantidadDeClases ("eva"))

