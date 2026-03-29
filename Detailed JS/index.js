// document.getElementById('myh1').textContent="HELLO";
// document.getElementById('myp').textContent="LEARNING JS";

// //CONSOLE INPUT OUTPUT
// const v=64;
// console.log(`V=${v }`)
// console.log("ERROR")
// console.log(1+2)

// //Windows Alert
//  window.alert("404 Error")

//USER INPUT
// const v=prompt("TYPE ANYTHING: ")
// console.log(`TEXT:${v}`)
// document.getElementById('myh1').textContent=v;

//Data types
//String Boolean -- true false   number   undefined   null
// var x="Hello"
// console.log(`VALUE:${x}`)


// //Let and Const are block Specific 
// let y=5
// y=7 //Changing value is permissible
// console.log(`VALUE:${y}`)
//  if(1==1)//Demostrating block Specific 
//  {
//     let z=2
//     console.log(`VALUE:${z}`)
//  }
// console.log(`VALUE:${z}`)//Error is displayed

// const a=5
// a=3
//  console.log(`VALUE:${a}`)//Error is displayed 


// if(true){   //Demostrating Block Specific Behavior of const
//     const b=5
//     console.log(`VALUE:${b}`)//o/p:::Valur:5
// }
// console.log(`VALUE:${b}`)//Error

// //*****When x is declared using var  it can be used before its declared 
// function test1()
// {
//     console.log(x)
//     var x=5
//     console.log(x)
// }
// test1()//  o/p--> undefined   5 

// //*****When x is declared using let/const  it can be used before its declared 
// function test2()
// {
//     console.log(x)
//     let x=5
//     console.log(x)
// }
// test2()//  O/P--> Error

// + - * / % -- ++  -= += *= /= %=
// const x="234.5"
// const y=2
// console.log(x/y)//117.25 ->string  x is converted to into
// console.log(x+y)//234.52 ->int y is converted to string (concatenation)

//Converting Pixels to Int
// const z="237px"
// const k=2
// console.log(parseInt(z)/2)

// //Type Casting
// var x="5"
// console.log(Number(x))

console.log('1'==1) //true
console.log(' '==0) //true
console.log(null==undefined) //true
console.log("1,2"==[1,2])  //true