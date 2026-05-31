// ===================================================
// KHMER JAVASCRIPT TEACHING BOT 🇰🇭
// Built with Telegraf for Telegram
// ===================================================

require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const { lessons, quizzes } = require("./lessons");
const {
  getUser,
  markLessonComplete,
  recordQuizResult,
  getProgressSummary,
} = require("./progress");

// ── Validate token ──────────────────────────────────
const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) {
  console.error("❌  BOT_TOKEN not found in .env file!");
  console.error("    Create a .env file with: BOT_TOKEN=your_token_here");
  process.exit(1);
}

const bot = new Telegraf(TOKEN);
const TOTAL_LESSONS = Object.keys(lessons).length; // 10

// ── Helper: send long messages safely ──────────────
async function sendMessage(ctx, text, extra = {}) {
  try {
    await ctx.replyWithMarkdown(text, extra);
  } catch (e) {
    // fallback to plain text if Markdown fails
    await ctx.reply(text.replace(/[*_`]/g, ""), extra);
  }
}

// ── Inline keyboard for lesson navigation ──────────
function lessonKeyboard(lessonNum) {
  const buttons = [];
  if (lessonNum > 1) buttons.push(Markup.button.callback("⬅️ មុន", `lesson_${lessonNum - 1}`));
  buttons.push(Markup.button.callback("📝 ប្រលង", `quiz_${quizzes[`quiz${lessonNum}`] ? `quiz${lessonNum}` : "quizFinal"}`));
  if (lessonNum < TOTAL_LESSONS) buttons.push(Markup.button.callback("បន្ត ➡️", `lesson_${lessonNum + 1}`));
  return Markup.inlineKeyboard([buttons]);
}

// ── Quiz keyboard ───────────────────────────────────
function quizKeyboard(quizId) {
  const quiz = quizzes[quizId];
  if (!quiz) return {};
  return Markup.inlineKeyboard(
    quiz.options.map((opt) => [
      Markup.button.callback(opt, `answer_${quizId}_${opt[0]}`),
    ])
  );
}

// ═══════════════════════════════════════════════════
// /start
// ═══════════════════════════════════════════════════
bot.start(async (ctx) => {
  const name = ctx.from.first_name || "បន្ទុក";
  await sendMessage(
    ctx,
    `🇰🇭 *សួស្តី ${name}! ស្វាគមន៍មកកាន់ JS Bot!*

🎓 *ខ្ញុំនឹងបង្រៀន JavaScript ជាភាសាខ្មែរ!*

📚 *មេរៀន ១០ ជំហាន:*
• Variables & Data Types
• Operators & Conditions
• Loops & Functions
• Arrays & Objects
• DOM Manipulation

🚀 *ចាប់ផ្តើមមើលម៉េច:*
👉 វាយ /lesson1 ដើម្បីចាប់ផ្តើម!

📌 *Commands:*
/lesson1 ✦ /lesson2 ✦ ... ✦ /lesson10
/quiz ✦ /progress ✦ /help`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🚀 ចាប់ផ្តើម Lesson 1", "lesson_1")],
      [Markup.button.callback("📊 ពិនិត្យ Progress", "check_progress")],
    ])
  );
});

// ═══════════════════════════════════════════════════
// /help
// ═══════════════════════════════════════════════════
bot.help(async (ctx) => {
  await sendMessage(
    ctx,
    `📋 *Commands ទាំងអស់:*

📘 *មេរៀន:*
/lesson1 → Variables
/lesson2 → Data Types  
/lesson3 → Operators
/lesson4 → Conditionals
/lesson5 → Loops
/lesson6 → Functions
/lesson7 → Arrays
/lesson8 → Objects
/lesson9 → DOM Basics
/lesson10 → DOM Events

📝 *ប្រលង:*
/quiz1 ... /quiz9 → ប្រលងតាមមេរៀន
/quiz → ប្រលងចុងក្រោយ

📊 *ផ្សេងទៀត:*
/progress → ពិនិត្យការសិក្សា
/certificate → Certificate (បន្ទាប់ 10 មេរៀន)
/start → ចាប់ផ្តើមឡើងវិញ`
  );
});

// ═══════════════════════════════════════════════════
// /lesson{N} — Dynamic lesson handler
// ═══════════════════════════════════════════════════
for (let i = 1; i <= TOTAL_LESSONS; i++) {
  bot.command(`lesson${i}`, async (ctx) => {
    const lesson = lessons[i];
    if (!lesson) return ctx.reply("❌ មិនរកឃើញមេរៀន!");
    markLessonComplete(ctx.from.id, i);
    await sendMessage(ctx, lesson.content, lessonKeyboard(i));
  });
}

// ═══════════════════════════════════════════════════
// /quiz{N} — Per-lesson quiz
// ═══════════════════════════════════════════════════
for (let i = 1; i <= TOTAL_LESSONS; i++) {
  const quizId = i < TOTAL_LESSONS ? `quiz${i}` : "quizFinal";
  bot.command(`quiz${i}`, async (ctx) => sendQuiz(ctx, quizId));
}

// /quiz → final quiz
bot.command("quiz", async (ctx) => sendQuiz(ctx, "quizFinal"));

async function sendQuiz(ctx, quizId) {
  const quiz = quizzes[quizId];
  if (!quiz) return ctx.reply("❌ មិនរកឃើញប្រលង!");
  await sendMessage(
    ctx,
    `📝 *ប្រលង – ${quiz.lessonTitle}*\n\n${quiz.question}`,
    quizKeyboard(quizId)
  );
}

// ═══════════════════════════════════════════════════
// /progress
// ═══════════════════════════════════════════════════
bot.command("progress", async (ctx) => showProgress(ctx));

async function showProgress(ctx) {
  const p = getProgressSummary(ctx.from.id);
  const name = ctx.from.first_name || "សិស្ស";

  let completedStr =
    p.completedLessons.length > 0
      ? p.completedLessons.map((n) => `✅ Lesson ${n}`).join(" | ")
      : "⚠️ មិនទាន់សិក្សាមេរៀនណាមួយ";

  await sendMessage(
    ctx,
    `📊 *Progress របស់ ${name}:*

${p.bar} ${p.percent}%
📚 មេរៀនបានសិក្សា: *${p.done}/${p.total}*

${completedStr}

📝 ចំនួនប្រលង: ${p.totalQuizzes}
✅ ឆ្លើយត្រូវ: ${p.correctAnswers} (${p.accuracy}%)

${p.percent === 100 ? "🎊 *អ្នកបញ្ចប់ Course ទាំងមូលហើយ!* វាយ /certificate!" : `👉 បន្ទាប់: /lesson${p.done + 1}`}`,
    Markup.inlineKeyboard([
      p.done < TOTAL_LESSONS
        ? [Markup.button.callback(`▶️ Lesson ${p.done + 1}`, `lesson_${p.done + 1}`)]
        : [Markup.button.callback("🏆 Certificate", "get_certificate")],
    ])
  );
}

// ═══════════════════════════════════════════════════
// /certificate
// ═══════════════════════════════════════════════════
bot.command("certificate", async (ctx) => {
  const p = getProgressSummary(ctx.from.id);
  const name = ctx.from.first_name || "សិស្ស";

  if (p.done < TOTAL_LESSONS) {
    return sendMessage(
      ctx,
      `⚠️ *អ្នកមិនទាន់បញ្ចប់ Course!*\n\nបានបញ្ចប់: ${p.done}/${p.total} មេរៀន\nត្រូវការ: ${TOTAL_LESSONS - p.done} មេរៀនទៀត\n\n👉 /lesson${p.done + 1}`
    );
  }

  await sendMessage(
    ctx,
    `🏆 *Certificate of Completion* 🏆

🎓 *${name}*

✅ បានបញ្ចប់ *JavaScript Basics*
    ក្នុងភាសាខ្មែរ 🇰🇭

📚 ១០ មេរៀន ✓
📝 ប្រលង: ${p.accuracy}% ត្រូវ

🌟 *ស្នាដៃ:*
Variables • Data Types • Operators
Conditionals • Loops • Functions
Arrays • Objects • DOM

📅 ${new Date().toLocaleDateString("km-KH")}

🚀 *ជំហានបន្ទាប់:*
• React.js
• Node.js  
• Full-Stack Development

ជោគជ័យចុះ!* 🎊`
  );
});

// ═══════════════════════════════════════════════════
// Inline button callbacks
// ═══════════════════════════════════════════════════

// lesson_{N} button
bot.action(/^lesson_(\d+)$/, async (ctx) => {
  const num = parseInt(ctx.match[1]);
  const lesson = lessons[num];
  if (!lesson) return ctx.answerCbQuery("❌ មិនរកឃើញ!");
  await ctx.answerCbQuery();
  markLessonComplete(ctx.from.id, num);
  await sendMessage(ctx, lesson.content, lessonKeyboard(num));
});

// quiz_{quizId} button
bot.action(/^quiz_(.+)$/, async (ctx) => {
  const quizId = ctx.match[1];
  await ctx.answerCbQuery();
  await sendQuiz(ctx, quizId);
});

// answer_{quizId}_{letter}
bot.action(/^answer_(.+)_([A-D])$/, async (ctx) => {
  const quizId = ctx.match[1];
  const answer = ctx.match[2];
  const quiz = quizzes[quizId];

  if (!quiz) return ctx.answerCbQuery("❌ Error");

  const isCorrect = answer === quiz.correct;
  recordQuizResult(ctx.from.id, quizId, isCorrect);

  await ctx.answerCbQuery(isCorrect ? "✅ ត្រូវ!" : "❌ មិនត្រូវ!");

  const responseText = isCorrect ? quiz.explanation : quiz.wrong;

  // Find lesson number for "next lesson" button
  const lessonNum = quizId === "quizFinal" ? 10 : parseInt(quizId.replace("quiz", ""));
  const nextLesson = lessonNum + 1;

  const buttons = [];
  if (!isCorrect) {
    buttons.push([Markup.button.callback("🔄 ព្យាយាមមើលទៀត", `quiz_${quizId}`)]);
  }
  if (nextLesson <= TOTAL_LESSONS && isCorrect) {
    buttons.push([Markup.button.callback(`▶️ Lesson ${nextLesson}`, `lesson_${nextLesson}`)]);
  }
  buttons.push([Markup.button.callback("📊 Progress", "check_progress")]);

  await sendMessage(ctx, responseText, Markup.inlineKeyboard(buttons));
});

// check_progress button
bot.action("check_progress", async (ctx) => {
  await ctx.answerCbQuery();
  await showProgress(ctx);
});

// get_certificate button
bot.action("get_certificate", async (ctx) => {
  await ctx.answerCbQuery();
  ctx.message = ctx.callbackQuery.message; // fake message context
  await bot.handleUpdate({
    ...ctx.update,
    message: { ...ctx.callbackQuery.message, text: "/certificate" },
  });
});

// ═══════════════════════════════════════════════════
// Catch-all for unknown messages
// ═══════════════════════════════════════════════════
bot.on("text", async (ctx) => {
  const text = ctx.message.text.toLowerCase().trim();

  // Handle number inputs (1-10 → lesson)
  const numMatch = text.match(/^(\d{1,2})$/);
  if (numMatch) {
    const n = parseInt(numMatch[1]);
    if (n >= 1 && n <= TOTAL_LESSONS) {
      const lesson = lessons[n];
      markLessonComplete(ctx.from.id, n);
      return sendMessage(ctx, lesson.content, lessonKeyboard(n));
    }
  }

  await sendMessage(
    ctx,
    `🤔 ខ្ញុំមិនយល់ command នោះទេ!\n\nប្រើ /help ដើម្បីមើល commands\nឬ /lesson1 ដើម្បីចាប់ផ្តើម!`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🚀 Lesson 1", "lesson_1"), Markup.button.callback("📋 Help", "show_help")],
    ])
  );
});

bot.action("show_help", async (ctx) => {
  await ctx.answerCbQuery();
  ctx.reply(
    "📋 Commands: /lesson1–/lesson10 | /quiz1–/quiz10 | /quiz | /progress | /certificate | /help"
  );
});

// ═══════════════════════════════════════════════════
// Launch bot
// ═══════════════════════════════════════════════════
bot.launch({
  allowedUpdates: ["message", "callback_query"],
}).then(() => {
  console.log("🤖 ===================================");
  console.log("🇰🇭  Khmer JavaScript Bot is RUNNING!");
  console.log("🤖 ===================================");
  console.log(`📚 Total lessons: ${TOTAL_LESSONS}`);
  console.log(`📝 Total quizzes: ${Object.keys(quizzes).length}`);
  console.log("✅ Bot started successfully!\n");
}).catch((err) => {
  console.error("❌ Failed to launch bot:", err.message);
  process.exit(1);
});

// Graceful shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
