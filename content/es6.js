class Albanil{
    constructor(nombre){
        // este es el assembly line 
        // this = {}
        // insertar nombre y bolsillo 
        this.nombre = nombre
        this.bolsillo = []
        // return this
    }
    // fuera del constructor vamos a insertar las herramientas 
    martillo(){
        console.log("bum bum bum")
    }
    aBolsillo(cosa){
        this.bolsillo.push(cosa)
    }
}
let fredy = new Albanil("fredy")
