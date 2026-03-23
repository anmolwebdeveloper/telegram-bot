import { Telegraf } from 'telegraf';
import 'dotenv/config';
const bot  = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
const binarySearch = function search(arr,x){
    let lo= 0, hi = arr.length-1;
    while(lo<=hi){
        let mid = lo+Math.floor((hi-lo)/2);
        if(arr[mid]==x) return mid;
        else if(arr[mid]<x) lo = mid+1;
        else hi = mid-1;
    }
    return undefined;
} 
`;

try{
    bot.start((ctx) => ctx.reply('Welcome to Anmosh \'s Bot'));
    bot.command('binarysearch',(ctx)=>ctx.reply(binarySearchString));
    bot.on('sticker',(ctx)=>ctx.reply('❤️'));
    bot.launch();
    bot.on('text',(ctx)=>{
        console.log(ctx.update.message);
        if(ctx.update.message.text=='I love you'){
            ctx.reply("I love you more");
        }
        else ctx.reply('i don\'t understand you');
    });
} catch{
    console.log("Unexpected command");
}

