let montoDeterminado = 50000
let interes = 20
let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea pagar: 3 - 6 - 9 - 12"))
let total
let otraCuota = true
let decision


function calcularIntereses (montoDeterminado){
    const calculoIntereses = montoDeterminado / 100 * interes
    const totalDeIntereses = montoDeterminado + calculoIntereses
    return totalDeIntereses
}

while (otraCuota === true){
    
    if (cantidadCuotas === 3){
        total = calcularIntereses(montoDeterminado) / 3 
    } else if (cantidadCuotas === 6) {
        total = calcularIntereses(montoDeterminado) / 6 
    } else if (cantidadCuotas === 9) {
        total = calcularIntereses(montoDeterminado) / 9 
    } else if (cantidadCuotas === 12) {
        total = calcularIntereses(montoDeterminado) / 12
    } else {
        cantidadCuotas = parseInt(prompt("Ingrese una cantidad de cuotas correcta: 3 - 6 - 9 - 12"))
        continue
    }
    
    alert ("El total a pagar es de: " + total)
    
    decision = parseInt(prompt("Deseas ver otra cuota? 1.Si - 2.No"))
    if (decision === 1){
        cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea pagar: 3 - 6 - 9 - 12"))
    } else if (decision === 2){
        otraCuota = false
    }

    
}