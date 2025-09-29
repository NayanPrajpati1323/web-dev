console.log("this is about loops")

let a = "hello world ";

for(let i=0 ; i<10; i++)
{
    console.log(a+i);
}

let obj = {
    name: "nayan",
    age: 20,
    role : "programmer",
    city: "ahmedabad"
}
// for in loop

for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
}