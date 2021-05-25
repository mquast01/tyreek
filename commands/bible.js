const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: "bible",
  execute(client) {
        axios.get('https://beta.ourmanna.com/api/v1/js/?order=random&format=json')
	.then(function (response) {
		var verse = response.data
		verseArray = verse.match(/'([^']+)'/g);
		verseMessage = verseArray[0] + " - " + verseArray[1].slice(1, -1);
		return client.channels.cache.get('834546939810283530').send(verseMessage);
  	});
  }
};
