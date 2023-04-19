
class Calculadora{  // lo que hice fue pasar a programacion orientada a objetos con el class y el contructor, 
    constructor(){

    }

sumar(num1, num2){ //en el ejemplo anterior estaban las funciones flechas pero las saque para pasarlo a orientado a objetos
    return parseInt(num1) + parseInt (num2);
}                  

restar(num1, num2){
    return parseInt(num1) - parseInt (num2);
} 

dividir(num1, num2){
    return parseInt(num1) / parseInt (num2);
} 

multiplicar(num1, num2){
    return parseInt(num1) * parseInt (num2);
} 

potenciar (num1, exp){
    return num1**exp
}
raizcuadrada (num1){
    return Math. sqrt (num1);
}
raizcubica (num1){
    return Math.cbrt (num1);
}
}


const calculadora = new Calculadora();

alert ('¿que operacion queres realizar?');
let operacion=prompt ('1:sumar, 2: restar, 3: dividir, 4: multiplicar, 5: potenciacion, 6: raiz cuadrada, 7: raiz cubica ');

//ahora utilizo el IF para ponerle una condicion

if(operacion==1){
    let numero1= prompt('primer numero para sumar')
    let numero2= prompt('segundo numero para sumar')
    resultado= calculadora.sumar(numero1, numero2) //luego le agrege calculadora.sumar/restar/dividir.... para que funcioane mi calculadora
    alert(`tu resultado es ${resultado}`)
}
else if(operacion==2){
    let numero1= prompt('primer numero para restar')
    let numero2= prompt('segundo numero para restar')
    resultado= calculadora.restar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if(operacion==3){
    let numero1= prompt('primer numero para dividir')
    let numero2= prompt('segundo numero para dividir')
    resultado= calculadora.dividir(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if(operacion==4){
    let numero1= prompt('primer numero para multiplicar')
    let numero2= prompt('segundo numero para multiplicar')
    resultado=calculadora. multiplicar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}
else if(operacion==5){
    let numero1= prompt('primer numero para potencia')
    let numero2= prompt('exponente')
    resultado=calculadora. potenciar(numero1, numero2)
    alert(`tu resultado es ${resultado}`)
}


else if(operacion==6){
    let numero1= prompt('raiz cuadrada de')
    resultado=calculadora.raizcuadrada(numero1)
    alert(`tu resultado es ${resultado}`)
}
else if(operacion==7){
    let numero1= prompt('raiz cubica de')
    resultado=calculadora.raizcubica(numero1)
    alert(`tu resultado es ${resultado}`)
}



else{
alert('no se encontro la operacion')
}