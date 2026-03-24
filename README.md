# Algobot 🚀

An AI-powered Data Structures & Algorithms companion built with Telegraf, Express, and Node.js. Chat with Algobot on Telegram or directly in your browser.

## 🌟 Features
- **Data Structures and Algorithms Chatbot:** Request implementations of various search, sort, math, and string algorithms in JavaScript.
- **Natural Language Parsing:** Basic conversational NLP allows you to ask the bot things like "hi," "hello," or "how are you?".
- **Dual Interface:** 
  - Works natively as a [Telegram Bot](https://t.me/AnmoshAlgoBot).
  - Web UI for browser-based chatting.
- **Serverless Architecture:** Configured for seamless deployment on Vercel.

## 🛠️ Tech Stack Found
- **Backend:** Node.js, Express.js
- **Bot Framework:** Telegraf (Telegram Bot Wrapper)
- **Frontend UI:** HTML, CSS, JavaScript (Fetch API for dynamic web chatting)
- **Deployment & Hosting:** Vercel (using serverless functions via `vercel.json`)

## 📂 Project Structure & Functioning
- `index.js`: The heart of the bot! Handles the routing. Serves as our Express API providing the `/api/webhook` which receives updates from Telegram servers, and handles `/api/webchat` for the browser chat interaction.
- `algorithms.js`: Contains a collection of DSA string blocks (like binarySearch, bubbleSort, etc.) which are dynamically loaded for both inline keyboards and conversational outputs.
- `public/index.html`: The frontend GUI! Provides an attractive chat window to query algorithms directly from your browser without using a Telegram app.
- `vercel.json`: Handles the serverless routing, ensuring `api/*` actions are driven to our node server logic while handling static assets smoothly.

## 👤 Author 
Created by [Anmol Sharma](https://anmolsharma-one.vercel.app/)