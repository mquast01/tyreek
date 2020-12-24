const Discord = require('discord.js');

module.exports = {
  name: "rage",
  execute(message) {
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#E31837')
	.setTitle('RAGE')
	.setURL('https://PRIMALANGER.org/')
	.setAuthor('ANGER', 'https://media.discordapp.net/attachments/409072704008749066/760977420526157824/image0-1.gif', 'https://media.discordapp.net/attachments/409072704008749066/760977420526157824/image0-1.gif')
	.setThumbnail('https://media.discordapp.net/attachments/409072704008749066/760977420526157824/image0-1.gif')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'ANGER', value: 'MARGARET', inline: true },
		{ name: 'ANGER', value: 'SANGER', inline: true },
	)
	.setImage('https://media.discordapp.net/attachments/409072704008749066/760977420526157824/image0-1.gif')
	.setTimestamp()
	.setFooter('EVEN MORE ANGER ', 'https://media.discordapp.net/attachments/409072704008749066/760977420526157824/image0-1.gif');

    message.channel.send(exampleEmbed);
  }

};