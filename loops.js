//Loops


/*
 * allow us to go over a block of code a determined amount of cycles.It is possible for us to  
  write code without declaring an endpoint.

  * Loops Allow us to repear a process without rewriting a lot of code.



            WHILE LOOPS

    *Excecuted a starement inside of a code block provided that the condition continues
    to evaluate to true

    * The condition is evaluated before executing the statement.
*/


// let randInt = 75

// while(randInt > 0) {
//     randInt = randInt - 1
//     console.log(randInt)
// }

// while (true) {
//     randInt = randInt + 1
//     console.log(randInt)
// }

/**
 *              FOR LOOPS
 * * Set up looop so we can:
 * 
 *  *see where we are in a loop
 *  *consider the condition we run it against
 *  *note wehen we are done with that block of code/condition
 * i = i + 1 = i++
 */
//      start; stop;    Step;
// for(let i = 0; i <= 100; i = i + 1){
//     //block of code we excecute
//     console.log(i)
// }


// let shortWord = "dog"

// for(let i = 0; i < shortWord.length; i++){
//     //grab the index of each letter in shortWord variable
//     // i is the index of the word
//     console.log(shortWord[i], i)

// }

// For in Loops
/**
 *  * Great for anything index or number related
 * 
 * 
 */

// for(i in shortWord) {
//     console.log(i)
// }

// For of Loops

// Good for iterable objects

// for(i of shortWord){
//     console.log(i)
// }

// for in and for of loops iterate for the length if the iterable ( cant change it )
// i is just a placeholder for the instance of iteration

// let number = 2123421

// for(i in number){
//     console.log(i)
// }

// Do while loops
// first excecutes code in the do section while a condition remains true

// let j = 0 

// do{
//     console.log(shortWord[j])
//     j++
// }while (j < shortWord.length)


let fizzbuzz = number => {
    if (number % 3 ==0 && number % 5==0){
        console.log("Fizzbuzz")
    } else if (number % 3 ==0 ){
        console.log("Fizz")
    }else if (number % 5 ==0){
        console.log("Buzz")
    }else {
        console.log("Not divisible by 3 or 5 / both")
    }

 
}

console.log(fizzbuzz("3"))
console.log(fizzbuzz("15"))
console.log(fizzbuzz("5"))
console.log(fizzbuzz("7"))
console.log(fizzbuzz("6"))

process.stdin.on("data", fizzbuzz) // inputs data from outside of 
// node into fizzbuzz