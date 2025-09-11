/*4 .Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
 Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.   */

 class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    console.log(`Codigo: ${this.codigo}, Nombre: ${this.nombre}, Precio: $${this.precio}`);
  }
}

// Instancias
let producto1 = new Producto(1, "Jabon Liquido", 400);
let producto2 = new Producto(2, "Suavizante", 300);
let producto3 = new Producto(3, "Detergente", 100);

let productos = [producto1, producto2, producto3];

productos.forEach(producto => producto.imprimeDatos());
