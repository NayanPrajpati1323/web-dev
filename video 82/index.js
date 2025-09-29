async function sleep(){
return new Promise((resolver,reject)=>{
    setTimeout(() => {
        resolver(50)
    }, 2500);
})
}
function sum(a,b,c){
    return a+b+c;
}
(async function abc(){
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    // let [a,b,...any] = [5,7,5,5,9,5,88]
    // console.log([a,b, any])

    let obj = {
        a:1,
        b:2,
        c:3,
        d:4,
        e:5
    }
    let {a,b , ...bakina} = obj
    console.log([a,b, bakina])
    
    let arr = [1,8,6]
    console.log(sum(...arr))
})()