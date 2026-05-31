// ===================================================
// ALL JAVASCRIPT LESSONS IN KHMER LANGUAGE
// ===================================================

const lessons = {
  1: {
    title: "មេរៀនទី ១ – JavaScript គឺជាអ្វី?",
    content: `
📘 *មេរៀនទី ១ – JavaScript គឺជាអ្វី?*

JavaScript គឺជាភាសាកម្មវិធី (programming language) ដែលប្រើក្នុងការបង្កើតគេហទំព័រ (website) ឱ្យមានភាពស្វ័យប្រវត្តិ និងមានសកម្មភាព។

🌐 *ប្រើប្រាស់ JavaScript ដើម្បី:*
• ធ្វើឱ្យប៊ូតុងអាចចុចបាន
• បង្ហាញ/លាក់ elements
• ពិនិត្យទម្រង់ (form validation)
• ទាញទិន្នន័យពី server

💻 *កូដឧទាហរណ៍:*
\`\`\`javascript
// បោះពុម្ពនៅក្នុង console
console.log("សួស្តី! ខ្ញុំឈ្មោះ JavaScript!");

// បង្ហាញ popup
alert("JavaScript ដំណើរការហើយ! 🎉");
\`\`\`

✅ *សង្ខេប:*
JavaScript = ភាសាកម្មវិធីសម្រាប់ Web

👉 វាយ /lesson2 ដើម្បីបន្ត ឬ /quiz1 ដើម្បីប្រលង
    `,
    quiz: "quiz1",
  },

  2: {
    title: "មេរៀនទី ២ – Variables (អញ្ញាត)",
    content: `
📘 *មេរៀនទី ២ – Variables (អញ្ញាត)*

Variable គឺជា "ប្រអប់" សម្រាប់រក្សាទុកទិន្នន័យ។

📦 *មាន ៣ ប្រភេទ:*
• \`var\` – ចាស់ (ជៀសវាងប្រើ)
• \`let\` – អាចប្តូរតម្លៃបាន ✅
• \`const\` – មិនអាចប្តូរតម្លៃបាន 🔒

💻 *កូដឧទាហរណ៍:*
\`\`\`javascript
let name = "សុខា";       // អត្ថបទ
let age = 20;            // លេខ
const country = "ខ្មែរ"; // មិនអាចប្តូរ

console.log(name);   // សុខា
console.log(age);    // 20

age = 21;            // ✅ ប្តូរបាន
// country = "ថៃ";  // ❌ Error!
\`\`\`

✅ *ច្បាប់ដាក់ឈ្មោះ:*
• ចាប់ផ្តើមដោយអក្សរ ឬ _
• គ្មាន space
• Case sensitive (name ≠ Name)

👉 វាយ /lesson3 ដើម្បីបន្ត ឬ /quiz2 ដើម្បីប្រលង
    `,
    quiz: "quiz2",
  },

  3: {
    title: "មេរៀនទី ៣ – Data Types (ប្រភេទទិន្នន័យ)",
    content: `
📘 *មេរៀនទី ៣ – Data Types*

JavaScript មានប្រភេទទិន្នន័យ ៦ ចំបង:

🔢 *Number* – លេខ
\`\`\`javascript
let score = 100;
let price = 9.99;
\`\`\`

🔤 *String* – អត្ថបទ (ប្រើ " " ឬ ' ')
\`\`\`javascript
let name = "ចន្ទ";
let city = 'ភ្នំពេញ';
\`\`\`

✅ *Boolean* – true / false
\`\`\`javascript
let isStudent = true;
let isPassed = false;
\`\`\`

🚫 *Null & Undefined*
\`\`\`javascript
let x = null;      // ទទេដោយចេតនា
let y;             // undefined (មិនទាន់ដាក់តម្លៃ)
\`\`\`

🔍 *ពិនិត្យប្រភេទ:*
\`\`\`javascript
console.log(typeof 42);       // "number"
console.log(typeof "hello");  // "string"
console.log(typeof true);     // "boolean"
\`\`\`

👉 វាយ /lesson4 ដើម្បីបន្ត ឬ /quiz3 ដើម្បីប្រលង
    `,
    quiz: "quiz3",
  },

  4: {
    title: "មេរៀនទី ៤ – Operators (ប្រមាណវិធី)",
    content: `
📘 *មេរៀនទី ៤ – Operators*

➕ *Arithmetic (គណនា):*
\`\`\`javascript
let a = 10, b = 3;
console.log(a + b);  // 13  ➕ បូក
console.log(a - b);  // 7   ➖ ដក
console.log(a * b);  // 30  ✖️ គុណ
console.log(a / b);  // 3.3 ➗ ចែក
console.log(a % b);  // 1   🔄 នៅសល់
\`\`\`

⚖️ *Comparison (ប្រៀបធៀប):*
\`\`\`javascript
console.log(5 == "5");   // true  (តម្លៃស្មើ)
console.log(5 === "5");  // false (ស្មើទាំងប្រភេទ)
console.log(10 > 5);     // true
console.log(3 <= 3);     // true
\`\`\`

🔗 *Logical (តក្កវិជ្ជា):*
\`\`\`javascript
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)
\`\`\`

💡 *គន្លឹះ:* ប្រើ \`===\` ជាមួយ \`==\` ជានិច្ច!

👉 វាយ /lesson5 ដើម្បីបន្ត ឬ /quiz4 ដើម្បីប្រលង
    `,
    quiz: "quiz4",
  },

  5: {
    title: "មេរៀនទី ៥ – Conditionals (លក្ខខណ្ឌ)",
    content: `
📘 *មេរៀនទី ៥ – Conditionals (if/else)*

ប្រើ if/else ដើម្បីធ្វើការសម្រេចចិត្ត។

💻 *if / else if / else:*
\`\`\`javascript
let score = 75;

if (score >= 80) {
  console.log("ពិសេស! 🌟");
} else if (score >= 60) {
  console.log("ជាប់! ✅");
} else {
  console.log("គ្រោះថ្នាក់! ❌");
}
// លទ្ធផល: "ជាប់! ✅"
\`\`\`

🔀 *Ternary Operator (សង្ខេប):*
\`\`\`javascript
let age = 20;
let status = age >= 18 ? "មនុស្សពេញវ័យ" : "ក្មេង";
console.log(status); // "មនុស្សពេញវ័យ"
\`\`\`

🎯 *Switch:*
\`\`\`javascript
let day = "ចន្ទ";
switch(day) {
  case "ចន្ទ":
    console.log("ថ្ងៃធ្វើការ 💼"); break;
  case "សៅរ៍":
    console.log("ថ្ងៃឈប់សម្រាក 🎉"); break;
  default:
    console.log("ថ្ងៃធម្មតា");
}
\`\`\`

👉 វាយ /lesson6 ដើម្បីបន្ត ឬ /quiz5 ដើម្បីប្រលង
    `,
    quiz: "quiz5",
  },

  6: {
    title: "មេរៀនទី ៦ – Loops (រង្វិល)",
    content: `
📘 *មេរៀនទី ៦ – Loops (រង្វិលជុំ)*

Loops ប្រើដើម្បីដំណើរការកូដម្តងហើយម្តងទៀត។

🔄 *for loop:*
\`\`\`javascript
for (let i = 1; i <= 5; i++) {
  console.log("លើកទី " + i);
}
// លើកទី 1, លើកទី 2 ... លើកទី 5
\`\`\`

🔁 *while loop:*
\`\`\`javascript
let count = 0;
while (count < 3) {
  console.log("count = " + count);
  count++;
}
// count = 0, count = 1, count = 2
\`\`\`

📋 *for...of (loop array):*
\`\`\`javascript
let fruits = ["ស្វាយ", "ក្លែ", "ទទឹម"];
for (let fruit of fruits) {
  console.log(fruit);
}
// ស្វាយ, ក្លែ, ទទឹម
\`\`\`

⚠️ *ប្រយ័ត្ន Infinite Loop!*
\`\`\`javascript
// ❌ ហាមប្រើ! Browser នឹង Crash
while (true) {
  console.log(" គ្មានទីបញ្ចប់!");
}
\`\`\`

👉 វាយ /lesson7 ដើម្បីបន្ត ឬ /quiz6 ដើម្បីប្រលង
    `,
    quiz: "quiz6",
  },

  7: {
    title: "មេរៀនទី ៧ – Functions (អនុគមន៍)",
    content: `
📘 *មេរៀនទី ៧ – Functions*

Function គឺជា "រូបមន្ត" ដែលអាចប្រើម្តងហើយម្តងទៀត។

💻 *Function ធម្មតា:*
\`\`\`javascript
function greet(name) {
  return "សួស្តី " + name + "! 👋";
}

console.log(greet("សុខា"));  // សួស្តី សុខា! 👋
console.log(greet("ដារា"));  // សួស្តី ដារា! 👋
\`\`\`

➡️ *Arrow Function (សង្ខេប):*
\`\`\`javascript
const add = (a, b) => a + b;
console.log(add(5, 3));  // 8

const square = n => n * n;
console.log(square(4));  // 16
\`\`\`

🎯 *Default Parameters:*
\`\`\`javascript
function welcome(name = "អ្នកប្រើ") {
  console.log("ស្វាគមន៍ " + name);
}
welcome("ចន្ទ");  // ស្វាគមន៍ ចន្ទ
welcome();        // ស្វាគមន៍ អ្នកប្រើ
\`\`\`

✅ *គន្លឹះ:* Function ល្អ = ធ្វើតែ ១ ការ!

👉 វាយ /lesson8 ដើម្បីបន្ត ឬ /quiz7 ដើម្បីប្រលង
    `,
    quiz: "quiz7",
  },

  8: {
    title: "មេរៀនទី ៨ – Arrays (អារេ)",
    content: `
📘 *មេរៀនទី ៨ – Arrays*

Array គឺជា "បញ្ជី" ដើម្បីរក្សាទុកទិន្នន័យច្រើន។

💻 *បង្កើត Array:*
\`\`\`javascript
let students = ["សុខា", "ដារា", "ចន្ទ"];
let numbers = [1, 2, 3, 4, 5];

console.log(students[0]);  // សុខា (ចាប់ពី 0)
console.log(students[2]);  // ចន្ទ
\`\`\`

🛠️ *Methods សំខាន់ៗ:*
\`\`\`javascript
let arr = ["a", "b", "c"];

arr.push("d");      // បន្ថែមចុងក្រោយ → ["a","b","c","d"]
arr.pop();          // លុបចុងក្រោយ → ["a","b","c"]
arr.unshift("z");   // បន្ថែមមុខ → ["z","a","b","c"]
arr.shift();        // លុបមុខ → ["a","b","c"]

console.log(arr.length);  // 3 (ចំនួន)
\`\`\`

🔄 *Loop Array:*
\`\`\`javascript
let scores = [85, 92, 78, 95];
scores.forEach(s => console.log(s));

// filter + map
let passed = scores.filter(s => s >= 80);
console.log(passed);  // [85, 92, 95]
\`\`\`

👉 វាយ /lesson9 ដើម្បីបន្ត ឬ /quiz8 ដើម្បីប្រលង
    `,
    quiz: "quiz8",
  },

  9: {
    title: "មេរៀនទី ៩ – Objects (វត្ថុ)",
    content: `
📘 *មេរៀនទី ៩ – Objects*

Object ប្រើដើម្បីរក្សាទុកទិន្នន័យជាក្រុម (key: value)។

💻 *បង្កើត Object:*
\`\`\`javascript
let person = {
  name: "សុខា",
  age: 22,
  city: "ភ្នំពេញ",
  isStudent: true
};

console.log(person.name);     // សុខា
console.log(person["age"]);   // 22
\`\`\`

✏️ *កែប្រែ & បន្ថែម:*
\`\`\`javascript
person.age = 23;           // កែប្រែ
person.email = "s@mail.com"; // បន្ថែម

delete person.isStudent;   // លុប
\`\`\`

🔧 *Object with Methods:*
\`\`\`javascript
let car = {
  brand: "Toyota",
  speed: 0,
  accelerate() {
    this.speed += 10;
    console.log("ល្បឿន: " + this.speed);
  }
};

car.accelerate();  // ល្បឿន: 10
car.accelerate();  // ល្បឿន: 20
\`\`\`

👉 វាយ /lesson10 ដើម្បីបន្ត ឬ /quiz9 ដើម្បីប្រលង
    `,
    quiz: "quiz9",
  },

  10: {
    title: "មេរៀនទី ១០ – DOM Manipulation",
    content: `
📘 *មេរៀនទី ១០ – DOM Manipulation*

DOM = Document Object Model
JavaScript អាចកែ HTML/CSS ដោយ DOM។

🔍 *ជ្រើសរើស Elements:*
\`\`\`javascript
// ជ្រើសតាម ID
let title = document.getElementById("myTitle");

// ជ្រើសតាម Class
let items = document.getElementsByClassName("item");

// ជ្រើសតាម CSS selector
let btn = document.querySelector("#myBtn");
let all = document.querySelectorAll(".card");
\`\`\`

✏️ *ផ្លាស់ប្តូរ Content:*
\`\`\`javascript
title.textContent = "ចំណងជើងថ្មី";
title.innerHTML = "<b>ជាអក្សរដិត</b>";
title.style.color = "red";
title.style.fontSize = "24px";
\`\`\`

🖱️ *Events (ព្រឹត្តិការណ៍):*
\`\`\`javascript
let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  alert("ចុចហើយ! 🎉");
});

// Arrow function
btn.addEventListener("mouseover", () => {
  btn.style.background = "blue";
});
\`\`\`

🎊 *អបអរសាទរ! អ្នកបញ្ចប់ទាំង ១០ មេរៀន!*

👉 វាយ /quiz ដើម្បីប្រលងចុងក្រោយ
    `,
    quiz: "quizFinal",
  },
};

