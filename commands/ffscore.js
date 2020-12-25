const Discord = require('discord.js');
const config = require("../config.json");
const league = require("../league.json")
const params = {seasonId: 2020, matchupPeriodId: 15,scoringPeriodId: 15};

module.exports = {
  name: "ffscore",
  ffootball: "true",
  execute(myclient, args, message) {
    var score_message = "```\n"
    var weekCounter = Math.round((new Date() - new Date(2020, 8, 7)) / (7 * 24 * 60 * 60 * 1000));
    var sPeriodId;
    if(!args.length) {
      sPeriodId = weekCounter;
    } else if (args[0] <= 0 || args[0] > weekCounter) {
      return message.channel.send('out of range');
    } else {
      sPeriodId = parseInt(args[0]);
    }
    console.log(sPeriodId);

    myclient.getBoxscoreForWeek({seasonId: 2020, matchupPeriodId: sPeriodId, scoringPeriodId: sPeriodId}).then((score) => {
      score_message += "WEEK " + sPeriodId + "SCORE".padStart(37) + "\n";
      console.log(score.length);
      for(i = 0; i < score.length; i++){
        score_message += ((league.teams[score[i].homeTeamId -1].location + " " + league.teams[score[i].homeTeamId -1].nickname).padStart(30));
        score_message += ("  " + score[i].homeScore).padStart(10) + "   " + (score[i].awayScore + "  ").padEnd(10);
        score_message += ((league.teams[score[i].awayTeamId -1].location + " " + league.teams[score[i].awayTeamId -1].nickname).padEnd(20));
        score_message += '\n';
      }
      score_message += "```"
      return message.channel.send(score_message);

    });
  }

};
