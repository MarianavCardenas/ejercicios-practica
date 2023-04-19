let materias = { //aca vamos hacer un array para todas las materias que tengan
    fisica: ["Rodriguez", " Maria", " Sofia", " Roberto", " Juan", " Eva", " Lucia", " Ale"],
    logica: ["Perez", " Sofia", " Juan", " Lucia", " Ale", "Miguel", "Cofla"],
    programacion: ["Hernandez", " Sofia", " Juan", " Ale", " Miguel", " Cofla", " Eva"],
    quimica: ["Garcia", " Maria", " Sofia", " Roberto", " Juan", " Eva", " Lucia", " Ale", " Cofla"],
    algebra: ["Luna", " Sofia", " Juan", " Lucia", " Ale", " Miguel", " Cofla", " Romina", " Eva"],
    matematicas: ["Villar", " Sofia", " Juan", " Lucia", " Ale", " Miguel", " Cofla", " Romina", " Eva"] //aca tenemos todos nuestros datos
}

const inscribir = (alumno, materia) => { //armo una funcion
    personas = materias[materia]; //armarlo de esta manera nos indica que puede acceder a materia y a los elemetos de cada materia
  
   
    if (personas.length >= 21) { //con esto estamos indicando que si mi array tiene mas de 21 elementos debe pasar lo que ponga a continuacion, por que dentro del array se encuentra el profesor
        document.write(`Lo siento <b> ${alumno}</b>, la clase de <b>${materia}</b> se encuentran llenas, no puede inscribirse <br><br>`)
    } else { // esto es en el caso que las clases no esten llenas 
        personas.push(alumno); 
        if (materia == "fisica") { // esto se puede hacer de otra forma, pero por ahora asi, ya que para modificar dinamicamente el array necesito otras herramientas, por lo que hay que rededinir la variable completa, esto me va a permitir agregar alumnos a array
            materias = {
                fisica: personas, // en caso de que sea fisica nos agrega el nuevo alumno y los demas los deja como estaban
                logica: materias["logica"], //para hacerlo dinamico debo colocarlo asi, ya que si pongo alumno solo me devolveria FISICA
                programacion: materias["programacion"],
                quimica: materias["quimica"],
                algebra: materias["algebra"],
                matematicas: materias["matematicas"]
            }
        }
        else if (materia == "logica") {
            materias = {
                fisica: materias["fisica"],
                logica: personas,
                programacion: materias["programacion"],
                quimica: materias["quimica"],
                algebra: materias["algebra"],
                matematicas: materias["matematicas"]
            }

        }
        else if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                logica: materias["logica"],
                programacion: personas,
                quimica: materias["quimica"],
                algebra: materias["algebra"],
                matematicas: materias["matematicas"]
            }
        }
        else if (materia == "programacion") {
            materias = {
                fisica: materias["fisica"],
                logica: materias[logica],
                programacion: personas,
                quimica: materias["quimica"],
                algebra: materias["algebra"],
                matematicas: materias["matematicas"]
            }
        }

        else if (materia == "quimica") {
            materias={
                fisica: materias["fisica"],
                logica: materias[logica],
                programacion: materias["programacion"],
                quimica: personas,
                algebra: materias["algebra"],
                matematicas: materias["matematicas"]
            }
        }
        
        else if (materia == "algebra") {
            materias = {
                fisica: materias["fisica"],
                logica: materias["logica"],
                programacion: materias["programacion"],
                quimica: materias["quimica"],
                algebra: personas,
                matematicas: materias["matematicas"]
            }
        }

        else if (materia == "matematicas") {
            materias = {
                fisica: materias["fisica"],
                logica: materias[logica],
                programacion: materias["programacion"],
                quimica: materias["quimica"],
                algebra: materias ["algebra"],
                matematicas: personas
            }
        }

        document.write (`<b>¡Felicidades ${alumno}!</b> te has inscripto a la <b>${materia}</b> correctamente.<br><br>` )
        
    }
}
document.write (materias ['fisica'] + "<br>")

inscribir ("Juana", "fisica");
inscribir ("Rodrigo", "fisica");
inscribir ("Maria", "fisica");
inscribir ("Lucas", "fisica");
inscribir ("Lucas", "fisica");
inscribir ("Maria", "fisica");
inscribir ("Diego", "fisica");
inscribir ("Juana", "fisica");
inscribir ("Juana", "fisica");
inscribir ("Diego", "fisica");
inscribir ("Lucas", "fisica");
inscribir ("Maria", "fisica");
inscribir ("Rodrigo", "fisica");
inscribir ("Juana", "fisica");
inscribir ("Diego", "fisica");
inscribir ("Diego", "fisica");


document.write ("<br>" + materias ['fisica'])