
function mostrar()
{
	let nombre ;
	let edad; 
	let sexo;
	let puesto;
	let sueldo;
	let acumprog = 0;
	let acumana = 0;
	let acumQa = 0;
	let contprog = 0;
	let contana = 0;
	let contQa = 0;
	let sueldopromprog;
	let sueldopromana;
	let sueldopromQa;
	let respuesta = "si";
	let mayorsueldo = 0;
	let sexomaysueldo;
	let mayorsueldof = 0;
	let nombremaysuelfem;
    let contprogNb = 0;
	do {
		nombre = prompt ("ingrese nombre");
		edad = parseInt(prompt("ingrese edad"));
		while (edad <18 ){
		edad = parseInt(prompt("Error. reingrese edad"));
		}
		sexo = prompt("ingrese sexo f/m/Nb").toLowerCase();
		while (sexo != "f" && sexo != "m" && sexo != "Nb"){
		sexo = prompt("Error.ingrese sexo").toLowerCase();
		}

		puesto = prompt ("ingrese puesto").toLowerCase();
		while (puesto != "programador" && puesto != "analista" && puesto != "Qa"){
		puesto = prompt ("Error. ingrese puesto programador/analista/Qa").toLowerCase();
		}
		sueldo = parseFloat(prompt("ingrese sueldo"));
		while ( sueldo <15000 && sueldo >70000){
		sueldo =parseFloat(prompt("Error.ingrese sueldo"));
        }

		if(puesto == "programador") {
		acumprog += sueldo;
		contprog = contprog + 1 ;
		}
		else if (puesto == "analista") {
			acumana += sueldo;
			contana= contana + 1 ;
			}
			else if (puesto == "Qa") {
				acumQa += sueldo;
				contQa= contQa + 1 ;
				}
        if (sueldo >mayorsueldo){
			mayorsueldo = sueldo;
			sexomaysueldo = sexo;
		} 
		if (sexo == "f" && sueldo > mayorsueldof ){

			mayorsueldof = sueldo;
			nombremaysuelfem = nombre;

		}
        if (puesto == "programador" && sexo == "Nb" && sueldo >20000 && sueldo > 55000){

		contprogNb = contprogNb + 1 ;
	}


	




				respuesta =prompt("¿seguir ingresando?");
	}while (respuesta == "si")
	
    sueldopromprog = acumprog / contprog;
	sueldopromana = acumana / contana;
	sueldopromQa = acumQa / contQa;

	alert ("El sueldo promedio del analista es :" +sueldopromana) ; 
	alert ("El sueldo promedio del programador es :" + sueldopromprog); 
	alert ("El sueldo promedio del Qa es :" + sueldopromQa);

	alert ("El sexo con mayor sueldo es : " + sexomaysueldo );

	alert ("El nombre del empleado femenino con mas sueldo es : " + nombremaysuelfem);
	alert ("La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es: " + contprogNb);

    


}
