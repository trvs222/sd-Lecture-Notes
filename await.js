// function getData() {
//     setTimeout(() => {
//         return "Some data"
//     }, 3000)
// }

//const { isAsyncFunction } = require("util/types");

// let data = getData()

// console.log(data)

// Callbacks

function getData(callback) {
    setTimeout(() => {
        callback("some data")
    }, 3000);
}

// getData(function (data) { console.log(data) })

console.log("hello world")

// Promises

/* 
    * Promise is an object that may produce a singular value in the future.

    * Three States
        * Pending (unfinished)
        * Fulfilled (complete value result)
        * Rejected (error)
*/

function getData() {
    let ape = true
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ape) {
                resolve("some true data")

            } else {
                reject("error")
            }
        }, 3000)
    })
}

console.log(getData())

function tradFunction(){
    return "stuff"
}
 let stuff = tradFunction()

// let promiseStuff = getData()
// console.log(tradFunction())
// console.log(promiseStuff)

getData()
    .then(data => console.log(typeof data))
    .catch(error => console.log(error))

    /**
     *  *Create a new instance of a Promise. It takes resolve and reject
     *   as parameters for its callback\
     * 
     *  *wrap it in setTimeout() to simulate waiting for a resource
     *  * resolve() or reject() the promise
     * 
     * * when returned, the getData() fx will retrun a Primise instead
     * of a given string
     *  * we use . then() amd .catch() resolvers with callbacks which 
     * catch the Promise and extrapolate the information we want
     * 
     * async/await
     */

    async function ansyncDeclaration() {

    }

    let asyncExpression = async function() {

    }

    let asyncArrowFunction = async () => { }
    //async function
    //Identical to regular function apart from one thing:
    // async functions always return a Promise

    async function getName() {
        return "Trevor"
    }
    //console.log(getname())

    getName().then(data => console.log(data))

    //Await functions

    async function extraData() {
        let infoFromGetData = await getData();
        console.log(`${infoFromGetData} + data from async function.`)
    }

    extraData().then(data => console.log(data))