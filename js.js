// pagina de login
function login() {
    var contrasena = document.querySelector("#contrasena").value;
    var usuario = document.querySelector("#usuario").value;
    console.log("Usuario: "+usuario+" "+"y su contraseña es: "+contrasena);
}





// pagina de registro
function register(){

    var nombres=document.getElementById("nombres").value;
    var apellidos=document.getElementById("apellidos").value;
    var usuario=document.getElementById("usuario").value;
    var correo=document.getElementById("correo").value;
    var contrasena=document.getElementById("contrasena").value;
    console.log("nombres: "+nombres+"apellidos: "+apellidos+"usuario: "+usuario+"correo: "+correo+"contraseña: "+contrasena);
}