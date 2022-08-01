// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num1 = Number(prompt("Enter a number?"));
if (num1 % 2 === 0 ) {
  alert("number is even"); // its alert the message "number is even"
} else {
  alert ("number is odd"); // its alert the message "number is odd"
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let firstNumber = Number(prompt("Enter the first number?"));
let secondNumber = Number(prompt("Enter the second number?"));
  if (firstNumber > secondNumber) {
  alert(firstNumber);
} else {
  alert(secondNumber);
}

// 3. Convert the above code using`?` terniary operator

(firstNumber > secondNumber) ? alert(firstNumber) : alert(secondNumber) ;


/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter your house name?");
if (houseName === "stark") {
  alert("Winter is coming");
} else if (houseName === "lannister") {
  alert("A lannister always pays his debt");
} else {
  alert("All men must die");
}

// 5. Convert the above code using`?` terniary operator
houseName === "stark" ? alert("Winter is coming") : houseName === "lannister" ?
alert("A lannister always pays his debt") : alert("All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

let numOfMonth = Number(prompt("Enter the number of month?"));
switch(numOfMonth){
  case 1:
    alert(`January have 31 days.`);
    break;
  case 2:
    alert(`February have 28 or 29(in leap year) days`);
    break;
  case 3:
    alert(`March have 31 days.`);
    break;
  case 4:
    alert(`April have 30 days.`);
    break;
  case 5:
    alert(`May have 31 days.`);
    break;
  case 6:
    alert(`June have 30 days.`);
    break;
  case 7:
    alert(`July have 31 days.`);
    break;
  case 8:
    alert(`August have 31 days.`);
    break;
  case 9:
    alert(`September have 30 days.`);
    break;
  case 10:
    alert(`October have 31 days.`);
    break;
  case 11:
    alert(`November have 30 days.`);
    break;
  case 12:
    alert(`December have 31 days.`);
    break;
}

/* 7.
- Write a program that take the salary of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
/* let salary = Number(prompt("Enter your salary?"));
let inHandSalary ;
switch(inHandSalary) {
  case salary <= 20000: inHandSalary = Number(`${salary} - (10/100)*${salary}`);
    alert (inHandSalary);
    break; */
  /* case salary <= 40000: inHandSalary = (`(${salary} - ((20/100)*${salary}))`);
    alert (inHandSalary);
    break;
  case salary > 50000: inHandSalary = (`(${salary} - ((30/100)*${salary}))`);
    alert (inHandSalary);
    break;
} */


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter yours obtained marks?"));
if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks > 80 && marks < 100) {
  alert("Grade A");
} else if (marks > 50 && marks < 80) {
  alert("Grade B");
} else if (marks > 30 && marks < 50) {
  alert("Grade C");
} else if (marks > 0) {
  alert("Grade D");
}

switch(true){
  case marks > 100:
    alert("Marks can't be greater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("Grade A");
    break;
  case marks > 50 && marks < 80:
    alert("Grade B");
    break;
  case marks > 30 && marks < 50:
    alert("Grade C");
    break;
  case marks > 0:
    alert("Grade D");
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("How is the weather");
if (weather === "sunny") {
  alert("Wear a T-shirt")
} else if (weather === "rainy") {
  alert(`Don't forget to take your raincoat`);
} else if (weather === "hot") {
  alert("Get a hanky");
} else if (weather === "freezing") {
  alert (`Get your sweater on`);
} else {
  alert ("Not a valid input");
}

switch(true){
  case weather === "sunny":
    alert("Wear a T-shirt");
    break;
  case weather === "rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case weather === "hot":
    alert("Get a hanky");
    break;
  case weather === "freezing":
    alert (`Get your sweater on`);
    break;
  default:
    alert ("Not a valid input");
}