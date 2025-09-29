let a = prompt("Enter first number")

let b = prompt("Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("enter valid value")
}

let sum = parseInt(a) + parseInt(b)

try {   
    console.log("the sum is", + sum*s )
} catch (error) {
    console.log("error has been occured")
}
finally{
    console.log("files and DB connection are closed")
}
