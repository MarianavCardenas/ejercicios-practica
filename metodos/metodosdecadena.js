let cadena = 'cadena de pruebas';
// let cadena2 = 'cadena 2';

resultado = cadena.concat(' cadena 2');

document.write(resultado + "<br>") // estas son las dos maneras de concatenar, es añadir una cadena a otra

// para crear un string lo que hacemos es lo siguiente:
let cadena1 = new String ('cadena de prueba'); // esto es un objeto por ese motivo es que es lo mismo, estas son las algunas maneras de concatenar.
let cadena2 = 'cadena 2';

resultado = cadena.concat(' cadena 2');

document.write(resultado + "<br>")




// Si una cadena COMIENZA con los caracteres de otra cadena, devuelve TRUE, si n0 devuelve FALSE.

let cadena3 = 'cadena de pruebas';
let cadena4 = 'cadena';     // esto devuelve TRUE, si yo pongo un espacio al comienzo o lo modifico me devulve FALSE

resultado = cadena3.startsWith(cadena4);

document.write(resultado + "<br>")





// Si una cadena TERMINA con los caracteres de otra cadena, devuelve TRUE, si no devuelve FALSE.

let cadena5 = 'cadena de pruebas';
let cadena6 = 'pruebas ';     // esto devuelve FALSE, si yo le saco el espacio al final me devulve TRUE, porque es igual a la cadena anterior

resultado = cadena5.endsWith(cadena6);

document.write(resultado + "<br>");





//Busca cadena en cualquier parte, no solamente al principio o al final

let cadena7 = 'cadena de pruebas';
let cadena8 = 'ena';     // esto devuelve TRUE, ya que se encuentra dentro de la primer cadena, en caso de que yo coloque hola me devuleve FALSE, ya que no se encuentra dentro de la cadena.

resultado = cadena7.includes(cadena8);

document.write(resultado + "<br>") ;

//otro ejemplo:
let cadena9 = 'habia una vez una avestruz con un elefante';
let cadena10 = '';    
resultado = cadena9.includes('avestruz'); // tambien se puede hacer de esta manera, e ir buscado en la frase las palabras/cadenas que queremos buscar. Este tipo se use mucho justamente para encontrar estas cadenas.

document.write(resultado + "<br>") ;





// es igual al anterior pero no devuelve TRUE NI FALSE, devuelve la posicion o indice del primer caracter de la cadena, sino existe, devuelve -1
let cadena11 = 'habia una vez una avestruz con un elefante';
let cadena12 = '';    
resultado = cadena11.indexOf('avestruz'); //si coloco una palabra que no existe me va a devolver -1, ya que esa posicion no existe.

document.write(resultado + "<br>") ;

//otro ejemplo del mismo

let cadena13 = 'habia una vez una avestruz con un elefante';
let cadena14 = '';    
resultado = cadena13.indexOf('avestruz'); 

document.write(cadena13[18] + "<br>") ; //Coloco la posicion de la letra y me devulve la letra que hay en esa posicion, osea que actua al reves.





// devuelve el ultimo indice del primer caracter de la cadena, sino existe , devuelve -1. Recorre de atras para adelante.
let cadena15 = 'habia una vez una avestruz avestruz avestruz avestruz';
let cadena16 = '';    
resultado = cadena15.lastIndexOf('avestruz'); // esto me devulve la posicion de la ultima palabra avestruz en este caso.

document.write(resultado + "<br>") ;
//otro ejemplo;
let cadena17 = 'habia una vez una avestruz avestruz avestruz avestruz';
let cadena18 = '';    
resultado = cadena17.lastIndexOf('avestruz'); 

document.write(cadena17[45]+ cadena17[46] +cadena17[47] + "<br>") ;// asi se va ir formando la palabra que se encuentre en esas posiciones, en este caso AVE.



// todas las cadenas que hicimos de aca para arriba, lo que haciamos es buscar cadenas y devolvernos un valor, Si estaba al principio o al final. Es devolver si esta o no esta


// Rellena la cadena al PRINCIPIO con lo caracteres deseados
let cadena19 = 'abc';
let cadena20 = '';    
resultado = cadena19.padStart(10, "6"); // el 10 indica el total de caracteres incluidos los de la cadena por lo que en este ejemplo me va completar 7 caracteres mas y el "6" me indica con lo que yo quiero rellenar

