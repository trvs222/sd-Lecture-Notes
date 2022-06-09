/**             CONDITIONALS
 * 
 * 
*A way for a programmer to check if an expression is true.
*It can also check for falseness
*it can exceute code when teh condisiton is met but also when the 
condtion is not met.
* It can even execute that checks for another condition altogether
* The fundamental function of ta conditional is to check for truthiness

*               Syntax
*   If (conditional) {
    run this code if true
}

*           FALSY VALUES
    - false
    - 0
    - null
    - undefined
    - NaN
    - "", '', ``

*/

let light ="on"
if (light) {
console.log("The light is on")

}

let temperature = 71;

if (temperature > 70) {
    console.log("its a nice day")
} else {
    console.log("Its cold")
}
// AND operator = &&
//OR operator = ||
//NOR operator == !

console.log(5 < 10 && 7 < 10) //both sides true will return 10

console.log(5 < 1 && 7 < 10) // left side is false will return false

console.log(5 < 10 || 7 < 10)// both side is true, will return true

console.log(11 < 10 || 7 < 10) // one side is true, will return true

console.log(5 < 1 || 7 > 10) // both sides are false, will return false

console.log( !(5 < 10) ) // 5 is less than 10(true) but the NOT (!) operator flips
                         //the statement to false, will return false



let weather = "sunny"
 
if (temperature >= 70 && weather == "sunny") {
    console.log("we will go hike")
} else if(temperature>= 70 && weather =="raining"){

}else {
    console.log("not account for situation")
}

let age = 25
// WRONG LOGIC
if(age <= 17 ){
    console.log("you cant do anything")
}else if(age >= 18 && age <= 21){
    console.log("You can vote")
}else if(age >= 21 && age < 25){
    console.log("You can dirnk")
}else if(age >= 25){
    console.log("You can rent a car")
}

 //RIGHT LOGIC
 
 if(age >=25){
     console.log("you can rent a car")
 }else if(age >= 21){
     console.log("you can drink")
 }else if(age >= 18){
     console.log("you can vote")
 }else{
     console.log("You cant do anything")
 }


 //Ternaries

 let fName = "Trevor"

 if(fName== "Trevor"){
     console.log("I thikn he's an instructor")
 } else{
     console.log("may be a student actually")
 }

 /**
  * Synatx: if (condition { do something  } else { ...}
  * Ternary Syntax: consition ? something if true:
  * something if false
  */
 fName=="trevor" ? console.log("Instructor") : console.log("Student")

let hero = "batman"
let villain = "ridler"

hero == "batman" && villain == "ridler"
    ? console.log("what has a head and tail and no body")
    : hero == "batman" && villain == "joker"
    ?console.log("why so serious")
    : hero == "batman" && villain == "kiteman"
    ? console.log("what does kiteman do")
    : console.log("stop")

    let isInstructor = false;

    if(isInstructor != true) {
        console.log("The value is falsey")
    }