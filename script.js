/*
 Map
 syntax :-  arrayname.map(function)

 Example without map : multiply the given array by 2


steps:- 
1. For loop
2. multiply element by 2
3. create a new array and push to it
4. print new array


const arr = [12, 13, 14, 15];
const result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2);
}
console.log(result);


example with map  : multiply the given array by 2

 Normal function:- 

const arr1 = [12,13,14,15]
function double(element){
    return element*2
}
const result1 = arr1.map(double)
console.log(result1);

Normal function method 2:- 

const arr2 = [12,13,14,15]
const result2 = arr2.map(function double1(element){
    return element*2
})
console.log(result2);

Anonymous function method 3:-

const arr = [12,13,14,15]
const result = arr.map(function(ele){
      return ele*2
})
console.log(result);

Arrow function method 4:-

const arr4 = [12,13,14,15]
const result4 = arr4.map((item)=>{
      return item*2
})
console.log(result4);

Arrow function method 5:-

const arr5 = [12,13,14,15]
const result5 = arr5.map((ele)=>ele*2)
console.log(result5);

*/

