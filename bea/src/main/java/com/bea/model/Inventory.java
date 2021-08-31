package com.bea.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Table(name = "inventory")
@Entity
public class Inventory {

    @Id
    @Column(name = "inventory_id")
    private String id;

    @Column(name = "inventory_name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "inventory_place_id", nullable = false)
    private Place place;

    @ManyToOne
    @JoinColumn(name = "inventory_unit_id", nullable = false)
    private Unit unit;

    @Column(name = "inventory_count")
    private Double count;

    @ManyToOne
    @JoinColumn(name = "operation_type", nullable = false)
    private Operation operation;


}
