const contenedorCard = document.getElementById("containerCard")
const contadorCarrito = document.getElementById("counterCard")
const contenedorCarrito = document.getElementById('carrito-contenedor')
const precioTotal = document.getElementById("precioTotal")

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

//mostrar cards
productos.forEach((producto) => {
    const div = document.createElement('div')
    div.innerHTML =
        `<div class="card" style="width: 18rem;">
    <img src= ${producto.img} class="img card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <button id=${producto.id} class="btn btn-primary">Agregar al carrito</button>
    </div>
</div>`

    contenedorCard.appendChild(div)

    let boton = document.getElementById(producto.id)
    boton.addEventListener('click', () => {
        toastJs()
        agregarAlCarrito(producto.id)
    })

})

//funciones toastify´s

function toastJs (){
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "#373b44",
            background: "-webkit-linear-gradient(to right, #373b44, #4286f4)",
            background: "linear-gradient(to right, #373b44, #4286f4)"
        }
    }).showToast()
}

function toastJsEliminar (){
    Toastify({
        text: "Eliminado del carrito",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "#373b44",
            background: "-webkit-linear-gradient(to right, #373b44, #4286f4)",
            background: "linear-gradient(to right, #373b44, #4286f4)"
        }
    }).showToast()
}


const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId)
    if(existe){
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                //aplico operador de incremento
                prod.cantidad++
            }
        })
    } else {
        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito()
    
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((producto) => producto.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    toastJsEliminar ()
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <p>Producto: ${producto.nombre}</p>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <button onclick = "eliminarDelCarrito(${producto.id})" class="boton-eliminar"><i class="icon fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild (div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce ((acc, prod) => acc + prod.precio*prod.cantidad, 0)
}




