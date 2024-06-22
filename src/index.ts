import { Telegraf } from 'telegraf'
import dotenv from 'dotenv';
dotenv.config();

const bot = new Telegraf(process.env.TG_TOKEN!)

bot.command('start', (ctx) => {
  ctx.reply( 'Привет', { reply_markup: {
    remove_keyboard: true,
    inline_keyboard: [
      [{
        text: 'Нажми меня', web_app: { url: 'https://dragondietapp.com'} 
      }]
    ]
  }});
});

bot.launch()

console.log('Bot started')