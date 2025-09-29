let arr = [1,11,16,8,10,3]

let newArr = arr.map((e, index ,array)=>{
    return e**2;
})

console.log(newArr)

const abc =(e)=>{
    if(e>8){
        return true
    }
    return false
}
console.log(arr.filter(abc))


let arr2 =[1,2,3,4,3,5]

const abs = (p,q)=>{
    return p+q
}
console.log(arr2.reduce(abs))

let a = "nayan"

console.log(Array.from(a))