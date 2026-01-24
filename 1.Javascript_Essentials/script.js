//* Fundamentals of JavaScript : 
//? arrays and objects
//? functions return
//? async js coding 


//* arrays 
var arr = [1, 2, 3, 4];
//? var arr = [1, 2, 3, 4, true, "heyy", {}];
//? In JavaScript, array can have different different types of values at the same time

//TODO : foreach, map, filter, find, indexOf

//? forEach :
arr.forEach(function(val){
    console.log(val + " hello");
})

//? map : 
let newarr = arr.map(function(val){
    return val*3;
})
console.log(newarr);

//? filter : 
let ans = arr.filter(function(val){   //? In filter, we need to return true, false not the val
    if(val>3) return true;
    else return false;
})
console.log(ans);

//? find : 
let res = arr.find(function(val){
    if(val === 2) return val;
})
console.log(res);

//? indexOf :
console.log(arr.indexOf(2));
console.log(arr.indexOf(12));

//? length
console.log(arr.length);


//* objects 
//? {} <-- this is object, this one is called blanck object or empty object
//? Objects --> key, value pairs
let obj = {
    name: "Sukhpreet",
    age: 18
}
console.log(obj.name);
console.log(obj.age);
obj.age = 19;
console.log(obj.age);
//! If we don't want that values of object can be change then we use : 
Object.freeze(obj);
obj.age = 18;
console.log(obj.age); //? value not changed, it still 19


//* function return
function abcd(){
    return 12;
}
console.log(abcd());


//* async js coding : 
//? line by line code chale isey kahte hai synchronous.
//? jo bhi code async nature ka ho, usey side stack mein bhej do and agle
//? code ko chalao jo bhi sync nature ka ho, jab bhi saara sync code chal jaaye, tab check karo
//? ki async code complete hua ya nahi and agar wo compelete hua ho to usey
//? main stack mein laao and chala do.

async function func(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var result = await blob.json();

    console.log(result);
}
func();