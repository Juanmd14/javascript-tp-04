/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.  */



class Libro {
  constructor(ISBN, titulo, autor, numeroPaginas) {
    this._ISBN = ISBN;
    this._titulo = titulo;
    this._autor = autor;
    this._numeroPaginas = numeroPaginas;
  }

  // Getters
  get ISBN() {
    return this._ISBN;
  }

  get titulo() {
    return this._titulo;
  }

  get autor() {
    return this._autor;
  }

  get numeroPaginas() {
    return this._numeroPaginas;
  }

  // Setters
  set ISBN(nuevoISBN) {
    this._ISBN = nuevoISBN;
  }

  set titulo(nuevoTitulo) {
    this._titulo = nuevoTitulo;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }

  set numeroPaginas(nuevoNumero) {
    this._numeroPaginas = nuevoNumero;
  }

  // Metodo mostrar info del libro

  mostrarLibro() {
    console.log(`
      El libro "${this._titulo}" con ISBN ${this._ISBN}, creado por el autor ${this._autor}, tiene páginas ${this._numeroPaginas}.`
    );
  }
}

// Crear objetos

let libro1 = new Libro("033", "El legendario programador", "Juan Manuel Garcia", 800);
let libro2 = new Libro("021", "El camino del programador", "Jorge Perez", 150);

// Mostrar info

libro1.mostrarLibro();
libro2.mostrarLibro();

// Comparar paginas

if (libro1.numeroPaginas > libro2.numeroPaginas) {
  console.log(`${libro1.titulo} tiene mas paginas (${libro1.numeroPaginas}).`);
} else if (libro2.numeroPaginas > libro1.numeroPaginas) {
  console.log(`${libro2.titulo} tiene mas paginas (${libro2.numeroPaginas}).`);
} else {
  console.log(`Los 2 libros tienen la misma cantidad de paginas (${libro1.numeroPaginas}).`);
}
