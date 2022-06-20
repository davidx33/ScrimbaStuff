
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

async function displayUser() {

    try {
        const logUser = await loginUser("ed", 12345);
        const videos = await getUserVideos(logUser.userEmail);
        console.log(videos)
    }
    catch(err) {
        console.log("HOUSTON WE HAVE A PROBLEM")

    }
    
}

displayUser