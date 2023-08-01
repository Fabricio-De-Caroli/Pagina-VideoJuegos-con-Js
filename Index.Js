let userName = prompt("Porfavor ingrese su nombre de usuario o escriba Fin para finalizar");

function RecomJuegos(){
    let userGame = parseInt(prompt("Porfavor elija el numero acorde con el juego que mas le guste de la siguiente lista: 1-Red Dead redemption 2-Need for speed 3-Call of duty 4-League of legends"));

    if(userGame == 1){
        alert("Le recomendamos juegos del estiolo sandbox o mundo abierto");
    }
    if(userGame == 2){
        alert("Le recomendamos juegos del estiolo carreras");
    }
    if(userGame == 3){
        alert("Le recomendamos juegos del estiolo shooters");
    }
    if(userGame == 4){
        alert("Le recomendamos juegos del estiolo e-sport");
    }
}

function FiltroEdad(){
    while(userName != "fin"){
        let userAge = parseInt(prompt("Porfavor ingrese su edad"));
        switch(true){
            case (userAge >= 18):
                alert("Felicidades " + userName + " Usted puede jugar todos los juegos disponibles en el mercado");
                RecomJuegos()
                break;
            case (userAge < 18):
                alert("Lo siento " + userName + " Usted solo puede jugar los juegos recomendados para menores de edad");
                break;
            default:
                alert("Usted a ingresado un valor no valido");
        }
        userName = prompt("Porfavor ingrese su nombre de usuario o escriba fin para finalizar");
    }
}
FiltroEdad()


const producto1 = {nombre:"1-Red Dead Redemption 2",id: 1,precio: 60}
const producto2 = {nombre:"2-Need for speed: rivals",id: 2,precio: 30}
const producto3 = {nombre:"3-Borderlands 3",id: 3,precio: 60}
const producto4 = {nombre:"4-Forza Horizon 5",id: 4,precio: 60}
const productos = [producto1, producto2, producto3, producto4]
const miCarrito = []

function Productos(){
    alert(`Los productos disponibles en la tienda son ${producto1.nombre} ${producto2.nombre} ${producto3.nombre} ${producto4.nombre}` )
    let elejirProducto = prompt("Porfavor elija un videojuego o escriba cancelar paara cancelar la compra(1,2,3,4):");
    while(elejirProducto != "finalizar"){
        if(elejirProducto == 1){
            miCarrito.push(producto1);
            alert("Usted a sumado un producto a su carrito");
            console.log(miCarrito);
        }
        else if(elejirProducto == 2){
            miCarrito.push(producto2);
            alert("Usted a sumado un producto a su carrito");
            console.log(miCarrito);
        }
        else if(elejirProducto == 3){
            miCarrito.push(producto3);
            alert("Usted a sumado un producto a su carrito");
            console.log(miCarrito);
        }
        else if(elejirProducto == 4){
            miCarrito.push(producto4);
            alert("Usted a sumamdo un producto a su carrito");
        }
    elejirProducto = prompt("Porfavor elija un videojuego o escriba finalizar para finalizar la compra(1,2,3,4):");
    }
    const carroFinal = miCarrito.map(x => x.nombre)
    alert(`el carro final es final es ${carroFinal}`);
    }
Productos()