// Input: 121
// Output: Palindrome


// ---ANSWER---

// let num = 1313;
// let i = 0;
// let str = "";
// let dup = num;
// while(dup != 0){
//     i = dup % 10;
//     String(i);
//     str += i;
//     dup = Math.floor(dup / 10);
// }

// if (JSON.parse(str) === num) {
//     console.log(num, "is a Palindrome Number");
// }
// else{
//     console.log(num, "is not a Palindrome Number");
// }



// ---OPTIMAL SOLUTION---

let num = 121;
let original = num;
let reversed = 0;

while (num > 0) {
  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
}

if (reversed === original) {
  console.log("Palindrome Number");
} else {
  console.log("Not a Palindrome Number");
}
