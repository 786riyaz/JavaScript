console.log("Application Started....");

setInterval(() => {
  console.log(new Date().toLocaleString(), "::: Heartbeat: Application is running...");
}, 1000 * 3); // Logs every 5 seconds
