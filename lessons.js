// ===================================================
// KHMER CODING BOT — Lessons & Quizzes
// Course JS: /js1-/js15
// Course jQuery: /jq1-/jq10
// Course React: /re1-/re6
// Course Express: /ex1-/ex8
// ===================================================

// ══════════════════════════════════════════════════
//  COURSE 1 — JavaScript Basics  (/js1 … /js15)
// ══════════════════════════════════════════════════
const jsLessons = {

  1: {
    title: "JS មេរៀនទី ១ – JavaScript គឺជាអ្វី?", content: `
📘 *JS មេរៀនទី ១ – JavaScript គឺជាអ្វី?*

JavaScript (JS) ជាភាសាកម្មវិធី (Programming Language) ដែលបង្កើតឡើងក្នុងឆ្នាំ 1995។ វាត្រូវបានប្រើជាចម្បងសម្រាប់ធ្វើ Website ឱ្យមានជីវិតចលនា។

🌐 *JavaScript អាចធ្វើអ្វីបាន?*
• ធ្វើ button ឱ្យ click បាន
• Validate form (ពិនិត្យ input)
• Load data ដោយ មិន reload page
• បង្កើត Animation ចលនា
• ធ្វើ Backend (Node.js) & Mobile App

💡 *JS ដំណើរការនៅឯណា?*
JS ដំណើរការក្នុង Browser (Chrome, Firefox) ដោយ ស្វ័យប្រវត្តិ — មិនចាំបាច់ Install!

💻 *Code ដំបូងបង្អស់:*
\`\`\`javascript
// console.log = print អ្វីនោះ
console.log("សួស្តី ពិភពលោក!");

// alert = popup message
alert("JavaScript ដំណើរការហើយ!");

// comment = ចំណាំ, JS មិន run
// នេះជា comment បន្ទាត់តែមួយ

/*
  នេះជា comment
  ច្រើនបន្ទាត់
*/
\`\`\`

🔍 *មើល Console:*
Browser → F12 → Console tab → run JS ភ្លាម!

👉 វាយ /js2 ដើម្បីបន្តទៅ Variables
` },

  2: {
    title: "JS មេរៀនទី ២ – Variables", content: `
📘 *JS មេរៀនទី ២ – Variables (អញ្ញាត)*

Variable គឺដូចជា "ប្រអប់" ដែលរក្សាទុកទិន្នន័យ ហើយ អ្នកអាចហៅឈ្មោះ ប្រអប់នោះ ដើម្បីយកទិន្នន័យវិញ។

📦 *Keyword ៣ ប្រភេទ:*

\`\`\`javascript
// var — ចាស់, ជៀសវាងប្រើ
var oldStyle = "ចាស់";

// let — ទំនើប, ប្តូរតម្លៃបាន
let name = "សុខា";
let age  = 20;

// const — fix, មិនអាចប្ដូរ
const country = "ខ្មែរ";
const PI      = 3.14159;
\`\`\`

✏️ *ប្ដូរតម្លៃ:*
\`\`\`javascript
let score = 50;
score = 80;          // OK — let ប្ដូរបាន
console.log(score);  // 80

const city = "ភ្នំពេញ";
// city = "សៀមរាប"; // ERROR! const ប្ដូរមិនបាន
\`\`\`

📐 *ច្បាប់ដាក់ឈ្មោះ Variable:*
\`\`\`javascript
// ✅ ត្រឹមត្រូវ
let firstName = "ដារា";   // camelCase (ល្អបំផុត)
let _count    = 0;
let score2    = 100;

// ❌ ខុស
// let 2score = 100;   // ចាប់ផ្ដើមលេខ
// let my-name = "";   // មាន dash
// let class   = "";   // reserved keyword
\`\`\`

💡 *គន្លឹះ:* ប្រើ \`const\` ជានិច្ចលុះត្រាតែ ចាំបាច់ប្ដូរ ទើបប្រើ \`let\`!

👉 /js3 — Data Types
` },

  3: {
    title: "JS មេរៀនទី ៣ – Data Types", content: `
📘 *JS មេរៀនទី ៣ – Data Types (ប្រភេទទិន្នន័យ)*

JavaScript មានប្រភេទទិន្នន័យ 2 ក្រុមធំ:

━━━━━━━━━━━━━━━━━━━
📌 *Primitive Types (ទិន្នន័យសាមញ្ញ)*
━━━━━━━━━━━━━━━━━━━

\`\`\`javascript
// 1. Number — លេខគ្រប់ប្រភេទ
let age   = 25;
let price = 9.99;
let neg   = -10;

// 2. String — អត្ថបទ (ប្រើ "" ឬ '' ឬ backtick)
let name   = "សុខា";
let city   = 'ភ្នំពេញ';
let hello  = \`សួស្ដី \${name}!\`; // template literal

// 3. Boolean — true ឬ false តែប៉ុណ្ណោះ
let isLoggedIn = true;
let isDone     = false;

// 4. Undefined — មិនទាន់ដាក់តម្លៃ
let x;
console.log(x); // undefined

// 5. Null — ចេតនាទុកទទេ
let data = null;

// 6. BigInt — លេខធំខ្លាំង
let big = 9007199254740991n;

// 7. Symbol — unique identifier
let id = Symbol("id");
\`\`\`

🔍 *ពិនិត្យប្រភេទ:*
\`\`\`javascript
console.log(typeof 42);        // "number"
console.log(typeof "ខ្មែរ");  // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (JS bug!)
console.log(typeof []);        // "object"
console.log(typeof {});        // "object"
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Reference Types (ទិន្នន័យស្មុគស្មាញ)*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let arr = [1, 2, 3];     // Array
let obj = { name: "JS" }; // Object
let fn  = function() {};  // Function
\`\`\`

👉 /js4 — Operators
` },

  4: {
    title: "JS មេរៀនទី ៤ – Operators", content: `
📘 *JS មេរៀនទី ៤ – Operators (ប្រមាណវិធី)*

━━━━━━━━━━━━━━━━━━━
➕ *Arithmetic Operators*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let a = 10, b = 3;

console.log(a + b);   // 13  — បូក
console.log(a - b);   // 7   — ដក
console.log(a * b);   // 30  — គុណ
console.log(a / b);   // 3.33— ចែក
console.log(a % b);   // 1   — នៅសល់
console.log(a ** b);  // 1000— ត្រិះ (10^3)

// Increment & Decrement
let n = 5;
n++;            // n = 6
n--;            // n = 5
console.log(++n); // 6 (increment first)
console.log(n++); // 6 (return first, then increment)
\`\`\`

━━━━━━━━━━━━━━━━━━━
⚖️ *Comparison Operators*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
5 == "5"    // true  — ស្មើតម្លៃ (type ignore)
5 === "5"   // false — ស្មើតម្លៃ + ប្រភេទ (ល្អបំផុត)
5 != "5"    // false
5 !== "5"   // true
10 > 5      // true
10 >= 10    // true
3  < 5      // true
3  <= 2     // false
\`\`\`

━━━━━━━━━━━━━━━━━━━
🔗 *Logical Operators*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// && (AND) — ពិត ត្រូវតែពិតទាំងពីរ
true  && true   // true
true  && false  // false

// || (OR) — ពិត ត្រូវតែពិតមួយ
false || true   // true
false || false  // false

// ! (NOT) — បញ្ច្រាស
!true           // false
!false          // true
\`\`\`

💡 *ប្រើ \`===\` ជានិច្ច* ដើម្បីជៀសវាងបញ្ហា type comparison!

👉 /js5 — Conditionals
` },

  5: {
    title: "JS មេរៀនទី ៥ – Conditionals", content: `
📘 *JS មេរៀនទី ៥ – Conditionals (លក្ខខណ្ឌ)*

Conditional ប្រើដើម្បីធ្វើការ *សម្រេចចិត្ត* — ប្រសិនបើ... ហើយ...

━━━━━━━━━━━━━━━━━━━
📌 *if / else if / else*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let score = 75;

if (score >= 90) {
  console.log("A — ល្អប្រពឹត្ត!");
} else if (score >= 80) {
  console.log("B — ល្អ!");
} else if (score >= 70) {
  console.log("C — មធ្យម");
} else if (score >= 60) {
  console.log("D — ជិតធ្លាក់");
} else {
  console.log("F — ធ្លាក់!");
}
// Output: "C — មធ្យម"
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Ternary Operator (ខ្លី)*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// condition ? valueIfTrue : valueIfFalse
let age    = 20;
let status = age >= 18 ? "ពេញវ័យ" : "មិនទាន់ពេញ";
console.log(status); // "ពេញវ័យ"

// ចំណែកដូចគ្នា if/else
let msg;
if (age >= 18) { msg = "ពេញវ័យ"; }
else           { msg = "មិនទាន់ពេញ"; }
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Switch Statement*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let day = "ចន្ទ";

switch (day) {
  case "ចន្ទ":
  case "អង្គារ":
  case "ពុធ":
  case "ព្រហស្បតិ៍":
  case "សុក្រ":
    console.log("ថ្ងៃធ្វើការ"); break;
  case "សៅរ៍":
  case "អាទិត្យ":
    console.log("ថ្ងៃឈប់"); break;
  default:
    console.log("មិនស្គាល់");
}
\`\`\`

👉 /js6 — Loops
` },

  6: {
    title: "JS មេរៀនទី ៦ – Loops", content: `
📘 *JS មេរៀនទី ៦ – Loops (រង្វិលជុំ)*

Loop ប្រើដើម្បីដំណើរការ code ម្ដងហើយម្ដងទៀត ដោយ មិន copy-paste!

━━━━━━━━━━━━━━━━━━━
📌 *for Loop*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// for (init; condition; update)
for (let i = 1; i <= 5; i++) {
  console.log("លើកទី " + i);
}
// លើកទី 1, 2, 3, 4, 5

// Countdown
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// 5, 4, 3, 2, 1
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *while Loop*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let count = 0;
while (count < 3) {
  console.log("count = " + count);
  count++;
}
// count = 0, count = 1, count = 2
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *for...of (Array Loop)*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let fruits = ["ស្វាយ", "ក្លែ", "ទទឹម"];
for (let fruit of fruits) {
  console.log(fruit);
}
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *break & continue*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue; // រំលង 3
  if (i === 7) break;    // ឈប់ពេល 7
  console.log(i);
}
// 1, 2, 4, 5, 6
\`\`\`

⚠️ *ប្រយ័ត្ន Infinite Loop!*
\`\`\`javascript
// ❌ loop នេះ មិនដែលឈប់ — Browser Crash!
while (true) {
  console.log("...");
}
\`\`\`

👉 /js7 — Functions
` },

  7: {
    title: "JS មេរៀនទី ៧ – Functions", content: `
📘 *JS មេរៀនទី ៧ – Functions (អនុគមន៍)*

Function ដូចជា "រូបមន្ត" ដែលអ្នករៀបចំម្ដង ហើយហៅប្រើបានច្រើនដង!

━━━━━━━━━━━━━━━━━━━
📌 *Function Declaration*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// រៀបចំ function
function greet(name) {
  return "សួស្ដី " + name + "!";
}

// ហៅប្រើ
console.log(greet("សុខា")); // សួស្ដី សុខា!
console.log(greet("ដារា")); // សួស្ដី ដារា!
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Function Expression*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // 8
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Arrow Function (ខ្លីបំផុត)*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// ធម្មតា
const multiply = (a, b) => {
  return a * b;
};

// ខ្លីបំផុត (return ដោយស្វ័យប្រវត្តិ)
const multiply = (a, b) => a * b;
const square   = n => n * n; // parameter ១ — ()) optional

console.log(multiply(4, 5)); // 20
console.log(square(6));      // 36
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Default Parameters & Rest*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Default value
function welcome(name = "Guest") {
  return "ស្វាគមន៍ " + name;
}
welcome("ចន្ទ");  // ស្វាគមន៍ ចន្ទ
welcome();         // ស្វាគមន៍ Guest

// Rest parameters (...) — ទទួល arguments ច្រើន
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
\`\`\`

👉 /js8 — Arrays
` },

  8: {
    title: "JS មេរៀនទី ៨ – Arrays", content: `
📘 *JS មេរៀនទី ៨ – Arrays (អារេ)*

Array ដូចជា "បញ្ជីទិន្នន័យ" — រក្សាទុក value ច្រើន ក្នុង variable តែ មួយ!

━━━━━━━━━━━━━━━━━━━
📌 *បង្កើត & Access*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let students = ["សុខា", "ដារា", "ចន្ទ", "ពេជ្រ"];
//  index:         0       1       2       3

console.log(students[0]);          // "សុខា"
console.log(students[2]);          // "ចន្ទ"
console.log(students.length);      // 4
console.log(students[students.length - 1]); // "ពេជ្រ" (ចុងក្រោយ)
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Methods សំខាន់ៗ*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let arr = ["a", "b", "c"];

arr.push("d");     // បន្ថែមចុងក្រោយ → ["a","b","c","d"]
arr.pop();         // លុបចុងក្រោយ → ["a","b","c"]
arr.unshift("z");  // បន្ថែមមុខ → ["z","a","b","c"]
arr.shift();       // លុបមុខ → ["a","b","c"]

// Find index
arr.indexOf("b");  // 1

// Join & Split
arr.join(", ");    // "a, b, c"
"a,b,c".split(","); // ["a","b","c"]

// Includes
arr.includes("b"); // true

// Slice (copy ផ្នែក)
arr.slice(0, 2);   // ["a","b"] (index 0 to 1)
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Higher-Order Methods*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let scores = [85, 60, 92, 45, 78];

// forEach — loop ធ្វើអ្វី
scores.forEach(s => console.log(s));

// map — ត្រឡប់ array ថ្មី
let doubled = scores.map(s => s * 2);
// [170, 120, 184, 90, 156]

// filter — ជ្រើស element ដែល true
let passed = scores.filter(s => s >= 60);
// [85, 60, 92, 78]

// find — ត្រឡប់ element ដំបូងដែល true
let first90 = scores.find(s => s >= 90);
// 92

// reduce — compress ទៅ value មួយ
let total = scores.reduce((sum, s) => sum + s, 0);
// 360

// sort
let sorted = scores.sort((a, b) => a - b);
// [45, 60, 78, 85, 92]
\`\`\`

👉 /js9 — Objects
` },

  9: {
    title: "JS មេរៀនទី ៩ – Objects", content: `
📘 *JS មេរៀនទី ៩ – Objects (វត្ថុ)*

Object ដូចជា "ទម្រង់" — រក្សាទុក property ច្រើន ដែលពាក់ព័ន្ធគ្នា ក្នុង variable តែ មួយ។

━━━━━━━━━━━━━━━━━━━
📌 *បង្កើត & Access*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const person = {
  name:     "សុខា",
  age:      22,
  city:     "ភ្នំពេញ",
  isStudent: true,
};

// Dot notation (ច្បាស់)
console.log(person.name);  // "សុខា"
console.log(person.age);   // 22

// Bracket notation (dynamic key)
let key = "city";
console.log(person[key]);  // "ភ្នំពេញ"
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *កែ / បន្ថែម / លុប*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
person.age   = 23;              // កែប្រែ
person.email = "s@mail.com";   // បន្ថែម property ថ្មី
delete person.isStudent;        // លុប property
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Methods ក្នុង Object*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const car = {
  brand: "Toyota",
  speed: 0,
  accelerate(amount) {
    this.speed += amount; // this = car
    return \`ល្បឿន: \${this.speed} km/h\`;
  },
  brake() {
    this.speed = 0;
    return "ឈប់ហើយ!";
  }
};

console.log(car.accelerate(60)); // ល្បឿន: 60 km/h
console.log(car.accelerate(40)); // ល្បឿន: 100 km/h
console.log(car.brake());        // ឈប់ហើយ!
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Destructuring & Spread*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Destructuring — ទាញ property ចេញ
const { name, age } = person;
console.log(name); // "សុខា"

// Spread — copy object
const updated = { ...person, age: 25 };
\`\`\`

👉 /js10 — DOM Basics
` },

  10: {
    title: "JS មេរៀនទី ១០ – DOM Basics", content: `
📘 *JS មេរៀនទី ១០ – DOM Basics*

DOM (Document Object Model) = JS "ឃើញ" HTML ជា object tree ហើយ អាចកែបាន!

━━━━━━━━━━━━━━━━━━━
📌 *ជ្រើស Elements*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// ជ្រើស ១ element
let title = document.getElementById("title");
let btn   = document.querySelector("#btn");     // CSS selector
let first = document.querySelector(".card");    // class ទីមួយ

// ជ្រើស ច្រើន elements
let items = document.querySelectorAll(".item"); // NodeList
let all   = document.getElementsByClassName("card");

console.log(items.length); // ចំនួន elements
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *ផ្លាស់ប្ដូរ Content & Style*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let h1 = document.querySelector("h1");

// ផ្លាស់ text
h1.textContent = "ចំណងជើងថ្មី";
h1.innerHTML   = "<span>ដិត</span>"; // HTML ខាងក្នុង

// ផ្លាស់ style
h1.style.color      = "red";
h1.style.fontSize   = "24px";
h1.style.display    = "none"; // លាក់

// Class
h1.classList.add("active");
h1.classList.remove("active");
h1.classList.toggle("active");
console.log(h1.classList.contains("active")); // true/false

// Attribute
let img = document.querySelector("img");
img.setAttribute("src", "new.jpg");
console.log(img.getAttribute("src"));
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *បង្កើត Elements ថ្មី*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
let li = document.createElement("li");
li.textContent = "item ថ្មី";
li.classList.add("list-item");

// Append ក្នុង parent
document.querySelector("ul").appendChild(li);

// Remove element
li.remove();
\`\`\`

👉 /js11 — DOM Events
` },

  11: {
    title: "JS មេរៀនទី ១១ – DOM Events", content: `
📘 *JS មេរៀនទី ១១ – DOM Events*

Event = ព្រឹត្តិការណ៍ ដែល JS អាច "ស្ដាប់" ហើយ ឆ្លើយតប!

━━━━━━━━━━━━━━━━━━━
📌 *addEventListener — វិធីល្អបំផុត*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// element.addEventListener(eventName, function)
let btn = document.querySelector("#btn");

btn.addEventListener("click", function() {
  alert("ចុចហើយ!");
});

// Arrow function
btn.addEventListener("click", () => {
  console.log("ចុច!");
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Mouse Events*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
btn.addEventListener("click",      () => {});
btn.addEventListener("dblclick",   () => {});
btn.addEventListener("mouseenter", () => {});
btn.addEventListener("mouseleave", () => {});
btn.addEventListener("mousemove",  (e) => {
  console.log(e.clientX, e.clientY); // position
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Keyboard & Form Events*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Keyboard
document.addEventListener("keydown", (e) => {
  console.log(e.key); // "Enter", "a", " " ...
  if (e.key === "Enter") console.log("Enter ចុច!");
});

// Input (live type)
let input = document.querySelector("#name");
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

// Form Submit
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // ការពារ page reload
  console.log("Form submitted!");
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Event Delegation*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// ជំនួសដាក់ event លើ parent ១ (efficient)
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Click li: " + e.target.textContent);
  }
});
\`\`\`

👉 /js12 — Async JavaScript
` },

  12: {
    title: "JS មេរៀនទី ១២ – Async JavaScript", content: `
📘 *JS មេរៀនទី ១២ – Async JavaScript*

Async = JS អាច "រង់ចាំ" ទិន្នន័យ ពី server ដោយ មិន freeze browser!

━━━━━━━━━━━━━━━━━━━
📌 *setTimeout & setInterval*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// setTimeout — run ម្ដង បន្ទាប់ delay
setTimeout(() => {
  console.log("3 វិនាទីក្រោយ");
}, 3000); // 3000ms = 3s

// setInterval — run រាល់ interval
let timer = setInterval(() => {
  console.log("Tick!");
}, 1000); // រាល់ 1 វិនាទី

// ឈប់ interval
setTimeout(() => clearInterval(timer), 5000);
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Promises*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Promise = promise ថានឹងផ្ដល់ result
const getData = new Promise((resolve, reject) => {
  const ok = true;
  if (ok) resolve("ទទួលបាន data!");
  else    reject("Error!");
});

getData
  .then(data  => console.log(data))  // ជោគជ័យ
  .catch(err  => console.log(err))   // fail
  .finally(() => console.log("Done!")); // តែងតែ run
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *async / await — ងាយជាង*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// async function ត្រឡប់ Promise
async function fetchUser() {
  try {
    const res  = await fetch("https://api.example.com/users/1");
    const user = await res.json();
    console.log(user.name);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

fetchUser();
\`\`\`

💡 *\`await\` ប្រើបានតែ ក្នុង \`async\` function!*

👉 /js13 — Fetch API
` },

  13: {
    title: "JS មេរៀនទី ១៣ – Fetch API", content: `
📘 *JS មេរៀនទី ១៣ – Fetch API*

Fetch API = វិធី JS ទំនើប ទាញ/ផ្ញើ data ពី server!

━━━━━━━━━━━━━━━━━━━
📌 *GET — ទាញ Data*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
async function getUsers() {
  const res   = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  users.forEach(u => console.log(u.name));
}
getUsers();
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *POST — ផ្ញើ Data*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
async function createUser() {
  const res = await fetch("https://api.example.com/users", {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify({ name: "សុខា", age: 22 }),
  });

  const data = await res.json();
  console.log("Created:", data);
}
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Error Handling*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
async function safeFetch(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("HTTP Error: " + res.status);
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err.message);
    return null;
  }
}
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *HTTP Status Codes*
━━━━━━━━━━━━━━━━━━━
\`\`\`
200 = OK (ជោគជ័យ)
201 = Created (បង្កើតហើយ)
400 = Bad Request (request ខុស)
401 = Unauthorized (មិនបាន login)
403 = Forbidden (គ្មានសិទ្ធិ)
404 = Not Found (រករំលង)
500 = Server Error (server ខូច)
\`\`\`

👉 /js14 — ES6+ Features
` },

  14: {
    title: "JS មេរៀនទី ១៤ – ES6+ Features", content: `
📘 *JS មេរៀនទី ១៤ – ES6+ Features*

ES6 (2015) នាំមកនូវ syntax ថ្មីៗ ដែលធ្វើ code ខ្លីជាង ស្អាតជាង!

━━━━━━━━━━━━━━━━━━━
📌 *Template Literals*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const name = "សុខា";
const age  = 22;

// ចាស់ (concatenation)
console.log("ឈ្មោះ: " + name + ", អាយុ: " + age);

// ES6 template literal
console.log(\`ឈ្មោះ: \${name}, អាយុ: \${age}\`);
console.log(\`\${name} + \${name} = \${name + name}\`);
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Destructuring*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Array destructuring
const [a, b, c] = [10, 20, 30];
console.log(a, b, c); // 10 20 30

// Object destructuring
const person = { name: "ចន្ទ", age: 25, city: "PP" };
const { name, age } = person;
console.log(name, age); // ចន្ទ 25

// Rename
const { name: fullName } = person;
console.log(fullName); // ចន្ទ

// Default value
const { country = "ខ្មែរ" } = person;
console.log(country); // ខ្មែរ
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Spread & Rest*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Spread — ដាក់ចេញ
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const all  = [...arr1, ...arr2]; // [1,2,3,4,5,6]

const obj1   = { a: 1 };
const merged = { ...obj1, b: 2 }; // { a:1, b:2 }

// Rest — ទទួល ច្រើន args
function sum(first, ...rest) {
  return rest.reduce((a, b) => a + b, first);
}
sum(1, 2, 3, 4); // 10
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Optional Chaining & Nullish*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const user = { profile: { name: "ចន្ទ" } };

// ?. = ប្រសិនបើ null/undefined → return undefined
console.log(user?.profile?.name);  // "ចន្ទ"
console.log(user?.address?.city);  // undefined (no error)

// ?? = Nullish coalescing
const name = user?.nickname ?? "Guest";
console.log(name); // "Guest"
\`\`\`

👉 /js15 — Modules & Classes
` },

  15: {
    title: "JS មេរៀនទី ១៥ – Modules & Classes", content: `
📘 *JS មេរៀនទី ១៥ – Modules & Classes*

━━━━━━━━━━━━━━━━━━━
📌 *ES Modules — ចែករំលែក code*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// math.js — export
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }

// main.js — import
import multiply, { PI, add } from "./math.js";
console.log(PI);          // 3.14159
console.log(add(2, 3));   // 5
console.log(multiply(4, 5)); // 20
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Classes — OOP*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
class Animal {
  constructor(name, sound) {
    this.name  = name;
    this.sound = sound;
  }

  speak() {
    return \`\${this.name} និយាយ: \${this.sound}!\`;
  }

  static create(name, sound) {
    return new Animal(name, sound);
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name) {
    super(name, "វូហ្វ"); // call parent
    this.tricks = [];
  }

  learn(trick) {
    this.tricks.push(trick);
    return \`\${this.name} ចេះ: \${trick}\`;
  }
}

const dog = new Dog("ប៊ូណា");
console.log(dog.speak());        // ប៊ូណា និយាយ: វូហ្វ!
console.log(dog.learn("Sit"));   // ប៊ូណា ចេះ: Sit
\`\`\`

🎊 *JS Basics Course ចប់ហើយ! (15 មេរៀន)*
👉 /jsquiz1 — ចាប់ផ្ដើម quiz ឬ /courses — courses ទាំងអស់
` },
};

