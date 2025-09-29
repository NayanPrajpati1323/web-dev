console.log("this is ahmedabad");
setTimeout(() => {
    console.log("this is nayan");
}, 3000);
setTimeout(() => {
    console.log("this is nayan prajapati");
}, 2000);
console.log("nayan us a hacker");

const callback = (args)=>{
    console.log(args);
}

const loadscript = (src,callback)=>{
    let sc = document.createElement("script")
    sc.src =src
    sc.onload = callback("nayan1323")
    document.head.append(sc)
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)