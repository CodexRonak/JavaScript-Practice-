// Input: n = 5
// Output:
// *****
// *   *
// *   *
// *   *
// *****
// // 


// ---ANSWER---


// ---for loop---


// let n = 5

// for ( let i = 1; i <= n; i++){
//     let rep = "";
//     for ( let j = 1; j <= n; j++){
//         if(i != 1 && i != n){
//             if (j === 1 || j === n){
//                 rep += "*"
//             }
//             else{
//                 rep += " ";
//             }
//         }
//         else{
//             rep += "*"
//         }
//     }
//     console.log(rep);
// }


// ---while loop---

// let n = 5;
// let i = 1;
// while(i <= n){
//     let j = 1;
//     rep = "";
//     while(j <= n){
//         if(i != 1 && i != n){
//             if(j === 1 || j === n){
//                 rep += "*"
//             }
//             else{
//                 rep += " ";
//             }
//         }
//         else{
//             rep += "*";
//         }
//         j++
//     }
//     i++;
//     console.log(rep);
// }


// ---OPTIMAL SOLUTION---

let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      row += "*";
    } else {
      row += " ";
    }
  }

  console.log(row);
}



