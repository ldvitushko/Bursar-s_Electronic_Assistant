var serverInventoryUrl = "http://localhost:8081/inventory"

class Inventory {
    id;
    name;
    place;
    unit;
    count;
    operation;
}

class Operation {
    id;
    name;
    date;
}

class Unit {
    id;
    name;
}

class Place extends Unit {
    description;
}


let dataList;

function getInventory() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8081/inventory", false);
    request.send();
    dataList = JSON.parse(request.responseText);
    for (let i = 0; i < dataList.length; i++) {
        addRow(dataList[i]);
    }

}

function getDataByName(name) {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:8081/" + name, false);
    request.send();
    return JSON.parse(request.responseText);
}

function sendData() {
    let mainModel = new MainModel();
    let secondModel = new SecondModel();
    mainModel.id = document.getElementById('mainModelId').value;
    mainModel.name = document.getElementById('mainModelText').value;
    secondModel.id = document.getElementById('secondModelId').value;
    secondModel.name = document.getElementById('secondModelName').value;
    mainModel.model = secondModel;
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8080", true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    alert(JSON.stringify(mainModel));
    request.send(JSON.stringify(mainModel));

}

function addRow(inventory) {
    let tableBody = document.getElementById('inventoryTable');
    let newRow = tableBody.insertRow(tableBody.rows.length);
    let nameCell = newRow.insertCell(0);
    let idCell = newRow.insertCell(1);
    let placeCell = newRow.insertCell(2);
    let unitCell = newRow.insertCell(3);
    let countCell = newRow.insertCell(4);

    let nameText = document.createTextNode(inventory.name);
    let idText = document.createTextNode(inventory.id);
    let placeText = document.createTextNode(inventory.place.name);
    let unitText = document.createTextNode(inventory.unit.name);
    let countText = document.createTextNode(inventory.count);

    nameCell.appendChild(nameText);
    idCell.appendChild(idText);
    placeCell.appendChild(placeText);
    unitCell.appendChild(unitText);
    countCell.appendChild(countText);

}

function doFilter(name, place) {
    refreshTable();
    if (name !== "" || place !== "") {
        for (let i = 0; i < dataList.length; i++) {
            if (dataList[i].name.toUpperCase().indexOf(name.toUpperCase()) !== -1 || name === "") {
                if (place === "" || dataList[i].place.name.toUpperCase() === place.toUpperCase()) {
                    addRow(dataList[i]);
                }
            }
        }
    }
    else {
        getInventory();
    }

}

function saveInventory() {
    let inventory = new Inventory();
    inventory.id = document.getElementById('inventoryId').value;
    inventory.name = document.getElementById('inventoryName').value;

    let places = getDataByName('place');
    let placeName = document.getElementById('place').value;
    for (let i = 0; i < places.length; i++) {
        if (places[i].name === placeName) {
            inventory.place = places[i];
        }
    }

    let untits = getDataByName('unit')
    let unitName = document.getElementById('unit').value;
    for (let i = 0; i < untits.length; i++) {
        if (untits[i].name === unitName) {
            inventory.unit = untits[i];
        }
    }

    inventory.count = document.getElementById('inventoryCount').value;

    operation = new Operation();
    operation.id = 1;
    operation.name = 'Приход';
    operation.date = document.getElementById('operationDate').value;
    
    inventory.operation = operation;

    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:8081/inventory", true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    alert(JSON.stringify(inventory));
    request.send(JSON.stringify(inventory));
}

function refreshTable() {
    var rows = document.getElementById('inventoryTable').getElementsByTagName('tr').length;
    for (let i = 1; i < rows; i++) {
        removeRow(1);
    }
}

function removeRow(rowNumber) {
    let tableBody = document.getElementById('inventoryTable');
    tableBody.deleteRow(rowNumber);
}
