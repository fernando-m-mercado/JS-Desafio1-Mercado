function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
}

function resta(numeroUno, numeroDos) {
    let resultado = numeroUno - numeroDos;
    return resultado;
}

function multiplicacion(numeroUno, numDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
}

function division(numeroUno, numeroDos) {
    let resultado = numeroUno / numeroDos;
    return resultado;
}

function mostrarResultado(resultado) {
    alert("El resultado es: " + resultado)
}

function mostrarMenu() {
    let opcion = prompt("Bievenido, seleccione una opción (ESC) Para salir \n 1 Sumar \n2 Restar \n3 Multiplicar \n4 Dividir");
    return opcion
}

function calculadora() {
    let opcionSeleccionada = mostrarMenu()
    while (opcionSeleccionada !== "ESC") {
        if (opcionSeleccionada !== "") {
            let numeroUno = parseFloat(prompt("Ingrese el primer numero "))
            let numeroDos = parseFloat(prompt("Ingrese el segundo numero "))

            opcionSeleccionada = parseInt(opcionSeleccionada)

            switch (opcionSeleccionada) {
                case 1:
                    let resultadoSuma = suma(numeroUno, numeroDos);
                    mostrarResultado(resultadoSuma);
                    break;

                case 2:
                    let resultadoResta = resta(numeroUno, numeroDos);
                    mostrarResultado(resultadoResta)
                    break;
                case 3:
                    let resultadoMultiplicacion = multiplicacion(numeroUno, numeroDos)    
                    mostrarResultado(resultado);
                    break;
                case 4:
                        let resultadoDivision = division(numeroUno, numeroDos)
                        mostrarResultado (resultadoDivision);
                    break;

                    default:
                        alert("Opcion incorrecta")
                        break;
            }
            // SWITCH PARA SELECCIONAR OPCION
        } else {
            alert("seleccione la opcion")
        }
        opcionSeleccionada = mostrarMenu()
    }
}

calculadora()