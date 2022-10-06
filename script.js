const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu")
const servicios = document.querySelector(".servicios");
const menuSecundario = document.querySelector(".menu-secundario");
const boton = document.querySelector(".boton");
const mainMenu = document.querySelector(".nav-main");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => 
  n.addEventListener("click",() =>{
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      menuSecundario.classList.remove("menu2") 
      mainMenu.classList.remove("menu2");
  }));
/*
  window.addEventListener("scroll", ()=> {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  } ); */

servicios.addEventListener("click", ()=> {
 menuSecundario.classList.toggle("menu2");
 mainMenu.classList.toggle("menu2") ;
});

document.querySelectorAll(".boton").forEach(n =>
  n.addEventListener("click",()=>{
    menuSecundario.classList.remove("menu2");
    mainMenu.classList.remove("menu2");
  }

  ))
  document.querySelectorAll(".hamburger").forEach(n =>
    n.addEventListener("click",()=>{
      menuSecundario.classList.remove("menu2");
      mainMenu.classList.remove("menu2");
    }
  
    ))


