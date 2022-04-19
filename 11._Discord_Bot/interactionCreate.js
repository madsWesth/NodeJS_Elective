import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v10'

import dotenv from "dotenv"
dotenv.config()

const commands = [
	{
		name: 'shakira',
		description: 'shakes hips!',
	},
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
