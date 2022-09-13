let productos = [];
let carrito = []
const iva = 1.21;
class producto {
    constructor(id, nombre, precio,img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img
    }

    sumaImpuestos () {
        this.precio = Math.ceil(this.precio * iva)
    }

    desplegarProductos (){
        const card = 
            `<div id="card">
            <div class="container__img">
                <img src="${this.img}" alt="">
            </div>
            <p class="nombre-p">${this.nombre}</p>
            <div class="container__precio">
                <p class="precio">$${this.precio}</p>
            </div>
            <div class="container__button">
                <button id= ${this.id}>
                    Comprar
                </button>
            </div>`
            const container = document.getElementById("container__card")
            container.innerHTML += card
    }

    evento(){
        const boton = document.getElementById(this.id)
        const productoDetectado = productos.find (product => product.id == this.id)
        boton.addEventListener('click', () => carritoAgregar(productoDetectado))
    }
    
}

let productos1 = new producto(1, "Amd Ryzen 3", 24500, "img/ryzen 3.jpg");
let productos2 = new producto(2, "Amd Ryzen 5", 45900, "img/ryzen 5.jpg");
let productos3 = new producto(3, "Amd Ryzen 7", 82950, "img/ryzen 7.jpg");
let productos4 = new producto(4, "Amd Ryzen 9", 127500, "img/ryzen 9.jpg");
productos.push(productos1,productos2, productos3, productos4);

productos1.sumaImpuestos ();
productos2.sumaImpuestos ();
productos3.sumaImpuestos ();
productos4.sumaImpuestos ();

productos.forEach(elemento => {
    elemento.desplegarProductos()
})

productos.forEach (e=>{
    e.evento()
})

function carritoAgregar (producto) {
    
    const agregadoAlCarrito = carrito.find (prod => prod.id == producto.id)

    if (!agregadoAlCarrito){
        carrito.push({...producto, cantidad: 1})
    } else {
        const carritoFiltrado = carrito.filter (prod => prod.id != producto.id)
        carrito = [
            ...carritoFiltrado,
            {...agregadoAlCarrito, cantidad: agregadoAlCarrito.cantidad + 1}
        ]
    }

    contador.innerHTML = (carrito.reduce((acc, prod) => acc + prod.cantidad, 0))

}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)