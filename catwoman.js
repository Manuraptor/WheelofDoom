function efectlatigazo() {
  document.getElementById("latigazo").play();

  document.getElementById("animacion").play();
}

/* Modo nocturno

Si clicamos en el botón del sol, borrarémos la clase css dark-mode del section 
con id container y se aplicará el estilo active al sol*/
document.getElementById("id-sun").onclick = function () {
  document.getElementById("container").classList.remove("dark-mode");
  document.getElementById("id-moon").classList.remove("active");
  this.classList.add("active");
  document.body.style.backgroundImage = "url('./graficos/gotham.jpg')";
}

/*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del section 
  con id container y se aplicará el estilo active a la luna*/
document.getElementById("id-moon").onclick = function () {
  document.getElementById("container").classList.add("dark-mode");
  document.getElementById("id-sun").classList.remove("active");
  this.classList.add("active");
  document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./graficos/gotham.jpg')";
}

function lluvia() {
  var sonido = document.getElementById("efecto");

  if (sonido.paused) {
    sonido.play();
  } else {
    sonido.pause();
  }
}

/*function paralluvia() {
    document.getElementById("efecto").pause();
}*/

function tema() {
  var sonido2 = document.getElementById("musiepica");

  if (sonido2.paused) {
    sonido2.play();
  } else {
    sonido2.pause();
  }
}

let grupo = ["Maribel", "Ikram", "Irina", "Cinthia", "Minerva", "Jezabel", "Irina S", "Telma", "Tatiana", "Jhoana", "Nelly", "Nadia", "Halima", "Manuel"];
let listaOriginal = ["Maribel", "Ikram", "Irina", "Cinthia", "Minerva", "Jezabel", "Irina S", "Telma", "Tatiana", "Jhoana", "Nelly", "Nadia", "Halima", "Manuel"];

function elegir() {

  let azar = Math.floor(Math.random() * grupo.length);
  let elegido = grupo[azar]

  document.getElementById("hero").innerHTML = elegido;

  grupo.splice(azar, 1);

  if (grupo.length === 0) {

    document.getElementById("hero").innerHTML = "¡MIAU! ";


    grupo = listaOriginal.slice();
    
  }
}


