//desarrollado por Juan Siciliano y Joan Torres
package com.example.registerBackend.controlador;


import java.util.ArrayList;

import com.example.registerBackend.modelos.UsuarioModelo;
import com.example.registerBackend.servicios.UsuarioServicio;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST})
@RequestMapping("/user")
public class UsuarioControlador {
    @Autowired
    UsuarioServicio usuarioServicio;

    @GetMapping
    public ArrayList<UsuarioModelo> obtenerUsuario(){
        return usuarioServicio.obtenerUsuarios();
    }

    @PostMapping
    public UsuarioModelo  guardarUsuario(@RequestBody UsuarioModelo user){
        
        return usuarioServicio.guardarUsuario(user);
    }  

}