// ══════════════════════════════════════════════════
//  COURSE 2 — jQuery  (/jq1 … /jq10)
// ══════════════════════════════════════════════════
const jqLessons = {

  1: {
    title: "jQuery មេរៀនទី ១ – jQuery គឺជាអ្វី?", content: `
📗 *jQuery មេរៀនទី ១ – jQuery គឺជាអ្វី?*

jQuery ជា JavaScript Library (ឆ្នាំ 2006) ដែលបង្កើតឡើង ដើម្បីធ្វើ code ខ្លី ស្អាត ហើយ ដំណើរការ browser ចាស់ទាំងអស់!

💡 *ហេតុអ្វី jQuery?*
\`\`\`javascript
// Vanilla JS (វែង)
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".btn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      this.style.display = "none";
    });
  });
});

// jQuery (ខ្លី)
$(function() {
  $(".btn").click(function() {
    $(this).hide();
  });
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *ដំឡើង jQuery*
━━━━━━━━━━━━━━━━━━━
\`\`\`html
<!-- CDN — ងាយបំផុត -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
\`\`\`
\`\`\`bash
# npm
npm install jquery
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *$ = jQuery*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// $ គឺជា shortcut របស់ jQuery
jQuery("p").hide();
$("p").hide();      // ដូចគ្នា — ខ្លីជាង

// Ready: រង់ចាំ DOM load ជាមុន
$(document).ready(function() {
  console.log("DOM ready!");
});

// ខ្លីជាង
$(function() {
  console.log("Ready!");
});
\`\`\`

👉 /jq2 — Selectors
` },

  2: {
    title: "jQuery មេរៀនទី ២ – Selectors", content: `
📗 *jQuery មេរៀនទី ២ – Selectors*

jQuery Selectors ប្រើ CSS syntax ជ្រើស HTML elements!

━━━━━━━━━━━━━━━━━━━
📌 *Basic Selectors*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("p")              // tag ទាំងអស់
$("#myId")          // id (unique)
$(".myClass")       // class
$("*")              // element ទាំងអស់
$("p, h1, h2")      // ច្រើន selectors
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Advanced Selectors*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("ul li")          // li ដែល nested ក្នុង ul
$("ul > li")        // li children ដោយផ្ទាល់
$("p + span")       // span ក្រោយ p
$("input[type=text]")  // input ដែល type=text
$("input[type!=checkbox]") // type មិនមែន checkbox

// Position filters
$("li:first")       // li ទីមួយ
$("li:last")        // li ចុងក្រោយ
$("li:eq(2)")       // li index ទី 2
$("li:even")        // index គូ (0,2,4...)
$("li:odd")         // index សេស (1,3,5...)
$("li:not(.done)")  // li ដែល គ្មាន class done

// Content filters
$("p:contains('JS')")  // p ដែលមាន text "JS"
$("p:empty")           // p ដែល empty
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Form Selectors*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$(":input")   // input, textarea, select, button
$(":text")    // type=text
$(":checkbox")
$(":radio")
$(":checked")
$(":disabled")
$(":enabled")
\`\`\`

👉 /jq3 — DOM Manipulation
` },

  3: {
    title: "jQuery មេរៀនទី ៣ – DOM Manipulation", content: `
📗 *jQuery មេរៀនទី ៣ – DOM Manipulation*

━━━━━━━━━━━━━━━━━━━
📌 *Get & Set Content*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// text()
$("#title").text();            // get text
$("#title").text("ចំណងជើងថ្មី"); // set text

// html()
$("#box").html();              // get HTML
$("#box").html("<b>ដិត</b>"); // set HTML

// val() — form inputs
$("#input").val();             // get value
$("#input").val("text ថ្មី");  // set value
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *CSS & Classes*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// css
$("p").css("color");           // get
$("p").css("color", "red");    // set
$("p").css({                   // set multiple
  color:     "blue",
  fontSize:  "18px",
  fontWeight: "bold"
});

// class
$("div").addClass("active");
$("div").removeClass("active");
$("div").toggleClass("active");
$("div").hasClass("active");   // true/false
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Attributes & Dimensions*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// attr
$("img").attr("src");          // get
$("img").attr("src", "new.jpg"); // set
$("a").attr({ href: "/", title: "Home" }); // multiple

// data
$("div").data("id");           // get data-id
$("div").data("id", 5);        // set data-id

// dimensions
$("div").width();
$("div").height();
$(window).width();
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Chaining — ធ្វើច្រើនការ ១ line*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("#box")
  .css("background", "yellow")
  .addClass("highlight")
  .text("ធ្វើបានហើយ!")
  .show()
  .delay(2000)
  .fadeOut();
\`\`\`

👉 /jq4 — Events
` },

  4: {
    title: "jQuery មេរៀនទី ៤ – Events", content: `
📗 *jQuery មេរៀនទី ៤ – Events*

━━━━━━━━━━━━━━━━━━━
📌 *Mouse Events*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("#btn").click(fn);
$("#btn").dblclick(fn);
$("#btn").hover(fnIn, fnOut); // mouseenter + mouseleave
$("#btn").mouseenter(fn);
$("#btn").mouseleave(fn);
$("#div").mousemove(function(e) {
  console.log(e.pageX, e.pageY);
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Keyboard Events*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$(document).keydown(function(e) {
  console.log("Key:", e.key);
  if (e.key === "Enter") console.log("Enter!");
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault(); // ការពារ Ctrl+S
    save();
  }
});

$("#search").keyup(function() {
  let val = $(this).val();
  filter(val);
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Form Events*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("form").submit(function(e) {
  e.preventDefault(); // ការពារ reload
  let name = $("#name").val().trim();
  if (!name) {
    alert("សូមបំពេញឈ្មោះ!");
    return;
  }
  console.log("Submit:", name);
});

$("select").change(function() {
  console.log("ជ្រើស:", $(this).val());
});

$("#email").focus(function()  { $(this).css("border","2px solid blue"); });
$("#email").blur(function()   { $(this).css("border",""); });
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *.on() — Best Practice*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// on() — ដំណើរការ dynamic elements ផង
$(document).on("click", ".delete-btn", function() {
  $(this).closest(".item").remove();
});

// off() — លុប event
$(document).off("click", ".delete-btn");

// one() — run ម្ដងតែ មួយ
$("#btn").one("click", function() {
  alert("Run ម្ដងតែ មួយ!");
});
\`\`\`

👉 /jq5 — Effects
` },

  5: {
    title: "jQuery មេរៀនទី ៥ – Effects & Animation", content: `
📗 *jQuery មេរៀនទី ៥ – Effects & Animation*

━━━━━━━━━━━━━━━━━━━
📌 *Show / Hide / Toggle*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// instant
$("#box").show();
$("#box").hide();
$("#box").toggle();

// animated (speed: ms ឬ "slow"/"fast")
$("#box").show("slow");
$("#box").hide(500);
$("#box").toggle(300);

// callback — run បន្ទាប់ animation ចប់
$("#box").hide(500, function() {
  console.log("Hidden!");
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Fade*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("#box").fadeIn(400);
$("#box").fadeOut(400);
$("#box").fadeToggle(400);
$("#box").fadeTo(600, 0.3);  // fade ទៅ opacity 0.3
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Slide*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("#menu").slideDown(300);
$("#menu").slideUp(300);
$("#menu").slideToggle(300);

// Accordion
$(".accordion-title").click(function() {
  $(".accordion-body").slideUp();     // បិទទាំងអស់
  $(this).next(".accordion-body").slideToggle(300);
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *animate() — Custom*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("#box").animate({
  width:   "+=100px",  // + 100px
  height:  "200px",
  opacity: 0.5,
  left:    "100px"     // ត្រូវ position: relative/absolute
}, 800, "swing", function() {
  console.log("Done!");
});

// Queue: run តាមលំដាប់
$("#ball")
  .animate({ left: "300px" }, 500)
  .animate({ top:  "200px" }, 500)
  .animate({ opacity: 0 },   400);

// stop() & delay()
$("#box").stop();              // ឈប់ animation
$("#box").stop(true, true);    // ឈប់ & ទៅ end state
$("#box").delay(1000).fadeIn();
\`\`\`

👉 /jq6 — AJAX
` },

  6: {
    title: "jQuery មេរៀនទី ៦ – AJAX", content: `
📗 *jQuery មេរៀនទី ៦ – AJAX*

AJAX = Asynchronous JavaScript And XML
= ទាញ/ផ្ញើ data ដោយ *មិន reload page*!

━━━━━━━━━━━━━━━━━━━
📌 *$.get() — ទាញ Data*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$.get("/api/users", function(data) {
  console.log(data);
  $.each(data, function(i, user) {
    $("#list").append("<li>" + user.name + "</li>");
  });
});

// with error handling
$.get("/api/users")
  .done(function(data)   { console.log(data); })
  .fail(function(err)    { console.log("Error:", err.status); })
  .always(function()     { console.log("Done!"); });
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *$.post() — ផ្ញើ Data*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$.post("/api/users",
  { name: "សុខា", email: "s@mail.com" },
  function(res) {
    alert(res.message);
  }
);
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *$.ajax() — Full Control*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$.ajax({
  url:      "/api/users",
  method:   "POST",
  headers:  { "Authorization": "Bearer " + token },
  data:     JSON.stringify({ name: "ចន្ទ" }),
  contentType: "application/json",
  success:  function(res)  { console.log(res); },
  error:    function(xhr)  { console.log(xhr.responseText); },
  complete: function()     { $("#loader").hide(); },
  beforeSend: function()   { $("#loader").show(); },
  timeout:  5000,
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *$.getJSON() & Global Hooks*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$.getJSON("/api/products", function(items) {
  $.each(items, function(i, item) {
    let card = \`<div class="card">
      <h3>\${item.name}</h3>
      <p>$\${item.price}</p>
    </div>\`;
    $("#products").append(card);
  });
});

// Global AJAX hooks
$(document)
  .ajaxStart(function() { $("#loader").show(); })
  .ajaxStop(function()  { $("#loader").hide(); });
\`\`\`

👉 /jq7 — DOM Traversal
` },

  7: {
    title: "jQuery មេរៀនទី ៧ – DOM Traversal", content: `
📗 *jQuery មេរៀនទី ៧ – DOM Traversal & Manipulation*

━━━━━━━━━━━━━━━━━━━
📌 *Traversal — រុករក DOM Tree*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// ឡើង (ancestors)
$("li").parent();               // parent ដោយផ្ទាល់
$("li").parents("ul");          // ancestors ទាំងអស់ ប្រភេទ ul
$("li").closest(".container");  // ancestor ទីដំបូង ដែល match

// ចុះ (descendants)
$("ul").children();             // children ដោយផ្ទាល់
$("ul").children("li.active");  // filter children
$("ul").find("li");             // descendants ទាំងអស់
$("ul").find("li.done");

// ជិតខាង (siblings)
$("li").siblings();             // siblings ទាំងអស់
$("li").next();                 // element បន្ទាប់
$("li").nextAll();
$("li").prev();
$("li").prevAll();
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Filtering*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("li").filter(".done");        // ជ្រើស match
$("li").not(".skip");           // exclude
$("li").first();
$("li").last();
$("li").eq(2);                  // index 2
$("li").slice(1, 4);            // index 1-3
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Add, Remove, Clone*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("#list").append("<li>ចុងក្រោយ</li>");
$("#list").prepend("<li>ខាងមុខ</li>");
$("<li>ថ្មី</li>").appendTo("#list");

$(".item").remove();    // លុប element + event handlers
$(".item").detach();    // លុប ប៉ុន្ដែ save event handlers
$(".item").empty();     // លុបខាងក្នុងតែប៉ុណ្ណោះ

let copy = $(".card").clone(true); // clone + events
copy.appendTo("#container");

// each() — loop
$("li").each(function(i, el) {
  console.log(i, $(el).text());
});
\`\`\`

👉 /jq8 — Plugins
` },

  8: {
    title: "jQuery មេរៀនទី ៨ – Plugins", content: `
📗 *jQuery មេរៀនទី ៨ – Plugins*

━━━━━━━━━━━━━━━━━━━
📌 *Select2 — Dropdown ស្អាត*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$('#province').select2({
  placeholder: "ជ្រើសខេត្ត...",
  allowClear:  true,
  width:       "100%"
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *DataTables — Table ស្ដើប*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$('#studentTable').DataTable({
  pageLength: 10,
  language: {
    search:     "ស្វែងរក:",
    lengthMenu: "បង្ហាញ _MENU_ ជួរ",
    info:       "ទំព័រ _PAGE_ / _PAGES_",
    paginate: { previous: "មុន", next: "បន្ទាប់" }
  },
  order: [[1, "asc"]] // sort column 1 ascending
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Custom Plugin*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// បង្កើត plugin ខ្លួនឯង
$.fn.highlight = function(color) {
  return this.each(function() {
    $(this).css("background", color || "yellow");
  });
};

// ប្រើ
$("p").highlight();
$("h1").highlight("lightblue");
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Best Practices*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Cache selectors
const $list = $("#myList");
$list.addClass("ready");
$list.find("li").text("item");

// Minimize DOM updates
let html = data.map(d => \`<li>\${d.name}</li>\`).join("");
$list.html(html); // update ម្ដងតែ ១!

// Namespace events
$(window).on("scroll.myFeature", fn);
$(window).off("scroll.myFeature");
\`\`\`

🎊 *jQuery Course ចប់ហើយ! (8 មេរៀន)*
👉 /courses — courses ផ្សេង
` },

  9: {
    title: "jQuery មេរៀនទី ៩ – Validation & Forms", content: `
📗 *jQuery មេរៀនទី ៩ – Form Validation*

━━━━━━━━━━━━━━━━━━━
📌 *Manual Validation*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    clearErrors();

    const name  = $("#name").val().trim();
    const email = $("#email").val().trim();
    const pass  = $("#password").val();
    let   valid = true;

    if (!name) {
      showError("#name", "សូមបំពេញឈ្មោះ!");
      valid = false;
    }

    if (!email || !email.includes("@")) {
      showError("#email", "Email មិនត្រឹមត្រូវ!");
      valid = false;
    }

    if (pass.length < 6) {
      showError("#password", "Password ត្រូវ >= 6 តួ!");
      valid = false;
    }

    if (valid) submitForm({ name, email, pass });
  });

  function showError(selector, msg) {
    $(selector).addClass("error")
      .after(\`<span class="err-msg">\${msg}</span>\`);
  }

  function clearErrors() {
    $(".error").removeClass("error");
    $(".err-msg").remove();
  }

  function submitForm(data) {
    $.post("/api/register", data, function(res) {
      alert("ចុះឈ្មោះជោគជ័យ!");
    });
  }
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Live Validation*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$("#email").on("input", function() {
  const val = $(this).val();
  const ok  = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  $(this)
    .toggleClass("valid",   ok)
    .toggleClass("invalid", !ok);
});
\`\`\`

👉 /jq10 — UI Components
` },

  10: {
    title: "jQuery មេរៀនទី ១០ – UI Components", content: `
📗 *jQuery មេរៀនទី ១០ – UI Components*

━━━━━━━━━━━━━━━━━━━
📌 *Modal Popup*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Open modal
$("#openModal").click(function() {
  $("#modal").fadeIn(300);
  $("body").addClass("overflow-hidden");
});

// Close
$("#closeModal, #overlay").click(function() {
  $("#modal").fadeOut(200);
  $("body").removeClass("overflow-hidden");
});

// Close on Escape key
$(document).keydown(function(e) {
  if (e.key === "Escape") $("#modal").fadeOut(200);
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Tabs*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
$(".tab").click(function() {
  let target = $(this).data("target"); // data-target="#tab1"

  $(".tab").removeClass("active");
  $(".tab-content").hide();

  $(this).addClass("active");
  $(target).fadeIn(200);
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Toast Notification*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
function showToast(msg, type = "success") {
  let toast = $(\`
    <div class="toast toast-\${type}">
      \${msg}
    </div>
  \`);

  $("body").append(toast);
  toast.fadeIn(200)
       .delay(3000)
       .fadeOut(300, function() { $(this).remove(); });
}

showToast("រក្សាទុកបានហើយ!");
showToast("Error!", "error");
\`\`\`

🎊 *jQuery Course ចប់ហើយ! (10 មេរៀន)*
👉 /courses — courses ផ្សេង
` },
};

