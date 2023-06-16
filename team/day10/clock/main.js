const clock = document.getElementById("clock")


function getCurrentTime() {
    const date = new Date()
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    return clock.innerHTML = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`
}

setInterval(() => getCurrentTime(),1000)