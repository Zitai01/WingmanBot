const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { SlashCommandBuilder } = require('@discordjs/builders')
const dotenv = require('dotenv')
dotenv.config()

const token = process.env.DISCORD_BOT_TOKEN
const fs = require('fs')

// const commands = []
// const commandFiles = fs
//   .readdirSync('./commands')
//   .filter((file) => file.endsWith('.js'))

// Place your client and guild ids here
const clientId = '893515753217720320'
const guildId = '229749241810124801'

// for (const file of commandFiles) {
//   const command = require(`./commands/${file}`)
//   commands.push(command.data.toJSON())
// }

let command = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with pong!')

const rest = new REST({ version: '9' }).setToken(token)

;(async () => {
  try {
    console.log('Started refreshing application (/) commands.')

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: command
    })

    console.log('Successfully reloaded application (/) commands.')
  } catch (error) {
    console.error(error)
  }
})()
