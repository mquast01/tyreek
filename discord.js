//
const Discord = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');

const client = new Discord.Client();
const Collection = new Discord.Collection();

const config = require("./config.json");
const spit2 = client.channels.cache.get('711072853117632574');

client.commands = Collection;
const commandFiles = readdirSync(join(__dirname, 'commands')).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('the consequences of the industrial revolution', {type: 'WATCHING', url: 'https://www.twitch.tv/chess'});
});

client.on('message', message => {
  if (message.author.bot) return;
  const kanye = message.content.match(new RegExp('kanye'));
	if(kanye) {  
    		message.channel.send('So you\'re a kanye fan huh? Who was in paris then?');
		return;  
	} 

  if (message.content[0] !== '!') return;

  const command = client.commands.get((message.content).slice(1));
  if(!command) return;

  try {
    command.execute(message);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing that command.").catch(console.error);
  }
 
});

client.login(config.secret);
