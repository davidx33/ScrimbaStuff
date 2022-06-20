// Basic promise syntax

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("got the user")
        resolve({ user: "david xu" })
        reject(new Error("this is an error"))
    }, 2000);
});

promise.then(user => {
    console.log(user);
})
.catch(err => console.log(err.message));

// refactor the old code to use promises

function loginUser(email, password) {
    // callback is a function, what it will do with the argument
    // provided is below
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data")
            resolve({ userEmail: email })
        }, 5000)
    })
}

function getUserVideos(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ key: value })
            reject(new Error("error message"))
        }, 2000)
    
})
}

loginUser("email", "password")
.then(datayk => getUserVideos(datayk))
// pass in the resolve data in loginUser to getUserVideos
