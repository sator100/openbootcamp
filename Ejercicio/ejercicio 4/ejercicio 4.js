
Nombre = "Cristian David";
Apellido = "Parroquiano Jimenez";

estudiante = Nombre.concat(" ",Apellido)
console.log(estudiante)

estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

NumEstudiante = estudiante.length
console.log(NumEstudiante)

PrimerLetra = Nombre.charAt(0)
console.log(PrimerLetra)

UltimaLetra = Apellido[18]
console.log(UltimaLetra)

console.log(estudiante.replace(/\s+/g,""))

console.log(estudiante.includes(Nombre))