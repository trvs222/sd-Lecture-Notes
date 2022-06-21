//setting up async/await ask functionality for the command line
const path = require("path");
const readline = require("readline");
const readlineInterface = readline.createInterface(
    process.stdin,
    process.stdout
);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

class Path {
    constructor(name, paths) {
        this.name = name;
        this.paths = paths;
    }

    //creating a map method on our path
    map() {

        console.log(`From the ${this.name} path, you can follow the ${this.paths}.`)
    }
}

let start = "blue"

let Red = new Path (
    "Red",
    "Yellow, blue"
)


let Blue = new Path (
    "Blue",
    "Green, Red"
)

let Green = new Path (
    "Green",
    "Blue, Yellow"
)

let Yellow = new Path (
    "Yellow",
    "Green, Red"
)


let pathTable = {
    blue: Blue,
    green: Green,
    yellow: Yellow,
    red: Red,
}

let pathStateMachine = {
    red: ["Blue", "Yellow"],
    blue: ["Green", "Red"],
    green: ["Blue", "Yellow"],
    yellow: ["Green", "Red"],
}

function riverBegin() {
    console.log("You are stuck on a river in a boat without a map home, there are (4) different rivers. You can check the [map] or [cross] to switch rivers. Or, you can [sink].")
    boat()
}

async function boat() {
    //assign result of await ask to a variable for use
    let input = await ask("Where would you like to go?  >_")

    //split the input on a space
    input = input.split(" ");

    //let action be the first word in input
    let action = input[0];

    //let target be the second word in input
    let target = input.slice(1).join(" ");

    //capitalize the first letter in target
    target = target.charAt(0).toUpperCase() + target.slice(1)

    //if action is "map" and there is no target
    if (action === "map" && !target) {
        //look up the current line in the lookup table and call the map method on it
        pathTable[start].map()
    }

    //if action is "relax" and there is no target
    if (action === "sink" && !target) {
        //console log the exit message
        console.log("You have sunk your boat!")
        //exit the program
        process.exit()
    }

    //if action is "transfer" and there is a target
    if (action === "cross" && target) {
        //if  the value of currentLine in the state machine includes the action target
        if (pathStateMachine[start].includes(target)) {
            //set the current line to the target
            start = target.toLowerCase()
            //inform the user of the change in current line
            console.log(`You crossed to the ${target} river.`)
            //call our riding function to continue getting input
            boat()
            //if the value of currentLine in the state machine does NOT include the action target
        } else {
            //inform user that they can't transfer lines
            console.log("You can't cross from here to there.")
            
            boat()
        }
    }


    if (action !== "map" && action !== "cross" && action !== "sink") {
        console.log("What are you trying to do?")
        boat()
    }

    
    boat()
}


riverBegin()