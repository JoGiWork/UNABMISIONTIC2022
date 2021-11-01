//desarrollado por Juan Siciliano y Joan Torres
package com.example.registerBackend.servicios;

import java.util.ArrayList;



import com.example.registerBackend.modelos.UsuarioModelo;
import com.example.registerBackend.repositorio.UsuarioRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UsuarioServicio {
    @Autowired
    UsuarioRepo usuarioRepo;


    public UsuarioModelo guardarUsuario(UsuarioModelo usuario){
        

        return usuarioRepo.save(usuario);
        
    }
    

    public ArrayList<UsuarioModelo> obtenerUsuarios(){
        return (ArrayList<UsuarioModelo>) usuarioRepo.findAll();
    }

}

