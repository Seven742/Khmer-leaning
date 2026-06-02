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
    options: ["A. undefined", 'B. "p"', 'C. "name"', 'D. "សុខា" ✨'],
    correct: "D",
    explanation: '✅ ត្រូវហើយ! p.name = "សុខា"!',
    wrong: '❌ មិនត្រូវទេ! p.name = "សុខា" (D)!',
  },
  quiz10: {
    lessonTitle: "មេរៀនទី ១០ – DOM Manipulation",
    question: `🧩 *Code ខាងក្រោមធ្វើអ្វី?*

\`\`\`javascript
document.querySelector("#btn")
  .addEventListener("click", () => {
    document.querySelector("h1").style.color = "red";
  });
\`\`\``,
    options: [
      "A. ផ្លាស់ h1 ទៅ font-size: red",
      "B. ពេលចុច #btn → h1 color ក្លាយជាក្រហម ",
      "C. ចុច h1 → #btn ក្លាយជាក្រហម",
      "D. Error ព្រោះ style.color មិនមាន",
    ],
    correct: "B",
    explanation: "✅ ត្រូវ! addEventListener('click') = ទន្ទឹង click លើ #btn → style.color = 'red' ផ្លាស់ h1 ឱ្យក្រហម!",
    wrong: "❌ addEventListener('click') = ពេលចុច #btn → h1.style.color = 'red' (B)!",
  },
  quizFinal: {
    lessonTitle: "ប្រលងចុងក្រោយ JS Basics",
    question: '🏆 *ប្រលង JS Basics!*\n\n`let arr = [10,20,30];\nconsole.log(arr[1]);`\nលទ្ធផល?',
    options: ["A. 10", "B. 20 ✨", "C. 30", "D. undefined"],
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
    options: ["A. GET", "B. DELETE", "C. POST ✨", "D. READ"],
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
      "B. app.use(express.json()) ✨",
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

// ══════════════════════════════════════════════════
// JQUERY LESSONS 16–22  (added to lessons object)
// ══════════════════════════════════════════════════
Object.assign(lessons, {
  16: {
    title: "មេរៀនទី ១៦ – jQuery គឺជាអ្វី?",
    content: `
📗 *មេរៀនទី ១៦ – jQuery គឺជាអ្វី?*

jQuery គឺជា JavaScript Library ដែលធ្វើឱ្យ code ខ្លីជាង និងងាយស្រួលជាង។

⚡ *ហេតុអ្វី jQuery?*
\`\`\`javascript
// ❌ JavaScript ធម្មតា (វែង)
document.getElementById("btn")
  .addEventListener("click", function() {
    document.getElementById("box")
      .style.display = "none";
  });

// ✅ jQuery (ខ្លី & ស្អាត)
$("#btn").click(function() {
  $("#box").hide();
});
\`\`\`

📥 *ដំឡើង jQuery ២ វិធី:*

*វិធីទី ១ – CDN (ងាយបំផុត):*
\`\`\`html
<script src="https://code.jquery.com/
jquery-3.7.1.min.js"></script>
\`\`\`

*វិធីទី ២ – npm:*
\`\`\`bash
npm install jquery
\`\`\`

🔑 *\$ = jQuery*
\`\`\`javascript
// ២ ways ដូចគ្នា
jQuery("p").hide();
$("p").hide();      // ✅ ខ្លីជាង
\`\`\`

⚠️ *រង់ចាំ DOM load ជាមុន!*
\`\`\`javascript
$(document).ready(function() {
  // code ទាំងអស់ដាក់ក្នុងនេះ!
  console.log("DOM ready! ✅");
});

// ឬខ្លីជាង:
$(function() {
  console.log("Ready! ✅");
});
\`\`\`

👉 /lesson17 ដើម្បីបន្ត ឬ /quiz16 ប្រលង
    `,
    quiz: "quiz16",
  },

  17: {
    title: "មេរៀនទី ១៧ – jQuery Selectors & DOM",
    content: `
📗 *មេរៀនទី ១៧ – jQuery Selectors & DOM*

jQuery Selectors ប្រើ CSS syntax ដើម្បីជ្រើស elements។

🎯 *Selectors ចំបង:*
\`\`\`javascript
$("p")          // ជ្រើស <p> ទាំងអស់
$("#myId")      // ជ្រើស id="myId"
$(".myClass")   // ជ្រើស class="myClass"
$("ul li")      // ជ្រើស li នៅក្នុង ul
$("input[type='text']") // ជ្រើស input text
$("p:first")    // p ទីមួយ
$("tr:even")    // rows គូ (0,2,4...)
\`\`\`

✏️ *ផ្លាស់ប្តូរ Content & CSS:*
\`\`\`javascript
// ផ្លាស់ប្តូរ text
$("#title").text("ចំណងជើងថ្មី");

// ផ្លាស់ប្តូរ HTML
$("#box").html("<b>ជាអក្សរដិត</b>");

// ផ្លាស់ប្តូរ CSS
$("p").css("color", "red");
$("p").css({
  "color": "blue",
  "font-size": "18px"
});

// Add/Remove Class
$("div").addClass("active");
$("div").removeClass("active");
$("div").toggleClass("active"); // toggle!
\`\`\`

🔍 *ទាញ & ដាក់ Value:*
\`\`\`javascript
// Input value
let val = $("#myInput").val();      // ទាញ
$("#myInput").val("ខ្មែរ");        // ដាក់

// Attribute
let src = $("img").attr("src");     // ទាញ
$("img").attr("src", "new.jpg");    // ដាក់
\`\`\`

💡 *jQuery ប្រើ Chaining:*
\`\`\`javascript
// ធ្វើច្រើនការក្នុងបន្ទាត់តែមួយ!
$("#box")
  .css("color", "red")
  .addClass("bold")
  .text("ខ្មែរ!")
  .show();
\`\`\`

👉 /lesson18 ដើម្បីបន្ត ឬ /quiz17 ប្រលង
    `,
    quiz: "quiz17",
  },

  18: {
    title: "មេរៀនទី ១៨ – jQuery Events",
    content: `
📗 *មេរៀនទី ១៨ – jQuery Events*

Events = ការឆ្លើយតបនឹងការប្រើប្រាស់ (click, hover, key...)

🖱️ *Mouse Events:*
\`\`\`javascript
// Click
$("#btn").click(function() {
  alert("ចុចហើយ! 🎉");
});

// Double click
$("#btn").dblclick(function() {
  $(this).css("background", "yellow");
});

// Hover (mouse in / mouse out)
$("#box").hover(
  function() { $(this).css("opacity", "0.5"); },
  function() { $(this).css("opacity", "1"); }
);

// Mouse enter / leave
$("#menu").mouseenter(function() {
  $(this).addClass("open");
});
\`\`\`

⌨️ *Keyboard Events:*
\`\`\`javascript
$("#search").keyup(function() {
  let text = $(this).val();
  $("#result").text("អ្នកវាយ: " + text);
});

$(document).keydown(function(e) {
  if (e.key === "Enter") {
    alert("Enter ចុច!");
  }
});
\`\`\`

📝 *Form Events:*
\`\`\`javascript
// Submit form
$("form").submit(function(e) {
  e.preventDefault(); // បញ្ឈប់ reload
  let name = $("#name").val();
  if (!name) {
    alert("⚠️ បំពេញឈ្មោះ!");
    return;
  }
  console.log("ផ្ញើ: " + name);
});

// Change (select/radio/checkbox)
$("select").change(function() {
  let selected = $(this).val();
  console.log("ជ្រើស: " + selected);
});
\`\`\`

🔗 *on() – Best Practice:*
\`\`\`javascript
// ✅ ល្អបំផុត ប្រើ .on()
$(document).on("click", "#btn", function() {
  console.log("ចុច!");
});
// ដំណើរការ dynamic elements ផងដែរ!
\`\`\`

👉 /lesson19 ដើម្បីបន្ត ឬ /quiz18 ប្រលង
    `,
    quiz: "quiz18",
  },

  19: {
    title: "មេរៀនទី ១៩ – jQuery Effects & Animation",
    content: `
📗 *មេរៀនទី ១៩ – jQuery Effects & Animation*

jQuery មាន effects built-in ជាច្រើន!

👁️ *Show / Hide:*
\`\`\`javascript
$("#box").hide();          // លាក់ភ្លាម
$("#box").show();          // បង្ហាញភ្លាម
$("#box").toggle();        // toggle hide/show

// មាន speed: "slow" "fast" ឬ ms
$("#box").hide("slow");
$("#box").show(500);       // 500ms
$("#box").toggle("fast");
\`\`\`

🎭 *Fade:*
\`\`\`javascript
$("#box").fadeOut();       // fade ចេញ
$("#box").fadeIn();        // fade ចូល
$("#box").fadeToggle();    // toggle fade
$("#box").fadeTo(1000, 0.3); // fade ទៅ 30%
\`\`\`

📐 *Slide:*
\`\`\`javascript
$("#menu").slideDown();    // slide ចុះ
$("#menu").slideUp();      // slide ឡើង
$("#menu").slideToggle();  // toggle slide

// Accordion example
$(".title").click(function() {
  $(this).next(".content").slideToggle();
});
\`\`\`

🎨 *animate() – Custom Animation:*
\`\`\`javascript
// ផ្លាស់ប្តូរ CSS properties ជាមួយ animation
$("#box").animate({
  width: "300px",
  height: "200px",
  opacity: 0.5
}, 1000); // 1000ms = 1 second

// Chaining animations
$("#ball")
  .animate({ left: "200px" }, 500)
  .animate({ top: "100px" }, 500)
  .animate({ opacity: 0 }, 300);
\`\`\`

⏹️ *stop() & delay():*
\`\`\`javascript
$("#box").delay(500).fadeIn(1000);
$("#box").stop();          // បញ្ឈប់ animation
$("#box").stop(true, true); // បញ្ឈប់ & ទៅចុងក្រោយ
\`\`\`

👉 /lesson20 ដើម្បីបន្ត ឬ /quiz19 ប្រលង
    `,
    quiz: "quiz19",
  },

  20: {
    title: "មេរៀនទី ២០ – jQuery AJAX",
    content: `
📗 *មេរៀនទី ២០ – jQuery AJAX*

AJAX = Asynchronous JavaScript And XML
ទាញ/ផ្ញើទិន្នន័យ ដោយ *មិន reload page*!

🚀 *$.ajax() – Full Control:*
\`\`\`javascript
$.ajax({
  url: "https://api.example.com/users",
  method: "GET",
  success: function(data) {
    console.log("ទទួលបាន:", data);
    data.forEach(function(user) {
      $("#list").append(
        "<li>" + user.name + "</li>"
      );
    });
  },
  error: function(err) {
    console.log("Error:", err.status);
  }
});
\`\`\`

⚡ *$.get() & $.post() – ខ្លី:*
\`\`\`javascript
// GET request
$.get("/api/users", function(data) {
  console.log(data);
});

// POST request
$.post("/api/users",
  { name: "សុខា", age: 22 },
  function(response) {
    alert(response.message);
  }
);
\`\`\`

🔄 *$.getJSON() – JSON ជាក់លាក់:*
\`\`\`javascript
$.getJSON("https://api.github.com/users/octocat",
  function(user) {
    $("#name").text(user.name);
    $("#bio").text(user.bio);
  }
);
\`\`\`

📡 *Real Example – Load Products:*
\`\`\`javascript
$(function() {
  $.get("/api/products", function(products) {
    let html = "";
    $.each(products, function(i, p) {
      html += \`<div class="card">
        <h3>\${p.name}</h3>
        <p>$\${p.price}</p>
      </div>\`;
    });
    $("#products").html(html);
  });

  // Loading state
  $(document).ajaxStart(function() {
    $("#loader").show();
  }).ajaxStop(function() {
    $("#loader").hide();
  });
});
\`\`\`

👉 /lesson21 ដើម្បីបន្ត ឬ /quiz20 ប្រលង
    `,
    quiz: "quiz20",
  },

  21: {
    title: "មេរៀនទី ២១ – jQuery DOM Manipulation Advanced",
    content: `
📗 *មេរៀនទី ២១ – jQuery DOM Manipulation*

🏗️ *បន្ថែម & លុប Elements:*
\`\`\`javascript
// បន្ថែម HTML
$("#list").append("<li>ធាតុថ្មី</li>");   // ចុងក្រោយ
$("#list").prepend("<li>ធាតុមុខ</li>");  // ខាងមុខ
$("#list").after("<p>ក្រោយ list</p>");   // ក្រោម
$("#list").before("<p>លើ list</p>");     // លើ

// លុប
$(".item").remove();           // លុបទាំង element
$(".item").empty();            // លុបត្រឹមខាងក្នុង

// Clone
let copy = $("#card").clone();
$("#container").append(copy);
\`\`\`

🔄 *Traversal – រុករក DOM:*
\`\`\`javascript
// ឡើងលើ
$("li").parent();          // parent ដោយផ្ទាល់
$("li").parents("ul");     // ancestors ទាំងអស់
$("li").closest(".box");   // ancestor ដំបូងគេ

// ចុះក្រោម
$("ul").children();        // children ដោយផ្ទាល់
$("ul").find("li.active"); // find ក្នុងៗ

// ជិតខាង (siblings)
$("li").next();            // ធាតុបន្ទាប់
$("li").prev();            // ធាតុមុន
$("li").siblings();        // siblings ទាំងអស់
\`\`\`

🎯 *Filtering:*
\`\`\`javascript
$("li").filter(".active")      // filter ជ្រើស
$("li").not(".disabled")       // filter ដក
$("li").first()                // ទីមួយ
$("li").last()                 // ចុងក្រោយ
$("li").eq(2)                  // index ទី ២

// each() – loop jQuery elements
$("li").each(function(index) {
  console.log(index + ": " + $(this).text());
});
\`\`\`

📊 *Practical: Dynamic Table:*
\`\`\`javascript
let students = [
  {name: "សុខា", score: 85},
  {name: "ដារា", score: 92},
  {name: "ចន្ទ", score: 78}
];

$.each(students, function(i, s) {
  let row = $("<tr>").append(
    $("<td>").text(s.name),
    $("<td>").text(s.score),
    $("<td>").text(s.score >= 80 ? "✅" : "❌")
  );
  $("#table tbody").append(row);
});
\`\`\`

👉 /lesson22 ដើម្បីបន្ត ឬ /quiz21 ប្រលង
    `,
    quiz: "quiz21",
  },

  22: {
    title: "មេរៀនទី ២២ – jQuery Plugins & Best Practices",
    content: `
📗 *មេរៀនទី ២២ – jQuery Plugins & Best Practices*

🔌 *Popular jQuery Plugins:*

*1. Select2 – Dropdown ស្អាត:*
\`\`\`html
<link rel="stylesheet" href="select2.min.css">
<script src="select2.min.js"></script>
\`\`\`
\`\`\`javascript
$('#mySelect').select2({
  placeholder: "ជ្រើសរើស...",
  allowClear: true
});
\`\`\`

*2. DataTables – Table ស្ទាប:*
\`\`\`javascript
$('#myTable').DataTable({
  language: {
    search: "ស្វែងរក:",
    lengthMenu: "បង្ហាញ _MENU_ ជួរ",
    info: "ទំព័រ _PAGE_ នៃ _PAGES_"
  }
});
\`\`\`

*3. SweetAlert2 – Alert ស្អាត:*
\`\`\`javascript
// ជំនួស alert() ធម្មតា
Swal.fire({
  title: "ជោគជ័យ!",
  text: "រក្សាទុកបានហើយ ✅",
  icon: "success"
});
\`\`\`

🏆 *Best Practices:*
\`\`\`javascript
// ✅ Cache selector (លឿន)
const $btn = $("#submitBtn"); // cache ម្តង
$btn.click(...);
$btn.addClass(...);

// ❌ Slow (ស្វែងរក DOM ២ ដង)
$("#submitBtn").click(...);
$("#submitBtn").addClass(...);

// ✅ Use .on() for dynamic elements
$(document).on("click",".dynamic-btn",fn);

// ✅ Minimize DOM manipulation
let html = "";
data.forEach(d => html += "<li>" + d + "</li>");
$("#list").html(html); // update ម្តង!

// ✅ Namespace events
$(window).on("resize.myApp", fn);
$(window).off("resize.myApp"); // លុបត្រឹម
\`\`\`

🎯 *jQuery vs Vanilla JS (2024):*
\`\`\`
jQuery ✅ ប្រើ ពេល:
• project ចាស់ (legacy)
• ត្រូវ support browsers ចាស់
• ប្រើ plugins ជាច្រើន

Vanilla JS ✅ ប្រើ ពេល:
• project ថ្មី
• performance សំខាន់
• React/Vue/Angular project
\`\`\`

🎊 *អ្នកបញ្ចប់ jQuery Course ទាំងអស់!*

📚 *Course Summary:*
🟡 JS Basics (1–10) ✅
🔵 React-Express (11–15) ✅
🟢 jQuery (16–22) ✅

👉 /quiz22 ប្រលង ឬ /certificate
    `,
    quiz: "quiz22",
  },
});

// ══════════════════════════════════════════════════
// JQUERY QUIZZES (HARDER — Multiple tricky options)
// ══════════════════════════════════════════════════

const jqueryQuizzes = {
  quiz16: {
    lessonTitle: "មេរៀនទី ១៦ – jQuery Basics",
    question: `🧩 *កូដខាងក្រោមត្រឹមត្រូវឬទេ?*

\`\`\`
$(document).ready(function() {
  $("p").click(function() {
    $(this).hide();
  });
});
\`\`\`
ប្រើ \`$(this)\` នៅក្នុង jQuery handler មានន័យអ្វី?`,
    options: [
      "A. window object",
      "B. document object",
      "C. element ដែលត្រូវ event (clicked p) ",
      "D. jQuery object ទាំងអស់",
    ],
    correct: "C",
    explanation: "✅ ត្រូវ! `$(this)` ក្នុង event handler = element ដែល trigger event ។ ពេល click p, $(this) = p element នោះ!",
    wrong: "❌ `$(this)` = element ដែល trigger event។ ពេល click p, $(this) = p element ដែលចុច (C)!",
  },

  quiz17: {
    lessonTitle: "មេរៀនទី ១៧ – Selectors & DOM",
    question: `🧩 *លទ្ធផលអ្វី?*

\`\`\`html
<ul id="list">
  <li class="a">ទី ១</li>
  <li class="b">ទី ២</li>
  <li class="a">ទី ៣</li>
</ul>
\`\`\`
\`\`\`javascript
$("#list li.a").length
\`\`\``,
    options: [
      "A. 1",
      "B. 3",
      "C. 2 ",
      "D. 0",
    ],
    correct: "C",
    explanation: "✅ ត្រូវ! `#list li.a` ជ្រើស li ដែល class='a' ក្នុង #list = ២ elements (ទី ១ និង ទី ៣)!",
    wrong: "❌ `#list li.a` = li ដែលមាន class 'a' = ២ elements (ទី ១, ទី ៣)! ចម្លើយ C!",
  },

  quiz18: {
    lessonTitle: "មេរៀនទី ១៨ – jQuery Events",
    question: `🧩 *ហេតុអ្វី \`e.preventDefault()\` ប្រើក្នុង form submit?*

\`\`\`javascript
$("form").submit(function(e) {
  e.preventDefault();
  // process form...
});
\`\`\``,
    options: [
      "A. ដើម្បីបញ្ឈប់ jQuery",
      "B. ដើម្បីបញ្ឈប់ page reload/redirect ",
      "C. ដើម្បីលុប form data",
      "D. ដើម្បី submit ១ ដង",
    ],
    correct: "B",
    explanation: "✅ ត្រូវ! `e.preventDefault()` = បញ្ឈប់ default behavior របស់ browser (ស្ទូច form & reload page) ។ ដូច្នេះ AJAX submit អាចដំណើរការបាន!",
    wrong: "❌ `e.preventDefault()` = ការពារ browser ពី default action (reload/redirect) (B)!",
  },

  quiz19: {
    lessonTitle: "មេរៀនទី ១៩ – Effects & Animation",
    question: `🧩 *Code ខាងក្រោមធ្វើអ្វី?*

\`\`\`javascript
$("#box")
  .animate({ left: "200px" }, 400)
  .animate({ opacity: 0 }, 600)
  .hide();
\`\`\``,
    options: [
      "A. Animation ទាំង ៣ ដំណើរការ ក្នុងពេលតែមួយ",
      "B. ផ្លាស់ left → fade → hide តាមលំដាប់ ",
      "C. Error ព្រោះ chain animation មិនអាច",
      "D. hide() ដំណើរការជាមុន",
    ],
    correct: "B",
    explanation: "✅ ត្រូវ! jQuery Animation Queue! animate() ដំណើរការតាមលំដាប់ (queue): left 400ms → fade 600ms → hide()!",
    wrong: "❌ jQuery queue animations! ដំណើរការ: left 400ms → fade 600ms → hide() (B)!",
  },

  quiz20: {
    lessonTitle: "មេរៀនទី ២០ – jQuery AJAX",
    question: `🧩 *\`$.ajax()\` vs \`$.get()\` ខុសគ្នាម៉េច?*`,
    options: [
      "A. $.ajax() ប្រើ POST, $.get() ប្រើ GET",
      "B. $.get() លឿនជាង $.ajax()",
      "C. $.ajax() អាចគ្រប់គ្រង error, timeout, headers ច្រើនជាង ",
      "D. ២ method ដូចគ្នា ១០០%",
    ],
    correct: "C",
    explanation: "✅ ត្រូវ! `$.get()` & `$.post()` = shortcuts ដែលខ្លី។ `$.ajax()` = full control: method, headers, timeout, beforeSend, complete, error handling!",
    wrong: "❌ `$.ajax()` = full control (error, timeout, headers)។ `$.get()` = shortcut ខ្លី (C)!",
  },

  quiz21: {
    lessonTitle: "មេរៀនទី ២១ – DOM Manipulation Advanced",
    question: `🧩 *ខុសគ្នារវាង \`.remove()\` & \`.empty()\`?*

\`\`\`html
<div id="box">
  <p>Text នៅក្នុង</p>
</div>
\`\`\`
\`\`\`javascript
// A:  $("#box").remove();
// B:  $("#box").empty();
\`\`\``,
    options: [
      "A. remove() = លុប <p>, empty() = លុប #box ទាំងមូល",
      "B. remove() = លុប #box ទាំងមូល, empty() = លុបត្រឹម <p> ខាងក្នុង ",
      "C. ២ method ដូចគ្នា",
      "D. remove() = hide, empty() = delete",
    ],
    correct: "B",
    explanation: "✅ ត្រូវ! `.remove()` = លុប element ខ្លួនវា (#box) ។ `.empty()` = លុបត្រឹម content ខាងក្នុង (#box នៅ ប៉ុន្តែ <p> ចេញ)!",
    wrong: "❌ `.remove()` លុប #box ទាំងមូល, `.empty()` លុបត្រឹម content ខាងក្នុង (B)!",
  },

  quiz22: {
    lessonTitle: "មេរៀនទី ២២ – jQuery Final Challenge",
    question: `🏆 *Challenge! Code ខាងក្រោមមាន bug!*

\`\`\`javascript
$(function() {
  $(".btn").click(function() {
    var text = $("input").val;  // ← បន្ទាត់នេះ
    $("#output").text(text);
  });
});
\`\`\`
Bug គឺអ្វី?`,
    options: [
      "A. $(\".btn\") selectorខុស",
      "B. $(function(){}) syntax ខុស",
      "C. `.val` ត្រូវជា `.val()` (missing parentheses) ",
      "D. $(\"#output\").text() ខុស",
    ],
    correct: "C",
    explanation: "✅ ឆ្លាតណាស់! `.val` = property (function object) ។ `.val()` = call function ដើម្បីទទួលតម្លៃ! Bug ក្នុង jQuery ជាញឹកញាប់!",
    wrong: "❌ Bug = `.val` គួរជា `.val()` (C)! jQuery methods ត្រូវការ () ដើម្បី execute!",
  },
};

// Merge jQuery quizzes into main quizzes
Object.assign(quizzes, jqueryQuizzes);

module.exports = { lessons, quizzes };