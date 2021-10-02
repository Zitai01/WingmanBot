const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const dotenv = require('dotenv')
dotenv.config()
const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  new SlashCommandBuilder()
    .setName('games')
    .setDescription('Replies with games info!'),
  new SlashCommandBuilder()
    .setName('user')
    .setDescription('Replies with user info!')
].map((command) => command.toJSON())
const token = process.env.DISCORD_BOT_TOKEN
console.log(token)
const rest = new REST({ version: '9' }).setToken(token)
const clientId = '893515753217720320'
const guildId = '229749241810124801'
rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
