// QUESTION

// Input: n = 4
// Output:
// *
// **
// ***
// ****

// ANSWER

let nol = 4;
let i = 1;
let a = i;

//---With for loop---

for (i ; i < nol + 1; i++ ) {
  console.log( "*".repeat ( i ) );
}

//---With while loop---

while( a < nol + 1 ){
  console.log( "*".repeat ( a ) );
  a++;
}

// ---Using functions---

let star = function( n = 4 )
{
  for (j = 1; j < n + 1; j++ ) {
    console.log( "*".repeat ( j ) );
    }
};

star(5)


// ---nested Loops---

let ps = 4;
let k = 1;
let out = "" ;
let l = 0;
while( k < ps + 1 ){
  while(l < k ){
    out += "*"
    console.log(out)
    l++
  }
  k++
}


// ----OPTIMAL SOLUTION----

let line = 7;
for(let h = 1; h <= line; h++){
  let str = "";
  for(let p = 1; p <= h; p++){
    str += "*";
    console.log(str);
  }
}