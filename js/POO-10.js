// 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }

  buscarAvion(nombre) {
    const avion = this.listaAviones.find((avi) => avi.nombre === nombre);
    if (avion) {
      console.log(
        `Nombre: ${avion.nombre}, Capacidad: ${avion.capacidad}, Destino: ${avion.destino}`
      );
      return avion;
    } else {
      console.log("El avion no existe");
    }
  }
}

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);
      console.log(`${pasajero} ha abordado el avión ${this.nombre}`);
    } else {
      console.log(`El avión ${this.nombre} está lleno`);
    }
  }
}

const aeropuerto1 = new Aeropuerto("Aeropuerto Internacional");

let avion1 = new Avion("Boeing 747", 3, "New York, Estados Unidos");
let avion2 = new Avion("Boeing 748", 5, "Brasil");

aeropuerto1.agregarAvion(avion1);
aeropuerto1.agregarAvion(avion2);

console.log(aeropuerto1);

let avionEncontrado = aeropuerto1.buscarAvion("Boeing 748");
if (avionEncontrado) {
  avionEncontrado.abordar("Fernando");
  avionEncontrado.abordar("Daniel");
  avionEncontrado.abordar("Marcos");
  avionEncontrado.abordar("Julian");
  avionEncontrado.abordar("Ezequiel");
}
