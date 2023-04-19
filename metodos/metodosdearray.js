
// Estos metodos son TRANFORMADORES, tranforman el array original en otro diferente/nuevo


//pop lo que hace es sacar el ULTIMO elemento del array y ademas te lo muestra cual saco

let nombres =["pedro ", " maria ", " jorge ", " juan "] // aca tengo mi array

document.write("Array orignal: <b>" + nombres + " </b><br>") // asi te muestra el array original

let resultado = nombres.pop() //lo modifica y te muestra el ultimo elemento que elimino

document.write("Elemento eliminado: <b>" + resultado + "</b><br>")
document.write ("Resultado: <b>" + nombres + "</b><br><br>") // esto te indica el array que queda







//shift lo que hace es sacar el PRIMER elemento del array y ademas te lo muestra cual saco

let nombres1 =["pedro "," maria ", " jorge ", " juan "] // aca tengo mi array

document.write( "Array orignal: <b>" + nombres1+ "</b><br>") // asi te muestra el array original

let resultado1 = nombres1.shift() //lo modifica y te muestra el PRIMER elemento que elimino

document.write("Elemento eliminado: <b>" + resultado1 + "</b><br>")
document.write ("Resultado: <b>" + nombres1 + "</b><br><br>") // esto te indica el array que queda







//push lo que hace es agregar al FINAL un elemento a mi array

let nombres2 =["pedro "," maria ", " jorge ", " juan "] // aca tengo mi array

document.write( "Array orignal: <b>" + nombres2+ "</b><br>") // asi te muestra el array original
 
let resultado2= nombres2.push (" roberto ", " lucia ") // aca coloco lo elementos que voy a agregar, lo que me devuleve es el numero de elementos que tiene mi array nuevo.

document.write("Cantidad de elementos: <b>" + resultado2 + "</b><br>") // me indica la cantidad de elementos en numeros que tiene mi array +los elementos que le agrege
document.write ("Resultado: <b>" + nombres2 + "</b><br><br>") // esto te indica el array con elementos agregados








// reverse lo que hace es INVIERTE el orden de los elementos de mi array

let numeros =[1, 2, 3, 4, 5, 6] // aca tengo mi array

document.write( "Array orignal: <b>" + numeros + "</b><br>") // asi te muestra el array original

let resultado3= numeros.reverse() // este sirve para invertir mi array 
 
document.write ("Resultado: <b>" + resultado3+ "</b><br><br>") // este muestra mu array invertido







// Unshif lo que hace es agregar un o varios elemento a mi array en el COMIENZO

let numeros1 =[1, 2, 3, 4, 5, 6] // aca tengo mi array

document.write( "Array orignal: <b>" + numeros1 + "</b><br>") // asi te muestra el array original

let resultado4= numeros1.unshift(3,7,4) // aca debo indicar los elemento que voy agregar a mi array al comienxo
 
document.write ("Resultado: <b>" + numeros1 + "</b><br><br>") // este muestra mu array nuevo con los elementos, si yo coloco la varible resultados4 y no numeros1, lo que me devuelve la cantidad de elementos que tiene mi array.







// sort lo que hace ordena los elementos de array localmente y devuelve el arreglo ordenado, osea los ordena de forma lexicografico, si coloco numeros me los ordena como el abecedario y si pongo palbras por orden alfabetico.
let numeros2 =[45, 18, 7, 28, 13, 15, 20, 3] // aca tengo mi array

document.write( "Array orignal: <b>" + numeros2 + "</b><br>") // asi te muestra el array original

let resultado5= numeros2.sort() // 
 
document.write ("Resultado: <b>" + resultado5 + "</b><br><br>") // me devuelve el array ordenado como si fuera una palabra de menor a mayor.
 //otro ejemplo:
 // sort lo que hace ordena los elementos de array localmente y devuelve el arreglo ordenado, osea los ordena de forma lexicografico, si coloco numeros me los ordena como el abecedario y si pongo palbras por orden alfabetico.
let palabras =["hola ", "gimnasio ","cafe ", "pelota ", "hermano ", "romina ", "ahijada "] // aca tengo mi array

document.write( "Array orignal: <b>" + palabras + "</b><br>") // asi te muestra el array original

let resultado6= palabras.sort() // 
 
document.write ("Resultado: <b>" + resultado6 + "</b><br><br>") //Me ordena el array alfabeticamente.






// splice cambia el contenido de un array eliminanto elementos existente y/o agregando nuevos elementos.
let palabras1 =["hola ", "gimnasio ","cafe ", "pelota ", "hermano ", "romina ", "ahijada "] // aca tengo mi array

document.write( "Array orignal: <b>" + palabras1 + "</b><br>") // asi te muestra el array original

