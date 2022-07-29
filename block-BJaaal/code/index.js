//  Template literal

/* Do the following:
- Define a variable named `username` using `const` keyword and assign your name as a value.
- Define another variable named `bio` and assign a value `Learning to code`. Use `let` keyword to define the variable.
*/
const username = "Rakesh";
let bio = "Learning to code"

let firstName = "Arya";
let lastName = "Stark";

/* Do the following using `+` operator
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
*/
let msg1 = "I am" + " " + username + " " + "and my bio is " + bio + ".";
alert (msg1);
let msg2 = "I'\m" + " " + firstName + " " + lastName + " " + "of Winterfell.";
alert(msg2);


/* Do the following using string template literal
  - Alert message saying `I am [username] and my bio is [bio]`. Replace square brackets with the value of variable.
  - Alert the message `I'm Arya Stark of Winterfell` using the variable name firstName and lastName.
*/
let msg3 = `I am ${username} and my bio is ${bio}.`;
alert(msg3);
let msg4 = `I'm ${firstName} ${lastName} of Winterfell.`
alert(msg4);

let amount = 200;
const taxPercent = 10;
let taxAmount = (amount * taxPercent) / 100;

/* Use string template literal:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  `
  - Above message should be in two lines
*/
let finalAmount = `The total amount is ${amount}
the tax is ${(amount * taxPercent)/100}`;
alert(finalAmount);

/* Use double quote and escape character:
  - Alert a message saying `The total amount is [amount]
    the tax amount is [(amount * taxPercent) / 100]
  `
  - Above message should be in two lines
*/
alert ("The total amount is" + " " + amount + " " + "\nthe tax is" + " " + ((amount * taxPercent)/100)) ;