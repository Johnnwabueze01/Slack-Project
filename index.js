// JavaScript code to get current UTC time
const currentUTC = new Date().toUTCString();
        
// Display UTC time on the web page
document.getElementById('utc-time').textContent = currentUTC;
  // JavaScript code to get current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayIndex = new Date().getDay();
  const currentDayOfWeek = daysOfWeek[currentDayIndex];

  // Display day of the week on the web page
  document.getElementById('day-of-week').textContent = `Today is ${currentDayOfWeek}.`;