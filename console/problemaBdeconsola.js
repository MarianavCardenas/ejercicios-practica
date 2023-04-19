let trabajo= "240 minutos de trabajo";   //defino mis varibles
let estudio= "100 minutos de estudio";
let tp = "100 minutis de hacer trabajos practicos";
let homework = "30 minutos de cosas de hogar";
let descanso= "10 minutos de descanso "

console.log ("TAREAS"); // voy a colocar el nombre o titulo que me aparecera en al consola


for(var i=0; i< 14; i++){   //utilizo un for para generar un bucle ya que tengo que repetir mis condiciones por 14 dias lo mismo

    if(i==0){  //abro un if para que la condicion comience en cero y puede mostrarse en la consola la semana 1
        console.group("semana 1")
    }
console.group ("dia  " + (i+1));
console.log (trabajo);
console.log (descanso);
console.log (estudio);
console.log (tp);
console.log (homework);
console.groupEnd();

if(i== 6){ //abro otro ir para la misma condicion de la semana 2
   
        console.groupEnd();
        console.group("semana 2")
    
}
}
console.groupEnd();
console.groupEnd();
