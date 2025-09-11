/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/

5;

class Persona {
  constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
    this.DNI = this.generaDNI();
  }

  // a que generacion pertenece

  mostrarGeneracion() {
    if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      console.log(
        `${this.nombre} pertenece a Silent Generation. Rasgo: Austeridad.`
      );
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      console.log(
        `${this.nombre} pertenece a la generacion Baby Boom. Rasgo: Ambicion.`
      );
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      console.log(
        `${this.nombre} pertenece a la Generacion X. Rasgo: Obsesion por el exito.`
      );
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      console.log(
        `${this.nombre} pertenece a la generacion de los Millennials. Rasgo: Frustracion.`
      );
    } else if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      console.log(
        `${this.nombre} pertenece a la Generacion Z. Rasgo: Irreverencia.`
      );
    } else {
      console.log(`${this.nombre} no pertenece ninguna generacion.`);
    }
  }

  // Metodo para saber si es mayor de edad

  esMayorDeEdad() {
    if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad.`);
    } else {
      console.log(`${this.nombre} es menor de edad.`);
    }
  }

  // Metodo para mostrar todo los datos

  mostrarDatos() {
    console.log(`
      Nombre: ${this.nombre}
      Edad: ${this.edad}
      DNI: ${this.DNI}
      Sexo: ${this.sexo}
      Peso: ${this.peso}
      Altura: ${this.altura}
      Año de nacimiento: ${this.añoNacimiento}
    `);
  }

  // metodo para generar el dni de 8 cifras
  generaDNI() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }
}

let persona1 = new Persona("Juan", 25, "H", 70, 1.75, 2000);

persona1.mostrarDatos();
persona1.esMayorDeEdad();
persona1.mostrarGeneracion();
