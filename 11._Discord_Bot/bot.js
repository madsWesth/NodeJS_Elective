import dotenv from "dotenv";
dotenv.config();

import { Client, Intents, Interaction } from 'discord.js';
import ELIZA from "./ELIZA.js";


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content.toLowerCase().includes("bot")) {
        const reply = message.content.replace(/bot/ig, "human")
        message.channel.send(reply)
    } else {
        const reply = ELIZA.reply(message.content)
        message.channel.send(reply)
    }

    //console.log(message.content)
    // message.react("🍆");
    
    
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'shakira') {
		await interaction.reply('💃These hips dont lie 💃');
	}
});

/* client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
}); */

client.login(process.env.DISCORD_BOT_TOKEN);