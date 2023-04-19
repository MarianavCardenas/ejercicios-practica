let free= false;

const validarCliente= (time)=>{
    let edad = prompt("cual es tu edad?");
    if(edad>18){
        if(time >= 2 && time <7 && free==false){
            alert ('podes pasar gratis');
            free= true
        } else{
            alert('podes pasar, pero tenes que pagar la entrada')}
    } else {
        alert ('no podes sos menor de edad')
    }

}
 validarCliente(23);
 validarCliente(2.5)
 validarCliente(2)
 validarCliente(5)
 validarCliente(4)