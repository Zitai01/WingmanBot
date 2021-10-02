// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js')
const express = require('../express')

require('dotenv').config()

const token = process.env.DISCORD_BOT_TOKEN
console.log(token)
// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})
// Loki
const guild = '229749241810124801'
const clientId = '893515753217720320'
// When the client is ready, run this code (only once)
client.on('ready', () => {
  console.log(`${client.user.tag}is ready`)
})
client.on('message', (message) => {
  if (message.author.bot) return
  console.log(`${message.author}`)
  if (message.content === 'hello') {
    if (express.getName()) {
      message.channel.send(`hello ${express.getName()}`)
    } else {
      message.channel.send('hello there')
    }
  }
})
// Login to Discord with your client's token
client.login(token)
