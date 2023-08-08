//Validacion de log in
const Logueados = []
const producto1 = {nombre:"1-Red Dead Redemption 2",id: 1,precio: 60}
const producto2 = {nombre:"2-Need for speed: rivals",id: 2,precio: 30}
const producto3 = {nombre:"3-Borderlands 3",id: 3,precio: 60}
const producto4 = {nombre:"4-Forza Horizon 5",id: 4,precio: 60}
const productos = [producto1, producto2, producto3, producto4]
const miCarrito = []
const Boton1 = document.querySelector("#ComprarRDR2")
const Boton2 = document.querySelector("#ComprarNFSR")
const Boton3 = document.querySelector("#ComprarB3")
const Boton4 = document.querySelector("#ComprarFH5")
const BotonFin = document.querySelector("#finCompra")

Boton1.addEventListener("click",() => {
    miCarrito.push(producto1);
    console.log(miCarrito);
})
Boton2.addEventListener("click",() => {
    miCarrito.push(producto2);
    console.log(miCarrito);
})
Boton3.addEventListener("click",() => {
    miCarrito.push(producto3);
    console.log(miCarrito);
})
Boton4.addEventListener("click",() => {
    miCarrito.push(producto4);
    console.log(miCarrito);
})
BotonFin.addEventListener("click",() => {
    
})