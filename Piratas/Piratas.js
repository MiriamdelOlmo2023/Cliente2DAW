class Navio {
    constructor(nombre, capitan, duracion) {
        this.nombre = nombre;
        this.capitan = capitan;
        this.duracion = duracion;
    }
}

class Barco extends Navio {
    constructor(nombre, capitan, duracion, tripulacion) {
        super(nombre, capitan, duracion);
        this.cantidad = Math.floor(Math.random() * 4) + 2; // Aleatorio entre 2 y 5
        this.tripulacion = tripulacion;
    }
}

class Bombardero extends Navio {
    constructor(nombre, capitan, duracion) {
        super(nombre, capitan, duracion);
        this.potencia = Math.floor(Math.random() * 31) + 30; // Aleatorio entre 30 y 60
    }
}

class Pirata {
    constructor(nombre) {
        this.nombre = nombre;
        this.ataque = Math.random() * 2 - 1 ? true : false;
        //this.municion = municion;
    }
}

class Pistolero extends Pirata {
    constructor(nombre) {
        super(nombre);
        this.disparo = Math.floor(Math.random() * 5) + 6; //Aleatorio entre 6 y 10
        this.ataque = Math.floor(Math.random() * 10) + 1; //Aleatorio entre 1 y 10
        this.tipo = "Pistolero";
    }
}

class Artillero extends Pirata {
    constructor(nombre) {
        super(nombre);
        this.disparo = Math.floor(Math.random() * 4) + 3; // Aleatorio entre 3 y 6
        this.ataque = Math.floor(Math.random() * 11) + 10; // Aleatorio entre 10 y 20
        this.tipo = "Artillero";
    }
}

class Cañonero extends Pirata {
    constructor(nombre) {
        super(nombre);
        this.disparo = Math.floor(Math.random() * 3) + 1; // Aleatorio entre 1 y 3
        this.ataque = Math.floor(Math.random() * 21) + 20; // Aleatorio entre 20 y 40
        this.tipo = "Cañonero";
    }
}

const listaPiratas = [
    new Artillero("Golderos"),
    new Artillero("Jose María"),
    new Artillero("Sergio"),

    new Cañonero("Palacios"),
    new Cañonero("Antonio"),
    new Cañonero("Carlos"),

    new Pistolero("Alberto"),
    new Pistolero("Javier"),
    new Pistolero("Pablo")
];

function ocultarDivs(){
    
    document.getElementById("visualizarPiratas").hidden = true;
    document.getElementById("añadirPirata").hidden = true;
    document.getElementById("eliminarPirata").hidden = true;
    document.getElementById("simularBatalla").hidden = true;
}

function visualizarPiratas() {
    ocultarDivs();
    var table = document.getElementById("visualizarPiratasTabla");
    var tableBody = table.getElementsByTagName("tbody")[0];
    
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    for (var i = 0; i < listaPiratas.length; i++) {
        var row = tableBody.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = listaPiratas[i].nombre;
        cell2.innerHTML = listaPiratas[i].tipo;
    }

    //MOSTRAR DIV VISUALIZAR PIRATAS
    document.getElementById("visualizarPiratas").hidden = false;
}


function añadirPiratasMostrar(){
    ocultarDivs();
     //MOSTRAR DIV AÑADIR PIRATAS
     document.getElementById("añadirPirata").hidden = false;
}

function añadirPirata(){

    if(document.getElementById("nombreNuevoPirata").value != null){
        switch(document.getElementById("añadirPirataSelect").value){
            case "Artillero":
                listaPiratas.push(new Artillero(document.getElementById("nombreNuevoPirata").value));
                break;
            case "Pistolero":
                listaPiratas.push(new Pistolero(document.getElementById("nombreNuevoPirata").value));
                break;
            case "Cañonero":
                listaPiratas.push(new Cañonero(document.getElementById("nombreNuevoPirata").value));
                break;
            default:
                break;
        }

        document.getElementById("nombreNuevoPirata").value = "";
    }
}
function eliminarPirata() {
    ocultarDivs();
    document.getElementById("eliminarPirata").hidden = false;

    var table = document.getElementById("eliminarPiratasTabla");
    var tableBody = table.getElementsByTagName("tbody")[0];

    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    for (var i = 0; i < listaPiratas.length; i++) {
        var row = tableBody.insertRow();

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = listaPiratas[i].nombre;
        cell2.innerHTML = listaPiratas[i].tipo;

        var button = document.createElement("button");
        button.textContent = "Eliminar";
        
        (function (indice) {
            button.addEventListener("click", function () {
                eliminar(indice);
                eliminarPirata();
            });
        })(i);

        cell3.appendChild(button);
    }
}

function eliminar(i) {
    listaPiratas.splice(i, 1);
}

