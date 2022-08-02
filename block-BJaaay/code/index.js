//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for (let num1 = 0; num1 <= 10 ; num1 = num1 + 1){
    console.log(num1);
}


// Using `console.log` log all the evan values from 1 to 10.

let evenInteger = 0;
while (evenInteger <= 10) {
    if (evenInteger % 2 == 0) {
        console.log(evenInteger);
    }
    evenInteger = evenInteger + 1;
}

// Using `console.log` log all the od values from 1 to 10.

for (let oddInteger = 0; oddInteger <= 10; oddInteger = oddInteger + 1){
    if(oddInteger % 2 != 0){
        console.log(oddInteger);
    }
}


// Calculate the sum of all numbers from 1 to 10.

let sum = 0;
for (let i = 0; i <= 10 ; i = i + 1){
    sum += i;
}
console.log(sum);

// Log all the values from 1 to 10 using while loop

let i = 0;
while (i <= 10) {
    console.log(i);
    i = i + 1;
}