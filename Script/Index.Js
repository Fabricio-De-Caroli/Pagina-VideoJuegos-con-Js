const inputs = document.querySelectorAll("input");                          
const BotonLog = document.querySelector("#botonLogueo");
const Form = document.querySelector("#formLogin");
const usuario = {
    email: "",
    password: ""
}
const noExistente = document.createElement("p");
const Registrados = JSON.parse(localStorage.getItem("Registrados"));
const linkShop = "../Pages/Shop.html"
function ruteo(){
    return location.href= linkShop
}
Form.addEventListener("submit", (eve) =>{
    eve.preventDefault();
})
inputs.forEach((elemnt) => {
    elemnt.addEventListener("input",(event) => {
        if(event.target.name === "email"){
            usuario.email = event.target.value;
        }
        if(event.target.name === "password"){
            usuario.password = event.target.value;
        }
    })
})

console.log(Registrados)
BotonLog.addEventListener("click",() => {
    const regFind = Registrados.find((registro) => usuario.email === registro.email && usuario.password === registro.password)
    if(regFind != undefined){
        ruteo()
    }else{
        noExistente.innerHTML = "<p>Su usuario no existe, Porfavor Registrese</p>"
        document.body.append(noExistente);
        noExistente.style.color = "red"
    }
})