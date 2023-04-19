class Celular{
    constructor(color, peso, tamaño, rdc, ram){
    this.color= color;
    this.peso= peso;
    this.tamaño= tamaño;
    this.resoluciondecamara= rdc;
    this.memoriaram= ram;
    this.encendido= false;
    } //ahora tengo que colocar los metodos lo que me pide el ejercicio es: prender, apagar,tomar fotos y grabar
   
    PresionarBotondeEncendido(){   // como el celular esta apagado lo puedo prender sino pasa lo contrario el celular esta apagado
        if(this.encendido==false){
            alert("celular prendido"); 
            this.encendido=true;
        } else{
            alert ("el celular ya se encuentra apagado")
            this.encendido=false
        }
   }   

    Reiniciar (){
        if(this.encendido== true){
            alert ("reiniciando celular")
        } else{
            alert("el celular esta apagado")
        }
   
    }
    TomarFoto(){
        alert(`tomar foto en ${this.resoluciondecamara}`)
    }   

    GrabarVideo(){
        alert(`grabar video con  ${this.resoluciondecamara}`)
    }

    mostrarinfo(){   //creamos este metodo para mostrar toda la informacion
        return `
        Color:<b>${this.color}</b> </br>
        peso:<b>${this.peso} </b> </br>
        tamaño:<b>${this.tamaño}</b> </br>
        resolucion de camara:<b>${this.resoluciondecamara}</b> </br>
        memoria ram:<b>${this.memoriaram}</b> </br>
        `;

    }
}

class celularAltaGama extends Celular {
    constructor(color, peso, tamaño, rdc, ram, rdce){
        super(color, peso, tamaño, rdc, ram);
        this.resoluciondecamaraextra=rdce;
    }
  GrabarvideoLento (){
    alert('estas grabando con camara lenta')
  }
  reconocimientoFacial(){
    alert ('Estas grabando con reconocimiento facial ')
  }
  infomobilealtagama(){
    return this.mostrarinfo()+ `resolucion de camara extra: <b>${this.resoluciondecamaraextra}</b>`
  }
  
}

celular1= new celularAltaGama ('azul','170 gr', '7p', '4K', '3G', 'HD');
celular2= new celularAltaGama ('Rojo','150 gr', '6.2p', '4K', '8G', 'Full HD');

    // celular1= new Celular ('Amarillo','152gr','5.3p','full HD','32GB')  //correponde al ejercicio A
    // celular2= new Celular ('Verde','132gr','6p','full','164GB')
    // celular3= new Celular ('Rojo','172gr','5.9p','full HD','128GB')

    // celular1.PresionarBotondeEncendido();
    // celular1.TomarFoto();
    // celular1.GrabarVideo();
    // celular1.Reiniciar();
    // celular1.PresionarBotondeEncendido();

//   document.write(
//     `${celular1.mostrarinfo()} </br>   //correponde al ejercicio A
//      ${celular2.mostrarinfo()} </br>
//       ${celular3.mostrarinfo()} </br>`
//   )
  document.write(
    `${celular1.infomobilealtagama()} </br><br>
     ${celular2.infomobilealtagama()} </br>
      `
  )
