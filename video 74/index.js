
let button = document.getElementById("abs")

button.addEventListener("click", ()=>{
    alert("congratulation you just click on best page button")
    button.style.height = "40px"
    button.innerHTML= "bada yaha pe"
})

button.addEventListener("mouseover", ()=>{
    document.querySelector(".box").innerHTML = "im nayan"
})