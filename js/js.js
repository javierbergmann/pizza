//vamos a declarar las variables para trabajar con el menu responsivle
let btnOpenMenu= document.getElementById("btnOpenMenu"); //boton para abrir menu responsive
let btnCloseMenu= document.getElementById("btnCloseMenu"); //boton que cierra el menu responsive
let menuResponsive= document.getElementById("menuBar"); //menu responsive que debemos abrir
let enlaces= document.getElementById("enlaces"); //cuando se presiona algunos de los enlaces tambien debe 
                                                    //cerrarsede manera suave

btnOpenMenu.addEventListener("click", ()=>{
    menuResponsive.className="menu__bar active";
})

btnCloseMenu.addEventListener("click", ()=>{
    menuResponsive.className="menu__bar";
})

enlaces.addEventListener("click", function(){
    menuResponsive.style.transitionDelay= "0.5s";
    menuResponsive.className= "menu__bar";
})

/** scroll de mi slider*/
let container= document.querySelector(".slider");
let btnSliderLeft= document.getElementById("btnSliderLeft");
let btnSliderRight= document.getElementById("btnSliderRight");

btnSliderLeft.addEventListener("click", ()=>{
    container.scrollLeft -= container.offsetWidth;
})

btnSliderRight.addEventListener("click", ()=>{
    container.scrollLeft += container.offsetWidth;
})