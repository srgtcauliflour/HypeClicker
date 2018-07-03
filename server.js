const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

client.on('message', message => {
  if (message.content === '420') {
    message.reply('Get the Bong out! Hype Rocked up and He brought Weed!!');
  }
});

client.login("");


