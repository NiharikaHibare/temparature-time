// Function to update temperature
function updateTemperature() {
    // Simulating temperature data (random between 0 and 100)
    var temperature = Math.floor(Math.random() * 101);
    document.getElementById('temperature').innerText = 'Temperature: ' + temperature + '°C';
}

// Function to update time
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format time to display with leading zeros if needed
    var formattedTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    document.getElementById('time').innerText = 'Current Time: ' + formattedTime;
}

// Initial update
updateTemperature();
updateTime();

// Update temperature every 5 seconds
setInterval(updateTemperature, 5000);

// Update time every second
setInterval(updateTime, 1000);
