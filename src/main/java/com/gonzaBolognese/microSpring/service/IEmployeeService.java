package com.gonzaBolognese.microSpring.service;

import com.gonzaBolognese.microSpring.dto.SaveCustomer;
import com.gonzaBolognese.microSpring.dto.SaveEmployee;
import com.gonzaBolognese.microSpring.persistence.entitites.Employee;

import java.util.List;

public interface IEmployeeService {
    public List<Employee> getAll();

    public Employee getOneById(Long id);

    public void removeOneById (Long id);

    public void saveNewEmployee (SaveEmployee saveEmployee);

    public void updateEmployee (SaveEmployee saveEmployee, Long id);
}
