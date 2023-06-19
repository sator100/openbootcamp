
const FechaHoy = new Date()
console.log(FechaHoy)
const FechaNacimiento = new Date(2004,0,21)
console.log(FechaNacimiento)

let MayorQue = FechaHoy > FechaNacimiento
console.log(MayorQue)

const DiaNacimiento = FechaNacimiento.getDate()
console.log(DiaNacimiento)

const MesNacimiento = FechaNacimiento.getMonth() + 1
console.log(MesNacimiento)

const AñoNacimiento = FechaNacimiento.getFullYear()
console.log(AñoNacimiento)