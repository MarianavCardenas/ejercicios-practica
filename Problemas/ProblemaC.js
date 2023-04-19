let cantidad= prompt ('¿Cuantos alumnos son?'); //con esto lo qu hago es preguntar la cantidad de veces, para luego con FOR poder se ejecute esa cantidad de veces colocado
let alumnosTotales=[]; // esto tambien permite lo de arriba en comentarios

for (i=0; i<cantidad; i++) {
    alumnosTotales[i] =[prompt ('Nombre del alumno ' + (i+1)), 0 ]
}

//ahora hacemos una funcion flecha, para colocar lo nombre y poner presente o ausente

const tomarAsistencia= (nombre,p) =>{   //p va ser la posicion en la lista
        let presencia = prompt(nombre); // ponemos el nombre para que se coloque p o a, tenemos que hacer la validacion con IF
        if (presencia == "p" || presencia == "P") {
            alumnosTotales[p][1]++;                 //con alumnos totales accedemos al primer elemento del  array que es el nombre, pero este array tiene otro elemento que es el numero de asitencia o ausencias , colocando el 1 selecciono el segundo elemento
        }
}
 //con la sentencia FOR lo que vanos haces es ejecutar 30 veces el bucle

 for( i=0; i<30; i++){
    for(alumnos in alumnosTotales){  //llamamos a la funcion tomarAsistencia 30 veces, al colocar el IN es la posicion
        tomarAsistencia(alumnosTotales [alumnos][0], alumnos);
    }
   
 }
  for(alumnos in alumnosTotales){
    let resultado= `${alumnosTotales[alumnos][0]}: <br>
    ____Presentes: ${alumnosTotales[alumnos][1]} <br>
    ____Ausencia: ${30- parseInt(alumnosTotales[alumnos][1])}`;

    if (30- alumnosTotales[alumnos][1] > 18 ){
        resultado+= 'reprobado por inasistencias <br><br>';
    } else{
        resultado+= "<br></br>"
    }
    document.write (resultado)
  }
  