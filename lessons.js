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
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.3
console.log(a % b);  // 1  (នៅសល់)
\`\`\`

⚖️ *Comparison (ប្រៀបធៀប):*
\`\`\`javascript
console.log(5 == "5");   // true
console.log(5 === "5");  // false (ប្រភេទខុស)
console.log(10 > 5);     // true
console.log(3 <= 3);     // true
\`\`\`

🔗 *Logical (តក្កវិជ្ជា):*
\`\`\`javascript
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)
\`\`\`

💡 *គន្លឹះ:* ប្រើ \`===\` ជានិច្ច!

👉 វាយ /lesson5 ដើម្បីបន្ត ឬ /quiz4 ដើម្បីប្រលង
    `,
    quiz: "quiz4",
  },

  5: {
    title: "មេរៀនទី ៥ – Conditionals (លក្ខខណ្ឌ)",
    content: `
📘 *មេរៀនទី ៥ – Conditionals (if/else)*

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

🔀 *Ternary Operator:*
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
\`\`\`

📋 *for...of (loop array):*
\`\`\`javascript
let fruits = ["ស្វាយ", "ក្លែ", "ទទឹម"];
for (let fruit of fruits) {
  console.log(fruit);
}
\`\`\`

⚠️ *ប្រយ័ត្ន Infinite Loop!*
\`\`\`javascript
// ❌ ហាមប្រើ! Browser នឹង Crash
while (true) { console.log("..."); }
\`\`\`

👉 វាយ /lesson7 ដើម្បីបន្ត ឬ /quiz6 ដើម្បីប្រលង
    `,
    quiz: "quiz6",
  },

  7: {
    title: "មេរៀនទី ៧ – Functions (អនុគមន៍)",
    content: `
📘 *មេរៀនទី ៧ – Functions*

\`\`\`javascript
function greet(name) {
  return "សួស្តី " + name + "! 👋";
}
console.log(greet("សុខា")); // សួស្តី សុខា! 👋
\`\`\`

➡️ *Arrow Function:*
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

👉 វាយ /lesson8 ដើម្បីបន្ត ឬ /quiz7 ដើម្បីប្រលង
    `,
    quiz: "quiz7",
  },

  8: {
    title: "មេរៀនទី ៨ – Arrays (អារេ)",
    content: `
📘 *មេរៀនទី ៨ – Arrays*

\`\`\`javascript
let students = ["សុខា", "ដារា", "ចន្ទ"];
console.log(students[0]);  // សុខា
console.log(students[2]);  // ចន្ទ
\`\`\`

🛠️ *Methods:*
\`\`\`javascript
let arr = ["a", "b", "c"];
arr.push("d");   // បន្ថែមចុងក្រោយ
arr.pop();       // លុបចុងក្រោយ
console.log(arr.length); // 3
\`\`\`

🔄 *filter + map:*
\`\`\`javascript
let scores = [85, 92, 78, 95];
let passed = scores.filter(s => s >= 80);
console.log(passed); // [85, 92, 95]
\`\`\`

👉 វាយ /lesson9 ដើម្បីបន្ត ឬ /quiz8 ដើម្បីប្រលង
    `,
    quiz: "quiz8",
  },

  9: {
    title: "មេរៀនទី ៩ – Objects (វត្ថុ)",
    content: `
📘 *មេរៀនទី ៩ – Objects*

\`\`\`javascript
let person = {
  name: "សុខា",
  age: 22,
  city: "ភ្នំពេញ"
};

console.log(person.name);    // សុខា
console.log(person["age"]);  // 22
\`\`\`

✏️ *កែប្រែ & បន្ថែម:*
\`\`\`javascript
person.age = 23;             // កែប្រែ
person.email = "s@mail.com"; // បន្ថែម
delete person.city;          // លុប
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
car.accelerate(); // ល្បឿន: 10
\`\`\`

👉 វាយ /lesson10 ដើម្បីបន្ត ឬ /quiz9 ដើម្បីប្រលង
    `,
    quiz: "quiz9",
  },

  10: {
    title: "មេរៀនទី ១០ – DOM Manipulation",
    content: `
📘 *មេរៀនទី ១០ – DOM Manipulation*

🔍 *ជ្រើសរើស Elements:*
\`\`\`javascript
let title = document.getElementById("myTitle");
let btn   = document.querySelector("#myBtn");
let all   = document.querySelectorAll(".card");
\`\`\`

✏️ *ផ្លាស់ប្តូរ Content:*
\`\`\`javascript
title.textContent = "ចំណងជើងថ្មី";
title.style.color = "red";
title.style.fontSize = "24px";
\`\`\`

🖱️ *Events:*
\`\`\`javascript
let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  alert("ចុចហើយ! 🎉");
});
\`\`\`

🎊 *អ្នកបញ្ចប់ JavaScript Basics ទាំង ១០ មេរៀន!*

🚀 *ចង់រៀនបន្ថែម?*
👉 /lesson11 – React ↔ Express (Advanced!)

👉 /quiz ប្រលងចុងក្រោយ ឬ /progress ពិនិត្យ
    `,
    quiz: "quizFinal",
  },

  // ── React ↔ Express lessons (11–15) ─────────────
  11: {
    title: "មេរៀនទី ១១ – React & Express គឺជាអ្វី?",
    content: `
📘 *មេរៀនទី ១១ – React ↔ Express*

🌐 *React* = Frontend (អ្វីដែលអ្នកប្រើឃើញ)
🚂 *Express* = Backend (server ដែលរក្សាទិន្នន័យ)

📡 *ពួកគេទំនាក់ទំនងម៉េច?*

\`\`\`
⚛ React          🚂 Express
(port 3000)  →   (port 5000)
             ←
HTTP Request  →  ← JSON Response
\`\`\`

🔄 *ជំហាន ៤:*
1️⃣ React ផ្ញើ Request (fetch)
2️⃣ Express ទទួល Request
3️⃣ Express ផ្ញើ JSON ត្រឡប់
4️⃣ React ទទួល JSON រក្សា useState

⚠️ *CORS គឺសំខាន់!*
\`\`\`javascript
const cors = require('cors');
app.use(cors()); // ✅ ចាំបាច់!
\`\`\`

👉 វាយ /lesson12 ដើម្បីបន្ត ឬ /quiz11 ប្រលង
    `,
    quiz: "quiz11",
  },

  12: {
    title: "មេរៀនទី ១២ – HTTP Methods",
    content: `
📘 *មេរៀនទី ១២ – HTTP Methods*

🟢 *GET* – ទាញទិន្នន័យ
\`\`\`javascript
const res = await fetch('/api/users');
app.get('/api/users', (req, res) => res.json(users));
\`\`\`

🔵 *POST* – បង្កើតទិន្នន័យថ្មី
\`\`\`javascript
const res = await fetch('/api/users', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ name: 'Alice' })
});
\`\`\`

🟡 *PUT* – កែប្រែទិន្នន័យ
\`\`\`javascript
await fetch('/api/users/1', {
  method: 'PUT',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ name: 'Alice B' })
});
\`\`\`

🔴 *DELETE* – លុបទិន្នន័យ
\`\`\`javascript
await fetch('/api/users/1', { method: 'DELETE' });
\`\`\`

📌 GET=អាន | POST=បង្កើត | PUT=កែ | DELETE=លុប

👉 វាយ /lesson13 ដើម្បីបន្ត ឬ /quiz12 ប្រលង
    `,
    quiz: "quiz12",
  },

  13: {
    title: "មេរៀនទី ១៣ – GET Request",
    content: `
📘 *មេរៀនទី ១៣ – GET Request*

⚛ *React:*
\`\`\`javascript
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // [] = run តែម្តង

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
\`\`\`

🚂 *Express:*
\`\`\`javascript
const express = require('express');
const cors    = require('cors');
const app     = express();

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(5000);
\`\`\`

💡 cors() ចាំបាច់! useEffect([]) = fetch ម្តង!

👉 វាយ /lesson14 ដើម្បីបន្ត ឬ /quiz13 ប្រលង
    `,
    quiz: "quiz13",
  },

  14: {
    title: "មេរៀនទី ១៤ – POST Request",
    content: `
📘 *មេរៀនទី ១៤ – POST Request*

⚛ *React:*
\`\`\`javascript
function AddUser() {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    const res = await fetch(
      'http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
      }
    );
    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <input value={name}
        onChange={e => setName(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      {result && <p>{result.message}</p>}
    </div>
  );
}
\`\`\`

🚂 *Express:*
\`\`\`javascript
app.post('/api/users', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400)
      .json({ message: 'Name required' });
  }

  const newUser = { id: Date.now(), name };
  res.status(201).json({
    message: 'User created!',
    user: newUser
  });
});
\`\`\`

💡 JSON.stringify() + Content-Type + express.json()

👉 វាយ /lesson15 ដើម្បីបន្ត ឬ /quiz14 ប្រលង
    `,
    quiz: "quiz14",
  },

  15: {
    title: "មេរៀនទី ១៥ – Error Handling",
    content: `
📘 *មេរៀនទី ១៥ – Error Handling*

⚛ *React:*
\`\`\`javascript
const [error, setError] = useState(null);

const loadData = async () => {
  try {
    const res = await fetch('/api/users');

    if (!res.ok) {
      throw new Error('HTTP Error: ' + res.status);
    }

    const data = await res.json();
    setUsers(data);

  } catch (err) {
    setError(err.message);
  }
};

if (error) return <p style={{color:'red'}}>
  ❌ {error}
</p>;
\`\`\`

🚂 *Express Error Middleware:*
\`\`\`javascript
// Global error handler (ដាក់ចុងក្រោយ!)
app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Server error',
    error: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});
\`\`\`

💡 *HTTP Status Codes:*
• 200 = OK ✅  • 201 = Created ✅
• 400 = Bad Request ❌  • 404 = Not Found ❌
• 500 = Server Error 💥

🎊 *អ្នកបញ្ចប់ React-Express Course ហើយ!*
👉 /quiz15 ប្រលង ឬ /progress ពិនិត្យ
    `,
    quiz: "quiz15",
  },
};

