let Abanil = (nombre) => {
    // crear un trabajador con un mandedero 
    let trabajador = Object.create(cajaHeramienta);
    // cear un bolsillo y nombre
    trabajador.nombre = nombre
    trabajador.bolsillo = []
    // regresar el trabajador
    return trabajador
}

//la caja de heramienta 
let cajaHeramienta = {
    // martillo
    // metro
    // serrucho
}
    cajaHeramienta.martillo=  () =>{
        console.log("bum bum bum")
    }
    cajaHeramienta.metro= function() {
        return Math.floor(Math.random() * 10);
    }
    cajaHeramienta.serrucho= function(){
        alert("TIMBER!!!!!")
    }
    cajaHeramienta.aBolsillo= function(cosa){
        console.log("this is this ", this)
       this.bolsillo.push(cosa)
       return this.bolsillo
    }

let fredy = Abanil("Fredy")
// fredy.martillo()
// console.log("esto dice el metro =>", fredy.metro())
fredy.aBolsillo("chelas")
// fredy.serrucho()

// Que pasa si usamos arrow functions a lugar de function() ?
