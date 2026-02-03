// ---QUESTION---

// Input: 153
// Output: Armstrong


// ---ANSWER---


//---For loop--- 


// let num = 153;
// num = num.toString();
// let sum = 0;
// for ( let i in num ) {
//     sum += num[i]**num.length
// }
// if (sum === Number(num)){
//     console.log("The Number is Armstrong Number");
// }
// else{
//     console.log("The Number is not Armstrong Number");
// }


// ---OPTIMAL SOLUTION---

let num = 153;
let sum = 0;
let len = 0;
let temp = num;
let original = num;
while(temp != 0){
    temp = Math.floor( temp / 10 );
    len++;
}


while ( num != 0 ) {
    sum += ((num % 10) ** len);
    num = Math.floor((num / 10));
}
if (sum == original){
    console.log(sum,"is Armstrong Number");
}
else{
    console.log(sum,"is not Armstrong Number");
}