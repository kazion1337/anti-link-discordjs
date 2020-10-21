const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("@kazion#1337");
});

client.on("message", (message) => {
  if (message.content.includes("https://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete();
    message.channel.send("No links here, " + message.member)
  }
    if (message.content.includes("http://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.send("No links here, " + message.member)
  }
  if (message.content.includes("www.")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.send("No links here, " + message.member)
  }
   if (message.content.includes("discord.gg/")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.send("No links here, " + message.member)
  }
});

client.login("token");