// ══════════════════════════════════════════════════
//  COURSE 3 — React-Express  (/re1 … /re6)
// ══════════════════════════════════════════════════
const reLessons = {
  1: {
    title: "React-Express មេរៀនទី ១ – Overview", content: `
📘 *React-Express មេរៀនទី ១ – Overview*

🌐 *React* = Frontend (អ្វីដែលអ្នកប្រើ ឃើញ)
🚂 *Express* = Backend (server + database)

━━━━━━━━━━━━━━━━━━━
📌 *ទំនាក់ទំនង React ↔ Express*
━━━━━━━━━━━━━━━━━━━
\`\`\`
Browser
  ⚛ React App (port 3000)
      |  HTTP Request (fetch/axios)
      ↓
  🚂 Express API (port 5000)
      |  Query Database
      ↓
  💾 Database (MongoDB/MySQL)
      |
      ↑  JSON Response
  ⚛ React ទទួល → update UI
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *CORS — ចាំបាច់!*
━━━━━━━━━━━━━━━━━━━
React (3000) + Express (5000) = port ខុស
Browser block request ដោយ default!

\`\`\`javascript
// Express server.js
const cors = require("cors");
app.use(cors());              // allow all origins

// ឬ restrict ទៅ React origin
app.use(cors({ origin: "http://localhost:3000" }));
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Project Setup*
━━━━━━━━━━━━━━━━━━━
\`\`\`bash
# React (frontend)
npx create-react-app my-app
cd my-app && npm start  # port 3000

# Express (backend)
mkdir api && cd api
npm init -y
npm install express cors dotenv
node server.js          # port 5000
\`\`\`

👉 /re2 — HTTP Methods
` },
  2: {
    title: "React-Express មេរៀនទី ២ – HTTP Methods", content: `
📘 *React-Express មេរៀនទី ២ – HTTP Methods*

\`\`\`javascript
// GET — ទាញ data
const res   = await fetch("/api/users");
const users = await res.json();

// POST — បង្កើត data ថ្មី
const res = await fetch("/api/users", {
  method:  "POST",
  headers: { "Content-Type": "application/json" },
  body:    JSON.stringify({ name: "Alice" }),
});

// PUT — ជំនួស data ទាំងមូល
const res = await fetch("/api/users/1", {
  method:  "PUT",
  headers: { "Content-Type": "application/json" },
  body:    JSON.stringify({ name: "Alice B.", age: 25 }),
});

// PATCH — update ខ្លះ
const res = await fetch("/api/users/1", {
  method:  "PATCH",
  headers: { "Content-Type": "application/json" },
  body:    JSON.stringify({ age: 26 }),
});

// DELETE
const res = await fetch("/api/users/1", { method: "DELETE" });
\`\`\`

💡 *Rule of thumb:*
GET=Read | POST=Create | PUT/PATCH=Update | DELETE=Delete

👉 /re3 — GET Request
` },
  3: {
    title: "React-Express មេរៀនទី ៣ – GET Request", content: `
📘 *React-Express មេរៀនទី ៣ – GET Request*

⚛ *React — UserList.jsx:*
\`\`\`javascript
import { useState, useEffect } from "react";

function UserList() {
  const [users,   setUsers]   = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    // useEffect ជាមួយ [] = run ម្ដង ពេល mount
    fetch("http://localhost:5000/api/users")
      .then(res => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err  => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p style={{color:"red"}}>{error}</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
\`\`\`

🚂 *Express — server.js:*
\`\`\`javascript
const express = require("express");
const cors    = require("cors");
const app     = express();

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(5000, () => console.log("Server OK!"));
\`\`\`

👉 /re4 — POST Request
` },
  4: {
    title: "React-Express មេរៀនទី ៤ – POST Request", content: `
📘 *React-Express មេរៀនទី ៤ – POST Request*

⚛ *React — AddUser.jsx:*
\`\`\`javascript
function AddUser({ onAdded }) {
  const [name,   setName]   = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ name }),
      });

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      setStatus("Created: " + data.user.name);
      setName("");
      onAdded?.(data.user); // notify parent

    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Add</button>
      {status && <p>{status}</p>}
    </form>
  );
}
\`\`\`

🚂 *Express:*
\`\`\`javascript
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ message: "Name required!" });
  }

  const user = { id: Date.now(), name: name.trim() };
  users.push(user);
  res.status(201).json({ message: "Created!", user });
});
\`\`\`

👉 /re5 — DELETE & Error Handling
` },
  5: {
    title: "React-Express មេរៀនទី ៥ – DELETE & Error", content: `
📘 *React-Express មេរៀនទី ៥ – DELETE & Error*

⚛ *React — Delete:*
\`\`\`javascript
const deleteUser = async (id) => {
  if (!window.confirm("Delete?")) return;

  const res = await fetch(\`/api/users/\${id}\`, {
    method: "DELETE",
  });

  if (res.ok) {
    setUsers(prev => prev.filter(u => u.id !== id));
  }
};

return (
  <ul>
    {users.map(u => (
      <li key={u.id}>
        {u.name}
        <button onClick={() => deleteUser(u.id)}>Delete</button>
      </li>
    ))}
  </ul>
);
\`\`\`

🚂 *Express DELETE:*
\`\`\`javascript
app.delete("/api/users/:id", (req, res) => {
  const id  = parseInt(req.params.id);
  const idx = users.findIndex(u => u.id === id);

  if (idx === -1) {
    return res.status(404).json({ message: "Not found!" });
  }

  users.splice(idx, 1);
  res.json({ message: "Deleted!" });
});

// Global error handler (ចុងក្រោយ)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error!" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});
\`\`\`

🎊 *React-Express Course ចប់ហើយ! (5 មេរៀន)*
👉 /courses — courses ផ្សេង
` },
  6: {
    title: "React-Express មេរៀនទី ៦ – Axios & State", content: `
📘 *React-Express មេរៀនទី ៦ – Axios & State Management*

━━━━━━━━━━━━━━━━━━━
📌 *Axios — ល្អជាង fetch*
━━━━━━━━━━━━━━━━━━━
\`\`\`bash
npm install axios
\`\`\`
\`\`\`javascript
import axios from "axios";

// axios base URL
const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// GET
const res = await api.get("/users");
console.log(res.data); // auto-parse JSON!

// POST
const res = await api.post("/users", { name: "ចន្ទ" });

// DELETE
await api.delete(\`/users/\${id}\`);

// Interceptor — add token ដោយស្វ័យប្រវត្តិ
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = "Bearer " + token;
  return config;
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Custom Hook*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
function useFetch(url) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    api.get(url)
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// ប្រើ
function UserList() {
  const { data: users, loading } = useFetch("/users");
  if (loading) return <p>Loading...</p>;
  return <ul>{users?.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
\`\`\`

🎊 *React-Express Course ចប់ (6 មេរៀន)*
👉 /courses
` },
};

