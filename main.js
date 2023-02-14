const burguer = document.querySelector("[data-burguer]")

const menu = document.querySelector("[data-menu]")

const close = document.querySelector("[data-close]")



burguer.addEventListener("click",()=>{
    menu.classList.add("spread")
   
})



close.addEventListener("click", ()=> {
    menu.classList.remove("spread")
})


window.addEventListener("click", e=> {
   

    if (e.target !== burguer && e.target !== menu) {
        menu.classList.remove("spread")
    }
})