/* Made By TokyoID */
const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
const prefix = "!";

client.on("message", async message => {

  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
	
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

if(cmd === "ping"){
	if(!args[0]) return message.channel.send(`Enter The Ip Please!`)
	fetch('http://' + args[0]).then(response => {
	message.channel.send(response.statusText)
	}).catch(err => {
	message.channel.send(err.message)
    })
}

});

client.login("TOKEN BOT")
