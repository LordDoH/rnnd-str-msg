const messages = [
  "Hello, World!",
  "This is where the magic happens!",
  "I'm a software engineer!",
  "This commit is from the feature branch!",
  "Here be dragons!",
  "Yes sir!",
  "I'm Batman!",
  "You're breathtaking!",
]

const funnyMessage = () => {
  const rndMessage = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${rndMessage}\x1b[89m`);
}

module.exports = {
  funnyMessage
}