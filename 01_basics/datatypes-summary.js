// primitive data types
//Types :String,Number,Boolean,null,undefined,Symbol,BigInt-->this all are call by value
//JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.
//Reference(Non Primitive)

//Array,Objects,Functions

//Symbol is used for defining unique objects

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

//Array:

const heros=["shaktiman","naagraj","doga"]

//objects:

let myObj={
    name:"hitesh",
    age:22,
}

//Function:

const myFunction=function(){
    console.log("Hello World");
    
}

