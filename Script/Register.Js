
const FormularioRegistro = document.querySelector("#formulario");                     
const BotonReg = document.querySelector("#botonRegistro");
const FormUsuario = {
    email: "",
    emailConfirm: "",
    password: "",
    passwordConfirm: ""
}
const allInputs = document.querySelectorAll("input");
const error = document.createElement("p");
const linkShop = "../Pages/Shop.html"
const Registrados = []

function ruteo(){
    return location.href= linkShop
}

FormularioRegistro.addEventListener("submit", (event)=> {
    event.preventDefault();
})

allInputs.forEach((elem) =>{
    elem.addEventListener("input",(event) => {
        if(event.target.name === "email"){
            FormUsuario.email = event.target.value;
        }
        if(event.target.name === "emailConfirm"){
            FormUsuario.emailConfirm = event.target.value;
        }
        if(event.target.name === "password"){
            FormUsuario.password = event.target.value
        }
        if(event.target.name === "passwordConfirm"){
            FormUsuario.passwordConfirm = event.target.value
        }
    })
})
BotonReg.addEventListener("click",()=> {
    if(FormUsuario.password != FormUsuario.passwordConfirm || FormUsuario.email != FormUsuario.emailConfirm){
        error.innerHTML = "<p>e-mail o contraseña no coinciden</p>";
        document.body.append(error);
        error.style.color = "red";
    }if(FormUsuario.password === FormUsuario.passwordConfirm && FormUsuario.email === FormUsuario.emailConfirm && FormUsuario.password != "" && FormUsuario.email != ""){
        console.log(FormUsuario);
        Registrados.push(FormUsuario);
        localStorage.setItem("Registrados",JSON.stringify(Registrados));
        /* ruteo() */
    }
})
