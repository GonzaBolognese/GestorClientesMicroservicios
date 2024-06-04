package com.gonzaBolognese.microSpring.controllers;
import com.gonzaBolognese.microSpring.dto.SaveEmployee;
import com.gonzaBolognese.microSpring.dto.SaveSupplier;
import com.gonzaBolognese.microSpring.persistence.entitites.Supplier;
import com.gonzaBolognese.microSpring.service.ISupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SupplierController {

    @Autowired
    private ISupplierService supplierService;

    @GetMapping("/api/suppliers")
    public List<Supplier> getAll() {
        return supplierService.getAll();
    }

    @GetMapping("/api/suppliers/{id}")
    public Supplier getOneById (@PathVariable String id){
        return supplierService.getOneById(Long.parseLong(id));
    }

    @DeleteMapping("/api/suppliers/{id}")
    public void deleteOneById (@PathVariable String id){
        supplierService.removeOneById(Long.parseLong(id));
    }

    @PostMapping("/api/suppliers")
    public void saveNewSupplier (@RequestBody SaveSupplier saveSupplier){

        supplierService.saveNewSupplier(saveSupplier);
    }

    @PutMapping("/api/suppliers/{id}")
    public void updateSuppliers(@RequestBody SaveSupplier saveSupplier, @PathVariable String id){
        supplierService.updateSupplier(saveSupplier, Long.parseLong(id));
    }
}
