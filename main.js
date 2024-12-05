/*for ( let i = 1; i <= 20; i++){
    ingresarNombre = prompt("Ingresa tu nombre")

    console.log("Turno N°: ", i, " Nombre: ", ingresarNombre)
}*/

/*for (let i = 1; i <= 10; i++){
    
    if (i == 5){
        continue;
    }
    console.log(i)
}*/

/*let repetir = false

do{
    console.log("Repetir al menos una vez")
} while(repetir)*/

//Idea para solamente escribir números en un formulario

/*let numero = 0

do{ 
    numero = prompt("Ingresa un número")
    console.log(numero)
}while(parseInt(numero)){
    console.log("Debes ingresar números!")
}*/


/*let nombre = prompt("Ingresa un nombre")

while (nombre != "ESC"){
    switch(nombre.toUpperCase()){
        case "ANA":
            console.log("Hola Ana")
            break
        case "JUAN":
            console.log("Hola Juan")
            break
        case "CHRISTIAN":
            console.log("Hola Christian")
            break
        default:
            console.log("¿Quien te conoce papá?")
            break
    }

    nombre = prompt("Ingrese un nombre")
}*/

/*let numero = prompt("Ingresa un número")

for (let i = 1; i <= numero; i++ ){
    let saludo = "Hola"
    console.log(i, saludo)
}*/

function solicitarNombre () {
    let nombreIngresado = prompt("Ingresar nombre")
    console.log("El nombre ingresado es: " + nombreIngresado)
}

solicitarNombre();
solicitarNombre();
solicitarNombre();