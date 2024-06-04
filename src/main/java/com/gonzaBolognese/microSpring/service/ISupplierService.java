package com.gonzaBolognese.microSpring.service;


import com.gonzaBolognese.microSpring.dto.SaveCustomer;
import com.gonzaBolognese.microSpring.dto.SaveSupplier;
import com.gonzaBolognese.microSpring.persistence.entitites.Supplier;

import java.util.List;

public interface ISupplierService {
    public List<Supplier> getAll();

    public Supplier getOneById(Long id);

    public void removeOneById (Long id);

    public void saveNewSupplier (SaveSupplier saveSupplier);

    public void updateSupplier (SaveSupplier saveSupplier, Long id);
}
