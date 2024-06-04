package com.gonzaBolognese.microSpring.persistence.repository;

import com.gonzaBolognese.microSpring.persistence.entitites.Supplier;
import org.springframework.data.repository.CrudRepository;

public interface SupplierRepository extends CrudRepository<Supplier, Long> {
}
