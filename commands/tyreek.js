const Discord = require('discord.js');

module.exports = {
  name: "tyreek",
  execute(message) {
    return message.channel.send('मी ठार करीन dennis\n मला हे मिळालं तर dub\n', {
      files: ["./help.png"]
    });
  }

};