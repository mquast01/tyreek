//
const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json")


client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === '!tyreek') {
    message.channel.send('मी ठार करीन dennis\n मला हे मिळालं तर dub\n', {
      files: ["./help.png"]
    });
  }
});

client.login(config.secret);