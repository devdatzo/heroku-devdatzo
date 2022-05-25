const humberger = document.querySelector(".humberger");
const navMenu = document.querySelector(".nav-menu");

humberger.addEventListener("click", ()=> {
  humberger.classList.toggle("active");
  navMenu.classList.toggle("active");
}) 
document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
  humberger.classList.remove("active");
  navMenu.classList.remove("active");
}))

const activePage = window.location.pathname;
const navLink = document.querySelectorAll(".nav-link").forEach(link =>{
   if(link.href.includes(`${activePage}`)&&activePage!=="//"){
      link.classList.add("actives")
   }
})