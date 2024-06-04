package com.gonzaBolognese.microSpring.persistence.repository;

import com.gonzaBolognese.microSpring.persistence.entitites.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
}
