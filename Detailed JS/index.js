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

// // Comparision Operators
// console.log('1'==1) //true
// console.log(' '==0) //true
// console.log(null==undefined) //true
// console.log("1,2"==[1,2])  //true

// //USE ===  fro strictly checking equals  where tyoe casting is not occuring
// console.log(1=="1") //true
// console.log(1==="1") //false

//Logical Operators
/*-->&&-and 
-->||-or
 --> !-not*/
// console.log(true || false) //o/p->true
// console.log(true && false) //o/p->false
// console.log(!false) //o/p->true

// //*********
// //Here string is prefered over boolean values  in case OR||  reverse i && 
// //if empty string  boolean values is prefered 
// console.log("hello" || true) //o/p->hello
// console.log("" || true) //o/p-> true
// console.log("hello" || false) //o/p->hello
// console.log("hello" && true) //o/p->true
// console.log(" " && true) //o/p->true
// console.log("hello" && false) //o/p->false

// //Conditional
// var x=10
// if(x==10)
// {
//     console.log("10 HELLO")
// }
// else if(x==5)
// {
//     console.log("5 HELLO")
// }
// else
// {
//     console.log("HI")
// }

// //SWITCH
// let c=1
// switch(c)
// {
//     case 1:console.log("1-hello")
//            break;
//     case 2:console.log("2- hello")
//            break; 
//     case 3:console.log("3-hello")
//            break;   
//     case 10:console.log("10-hello")
//            break;  
//     default:console.log("DEFAULT")
//             break;
// }

// //ARRAY  printing values and index of array
// const arr=[1,2,3]
// for(let [i,values] of arr.entries())
// {
//     console.log(`INDEX-${i}  VALUES-${values}`)
// }

// //ARRAY  printing values and index of array
// const arr=[1,2,3]
// for(let i =0;i<arr.length;i++)
// {
//     console.log(`INDEX-${i}  VALUES-${arr[i]}`)
// }

//OBJECT
// function hello()
// {
//     return "HELLO"
// }
// const obj={
//     name:"Alice",
//     age:23,
//     sayHello: hello()
// }
// for (let [i,values] of Object.entries(obj)){
//     console.log(`KEY-${i}  VALUES-${values}`)
// }

function hello()
{
    return "HELLO"
}
const obj={
    name:"Alice",
    age:23,
    sayHello: hello()
}
delete obj.age
for(let key in obj)
{
    console.log(key)
}
for (let value in Object.values(obj))
{
    console.log(value)
}