// ===================================================
// QUIZ QUESTIONS
// ===================================================

const quizzes = {
  quiz1: {
    lessonTitle: "មេរៀនទី ១ – JavaScript",
    question: "🧩 JavaScript ប្រើសម្រាប់អ្វី?",
    options: [
      "A. ធ្វើ Database",
      "B. ធ្វើ Website ឱ្យមានសកម្មភាព",
      "C. ធ្វើ Mobile App តែប៉ុណ្ណោះ",
      "D. ធ្វើ Operating System",
    ],
    correct: "B",
    explanation:
      "✅ ត្រូវហើយ! JavaScript ជាភាសាកម្មវិធីដែលប្រើសម្រាប់ធ្វើ Website ឱ្យមានភាពស្វ័យប្រវត្តិ។",
    wrong:
      "❌ មិនត្រូវទេ! JavaScript ប្រើដើម្បីធ្វើ Website ឱ្យមានសកម្មភាព (option B)។",
  },

  quiz2: {
    lessonTitle: "មេរៀនទី ២ – Variables",
    question: "🧩 ចំនួន Variable ណាមួយ *មិន* អាចប្តូរតម្លៃ?",
    options: ["A. var", "B. let", "C. const ", "D. set"],
    correct: "C",
    explanation:
      "✅ ត្រូវហើយ! `const` = constant, មិនអាចប្តូរតម្លៃបានទេ!",
    wrong: "❌ មិនត្រូវទេ! `const` ទើបជា variable ដែលមិនអាចប្តូរ (C)។",
  },

  quiz3: {
    lessonTitle: "មេរៀនទី ៣ – Data Types",
    question: '🧩 `typeof "Hello"` នឹងបញ្ចេញអ្វី?',
    options: ["A. number", 'B. "string" ', "C. boolean", "D. text"],
    correct: "B",
    explanation: '✅ ត្រូវហើយ! "Hello" ជា String ដូច្នេះ typeof ត្រឡប់ "string"!',
    wrong: '❌ មិនត្រូវទេ! "Hello" ជា String, typeof ត្រឡប់ "string" (B)។',
  },

  quiz4: {
    lessonTitle: "មេរៀនទី ៤ – Operators",
    question: "🧩 `5 === '5'` ផ្តល់លទ្ធផលអ្វី?",
    options: ["A. true", "B. false ", "C. null", "D. error"],
    correct: "B",
    explanation:
      "✅ ត្រូវហើយ! `===` ពិនិត្យទាំងតម្លៃ និងប្រភេទ។ 5 (number) ≠ '5' (string)!",
    wrong:
      "❌ មិនត្រូវទេ! `===` ពិនិត្យប្រភេទផងដែរ, 5 ≠ '5', ដូច្នេះ false (B)!",
  },

  quiz5: {
    lessonTitle: "មេរៀនទី ៥ – Conditionals",
    question: "🧩 `let x = 15 > 10 ? 'ធំ' : 'តូច'` x = ?",
    options: ["A. 15", "B. 10", "C. 'ធំ' ", "D. 'តូច'"],
    correct: "C",
    explanation: "✅ ត្រូវហើយ! 15 > 10 = true, ដូច្នេះ x = 'ធំ'!",
    wrong: "❌ មិនត្រូវទេ! 15 > 10 = true, ដូច្នេះ x = 'ធំ' (C)!",
  },

  quiz6: {
    lessonTitle: "មេរៀនទី ៦ – Loops",
    question: "🧩 `for (let i=0; i<3; i++)` loop ដំណើរការប៉ុន្មានដង?",
    options: ["A. 2 ដង", "B. 3 ដង ", "C. 4 ដង", "D. 1 ដង"],
    correct: "B",
    explanation: "✅ ត្រូវហើយ! i = 0, 1, 2 (i<3) = ៣ ដង!",
    wrong: "❌ មិនត្រូវទេ! i ចាប់ពី 0 ដល់ 2 (i<3) = ៣ ដង (B)!",
  },

  quiz7: {
    lessonTitle: "មេរៀនទី ៧ – Functions",
    question: "🧩 Arrow function ត្រូវវាយម៉េច?",
    options: [
      "A. function() =>",
      "B. => function()",
      "C. const f = () => {} ",
      "D. def f():",
    ],
    correct: "C",
    explanation: "✅ ត្រូវហើយ! Arrow function: `const f = () => {}`",
    wrong: "❌ មិនត្រូវទេ! Arrow function ត្រឹមត្រូវ: `const f = () => {}` (C)!",
  },

  quiz8: {
    lessonTitle: "មេរៀនទី ៨ – Arrays",
    question: "🧩 `[1,2,3].length` = ?",
    options: ["A. 2", "B. 4", "C. 3 ", "D. 0"],
    correct: "C",
    explanation: "✅ ត្រូវហើយ! Array មាន 3 ធាតុ, length = 3!",
    wrong: "❌ មិនត្រូវទេ! Array [1,2,3] មាន 3 ធាតុ, length = 3 (C)!",
  },

  quiz9: {
    lessonTitle: "មេរៀនទី ៩ – Objects",
    question: '🧩 `let p = {name:"សុខា"}` ហើយប្រើ `p.name` = ?',
    options: ["A. undefined", 'B. "p" ', 'C. "name"', 'D. "សុខា" '],
    correct: "D",
    explanation: '✅ ត្រូវហើយ! p.name ចូលទៅ property "name" = "សុខា"!',
    wrong: '❌ មិនត្រូវទេ! p.name = "សុខា" ដូចជាតម្លៃ (D)!',
  },

  quizFinal: {
    lessonTitle: "ប្រលងចុងក្រោយ",
    question:
      '🏆 *ប្រលងចុងក្រោយ!*\n\nអ្វីជាលទ្ធផល?\n`let arr = [10,20,30];\nconsole.log(arr[1]);`',
    options: ["A. 10", "B. 20 ", "C. 30", "D. undefined"],
    correct: "B",
    explanation:
      "✅ ឆ្លាតណាស់! arr[1] = 20 ព្រោះ Array ចាប់ពី index 0!\n\n🎊 *អ្នកបញ្ចប់ JavaScript Course ទាំងមូលហើយ!*\nវាយ /certificate ដើម្បីទទួល Certificate!",
    wrong:
      "❌ arr[1] = 20 (B) ព្រោះ index: arr[0]=10, arr[1]=20, arr[2]=30\n\nព្យាយាមមើលទៀត! វាយ /quizFinal ម្តងទៀត!",
  },
};

module.exports = { lessons, quizzes };
