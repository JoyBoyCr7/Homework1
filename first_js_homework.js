// 1. DRY stands for Don't repeat yourself, we should pay attention to it
// because it makes code easier to read.
// Functions are a tool we have learned to accomplish this.

// 2. Const is a variable that cannot be changed
//    let is a variable that can be changed and most of the time resides
//    within a code a code block

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

a < b

c > d

"name" == "name"
a + b == c

a + a < d

ee = e != 'Kevin'

48 == '48'

f != e

var g = 0 

console.log(g)

g = b + c

console.log(g)

// I used var, I used it because my variable was not in a function or block.

// Not using Var,let, const, will result in a ReferenceError.

// Setting 10 = g throws a SytaxError.

a == (b || f) === !f && e !== c

// (section 3)
// Yes that is an infinite loop because the "true" never gets evaluated to "false" in the proceding code.

// This is not an infinite loop because the proceedeing code includes runProgram which is a variable
// that is equal to false. This gives the loop a way to convert the true to a false and stop.
// the expected output would be false


let letters = "A";
let i = 0;
// start a while loop that will run as long as i is less than 20
while (i < 20) {
    // Adds the letter A to the letters variable
	letters += "A";
    // increments the value of i by 1
	i++;
// when i is equal to 20 the while loop will end because i will no longer be less than 20
}
// The following line prints, the contents of the variable letters which would be twenty A's
console.log(letters);

// One thing that i missed was the total number of A's. I forgot about the one that was already in the letters variable

// (Section 4)

// A similarity  of the two loops is that they both use a variable to stop
// One differance in for loops as compared to while loops is that they are not prone to infinite loops.

// The first part of the control panel is initilizing the for loop and giving it an iterator
// The second part of the control panel is telling the iterating variable when to stop
// The third part of the control panel marks the end of the function

var number = 0

for (let i = 0; i < 1000; i++){
    console.log(number)
    number++
}
// (Bonus Challenge 2)
// The forwardslash is used to comment out code and the 
// backslash is used to let the computer know that the ' is part of the string


// For loop in reverse
for (let i = 999; i > -1; i--){
    console.log(i)
}

// More counting
for (let i = 1; i < 11; i++){
    console.log("The value of i is: "+ i +" of 10")
}

// Bonus Challenge
for (let i = 1; i < 11; i++){
    console.log(`The value of i is: ${i} of 10`)
}

// Iteration
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i++){
    console.log(StarWars[i])
}
for (let i = 0; i < StarWars.length; i++){
    console.log(`${i} ${StarWars[i]}`)}

// Bonus Challenge
for (let i = 0; i < StarWars.length; i++){
    if (i % 2 == 0){
    console.log(StarWars[i])}
}

// Section 5
// Terminal Practice on terminal_homework.bash