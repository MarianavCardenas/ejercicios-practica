function sumar (num1,num2){
    document.write(num1,num2);
    console.count()
}

sumar (2, 4) //si ejecute muchas veces la funcion y quiero saber cuantas veces la ejecute lo puedo saber con la funcion cont(), esto me lo va arrojar en la consola
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)

sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)

console.countReset() // esta funcion es para que vuelva a reiniciar el conteo, empieza a contar otra vez la funcion ejecutada.
sumar (2, 4)
sumar (2, 4)
sumar (2, 4)

console.time()// aca iniciamos el conteo de cuanto tiempo tarda en ejecutar la funcion

function sumar1 (num1,num2){
    document.write(num1,num2);
    console.timeLog()
}

sumar1 (5, 4) 
sumar1 (5, 4)
sumar1 (5, 4)
sumar1 (5, 4)
sumar1 (5, 4)

sumar1 (5, 4)
sumar1 (5, 4)
sumar1 (5, 4)

console.timeEnd();// aca finaliza el conteo

console.log("%cHOLA","color: blue; padding:20px; background: red; border:solid black") // se puede dar estilos css pero es limitido, si bien se puede hacer muchas cosas pero no todas



