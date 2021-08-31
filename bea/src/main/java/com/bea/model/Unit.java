package com.bea.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Table(name = "units")
@Entity
public class Unit {

    @Id
    @Column(name = "unit_id")
    private Integer id;

    @Column(name = "unit_name")
    private String name;
}
