let productoSeleccionado = parseInt(prompt("Ingrese el producto que desea comprar: 1.AMD RYZEN 3 - 2.AMD RYZEN 5 - 3.AMD RYZEN 7 - 4.AMD RYZEN 9"))
let seguir = true
let totalCompra = 0
let decision 
let carrito = []
let productos = []

const amdRyzen3 = {
    nombre: "AMD RYZEN 3",
    precio: 3000,
}
productos.push(amdRyzen3)
const amdRyzen5 = {
    nombre: "AMD RYZEN 5",
    precio: 5000
}
productos.push(amdRyzen5)
const amdRyzen7 = {
    nombre: "AMD RYZEN 7",
    precio: 9000
}
productos.push(amdRyzen7)
const amdRyzen9 = {
    nombre: "AMD RYZEN 9",
    precio: 15000
}
productos.push(amdRyzen9)

while (seguir===true){
    if (productoSeleccionado === 1){
        carrito.push(productos[0])
    } else if (productoSeleccionado === 2){
        carrito.push(productos[1])
    } else if (productoSeleccionado === 3){
        carrito.push(productos[2])
    } else if (productoSeleccionado === 4){
        carrito.push(productos[3])
    } else{
        productoSeleccionado = parseInt(prompt("Ingrese un producto correcto: 1.AMD RYZEN 3 - 2.AMD RYZEN 5 - 3.AMD RYZEN 7 - 4.AMD RYZEN 9"));
        continue
    }
    
    decision = parseInt(prompt("Deseas seguir comprando? 1.SI - 2.NO"))
    if (decision === 1){
        productoSeleccionado = parseInt(prompt("Ingrese un producto correcto: 1.AMD RYZEN 3 - 2.AMD RYZEN 5 - 3.AMD RYZEN 7 - 4.AMD RYZEN 9"));
    } else if(decision === 2){
        seguir = false
    }
}


for (const elemento of carrito) {
    totalCompra = totalCompra + elemento.precio;
}

    alert ("El valor total es de: " + totalCompra)