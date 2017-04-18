//cerrar las imagenes al darle click a X
var cerrar = document.getElementsByClassName("cerrar");

for(var i = 0; i<cerrar.length; i++){
  cerrar[i].addEventListener("click",cerrarImagen);
}

function cerrarImagen(){
  var div= this.parentElement;
  div.style.display = "none";
}

//boton resturar imagenes
var btnRestaurar = document.getElementById("btnRestaurar");
btnRestaurar.addEventListener("click", restaurarImagenes);

function restaurarImagenes(){
  for(var i = 0; i<cerrar.length; i++){
    cerrar[i].parentElement.style.display = "inline-block";
  }
}

//botones (origen y extincion) y eventos
var btnOrigen = document.getElementById("btnOrigen");
btnOrigen.addEventListener("click",mostrarOcultarOrigen);

var btnExtincion = document.getElementById("btnExtincion")
btnExtincion.addEventListener("click",mostrarOcultarExtincion);

//textos
var txtOrigen = document.getElementById("txtOrigen");
var txtExtincion = document.getElementById("txtExtincion");

function mostrarOcultarOrigen(){
  if(txtOrigen.style.visibility == "hidden"){
    console.log("ocultar")
    txtOrigen.style.visibility= "visible";
  }else{
    console.log("mostrar")
    txtOrigen.style.visibility= "hidden";
  }
}
function mostrarOcultarExtincion(){
  if(txtExtincion.style.visibility== "hidden"){
    txtExtincion.style.visibility= "visible";
  }else{
    txtExtincion.style.visibility= "hidden";
  }
}
