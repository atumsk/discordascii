const Discord = require('discord.js');
const client = new Discord.Client();
const ascii = require('ascii-art');

const config = {
		"token"  : "NDQxMTk0NTMzMzg5MDc0NDMy.DcsuHA.A1pSkr3uK0URijv8ioBVKaVZOHY",
		"prefix" : "+"
	};

client.on('ready', function(){
  console.log('Logged in as JanduBot!');
});

client.on('message', function(msg){
	if (msg.content.indexOf('!ascii') == 0) {
		console.log("Received ascii command: " + msg.content.slice(7, msg.content.length));
		var string = ascii.font(msg.content.slice(7, msg.content.length), 'Doom', function(rendered){
			console.log(rendered);
			msg.reply('\n' + rendered);
		});
		console.log(string);
	};
});

client.login(config.token);
//client.send("!ascii 'DEMO!'");