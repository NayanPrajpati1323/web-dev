async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(500)
            console.log("hey this is nayan");
        }, 6000);
    })
}

async function main(){
console.log("loading data");

console.log("load data");
let data = await  getdata()
console.log(data);

console.log("process data");
console.log("nayan");
}
main()
// data.then(()=>{

//     console.log(data);
    
//     console.log("process data");
//     console.log("nayan");
// })