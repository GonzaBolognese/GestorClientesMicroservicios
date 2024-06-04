package com.gonzaBolognese.microSpring.persistence.repository;

import com.gonzaBolognese.microSpring.persistence.entitites.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
}
