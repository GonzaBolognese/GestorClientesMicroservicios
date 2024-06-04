package com.gonzaBolognese.microSpring.service;

import com.gonzaBolognese.microSpring.dto.SaveCustomer;
import com.gonzaBolognese.microSpring.persistence.entitites.Customer;

import java.util.List;

public interface ICustomerService {
    public List<Customer> getAll();

    public Customer getOneById(Long id);

    public void removeOneById (Long id);

    public void saveNewCustomer (SaveCustomer saveCustomer);

    public void updateCustomer (SaveCustomer saveCustomer, Long id);
}
