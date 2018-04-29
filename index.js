const Discord = require('discord.js');
const client = new Discord.Client();
const ascii = require('ascii-art');

client.on('ready', function(){
  console.log('Logged in as ${client.user.tag}!');
});

client.on('message', function(msg){
	if (msg.content === '!ascii "DEMO!"') {
		var string = ascii.font("DEMO!", 'Doom', function(rendered){					
			msg.reply(string);
		});
	};
});

client.login('token');
client.send("!ascii 'DEMO!'");