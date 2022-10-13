const containerSection = document.querySelector('#containerSection')
const templateCard = document.querySelector('#template-card').content
const fragment = document.createDocumentFragment()
const templateFooter = document.querySelector('#template-footer').content
const templateCarrito = document.querySelector('#templateCarrito').content
const items = document.querySelector('#items')
const footer = document.querySelector('#footer')
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    apiLocal()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

containerSection.addEventListener('click', e => {
    addCarrito(e)
})

items.addEventListener('click', e => {
    btnAccion(e)
})

const apiLocal = async () => {
    try {
        const res = await fetch('productos.json')
        const data = await res.json()
        pintarData(data)
    } catch (error) {
        console.log(error);
    }
}

const pintarData = (data) => {
    data.forEach(element => {
        templateCard.querySelector('h5').textContent = element.nombre
        templateCard.querySelector('img').setAttribute('src', element.img)
        templateCard.querySelector('p').textContent = element.precio
        templateCard.querySelector('button').dataset.id = element.id

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    containerSection.appendChild(fragment)
}

const addCarrito = e => {

    if ((e.target.classList.contains('btn-dark'))) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = (objeto) => {
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    pintarCarrito()
    toastJs()
}

const pintarCarrito = () => {
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return
    }
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.querySelector('#vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = e => {
    if (e.target.classList.contains('btn-info')) {
        carrito[e.target.dataset.id]
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
        toastJsEliminar()
    }

    e.stopPropagation()
}

function toastJs() {
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

function toastJsEliminar() {
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

