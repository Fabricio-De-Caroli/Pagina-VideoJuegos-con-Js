//Validacion de log in
const Logueados = []
const productos= [
    {
        nombre: 'Red Dead Redemption 2 ',
        plataforma: 'PlayStation 4',
        genero: 'Acción y Aventura',
        precio: 50,
        stock: 7,
        id: 1,
        item: 1
    },
    {
        nombre: `Need for speed: rivals `,
        plataforma: `PlayStation 4`,
        genero: `Carreras`,
        precio: 30,
        stock: 9,
        id: 2,
        item: 1
    },
    {
        nombre: 'Borderlands 3 ',
        plataforma: 'PC',
        genero: 'Acción y Aventura',
        precio: 60,
        stock: 10,
        id: 3,
        item: 1
    },
    {
        nombre: `Forza Horizon 5 `,
        plataforma: `Xbox Series S`,
        genero: `Carreras`,
        precio: 60 ,
        stock: 5,
        id: 4,
        item: 1
    }
]
const miCarrito = []
const Boton1 = document.querySelector("#ComprarRDR2")
const Boton2 = document.querySelector("#ComprarNFSR")
const Boton3 = document.querySelector("#ComprarB3")
const Boton4 = document.querySelector("#ComprarFH5")
const BotonFin = document.querySelector("#finCompra")
const BotonBorrar = document.querySelector("#BorrarCompra")
const mostrarCarrito = document.createElement("p");
const botonConfCompra = document.createElement("button");

const sumar= (id, index) => {
    const itemSeleccionado= id;
    console.log(itemSeleccionado)
    const busqueda= miCarrito.find((x) => x.id == itemSeleccionado);
    console.log(busqueda)
    if (busqueda == undefined) {
        miCarrito.push(productos[index]);
    } else {
    busqueda.item += 1;
    }
}

Boton1.addEventListener("click",() => {
    sumar(productos[0].id, 0)
    console.log(miCarrito)
    Toastify({
        text: "Se agrego Red Dead Redemption 2 al carrito",
        style: {
            background: "linear-gradient(to right, #00CF06, #96c93d)",
            },
        duration: 3000
        }).showToast();
    localStorage.setItem("Carrito Compra", JSON.stringify(miCarrito));
})
Boton2.addEventListener("click",() => {
    sumar(productos[1].id, 1)
    console.log(miCarrito)
    Toastify({
        text: "Se agrego Need For Spee: Rivals al carrito",
        style: {
            background: "linear-gradient(to right, #00CF06, #96c93d)",
            },
        duration: 3000
        }).showToast();
    localStorage.setItem("Carrito Compra", JSON.stringify(miCarrito));
})
Boton3.addEventListener("click",() => {
    sumar(productos[2].id, 2)
    console.log(miCarrito)
    Toastify({
        text: "Se agrego Borderlands 3 al carrito",
        style: {
            background: "linear-gradient(to right, #00CF06, #96c93d)",
            },
        duration: 3000
        }).showToast();
    localStorage.setItem("Carrito Compra", JSON.stringify(miCarrito));
})
Boton4.addEventListener("click",() => {
    sumar(productos[3].id, 3)
    console.log(miCarrito)
    Toastify({
        text: "Se agrego Forza Horizon 5 al carrito",
        style: {
            background: "linear-gradient(to right, #00CF06, #96c93d)",
            },
        duration: 3000
        }).showToast();
    localStorage.setItem("Carrito Compra", JSON.stringify(miCarrito));
})
console.log(miCarrito)
let PrecioFinal = 0;
BotonFin.addEventListener("click",() => {
    let localStorageArray = JSON.parse(localStorage.getItem("Carrito Compra"));
    const CarroFinal = localStorageArray.map(x => x.nombre + `(` + x.item + `)` +`USD:` + x.precio + "\n");
    console.log(localStorageArray)
    localStorageArray.map(x => PrecioFinal += x.precio * x.item);
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: `Su carro final es:\n ${CarroFinal}\nEl precio final de su compra es: ${PrecioFinal}USD`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar Compra',
        cancelButtonText: 'Cancelar Compra',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
            'Compra Realizada',
            'Su compra Fue realizada con exito, Muchas Gracias',
            'success',
            localStorage.removeItem("Carrito Compra"),
            ).then((result2) =>{
                location.reload()
            })
        } else if (
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            'Compra Cancelada',
            'Su compra no se a completado con exito',
            'error',
            localStorage.removeItem("Carrito Compra")
        ).then(() => {
            location.reload()
        })
        }
    })
})
BotonBorrar.addEventListener("click", () =>{
    localStorage.removeItem("Carrito Compra"),
    location.reload()
})
