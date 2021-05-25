const Discord = require('discord.js');

module.exports = {
  name: "echo",
  execute(message) {
		var msg_content = message.content.replace("!echo", "");
		
		message.channel.send(msg_content);
		return message.delete()
	}
};


