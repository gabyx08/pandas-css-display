var cerrar = document.getElementsByClassName("cerrar");

for(var i = 0; i<cerrar.length; i++){
  cerrar[i].addEventListener("click",cerrarImagen)
}

function cerrarImagen(){
  var div= this.parentElement;
  div.style.display = "none";
}

var btnRestaurar = document.getElementById("btnRestaurar");
btnRestaurar.addEventListener("click", restaurarImagenes);

function restaurarImagenes(){
  for(var i = 0; i<cerrar.length; i++){
    cerrar[i].parentElement.style.display = "inline-block";
  }
}
