package com.bea.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Table(name = "places")
@Entity
public class Place {

    @Id
    @Column(name = "place_id")
    private Integer id;

    @Column(name = "place_name")
    private String name;

    @Column(name = "place_description")
    private String description;



}
