// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulos {
    constructor(alto , ancho) {
        this._alto = alto;
        this._ancho = ancho;
    }
    
    get alto() {
        return this._alto;
    }
    get ancho() {
        return this._ancho;
    }

    set alto(alto) {
        this._alto = alto;
    }
    set ancho(ancho) {
        this._ancho = ancho;
    }

    // calculo
    perimetro() {
        return (this._alto * 2) + (this._ancho * 2);
    }
    
    area() {
        return this._alto * this._ancho;
    }

    mostrar() {
        return `Alto: ${this._alto}, Ancho: ${this._ancho}`;
    }
}