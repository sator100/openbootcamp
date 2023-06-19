
let DatosPersonales = {
    nombre : "Cristian David",
    apellido : "Parroquiano Jimenez",
    edad : 19,
    altura : "1.60",
    eresDesarrolllador : true
}

let DatosAmigo1 = {
    nombre : "Sara Valentina",
    apellido : "Parroquiano Jimenez",
    edad : 15,
    altura : "1.44",
    eresDesarrolllador : false
}

let DatosAmigo2 = {
    nombre : "Manuel Felipe",
    apellido : "Bernal Castellanos",
    edad : 19,
    altura : "1.72",
    eresDesarrolllador : false
}

const MiEdad = DatosPersonales.edad
console.log(MiEdad)

let ListaPersonas = [DatosPersonales,DatosAmigo1,DatosAmigo2]
let ListaPersonasEdad = [DatosPersonales.edad, DatosAmigo1.edad, DatosAmigo2.edad]
console.log(ListaPersonasEdad)