package es.daw.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MiController {
    @GetMapping("/api/saludo")
    public String saludo() {
        return "Hola desde Spring Boot y Docker 🐳";
    }
}
