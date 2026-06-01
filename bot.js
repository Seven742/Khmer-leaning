// ===================================================
// KHMER JAVASCRIPT + REACT-EXPRESS TEACHING BOT 🇰🇭
// Built with Telegraf for Telegram
// ===================================================

require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const { lessons, quizzes } = require("./lessons");
const {
  markLessonComplete,
  recordQuizResult,
  getProgressSummary,
} = require("./progress");

const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) {
  console.error("❌  BOT_TOKEN not found in .env file!");
  process.exit(1);
}

const bot = new Telegraf(TOKEN);

const JS_LESSONS = 10;  // Lessons 1–10  (JS Basics)
const REACT_LESSONS = 15;  // Lessons 11–15 (React-Express)
const TOTAL_LESSONS = REACT_LESSONS;

// ── Helper ──────────────────────────────────────────
async function sendMessage(ctx, text, extra = {}) {
  try {
    await ctx.replyWithMarkdown(text, extra);
  } catch {
    await ctx.reply(text.replace(/[*_`[\]]/g, ""), extra);
  }
}

// ── Navigation keyboard for each lesson ────────────
function lessonKeyboard(num) {
  const quizId = `quiz${num}` in quizzes ? `quiz${num}` : "quizFinal";
  const buttons = [];
  if (num > 1) buttons.push(Markup.button.callback("⬅️ មុន", `lesson_${num - 1}`));
  buttons.push(Markup.button.callback("📝 ប្រលង", `quiz_${quizId}`));
  if (num < TOTAL_LESSONS) buttons.push(Markup.button.callback("បន្ត ➡️", `lesson_${num + 1}`));
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
  await sendMessage(ctx,
    `🇰🇭 *សួស្តី ${name}! ស្វាគមន៍មកកាន់ Khmer Learning!*

🎓 *រៀន JavaScript + React-Express ជាភាសាខ្មែរ!*

📚 *Course ២ កម្រិត:*

🟡 *JS Basics (Lesson 1–10):*
Variables • Types • Loops • Functions • DOM

🔵 *React-Express (Lesson 11–15):*
React ↔ Express • HTTP • GET/POST • Errors

🚀 *ចាប់ផ្តើម:* /lesson1
📋 *Commands:* /help
📊 *Progress:* /progress`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🚀 ចាប់ផ្តើម JS Basics", "lesson_1")],
      [Markup.button.callback("🔵 React-Express Course", "lesson_11")],
      [Markup.button.callback("📊 ពិនិត្យ Progress", "check_progress")],
    ])
  );
});

// ═══════════════════════════════════════════════════
// /help
// ═══════════════════════════════════════════════════
bot.help(async (ctx) => {
  await sendMessage(ctx,
    `📋 *Commands ទាំងអស់:*

🟡 *JS Basics:*
/lesson1 – /lesson10

🔵 *React-Express:*
/lesson11 – /lesson15

📝 *Quizzes:*
/quiz1 – /quiz15
/quiz → ប្រលង JS Basics

📊 *ផ្សេងទៀត:*
/progress → ពិនិត្យការសិក្សា
/certificate → Certificate
/start → ចាប់ផ្តើមឡើងវិញ`
  );
});

// ═══════════════════════════════════════════════════
// /lesson{N} — 1 to 15
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
// /quiz{N} and /quiz
// ═══════════════════════════════════════════════════
for (let i = 1; i <= TOTAL_LESSONS; i++) {
  bot.command(`quiz${i}`, async (ctx) => sendQuiz(ctx, `quiz${i}`));
}
bot.command("quiz", async (ctx) => sendQuiz(ctx, "quizFinal"));

async function sendQuiz(ctx, quizId) {
  const quiz = quizzes[quizId];
  if (!quiz) return ctx.reply("❌ មិនរកឃើញប្រលង!");
  await sendMessage(ctx,
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

  const jsCount = p.completedLessons.filter(n => n <= JS_LESSONS).length;
  const reactCount = p.completedLessons.filter(n => n > JS_LESSONS).length;

  const doneStr = p.completedLessons.length > 0
    ? p.completedLessons.map(n => `✅ L${n}`).join(" ")
    : "⚠️ មិនទាន់សិក្សា";

  const nextLesson = p.done < TOTAL_LESSONS ? p.done + 1 : null;

  await sendMessage(ctx,
    `📊 *Progress របស់ ${name}:*

${p.bar} ${p.percent}%
📚 *${p.done}/${TOTAL_LESSONS}* មេរៀន

🟡 JS Basics: ${jsCount}/${JS_LESSONS}
🔵 React-Express: ${reactCount}/${REACT_LESSONS - JS_LESSONS}

${doneStr}

📝 ប្រលង: ${p.totalQuizzes} | ✅ ត្រូវ: ${p.accuracy}%

${p.percent === 100
      ? "🎊 *Course ទាំងមូល Complete!* វាយ /certificate!"
      : `👉 បន្ទាប់: /lesson${nextLesson}`}`,
    nextLesson
      ? Markup.inlineKeyboard([[Markup.button.callback(`▶️ Lesson ${nextLesson}`, `lesson_${nextLesson}`)]])
      : Markup.inlineKeyboard([[Markup.button.callback("🏆 Certificate", "get_certificate")]])
  );
}

// ═══════════════════════════════════════════════════
// /certificate
// ═══════════════════════════════════════════════════
bot.command("certificate", async (ctx) => {
  const p = getProgressSummary(ctx.from.id);
  const name = ctx.from.first_name || "សិស្ស";

  if (p.done < JS_LESSONS) {
    return sendMessage(ctx,
      `⚠️ *បញ្ចប់ JS Basics មុន!*\nបាន: ${p.done}/${JS_LESSONS}\n👉 /lesson${p.done + 1}`
    );
  }

  const hasReact = p.done >= TOTAL_LESSONS;

  await sendMessage(ctx,
    `🏆 *Certificate of Completion* 🏆

━━━━━━━━━━━━━━━━━━━━
🎓 *${name}*
━━━━━━━━━━━━━━━━━━━━

✅ *JavaScript Basics* (10 មេរៀន)${hasReact ? "\n✅ *React ↔ Express* (5 មេរៀន)" : ""}

📝 ប្រលង Accuracy: ${p.accuracy}%
📅 ${new Date().toLocaleDateString("km-KH")}

🌟 *ជំនាញ:*
Variables • Types • Loops • Functions
Arrays • Objects • DOM${hasReact ? "\nReact • Express • HTTP • API • Errors" : ""}

🚀 *ជំហានបន្ទាប់:*${hasReact ? "\n• Node.js Advanced\n• MongoDB\n• Full-Stack Project" : "\n• React.js → /lesson11\n• Node.js\n• Full-Stack"}

*ជោគជ័យចុះ! 🎊*`
  );
});

// ═══════════════════════════════════════════════════
// Inline callbacks
// ═══════════════════════════════════════════════════
bot.action(/^lesson_(\d+)$/, async (ctx) => {
  const num = parseInt(ctx.match[1]);
  const lesson = lessons[num];
  if (!lesson) return ctx.answerCbQuery("❌ មិនរកឃើញ!");
  await ctx.answerCbQuery();
  markLessonComplete(ctx.from.id, num);
  await sendMessage(ctx, lesson.content, lessonKeyboard(num));
});

bot.action(/^quiz_(.+)$/, async (ctx) => {
  await ctx.answerCbQuery();
  await sendQuiz(ctx, ctx.match[1]);
});

bot.action(/^answer_(.+)_([A-D])$/, async (ctx) => {
  const quizId = ctx.match[1];
  const answer = ctx.match[2];
  const quiz = quizzes[quizId];
  if (!quiz) return ctx.answerCbQuery("❌ Error");

  const isCorrect = answer === quiz.correct;
  recordQuizResult(ctx.from.id, quizId, isCorrect);
  await ctx.answerCbQuery(isCorrect ? "✅ ត្រូវ!" : "❌ មិនត្រូវ!");

  const lessonNum = quizId === "quizFinal" ? JS_LESSONS
    : parseInt(quizId.replace("quiz", "")) || JS_LESSONS;
  const nextLesson = lessonNum < TOTAL_LESSONS ? lessonNum + 1 : null;

  const buttons = [];
  if (!isCorrect) buttons.push([Markup.button.callback("🔄 ព្យាយាមមើលទៀត", `quiz_${quizId}`)]);
  if (nextLesson && isCorrect) buttons.push([Markup.button.callback(`▶️ Lesson ${nextLesson}`, `lesson_${nextLesson}`)]);
  buttons.push([Markup.button.callback("📊 Progress", "check_progress")]);

  await sendMessage(ctx,
    isCorrect ? quiz.explanation : quiz.wrong,
    Markup.inlineKeyboard(buttons)
  );
});

bot.action("check_progress", async (ctx) => {
  await ctx.answerCbQuery();
  await showProgress(ctx);
});

bot.action("get_certificate", async (ctx) => {
  await ctx.answerCbQuery();
  await bot.handleUpdate({
    ...ctx.update,
    message: { ...ctx.callbackQuery.message, text: "/certificate" },
  });
});

// ═══════════════════════════════════════════════════
// Catch-all text
// ═══════════════════════════════════════════════════
bot.on("text", async (ctx) => {
  const text = ctx.message.text.trim();

  // Number shortcut 1–15
  const n = parseInt(text);
  if (!isNaN(n) && n >= 1 && n <= TOTAL_LESSONS) {
    const lesson = lessons[n];
    if (lesson) {
      markLessonComplete(ctx.from.id, n);
      return sendMessage(ctx, lesson.content, lessonKeyboard(n));
    }
  }

  await sendMessage(ctx,
    `🤔 ខ្ញុំមិនយល់ command នោះទេ!\nប្រើ /help ឬ /lesson1 ចាប់ផ្តើម!`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🚀 Lesson 1", "lesson_1"),
      Markup.button.callback("🔵 React L11", "lesson_11")],
    ])
  );
});

// ═══════════════════════════════════════════════════
// Launch
// ═══════════════════════════════════════════════════
bot.launch({ allowedUpdates: ["message", "callback_query"] }).then(() => {
  console.log("🤖 ===================================");
  console.log("🇰🇭  Khmer JS + React-Express Bot RUNNING!");
  console.log("🤖 ===================================");
  console.log(`📚 JS Basics:     Lessons 1–${JS_LESSONS}`);
  console.log(`🔵 React-Express: Lessons 11–${TOTAL_LESSONS}`);
  console.log(`📝 Total quizzes: ${Object.keys(quizzes).length}`);
  console.log("✅ Ready!\n");
}).catch((err) => {
  console.error("❌ Failed to launch:", err.message);
  process.exit(1);
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));