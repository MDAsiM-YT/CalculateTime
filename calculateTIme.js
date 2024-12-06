const startTime = Date.now(); // Record the start time

setTimeout(() => {
  const endTime = Date.now(); // Record the end time when the function runs
  const elapsedTime = endTime - startTime; // Calculate the elapsed time
  console.log(`Elapsed time: ${elapsedTime} ms`);
}, 1000); // Set a 1-second delay
