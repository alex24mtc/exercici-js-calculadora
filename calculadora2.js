//resetar numero y dejarlo en 0
function reset() {
    document.getElementById("output").innerHTML = "0";
}

//eliminar este cero antes de que comience cualquier operación
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}



//Mostrar valor de cada número

function mostrarValor(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}


//hacer funcionar el " = "

function solucion() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}


