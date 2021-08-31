package com.bea.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Data
@Table(name = "operations")
@Entity
public class Operation {

    @Id
    @Column(name = "operation_id")
    private Integer id;

    @Column(name = "operation_type")
    private String name;

    @Column(name = "operation_date")
    private LocalDate date;

}
