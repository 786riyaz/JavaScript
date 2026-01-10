console.log("Program started");

let logger = (message, level = "INFO", ...extraArgs) => {
  console.log(
    `Logger [${level}]: ${message}`,
    // [...extraArgs].length > 0 ? `| Extra Args: ${extraArgs.join(", ")}` : "");
    extraArgs.length > 0 ? `| Extra Args: ${extraArgs.join(", ")}` : ""
  );
};

function logging(message) {
  console.log("Logging :: ", message);
}

logger(
  "This is a log message",
  "INFO",
  "extra argument1",
  "extra argument2",
  "extra argument3"
);
logging("This is another log message");
logger("Program ended");
logging("End of logging");