document.write(resultado + "<br>")
// otro ejemplo:
let cadena21 = 'abc';
let cadena22 = '';    
resultado = cadena19.padStart(40, "hola"); // me los rellena con el texto que yo le coloque y los va ir repitiendo hasta llegar a los caracteres deseados

document.write(resultado + "<br>")




// Rellena la cadena al FINAL con lo caracteres deseados
let cadena23 = 'abc';
let cadena24 = '';    
resultado = cadena23.padEnd(10, "6"); // es lo mismo que el anterior pero lo va completar al final

document.write(resultado + "<br>")




// Devuelve la misma cadena pero repetida la cantidad de veces deseada
let cadena25 = 'abc ';
let cadena26 = '';    
resultado = cadena25.repeat(10); // lo que coloque en la cadena, me lo va a repetir la cantidad de veces que yo el indique, en este caso 10

document.write(resultado + "<br>")


// estos para arriba es rellenar las cadenas





// sirve para separar la cadena como nosotros le pidamos

let cadena27 = 'Hola, como, estas'; // esto es un array
// let cadena28 = '';    
resultado = cadena27.split('como'); //lo que va a ser es separar a la cadena por las comas, o lo que yo coloque dentro '', si yo no coloco nada los separa con las comas.

document.write(resultado + "<br>") // si yo pongo al resultado [valor], me va a parecer el valor dentro de mi array, solo indicando ese valor, si yo use el split con una palabra, esa no cuenta en mi array, se va a usar de separador






//Nos retoma un pedazo de cadena que selecionamos

let cadena28 = 'ABCDEFGHI'; 
// let cadena28 = '';    
resultado = cadena28.substring(2,7); // Aca me va a tomar el primer valor se encuentra incluido en la cadena seleccionada y el segundo valor no esta incluida es hasta ahi sin incluir la posicion 7 en este caso.


document.write(resultado + "<br>") 




// convierte la cadena en miniscula. TO signofica que va a convertir algo, segun lo que coloquemos depues es la funcion a convertir
let cadena29 = 'ABCDEFGHI'; 
// let cadena28 = '';    
resultado = cadena29.toLowerCase(); // convierte a todo mi cadena en miniscula.


document.write(resultado + "<br>") 





// convierte la cadena en mayuscula.

let cadena30 = 'A maria se le cayo un diente'; 
// let cadena28 = '';    
resultado = cadena30.toUpperCase(); // convierte a todo en mayuscula, si yo tengo en mi cadena una mayuscula la deja como esta, no hace lo contrario

document.write(resultado + "<br>") 




// convierte a la cadena en un string en una cadena de texto
let cadena31 = ["pedro", "matias"]; 
// let cadena28 = '';    
resultado = cadena31.toString();

document.write(resultado[1]+ "<br>")  //Solo me va a mostrar la letra E ya que es la posicion donde se encuentra esa letra, es una cadena de texto ya que solo nos muestra la L y no la palabra entera del array como el segundo elemento





// elimina los especios en blanco del final y del principio de una cadena
let cadena32 = "   pedro    "; 
// let cadena28 = '';    
resultado = cadena32.trim();

document.write(resultado.length+ "<br>") // asi me va indicar la cantidad de caracteres que tiene mi cadena, sin los especios pero si yo le saco el trim ()  me va indicar la cantidad de caracteres con los espacios.



//elimina los especios en blanco del FINAL de una cadena
let cadena33 = "   pedro    "; 
// let cadena28 = '';    
resultado = cadena33.trimEnd();

document.write(resultado.length+ "<br>") // asi me va indicar la cantidad de caracteres que tiene mi cadena, sin los especios del FINAL, pero si yo le saco el trim ()  me va indicar la cantidad de caracteres con los espacios del FINAL.




//elimina los especios en blanco del COMIENZO de una cadena
let cadena34 = "   pedro    "; 
// let cadena28 = '';    
resultado = cadena34.trimStart();

document.write(resultado.length+ "<br>") // asi me va indicar la cantidad de caracteres que tiene mi cadena, sin los especios del COMIENZO, pero si yo le saco el trim ()  me va indicar la cantidad de caracteres con los espacios del COMIENZO.