// ══════════════════════════════════════════════════
//  COURSE 4 — Express.js  (/ex1 … /ex8)
// ══════════════════════════════════════════════════
const exLessons = {
  1: {
    title: "Express មេរៀនទី ១ – Setup", content: `
📙 *Express មេរៀនទី ១ – Project Setup*

Express.js = Web Framework លើ Node.js ងាយ លឿន!

━━━━━━━━━━━━━━━━━━━
📌 *ជំហានបង្កើត Project*
━━━━━━━━━━━━━━━━━━━
\`\`\`bash
mkdir my-api && cd my-api
npm init -y
npm install express dotenv cors morgan
npm install nodemon -D
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Folder Structure*
━━━━━━━━━━━━━━━━━━━
\`\`\`
my-api/
├── src/
│   ├── routes/
│   │   └── users.js
│   ├── controllers/
│   │   └── userController.js
│   ├── middleware/
│   │   └── auth.js
│   └── models/
│       └── User.js
├── .env
├── .gitignore
└── server.js
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *server.js*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
require("dotenv").config();
const express = require("express");
const cors    = require("cors");
const morgan  = require("morgan");

const app  = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // log requests

// Routes
app.use("/api/users", require("./src/routes/users"));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () =>
  console.log(\`Server running at http://localhost:\${PORT}\`)
);
\`\`\`

\`\`\`bash
npm run dev  # Start with nodemon
\`\`\`

👉 /ex2 — Routing
` },
  2: {
    title: "Express មេរៀនទី ២ – Routing", content: `
📙 *Express មេរៀនទី ២ – Routing*

━━━━━━━━━━━━━━━━━━━
📌 *Basic Routes*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// GET — list all
app.get("/api/users", async (req, res) => {
  res.json({ users: await User.find() });
});

// GET — one by ID
app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "Not found" });
  res.json(user);
});

// POST — create
app.post("/api/users", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

// PUT — update
app.put("/api/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id, req.body, { new: true }
  );
  res.json(user);
});

// DELETE
app.delete("/api/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *req Object*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// URL: GET /api/users/42?page=2&limit=10
req.params.id    // "42"    — URL segments
req.query.page   // "2"     — query string
req.query.limit  // "10"

// Body (POST/PUT/PATCH)
req.body.name    // "សុខា"  — JSON body
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Router File*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// src/routes/users.js
const router = require("express").Router();
const ctrl   = require("../controllers/userController");

router.get("/",      ctrl.getAll);
router.get("/:id",   ctrl.getOne);
router.post("/",     ctrl.create);
router.put("/:id",   ctrl.update);
router.delete("/:id",ctrl.remove);

module.exports = router;

// server.js
app.use("/api/users", require("./src/routes/users"));
\`\`\`

👉 /ex3 — Middleware
` },
  3: {
    title: "Express មេរៀនទី ៣ – Middleware", content: `
📙 *Express មេរៀនទី ៣ – Middleware*

Middleware = function ដំណើរការ *ពីមុន route handler*
\`\`\`
Request → MW1 → MW2 → Route Handler → Response
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Custom Middleware*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Logger
const logger = (req, res, next) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next(); // ចាំបាច់! ឬ request ស្ទះ
};

app.use(logger); // apply globally
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Auth Middleware*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const jwt  = require("jsonwebtoken");

const auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "Token ខ្វះ!" });

  const token = header.split(" ")[1]; // "Bearer <token>"
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Token ខុស!" });
  }
};

// ប្រើ middleware លើ route ជាក់លាក់
router.get("/profile", auth, (req, res) => {
  res.json({ user: req.user });
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Validation Middleware*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name)  return res.status(400).json({ message: "Name required" });
  if (!email) return res.status(400).json({ message: "Email required" });
  next();
};

router.post("/", validateUser, createUser);
\`\`\`

👉 /ex4 — MongoDB
` },
  4: {
    title: "Express មេរៀនទី ៤ – MongoDB + Mongoose", content: `
📙 *Express មេរៀនទី ៤ – MongoDB + Mongoose*

\`\`\`bash
npm install mongoose
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Connect*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(()  => console.log("MongoDB Connected!"))
  .catch(err => console.error("DB Error:", err));
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Schema & Model*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// models/User.js
const userSchema = new mongoose.Schema({
  name: {
    type:     String,
    required: [true, "Name ចាំបាច់"],
    trim:     true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type:     String,
    required: true,
    unique:   true,
    lowercase: true,
  },
  role: {
    type:    String,
    enum:    ["user", "admin"],
    default: "user",
  },
  createdAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *CRUD + Query*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Create
const user = await User.create({ name, email });

// Read
const users = await User.find({ role: "user" })
  .select("name email")   // fields
  .sort({ createdAt: -1}) // newest first
  .limit(10)
  .skip(0);               // pagination

const user = await User.findById(id);
const user = await User.findOne({ email });

// Update
const updated = await User.findByIdAndUpdate(
  id, { name: "ថ្មី" }, { new: true, runValidators: true }
);

// Delete
await User.findByIdAndDelete(id);
const count = await User.countDocuments();
\`\`\`

👉 /ex5 — JWT Auth
` },
  5: {
    title: "Express មេរៀនទី ៥ – JWT Authentication", content: `
📙 *Express មេរៀនទី ៥ – JWT Authentication*

\`\`\`bash
npm install jsonwebtoken bcryptjs
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Register*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const bcrypt = require("bcryptjs");
const jwt    = require("jsonwebtoken");

app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400)
      .json({ message: "Email ប្រើហើយ!" });

    const hashed = await bcrypt.hash(password, 12);
    const user   = await User.create({ name, email, password: hashed });

    res.status(201).json({ message: "ចុះឈ្មោះជោគជ័យ!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Login*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404)
    .json({ message: "Email មិនមាន!" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401)
    .json({ message: "Password ខុស!" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    token,
    user: { id: user._id, name: user.name, email: user.email },
  });
});
\`\`\`

💡 *ហេតុអ្វី Hash Password?*
ប្រសិនបើ DB ត្រូវ hack → hacker ឃើញ hash ប៉ុណ្ណោះ មិនឃើញ password ពិត!

👉 /ex6 — File Upload
` },
  6: {
    title: "Express មេរៀនទី ៦ – File Upload", content: `
📙 *Express មេរៀនទី ៦ – File Upload*

\`\`\`bash
npm install multer
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Setup Multer*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const multer = require("multer");
const path   = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save folder
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.random().toString(36).slice(2);
    cb(null, unique + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error("រូបភាពតែប៉ុណ្ណោះ!"));
  },
});
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Upload Routes*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
// Single file
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400)
    .json({ message: "File ខ្វះ!" });

  res.json({
    message: "Upload ជោគជ័យ!",
    filename: req.file.filename,
    url: \`/uploads/\${req.file.filename}\`,
  });
});

// Multiple files
app.post("/api/upload/many", upload.array("images", 5), (req, res) => {
  const urls = req.files.map(f => \`/uploads/\${f.filename}\`);
  res.json({ urls });
});

// Serve uploaded files
app.use("/uploads", express.static("uploads"));
\`\`\`

👉 /ex7 — Rate Limiting & Security
` },
  7: {
    title: "Express មេរៀនទី ៧ – Security", content: `
📙 *Express មេរៀនទី ៧ – Security & Rate Limiting*

\`\`\`bash
npm install helmet express-rate-limit express-mongo-sanitize
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Helmet — HTTP Security Headers*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const helmet = require("helmet");
app.use(helmet()); // ដាក់ security headers ដោយស្វ័យប្រវត្តិ
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Rate Limiting — ការពារ spam*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const rateLimit = require("express-rate-limit");

// Global limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max:      100,             // 100 requests / window
  message:  "Too many requests! Try again later.",
});
app.use(limiter);

// Strict limiter for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max:      5, // 5 login attempts only
});
app.use("/api/auth", authLimiter);
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Input Sanitization*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const mongoSanitize = require("express-mongo-sanitize");
app.use(mongoSanitize()); // ការពារ NoSQL injection

// XSS Prevention — sanitize HTML
const xss = require("xss");
const clean = xss(req.body.comment); // clean HTML tags
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *.env Security*
━━━━━━━━━━━━━━━━━━━
\`\`\`
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=very_long_random_string_here
NODE_ENV=production
\`\`\`
\`\`\`
# .gitignore
.env
node_modules/
uploads/
\`\`\`

👉 /ex8 — Full Project
` },
  8: {
    title: "Express មេរៀនទី ៨ – Full REST API", content: `
📙 *Express មេរៀនទី ៨ – Full REST API Project*

🏗️ *Project: Todo API with Auth*

━━━━━━━━━━━━━━━━━━━
📌 *Todo Model*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const todoSchema = new mongoose.Schema({
  title:     { type: String, required: true, trim: true },
  done:      { type: Boolean, default: false },
  priority:  { type: String, enum: ["low","medium","high"], default: "medium" },
  user:      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *Todo Routes (Protected)*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
const router = require("express").Router();
const auth   = require("../middleware/auth");
const Todo   = require("../models/Todo");

// GET all todos
router.get("/", auth, async (req, res) => {
  const todos = await Todo
    .find({ user: req.user.id })
    .sort({ createdAt: -1 });
  res.json(todos);
});

// POST create
router.post("/", auth, async (req, res) => {
  const todo = await Todo.create({
    title:    req.body.title,
    priority: req.body.priority,
    user:     req.user.id,
  });
  res.status(201).json(todo);
});

// PATCH toggle done
router.patch("/:id/toggle", auth, async (req, res) => {
  const todo   = await Todo.findOne({ _id: req.params.id, user: req.user.id });
  if (!todo) return res.status(404).json({ message: "Not found" });
  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
  await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ message: "Deleted" });
});

module.exports = router;
\`\`\`

━━━━━━━━━━━━━━━━━━━
📌 *server.js (Final)*
━━━━━━━━━━━━━━━━━━━
\`\`\`javascript
require("dotenv").config();
const express   = require("express");
const mongoose  = require("mongoose");
const cors      = require("cors");
const helmet    = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 15*60*1000, max: 100 }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected!"));

app.use("/api/auth",  require("./src/routes/auth"));
app.use("/api/todos", require("./src/routes/todos"));

app.listen(process.env.PORT || 5000);
\`\`\`

🎊 *Express.js Course ចប់ហើយ! (8 មេរៀន)*
👉 /certificate — ទទួល Certificate
` },
};

