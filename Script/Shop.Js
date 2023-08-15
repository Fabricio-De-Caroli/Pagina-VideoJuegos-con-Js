//Validacion de log in
const Logueados = []
const productos= [
    {
        nombre: 'Red Dead Redemption 2',
        plataforma: 'PlayStation 4',
        genero: 'Acción y Aventura',
        precio: 49.99,
        stock: 7
    },
    {
        nombre: `Need for speed: rivals`,
        plataforma: `PlayStation 4`,
        genero: `Carreras`,
        precio: 29.99,
        stock: 9
    },
    {
        nombre: 'Borderlands 3',
        plataforma: 'PC',
        genero: 'Acción y Aventura',
        precio: 59.99,
        stock: 10
    },
    {
        nombre: `Forza Horizon 5`,
        plataforma: `Xbox Series S`,
        genero: `Carreras`,
        precio: 59.99,
        stock: 5
    }
]
const miCarrito = []
const Boton1 = document.querySelector("#ComprarRDR2")
const Boton2 = document.querySelector("#ComprarNFSR")
const Boton3 = document.querySelector("#ComprarB3")
const Boton4 = document.querySelector("#ComprarFH5")
const BotonFin = document.querySelector("#finCompra")
const mostrarCarrito = document.createElement("p");
const botonConfCompra = document.createElement("button");

Boton1.addEventListener("click",() => {
    miCarrito.push(productos[0]);
    localStorage.setItem("Carrito Compra", JSON.stringify(miCarrito));
})
Boton2.addEventListener("click",() => {
    miCarrito.push(productos[1]);
    localStorage.setItem("Carrito Compra", JSON.stringify(miCarrito));
})
Boton3.addEventListener("click",() => {
    miCarrito.push(productos[2]);
    localStorage.setItem("Carrito Compra", JSON.stringify(miCarrito));
})
Boton4.addEventListener("click",() => {
    miCarrito.push(productos[3]);
    localStorage.setItem("Carrito Compra", JSON.stringify(miCarrito));
})
BotonFin.addEventListener("click",() => {
    mostrarCarrito.innerHTML = `<p>su carrito es:</p>`
    document.body.append(mostrarCarrito);
    let localStorageArray = JSON.parse(localStorage.getItem("Carrito Compra"));
    const CarroFinal = localStorageArray.map(x => x.nombre);
    document.body.append(CarroFinal);
    botonConfCompra.innerHTML = "<p>Confirmar compra</p>"
    document.body.append(botonConfCompra);
})
