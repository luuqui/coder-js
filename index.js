let elegirProducto = parseInt(
    prompt(
        "Ingrese el producto que desea comprar: 1.AMD RYZEN 3 - 2.AMD RYZEN 5 - 3.AMD RYZEN 7 - 4.AMD RYZEN 9"
    )
);
let seguir = true;
let totalCompra = 0;
let productos = [];
let decision;
const iva = 1.21;
class producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    sumaImpuestos () {
        this.precio = this.precio * iva
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

while (seguir === true) {
    let productoSeleccionado = productos.find(
        (prod) => prod.id === elegirProducto
    );
    if (productoSeleccionado) {
        totalCompra = totalCompra + productoSeleccionado.precio;
    } else {
        elegirProducto = parseInt(
            prompt(
                "Ingrese un producto correcto: 1.AMD RYZEN 3 - 2.AMD RYZEN 5 - 3.AMD RYZEN 7 - 4.AMD RYZEN 9"
            )
        );
        continue;
    }

    decision = parseInt(prompt("Deseas seguir comprando? 1.Si - 2.No"));
    if (decision === 1) {
        elegirProducto = parseInt(
            prompt(
                "Ingrese el producto que desea comprar: 1.AMD RYZEN 3 - 2.AMD RYZEN 5 - 3.AMD RYZEN 7 - 4.AMD RYZEN 9"
            )
        );
    } else if (decision === 2) {
        seguir = false;
    }
}

alert("El total a pagar es de: " + totalCompra);