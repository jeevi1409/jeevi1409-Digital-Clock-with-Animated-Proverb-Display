function updateClock() {
    const now = new Date();
  
    // Get current time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Get current date components
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const weekday = days[now.getDay()];
    const month = months[now.getMonth()];
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
  
    // Update time
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
  
    // Update date
    document.querySelector('.weekday').textContent = weekday;
    document.querySelector('.month').textContent = month;
    document.querySelector('.day').textContent = day;
    document.querySelector('.year').textContent = year;
  }
  // List of proverbs or catchy phrases
const proverbs = [
    "Time waits for no one.",
    "A stitch in time saves nine.",
    "Every second counts.",
    "The early bird catches the worm.",
    "Lost time is never found again.",
    "Seize the day!",
    "Time flies when you're having fun.",
    "Better three hours too soon than a minute too late.",
    "Time is the most valuable thing a man can spend.",
    "Patience is the companion of wisdom"

  ];
  
  // Function to display a random proverb
  function displayProverb() {
    const randomProverb = proverbs[Math.floor(Math.random() * proverbs.length)];
    document.getElementById('proverb-text').textContent = randomProverb;
  }
  
  // Update the clock and display the proverb on load
  setInterval(updateClock, 1000);
  updateClock();
  displayProverb();
  