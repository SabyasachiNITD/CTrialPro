const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const hlinks = document.querySelectorAll("#hlink")

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})

hlinks.forEach(link=>
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
}))
