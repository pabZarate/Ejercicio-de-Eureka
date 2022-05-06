/*• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa */

const clave: string = "eureka";
let contador1: number = 0;

while (contador1 < 3) {
  let claveIngresada: string | null = prompt("Ingrese la clave");
  if (claveIngresada === clave) {
    contador1 = 3;
    console.log("La clave ingresada es correcta");
  } else {
    contador1 = contador1 + 1;
    if (contador1 < 3) {
      alert("Clave incorrecta, intente nuevamente.");
    }
  }
}
let claveIngresada;
if (claveIngresada !== clave) {
  alert("Se han agotado los intentos permitidos.");
  console.log("Se han agotado los intentos permitidos.");
}
