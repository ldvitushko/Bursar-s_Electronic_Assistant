package com.bea.controller;

import com.bea.model.Inventory;
import com.bea.model.Place;
import com.bea.model.Unit;
import com.bea.repository.InventoryRepository;
import com.bea.repository.PlaceRepository;
import com.bea.repository.UnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {

    @Autowired
    InventoryRepository inventoryRepository;

    @Autowired
    PlaceRepository placeRepository;

    @Autowired
    UnitRepository unitRepository;

    @GetMapping("/inventory")
    public List<Inventory> findInventory() {
        return inventoryRepository.findAll();
    }

    @PostMapping("/inventory")
    public void saveInventory(@RequestBody Inventory inventory) {
        inventoryRepository.save(inventory);
    }

    @GetMapping("/place")
    public List<Place> findPlaces() {
        return placeRepository.findAll();
    }

    @GetMapping("/unit")
    public List<Unit> findUnits() {
        return unitRepository.findAll();
    }

}
