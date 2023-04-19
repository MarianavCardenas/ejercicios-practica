let materias = {   // arme mi array con las 3 variantes que me solitaban, asistencia, promedio y tp entregados
    fisica : [90,7,4,"fisica"],
    matematica: [85,6,3,"matematica"],
    calculo: [91,8,4,"calculo"],
    algebra: [92,5,3,"algebra"],
    quimica: [79,9,4,"quimica"],
    logica: [97,8,2,"logica"],
    programacion: [82,7,1,"programacion"],
    biologia: [99,6,4,"biologia"],
    bdedatos: [75,7,3,"bdedatos"]

}
 
aprobo= ()=> { // armo la funcion
    for(materia in materias){ // coloco un for in para que nos muestre la posicion del conjunto de elementos
        let asistencias = materias[materia][0]; //declaro mis variable
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log (materias[materia][3]); // para que se muestre en consola, para que se muestre la materia que tengo
        
        if(asistencias >= 90){ // declaro un if para otorgarle una condicion
            console.log ("%c   Asistencia en orden", "color:green"); // otro console para que me indique la condicion propuesta
        } else{ // en caso de que no cumpla con la condicion va a pasar lo siguiente
            console.log("%c   Falta de asistencias", "color:red");
        }

        if( promedio >= 7){ // declaro un if para otorgarle una condicion
            console.log ("%c   Promedio en orden", "color:green"); // otro console para que me indique la condicion propuesta
        } else{ // en caso de que no cumpla con la condicion va a pasar lo siguiente
            console.log("%c    Falta de promedio", "color:red");
        }

        if(trabajos >= 3){ // declaro un if para otorgarle una condicion
            console.log ("%c   Trabajos practicos en orden", "color:green"); // otro console para que me indique la condicion propuesta
        } else{ // en caso de que no cumpla con la condicion va a pasar lo siguiente
            console.log("%c   Falta por entrega de trabajos practicos", "color:red");
        }
     
    }
}

aprobo() //llamo a mi funcion