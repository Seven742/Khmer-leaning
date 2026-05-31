# 🇰🇭 Khmer JavaScript Teaching Bot

**បង្រៀន JavaScript ជាភាសាខ្មែរ!**
A Telegram bot that teaches JavaScript to Khmer-speaking beginners — step by step, with quizzes and progress tracking.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📚 10 Lessons | Variables → DOM Events |
| 📝 10 Quizzes | One quiz per lesson + final exam |
| 📊 Progress Tracking | Per-user lesson & quiz scores (saved to JSON) |
| 🏆 Certificate | Awarded after completing all 10 lessons |
| 🎮 Inline Buttons | Navigate with tappable buttons |
| 🇰🇭 Full Khmer | All explanations in Khmer language |

---

## 📚 Lessons

| # | Topic | Command |
|---|---|---|
| 1 | What is JavaScript? | `/lesson1` |
| 2 | Variables (var/let/const) | `/lesson2` |
| 3 | Data Types | `/lesson3` |
| 4 | Operators | `/lesson4` |
| 5 | Conditionals (if/else) | `/lesson5` |
| 6 | Loops | `/lesson6` |
| 7 | Functions | `/lesson7` |
| 8 | Arrays | `/lesson8` |
| 9 | Objects | `/lesson9` |
| 10 | DOM Manipulation | `/lesson10` |

---

## 🚀 Setup & Installation

### Prerequisites
- Node.js 18+
- A Telegram account
- BotFather token

### Step 1 – Get a Bot Token

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`
3. Choose a name (e.g. `KhmerJSBot`)
4. Choose a username ending in `bot` (e.g. `khmerjs_bot`)
5. Copy the token BotFather gives you

### Step 2 – Install & Configure

```bash
# Clone or unzip the project
cd khmer-js-bot

# Install dependencies
npm install

# Create your .env file
cp .env.example .env

# Edit .env and paste your token
nano .env   # or use any text editor
```

Your `.env` file should look like:
```
BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrSTUvwxYZ
```

### Step 3 – Run the Bot

```bash
# Production
npm start

# Development (auto-restart on file changes)
npm run dev
```

You should see:
```
🤖 ===================================
🇰🇭  Khmer JavaScript Bot is RUNNING!
🤖 ===================================
📚 Total lessons: 10
📝 Total quizzes: 10
✅ Bot started successfully!
```

---

## 💬 Commands Reference

| Command | Description |
|---|---|
| `/start` | Welcome message + quick start buttons |
| `/help` | Full command list |
| `/lesson1` – `/lesson10` | Load individual lessons |
| `/quiz1` – `/quiz10` | Quiz for each lesson |
| `/quiz` | Final quiz |
| `/progress` | View your learning progress |
| `/certificate` | Get your completion certificate |

**Shortcut:** Type just a number (1–10) to jump to that lesson!

---

## 🗂️ Project Structure

```
khmer-js-bot/
├── src/
│   ├── bot.js          ← Main bot logic (commands, handlers)
│   ├── lessons.js      ← All 10 lessons + 10 quizzes in Khmer
│   └── progress.js     ← User progress tracker
├── data/
│   └── progress.json   ← Auto-created, stores user progress
├── .env.example        ← Template for environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## ☁️ Deploy to a Server (Optional)

To keep the bot running 24/7, deploy to a VPS or cloud service.

### Using PM2 (recommended)
```bash
npm install -g pm2
pm2 start src/bot.js --name khmer-js-bot
pm2 save
pm2 startup
```

### Using Railway / Render / Fly.io
1. Push to GitHub
2. Connect your repo to Railway/Render
3. Add `BOT_TOKEN` as an environment variable
4. Deploy!

---

## 🛠️ Customization

- **Add more lessons:** Edit `src/lessons.js` — add entries to the `lessons` object
- **Add more quizzes:** Edit `src/lessons.js` — add entries to the `quizzes` object
- **Change language:** All content is in `src/lessons.js` — easy to localize

---

## 📄 License

MIT — Free to use, modify, and distribute.

---

*Made with ❤️ for Khmer learners*
