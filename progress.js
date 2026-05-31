// ===================================================
// USER PROGRESS TRACKER (In-memory with JSON backup)
// ===================================================

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/progress.json");

// Ensure data directory exists
function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "{}");
}

function loadData() {
  try {
    ensureDataDir();
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveData(data) {
  try {
    ensureDataDir();
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error("Failed to save progress:", e.message);
  }
}

function getUser(userId) {
  const data = loadData();
  if (!data[userId]) {
    data[userId] = {
      currentLesson: 0,
      completedLessons: [],
      quizScores: {},
      totalQuizzes: 0,
      correctAnswers: 0,
      joinedAt: new Date().toISOString(),
    };
    saveData(data);
  }
  return data[userId];
}

function updateUser(userId, updates) {
  const data = loadData();
  data[userId] = { ...getUser(userId), ...updates };
  saveData(data);
  return data[userId];
}

function markLessonComplete(userId, lessonNum) {
  const user = getUser(userId);
  if (!user.completedLessons.includes(lessonNum)) {
    user.completedLessons.push(lessonNum);
    user.completedLessons.sort((a, b) => a - b);
  }
  user.currentLesson = Math.max(user.currentLesson, lessonNum);
  updateUser(userId, user);
}

function recordQuizResult(userId, quizId, isCorrect) {
  const user = getUser(userId);
  user.quizScores[quizId] = isCorrect;
  user.totalQuizzes = (user.totalQuizzes || 0) + 1;
  user.correctAnswers = (user.correctAnswers || 0) + (isCorrect ? 1 : 0);
  updateUser(userId, user);
}

function getProgressSummary(userId) {
  const user = getUser(userId);
  const total = 10;
  const done = user.completedLessons.length;
  const percent = Math.round((done / total) * 100);
  const barFilled = Math.round(percent / 10);
  const bar = "█".repeat(barFilled) + "░".repeat(10 - barFilled);
  const accuracy =
    user.totalQuizzes > 0
      ? Math.round((user.correctAnswers / user.totalQuizzes) * 100)
      : 0;

  return {
    done,
    total,
    percent,
    bar,
    accuracy,
    totalQuizzes: user.totalQuizzes || 0,
    correctAnswers: user.correctAnswers || 0,
    completedLessons: user.completedLessons,
  };
}

module.exports = {
  getUser,
  updateUser,
  markLessonComplete,
  recordQuizResult,
  getProgressSummary,
};