// ===================================================
// ALL QUIZZES
// ===================================================

const quizzes = {
  quiz1: {
    lessonTitle: "មេរៀនទី ១ – JavaScript",
    question: "🧩 JavaScript ប្រើសម្រាប់អ្វី?",
    options: [
      "A. ធ្វើ Database",
      "B. ធ្វើ Website ឱ្យមានសកម្មភាព ",
      "C. ធ្វើ Mobile App តែប៉ុណ្ណោះ",
      "D. ធ្វើ Operating System",
    ],
    correct: "B",
    explanation: "✅ ត្រូវហើយ! JavaScript ជាភាសាកម្មវិធីដែលប្រើសម្រាប់ធ្វើ Website ឱ្យមានភាពស្វ័យប្រវត្តិ។",
    wrong: "❌ មិនត្រូវទេ! JavaScript ប្រើដើម្បីធ្វើ Website ឱ្យមានសកម្មភាព (option B)។",
  },
  quiz2: {
    lessonTitle: "មេរៀនទី ២ – Variables",
    question: "🧩 Variable ណាមួយ *មិន* អាចប្តូរតម្លៃ?",
    options: ["A. var", "B. let", "C. const ", "D. set"],
    correct: "C",
    explanation: "✅ ត្រូវហើយ! `const` = constant, មិនអាចប្តូរតម្លៃបានទេ!",
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
    explanation: "✅ ត្រូវហើយ! `===` ពិនិត្យទាំងតម្លៃ និងប្រភេទ។ 5 (number) ≠ '5' (string)!",
    wrong: "❌ មិនត្រូវទេ! `===` ពិនិត្យប្រភេទផងដែរ, 5 ≠ '5', ដូច្នេះ false (B)!",
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
    question: '🧩 `let p = {name:"សុខា"}` ហើយ `p.name` = ?',
    options: ["A. undefined", 'B. "p"', 'C. "name"', 'D. "សុខា" '],
    correct: "D",
    explanation: '✅ ត្រូវហើយ! p.name = "សុខា"!',
    wrong: '❌ មិនត្រូវទេ! p.name = "សុខា" (D)!',
  },
  quizFinal: {
    lessonTitle: "ប្រលងចុងក្រោយ JS Basics",
    question: '🏆 *ប្រលង JS Basics!*\n\n`let arr = [10,20,30];\nconsole.log(arr[1]);`\nលទ្ធផល?',
    options: ["A. 10", "B. 20 ", "C. 30", "D. undefined"],
    correct: "B",
    explanation: "✅ arr[1] = 20! Array ចាប់ពី index 0!\n\n🎊 *JS Basics Complete!*\nចុច /lesson11 ដើម្បីរៀន React-Express!",
    wrong: "❌ arr[1] = 20 (B)! index: arr[0]=10, arr[1]=20, arr[2]=30",
  },
  // React-Express quizzes
  quiz11: {
    lessonTitle: "មេរៀនទី ១១ – React ↔ Express",
    question: "🧩 React រត់លើ port ណា? Express រត់លើ port ណា?",
    options: [
      "A. React: 5000 / Express: 3000",
      "B. React: 3000 / Express: 5000 ",
      "C. ទាំងពីរ port 3000",
      "D. ទាំងពីរ port 8080",
    ],
    correct: "B",
    explanation: "✅ ត្រូវ! React = port 3000, Express = port 5000. ដូច្នេះ CORS ចាំបាច់!",
    wrong: "❌ មិនត្រូវ! React = port 3000, Express = port 5000 (B)!",
  },
  quiz12: {
    lessonTitle: "មេរៀនទី ១២ – HTTP Methods",
    question: "🧩 ប្រើ HTTP Method ណា ដើម្បី *បង្កើត* user ថ្មី?",
    options: ["A. GET", "B. DELETE", "C. POST ", "D. READ"],
    correct: "C",
    explanation: "✅ ត្រូវ! POST ប្រើដើម្បីបង្កើតទិន្នន័យថ្មី!",
    wrong: "❌ មិនត្រូវ! POST ទើបប្រើដើម្បី CREATE (C)!",
  },
  quiz13: {
    lessonTitle: "មេរៀនទី ១៣ – GET Request",
    question: "🧩 `useEffect(fn, [])` មានន័យអ្វី?",
    options: [
      "A. Run រាល់ second",
      "B. Run គ្មានទីបញ្ចប់",
      "C. Run តែម្តង ពេល component load ",
      "D. Run ពេល click",
    ],
    correct: "C",
    explanation: "✅ ត្រូវ! `[]` = empty dependency array = run តែម្តង ពេល mount!",
    wrong: "❌ មិនត្រូវ! `useEffect(fn, [])` = run តែម្តង ពេល component ចូល (C)!",
  },
  quiz14: {
    lessonTitle: "មេរៀនទី ១៤ – POST Request",
    question: "🧩 Express ត្រូវការ middleware ណា ដើម្បីអាន JSON body?",
    options: [
      "A. app.use(cors())",
      "B. app.use(express.json()) ",
      "C. app.use(bodyText())",
      "D. app.use(readJSON())",
    ],
    correct: "B",
    explanation: "✅ ត្រូវ! `express.json()` ដើម្បី parse JSON body ពី React!",
    wrong: "❌ មិនត្រូវ! `express.json()` ទើបអាន JSON body (B)!",
  },
  quiz15: {
    lessonTitle: "មេរៀនទី ១៥ – Error Handling",
    question: "🧩 HTTP Status Code 404 មានន័យអ្វី?",
    options: [
      "A. Server Error 💥",
      "B. Created Successfully ✅",
      "C. Not Found ❌ ",
      "D. OK ✅",
    ],
    correct: "C",
    explanation: "✅ ត្រូវ! 404 = Not Found! (200=OK, 201=Created, 500=Error)\n\n🎊 *React-Express Course Complete!* វាយ /certificate!",
    wrong: "❌ 404 = Not Found (C). 200=OK, 201=Created, 500=Server Error!",
  },
};

module.exports = { lessons, quizzes };