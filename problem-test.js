function calculateWatchTime(times) {
  let totalSeconds = times.reduce((sum, time) => sum + time, 0);

  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  return `Hour: ${hours}, Minute: ${minutes}, Second: ${seconds}`;
}

const sec = [390, 499, 1399, 750];
console.log(calculateWatchTime(sec)); // Output: Hour: 0, Minute: 50, Second: 18
