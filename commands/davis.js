const Discord = require('discord.js');

module.exports = {
  name: "davis",
  execute(message) {
    return message.channel.send('if carrying this gat is a crime, then the american legislators have overstepped boundaries set by the second amendment', {
      files: ["./davis.png"]
    });
  }

};
