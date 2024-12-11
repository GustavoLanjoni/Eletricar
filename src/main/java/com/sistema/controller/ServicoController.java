package com.sistema.controller;


import com.sistema.model.Servico;
import com.sistema.service.ServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/servicos")
@CrossOrigin(origins = "http://localhost:8080") // Ajuste conforme o domínio do front-end
public class ServicoController {

    @Autowired
    private ServicoService service;

    @GetMapping
    public List<Servico> listarTodos() {
        return service.listarTodos();
    }

    @PostMapping
    public Servico salvarServico(@RequestBody Servico servico) {
        return service.salvarServico(servico);
    }
}