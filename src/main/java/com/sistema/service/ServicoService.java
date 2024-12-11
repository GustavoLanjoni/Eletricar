package com.sistema.service;

import com.sistema.model.Servico;
import com.sistema.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServicoService {

    @Autowired
    private ServicoRepository repository;

    public List<Servico> listarTodos() {
        return repository.findAll();
    }

    public Servico salvarServico(Servico servico) {
        return repository.save(servico);
    }
}