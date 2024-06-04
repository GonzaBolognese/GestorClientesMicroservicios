package com.gonzaBolognese.microSpring.dto;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class SaveEmployee implements Serializable {
    @NonNull
    private String firstname;
    @NonNull
    private String lastname;
    private String email;
    private String phone;
    private String address;
    private Double salary;
}

