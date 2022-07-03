//vamos a declarar las variables para trabajar con el menu responsivle
let btnOpenMenu = document.getElementById("btnOpenMenu"); //boton para abrir menu responsive
let btnCloseMenu = document.getElementById("btnCloseMenu"); //boton que cierra el menu responsive
let menuResponsive = document.getElementById("menuBar"); //menu responsive que debemos abrir
let enlaces = document.getElementById("enlaces"); //cuando se presiona algunos de los enlaces tambien debe 
//cerrarsede manera suave

btnOpenMenu.addEventListener("click", () => {
    menuResponsive.className = "menu__bar active";
})

btnCloseMenu.addEventListener("click", () => {
    menuResponsive.className = "menu__bar";
})

enlaces.addEventListener("click", function () {
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.className = "menu__bar";
})

/** scroll de mi slider*/
let container = document.querySelector(".slider");
let btnSliderLeft = document.getElementById("btnSliderLeft");
let btnSliderRight = document.getElementById("btnSliderRight");

btnSliderLeft.addEventListener("click", () => {
    container.scrollLeft -= container.offsetWidth;
})

btnSliderRight.addEventListener("click", () => {
    container.scrollLeft += container.offsetWidth;
})

/**validacion de form */
let form = document.getElementById("contact-form");

function validar(e) {
    let txtNombre = document.getElementById("txtNombre").value,
        txtMail = document.getElementById("txtMail").value,
        txtComentario = document.getElementById("txtComentario").value;
    let alertSucces = document.getElementById("alertSuccess"),
        alertError = document.getElementById("alertError");

    if (txtMail == 0 || txtMail == 0 || txtComentario == 0) {
        e.preventDefault();
        alertError.classList.add("show");
        alertError.classList.remove("hidden");
        setTimeout(function(){
            alertError.classList.add("hidden");
            alertError.classList.remove("show");
        }, 2000);

    } else {
        e.preventDefault();
        alertSucces.classList.add("show");
        alertSucces.classList.remove("hidden");
        setTimeout(function(){
            alertSucces.classList.add("hidden");
            alertSucces.classList.remove("show");
        }, 2000);
    }
}

form.addEventListener("submit", validar);

/**código para el boton de scroll top */
let btnTop= document.getElementById("btnTop");
let btnLogo= document.getElementById("logo");

window.addEventListener("scroll", ()=>{
    let scrollTop= document.documentElement.scrollTop,
        fullSize= document.documentElement.offsetHeight,
        clientHeight= document.documentElement.clientHeight;

    if (scrollTop>70){
        btnTop.classList.add("show");

    }else{
        btnTop.classList.remove("show");
    }

    if(fullSize==(scrollTop+clientHeight)){
        btnTop.classList.add("show-final-scroll");
    }else{
        btnTop.classList.remove("show-final-scroll");
    }
});

btnTop.addEventListener("click", ()=>{
    window.scrollTo(0,0);
});

btnLogo.addEventListener("click", ()=>{
    window.scrollTo(0,0);
});

