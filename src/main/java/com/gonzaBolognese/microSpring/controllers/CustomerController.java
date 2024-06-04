package com.gonzaBolognese.microSpring.controllers;

import com.gonzaBolognese.microSpring.dto.SaveCustomer;
import com.gonzaBolognese.microSpring.persistence.entitites.Customer;

import com.gonzaBolognese.microSpring.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private ICustomerService customerService;

    @GetMapping("/api/customers")
    public List<Customer> getAll() {
        return customerService.getAll();
    }

    @GetMapping("/api/customers/{id}")
    public Customer getOneById (@PathVariable String id){
        return customerService.getOneById(Long.parseLong(id));
    }

    @DeleteMapping("/api/customers/{id}")
    public void deleteOneById (@PathVariable String id){
        customerService.removeOneById(Long.parseLong(id));
    }

    @PostMapping("/api/customers")
    public void saveNewCustomer (@RequestBody SaveCustomer saveCustomer){

        customerService.saveNewCustomer(saveCustomer);
    }

    @PutMapping("/api/customers/{id}")
    public void updateCustomer(@RequestBody SaveCustomer saveCustomer, @PathVariable String id){
        customerService.updateCustomer(saveCustomer, Long.parseLong(id));
    }
}
