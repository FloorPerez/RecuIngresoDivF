
function mostrar() {

	let res = "s";

	let nombreCliente;
	let cantlamparas;
	let marca;
	let precioporunidad;
	let preciototalcompra;

	let descuento10porc;
	let precioconDescuento10porc;
	let precioconDescuento10;

	let descuento5porc;
	let precioconDescuento5porc;
	let precioconDescuento5;

	let acumtotalventas = 0;

	let acumFelipeLamparas = 0;
	let acumArgentinaLuz = 0;
	let acumIlluminatis = 0;

	let promFelipeLamparas = 0;
	let promArgentinaLuz = 0;
	let promIlluminatis = 0;

	let contcantventas = 0;

	do {

		nombrecliente = prompt("ingrese el nombre del cliente");
		cantlamparas = parseInt(prompt("ingrese el nombre del cliente"));

		marca = prompt("ingrese la marca (FelipeLamparas - ArgentinaLuz -Illuminatis)").toLowerCase();
		while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis") {
			marca = prompt("error, ingrese la marca (FelipeLamparas - ArgentinaLuz -Illuminatis)").toLowerCase();
		}

		precioporunidad = parseFloat(prompt("ingrese el precio por unidad"));

		preciototalcompra = cantlamparas * precioporunidad;

		// Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra
		if (marca == "felipeLamparas" && cantlamparas > 5) {
			descuento10porc = preciototalcompra * 10 / 100;
			precioconDescuento10 = preciototalcompra - descuento10porc;
		}

		if (marca == "argentinaluz" && cantlamparas >= 3) {
			descuento5porc = preciototalcompra * 5 / 100;
			precioconDescuento5 = preciototalcompra - descuento5porc;
		}

		acumtotalventas = acumtotalventas + preciototalcompra;

		if (marca == "felipelamparas")
			acumFelipeLamparas = acumFelipeLamparas + cantlamparas;
		else if (marca == "illuminatis")
			acumIlluminatis = acumIlluminatis + cantlamparas;
		else if (marca == "argentinaluz")
			acumArgentinaLuz = acumArgentinaLuz + cantlamparas;

		contcantventas = contcantventas + 1;

		res = prompt("desea ingresar otra venta? (s/n)");
		while (res != "s" && res != "n") {
			res = prompt("error, desea ingresar otra venta? (s/n)");
		}

	} while (res == "s")

	alert("La empresa recauda " + acumtotalventas + " pesos.");

	promFelipeLamparas = acumFelipeLamparas / contcantventas;
	promArgentinaLuz = acumArgentinaLuz / contcantventas;
	promIlluminatis = acumIlluminatis / contcantventas;

	alert("El promedio de la cantidad de lamparas vendidas de felipeLamparas es: " + promFelipeLamparas);
	alert("El promedio de la cantidad de lamparas vendidas de argentinaluz es: " + promArgentinaLuz);
	alert("El promedio de la cantidad de lamparas vendidas de illuminatis es: " + promIlluminatis);
}