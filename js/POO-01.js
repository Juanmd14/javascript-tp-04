//Dificultad:  🟢
//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.



let auto = {
  color: "Negro",
  marca: "Ford",
  modelo: "Focus",
  encendido: false,

  encender: function() {
    if (this.encendido == false) {
    this.encendido = true
     console.log('auto encendido')
    } else { 
      console.log('El auto ya estaba encendido')
   }
  },

  apagar: function() {
    if (this.encendido === true) {
      this.encendido = false;
    } else {
      console.log ('el auto ya esta apgado')
    }
  }
 };
 auto.encender();
 auto.apagar()