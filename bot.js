const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
    if(message.content == 'Hewwo there'){
        message.channel.sendMessage('Genwal Kewobi OwO');
    }

    if(message.content == 'Who do we hate?'){
        message.channel.sendMessage('Gus-2!');
    }

    if(message.content == '$!whoami'){
        message.channel.sendMessage('I am the type of guy that cuts in front of you at McDonalds, orders some fucking thing that is not even on the menu, argues with the person behind the counter for a little bit, then I end up getting her number because she has big fucking titties, then I fucking order something, and I leave without the item or paying because FUCK McDonalds, I aint got time for your fucking shitty excuses, like i couldnt give a flying shit if your dick is stuck in the frozen fanta machine!!!');
    }

    if(message.content == 'yeet'){
        message.channel.sendMessage('dab');
    }

});

bot.login(process.env.BOT_TOKEN);
