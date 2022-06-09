/* Process is an event that currently runs in the foreground or background on your local machine.
Node.js allows access to its proccesses via a process ojbect

this helps us deal with proccessing external input and internal output(io) into and out of our 
file/program. The file becojmes a process when its excecuted

This is done using process.stdin and process.stdout properties



        EVENT LISTENERS

   * A way of handling user input
   * They take two parameters: ( event / action)
    *Event specifies when the action will fire
    *action is a callback function that does something when the
    event occurs

    Example : .once()

        CALL BACK FUNCTIONS
    *Fucnctions that will be called upon iside of another 
     function or a method when an even occurs.


Setting up a listen on standard-input (stdin) so that when we
type something. node will reply with what we say + the word ...butts

also created thanksForPlaying function that is being used as a 
callback when the event listener inside handleInput senses an event.
This is 
*/

//import {stdin, stdout} from "Node:Process"

//console.log("Hello")
/*
process.stdin.once("data", (input) => {
    console.log(input.toString())
})


function handleInput(input) {
    console.log(input.toString().trim() + "...butts")
    process.stdin.once("data", thanksForPlaying)
}

function thanksForPlaying(input) {
    console.log(input.toString().trim() + ".... Thanks for playing")
    console.log("all done")
    process.exit()
}

process.stdin.once("data", handleInput)
*/


//import {stdin, stdout} from "Node:Process"

// process.stdin.on("data", (input) =>{
     //Writable stream or standard out (0) of 10
//     process.stdout.write(`This is the input: ${input.toString()}`)

// })

// process.stdion.on("end", () => {
//     process.stdout.write("Fires only during end")
// })


//Repeat call function

function result(input) {
    process.stdout.write(`This is the input: ${input}`)
}

process.stdin.on("data", result)

process.stdin.on("end", result)

process.stdin.on("connect", result)