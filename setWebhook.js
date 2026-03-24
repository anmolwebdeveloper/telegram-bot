import { Telegraf } from 'telegraf';
import 'dotenv/config';

const bot = new Telegraf(process.env.BOT_TOKEN);

// Remember to change this URL to your actual Vercel app URL!
const webhookUrl = "https://your-domain.vercel.app/api/webhook";

bot.telegram.setWebhook(webhookUrl)
    .then(() => {
        console.log(`✅ Webhook set successfully to: ${webhookUrl}`);
        process.exit(0);
    })
    .catch((err) => {
        console.error("❌ Failed to set webhook:", err);
        process.exit(1);
    });
