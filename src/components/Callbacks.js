
function loginUser(email, password, callback) {
    // callback is a function, what it will do with the argument
    // provided is below
    setTimeout(() => {
        console.log("Now we have the data")
        callback({ userEmail: email })
    }, 5000)
}

function getUserVideos(email, password, callback) {
    setTimeout(() => {
        console.log("I am just trying to figure it out")
        callback(["video 1", "video 2", "video 3"])
    }, 5000)
}

function videoDetails(video, callback) {
    setTimeout(() => {
        callback("TITLE OF VIDEO")
    }, 2000)
}

const user = loginUser("thexudavid@gmail.com", 123, arg => {
    console.log(arg);
    getUserVideos("random email", "password", arr => {
        console.log(arr)
        videoDetails("random video", title => {
            console.log(title)
        })
    })

})

