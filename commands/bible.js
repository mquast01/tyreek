const Discord = require('discord.js');
const axios = require('axios');
require('dotenv').config()

module.exports = {
  name: "bible",
  execute(client) {
        axios.get('https://beta.ourmanna.com/api/v1/js/?order=random&format=json')
	.then(function (response) {
		var verse = response.data
		verseArray = verse.match(/'([^']+)'/g);
		verseMessage = verseArray[0] + " - " + verseArray[1].slice(1, -1);
		return client.channels.cache.get(process.env.BIBLE_CHANNEL_ID).send(verseMessage);
  	});
  }
};