let resultado7= palabras1.splice(2,4, "teclado ", "san lorenzo ") // el primer numero es la posicion del elemento que va a empezar a modificar mi arrar, el segundo elemento va a ser la cantidad de elementos que quiero que elimine y despues de ahi puedo agregar elementos que se añaden a mi array. Si yo no quiero eliminar ningun elemento coloco 0 en la segunda posicion.
 
document.write ("Resultado: <b>" + palabras1 + "</b><br><br>") //Aca me va a mostrar mi array modificado es como lo que agrege nuevo remplaza al bloque de elementos que elimine,




//Metodos Accesores


//join convierte mi array en cadena de texto

let palabras2 =["hola ", "gimnasio ","cafe ", "pelota ", "hermano ", "romina ", "ahijada "] // aca tengo mi array

document.write( "Array orignal: <b>" + palabras2[0] + "</b><br>") // asi te muestra el array original

let resultado8= palabras2.join() //si yo coloco asi el array v ser lo mismo, pero lo puedo verificar que no convierte en una cadena de texto colocando en palabras y resultado [0]

document.write ("Resultado: <b>" + resultado8 [0] + "</b><br><br>")  //aca solo me mostraria  el primer elemento de mi arrar y si yo lo coloco asi me devuelve la primer letra mi elemento.

//pero este tiene una diferencia con el toString que tambien es para cambiar a cadena de texto, la diferencia esta en que puedo poner diferentes separadores.
//otro ejemplo
let palabras3 =["hola ", "gimnasio ","cafe ", "pelota ", "hermano ", "romina ", "ahijada "] // aca tengo mi array

document.write( "Array orignal: <b>" + palabras3 + "</b><br>") // asi te muestra el array original

let resultado9= palabras2.join( " - ") //si yo coloco cualquier separador me devuelve todos los elementos separados con lo que yo coloque dentro()

document.write ("Resultado: <b>" + resultado9 + "</b><br><br>")  
//otro ejemplo
let palabras4 =["hola ", "gimnasio ","cafe ", "pelota ", "hermano ", "romina ", "ahijada "] // aca tengo mi array

document.write( "Array orignal: <b>" + palabras4 + "</b><br>") // asi te muestra el array original

let resultado10= palabras4.join( "<br> Elemento:  ") //si yo coloco cualquier separador me devuelve todos los elementos separados con lo que yo coloque dentro()

document.write ("Elemento <b>" + resultado10 + "</b><br><br>")  









// slice devulve una parte del array dentro de un nuevo array empezando por inicio hasya fin (fin no incluido)
let palabras5 =["hola ", "gimnasio ","cafe ", "pelota ", "hermano ", "romina ", "ahijada "] // aca tengo mi array

document.write( "Array orignal: <b>" + palabras5 + "</b><br>") // asi te muestra el array original

let resultado11= palabras5.slice(2,5) // aca me coloco el primer elemento donde quiero que empiece aparecer mi array y el segundo elemento hasta donde termina sin incluirlo al final
document.write ("Resultado: <b>" + resultado11 + "</b><br><br>")  //aca me muestra el array nuevo que quiero que me muestre.

//otro ejemplo:
let palabras6 =["hola ", "gimnasio ","cafe ", "pelota ", "hermano ", "romina ", "ahijada "] // aca tengo mi array

document.write( "Array orignal: <b>" + palabras6 + "</b><br>") // asi te muestra el array original

let resultado12= palabras6.slice(0,-1) //si yo coloco esto me muestra todo mi array menos el ultimo elemento
document.write ("Resultado: <b>" + resultado12+ "</b><br><br>")  //aca me muestra el array nuevo que seleccione


// tambien funciona de la misma manera los toString (), indexof(), lastIndex(), incluides().. Funciona de la misma manera para los metodos de array. Estos ejemplos se vieron en metodos de la cadena.




//metodos de array de repeticiones

//filter() y for Each() hacen lo mismo crea in nuevo array con todos lo elementosd que cumplen la condicion
//filter() tiene ademas otra funcion que podemos pornele un condicion y me selecciona a esos que cumplen con la condicion

let palabras7 =["hola ", "gimnasio ","cafe ", "pelota ", "hermano ", "romina ", "ahijada "] // aca tengo mi array

document.write( "Array orignal: <b>" + palabras7 + "</b><br>") // asi te muestra el array original

palabras7.filter (function (palabra){
    document.write (palabra + "<br>")
})  // por cada vuelta del array que haga va ir tomando los diferentes valores y va ir formando otro array con todos.

//Otro ejemplo:
let palabras8 =["hola ", "gimnasio ","cafe ", "pelota ", "hermano ", "romina ", "ahijada "] // aca tengo mi array

document.write( "Array orignal: <b>" + palabras8 + "</b><br>") // asi te muestra el array original

resultado = palabras8.filter(palabr => palabr.length > 5)

document.write (resultado);





