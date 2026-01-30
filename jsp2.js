// ---QUESTION---
// Input: n = 4
// Output:
// 1
// 12
// 123
// 1234


//--- ANSWER---

// ---for loop---

let n = 4;
for( let i = 1; i <= n; i++ )
{
    let str = "";
    for(let j = 1; j <= i; j++){
        str += j;
    }
    console.log(str)
}

// ---While Loop---

let m = 5;
let x = 1;
while(x<=m){
    let st = "";
    let y = 1;
    while(y <= x){
        st += y;
        console.log(st);
        y++;
        }
    x++;
}


// ---Using Functions---

function nums(n=6){
    for( let i = 1; i <= n; i++ )
    {
    let str = "";
    for(let j = 1; j <= i; j++){
        str += j;
    }
    console.log(str)
    }
}

nums(10)

