package com.gonzaBolognese.microSpring.controllers;

import com.gonzaBolognese.microSpring.dto.SaveCustomer;
import com.gonzaBolognese.microSpring.dto.SaveEmployee;
import com.gonzaBolognese.microSpring.persistence.entitites.Customer;
import com.gonzaBolognese.microSpring.persistence.entitites.Employee;
import com.gonzaBolognese.microSpring.service.ICustomerService;
import com.gonzaBolognese.microSpring.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    @GetMapping("/api/employees")
    public List<Employee> getAll() {
        return employeeService.getAll();
    }

    @GetMapping("/api/employees/{id}")
    public Employee getOneById (@PathVariable String id){
        return employeeService.getOneById(Long.parseLong(id));
    }

    @DeleteMapping("/api/employees/{id}")
    public void deleteOneById (@PathVariable String id){
        employeeService.removeOneById(Long.parseLong(id));
    }

    @PostMapping("/api/employees")
    public void saveNewCustomer (@RequestBody SaveEmployee saveEmployee){

        employeeService.saveNewEmployee(saveEmployee);
    }

    @PutMapping("/api/employees/{id}")
    public void updateEmployees(@RequestBody SaveEmployee saveEmployee, @PathVariable String id){
        employeeService.updateEmployee(saveEmployee, Long.parseLong(id));
    }
}

