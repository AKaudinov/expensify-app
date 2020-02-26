const promise = new Promise((resolve, reject) => {
    //do some work
    setTimeout(() => {
        // resolve('Task completed, data resolved');
        // //resolve the promise, and return this info after 3 seconds
        // // back to the caller who's waiting
        //
        // resolve('other resolved data'); //this will not run! we already resolved above!
        // //promises can only resolve or reject once!

        reject('something went wrong');
    }, 3000)
});

promise.then((data) => { //fires when the promise resolves
    console.log(data); //this will log the data returned in the resolve above
    //after 3 seconds, because this then() method is a callback for when the promise resolves
    //the app doesn't get stuck on this, and can continue working on other things, whilst this
    //then() method executes upon promise resolve

}).catch(err => { //fires when the promise gets rejected
    console.log(err); //log the error
});


//OR you can write then and catch the following way: passing 2 arguments to the then call

promise.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});

//Promise chaining
promise.then((data) => {
    console.log(data);
}).then(() => {
    console.log('logged data to the console'); //chained a then to the first then
}).catch(err => {
    console.log(err);
});


//Promise chaining
promise.then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('other resolved data');
        }, 3000)
    });
}).then(() => { //this then will run on the returned promise above
    console.log('logged data to the console'); //chained a then to the first then
}).catch(err => {
    console.log(err);
});
