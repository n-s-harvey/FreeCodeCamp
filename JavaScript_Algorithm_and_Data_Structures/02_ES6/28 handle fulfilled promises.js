/* 
? WHEN SHOULD PROMISES BE USED?
* When process will take an unknown amount of time
* After the promise is fulfilled, use the then method to
*   immediately execute code after promise is fulfilled
*   with resolve
! result comes from the argument given to resolve
 */

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});


makeServerRequest.then(result => {
    console.log(result);
});