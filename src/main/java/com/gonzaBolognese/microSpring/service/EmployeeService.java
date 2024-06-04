package com.gonzaBolognese.microSpring.service;

import com.gonzaBolognese.microSpring.dto.SaveCustomer;
import com.gonzaBolognese.microSpring.dto.SaveEmployee;
import com.gonzaBolognese.microSpring.persistence.entitites.Customer;
import com.gonzaBolognese.microSpring.persistence.entitites.Employee;
import com.gonzaBolognese.microSpring.persistence.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService implements IEmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAll() {

        return (List<Employee>) employeeRepository.findAll();
    }

    @Override
    public Employee getOneById(Long id) {
        return (Employee) employeeRepository.findById(id).get();
    }

    @Override
    public void removeOneById(Long id) {
        employeeRepository.deleteById(id);
    }

    @Override
    public void saveNewEmployee(SaveEmployee saveEmployee)  {

        Employee employee = new Employee();

        employee.setFirstname(saveEmployee.getFirstname());
        employee.setLastname(saveEmployee.getLastname());
        employee.setEmail(saveEmployee.getEmail());
        employee.setPhone(saveEmployee.getPhone());
        employee.setAddress(saveEmployee.getAddress());
        employee.setSalary(saveEmployee.getSalary());

        employeeRepository.save(employee);
    }

    @Override
    public void updateEmployee(SaveEmployee saveEmployee, Long id) {
        Optional<Employee> employeeDbOptional = employeeRepository.findById(id);

        if (employeeDbOptional.isPresent()) {
            Employee employeeDb = employeeDbOptional.get();
            employeeDb.setFirstname(saveEmployee.getFirstname());
            employeeDb.setLastname(saveEmployee.getLastname());
            employeeDb.setEmail(saveEmployee.getEmail());
            employeeDb.setPhone(saveEmployee.getPhone());
            employeeDb.setAddress(saveEmployee.getAddress());

            employeeRepository.save(employeeDb);
        } else {
            throw new RuntimeException("Customer not found with id " + id);
        }
    }


}
