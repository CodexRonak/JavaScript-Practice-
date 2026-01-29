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

let star = Function(n = 4)
{
  for (j = 1; j < n + 1; j++ ) {
    console.log( "*".repeat ( j ) );
    }
};

star(5)