document.addEventListener("DOMContentLoaded", function () {
  // Get the elements by their data-testid attributes
  const slackUserName = document.querySelector('[data-testid="slackUserName"]');
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );

  const myTrack = document.querySelector('[data-testid="myTrack"]');

  // Get the current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];

  // Get the current UTC time in milliseconds
  const currentUTCTimeMs = currentDate.getTime();

  // Set the text content of the elements
  currentDayOfTheWeek.textContent = ` ${dayOfWeek}`;
  function updateClock() {
    const clockElement = document.getElementById("digital-clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
  }

  // Update the clock every second (1000 milliseconds)
  setInterval(updateClock, 1000);

  // Initial update
  updateClock();

  // Replace "Your Slack Name" and "Your Track" with your actual information
  slackUserName.textContent = "Aminu Muhammed-Lawal";
});
