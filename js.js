function login(usuario, contrasena) {
    var usuario = document.querySelector("#usuario").value;
    var contrasena = document.querySelector("#contrasena").value;
    function validar(usuario, contrasena) {
        fetch("http://localhost:8080/zaphiro",{
                method:"POST",
                mode:"cors",
                cache:"no-cache",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({nombres,apellidos,usuario,contrasena,correo})
            }).then(response=>response.json()).then(()=>alert("Guardado Correctamente"))
    }
    console.log(validar);

}