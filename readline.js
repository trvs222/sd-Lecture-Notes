// const { read } = require("fs")
// const readline = require("readline") // imports readline libraries to the file to use 

// const readlineInterface = readline.createInterface(
//     process.stdin,
//     process.stdout
// )

// function ask(questionText) {
//     return new Promise((resolve, reject) => {
//         readlineInterface.question(questionText, resolve)
//     })
// }

// // readlineInterface.setPrompt("What is your name?: ")
// // readlineInterface.prompt()
// // readlineInterface.on("line", (q) => {
// //     console.log(`question`)
// // })

// readlineInterface.question("how do you like the class so far?",
// (answer) => {
//     console.log("you replied:");
//     console.log(answer.toUpperCase());
//     console.log("thanks for the feedback!");
//     readlineInterface.close()
// });


// JOSH CODE
const { rawListeners } = require("process")
const interface = require("node:readline/promises");

const rl = interface.createInterface(
    process.stdin,
    process.stdout
)

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve)
    })
}
async function main (){
console.log('Running the code ...');

const answer = await rl.question("What do you think of the class?");
console.log('You replied:');
console.log(answer.toUpperCase());
console.log('Thank you for the feedback!');
}

main();