
const compras = ["manzana","pollo","arroz","lentejas","mango","huevos"]
console.log(compras)

compras.push("aceite de girasol")
console.log(compras)

compras.splice(6,1)
console.log(compras)

const pelis = [
    {"titulo":"It","director":"Tommy Lee Wallace","fecha":"1990"},
    {"titulo":"Free guy","director":"Shawn levy","fecha":"2021"},
    {"titulo":"Alerta roja","director":"Rawson Marshall Thurber","fecha":"2021"}
]

const pelispost = pelis.filter(elemento => {
    return elemento.fecha > "2010"
})
console.log(pelispost)

const directores = pelis.map(elemento => {
    return elemento.director
})
console.log(directores)

const Nompelis = pelis.map(elemento => {
    return elemento.titulo
})
console.log(Nompelis)

const directoresypelis = directores.map((directores,i) => {
    return Nompelis[i] + " - " + directores
})
console.log(directoresypelis)

const directoresypelis2 = directores.map((directores,i) => {
    return `${Nompelis[i]} - ${directores}`
})
console.log(directoresypelis)