// ══════════════════════════════════════════════════
//  QUIZZES — one per lesson, harder difficulty
// ══════════════════════════════════════════════════

const jsQuizzes = {
  1: {
    q: "🧩 JavaScript ដំណើរការនៅឯណា?",
    opts: ["A. Server តែប៉ុណ្ណោះ", "B. Browser (ដោយ មិនចាំបាច់ Install)", "C. Database", "D. Operating System"],
    ans: "B", ok: "✅ ត្រូវ! JS ដំណើរការក្នុង Browser ដោយ ស្វ័យប្រវត្តិ!", no: "❌ B ត្រូវ! JS run នៅ Browser មិន install!"
  },
  2: {
    q: "🧩 `const PI = 3.14` — ប្រើ `const` ព្រោះ?",
    opts: ["A. PI = number", "B. PI fix មិនប្ដូរ ដូច្នេះ const", "C. const ប្ដូរបានបន្ទាប់", "D. const = var"],
    ans: "B", ok: "✅ ត្រូវ! const ប្រើពេល value fix មិនប្ដូរ!", no: "❌ B ត្រូវ! const = lock value!"
  },
  3: {
    q: "🧩 `typeof null` ត្រឡប់អ្វី?\n(hint: JS bug ល្បីល្បាញ!)",
    opts: ["A. \"null\"", "B. \"undefined\"", "C. \"object\"", "D. \"boolean\""],
    ans: "C", ok: "✅ ត្រូវ! typeof null = \"object\" — JS bug ចាស់! null ពិត = primitive!", no: "❌ C ត្រូវ! typeof null = \"object\" — JS historic bug!"
  },
  4: {
    q: "🧩 `10 % 3` = ?",
    opts: ["A. 3", "B. 0", "C. 3.3", "D. 1"],
    ans: "D", ok: "✅ ត្រូវ! % = modulo (នៅសល់)! 10 ÷ 3 = 3 នៅសល់ 1", no: "❌ D ត្រូវ! % = remainder! 10÷3 = 3 remainder 1!"
  },
  5: {
    q: "🧩 `20 >= 20 ? 'A' : 'B'` = ?",
    opts: ["A. 'B'", "B. false", "C. 'A'", "D. 20"],
    ans: "C", ok: "✅ ត្រូវ! 20 >= 20 = true → 'A'!", no: "❌ C ត្រូវ! 20>=20 true → ternary ត្រឡប់ 'A'!"
  },
  6: {
    q: "🧩 `for (let i=1; i<=5; i++)` — loop ប៉ុន្មានដង?",
    opts: ["A. 4", "B. 6", "C. 5", "D. 1"],
    ans: "C", ok: "✅ ត្រូវ! i=1,2,3,4,5 (i<=5) = 5 ដង!", no: "❌ C ត្រូវ! i: 1→2→3→4→5 = 5 ដង!"
  },
  7: {
    q: "🧩 Code ខាងក្រោម output អ្វី?\n`const fn = n => n * n;`\n`console.log(fn(7));`",
    opts: ["A. 14", "B. 7", "C. 77", "D. 49"],
    ans: "D", ok: "✅ ត្រូវ! n*n = 7*7 = 49!", no: "❌ D ត្រូវ! Arrow fn n => n*n, fn(7) = 7*7 = 49!"
  },
  8: {
    q: "🧩 `[5,10,15].filter(n => n > 8)` = ?",
    opts: ["A. [5]", "B. [10,15]", "C. [5,10]", "D. [15]"],
    ans: "B", ok: "✅ ត្រូវ! filter ជ្រើស n > 8 → [10, 15]!", no: "❌ B ត្រូវ! filter(n>8) → 10,15 pass!"
  },
  9: {
    q: "🧩 `const p={name:'ចន្ទ'}; p.age=25;` — Error ឬ?",
    opts: ["A. Error! const មិន add property", "B. OK — const lock binding ប៉ុណ្ណោះ property add ​បាន", "C. Error ប្រភេទ undefined", "D. p ក្លាយ undefined"],
    ans: "B", ok: "✅ ត្រូវ! const lock variable binding ប៉ុណ្ណោះ! Object properties ចូរ modify/add បាន!", no: "❌ B ត្រូវ! const = lock reference ប៉ុណ្ណោះ, properties ផ្ដូរបាន!"
  },
  10: {
    q: "🧩 DOM Selector ណាដែល ត្រឡប់ NodeList?",
    opts: ["A. getElementById", "B. querySelector", "C. querySelectorAll", "D. getElementsByTagName"],
    ans: "C", ok: "✅ ត្រូវ! querySelectorAll ត្រឡប់ NodeList (collection)!", no: "❌ C ត្រូវ! querySelectorAll = NodeList!"
  },
  11: {
    q: "🧩 `e.preventDefault()` ក្នុង submit handler ធ្វើអ្វី?",
    opts: ["A. Delete form", "B. Clear inputs", "C. ការពារ browser reload page", "D. Validate form"],
    ans: "C", ok: "✅ ត្រូវ! preventDefault = ការពារ default browser behavior (reload)!", no: "❌ C ត្រូវ! preventDefault = stop default page reload!"
  },
  12: {
    q: "🧩 `await` ប្រើបានតែ?",
    opts: ["A. ក្នុង loop", "B. ក្នុង async function", "C. ក្នុង class", "D. ក្រៅ function"],
    ans: "B", ok: "✅ ត្រូវ! await ប្រើបានតែ ក្នុង async function!", no: "❌ B ត្រូវ! await ត្រូវការ async function!"
  },
  13: {
    q: "🧩 `fetch` ត្រឡប់?",
    opts: ["A. JSON ភ្លាម", "B. String", "C. Promise", "D. Number"],
    ans: "C", ok: "✅ ត្រូវ! fetch ត្រឡប់ Promise → ត្រូវ await ឬ .then()!", no: "❌ C ត្រូវ! fetch returns Promise!"
  },
  14: {
    q: "🧩 Spread operator `...` ប្រើដើម្បី?",
    opts: ["A. Loop array", "B. Expand/copy array or object", "C. Delete items", "D. Filter items"],
    ans: "B", ok: "✅ ត្រូវ! ... = spread/copy contents of array or object!", no: "❌ B ត្រូវ! ... spread = expand/copy!"
  },
  15: {
    q: "🧩 Code ខាងក្រោម output អ្វី?\n`class A { greet() { return 'Hi'; } }`\n`class B extends A {}`\n`new B().greet()`",
    opts: ["A. Error", "B. undefined", "C. 'Hi'", "D. 'B'"],
    ans: "C", ok: "✅ ត្រូវ! B extends A, inherit method greet() → 'Hi'!", no: "❌ C ត្រូវ! B inherits greet from A!"
  },
};

