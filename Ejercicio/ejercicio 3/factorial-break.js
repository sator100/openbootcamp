
var resultado = 1;
let contador = 1;


do{
    resultado = resultado* contador;
    contador += 1
    if(contador === 10){
        break
    }
}while(contador<=10);

console.log("El factorial de 10 es:",resultado)