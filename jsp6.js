// ---QUESTION---

// Input: 122333
// Output:
// 1 → 1
// 2 → 2
// 3 → 3


// --- OPTIMAL ANSWER---

let num = 122374373;
let rep = {};
while(num > 0){
    let last = num % 10;
    rep[last] = (rep[last] || 0) +1;
    num = Math.floor(num / 10);
}

for(key in rep){
    console.log(key,"->" ,rep[key])
}