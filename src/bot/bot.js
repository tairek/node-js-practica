const { Client, Events, GatewayIntentBits } = require('discord.js');
const {token} = require('./config.json');
const {QuickDB} = require('quick.db');

const quick= new QuickDB();

const client = new Client({ intents: [ 
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,] });

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    
    const msgAizy =  ['Hola guapa hermosa','Hola preciosa','Hola Aizy bella','Hola :v'];
    const randomAizy = msgAizy[Math.floor(Math.random() * msgAizy.length)];

    const msgTairek = ['Hola nub','Hola feo','Hola al mas nub','Hola gay'];
    const randomTairek = msgTairek[Math.floor(Math.random() * msgTairek.length)];

    message.mentions.users.each(user =>{
        if(user.id == "1278892426546643026") {
            if(message.channelId !== "1278899890117935124") {
                if(message.author.id === "1172524344216395786"){
                    message.channel.send(randomAizy);
                } else  {
                    message.channel.send(randomTairek);
                }
            }
        }
    })
    
});

client.on('messageCreate', async (message)=>{
    //message.channelId === "1278899890117935124" && message.author.id === "892245894454476800"
    if(message.channelId === "1278899890117935124" && message.author.id != '1278892426546643026') {
        try {
            const code = message.content;
            let evaled = eval(code);

            if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled);
            }

            message.channel.send(`\`\`\`js\n${evaled}\n\`\`\``);
        } catch (err) {
            message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
        }
    }

})

client.articuloCreado = (enlace)=> {
    const channels = [
        client.guilds.cache.get('1249200147376640010').channels.cache.get('1249200147376640012'),
        client.guilds.cache.get('1257358353248551025').channels.cache.get('1278899890117935124')
    
    ];

    for (const element of channels) {
        element.send('Articulo creado (no entres al enlace porque no te va a funcionar xd): '+enlace);
    }
}

client.login(token);

module.exports = client;