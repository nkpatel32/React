var arr = [1,32,4];
const multiFun=(arr)=>{
    return arr.map((e)=>e%2==0? e * 2 : e * 3);
}
console.log(multiFun(arr));
const evenArr = (arr)=>arr.filter((e)=>e%2==0);
console.log(evenArr(arr));