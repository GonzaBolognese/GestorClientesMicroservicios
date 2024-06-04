package com.gonzaBolognese.microSpring.dto;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class SaveSupplier implements Serializable {

    @NonNull
    private String name;

    private String email;
    private String phone;
    private String address;
    private String web;
    private String contact;

}
