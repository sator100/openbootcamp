
function SiempreTrue(){
    return true;
}
console.log(SiempreTrue());

function CincoSegundos(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hola soy una promesa")
        },5000)
    })
}
const funcion = await CincoSegundos();
console.log(funcion)

function* generadorIndicesPares() {
    let i = 0;
    while (true) {
        i += 2;
        yield i;
    }
}
const gen = generadorIndicesPares();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)