
function login() {
    var contrasena = document.querySelector("#contrasena").value;
    var usuario = document.querySelector("#usuario").value;
    console.log("Usuario: "+usuario+" "+"y su contraseña es: "+contrasena);
}



$(function(){
        $("#verparticipantes").click(function(){
            $.get("http://localhost:8080/user", function(datos){
                var i;
                for (i=0;i<datos.length;i++){
                    var tr=`<tr><td>`+datos[i].id+`</td>
                    <td>`+datos[i].nombres+`</td>
                    <td>`+datos[i].apellidos+`</td>
                    <td>`+"estudiante"+`</td>
                    </tr>`;
                $("#cuerpo").append(tr);

                }
            });
        });
});



$(function(){
        $("#registrar").on("click", function(e){
        e.preventDefault();

        if ($('#nombres').val().length <3) {
            alert('digite su nombre completo');
            return false;
            }
        else if ($('#nombres').val().length >20) {
            alert('Digite un nombre real');
            return false;
        }
        if ($('#apellidos').val().length < 3) {
            alert('digite SUS APELIIDOS');
            return false;
        }
        else if ($('#apellidos').val().length >20) {
            alert('Digite un apellido correcto');
            return false;
        }
        if ($('#usuario').val().length < 4) {
            alert('digite un usuario válido');
            return false;
        }
        else if ($('#usuario').val().length > 14) {
            alert('este usuario es muy largo. Digite uno entre 4 y 9 caracteres');
            return false;
        }
        if ($('#correo').val().length < 10) {
            alert('digite un correo válido');
            return false;
        }
        else if ($('#correo').val().length > 40) {
            alert('este correo es muy largo. Digite uno entre 10 y 40 caracteres');
            return false;
        }
        if ($('#contrasena').val().length < 7) {
            alert('digite una contraseña con más de 7 dígitos/caracteres');
            return false;
        }
        else if ($('#contrasena').val().length > 16) {
            alert('digite una contraseña más corta');
            return false;
        }

        
            var nombres=$("#nombres").val();
            var apellidos=$("#apellidos").val();
            var usuario=$("#usuario").val();
            var correo=$("#correo").val();
            var contrasena=$("#contrasena").val();

            console.log("Nombres:"+nombres+" - Apellidos:"+apellidos+" - Usuario:"+usuario+" - Correo:"+correo+" - Contraseña:"+contrasena)

            
            
            fetch("http://localhost:8080/user",{ 
                method:"POST",
                mode:"cors",
                cache:"no-cache",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({nombres,apellidos,usuario,correo,contrasena})
            }).then(response=>response.json()).then(()=>alert("GUARDADO CORRECTAMENTE"));
    });//cierre de del JQuery
});//cierre de funcion anonima


function Login(){ 
    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    if (usuario=="USUARIO1" && password=="CONTRASEÑA1") { 
    window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
    window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (usuario=="" && password=="") { 
    window.location="errorpopup.html"; 
    } 
} 



function register(){

    var nombres=document.getElementById("nombres").value;
    var apellidos=document.getElementById("apellidos").value;
    var usuario=document.getElementById("usuario").value;
    var correo=document.getElementById("correo").value;
    var contrasena=document.getElementById("contrasena").value;
    console.log("nombres: "+nombres+"apellidos: "+apellidos+"usuario: "+usuario+"correo: "+correo+"contraseña: "+contrasena);
}

//página visualizador

function changeClass() {
    document.getElementById("sidebar").classList.add('sidebar__x');
    document.getElementById("sidebar").classList.remove('sidebar__y');
    document.getElementById("sidebar").classList.toggle('sidebar__y');
    document.getElementById("father__sidebar").classList.add('flex');
}
function changeClassBack() {
    document.getElementById("sidebar").classList.remove('sidebar__x');
    document.getElementById("sidebar").classList.add('sidebar__y'); 
    document.getElementById("sidebar").classList.toggle('sidebar__x');
    document.getElementById("father__sidebar").classList.remove('flex');
}
function showDescripcion() {
    document.getElementById("multimedia").style.display = 'none';
    document.getElementById("descripcion").style.display = 'block';
}
function showMultimedia() {
    document.getElementById("descripcion").style.display = 'none';
    document.getElementById("multimedia").style.display = 'block';
}
function quitParrafos() {
    document.getElementById("descripcion").style.display = 'none';
    document.getElementById("multimedia").style.display = 'none';
}