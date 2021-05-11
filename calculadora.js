window.onload = function()
{
	document.getElementById("boton").onclick = function(event)
	{
		event.preventDefault();
 
		calcular();
	};
};
 
////////////////////////////////////////////////////////
 
function calcular()
{
	var numero1 = document.getElementById("numero1");
	var numero2 = document.getElementById("numero2");
	var calculadora  = document.getElementById("calculadora");

 
	// operaciones //
 
	var resultado = NaN;
 
	switch(calculadora.value)
	{
		case "suma":
			resultado = parseFloat(numero1.value) + parseFloat(numero2.value);
		break;
 
		case "resta":
			resultado = parseFloat(numero1.value) - parseFloat(numero2.value);
		break;
 
		case "multiplicacion":
			resultado = parseFloat(numero1.value) * parseFloat(numero2.value);
		break;
 
		case "division":
			resultado = parseFloat(numero1.value) / parseFloat(numero2.value);
            // para dividir por 0 y no de como resultado Infinity
            var resultado = isFinite(Number((((0-18)/0)*100).toFixed(2))) || 0;
		break;
 
		default:
			alert("El operador " + calculadora.value + " no se encuentra definido");
		break;
	


    }

	if(!isNaN(resultado))
		document.getElementById("resultado").value = resultado;
}

