package com.bea;

import com.bea.repository.InventoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BeaApplication {


    public static void main(String[] args) {
        SpringApplication.run(BeaApplication.class, args);
    }

}
