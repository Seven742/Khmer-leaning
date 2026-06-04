// ===================================================
// KHMER CODING BOT 🇰🇭
// JS: /js1-/js15 | jQuery: /jq1-/jq10
// React: /re1-/re6 | Express: /ex1-/ex8
// ===================================================

require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const {
  jsLessons, jsQuizzes,
  jqLessons, jqQuizzes,
  reLessons, reQuizzes,
  exLessons, exQuizzes,
} = require("./lessons");
const {
  markLessonComplete,
  recordQuizResult,
  getProgressSummary,
} = require("./progress");

const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) { console.error("❌ BOT_TOKEN missing in .env!"); process.exit(1); }

const bot = new Telegraf(TOKEN);

// ── Course registry ──────────────────────────────────
const COURSES = {
  js: { name: "JavaScript Basics", emoji: "🟡", lessons: jsLessons, quizzes: jsQuizzes },
  jq: { name: "jQuery", emoji: "🟢", lessons: jqLessons, quizzes: jqQuizzes },
  re: { name: "React-Express", emoji: "🔵", lessons: reLessons, quizzes: reQuizzes },
  ex: { name: "Express.js", emoji: "🟠", lessons: exLessons, quizzes: exQuizzes },
};

// ── Helpers ──────────────────────────────────────────
async function send(ctx, text, extra = {}) {
  try { await ctx.replyWithMarkdown(text, extra); }
  catch { await ctx.reply(text.replace(/[*_`[\]]/g, ""), extra); }
}

function lessonKey(prefix, num) {
  return `${prefix}_${num}`;
}

function navKeyboard(prefix, num) {
  const total = Object.keys(COURSES[prefix].lessons).length;
  const buttons = [];
  if (num > 1) buttons.push(Markup.button.callback("⬅️ មុន", `lesson_${prefix}_${num - 1}`));
  buttons.push(Markup.button.callback("📝 ប្រលង", `quiz_${prefix}_${num}`));
  if (num < total) buttons.push(Markup.button.callback("បន្ត ➡️", `lesson_${prefix}_${num + 1}`));
  return Markup.inlineKeyboard([buttons]);
}

function quizKeyboard(prefix, num) {
  const quiz = COURSES[prefix]?.quizzes[num];
  if (!quiz) return {};
  return Markup.inlineKeyboard(
    quiz.opts.map(opt => [
      Markup.button.callback(opt, `answer_${prefix}_${num}_${opt[0]}`),
    ])
  );
}

// ── Register lesson & quiz commands ─────────────────
for (const [prefix, course] of Object.entries(COURSES)) {
  const total = Object.keys(course.lessons).length;

  for (let i = 1; i <= total; i++) {
    // /js1 /jq3 /re2 /ex5 ...
    bot.command(`${prefix}${i}`, async (ctx) => {
      const lesson = course.lessons[i];
      if (!lesson) return ctx.reply("❌ មិនរកឃើញ!");
      markLessonComplete(ctx.from.id, lessonKey(prefix, i));
      await send(ctx, lesson.content, navKeyboard(prefix, i));
    });

    // /jsquiz1 /jqquiz3 /requiz2 /exquiz5 ...
    bot.command(`${prefix}quiz${i}`, async (ctx) => {
      const quiz = course.quizzes[i];
      if (!quiz) return ctx.reply("❌ Quiz មិនរកឃើញ!");
      await send(ctx,
        `📝 *${course.emoji} ${course.name} — Quiz មេរៀនទី ${i}*\n\n${quiz.q}`,
        quizKeyboard(prefix, i)
      );
    });
  }
}

// ═══════════════════════════════════════════════════
// /start
// ═══════════════════════════════════════════════════
bot.start(async (ctx) => {
  const name = ctx.from.first_name || "អ្នករៀន";
  await send(ctx,
    `🇰🇭 *សួស្ដី ${name}! ស្វាគមន៍!*

🎓 *Bot រៀន Coding ជាភាសាខ្មែរ!*
ពន្យល់ច្បាស់ — Code example គ្រប់ មេរៀន — Quiz + Certificate!

━━━━━━━━━━━━━━━━━━━━━━
📚 *Courses ៤:*

🟡 *JavaScript* (15 មេរៀន)
   /js1 រហូតដល់ /js15

🟢 *jQuery* (10 មេរៀន)
   /jq1 រហូតដល់ /jq10

🔵 *React-Express* (6 មេរៀន)
   /re1 រហូតដល់ /re6

🟠 *Express.js* (8 មេរៀន)
   /ex1 រហូតដល់ /ex8
━━━━━━━━━━━━━━━━━━━━━━

📋 /help | 📊 /progress | 📚 /courses`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🟡 ចាប់ផ្ដើម JavaScript", "lesson_js_1")],
      [Markup.button.callback("🟢 ចាប់ផ្ដើម jQuery", "lesson_jq_1")],
      [Markup.button.callback("🔵 ចាប់ផ្ដើម React-Express", "lesson_re_1")],
      [Markup.button.callback("🟠 ចាប់ផ្ដើម Express.js", "lesson_ex_1")],
      [Markup.button.callback("📊 ពិនិត្យ Progress", "check_progress")],
    ])
  );
});

// ═══════════════════════════════════════════════════
// /courses
// ═══════════════════════════════════════════════════
bot.command("courses", async (ctx) => {
  await send(ctx,
    `📚 *Courses ទាំងអស់:*

🟡 *JavaScript Basics* — 15 មេរៀន
/js1 /js2 /js3 /js4 /js5
/js6 /js7 /js8 /js9 /js10
/js11 /js12 /js13 /js14 /js15

🟢 *jQuery* — 10 មេរៀន
/jq1 /jq2 /jq3 /jq4 /jq5
/jq6 /jq7 /jq8 /jq9 /jq10

🔵 *React-Express* — 6 មេរៀន
/re1 /re2 /re3 /re4 /re5 /re6

🟠 *Express.js* — 8 មេរៀន
/ex1 /ex2 /ex3 /ex4
/ex5 /ex6 /ex7 /ex8

📝 *Quiz:*
/jsquiz1 ... /jsquiz15
/jqquiz1 ... /jqquiz10
/requiz1 ... /requiz6
/exquiz1 ... /exquiz8`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🟡 JS L1", "lesson_js_1"),
      Markup.button.callback("🟢 JQ L1", "lesson_jq_1")],
      [Markup.button.callback("🔵 RE L1", "lesson_re_1"),
      Markup.button.callback("🟠 EX L1", "lesson_ex_1")],
      [Markup.button.callback("📊 Progress", "check_progress")],
    ])
  );
});

// ═══════════════════════════════════════════════════
// /help
// ═══════════════════════════════════════════════════
bot.help(async (ctx) => {
  await send(ctx,
    `📋 *Commands ទាំងអស់:*

📚 *Lessons:*
🟡 /js1 – /js15
🟢 /jq1 – /jq10
🔵 /re1 – /re6
🟠 /ex1 – /ex8

📝 *Quizzes:*
/jsquiz1 – /jsquiz15
/jqquiz1 – /jqquiz10
/requiz1 – /requiz6
/exquiz1 – /exquiz8

📊 /progress — ពិនិត្យការរៀន
🏆 /certificate — ទទួល Certificate
📚 /courses — Courses ទាំងអស់
🔄 /start — ចាប់ផ្ដើមឡើងវិញ`
  );
});

// ═══════════════════════════════════════════════════
// /progress
// ═══════════════════════════════════════════════════
bot.command("progress", async (ctx) => showProgress(ctx));

async function showProgress(ctx) {
  const p = getProgressSummary(ctx.from.id);
  const name = ctx.from.first_name || "សិស្ស";

  const count = (pfx) =>
    p.completedLessons.filter(k => String(k).startsWith(pfx + "_")).length;

  const jsDone = count("js");
  const jqDone = count("jq");
  const reDone = count("re");
  const exDone = count("ex");

  const jsTotal = Object.keys(jsLessons).length;  // 15
  const jqTotal = Object.keys(jqLessons).length;  // 10
  const reTotal = Object.keys(reLessons).length;  // 6
  const exTotal = Object.keys(exLessons).length;  // 8
  const total = jsTotal + jqTotal + reTotal + exTotal; // 39

  const done = jsDone + jqDone + reDone + exDone;
  const pct = Math.round((done / total) * 100);
  const filled = Math.round(pct / 10);
  const bar = "█".repeat(filled) + "░".repeat(10 - filled);

  const acc = p.totalQuizzes > 0
    ? Math.round((p.correctAnswers / p.totalQuizzes) * 100) : 0;

  const jsBar = "▓".repeat(jsDone) + "░".repeat(jsTotal - jsDone);
  const jqBar = "▓".repeat(jqDone) + "░".repeat(jqTotal - jqDone);
  const reBar = "▓".repeat(reDone) + "░".repeat(reTotal - reDone);
  const exBar = "▓".repeat(exDone) + "░".repeat(exTotal - exDone);

  const nextJS = jsDone < jsTotal ? `👉 /js${jsDone + 1}` : "✅ ចប់";
  const nextJQ = jqDone < jqTotal ? `👉 /jq${jqDone + 1}` : "✅ ចប់";
  const nextRE = reDone < reTotal ? `👉 /re${reDone + 1}` : "✅ ចប់";
  const nextEX = exDone < exTotal ? `👉 /ex${exDone + 1}` : "✅ ចប់";

  await send(ctx,
    `📊 *Progress របស់ ${name}*

${bar} *${pct}%*
📚 ${done} / ${total} មេរៀន

━━━━━━━━━━━━━━━━━━━━
🟡 *JS*      ${jsBar} ${jsDone}/${jsTotal}  ${nextJS}
🟢 *jQuery*  ${jqBar} ${jqDone}/${jqTotal}  ${nextJQ}
🔵 *React*   ${reBar} ${reDone}/${reTotal}  ${nextRE}
🟠 *Express* ${exBar} ${exDone}/${exTotal}  ${nextEX}
━━━━━━━━━━━━━━━━━━━━

📝 Quiz: ${p.totalQuizzes} ដង | ✅ Accuracy: ${acc}%

${pct === 100 ? "🎊 *Courses ទាំងអស់ Complete!*\n👉 /certificate" : ""}`,
    Markup.inlineKeyboard([
      [Markup.button.callback("📚 Courses", "show_courses"),
      Markup.button.callback("🏆 Certificate", "get_certificate")],
    ])
  );
}

// ═══════════════════════════════════════════════════
// /certificate
// ═══════════════════════════════════════════════════
bot.command("certificate", async (ctx) => {
  const p = getProgressSummary(ctx.from.id);
  const name = ctx.from.first_name || "សិស្ស";

  const count = (pfx) =>
    p.completedLessons.filter(k => String(k).startsWith(pfx + "_")).length;

  const jsTotal = Object.keys(jsLessons).length;
  const jqTotal = Object.keys(jqLessons).length;
  const reTotal = Object.keys(reLessons).length;
  const exTotal = Object.keys(exLessons).length;

  const jsDone = count("js") >= jsTotal;
  const jqDone = count("jq") >= jqTotal;
  const reDone = count("re") >= reTotal;
  const exDone = count("ex") >= exTotal;

  if (!jsDone) {
    return send(ctx,
      `⚠️ *បញ្ចប់ JS Basics (15 មេរៀន) មុនសិន!*\n\nបានសិក្សា: ${count("js")}/${jsTotal}\n👉 /js${count("js") + 1} — ចូលរៀនបន្ត`
    );
  }

  const acc = p.totalQuizzes > 0
    ? Math.round((p.correctAnswers / p.totalQuizzes) * 100) : 0;

  const skills = [
    "Variables • Types • Operators",
    "Loops • Functions • Arrays • Objects",
    "DOM • Events • Async • Fetch • ES6",
    jqDone ? "jQuery • AJAX • Animation • Plugins" : "",
    reDone ? "React • REST API • Hooks • Axios" : "",
    exDone ? "Express • MongoDB • JWT • Security • Upload" : "",
  ].filter(Boolean).join("\n");

  await send(ctx,
    `🏆 *CERTIFICATE OF COMPLETION* 🏆

━━━━━━━━━━━━━━━━━━━━━
🎓 *${name}*
━━━━━━━━━━━━━━━━━━━━━

${jsDone ? "✅" : "⬜"} JavaScript Basics   (15 មេរៀន)
${jqDone ? "✅" : "⬜"} jQuery              (10 មេរៀន)
${reDone ? "✅" : "⬜"} React-Express        (6 មេរៀន)
${exDone ? "✅" : "⬜"} Express.js           (8 មេរៀន)

📝 Quiz Accuracy: *${acc}%*
📅 ${new Date().toLocaleDateString("km-KH")}

🌟 *ជំនាញដែលបានរៀន:*
${skills}

🚀 *ជំហានបន្ទាប់:*
${exDone
      ? "• TypeScript • Next.js • Docker\n• CI/CD • Deploy to Production"
      : jqDone
        ? "• Express.js Full → /ex1\n• MongoDB • JWT Auth"
        : "• jQuery → /jq1\n• React-Express → /re1"}

*ជោគជ័យចុះ! 🎊*`
  );
});

// ═══════════════════════════════════════════════════
// Inline callbacks
// ═══════════════════════════════════════════════════

// lesson_{prefix}_{num}
bot.action(/^lesson_([a-z]+)_(\d+)$/, async (ctx) => {
  const prefix = ctx.match[1];
  const num = parseInt(ctx.match[2]);
  const course = COURSES[prefix];
  if (!course) return ctx.answerCbQuery("❌ Course មិនមាន!");
  const lesson = course.lessons[num];
  if (!lesson) return ctx.answerCbQuery("❌ Lesson មិនមាន!");
  await ctx.answerCbQuery();
  markLessonComplete(ctx.from.id, lessonKey(prefix, num));
  await send(ctx, lesson.content, navKeyboard(prefix, num));
});

// quiz_{prefix}_{num}
bot.action(/^quiz_([a-z]+)_(\d+)$/, async (ctx) => {
  const prefix = ctx.match[1];
  const num = parseInt(ctx.match[2]);
  const course = COURSES[prefix];
  const quiz = course?.quizzes[num];
  if (!quiz) return ctx.answerCbQuery("❌ Quiz មិនមាន!");
  await ctx.answerCbQuery();
  await send(ctx,
    `📝 *${course.emoji} ${course.name} — Quiz មេរៀនទី ${num}*\n\n${quiz.q}`,
    quizKeyboard(prefix, num)
  );
});

// answer_{prefix}_{num}_{letter}
bot.action(/^answer_([a-z]+)_(\d+)_([A-D])$/, async (ctx) => {
  const prefix = ctx.match[1];
  const num = parseInt(ctx.match[2]);
  const answer = ctx.match[3];
  const course = COURSES[prefix];
  const quiz = course?.quizzes[num];
  if (!quiz) return ctx.answerCbQuery("❌");

  const isCorrect = answer === quiz.ans;
  recordQuizResult(ctx.from.id, `${prefix}${num}`, isCorrect);
  await ctx.answerCbQuery(isCorrect ? "✅ ត្រូវ!" : "❌ មិនត្រូវ!");

  const total = Object.keys(course.lessons).length;
  const nextNum = num < total ? num + 1 : null;
  const buttons = [];

  if (!isCorrect)
    buttons.push([Markup.button.callback("🔄 ព្យាយាមមើលទៀត", `quiz_${prefix}_${num}`)]);
  if (nextNum && isCorrect)
    buttons.push([Markup.button.callback(`▶️ Lesson ${nextNum}`, `lesson_${prefix}_${nextNum}`)]);
  buttons.push([Markup.button.callback("📊 Progress", "check_progress")]);

  await send(ctx, isCorrect ? quiz.ok : quiz.no, Markup.inlineKeyboard(buttons));
});

// progress button
bot.action("check_progress", async (ctx) => {
  await ctx.answerCbQuery();
  await showProgress(ctx);
});

// courses button
bot.action("show_courses", async (ctx) => {
  await ctx.answerCbQuery();
  await send(ctx,
    `📚 *Courses:*\n🟡 JS: /js1–/js15\n🟢 jQuery: /jq1–/jq10\n🔵 React: /re1–/re6\n🟠 Express: /ex1–/ex8`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🟡 JS L1", "lesson_js_1"),
      Markup.button.callback("🟢 JQ L1", "lesson_jq_1")],
      [Markup.button.callback("🔵 RE L1", "lesson_re_1"),
      Markup.button.callback("🟠 EX L1", "lesson_ex_1")],
    ])
  );
});

// certificate button
bot.action("get_certificate", async (ctx) => {
  await ctx.answerCbQuery();
  // Re-use certificate logic via fake command trigger
  const fakeCtx = {
    ...ctx,
    from: ctx.from,
    reply: ctx.reply.bind(ctx),
    replyWithMarkdown: ctx.replyWithMarkdown.bind(ctx),
  };
  // Manually call certificate handler
  bot.handleUpdate({
    update_id: ctx.update.update_id + 1,
    message: {
      message_id: 0,
      date: Date.now(),
      chat: ctx.callbackQuery.message.chat,
      from: ctx.from,
      text: "/certificate",
    },
  }).catch(() => { });
});

// ── Catch-all unknown text ───────────────────────────
bot.on("text", async (ctx) => {
  await send(ctx,
    `🤔 *មិនស្គាល់ command នេះ!*\n\nប្រើ /help ដើម្បីមើល commands\nឬ /courses ដើម្បីជ្រើស course`,
    Markup.inlineKeyboard([
      [Markup.button.callback("📚 Courses", "show_courses"),
      Markup.button.callback("📊 Progress", "check_progress")],
    ])
  );
});

// ═══════════════════════════════════════════════════
// Launch
// ═══════════════════════════════════════════════════
bot.launch({ allowedUpdates: ["message", "callback_query"] })
  .then(() => {
    console.log("🤖 ==========================================");
    console.log("🇰🇭  Khmer Coding Bot — RUNNING!");
    console.log("🤖 ==========================================");
    for (const [k, c] of Object.entries(COURSES)) {
      const ln = Object.keys(c.lessons).length;
      const qn = Object.keys(c.quizzes).length;
      console.log(`  ${c.emoji} ${k.toUpperCase().padEnd(3)} : ${ln} lessons, ${qn} quizzes`);
    }
    console.log("──────────────────────────────────────────");
    const total = Object.values(COURSES).reduce((s, c) => s + Object.keys(c.lessons).length, 0);
    console.log(`  Total: ${total} lessons`);
    console.log("✅ Ready!\n");
  })
  .catch(err => { console.error("❌ Launch failed:", err.message); process.exit(1); });

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));