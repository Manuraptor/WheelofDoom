function efectlatigazo() {

    document.getElementById("latigazo").play();

    document.getElementById("animacion").play();
}


/* Modo noche

Si clicamos en el botón del sol, borrarémos la clase css dark-mode del section 
con id container y se aplicará el estilo active al sol*/
document.getElementById('id-sun').onclick = function(){
    document.getElementById('container').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
}
  /*Si clicamos en el botón de la luna, añadiremos la clase css dark-mode del section 
  con id container y se aplicará el estilo active a la luna*/
  document.getElementById('id-moon').onclick = function(){
    document.getElementById('container').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
}

function lluvia() {

    var sonido=document.getElementById("efecto");
    
    
        if (sonido.paused) {
            sonido.play();
            
         } else {
    
            sonido.pause(); 
    }
}

/*function paralluvia() {
    document.getElementById("efecto").pause();
}*/