package com.example.registerBackend.repositorio;


import com.example.registerBackend.modelos.UsuarioModelo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepo extends CrudRepository<UsuarioModelo, Long>{

}
