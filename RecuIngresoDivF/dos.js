function mostrar()
{
    let nombre;
    let carrera;
    let sexo;
    let cantmaterias;
    let notaprom;
    let edad;
    let nommejorprom;
    let notamejorprom = 0;
    let edadmasjoven = 100;
    let nombremasjovenf;
    let porcquimica;
    let porcfisica;
    let porcsistemas;
    let contquimica = 0;
    let contfisica = 0;
    let contsistemas = 0;
    let mayorcantmate;
    let edadcursamasmaterias;
    let nombrecursamasmate;

    for(let i = 0; i < 500 ; i++){

        nombre = prompt ("Ingrese nombre");
        
        carrera = prompt ("Ingrese carrera quimica/fisica/sistemas").toLowerCase()
        while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas"){
        carrera = prompt ("Error. Ingrese carrera").toLowerCase();
        }
        sexo = prompt ("Ingrese sexo f/m/Nb").toLowerCase();
        while (sexo != "f" && sexo != "m" && sexo != "Nb"){
        sexo = prompt ("Error.Ingrese sexo").toLowerCase();
        }
        cantmaterias = parseInt(prompt("Ingrese cantidadde materias"));
        while (cantmaterias >=1 && cantmaterias <=5){
        cantmaterias = prompt ("Error. Ingrese cantidad de materias");
        }
        notaprom = parseFloat(prompt("Ingrese nota"));
        while (notaprom <0 || notaprom >10){
        notaprom = parseFloat(prompt("Error. Ingrese nota"));
        }
        edad = parseInt(prompt("Ingrese edad"));
        while (edad <18 ){
        edad = parseInt(prompt("Error.Ingrese edad"));
        }

if ( notaprom > notamejorprom && carrera == "fisica"  ){
    notamejorprom = notaprom;
    nommejorprom = nombre; 
}
if (sexo == "f" && edad < edadmasjoven ){
    edadmasjoven = edad;
    nombremasjovenf = nombre;
}
        if( carrera == "quimica"){
            contquimica = contquimica + 1 ;
        }
        else if( carrera == "fisica"){
             contfisica = contfisica +1 ;
             
        }
       else if( carrera == "sistemas"){
             contsistemas = contsistemas +1 ;
       }


if (carrera != "quimica" && cantmaterias > mayorcantmate)
{
    mayorcantmate = cantmaterias;
    edadcursamasmaterias = edad;
    nombrecursamasmate = nombre;
}
    }
   porcfisica =  contfisica / 500 * 100 ;
   porcquimica =  contquimica /500 * 100 ;
   porcsistemas =  contsistemas / 500 *100 ;

    alert ("El nombre del mejor promedio de los alumnos que estudian Fisica es : "+ nommejorprom);  );
    alert ("El nombre de la alumna mas joven es : " + nombremasjovenf);

    alert ("El porcentaje de alumnos que estudia quimica es : " + porcquimica);
    alert ("El porcentaje de alumnos que estudia fisica es : " + porcfisica);
    alert ("El porcetaje de alumnos que estudia sistemas es : " + porcsistemas);

    alert (" El nombre del estudiante que cursa mas materias es :" + nombrecursamasmate + " y su edad es " +edadcursamasmaterias);
}
