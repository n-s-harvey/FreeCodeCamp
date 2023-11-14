/* 
* catch is the method used when your promise was rejected
*   -> executed after promise's reject is called 
* 
 */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

// ! Note that .then() and .catch() are both
// ! outside of the promise block
makeServerRequest.then(result => {
    console.log(result);
});
makeServerRequest.catch(error => {
    console.log(error);
});