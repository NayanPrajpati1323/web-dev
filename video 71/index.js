document.querySelector(".container").innerHTML
// '\n            <div class="box">\n                im box\n                <span class="abs">\n                    im blue\n                </span>\n            </div>\n        '
document.querySelector(".box").innerHTML
// '\n                im box\n                <span class="abs">\n                    im blue\n                </span>\n            '
document.querySelector(".box").innerText
// 'im box im blue'
document.querySelector(".container").outerHTML
// '<div class="container">\n            <div class="box">\n                im box\n                <span class="abs">\n                    im blue\n                </span>\n            </div>\n        </div>'
document.querySelector(".container").outerText
// 'im box im blue'
document.querySelector(".container").tagName
// 'DIV'
document.querySelector(".box").nodeName
// 'DIV'
document.querySelector(".abs").nodeName
// 'SPAN'
document.querySelector(".abs").innerHTML = "this is nayan"
// 'this is nayan' 
document.querySelector(".abs").hasAttribute("style")
// true
document.querySelector(".abs").getAttribute("style")
// 'border:2 px solid black ;'
document.querySelector(".box").setAttribute("style", "color = blue")

document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
document.querySelector(".abs").removeAttribute("style")




document.querySelector(".container").prepend(div)


document.querySelector(".container").after(div)

document.querySelector(".container").before(div)

document.querySelector(".container").replaceWith(div)


document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'cont1', 'cont2', value: 'container cont1 cont2']
document.querySelector(".container").className
// 'container cont1 cont2'

document.querySelector(".container").classList.add("cont3")

document.querySelector(".container").classList.remove("cont3")



document.querySelector(".container").classList.toggle("cont1")
// false
document.querySelector(".container").classList.toggle("cont1")

// true