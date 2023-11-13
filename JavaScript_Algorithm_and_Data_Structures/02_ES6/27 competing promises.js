/* 
? WHAT ARE THE PROMISE STATES?
* pending, fulfilled, rejected (keywords)
* resolve is what you what to execute when promise 
* is successful, reject is when promise fails
 */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});