let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")

let prm1
let operador = ""

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];

        if (boton.className != "operadores")
            boton.addEventListener("click", pintar)
        else
            boton.addEventListener("click", operaciones)
    }
}

function pintar(e) {
    resultado.value += e.target.innerText
}

function operaciones(e) {

    let op = e.target.innerText

    // limpiar
    if (op == "Ce") {
        resultado.value = ""
        prm1 = ""
        operador = ""
        return
    }

    // guardar operador
    if (op == "+" || op == "-" || op == "*" || op == "/") {
        prm1 = resultado.value
        operador = op
        resultado.value = ""
        return
    }

    // igual
    if (op == "=") {

        let prm2 = resultado.value
        let res

        if (operador == "+")
            res = parseFloat(prm1) + parseFloat(prm2)

        if (operador == "-")
            res = parseFloat(prm1) - parseFloat(prm2)

        if (operador == "*")
            res = parseFloat(prm1) * parseFloat(prm2)

        if (operador == "/")
            res = parseFloat(prm1) / parseFloat(prm2)

        resultado.value = res
    }
}