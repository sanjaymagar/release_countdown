const countdown = document.querySelector('.countdown');

// Set Lunch date(ms)
const date = 'Jun 1, 2019 13:00:00';
const lunchDate = new Date(date).getTime();
// Upadate every second
const intvl = setInterval(() => {
  // Get current date and time(ms)
  const now = new Date().getTime();

  // Distance from now and luch date
  const distance = lunchDate - now;

  // Time Calculation
  const days = Math.trunc(distance / (1000 * 60 * 60 * 24));
  const hours = Math.trunc(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.trunc((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.trunc((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
        <div>${days}<span> Days</span></div>
        <div>${hours}<span> Hours</span></div>
        <div>${mins}<span> Minutes</span></div>
        <div>${seconds}<span> Seconds</span></div>
    `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);

    // Style and output text
    countdown.style.color = '#15a2b8';
    countdown.innerHTML = 'Lanched!';
    document.querySelector('#soon').style.display = 'none';
  }
}, 1000);
