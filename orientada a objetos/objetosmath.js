
//sqrt() sirve para sacar la raiz cuadrada de un numero
numero= Math.sqrt(25)
document.write (numero + "<br>")




//cbrt() sirve para sacar la raiz cubica de un numero
numero1= Math.cbrt(27)
document.write (numero1 + "<br>")




//max() devuelve el mayor de ceros o mas numeros, no trabaja con array solo recibe numeros, solo trabaja con numeros
numero2= Math.max(27, 18,256, 23,20, 45, 11, 1500) //recibe todos los numeros y me devuelve el mas grande de todos
document.write (numero2 + "<br>")




//min() devuelve el menos de ceros o mas numeros, no trabaja con array solo recibe numeros, solo trabaja con numeros, es el opuesto a max
numero3= Math.min(27, 18,256, 23,20, 45, 11, 1500) //recibe todos los numeros y me devuelve el mas chico de todos
document.write (numero3 + "<br>")



//random() devuelve un numero pseudo-aleatorio entre 0 y 1
numero3= Math.random() //me devulve numeros aleatorios entre 0 y 1, no llegan nunca a o y 1
document.write (numero3 + "<br>")
// aca me devuelve cualquier numero aletorio multiplicado por 100
numero4 = Math.random()*100; // al multiplicarlo por 100 me va a dar numeros con comas
numero4= numero4.toString(); // esto es para convertilo en cadena de texto, porque sino me queda que no esta definida, si coloco que solo me aparezcan las posiciones 0 y 1
num = numero4[0] + numero4 [1]; //para que no me aparezca numero con coma pongo asi, para que solo me devuleva los numeros que aparecen en la posicion 0 y1
if (numero4 [1] == "."){
    num =numero4[0];
} // esto es para que no me aparezca los puntos y solo me aparezcan numeros.
document.write (num + "<br>");





// para evitar hacer todo esto para buscar un numero entra 0 y 100 se puede utilizar el round () 
let numero5 = Math.random ()*100 ;// asi solo me aparece los numero 0 al 100 con los decimales
numero5 = Math.round (numero5); // round() sirve para redondear numeros con decimales,pero son numero de 0 a 100 incluidos,
document.write (numero5 + "<br>");






// Si quiero obtener los numero entr 0 a 100 no incluidos puedo utiliza floor (), me trunca los valores al numero entero primero
let numero6 = Math.random ()*99 ;// asi solo me aparece los numero 0 al 100 con los decimales
numero6 = Math.floor (numero6 +1 ); // con esto lo trunco los decimales y me deja solo los numeros enteros, pero con esto me sale 0 pero no el 100
//colocando el 99 que multiplica a numeros entre 0 y 1, nunca llega a 99, pero si le sumamos uno despues con el floor, ahi si llega a 99,entonces ahora no llega al 100 ni al cero
document.write (numero6 + "<br>");





// fround () es para truncar los decimales, pero los trunca de otra manera con bytes
let numero7= Math.fround(15.232215811601329231671634616492619)
document.write(numero7 + "<br>")





//trunc ()lo que hace es trunca los decimales de un numeros, lo saca y se queda con el entero
let numero8= Math.trunc(15.15189416)
document.write(numero8 + "<br>")



//        PROPIEDADES


// lo que utilizo es la contante pi, es lo que me visualiza
let numero9= Math.PI;
document.write(numero9+ "<br>")

// Me muestra la raiza cuadrada de 1/2
let numero10= Math.SQRT1_2;
document.write(numero10+ "<br>")

// Me muestra la raiza cuadrada de 2
let numero11= Math.SQRT2;
document.write(numero11+ "<br>")


// Me muestra la constante de Euler la E
let numero12= Math.E;
document.write(numero12+ "<br>")


// Me muestra el logaritmo natural de 2
let numero13= Math.LN2;
document.write(numero13+ "<br>")


// Me muestra el logaritmo natural de 10
let numero14= Math.LN10;
document.write(numero14+ "<br>")

// Me muestra el logaritmo de E en base 2
let numero15= Math.LOG2E;
document.write(numero15+ "<br>")



// Me muestra el logaritmo de E en base 10
let numero16= Math.LOG10E;
document.write(numero16+ "<br>")