const jqQuizzes = {
  1: {
    q: "🧩 jQuery CDN ដាក់ក្នុង HTML នៅ?",
    opts: ["A. <head>", "B. <body> ចុងក្រោយ (ល្អបំផុត)", "C. <title>", "D. <meta>"],
    ans: "B", ok: "✅ ត្រូវ! script ចុងក្រោយ body = DOM load ហើយ ទើប JS run!", no: "❌ B ត្រូវ! script ក្រោម body = DOM ready!"
  },
  2: {
    q: "🧩 `$('ul > li')` ជ្រើស?",
    opts: ["A. li ទាំងអស់ doc", "B. li ដែល nested ក្នុង ul ណាក៏បាន", "C. li ជា direct children របស់ ul", "D. ul ទីមួយ"],
    ans: "C", ok: "✅ ត្រូវ! > = direct children! `ul li` = all descendants, `ul > li` = direct only!", no: "❌ C ត្រូវ! > selector = direct children only!"
  },
  3: {
    q: "🧩 `.html()` vs `.text()` ខុស?",
    opts: ["A. ដូចគ្នា", "B. html() get/set HTML, text() get/set plain text (no HTML tags)", "C. text() លឿនជាង", "D. html() safe ជាង"],
    ans: "B", ok: "✅ ត្រូវ! html() = set raw HTML, text() = plain text (tags escaped)!", no: "❌ B ត្រូវ! html()=HTML, text()=plain text!"
  },
  4: {
    q: "🧩 `.one()` vs `.click()` ខុស?",
    opts: ["A. ដូចគ្នា", "B. .one() handler run តែ ១ ដង", "C. .one() លឿនជាង", "D. .one() = off()"],
    ans: "B", ok: "✅ ត្រូវ! .one() = event handler run ១ ដង ហើយ remove ខ្លួនឯង!", no: "❌ B ត្រូវ! .one() = run once only!"
  },
  5: {
    q: "🧩 Animation queue ក្នុង jQuery ដំណើរការម៉ោ?",
    opts: ["A. Animations run parallel", "B. Animations run ១ ម្ដង (queue)", "C. Random order", "D. Last animation first"],
    ans: "B", ok: "✅ ត្រូវ! jQuery animate queue = run sequence, ១ ក្រោយ ១!", no: "❌ B ត្រូវ! jQuery animations queue = sequential!"
  },
  6: {
    q: "🧩 `$.ajax()` vs `$.get()` — ខុស?",
    opts: ["A. $.get() POST ផង", "B. ដូចគ្នា", "C. $.ajax() = full config (headers, timeout, method), $.get() = shortcut GET", "D. $.ajax() GET only"],
    ans: "C", ok: "✅ ត្រូវ! $.ajax() = full control! $.get/$.post = convenient shortcuts!", no: "❌ C ត្រូវ! $.ajax() = full config, $.get() = shortcut!"
  },
  7: {
    q: "🧩 `.remove()` vs `.detach()` ខុស?",
    opts: ["A. ដូចគ្នា", "B. detach() save event handlers, remove() delete events ផង", "C. remove() save events", "D. detach() = empty()"],
    ans: "B", ok: "✅ ត្រូវ! detach() = save events (re-attach later), remove() = delete all!", no: "❌ B ត្រូវ! detach = keep events, remove = delete all!"
  },
  8: {
    q: "🧩 `$(this)` ក្នុង `$('li').click(function(){...})` = ?",
    opts: ["A. window", "B. document", "C. ជ្រើស li ទាំងអស់", "D. li element ដែល click"],
    ans: "D", ok: "✅ ត្រូវ! this ក្នុង handler = element ដែល trigger event (clicked li)!", no: "❌ D ត្រូវ! this = element ដែល trigger event!"
  },
  9: {
    q: "🧩 Live validation ប្រើ event ណា?",
    opts: ["A. submit", "B. click", "C. input (fire ពេល user type)", "D. change (fire ក្រោយ blur)"],
    ans: "C", ok: "✅ ត្រូវ! 'input' event = fire រាល់ character type = live validation!", no: "❌ C ត្រូវ! 'input' = live, 'change' = after blur!"
  },
  10: {
    q: "🧩 `$.fn.myPlugin = function() {...}` ធ្វើអ្វី?",
    opts: ["A. Override jQuery", "B. បង្កើត jQuery plugin custom", "C. Delete jQuery", "D. Add global function"],
    ans: "B", ok: "✅ ត្រូវ! $.fn = jQuery prototype = extend with custom plugin!", no: "❌ B ត្រូវ! $.fn.xxx = custom jQuery plugin!"
  },
};

