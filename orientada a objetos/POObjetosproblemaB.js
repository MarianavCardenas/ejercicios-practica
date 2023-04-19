class apps{
    constructor (descargas, peso, puntuacion){
        this.descargas= descargas;
        this.peso = peso;
        this.puntuacion = puntuacion;
        this.instalada = false;
        this.iniciada=false;

    }

    instalar(){
        if(this.instalada== false){
            this.instalada= true;
            alert("app instalada correctamente")
        }
    }
    desinstalar(){
        if(this.instalada== true){
            this.instalada= false;
            alert("app desinstalada correctamente")
        }
    }

    abrir(){
        if(this.iniciada== false && this.instalada== true){
            this.iniciada= true;
            alert("app iniciada");
        }
    }
   cerrar(){
        if(this.iniciada== true && this.instalada == true){
            this.iniciada= false;
            alert("app cerrada correctamente")
        }
    }

    appinfo (){
        return `
        Descargas: <b> ${this.descargas}</b> </br>
        Puntacion: <b> ${this.puntuacion}</b> </br>
        Peso: <b> ${this.peso}</b> </br>

        `
    }
}

app1 = new apps( '16.000', '4 estrellas', '800mb')
app2 = new apps( '45.000', '3 estrellas', '650mb')
app3 = new apps( '18.000', '2 estrellas', '700mb')
app4 = new apps( '32.000', '5 estrellas', '900mb')
app5 = new apps( '25.000', '1 estrellas', '910mb')
app6 = new apps( '7.000', '4 estrellas', '760mb')
app7 = new apps( '28.000', '2 estrellas', '820mb')

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

document.write (
    `${app1.appinfo()} </br>
    ${app2.appinfo()} </br>
    ${app3.appinfo()} </br>
    ${app4.appinfo()} </br>
    ${app5.appinfo()} </br>
    ${app6.appinfo()}</br>
    ${app7.appinfo()}</br>
    
    `
)
