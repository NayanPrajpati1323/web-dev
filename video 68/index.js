console.log("nayanprajapati")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "blue"

document.getElementById("box3").style.backgroundColor = " red"

document.querySelector(".box").style.color = "yellow"
document.querySelector(".box").style.backgroundColor = "black"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "black"
    e.style.color = "yellow"
}) 