const reQuizzes = {
  1: {
    q: "🧩 React ប្រើ port ណា? Express ប្រើ port ណា?",
    opts: ["A. React:8080 / Express:3000", "B. React:3000 / Express:5000", "C. ២ port 3000", "D. React:5000 / Express:3000"],
    ans: "B", ok: "✅ ត្រូវ! React default port 3000, Express default 5000!", no: "❌ B ត្រូវ! React=3000, Express=5000!"
  },
  2: {
    q: "🧩 PATCH vs PUT ខុស?",
    opts: ["A. ដូចគ្នា", "B. PUT = replace ទាំងអស់, PATCH = update fields ខ្លះ", "C. PUT = delete", "D. PATCH = create"],
    ans: "B", ok: "✅ ត្រូវ! PUT = replace whole resource, PATCH = partial update!", no: "❌ B ត្រូវ! PUT=full replace, PATCH=partial!"
  },
  3: {
    q: "🧩 `useEffect(fn, [])` — `[]` មានន័យ?",
    opts: ["A. Run រាល់ render", "B. Run ២ ដង", "C. Run ម្ដង ពេល component mount", "D. Never run"],
    ans: "C", ok: "✅ ត្រូវ! [] = empty deps = run once on mount (like componentDidMount)!", no: "❌ C ត្រូវ! [] = run once on mount!"
  },
  4: {
    q: "🧩 `Content-Type: application/json` header — ហេតុអ្វីចាំបាច់ POST?",
    opts: ["A. For security", "B. ប្រាប់ server body ជា JSON format", "C. Required by browser", "D. Speed up request"],
    ans: "B", ok: "✅ ត្រូវ! Content-Type = ប្រាប់ server ថា body format ជា JSON!", no: "❌ B ត្រូវ! Content-Type tells server the body format!"
  },
  5: {
    q: "🧩 Error handler ក្នុង Express ត្រូវ params ប៉ុន្មាន?",
    opts: ["A. 2 (req, res)", "B. 3 (req, res, next)", "C. 4 (err, req, res, next)", "D. 1 (err)"],
    ans: "C", ok: "✅ ត្រូវ! Error middleware = 4 params! (err, req, res, next) — ចាំបាច់!", no: "❌ C ត្រូវ! Error handler = 4 params: err,req,res,next!"
  },
  6: {
    q: "🧩 Axios vs fetch — គុណប្រយោជន៍ Axios?",
    opts: ["A. Built-in browser", "B. Auto-parse JSON, interceptors, better errors", "C. Faster", "D. More secure"],
    ans: "B", ok: "✅ ត្រូវ! Axios: auto JSON parse, request/response interceptors, timeout, better error!", no: "❌ B ត្រូវ! Axios = auto JSON + interceptors + better DX!"
  },
};

