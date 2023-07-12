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


