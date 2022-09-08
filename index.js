let productos = [];
let lista = document.getElementById("lista")

const iva = 1.21;
class producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    sumaImpuestos () {
        this.precio = Math.ceil(this.precio * iva)
    }
}

let productos1 = new producto(1, "Amd Ryzen 3", 24500);
productos.push(productos1);
let productos2 = new producto(2, "Amd Ryzen 5", 45900);
productos.push(productos2);
let productos3 = new producto(3, "Amd Ryzen 7", 82950);
productos.push(productos3);
let productos4 = new producto(4, "Amd Ryzen 9", 127500);
productos.push(productos4);

productos1.sumaImpuestos ();
productos2.sumaImpuestos ();
productos3.sumaImpuestos ();
productos4.sumaImpuestos ();

productos.forEach(elemento=>{
    let list = document.createElement ("li")
    list.innerText = `${elemento.nombre}: $${elemento.precio}`
    lista.append(list)
}
)
