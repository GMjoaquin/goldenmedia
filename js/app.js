// MENU RESPONSIVE

let btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlace = document.getElementById("enlace");
//?let es declarar variables
//?El nombre que se le da a la variable
//?document es nuestro documento html
//?getElementById es que coje el id declarado en nuestro html y entre "" el id del html

    // Clic abrir 
    btnMenuOpen.addEventListener("click", function(){
        //?Detecta cuando se hace clic y llama a una función para que active el elemento
        menuResponsive.classList.add("active")
        //?Crea dinámicamente una clase en html junto al id menuBar y llama a la linea css que contiene el translateX(0%)     
        //*Cada vez que hagamos clic en icono de las barras, nos aparecerá el menú
    });

    //Clic cerrar
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
        //*?Es el mismo código, pero en vez de crear una clase dinámicamente, elimina la clase cuando se activa el icono 
    });

    //Cerrar menú con los elementos de enlace
    enlace.addEventListener("click", function(){
        menuResponsive.style.transitionDelay = "0.5s"; //? crea un estilo css dinámicamente, en este caso un retordo
        menuResponsive.classList.remove("active");
    });

  //CONTACTO

  //?No requiere variable, ya que esto llama al onclick en HTML

//*EMAIL
  function sendEmail() {
    window.location.href = "mailto:goldenmedia_ad.hotmail.comcom?subject=Asunto&body=Cuerpo del correo","_blank";
}

//*RRSS

function redirectToWeb1() {
    window.open("https://twitter.com/_GoldenMedia_", "_blank"); //?Con blanck abre los enlaces en una nueva pestaña.
}

function redirectToWeb2() {
    window.open("https://www.youtube.com/@goldenmedia_bcn", "_blank");    
}

//BOTON IR ARRIBA

//? Obtener el botón
var mybutton = document.getElementById("myBtn");

//? Cuando el usuario hace scroll hacia abajo 20px desde la parte superior del documento, mostrar el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//? Cuando el usuario hace clic en el botón, desplazarse hasta la parte superior del documento
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
