//Cuenta bancaria - Dificultad:  🟢🟡
/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

class Cuenta {
  constructor(titular) {
    this.titular = titular; // nombre del titular
    this.saldo = 0; // saldo inicial
  }

  // Metodo para ingresar dinero
  ingresar(cantidad) {
    this.saldo += cantidad;
  }

  // Metodo para extraer dinero
  extraer(cantidad) {
    this.saldo -= cantidad;
  }

  // Metodo para saber el estado de la cuenta
  informar() {
    console.log(`${this.titular} tiene en su cuenta ${this.saldo} pesos.`);
  }
}

// Crear una instancia de la clase
let cuentaAlex = new Cuenta("Alex");

cuentaAlex.informar(); // Alex tiene en su cuenta tantos pesos.
