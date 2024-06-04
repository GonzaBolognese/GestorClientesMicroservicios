package com.gonzaBolognese.microSpring.service;

import com.gonzaBolognese.microSpring.dto.SaveCustomer;
import com.gonzaBolognese.microSpring.persistence.entitites.Customer;
import com.gonzaBolognese.microSpring.persistence.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class CustomerService implements ICustomerService{

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAll() {
        return (List<Customer>) customerRepository.findAll();
    }

    @Override
    public Customer getOneById(Long id) {
        return (Customer) customerRepository.findById(id).get();
    }

    @Override
    public void removeOneById(Long id) {
        customerRepository.deleteById(id);
    }

    @Override
    public void saveNewCustomer(SaveCustomer saveCustomer)  {
        Customer customer = new Customer();

        customer.setFirstname(saveCustomer.getFirstname());
        customer.setLastname(saveCustomer.getLastname());
        customer.setEmail(saveCustomer.getEmail());
        customer.setPhone(saveCustomer.getPhone());
        customer.setAddress(saveCustomer.getAddress());

        customerRepository.save(customer);
    }

    @Override
    public void updateCustomer(SaveCustomer saveCustomer, Long id) {
        Optional<Customer> customerDbOptional = customerRepository.findById(id);

        if (customerDbOptional.isPresent()) {
            Customer customerDb = customerDbOptional.get();
            customerDb.setFirstname(saveCustomer.getFirstname());
            customerDb.setLastname(saveCustomer.getLastname());
            customerDb.setEmail(saveCustomer.getEmail());
            customerDb.setPhone(saveCustomer.getPhone());
            customerDb.setAddress(saveCustomer.getAddress());

            customerRepository.save(customerDb);
        } else {
            throw new RuntimeException("Customer not found with id " + id);
        }
    }



}
