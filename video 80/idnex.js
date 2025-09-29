// let obj1 = {
//     a:1,
//     b:"nayan"
// }
// console.log(obj1)

// let animal ={
//     eats: true
// }
// let rabbit = {
//     jump:true
// }
// rabbit.__proto__ = animal
// console.log(rabbit)

class animal {
    constructor(name){
        this.name = name
        console.log("object is created...")
    }
    eats(){
        console.log("eat well")
    }
    jumps(){
        console.log("jumpss well")
    }
    sleep(){
        console.log("sleep well")
    }
}

class Lion  extends animal {
    constructor(name){
        super(name)
        console.log("object is created and he is lion...")
    }
    eats(){
        super.eats()
        console.log("eat well animals")
    }
}

let a = new animal("rat")
console.log(a)

let l = new Lion("sher")
console.log(l)