const exQuizzes = {
  1: {
    q: "🧩 `nodemon` ដំឡើងជា devDependency (-D) ព្រោះ?",
    opts: ["A. Production ចាំបាច់", "B. Production មិនចាំបាច់ — development tool", "C. Cheaper", "D. Faster"],
    ans: "B", ok: "✅ ត្រូវ! nodemon = dev tool, production ប្រើ node ដោយ ផ្ទាល់!", no: "❌ B ត្រូវ! nodemon = dev only, -D = devDependency!"
  },
  2: {
    q: "🧩 `req.params` vs `req.query` — ខុស?\n`GET /users/5?page=2`",
    opts: ["A. ដូចគ្នា", "B. params = path (/users/5), query = ?page=2", "C. params = body", "D. query = path"],
    ans: "B", ok: "✅ ត្រូវ! params = URL path segments, query = ?key=value after ?", no: "❌ B ត្រូវ! params=/path/:id, query=?key=value!"
  },
  3: {
    q: "🧩 Middleware ដែល ខ្វះ `next()` — ប្រសិ?",
    opts: ["A. Error ភ្លាម", "B. Skip middleware", "C. Request ស្ទះ — browser timeout", "D. Return 404"],
    ans: "C", ok: "✅ ត្រូវ! គ្មាន next() → request ស្ទះ! Browser ទ្ខ timeout !", no: "❌ C ត្រូវ! No next() = request hangs!"
  },
  4: {
    q: "🧩 Mongoose `{ new: true }` ក្នុង `findByIdAndUpdate`?",
    opts: ["A. Create ប្រសិន not found", "B. Return document ក្រោយ update", "C. Return document មុន update", "D. Delete after update"],
    ans: "B", ok: "✅ ត្រូវ! { new: true } = return updated doc! default = return old doc!", no: "❌ B ត្រូវ! new:true = return doc AFTER update!"
  },
  5: {
    q: "🧩 `bcrypt.hash(password, 12)` — 12 = ?",
    opts: ["A. Password length", "B. Salt rounds (ចំនួន hash iterations)", "C. Expiry days", "D. Token length"],
    ans: "B", ok: "✅ ត្រូវ! 12 = salt rounds — ច្រើន = secure ជាង ប៉ុន្ដែ យឺតជាង! Recommended 10-12!", no: "❌ B ត្រូវ! bcrypt second arg = salt rounds!"
  },
  6: {
    q: "🧩 `multer` ប្រើសម្រាប់?",
    opts: ["A. JWT Auth", "B. Database connect", "C. Handle file uploads (multipart/form-data)", "D. Rate limiting"],
    ans: "C", ok: "✅ ត្រូវ! multer = middleware for handling file uploads!", no: "❌ C ត្រូវ! multer = file upload middleware!"
  },
  7: {
    q: "🧩 Rate limiting ការពារ?",
    opts: ["A. SQL injection", "B. XSS attacks", "C. Brute force / spam requests", "D. CORS errors"],
    ans: "C", ok: "✅ ត្រូវ! Rate limit = ការពារ spam / brute force attacks !", no: "❌ C ត្រូវ! Rate limiting = prevent spam/brute force!"
  },
  8: {
    q: "🧩 `{ timestamps: true }` ក្នុង Mongoose Schema?",
    opts: ["A. Add time zone", "B. Auto-add createdAt & updatedAt fields", "C. Expire documents", "D. Sort by date"],
    ans: "B", ok: "✅ ឆ្លាតណាស់! timestamps:true = auto createdAt + updatedAt!\n\n🎊 *Express.js Course Complete!*\nវាយ /certificate!", no: "❌ B ត្រូវ! timestamps:true = auto createdAt + updatedAt!"
  },
};

module.exports = {
  jsLessons, jsQuizzes,
  jqLessons, jqQuizzes,
  reLessons, reQuizzes,
  exLessons, exQuizzes,
};