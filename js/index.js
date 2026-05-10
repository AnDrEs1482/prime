let intentos = 3

function Login(){
    if (intentos > 1){
        let user = document.getElementById("username").value
        let password = document.getElementById("password").value
        let email = document.getElementById("email").value
        if (user ==="messi" && password ==="1234" && email === "drojo7986@gmail.com"){
            document.getElementById("MENSAJE").textContent = "Bienvenido"
        }else{
            intentos--
            document.getElementById("Intentos").textContent = "Te quedan " + intentos + " intentos"
        } 
    }else{
            document.getElementById("MENSAJE").textContent = "Has agotado tus intentos, contacta al administrador"
        }
}
