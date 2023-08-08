
const productos= [
    {
        nombre: 'The Legend of Zelda: Breath of the Wild',
        plataforma: 'Nintendo Switch',
        genero: 'Acción y Aventura',
        precio: 59.99,
        stock: 10
    },
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
    }
]
const miCarrito = []

function Productos(){
    alert(`Los productos disponibles en la tienda son: \n${productos[0].nombre}\n${productos[1].nombre}\n${productos[2].nombre}`)
    let elejirProducto = prompt("Porfavor elija un videojuego o escriba cancelar paara cancelar la compra(1,2,3):");
    while(elejirProducto != "finalizar"){
        miCarrito.push(productos[elejirProducto - 1])
    elejirProducto = prompt("Porfavor elija un videojuego o escriba finalizar para finalizar la compra(1,2,3):");
    }
    const carroFinal = miCarrito.map(x => x.nombre)
    alert(`el carro final es final es ${carroFinal}`);
    }
Productos()