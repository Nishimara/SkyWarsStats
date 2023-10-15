import { Client, GatewayIntentBits, Routes } from 'discord.js';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest'
import { readFileSync } from 'fs';
import iSWPlayer from './interfaces';
const Hypixel = require('hypixel-api-reborn');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const config = JSON.parse(readFileSync('config.json', 'utf-8'));
const hypixel = new Hypixel.Client(config.hypixelToken);

client.on('ready', () => {
    if (client.user) console.log(`Logged in as ${client.user.tag}!`);
});

const commands = [
    new SlashCommandBuilder()
        .setName('sw')
        .setDescription('Get player SkyWars stats')
        .addStringOption(option =>
            option.setName('nickname')
                .setDescription('Nickname or UUID of the player')
                .setRequired(true)),
    new SlashCommandBuilder().setName('ping').setDescription('Check latency')
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(config.discordToken);

rest.put(Routes.applicationCommands(config.clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

client.on('interactionCreate', (async interaction => {
    if (!interaction.isCommand()) return;
    if(!interaction.isChatInputCommand()) return;
    const { commandName } = interaction;

    if (commandName === 'sw') {
        const player: iSWPlayer = await hypixel
        .getPlayer(interaction.options.getString('nickname'))
        .then(async (_player: iSWPlayer) => {
            return _player;
        })
        .catch(async (e: String) => {
            return await interaction.reply(`Error!\n\`\`\`${String(e)}\`\`\``)
        })
        if (!player || !player.stats) return;
        if (!player.stats.skywars) await interaction.reply('Игрок никогда не играл на Hypixel!')
        const stats = player.stats.skywars;
        try { await interaction.reply(
            `Никнейм: ${player.nickname}\n` +
            `Уровень: ${player.level}\n` +
            `Прогресс EXP: ${player.levelProgress.currentXP}\n` +
            `Побед: ${stats.wins}\n` +
            `Поражений: ${stats.losses}\n` +
            `WLR: ${stats.WLRatio}\n\n` +

            `Убийств: ${stats.kills}\n` +
            `Смертей: ${stats.deaths}\n` +
            `KDR: ${stats.KDRatio}\n\n`)
        } catch (e) {
            await interaction.reply(`Error!\n \`\`\`${String(e)}\`\`\``)
        }
    }
    if (commandName === 'ping') await interaction.reply(`Pong! \`\`\`${(Date.now() - interaction.createdTimestamp)/1000} seconds\`\`\``);
}));


client.login(config.discordToken);