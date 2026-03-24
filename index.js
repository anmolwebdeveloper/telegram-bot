import { Telegraf, Markup } from 'telegraf';
import 'dotenv/config';
import { algorithms } from './algorithms.js';
import express from 'express';

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

// Use Telegraf's built-in webhookHandler properly
app.use(bot.webhookCallback('/api/webhook'));

// Health check route just in case
app.get('/api/health', (req, res) => {
    res.send('Bot is healthy and running cool! 🚀');
});

// Web UI Chat API (Allows chatting directly on the browser!)
app.post('/api/webchat', express.json(), (req, res) => {
    const userMessage = req.body.message ? req.body.message.toLowerCase().trim() : '';
    let reply = '';

    // Handle commands or raw text matching algorithms
    const isCommand = userMessage.startsWith('/');
    const algoKey = isCommand ? userMessage.slice(1) : userMessage;

    if (userMessage === '/start' || userMessage === 'start') {
        reply = 'Welcome to Anmosh\'s Algobot! 🚀 You are chatting from the Web! Try asking "what can you do" or ask for an algorithm like "binarysearch".';
    } 
    else if (algorithms[algoKey]) {
        reply = "Here is your code:\n\n" + algorithms[algoKey];
    }
    else if (userMessage.includes('love you')){
        reply = "I love you more! 💖";
    }
    else if (userMessage.includes('how are you')) {
        reply = "I'm running smoothly on a V8 engine, feeling great! ⚡ How about you?";
    }
    else if (userMessage.includes('who are you') || userMessage.includes('your name')) {
        reply = "I'm Anmosh's Bot, your friendly neighborhood assistant! 🦸‍♂️";
    }
    else if (userMessage.includes('hi') || userMessage.includes('hello') || userMessage.includes('hey')) {
        reply = "Hey there! 👋 Have you had your coffee yet? ☕";
    }
    else if (userMessage.includes('what can you do') || userMessage.includes('help')) {
        reply = "I can help you with cool algorithms! Try asking for: binarysearch, linearsearch, bubblesort, selectionsort, insertionsort, factorial, fibonacci, gcd, prime, palindrome, reverse.";
    }
    else {
        reply = 'Hmm, I don\'t quite understand that yet. But I am always learning! 🧠 Try saying "hi" or asking "what can you do".';
    }

    res.json({ reply });
});

try {
    bot.start((ctx) => {
        ctx.reply('Welcome to Anmosh\'s Algobot! 🚀 What would you like to know?', 
            Markup.inlineKeyboard([
                [Markup.button.callback('Who are you? 🤖', 'whoami'), Markup.button.callback('Get Code 💻', 'getcode')]
            ])
        );
    });

    // Handle inline button actions
    bot.action('whoami', (ctx) => {
        ctx.answerCbQuery();
        ctx.reply("I am Anmosh's awesome bot! I can chat, share algorithm code, and more.");
    });

    bot.action('getcode', (ctx) => {
        ctx.answerCbQuery();
        ctx.reply("Here are the algorithms I know! 🧠\nTry sending any of these commands:\n" +
            "🔍 /linearsearch\n" +
            "🔍 /binarysearch ⭐\n" +
            "🔄 /bubblesort\n" +
            "🔄 /selectionsort\n" +
            "🔄 /insertionsort\n" +
            "🔁 /factorial\n" +
            "🔁 /fibonacci\n" +
            "🔢 /gcd ⭐\n" +
            "🔢 /prime\n" +
            "🔤 /palindrome\n" +
            "🔤 /reverse"
        );
    });

    // Register algorithm commands dynamically
    for (const [algoName, code] of Object.entries(algorithms)) {
        bot.command(algoName, (ctx) => ctx.reply(code));
    }

    bot.on('sticker', (ctx) => ctx.reply('❤️ Wow, nice sticker!'));
    
    // Answering common questions and asking questions back
    bot.on('text', (ctx) => {
        console.log(ctx.message.text);
        const text = ctx.message.text.toLowerCase();
        
        if (text.includes('love you')){
            ctx.reply("I love you more! 💖");
        }
        else if (text.includes('how are you')) {
            ctx.reply("I'm running smoothly on a V8 engine, feeling great! ⚡ How about you?");
        }
        else if (text.includes('who are you') || text.includes('your name')) {
            ctx.reply("I'm Anmosh's Bot, your friendly neighborhood assistant! 🦸‍♂️");
        }
        else if (text.includes('hi') || text.includes('hello') || text.includes('hey')) {
            ctx.reply("Hey there! 👋 Have you had your coffee yet? ☕");
        }
        else if (text.includes('what can you do') || text.includes('help')) {
            ctx.reply("I can help you with cool algorithms (try /binarysearch), respond to your greetings, and keep you company. 🦾");
        }
        else {
            ctx.reply('Hmm, I don\'t quite understand that yet. But I am always learning! 🧠 Try saying "hi" or asking "what can you do".');
        }
    });

} catch(e) {
    console.log("Unexpected error:", e);
}

// Ensure Vercel exports the Express app
export default app;

