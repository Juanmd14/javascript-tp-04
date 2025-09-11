// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

class AgendaContacto {
  #contactos;
  #listaContacto;
  constructor(contactos) {
    this.#contactos = contactos;
    this.#listaContacto = 4;
  }

  get contactos() {
    return this.#contactos;
  }

  set nuevoContacto(contacto) {
    this.#contactos = contacto;
  }

  get listaContacto() {
    return this.#listaContacto;
  }
  // [1,2] < 4

  aniadirContacto(contacto) {
    if (this.#contactos.length < this.#listaContacto) {
      this.#contactos.push(contacto);
    } else {
      alert("La agenda esta llena, no se puede agregar al contacto");
    }
  }

  existeContacto(nombre) {
    let aux = this.#contactos.find((contacto) =>
      contacto.nombre.includes(nombre)
    );

    if (aux) {
      alert("El contacto existe");
      alert(aux);
    } else {
      alert("El contacto no existe");
      alert(aux);
    }
  }

  listaContactos() {
    for (let i = 0; i < this.#contactos.length; i++) {
      alert(`Mostrando contacto ${i + 1}
        Nombre: ${this.#contactos[i].nombre}
        Telefono: ${this.#contactos[i].telefono}`);
    }
  }

  buscarContacto(nombre) {
    const aux = this.#contactos.filter(
      (contacto) => contacto.nombre === nombre
    );

    if (aux) {
      alert(`El telefono del contacto ${aux[0].nombre} es: ${aux[0].telefono}`);
      console.log(aux);
    } else {
      `El contacto no existe`;
    }
  }

  eliminarContacto(nombre) {
    console.log(nombre);
    const aux = this.#contactos.findIndex(
      (contacto) => contacto.nombre === nombre
    );

    if (aux || aux === 0) {
      this.#contactos.splice(aux, 1);
      alert(`Contacto eliminado`);
    } else {
      alert(`El contacto no existe`);
    }
  }

  agendaLlena() {
    if (this.#contactos.length > this.#listaContacto) {
      alert(`La agenda esta llena`);
    } else {
      alert(`La agenda no esta llena`);
    }
  }

  huecosLibres() {
    const calculo = this.#listaContacto - this.#contactos.length;
    if (calculo > 0) {
      alert(`La agenda tiene ${calculo} huecos libres`);
    } else {
      alert(`La agenda esta llena`);
    }
  }
}

let agenda1 = new AgendaContacto([
  { nombre: "Ezequiel", telefono: 381746253 },
  { nombre: "Jose", telefono: 38123456 },
]);

alert("Bienvenido a tu agenda de contactos");

do {
  let opcion =
    +prompt(`Ingrese un numero del 1 al 7 según lo que quiere realizar en su agenda
    1- Agregar Contacto
    2- Verificar si Existe un Contacto
    3- Mostrar Contacto
    4- Buscar el teléfono de un contacto por su nombre
    5- Eliminar un contacto
    6- Consultar si la agenda esta llena
    7- Consultar cuantos huecos libres tiene la agenda`);

  switch (opcion) {
    case 1:
      agenda1.aniadirContacto({
        nombre: prompt("Ingrese el nombre del contacto"),
        telefono: +prompt("Ingrese el número de teléfono"),
      });
      break;
    case 2:
      let nombre = prompt("Ingrese el nombre del contacto");
      agenda1.existeContacto(nombre);
      break;
    case 3:
      agenda1.listaContactos();
      break;
    case 4:
      agenda1.buscarContacto(prompt("Ingrese el nombre del contacto"));
      break;
    case 5:
      agenda1.eliminarContacto(
        prompt("Ingrese el nombre del contacto a eliminar")
      );
      break;
    case 6:
      agenda1.agendaLlena();
      break;
    case 7:
      agenda1.huecosLibres();
      break;
    default:
      break;
  }
} while (
  confirm("¿Desea seguir modificando su agenda o elegir una opción válida?")
);
