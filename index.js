function getCurrentUTCTime() {
  // Create a new Date object for current UTC time
  var now = new Date();
  
  // Get UTC time components
  var hours = now.getUTCHours();
  var minutes = now.getUTCMinutes();
  var seconds = now.getUTCSeconds();
  
  // Format hours, minutes, and seconds to always display two digits
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  // Format the time as HH:MM:SS
  var currentTimeUTC = hours + ':' + minutes + ':' + seconds;
  
  // Return the formatted time
  return currentTimeUTC;
}

// Function to update the time every second
function updateClock() {
  var currentTime = getCurrentUTCTime();
  document.getElementById('utc-clock').textContent = currentTime;
}

// Update the clock initially
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

  // JavaScript code to get current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayIndex = new Date().getDay();
  const currentDayOfWeek = daysOfWeek[currentDayIndex];

  // Display day of the week on the web page
  document.getElementById('day-of-week').textContent = ` ${currentDayOfWeek}.`;