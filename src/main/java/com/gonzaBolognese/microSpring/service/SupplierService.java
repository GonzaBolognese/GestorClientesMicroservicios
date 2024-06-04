package com.gonzaBolognese.microSpring.service;

import com.gonzaBolognese.microSpring.dto.SaveSupplier;
import com.gonzaBolognese.microSpring.persistence.entitites.Customer;
import com.gonzaBolognese.microSpring.persistence.entitites.Employee;
import com.gonzaBolognese.microSpring.persistence.entitites.Supplier;
import com.gonzaBolognese.microSpring.persistence.repository.CustomerRepository;
import com.gonzaBolognese.microSpring.persistence.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierService implements ISupplierService {
    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public List<Supplier> getAll() {

        return (List<Supplier>) supplierRepository.findAll();
    }

    @Override
    public Supplier getOneById(Long id) {
        return (Supplier) supplierRepository.findById(id).get();
    }

    @Override
    public void removeOneById(Long id) {
        supplierRepository.deleteById(id);
    }

    @Override
    public void saveNewSupplier(SaveSupplier saveSupplier)  {

        Supplier supplier = new Supplier();

        supplier.setName(saveSupplier.getName());
        supplier.setEmail(saveSupplier.getEmail());
        supplier.setPhone(saveSupplier.getPhone());
        supplier.setAddress(saveSupplier.getAddress());
        supplier.setWeb(saveSupplier.getWeb());
        supplier.setContact(saveSupplier.getContact());

        supplierRepository.save(supplier);
    }

    @Override
    public void updateSupplier(SaveSupplier saveSupplier, Long id) {
        Optional<Supplier> supplierDbOptional = supplierRepository.findById(id);

        if (supplierDbOptional.isPresent()) {
            Supplier supplierDb = supplierDbOptional.get();
            supplierDb.setName(saveSupplier.getName());
            supplierDb.setEmail(saveSupplier.getEmail());
            supplierDb.setPhone(saveSupplier.getPhone());
            supplierDb.setAddress(saveSupplier.getAddress());
            supplierDb.setContact(saveSupplier.getContact());
            supplierDb.setWeb(saveSupplier.getWeb());



            supplierRepository.save(supplierDb);
        } else {
            throw new RuntimeException("Customer not found with id " + id);
        }
    }

}
