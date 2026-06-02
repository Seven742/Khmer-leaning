# 🇰🇭 Khmer JavaScript Teaching Bot

**បង្រៀន JavaScript + React-Express + jQuery ជាភាសាខ្មែរ!**
A Telegram bot that teaches JavaScript, React-Express, and jQuery to Khmer-speaking beginners — step by step, with quizzes, progress tracking, and certificates.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📚 22 Lessons | JS Basics → React-Express → jQuery |
| 📝 23 Quizzes | One per lesson + final exam (harder difficulty) |
| 📊 Progress Tracking | Per-user lesson & quiz scores (saved to JSON) |
| 🏆 Certificate | Awarded after completing each course milestone |
| 🎮 Inline Buttons | Navigate with tappable buttons |
| 🇰🇭 Full Khmer | All explanations in Khmer language |

---

## 📚 Lessons

### 🟡 JS Basics (Lesson 1–10)

| # | Topic | Command |
|---|---|---|
| 1 | What is JavaScript? | `/lesson1` |
| 2 | Variables (var/let/const) | `/lesson2` |
| 3 | Data Types | `/lesson3` |
| 4 | Operators | `/lesson4` |
| 5 | Conditionals (if/else/switch) | `/lesson5` |
| 6 | Loops (for/while/for...of) | `/lesson6` |
| 7 | Functions & Arrow Functions | `/lesson7` |
| 8 | Arrays | `/lesson8` |
| 9 | Objects | `/lesson9` |
| 10 | DOM Manipulation & Events | `/lesson10` |

### 🔵 React ↔ Express (Lesson 11–15)

| # | Topic | Command |
|---|---|---|
| 11 | React & Express Overview + CORS | `/lesson11` |
| 12 | HTTP Methods (GET/POST/PUT/DELETE) | `/lesson12` |
| 13 | GET Request (useEffect + fetch) | `/lesson13` |
| 14 | POST Request (form submit) | `/lesson14` |
| 15 | Error Handling (try/catch + middleware) | `/lesson15` |

### 🟢 jQuery (Lesson 16–22)

| # | Topic | Command |
|---|---|---|
| 16 | jQuery Intro, `$`, CDN Setup | `/lesson16` |
| 17 | Selectors, DOM, CSS, Chaining | `/lesson17` |
| 18 | Events (click, hover, keyup, form) | `/lesson18` |
| 19 | Effects & Animation (fade, slide, animate) | `/lesson19` |
| 20 | AJAX (`$.ajax`, `$.get`, `$.post`) | `/lesson20` |
| 21 | DOM Advanced (append, traverse, filter) | `/lesson21` |
| 22 | Plugins & Best Practices | `/lesson22` |

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
# Unzip / enter the project folder
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
🇰🇭  Khmer JS + React + jQuery Bot RUNNING!
🤖 ===================================
📚 JS Basics:     Lessons 1–10
🔵 React-Express: Lessons 11–15
🟢 jQuery:        Lessons 16–22
📝 Total quizzes: 23
✅ Ready!
```

---

## 💬 Commands Reference

| Command | Description |
|---|---|
| `/start` | Welcome message + quick start buttons |
| `/help` | Full command list |
| `/lesson1` – `/lesson22` | Load individual lessons |
| `/quiz1` – `/quiz22` | Quiz for each lesson |
| `/quiz` | Final JS Basics quiz |
| `/progress` | View your learning progress (all 3 courses) |
| `/certificate` | Get your completion certificate |

**Shortcut:** Type just a number (1–22) to jump to that lesson!

---

## 🗂️ Project Structure

```
khmer-js-bot/
├── src/
│   ├── bot.js          ← Main bot logic (commands, handlers)
│   ├── lessons.js      ← All 22 lessons + 23 quizzes in Khmer
│   └── progress.js     ← User progress tracker
├── data/
│   └── progress.json   ← Auto-created, stores user progress
├── .env.example        ← Template for environment variables
├── .gitignore
├── package.json
└── README.md
```

---

## ☁️ Deploy to a Server (Keep Running 24/7)

### Using PM2 (recommended for your own PC/VPS)
```bash
npm install -g pm2
pm2 start src/bot.js --name khmer-js-bot
pm2 save
pm2 startup
```

Useful PM2 commands:
```bash
pm2 status                    # check if running
pm2 logs khmer-js-bot         # view logs
pm2 restart khmer-js-bot      # restart
pm2 stop khmer-js-bot         # stop
```

### Using Railway / Render (Free cloud — runs even when PC is off)
1. Push your code to GitHub
2. Go to [railway.app](https://railway.app) or [render.com](https://render.com)
3. Connect your GitHub repo
4. Set **Start Command:** `node src/bot.js`
5. Add environment variable: `BOT_TOKEN` = your token
6. Deploy ✅

---

## 🛠️ Customization

- **Add more lessons:** Edit `src/lessons.js` → add entries to the `lessons` object
- **Add more quizzes:** Edit `src/lessons.js` → add entries to the `quizzes` object
- **Change language:** All content is in `src/lessons.js` — easy to localize
- **Adjust difficulty:** Edit quiz `options` and `question` fields in `src/lessons.js`

---

## 📄 License

MIT — Free to use, modify, and distribute.

---

*Made with ❤️ for Khmer learners*