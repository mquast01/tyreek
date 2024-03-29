const Discord = require('discord.js');
const { readdirSync } = require('fs');
const { join } = require('path');
//const config = require("./config.json");
require('dotenv').config()

const client = new Discord.Client();
const Collection = new Discord.Collection();

client.commands = Collection;
const commandFiles = readdirSync(join(__dirname, 'commands')).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('the consequences of the industrial revolution', {type: 'WATCHING', url: 'https://www.twitch.tv/chess'});
  (function bible() {
	setTimeout(bible, 1000 * 60 * 60 * 24);
	//client.commands.get("bible").execute(client);
  })();
});

client.on('message', message => {
  if (message.author.bot) return;
  const match_arr = message.content.toLowerCase().match(new RegExp('kanye', "i"));
	if(!match_arr) console.log('eee');
	if(match_arr == 'kanye') {
		client.commands.get("kanye").execute(message);
		return;  
	}

  if (message.content[0] !== '!') return;
  const args = message.content.slice(1).trim().split(' ');
  const command_name = args.shift().toLowerCase();
  const command = client.commands.get(command_name);
  if(!command) return;

  try {
    command.execute(message);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing that command.").catch(console.error);
  }
 
});

client.login(process.env.CLIENT_SECRET);
