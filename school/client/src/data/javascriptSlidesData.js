export const javascriptSlidesData = [
  // =========================
  // Module 1: Introduction
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Introduction",
    title: "Welcome to Programming",
    type: "hero",
    content: {
      eyebrow: "Module 1 • JavaScript Foundations",
      subtitle: "Programming is giving clear instructions to a computer so it can solve problems for you.",
      bullets: [
        "Computers follow instructions exactly as written",
        "JavaScript is the language of the web",
        "You will learn to read, write, and debug code",
        "We build real, practical programs",
      ],
      chips: ["Logic", "JavaScript", "Problem Solving", "Creativity"],
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Introduction",
    title: "What Is JavaScript?",
    type: "infographic",
    content: {
      intro: "JavaScript brings websites to life and powers apps beyond the browser.",
      cards: [
        {
          tag: "JavaScript",
          title: "Programming Language",
          description: "Used to build interactive applications.",
        },
        {
          tag: "JavaScript",
          title: "Web Behavior",
          description: "Controls clicks, forms, and dynamic UI.",
        },
        {
          tag: "JavaScript",
          title: "Runs in Browsers",
          description: "Every modern browser understands JS.",
        },
        {
          tag: "Not Java",
          title: "Different Language",
          description: "Java and JavaScript are not the same.",
        },
        {
          tag: "Not Only Experts",
          title: "Beginner Friendly",
          description: "Step-by-step learning makes it easy.",
        },
        {
          tag: "Not Only Websites",
          title: "Beyond the Web",
          description: "Node.js, mobile, desktop, and APIs.",
        },
      ],
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Introduction",
    title: "Where JavaScript Runs",
    type: "diagram",
    content: {
      intro: "JavaScript runs in many environments.",
      nodes: [
        {
          title: "Browser",
          description: "UI behavior, DOM updates, events.",
        },
        {
          title: "Server (Node.js)",
          description: "APIs, databases, backend logic.",
        },
        {
          title: "Mobile/Desktop",
          description: "React Native, Electron apps.",
        },
        {
          title: "Tools",
          description: "Build scripts and automation.",
        },
      ],
      footer: "One language, many platforms.",
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Introduction",
    title: "How Computers Read Code",
    type: "diagram",
    content: {
      intro: "JavaScript executes code in a strict order.",
      nodes: [
        {
          title: "Read",
          description: "JS reads the file top to bottom.",
        },
        {
          title: "Execute",
          description: "Each line runs in order.",
        },
        {
          title: "Error Stops",
          description: "Errors stop execution immediately.",
        },
        {
          title: "Output",
          description: "Results appear only if no errors.",
        },
      ],
      footer: "Order matters. Precision matters.",
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Introduction",
    title: "Your First JavaScript Output",
    type: "code-plus",
    content: {
      title: "Talking to the Computer",
      points: [
        "console.log prints information",
        "Used for learning and debugging",
        "Does not show on the page",
        "Very important for beginners",
      ],
      code: `console.log("Hello, JavaScript");
console.log("I am learning programming");
console.log(2 + 3);`,
      note:
        "console.log allows you to see what your code is doing step by step.",
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Introduction",
    title: "Understanding Errors",
    type: "infographic",
    content: {
      intro: "Errors are feedback. Use them to improve your code.",
      cards: [
        {
          tag: "Errors",
          title: "Normal",
          description: "Every programmer gets errors.",
        },
        {
          tag: "Errors",
          title: "Messages",
          description: "Errors tell you what went wrong.",
        },
        {
          tag: "Reaction",
          title: "Read Carefully",
          description: "Look at the line and message.",
        },
        {
          tag: "Reaction",
          title: "Fix One at a Time",
          description: "Small changes, test again.",
        },
        {
          tag: "Tip",
          title: "Use console.log",
          description: "Trace values and logic.",
        },
      ],
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Introduction",
    title: "JavaScript in an HTML Page",
    type: "code-plus",
    content: {
      title: "Valid HTML + JavaScript",
      points: [
        "HTML structure must be correct",
        "JavaScript can change page content",
        "Script runs after HTML loads",
        "One <html>, <head>, and <body>",
      ],
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First JavaScript Page</title>
  </head>
  <body>
    <h1 id="message">Hello</h1>

    <script>
      document.getElementById("message").textContent = "Hello, JavaScript!";
    </script>
  </body>
</html>`,
      note:
        "This example shows JavaScript changing content on a real web page.",
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Introduction",
    title: "How to Learn Effectively",
    type: "steps",
    content: {
      intro: "The fastest way to learn JavaScript is to practice consistently.",
      steps: [
        {
          title: "Practice Daily",
          description: "Small sessions beat cramming.",
        },
        {
          title: "Type the Code",
          description: "Muscle memory builds skill.",
        },
        {
          title: "Break Problems Down",
          description: "Solve one piece at a time.",
        },
        {
          title: "Ask Why",
          description: "Understanding beats memorizing.",
        },
      ],
    },
  },
  // =========================
  // Module 2: Variables & Values
  // =========================

  {
    id: 9,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "What Is a Variable?",
    type: "diagram",
    content: {
      intro: "A variable is a named place to store data.",
      nodes: [
        {
          title: "Name",
          description: "A label like age or totalPrice.",
        },
        {
          title: "Value",
          description: "The data stored in the variable.",
        },
        {
          title: "Assignment",
          description: "Use = to put a value inside.",
        },
        {
          title: "Update",
          description: "You can replace the value later.",
        },
      ],
      footer: "Think of variables as labeled boxes you can update.",
    },
  },

  {
    id: 10,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Why Variables Matter",
    type: "infographic",
    content: {
      intro: "Variables make code reusable and easy to change.",
      cards: [
        {
          tag: "Without",
          title: "Repeated Values",
          description: "You must copy the same numbers or text.",
        },
        {
          tag: "Without",
          title: "Hard to Maintain",
          description: "Changing one value means editing many lines.",
        },
        {
          tag: "With",
          title: "Store Once",
          description: "Set a value once and reuse it everywhere.",
        },
        {
          tag: "With",
          title: "Clean Updates",
          description: "Change a variable and the program updates.",
        },
      ],
    },
  },

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Creating Your First Variable",
    type: "code-plus",
    content: {
      title: "Using let to Create Variables",
      points: [
        "let creates a variable",
        "Use descriptive names",
        "The = sign assigns a value",
        "Statements run top to bottom",
      ],
      code: `let age = 25;
let name = "Alice";

console.log(age);
console.log(name);`,
      note: "Variables store values so your program can use them later.",
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Variable Names (Very Important)",
    type: "infographic",
    content: {
      intro: "Good names make code readable and easier to debug.",
      cards: [
        {
          tag: "Rules",
          title: "Valid Names",
          items: [
            "Start with a letter, _ or $",
            "No spaces",
            "Case-sensitive",
            "Not a reserved word",
          ],
        },
        {
          tag: "Good",
          title: "Clear Names",
          items: ["age", "userName", "totalPrice", "isLoggedIn"],
        },
        {
          tag: "Bad",
          title: "Unclear Names",
          items: ["1name", "user name", "x", "temp"],
        },
      ],
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Changing Variable Values",
    type: "code-plus",
    content: {
      title: "Variables Can Change",
      points: [
        "Variables are not fixed",
        "You can reassign values",
        "Latest value replaces old one",
        "This is normal behavior",
      ],
      code: `let score = 10;
console.log(score);

score = 20;
console.log(score);

score = score + 5;
console.log(score);`,
      note:
        "The variable always holds the most recent value assigned to it.",
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "let vs const (Beginner Rule)",
    type: "infographic",
    content: {
      intro: "Use const by default, let when values must change.",
      cards: [
        {
          tag: "let",
          title: "Changeable",
          items: [
            "Value can change",
            "Good for counters",
            "Use when needed",
          ],
        },
        {
          tag: "const",
          title: "Stable",
          items: [
            "Cannot be reassigned",
            "Safer by default",
            "Clearer intent",
          ],
        },
      ],
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Using const Correctly",
    type: "code-plus",
    content: {
      title: "Safe Variables with const",
      points: [
        "const prevents reassignment",
        "Helps avoid accidental changes",
        "Preferred unless change is needed",
      ],
      code: `const country = "Nigeria";
console.log(country);

// country = "Ghana"; ❌ Error: cannot reassign`,
      note: "Use const when a value should never change.",
    },
  },

  {
    id: 216,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Hoisting (Important Behavior)",
    type: "infographic",
    content: {
      intro: "Hoisting is JavaScript moving declarations to the top of their scope.",
      cards: [
        {
          tag: "var",
          title: "Hoisted",
          description: "Declared variables are hoisted (initialized as undefined).",
        },
        {
          tag: "let/const",
          title: "Hoisted but Locked",
          description: "They exist but can’t be used before declaration.",
        },
        {
          tag: "Functions",
          title: "Function Declarations",
          description: "Hoisted fully, so you can call them earlier.",
        },
      ],
    },
  },

  {
    id: 217,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Hoisting in Code",
    type: "code-plus",
    content: {
      title: "var vs let/const",
      points: [
        "var is hoisted as undefined",
        "let/const throw errors before declaration",
        "Function declarations are hoisted",
      ],
      code: `console.log(age); // undefined
var age = 25;

// console.log(name); // ReferenceError
let name = "Ada";

hello(); // Works
function hello() {
  console.log("Hello");
}`,
      note: "Hoisting can cause bugs; use let/const and declare first.",
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "What Is a Value?",
    type: "diagram",
    content: {
      intro: "Values are the data your program works with.",
      nodes: [
        {
          title: "Numbers",
          description: "1, 10, 3.5",
        },
        {
          title: "Strings",
          description: "\"hello\", \"JavaScript\"",
        },
        {
          title: "Booleans",
          description: "true or false",
        },
        {
          title: "Empty",
          description: "null or undefined",
        },
      ],
      footer: "Values have types that affect how code behaves.",
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Numbers",
    type: "code-plus",
    content: {
      title: "Working With Numbers",
      points: [
        "Used for counting and calculations",
        "Supports addition, subtraction, etc.",
        "No separate integer or float type",
      ],
      code: `let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33`,
      note: "JavaScript uses one number type for all numeric values.",
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Strings (Text Values)",
    type: "code-plus",
    content: {
      title: "Working With Text",
      points: [
        "Strings represent text",
        "Written using quotes",
        "Can be combined together",
        "Used for names and messages",
      ],
      code: `let firstName = "Alice";
let lastName = "Johnson";

let fullName = firstName + " " + lastName;
console.log(fullName);`,
      note: "Strings allow programs to work with words and sentences.",
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Booleans (True / False)",
    type: "steps",
    content: {
      intro: "Booleans are the yes/no values used in decisions.",
      steps: [
        {
          title: "Create",
          description: "true or false values.",
        },
        {
          title: "Compare",
          description: "age >= 18 returns a boolean.",
        },
        {
          title: "Decide",
          description: "if statements use booleans to choose a path.",
        },
      ],
    },
  },

  {
    id: 20,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Using Booleans in Code",
    type: "code-plus",
    content: {
      title: "Boolean Values in Practice",
      points: [
        "Booleans often come from comparisons",
        "They control program flow",
        "You will see them everywhere",
      ],
      code: `let age = 20;
let isAdult = age >= 18;

console.log(isAdult); // true`,
      note:
        "Comparisons produce boolean values that guide program decisions.",
    },
  },

  {
    id: 21,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "undefined and null (Early Introduction)",
    type: "infographic",
    content: {
      intro: "undefined and null are not the same.",
      cards: [
        {
          tag: "undefined",
          title: "Not Assigned",
          items: [
            "Default value",
            "Often accidental",
            "Means missing data",
          ],
        },
        {
          tag: "null",
          title: "Intentional Empty",
          items: [
            "Set by programmer",
            "Clear a value",
            "Deliberate choice",
          ],
        },
      ],
    },
  },

  {
    id: 22,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "Avoid these issues to build strong habits early.",
      cards: [
        {
          tag: "Mistake",
          title: "Using Variables Too Early",
          description: "Define before use.",
        },
        {
          tag: "Mistake",
          title: "Misspellings",
          description: "JavaScript is case-sensitive.",
        },
        {
          tag: "Mistake",
          title: "String vs Number",
          description: "Quotes change the type.",
        },
        {
          tag: "Fix",
          title: "Use console.log",
          description: "Check values as you go.",
        },
      ],
    },
  },

  {
    id: 23,
    moduleId: 2,
    moduleTitle: "Variables & Values",
    title: "Thinking Like a Programmer",
    type: "diagram",
    content: {
      intro: "Programming is a sequence of clear steps.",
      nodes: [
        {
          title: "Break it Down",
          description: "Solve one step at a time.",
        },
        {
          title: "Store Data",
          description: "Use variables to keep values.",
        },
        {
          title: "Reuse",
          description: "Avoid repeating values.",
        },
        {
          title: "Next: Decisions",
          description: "Comparisons and control flow.",
        },
      ],
      footer: "Up next: comparing values and making decisions.",
    },
  },
  // =========================
  // Module 3: Comparisons & Decisions
  // =========================

  {
    id: 24,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Why Programs Need Decisions",
    type: "infographic",
    content: {
      intro: "Programs make decisions the same way humans do.",
      cards: [
        {
          tag: "Real Life",
          title: "If it rains → umbrella",
          description: "We act based on conditions.",
        },
        {
          tag: "Real Life",
          title: "If red → stop",
          description: "Rules guide decisions.",
        },
        {
          tag: "Programming",
          title: "Compare Values",
          description: "Conditions return true or false.",
        },
        {
          tag: "Programming",
          title: "Choose a Path",
          description: "Actions depend on the result.",
        },
      ],
    },
  },

  {
    id: 25,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Comparison Operators",
    type: "infographic",
    content: {
      intro: "Comparisons return true or false.",
      cards: [
        {
          tag: "Compare",
          title: "===",
          description: "Strict equal (recommended).",
        },
        {
          tag: "Compare",
          title: "!==",
          description: "Strict not equal.",
        },
        {
          tag: "Compare",
          title: "> and <",
          description: "Greater or less than.",
        },
        {
          tag: "Compare",
          title: ">= and <=",
          description: "Greater/less with equality.",
        },
        {
          tag: "Avoid",
          title: "==",
          description: "Loose equality can be confusing.",
        },
      ],
    },
  },

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Simple Comparisons in Code",
    type: "code-plus",
    content: {
      title: "Comparing Numbers",
      points: [
        "Comparisons return booleans",
        "Use === for safe comparisons",
        "Numbers compare as expected",
      ],
      code: `console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(10 >= 10); // true
console.log(7 <= 5);   // false

console.log(5 === 5);  // true
console.log(5 === 6);  // false`,
      note:
        "These comparisons produce true or false, which programs use to decide what to do.",
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Why === Is Better Than ==",
    type: "diagram",
    content: {
      intro: "Strict equality avoids unexpected conversions.",
      nodes: [
        {
          title: "== (Loose)",
          description: "Converts types automatically.",
        },
        {
          title: "Confusing Results",
          description: "0 == false is true.",
        },
        {
          title: "=== (Strict)",
          description: "Compares type and value.",
        },
        {
          title: "Best Practice",
          description: "Use === to avoid bugs.",
        },
      ],
      footer: "Use === for predictable behavior.",
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Equality Examples",
    type: "code-plus",
    content: {
      title: "Loose vs Strict Equality",
      points: [
        "=== checks value and type",
        "== allows conversion",
        "Beginners should use ===",
      ],
      code: `console.log(5 == "5");   // true (conversion happens)
console.log(5 === "5");  // false (different types)

console.log(0 == false);  // true (confusing)
console.log(0 === false); // false (clear)`,
      note:
        "Strict equality avoids hidden conversions and reduces bugs.",
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Introducing if Statements",
    type: "steps",
    content: {
      intro: "if statements execute code only when a condition is true.",
      steps: [
        {
          title: "Write a Condition",
          description: "This must be true or false.",
        },
        {
          title: "Add Braces",
          description: "Wrap the code block in { }.",
        },
        {
          title: "Run if True",
          description: "Block executes only when condition is true.",
        },
      ],
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Your First if Statement",
    type: "code-plus",
    content: {
      title: "Basic if Example",
      points: [
        "Condition goes inside parentheses",
        "Code block uses curly braces",
        "Runs only when condition is true",
      ],
      code: `let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}`,
      note: "The message prints only if the condition is true.",
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "if...else Statements",
    type: "steps",
    content: {
      intro: "else handles the false case so logic is complete.",
      steps: [
        {
          title: "Check Condition",
          description: "if evaluates to true or false.",
        },
        {
          title: "Run One Path",
          description: "Either if or else runs, never both.",
        },
        {
          title: "Clear Outcome",
          description: "Every case is handled.",
        },
      ],
    },
  },

  {
    id: 32,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "if...else in Code",
    type: "code-plus",
    content: {
      title: "Two Possible Outcomes",
      points: [
        "One condition, two paths",
        "Only one path executes",
        "Very common pattern",
      ],
      code: `let score = 45;

if (score >= 50) {
  console.log("You passed");
} else {
  console.log("You failed");
}`,
      note: "The program chooses one message based on the condition.",
    },
  },

  {
    id: 33,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Multiple Conditions (else if)",
    type: "diagram",
    content: {
      intro: "else if adds more decision paths.",
      nodes: [
        {
          title: "if",
          description: "First condition checked.",
        },
        {
          title: "else if",
          description: "Checked only if previous failed.",
        },
        {
          title: "else if",
          description: "Add more conditions if needed.",
        },
        {
          title: "else",
          description: "Fallback when none match.",
        },
      ],
      footer: "Order matters. First true condition wins.",
    },
  },

  {
    id: 34,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "else if Example",
    type: "code-plus",
    content: {
      title: "Grading System Example",
      points: [
        "Conditions checked top to bottom",
        "First match wins",
        "else handles everything else",
      ],
      code: `let score = 72;

if (score >= 70) {
  console.log("Grade A");
} else if (score >= 50) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}`,
      note: "Only one grade prints, based on the first true condition.",
    },
  },

  {
    id: 35,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "Avoid these mistakes to prevent logic bugs.",
      cards: [
        {
          tag: "Mistake",
          title: "Using =",
          description: "Use === for comparisons.",
        },
        {
          tag: "Mistake",
          title: "Missing Braces",
          description: "Always wrap blocks in { }.",
        },
        {
          tag: "Mistake",
          title: "Wrong Order",
          description: "Order conditions from specific to general.",
        },
        {
          tag: "Fix",
          title: "Test with console.log",
          description: "Check values as you go.",
        },
      ],
    },
  },

  {
    id: 36,
    moduleId: 3,
    moduleTitle: "Comparisons & Decisions",
    title: "Thinking in Conditions",
    type: "diagram",
    content: {
      intro: "Good logic starts with clear questions.",
      nodes: [
        {
          title: "Ask Yes/No",
          description: "Frame logic as a question.",
        },
        {
          title: "Test One Thing",
          description: "Keep conditions simple.",
        },
        {
          title: "Handle False",
          description: "Plan for both outcomes.",
        },
        {
          title: "Next: Loops",
          description: "Repeat actions automatically.",
        },
      ],
      footer: "Up next: repeating actions with loops.",
    },
  }, // =========================
  // Module 4: Repeating Actions (Loops)
  // =========================

  {
    id: 37,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Why Programs Repeat Actions",
    type: "infographic",
    content: {
      intro: "Loops save time by automating repetition.",
      cards: [
        {
          tag: "Real Life",
          title: "Repeat Actions",
          description: "Clap 5 times or count to 10.",
        },
        {
          tag: "Programming",
          title: "Avoid Manual Work",
          description: "Repeating manually is inefficient.",
        },
        {
          tag: "Programming",
          title: "Automate",
          description: "Loops repeat code for you.",
        },
        {
          tag: "Benefit",
          title: "Fewer Errors",
          description: "Less copy-paste means fewer bugs.",
        },
      ],
    },
  },

  {
    id: 38,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "What Is a Loop?",
    type: "diagram",
    content: {
      intro: "A loop repeats a block of code until a condition stops it.",
      nodes: [
        {
          title: "Start",
          description: "Set an initial value.",
        },
        {
          title: "Check",
          description: "Is the condition still true?",
        },
        {
          title: "Run",
          description: "Execute the loop body.",
        },
        {
          title: "Update",
          description: "Change the value and repeat.",
        },
      ],
      footer: "Every loop needs a clear stopping point.",
    },
  },

  {
    id: 39,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Introducing the for Loop",
    type: "steps",
    content: {
      intro: "for loops are ideal when you know how many times to repeat.",
      steps: [
        {
          title: "Initialize",
          description: "Set a starting value.",
        },
        {
          title: "Condition",
          description: "Check if the loop should continue.",
        },
        {
          title: "Step",
          description: "Move to the next value.",
        },
        {
          title: "Repeat",
          description: "Run the loop body each time.",
        },
      ],
    },
  },

  {
    id: 40,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Your First for Loop",
    type: "code-plus",
    content: {
      title: "Counting with a Loop",
      points: [
        "Loop starts with a counter",
        "Runs while condition is true",
        "Counter changes after each run",
      ],
      code: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
      note: "This loop prints numbers from 1 to 5 automatically.",
    },
  },

  {
    id: 41,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Understanding for Loop Parts",
    type: "diagram",
    content: {
      intro: "A for loop has three parts.",
      nodes: [
        {
          title: "Start",
          description: "let i = 1",
        },
        {
          title: "Condition",
          description: "i <= 5",
        },
        {
          title: "Step",
          description: "i++",
        },
        {
          title: "Body",
          description: "console.log(i)",
        },
      ],
      footer: "Start → check → run → step → repeat.",
    },
  },

  {
    id: 42,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Common Loop Mistake: Infinite Loops",
    type: "infographic",
    content: {
      intro: "Infinite loops happen when the stop condition never becomes false.",
      cards: [
        {
          tag: "Problem",
          title: "Never Stops",
          description: "Loop runs forever.",
        },
        {
          tag: "Cause",
          title: "No Update",
          description: "Counter never changes.",
        },
        {
          tag: "Cause",
          title: "Wrong Condition",
          description: "Logic keeps condition true.",
        },
        {
          tag: "Fix",
          title: "Check Each Step",
          description: "Update values every loop.",
        },
      ],
    },
  },

  {
    id: 43,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Infinite Loop Example",
    type: "code-plus",
    content: {
      title: "What NOT to Do",
      points: [
        "Counter never changes",
        "Condition always true",
        "Loop never ends",
      ],
      code: `// ❌ Infinite loop
let i = 1;

while (i <= 5) {
  console.log(i);
  // i is never updated
}`,
      note: "Because i never changes, the condition is always true.",
    },
  },

  {
    id: 44,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Introducing the while Loop",
    type: "steps",
    content: {
      intro: "while loops repeat as long as a condition stays true.",
      steps: [
        {
          title: "Check Condition",
          description: "If true, run the loop.",
        },
        {
          title: "Run Body",
          description: "Execute the repeated action.",
        },
        {
          title: "Update State",
          description: "Change values so it can stop.",
        },
        {
          title: "Stop",
          description: "Ends when condition is false.",
        },
      ],
    },
  },

  {
    id: 45,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "while Loop Example",
    type: "code-plus",
    content: {
      title: "Repeating with while",
      points: [
        "Condition checked first",
        "Manual control of counter",
        "Must update values yourself",
      ],
      code: `let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}`,
      note:
        "This loop behaves like the for loop but with more manual control.",
    },
  },

  {
    id: 46,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "for vs while (Beginner Rule)",
    type: "infographic",
    content: {
      intro: "Choose the right loop for the job.",
      cards: [
        {
          tag: "for",
          title: "Known Count",
          description: "You know how many times to repeat.",
        },
        {
          tag: "for",
          title: "Clean Structure",
          description: "Start, condition, step in one line.",
        },
        {
          tag: "while",
          title: "Unknown Count",
          description: "Repeat until a condition changes.",
        },
        {
          tag: "while",
          title: "Flexible",
          description: "Great for user-driven loops.",
        },
      ],
    },
  },

  {
    id: 47,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Stopping a Loop Early",
    type: "code-plus",
    content: {
      title: "Using break",
      points: [
        "break stops the loop immediately",
        "Used when condition is met early",
        "Works in all loops",
      ],
      code: `for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}`,
      note: "The loop stops completely when i reaches 5.",
    },
  },

  {
    id: 48,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Skipping a Loop Step",
    type: "code-plus",
    content: {
      title: "Using continue",
      points: [
        "continue skips the current step",
        "Loop continues to next iteration",
        "Useful for filtering logic",
      ],
      code: `for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}`,
      note: "The number 3 is skipped, but the loop continues.",
    },
  },

  {
    id: 49,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "Most loop bugs come from small mistakes.",
      cards: [
        {
          tag: "Mistake",
          title: "No Update",
          description: "Counters must change.",
        },
        {
          tag: "Mistake",
          title: "Wrong Condition",
          description: "Double-check the logic.",
        },
        {
          tag: "Mistake",
          title: "Off-by-One",
          description: "Start and end values matter.",
        },
        {
          tag: "Fix",
          title: "Trace Values",
          description: "Use console.log to verify.",
        },
      ],
    },
  },

  {
    id: 50,
    moduleId: 4,
    moduleTitle: "Repeating Actions (Loops)",
    title: "Thinking in Loops",
    type: "diagram",
    content: {
      intro: "Loops help you automate repeated work.",
      nodes: [
        {
          title: "Identify Repetition",
          description: "Find the repeated action.",
        },
        {
          title: "Choose a Loop",
          description: "for or while based on the scenario.",
        },
        {
          title: "Control the Stop",
          description: "Ensure a clear end.",
        },
        {
          title: "Next: Arrays",
          description: "Loop through collections of data.",
        },
      ],
      footer: "Up next: arrays and data collections.",
    },
  }, // =========================
  // Module 5: Working with Lists (Arrays)
  // =========================

  {
    id: 51,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Why Programs Need Lists",
    type: "infographic",
    content: {
      intro: "Arrays let you store many related values together.",
      cards: [
        {
          tag: "Real Life",
          title: "Lists Everywhere",
          description: "Names, prices, phone numbers, tasks.",
        },
        {
          tag: "Problem",
          title: "Too Many Variables",
          description: "Storing values one by one is inefficient.",
        },
        {
          tag: "Solution",
          title: "Use Arrays",
          description: "Group related values in one place.",
        },
        {
          tag: "Benefit",
          title: "Process Easily",
          description: "Loop through items safely.",
        },
      ],
    },
  },

  {
    id: 52,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "What Is an Array?",
    type: "diagram",
    content: {
      intro: "Arrays store ordered values you can access by index.",
      nodes: [
        {
          title: "Ordered",
          description: "Items keep a fixed order.",
        },
        {
          title: "Indexed",
          description: "Positions start at 0.",
        },
        {
          title: "Grouped",
          description: "Related items live together.",
        },
        {
          title: "Accessible",
          description: "Use array[index] to get items.",
        },
      ],
      footer: "Arrays are JavaScript’s list structure.",
    },
  },

  {
    id: 53,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Creating Your First Array",
    type: "code-plus",
    content: {
      title: "Array Basics",
      points: [
        "Arrays use square brackets []",
        "Items are separated by commas",
        "Arrays can store multiple values",
        "Order matters",
      ],
      code: `let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);`,
      note: "This array stores three related values in one variable.",
    },
  },

  {
    id: 54,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Array Indexes (Very Important)",
    type: "infographic",
    content: {
      intro: "Indexes tell you where items live in an array.",
      cards: [
        {
          tag: "Rule",
          title: "Start at 0",
          description: "The first item is index 0.",
        },
        {
          tag: "Rule",
          title: "Unique Positions",
          description: "Each item has a unique index.",
        },
        {
          tag: "Example",
          title: "fruits[0]",
          description: "Apple",
        },
        {
          tag: "Example",
          title: "fruits[3]",
          description: "undefined (out of range)",
        },
      ],
    },
  },

  {
    id: 55,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Accessing Array Values",
    type: "code-plus",
    content: {
      title: "Getting Items from an Array",
      points: [
        "Use square brackets with index",
        "Index must be a number",
        "Out-of-range index returns undefined",
      ],
      code: `let colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red
console.log(colors[1]); // Green
console.log(colors[2]); // Blue
console.log(colors[3]); // undefined`,
      note: "Array indexes allow you to retrieve specific values.",
    },
  },

  {
    id: 56,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Changing Array Values",
    type: "code-plus",
    content: {
      title: "Updating Items in an Array",
      points: [
        "Arrays are changeable",
        "Assign a new value using index",
        "Original value is replaced",
      ],
      code: `let scores = [10, 20, 30];

scores[1] = 25;

console.log(scores); // [10, 25, 30]`,
      note: "Arrays allow updating specific items using their index.",
    },
  },

  {
    id: 57,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "How Many Items? (.length)",
    type: "steps",
    content: {
      intro: ".length tells you how many items an array has.",
      steps: [
        {
          title: "Count Items",
          description: "array.length returns the size.",
        },
        {
          title: "Last Index",
          description: "length - 1 is the last item.",
        },
        {
          title: "Use in Loops",
          description: "Stop before length to avoid errors.",
        },
        {
          title: "Auto Updates",
          description: "Changes when items are added or removed.",
        },
      ],
    },
  },

  {
    id: 58,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Using length in Code",
    type: "code-plus",
    content: {
      title: "Counting Array Items",
      points: [
        ".length updates automatically",
        "Works even when array changes",
        "Essential for loops",
      ],
      code: `let animals = ["Dog", "Cat", "Bird"];

console.log(animals.length); // 3

animals.push("Fish");

console.log(animals.length); // 4`,
      note:
        "The length property always reflects the current size of the array.",
    },
  },

  {
    id: 59,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Looping Through Arrays",
    type: "diagram",
    content: {
      intro: "Loops + arrays let you process every item safely.",
      nodes: [
        {
          title: "Start at 0",
          description: "First item is index 0.",
        },
        {
          title: "Check length",
          description: "Stop before array.length.",
        },
        {
          title: "Access item",
          description: "Use array[i] each time.",
        },
        {
          title: "Repeat",
          description: "Process each value in order.",
        },
      ],
      footer: "This pattern appears in almost every program.",
    },
  },

  {
    id: 60,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Looping Through an Array (Example)",
    type: "code-plus",
    content: {
      title: "for Loop + Array",
      points: [
        "Start from index 0",
        "Stop before length",
        "Access each item",
      ],
      code: `let names = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}`,
      note: "This loop prints every item in the array safely.",
    },
  },

  {
    id: 61,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Adding Items to an Array",
    type: "infographic",
    content: {
      intro: "Use push() to add items safely.",
      cards: [
        {
          tag: "Add",
          title: "Arrays Grow",
          description: "New items usually go at the end.",
        },
        {
          tag: "Method",
          title: "push()",
          description: "The most common way to add items.",
        },
        {
          tag: "Rule",
          title: "Avoid Manual Indexing",
          description: "Let JavaScript handle the length.",
        },
      ],
    },
  },

  {
    id: 62,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "push() Example",
    type: "code-plus",
    content: {
      title: "Adding Items Safely",
      points: [
        "push() adds to the end",
        "Array length increases",
        "Safe and readable",
      ],
      code: `let tasks = [];

tasks.push("Study JavaScript");
tasks.push("Practice coding");

console.log(tasks);`,
      note: "push() safely adds new items to an array.",
    },
  },

  {
    id: 63,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Removing Items (Preview)",
    type: "infographic",
    content: {
      intro: "Start with pop() to remove the last item.",
      cards: [
        {
          tag: "Remove",
          title: "pop()",
          description: "Removes the last element.",
        },
        {
          tag: "Rule",
          title: "Keep it Simple",
          description: "Avoid complex removals early.",
        },
        {
          tag: "Tip",
          title: "Understand Effects",
          description: "pop() changes array length.",
        },
      ],
    },
  },

  {
    id: 64,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "pop() Example",
    type: "code-plus",
    content: {
      title: "Removing Last Item",
      points: [
        "pop() removes last item",
        "Array length decreases",
        "Returns removed item",
      ],
      code: `let numbers = [1, 2, 3];

let last = numbers.pop();

console.log(last);    // 3
console.log(numbers); // [1, 2]`,
      note: "pop() safely removes the last element from an array.",
    },
  },

  {
    id: 65,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "These mistakes are common when learning arrays.",
      cards: [
        {
          tag: "Mistake",
          title: "Index Starts at 0",
          description: "The first item is index 0.",
        },
        {
          tag: "Mistake",
          title: "Loop Past length",
          description: "Stop before array.length.",
        },
        {
          tag: "Mistake",
          title: "Hard-coded Index",
          description: "Use variables and length.",
        },
        {
          tag: "Fix",
          title: "Log as You Learn",
          description: "console.log indexes and values.",
        },
      ],
    },
  },

  {
    id: 66,
    moduleId: 5,
    moduleTitle: "Working with Lists (Arrays)",
    title: "Thinking in Arrays",
    type: "diagram",
    content: {
      intro: "Arrays help you model collections of data.",
      nodes: [
        {
          title: "Group Values",
          description: "Store related items together.",
        },
        {
          title: "Process One by One",
          description: "Loop through items safely.",
        },
        {
          title: "Use Methods",
          description: "push, pop, length, and more.",
        },
        {
          title: "Next: Objects",
          description: "Group related data with keys.",
        },
      ],
      footer: "Up next: objects and structured data.",
    },
  }, // =========================

  {
    id: 221,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Creating an Object",
    type: "code-plus",
    content: {
      title: "Object Literal",
      points: [
        "Use curly braces",
        "Store related data",
        "Keys map to values",
      ],
      code: `const user = {
  name: "Ada",
  age: 25,
  isActive: true
};

console.log(user);`,
      note: "Objects group related properties into one place.",
    },
  },

  {
    id: 222,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Dot vs Bracket Notation",
    type: "code-plus",
    content: {
      title: "Accessing Properties",
      points: [
        "Dot is simple",
        "Bracket works with variables",
        "Both read and write",
      ],
      code: `const user = { name: "Ada", age: 25 };

console.log(user.name);
const key = "age";
console.log(user[key]);`,
      note: "Bracket notation is useful for dynamic keys.",
    },
  },

  // Module 6: Grouping Related Data (Objects)
  // =========================

  {
    id: 67,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Why Arrays Are Sometimes Not Enough",
    type: "two-column",
    content: {
      left: {
        title: "What Arrays Are Good At",
        items: [
          "Storing lists of similar values",
          "Working with ordered data",
          "Looping through items",
          "Processing collections",
        ],
      },
      right: {
        title: "Where Arrays Fall Short",
        items: [
          "Hard to describe meaning of each item",
          "Index numbers are not descriptive",
          "Mixing different data types becomes confusing",
          "Not ideal for real-world entities",
        ],
      },
    },
  },

  {
    id: 68,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "What Is an Object?",
    type: "two-column",
    content: {
      left: {
        title: "Object Explained Simply",
        items: [
          "An object groups related data together",
          "Data is stored as key–value pairs",
          "Keys describe what the value represents",
          "Objects model real-world things",
        ],
      },
      right: {
        title: "Real-Life Analogy",
        items: [
          "Think of a profile card",
          "Each field has a label and value",
          "Name, age, email, status",
          "Objects work the same way",
        ],
      },
    },
  },

  {
    id: 69,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Object vs Array (Beginner Rule)",
    type: "two-column",
    content: {
      left: {
        title: "Use an Array When",
        items: [
          "You have a list of similar items",
          "Order matters",
          "You process items one by one",
          "Examples: names, scores, tasks",
        ],
      },
      right: {
        title: "Use an Object When",
        items: [
          "You describe a single thing",
          "Each value has a meaning",
          "You want readable access",
          "Examples: user, product, settings",
        ],
      },
    },
  },

  {
    id: 70,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Creating Your First Object",
    type: "code-plus",
    content: {
      title: "Object Basics",
      points: [
        "Objects use curly braces {}",
        "Data is stored as key: value",
        "Keys describe the data",
        "Commas separate properties",
      ],
      code: `let user = {
  name: "Alice",
  age: 25,
  isLoggedIn: true
};

console.log(user);`,
      note:
        "This object represents one user with clearly named properties.",
    },
  },

  {
    id: 71,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Understanding Keys and Values",
    type: "two-column",
    content: {
      left: {
        title: "Keys",
        items: [
          "Keys are labels",
          "Usually written as words",
          "Describe what the value means",
          "Also called properties",
        ],
      },
      right: {
        title: "Values",
        items: [
          "Actual data",
          "Can be any data type",
          "Numbers, strings, booleans",
          "Even arrays or other objects",
        ],
      },
    },
  },

  {
    id: 72,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Accessing Object Values",
    type: "code-plus",
    content: {
      title: "Dot Notation (Most Common)",
      points: [
        "Use object.property",
        "Easy to read",
        "Most common approach",
        "Best for beginners",
      ],
      code: `let user = {
  name: "Alice",
  age: 25
};

console.log(user.name); // Alice
console.log(user.age);  // 25`,
      note: "Dot notation allows direct access to object properties.",
    },
  },

  {
    id: 73,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Bracket Notation (Preview)",
    type: "code-plus",
    content: {
      title: "Alternative Access Method",
      points: [
        "Uses square brackets",
        "Property name is a string",
        "More flexible",
        "Used in advanced cases",
      ],
      code: `let user = {
  name: "Alice",
  age: 25
};

console.log(user["name"]);
console.log(user["age"]);`,
      note:
        "Bracket notation is useful when property names are dynamic.",
    },
  },

  {
    id: 74,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Changing Object Values",
    type: "code-plus",
    content: {
      title: "Updating Properties",
      points: [
        "Objects are changeable",
        "Assign a new value",
        "Property keeps the same key",
      ],
      code: `let user = {
  name: "Alice",
  age: 25
};

user.age = 26;

console.log(user.age); // 26`,
      note: "Object properties can be updated at any time.",
    },
  },

  {
    id: 75,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Adding New Properties",
    type: "code-plus",
    content: {
      title: "Objects Can Grow",
      points: [
        "You can add properties anytime",
        "No special syntax needed",
        "Very flexible structure",
      ],
      code: `let user = {
  name: "Alice"
};

user.email = "alice@example.com";

console.log(user);`,
      note: "Objects allow adding new information dynamically.",
    },
  },

  {
    id: 76,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Objects Inside Objects",
    type: "two-column",
    content: {
      left: {
        title: "Why Nest Objects",
        items: [
          "Real-world data has structure",
          "Some data belongs together",
          "Improves organization",
          "Avoids flat, confusing data",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "User with an address",
          "Product with specifications",
          "Settings with categories",
          "Profiles with preferences",
        ],
      },
    },
  },

  {
    id: 77,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Nested Object Example",
    type: "code-plus",
    content: {
      title: "Object Inside an Object",
      points: [
        "Access using multiple dots",
        "Read left to right",
        "Very common pattern",
      ],
      code: `let user = {
  name: "Alice",
  address: {
    city: "Lagos",
    country: "Nigeria"
  }
};

console.log(user.address.city); // Lagos`,
      note: "Nested objects represent structured, real-world data.",
    },
  },

  {
    id: 78,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Objects and Arrays Together",
    type: "two-column",
    content: {
      left: {
        title: "Why Combine Them",
        items: [
          "Most real apps use both",
          "Objects describe things",
          "Arrays store multiple things",
          "Very powerful combination",
        ],
      },
      right: {
        title: "Example Use Cases",
        items: [
          "List of users",
          "Cart with products",
          "Posts with comments",
          "Orders with items",
        ],
      },
    },
  },

  {
    id: 79,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Array of Objects Example",
    type: "code-plus",
    content: {
      title: "Real-World Pattern",
      points: [
        "Each object represents one item",
        "Array stores many items",
        "Used everywhere in apps",
      ],
      code: `let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
];

console.log(users[0].name); // Alice`,
      note: "Arrays of objects are the backbone of real applications.",
    },
  },

  {
    id: 80,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using arrays for structured data",
          "Forgetting property names",
          "Confusing dot and bracket notation",
          "Over-nesting objects",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Ask: am I describing one thing?",
          "Name properties clearly",
          "Use dot notation first",
          "Keep structure simple",
        ],
      },
    },
  },

  {
    id: 81,
    moduleId: 6,
    moduleTitle: "Grouping Related Data (Objects)",
    title: "Thinking in Objects",
    type: "two-column",
    content: {
      left: {
        title: "Programmer Mindset",
        items: [
          "Model real-world entities",
          "Group related data",
          "Prefer clarity over cleverness",
          "Design before coding",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Making objects do things",
          "Functions",
          "Reusable behavior",
          "Real program logic",
        ],
      },
    },
  }, // =========================

  {
    id: 223,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Default Parameters",
    type: "code-plus",
    content: {
      title: "Safer Functions",
      points: [
        "Provide fallback values",
        "Avoid undefined",
        "Clearer intent",
      ],
      code: `function greet(name = "friend") {
  return "Hello, " + name;
}

console.log(greet());
console.log(greet("Ada"));`,
      note: "Default parameters make functions more resilient.",
    },
  },

  {
    id: 224,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Callback Function Example",
    type: "code-plus",
    content: {
      title: "Functions as Values",
      points: [
        "Functions can be passed in",
        "Used in callbacks",
        "Common in JS",
      ],
      code: `function run(task) {
  task();
}

run(function() {
  console.log("Running task");
});`,
      note: "Callbacks let you customize behavior.",
    },
  },

  // Module 7: Functions (Making Code Reusable)
  // =========================

  {
    id: 82,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Why Functions Exist",
    type: "two-column",
    content: {
      left: {
        title: "Life Without Functions",
        items: [
          "Same code written many times",
          "Hard to update programs",
          "Easy to introduce mistakes",
          "Messy and repetitive code",
        ],
      },
      right: {
        title: "Life With Functions",
        items: [
          "Write code once, use it many times",
          "Programs become cleaner",
          "Easier to fix and improve",
          "Core building block of software",
        ],
      },
    },
  },

  {
    id: 83,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "What Is a Function?",
    type: "two-column",
    content: {
      left: {
        title: "Function Explained Simply",
        items: [
          "A function is a reusable block of code",
          "It performs a specific task",
          "You can run it whenever you want",
          "Functions reduce repetition",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "Think of a machine",
          "You give it input",
          "It does some work",
          "It gives output",
        ],
      },
    },
  },

  {
    id: 84,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Your First Function",
    type: "code-plus",
    content: {
      title: "Defining a Function",
      points: [
        "Use the function keyword",
        "Give the function a name",
        "Code goes inside curly braces",
        "Nothing runs until you call it",
      ],
      code: `function sayHello() {
  console.log("Hello!");
}

// Calling the function
sayHello();
sayHello();`,
      note:
        "The function runs only when it is called. You can call it multiple times.",
    },
  },

  {
    id: 218,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Function Declaration vs Expression",
    type: "infographic",
    content: {
      intro: "JavaScript has two common ways to define functions.",
      cards: [
        {
          tag: "Declaration",
          title: "function name() {}",
          description: "Hoisted, so it can be called earlier.",
        },
        {
          tag: "Expression",
          title: "const name = function() {}",
          description: "Stored in a variable; not callable before it’s defined.",
        },
        {
          tag: "Why It Matters",
          title: "Hoisting Behavior",
          description: "Declarations are hoisted; expressions follow variable rules.",
        },
      ],
    },
  },

  {
    id: 219,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Function Expression Example",
    type: "code-plus",
    content: {
      title: "Assigning a Function to a Variable",
      points: [
        "Functions can be stored in variables",
        "Expressions run only after definition",
        "Use const for safety",
      ],
      code: `const greet = function(name) {
  return "Hello, " + name;
};

console.log(greet("Ada"));`,
      note: "Function expressions are common in callbacks and modern JS.",
    },
  },

  {
    id: 220,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Hoisting: Declaration vs Expression",
    type: "code-plus",
    content: {
      title: "Why Hoisting Matters",
      points: [
        "Declarations are hoisted",
        "Expressions are not callable before definition",
        "Use clear ordering",
      ],
      code: `sayHi(); // Works
function sayHi() {
  console.log("Hi");
}

// sayBye(); // ❌ ReferenceError
const sayBye = function() {
  console.log("Bye");
};`,
      note: "Function declarations are hoisted, function expressions are not.",
    },
  },

  {
    id: 85,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Why Functions Do Not Run Automatically",
    type: "two-column",
    content: {
      left: {
        title: "Important Rule",
        items: [
          "Defining a function does not run it",
          "Calling a function runs it",
          "This gives you control",
          "Prevents accidental execution",
        ],
      },
      right: {
        title: "Beginner Mistake",
        items: [
          "Forgetting to call the function",
          "Expecting code to run automatically",
          "Missing parentheses ()",
          "Confusing definition with execution",
        ],
      },
    },
  },

  {
    id: 86,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Functions with Input (Parameters)",
    type: "two-column",
    content: {
      left: {
        title: "Why Input Matters",
        items: [
          "Functions become flexible",
          "Same logic, different data",
          "Avoid hard-coded values",
          "More powerful programs",
        ],
      },
      right: {
        title: "Key Terms",
        items: [
          "Parameter: placeholder value",
          "Argument: actual value passed in",
          "Defined in parentheses",
          "Used inside the function",
        ],
      },
    },
  },

  {
    id: 87,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Function with Parameters (Example)",
    type: "code-plus",
    content: {
      title: "Passing Data into Functions",
      points: [
        "Parameters act like variables",
        "Arguments fill the parameters",
        "Values are local to the function",
      ],
      code: `function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice");
greet("Bob");`,
      note:
        "The same function behaves differently based on the input provided.",
    },
  },

  {
    id: 88,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Functions That Return Values",
    type: "two-column",
    content: {
      left: {
        title: "Why Return Values",
        items: [
          "Functions can send data back",
          "Returned values can be reused",
          "Important for calculations",
          "Core programming concept",
        ],
      },
      right: {
        title: "Important Rules",
        items: [
          "return sends a value back",
          "Function stops at return",
          "Only one value is returned",
          "Returned value can be stored",
        ],
      },
    },
  },

  {
    id: 89,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Return Value Example",
    type: "code-plus",
    content: {
      title: "Getting Output from Functions",
      points: [
        "Store return value in variable",
        "Reuse result elsewhere",
        "Do not console.log inside logic",
      ],
      code: `function add(a, b) {
  return a + b;
}

let result = add(3, 5);
console.log(result); // 8`,
      note: "The function calculates a value and returns it for reuse.",
    },
  },

  {
    id: 90,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Local Scope (Very Important)",
    type: "two-column",
    content: {
      left: {
        title: "What Scope Means",
        items: [
          "Scope is where variables exist",
          "Variables inside functions are local",
          "Local variables cannot be accessed outside",
          "Prevents accidental conflicts",
        ],
      },
      right: {
        title: "Beginner Rule",
        items: [
          "Declare variables inside functions",
          "Avoid global variables early",
          "Use return to share data",
          "Keep functions self-contained",
        ],
      },
    },
  },

  {
    id: 91,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Scope Example",
    type: "code-plus",
    content: {
      title: "Local vs Global",
      points: [
        "Variables inside functions are local",
        "Outside code cannot see them",
        "Prevents bugs",
      ],
      code: `function test() {
  let x = 10;
  console.log(x);
}

test();
// console.log(x); ❌ Error`,
      note:
        "Variables declared inside functions cannot be accessed outside.",
    },
  },

  {
    id: 92,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting to call the function",
          "Missing return statements",
          "Using console.log instead of return",
          "Overusing global variables",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Call functions explicitly",
          "Ask: what should this return?",
          "Keep logic separate from output",
          "Write small functions",
        ],
      },
    },
  },

  {
    id: 93,
    moduleId: 7,
    moduleTitle: "Functions (Making Code Reusable)",
    title: "Thinking in Functions",
    type: "two-column",
    content: {
      left: {
        title: "Programmer Mindset",
        items: [
          "Break problems into steps",
          "Each function does one thing",
          "Reuse logic instead of repeating",
          "Name functions clearly",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "More function styles",
          "Arrow functions",
          "Callbacks",
          "Functions as data",
        ],
      },
    },
  }, // =========================

  {
    id: 225,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Spread Operator",
    type: "code-plus",
    content: {
      title: "Copy and Combine",
      points: [
        "Spread arrays and objects",
        "Avoid mutation",
        "Very common",
      ],
      code: `const nums = [1, 2, 3];
const copy = [...nums, 4];

const user = { name: "Ada" };
const full = { ...user, age: 25 };

console.log(copy, full);`,
      note: "Spread creates new arrays/objects without changing the original.",
    },
  },

  {
    id: 226,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Rest Parameters",
    type: "code-plus",
    content: {
      title: "Collect Many Arguments",
      points: [
        "Use ...args",
        "Works with any number of inputs",
        "Great for utilities",
      ],
      code: `function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));`,
      note: "Rest parameters collect arguments into an array.",
    },
  },


  {
    id: 248,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Object Destructuring Example",
    type: "code-plus",
    content: {
      title: "Pull Values Out",
      points: [
        "Extract properties quickly",
        "Reduce repetition",
        "Very common in React",
      ],
      code: `const user = { name: "Ada", age: 25 };
const { name, age } = user;

console.log(name, age);`,
      note: "Destructuring makes object access cleaner.",
    },
  },

  {
    id: 249,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Optional Chaining",
    type: "code-plus",
    content: {
      title: "Safe Access",
      points: [
        "Avoid errors on missing data",
        "Return undefined safely",
        "Great for API data",
      ],
      code: `const user = { profile: { name: "Ada" } };

console.log(user.profile?.name);
console.log(user.settings?.theme);`,
      note: "Optional chaining prevents crashes on missing properties.",
    },
  },


  {
    id: 259,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Default Parameters Example",
    type: "code-plus",
    content: {
      title: "Fallback Values",
      points: [
        "Avoid undefined",
        "Make APIs friendlier",
        "Clean defaults",
      ],
      code: `function greet(name = "friend") {
  return \`Hello, \${name}\`;
}

console.log(greet());
console.log(greet("Ada"));`,
      note: "Defaults make functions safer and simpler.",
    },
  },


  {
    id: 265,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Object Shorthand",
    type: "code-plus",
    content: {
      title: "Cleaner Objects",
      points: [
        "Shorter syntax",
        "Common in modern JS",
        "Keeps code clean",
      ],
      code: `const name = "Ada";
const age = 25;

const user = { name, age };
console.log(user);`,
      note: "Shorthand makes object creation cleaner.",
    },
  },

  // Module 8: Modern JavaScript (ES6+)
  // =========================

  {
    id: 94,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Why Modern JavaScript Exists",
    type: "two-column",
    content: {
      left: {
        title: "Old JavaScript Problems",
        items: [
          "Code was verbose",
          "Hard to read and maintain",
          "Too many bugs from globals",
          "Inconsistent patterns",
        ],
      },
      right: {
        title: "What ES6+ Solves",
        items: [
          "Cleaner syntax",
          "Safer variables",
          "Better functions",
          "More expressive code",
        ],
      },
    },
  },

  {
    id: 95,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "let and const (Revisited)",
    type: "two-column",
    content: {
      left: {
        title: "Modern Variable Rules",
        items: [
          "Use const by default",
          "Use let only when needed",
          "Avoid var entirely",
          "Reduces bugs",
        ],
      },
      right: {
        title: "Why var Is Dangerous",
        items: [
          "Function-scoped, not block-scoped",
          "Allows redeclaration",
          "Causes unexpected behavior",
          "Legacy only",
        ],
      },
    },
  },

  {
    id: 96,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Arrow Functions",
    type: "two-column",
    content: {
      left: {
        title: "What Arrow Functions Are",
        items: [
          "Shorter function syntax",
          "More readable",
          "Very common in modern code",
          "Used heavily in React",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "Input on the left",
          "Arrow points to output",
          "Implicit return in simple cases",
          "Still regular functions",
        ],
      },
    },
  },

  {
    id: 97,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Arrow Function Example",
    type: "code-plus",
    content: {
      title: "Old vs New Function Syntax",
      points: ["Cleaner syntax", "Less boilerplate", "Same behavior"],
      code: `// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

console.log(addArrow(2, 3));`,
      note: "Arrow functions make simple logic easier to read.",
    },
  },

  {
    id: 98,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Template Literals",
    type: "two-column",
    content: {
      left: {
        title: "The Old Way",
        items: [
          "String concatenation with +",
          "Hard to read",
          "Error-prone",
          "Ugly formatting",
        ],
      },
      right: {
        title: "Template Literals",
        items: [
          "Use backticks ` `",
          "Embed variables easily",
          "Supports multi-line strings",
          "Much cleaner",
        ],
      },
    },
  },

  {
    id: 99,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Template Literal Example",
    type: "code-plus",
    content: {
      title: "Embedding Variables in Strings",
      points: [
        "Use ${} to inject values",
        "Improves readability",
        "Standard modern practice",
      ],
      code: `const name = "Alice";
const age = 25;

const message = \`Hello, my name is \${name} and I am \${age} years old.\`;

console.log(message);`,
      note:
        "Template literals remove the need for string concatenation.",
    },
  },

  {
    id: 100,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Destructuring (Concept First)",
    type: "two-column",
    content: {
      left: {
        title: "What Destructuring Does",
        items: [
          "Extract values from arrays or objects",
          "Assign them to variables",
          "Reduces repetitive code",
          "Very common in modern JS",
        ],
      },
      right: {
        title: "Why It Exists",
        items: [
          "Cleaner variable assignment",
          "Avoid repeated dot notation",
          "Improves clarity",
          "Less boilerplate",
        ],
      },
    },
  },

  {
    id: 101,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Array Destructuring Example",
    type: "code-plus",
    content: {
      title: "Extracting Array Values",
      points: [
        "Order matters",
        "Variables map to positions",
        "Very readable",
      ],
      code: `const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);  // Red
console.log(second); // Green`,
      note: "Destructuring pulls values out of arrays easily.",
    },
  },

  {
    id: 102,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Object Destructuring Example",
    type: "code-plus",
    content: {
      title: "Extracting Object Properties",
      points: [
        "Property names must match",
        "Order does not matter",
        "Very common in real apps",
      ],
      code: `const user = {
  name: "Alice",
  age: 25
};

const { name, age } = user;

console.log(name);
console.log(age);`,
      note: "Object destructuring simplifies property access.",
    },
  },

  {
    id: 103,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Spread Operator (...)",
    type: "two-column",
    content: {
      left: {
        title: "What Spread Does",
        items: [
          "Expands arrays or objects",
          "Copies values safely",
          "Avoids mutation",
          "Used everywhere in modern JS",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Copying arrays",
          "Merging objects",
          "Passing arguments",
          "State updates",
        ],
      },
    },
  },

  {
    id: 104,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Spread Operator Example",
    type: "code-plus",
    content: {
      title: "Copying Arrays and Objects",
      points: [
        "Creates new copies",
        "Does not modify originals",
        "Safer programming",
      ],
      code: `const nums = [1, 2, 3];
const newNums = [...nums, 4];

console.log(newNums);

const user = { name: "Alice" };
const updatedUser = { ...user, age: 25 };

console.log(updatedUser);`,
      note: "Spread operator helps avoid accidental data mutation.",
    },
  },

  {
    id: 105,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing arrow functions",
          "Confusing destructuring syntax",
          "Mutating data accidentally",
          "Using var out of habit",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Start simple",
          "Read code slowly",
          "Use const often",
          "Practice small examples",
        ],
      },
    },
  },

  {
    id: 106,
    moduleId: 8,
    moduleTitle: "Modern JavaScript (ES6+)",
    title: "Thinking in Modern JavaScript",
    type: "two-column",
    content: {
      left: {
        title: "Mindset Shift",
        items: [
          "Prefer immutability",
          "Write expressive code",
          "Reduce repetition",
          "Think in transformations",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Advanced array methods",
          "map, filter, reduce",
          "Functional patterns",
          "Cleaner data processing",
        ],
      },
    },
  }, // =========================

  {
    id: 227,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods (map, filter, reduce)",
    title: "find() and some()",
    type: "code-plus",
    content: {
      title: "Searching Arrays",
      points: [
        "find returns the first match",
        "some checks if any match",
        "Clean alternatives to loops",
      ],
      code: `const nums = [1, 3, 5, 8];

const firstEven = nums.find(n => n % 2 === 0);
const hasEven = nums.some(n => n % 2 === 0);

console.log(firstEven, hasEven);`,
      note: "These methods simplify common search patterns.",
    },
  },

  {
    id: 228,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods (map, filter, reduce)",
    title: "sort() Example",
    type: "code-plus",
    content: {
      title: "Sorting Numbers",
      points: [
        "Provide a compare function",
        "Default sort is lexical",
        "Sort returns the same array",
      ],
      code: `const nums = [10, 2, 5, 1];
nums.sort((a, b) => a - b);

console.log(nums);`,
      note: "Always provide a compare function for numbers.",
    },
  },


  {
    id: 250,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods (map, filter, reduce)",
    title: "reduce() Example",
    type: "code-plus",
    content: {
      title: "Summing Values",
      points: [
        "reduce combines values",
        "Starts with an initial value",
        "Powerful for totals",
      ],
      code: `const nums = [1, 2, 3, 4];
const total = nums.reduce((sum, n) => sum + n, 0);

console.log(total);`,
      note: "reduce is useful for totals and accumulation.",
    },
  },

  {
    id: 251,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods (map, filter, reduce)",
    title: "Chaining Methods",
    type: "code-plus",
    content: {
      title: "Map + Filter",
      points: [
        "Chain methods for clarity",
        "Readable data pipelines",
        "Common in modern JS",
      ],
      code: `const nums = [1, 2, 3, 4, 5];
const result = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result);`,
      note: "Chaining keeps transformations clean.",
    },
  },


  {
    id: 260,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods (map, filter, reduce)",
    title: "every() Example",
    type: "code-plus",
    content: {
      title: "Check All Items",
      points: [
        "every() returns true/false",
        "Great for validation",
        "Stops early if false",
      ],
      code: `const scores = [80, 90, 70];
const allPassed = scores.every(s => s >= 60);

console.log(allPassed);`,
      note: "every() is a clean way to validate arrays.",
    },
  },


  {
    id: 266,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods (map, filter, reduce)",
    title: "flat() Example",
    type: "code-plus",
    content: {
      title: "Flatten Arrays",
      points: [
        "Reduce nesting",
        "Use flat(depth)",
        "Handy for data cleanup",
      ],
      code: `const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat(2));`,
      note: "flat() simplifies nested data structures.",
    },
  },

  // Module 9: Advanced Array Methods (map, filter, reduce)
  // =========================

  {
    id: 107,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "Why Array Methods Exist",
    type: "two-column",
    content: {
      left: {
        title: "The Problem with Loops",
        items: [
          "Loops work but can be verbose",
          "Logic and iteration get mixed",
          "Harder to read at scale",
          "More room for bugs",
        ],
      },
      right: {
        title: "What Array Methods Do",
        items: [
          "Abstract looping logic",
          "Make code more readable",
          "Express intent clearly",
          "Standard modern JavaScript practice",
        ],
      },
    },
  },

  {
    id: 108,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "Mental Model for Array Methods",
    type: "two-column",
    content: {
      left: {
        title: "How to Think About Them",
        items: [
          "Array methods loop for you",
          "You describe what should happen",
          "JavaScript handles repetition",
          "Cleaner and safer code",
        ],
      },
      right: {
        title: "Important Rule",
        items: [
          "Original array is usually not changed",
          "A new array/value is returned",
          "Functions drive the behavior",
          "Very functional in nature",
        ],
      },
    },
  },

  {
    id: 109,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "Introducing map()",
    type: "two-column",
    content: {
      left: {
        title: "What map() Does",
        items: [
          "Transforms each item",
          "Returns a new array",
          "Keeps the same length",
          "Most commonly used array method",
        ],
      },
      right: {
        title: "When to Use map()",
        items: [
          "Convert values",
          "Format data",
          "Extract properties",
          "Prepare data for display",
        ],
      },
    },
  },

  {
    id: 110,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "map() Example",
    type: "code-plus",
    content: {
      title: "Transforming Array Values",
      points: [
        "map returns a new array",
        "Callback runs on each item",
        "Original array stays unchanged",
      ],
      code: `const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]`,
      note: "map transforms every item and returns a new array.",
    },
  },

  {
    id: 111,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "Introducing filter()",
    type: "two-column",
    content: {
      left: {
        title: "What filter() Does",
        items: [
          "Selects certain items",
          "Returns a smaller array",
          "Uses true or false logic",
          "Does not change original array",
        ],
      },
      right: {
        title: "When to Use filter()",
        items: [
          "Remove unwanted data",
          "Apply conditions",
          "Search and refine lists",
          "Validate datasets",
        ],
      },
    },
  },

  {
    id: 112,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "filter() Example",
    type: "code-plus",
    content: {
      title: "Selecting Items from an Array",
      points: [
        "Condition returns true or false",
        "Only true values remain",
        "Array length may change",
      ],
      code: `const ages = [12, 18, 25, 14, 30];

const adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 25, 30]`,
      note: "filter removes items that do not meet the condition.",
    },
  },

  {
    id: 113,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "Introducing reduce()",
    type: "two-column",
    content: {
      left: {
        title: "What reduce() Does",
        items: [
          "Combines all values into one",
          "Carries an accumulated result",
          "Most powerful array method",
          "Often hardest to understand",
        ],
      },
      right: {
        title: "Beginner Mental Model",
        items: [
          "Start with an initial value",
          "Process items one by one",
          "Accumulate a result",
          "Return a final value",
        ],
      },
    },
  },

  {
    id: 114,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "reduce() Example (Step by Step)",
    type: "code-plus",
    content: {
      title: "Summing Values with reduce",
      points: [
        "accumulator stores running total",
        "current is the current item",
        "Initial value is important",
      ],
      code: `const numbers = [1, 2, 3, 4];

const total = numbers.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log(total); // 10`,
      note: "reduce combines all values into a single result.",
    },
  },

  {
    id: 115,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "map vs filter vs reduce",
    type: "two-column",
    content: {
      left: {
        title: "Quick Comparison",
        items: [
          "map → transform items",
          "filter → select items",
          "reduce → combine items",
          "Each serves a different purpose",
        ],
      },
      right: {
        title: "Beginner Tip",
        items: [
          "Do not force reduce",
          "Use map and filter first",
          "Clarity over cleverness",
          "Readability matters",
        ],
      },
    },
  },

  {
    id: 116,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "Chaining Array Methods",
    type: "two-column",
    content: {
      left: {
        title: "What Chaining Means",
        items: [
          "Calling methods one after another",
          "Each returns a new array",
          "Readable data pipelines",
          "Very common in real apps",
        ],
      },
      right: {
        title: "Example Use Case",
        items: [
          "Filter data",
          "Transform results",
          "Summarize output",
          "One clean expression",
        ],
      },
    },
  },

  {
    id: 117,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "Method Chaining Example",
    type: "code-plus",
    content: {
      title: "Combining map and filter",
      points: ["filter first, then map", "Order matters", "Readable flow"],
      code: `const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10);

console.log(result); // [20, 40, 60]`,
      note:
        "Chaining creates expressive and concise data transformations.",
    },
  },

  {
    id: 118,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Mutating arrays accidentally",
          "Overusing reduce",
          "Forgetting return statements",
          "Unreadable chaining",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Use const",
          "Keep callbacks simple",
          "Break chains when needed",
          "Prefer clarity",
        ],
      },
    },
  },

  {
    id: 119,
    moduleId: 9,
    moduleTitle: "Advanced Array Methods",
    title: "Thinking Functionally",
    type: "two-column",
    content: {
      left: {
        title: "New Mindset",
        items: [
          "Transform data, don’t mutate",
          "Describe what, not how",
          "Compose small operations",
          "Readable pipelines",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Asynchronous JavaScript",
          "Callbacks and promises",
          "Async/await",
          "Real-world data fetching",
        ],
      },
    },
  }, // =========================

  {
    id: 229,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript (Callbacks, Promises, async/await)",
    title: "Callback Example",
    type: "code-plus",
    content: {
      title: "Async with Callbacks",
      points: [
        "A function runs later",
        "Common in older JS",
        "Still used in APIs",
      ],
      code: `setTimeout(() => {
  console.log("Runs later");
}, 1000);`,
      note: "Callbacks schedule code for the future.",
    },
  },

  {
    id: 230,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript (Callbacks, Promises, async/await)",
    title: "Promise Example",
    type: "code-plus",
    content: {
      title: "Then / Catch",
      points: [
        "Promises handle async results",
        "then for success",
        "catch for errors",
      ],
      code: `const p = Promise.resolve("OK");

p.then(msg => console.log(msg))
 .catch(err => console.error(err));`,
      note: "Promises improve async readability.",
    },
  },

  {
    id: 231,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript (Callbacks, Promises, async/await)",
    title: "async/await Example",
    type: "code-plus",
    content: {
      title: "Cleaner Async Code",
      points: [
        "await pauses execution",
        "looks synchronous",
        "wrap in async function",
      ],
      code: `async function load() {
  const value = await Promise.resolve(42);
  console.log(value);
}

load();`,
      note: "async/await is the modern async style.",
    },
  },


  {
    id: 252,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript (Callbacks, Promises, async/await)",
    title: "Promise + async/await",
    type: "code-plus",
    content: {
      title: "Await a Promise",
      points: [
        "await works with promises",
        "Try/catch for errors",
        "Cleaner async flow",
      ],
      code: `function getValue() {
  return Promise.resolve("OK");
}

async function run() {
  try {
    const value = await getValue();
    console.log(value);
  } catch (err) {
    console.error(err);
  }
}

run();`,
      note: "async/await makes async logic easier to read.",
    },
  },


  {
    id: 261,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript (Callbacks, Promises, async/await)",
    title: "Promise.all Example",
    type: "code-plus",
    content: {
      title: "Run in Parallel",
      points: [
        "Wait for multiple promises",
        "Faster than sequential",
        "Handle arrays of requests",
      ],
      code: `const a = Promise.resolve(1);
const b = Promise.resolve(2);

Promise.all([a, b]).then(values => {
  console.log(values);
});`,
      note: "Promise.all waits for all promises to finish.",
    },
  },


  {
    id: 267,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript (Callbacks, Promises, async/await)",
    title: "Promise.race Example",
    type: "code-plus",
    content: {
      title: "First Result Wins",
      points: [
        "Resolve the fastest promise",
        "Useful for timeouts",
        "Race multiple requests",
      ],
      code: `const slow = new Promise(r => setTimeout(() => r("slow"), 1000));
const fast = new Promise(r => setTimeout(() => r("fast"), 200));

Promise.race([slow, fast]).then(console.log);`,
      note: "Promise.race returns the first completed result.",
    },
  },

  // Module 10: Asynchronous JavaScript (Callbacks, Promises, async/await)
  // =========================

  {
    id: 120,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "Why Asynchronous Code Exists",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Some tasks take time",
          "Waiting blocks the program",
          "Users experience freezing",
          "Poor user experience",
        ],
      },
      right: {
        title: "The Solution",
        items: [
          "Do not block execution",
          "Run tasks in the background",
          "Handle results when ready",
          "This is called asynchronous code",
        ],
      },
    },
  },

  {
    id: 121,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "Synchronous vs Asynchronous",
    type: "two-column",
    content: {
      left: {
        title: "Synchronous Code",
        items: [
          "Runs step by step",
          "Each task waits for the previous",
          "Easy to reason about",
          "Can cause blocking",
        ],
      },
      right: {
        title: "Asynchronous Code",
        items: [
          "Long tasks run separately",
          "Program continues running",
          "Results handled later",
          "Essential for modern apps",
        ],
      },
    },
  },

  {
    id: 122,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "Real-Life Analogy",
    type: "two-column",
    content: {
      left: {
        title: "Synchronous Life",
        items: [
          "Wait for food before doing anything",
          "Everything stops",
          "Very inefficient",
        ],
      },
      right: {
        title: "Asynchronous Life",
        items: ["Order food", "Do other tasks", "Eat when food is ready"],
      },
    },
  },

  {
    id: 123,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "Introducing Callbacks",
    type: "two-column",
    content: {
      left: {
        title: "What a Callback Is",
        items: [
          "A function passed to another function",
          "Executed later",
          "Runs after a task completes",
          "First async pattern in JavaScript",
        ],
      },
      right: {
        title: "Why Callbacks Were Used",
        items: [
          "Simple async handling",
          "Event-based programming",
          "Timers and events",
          "Still widely used",
        ],
      },
    },
  },

  {
    id: 124,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "Callback Example",
    type: "code-plus",
    content: {
      title: "Using a Callback",
      points: [
        "Function passed as argument",
        "Runs after delay",
        "Execution order matters",
      ],
      code: `setTimeout(() => {
  console.log("This runs later");
}, 2000);

console.log("This runs first");`,
      note: "The callback runs after the timer finishes.",
    },
  },

  {
    id: 125,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "The Problem with Callbacks",
    type: "two-column",
    content: {
      left: {
        title: "Issues",
        items: [
          "Nested callbacks",
          "Hard to read code",
          "Difficult error handling",
          "Known as callback hell",
        ],
      },
      right: {
        title: "Result",
        items: [
          "Code becomes messy",
          "Logic is hard to follow",
          "Maintenance is painful",
          "Better patterns were needed",
        ],
      },
    },
  },

  {
    id: 126,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "Introducing Promises",
    type: "two-column",
    content: {
      left: {
        title: "What a Promise Is",
        items: [
          "An object representing future value",
          "Either resolves or rejects",
          "Cleaner than callbacks",
          "Foundation of modern async JS",
        ],
      },
      right: {
        title: "Promise States",
        items: ["Pending", "Fulfilled", "Rejected", "Only one final state"],
      },
    },
  },

  {
    id: 127,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "Promise Example",
    type: "code-plus",
    content: {
      title: "Creating and Using a Promise",
      points: [
        "resolve for success",
        "reject for errors",
        "then handles success",
        "catch handles failure",
      ],
      code: `const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1500);
});

fetchData
  .then(data => console.log(data))
  .catch(error => console.log(error));`,
      note: "Promises make async flows easier to manage.",
    },
  },

  {
    id: 128,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "async / await (Modern Way)",
    type: "two-column",
    content: {
      left: {
        title: "What async/await Does",
        items: [
          "Built on top of promises",
          "Looks like synchronous code",
          "Much easier to read",
          "Industry standard",
        ],
      },
      right: {
        title: "Beginner Mental Model",
        items: [
          "await pauses inside function",
          "Other code keeps running",
          "Cleaner flow",
          "Better error handling",
        ],
      },
    },
  },

  {
    id: 129,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "async / await Example",
    type: "code-plus",
    content: {
      title: "Cleaner Async Code",
      points: [
        "async marks function",
        "await waits for promise",
        "try/catch handles errors",
      ],
      code: `async function getData() {
  try {
    const result = await fetchData;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData();`,
      note: "async/await makes asynchronous code easier to understand.",
    },
  },

  {
    id: 130,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting await",
          "Using await outside async",
          "Not handling errors",
          "Mixing callbacks and promises",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Use async/await consistently",
          "Always wrap with try/catch",
          "Read errors carefully",
          "Practice small examples",
        ],
      },
    },
  },

  {
    id: 131,
    moduleId: 10,
    moduleTitle: "Asynchronous JavaScript",
    title: "Thinking Asynchronously",
    type: "two-column",
    content: {
      left: {
        title: "New Mindset",
        items: [
          "Not everything runs immediately",
          "Some values arrive later",
          "Design for waiting",
          "Handle success and failure",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Working with APIs",
          "Fetching data",
          "HTTP requests",
          "Real-world async use cases",
        ],
      },
    },
  }, // =========================

  {
    id: 232,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Fetch GET Example",
    type: "code-plus",
    content: {
      title: "Request Data",
      points: [
        "fetch makes HTTP requests",
        "Use .json() to parse",
        "Handle errors",
      ],
      code: `fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
      note: "Always handle errors in network requests.",
    },
  },

  {
    id: 233,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Fetch POST Example",
    type: "code-plus",
    content: {
      title: "Send Data",
      points: [
        "POST sends data to server",
        "Use JSON.stringify",
        "Set headers",
      ],
      code: `fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ada" })
});`,
      note: "POST requests are common for creating data.",
    },
  },


  {
    id: 253,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Async Fetch Example",
    type: "code-plus",
    content: {
      title: "await fetch",
      points: [
        "Use async/await with fetch",
        "Handle JSON",
        "Wrap in try/catch",
      ],
      code: `async function loadUsers() {
  try {
    const res = await fetch("https://api.example.com/users");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

loadUsers();`,
      note: "Async fetch is the modern pattern.",
    },
  },


  {
    id: 262,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Handling Status Codes",
    type: "code-plus",
    content: {
      title: "Check HTTP Responses",
      points: [
        "Use res.ok",
        "Throw on errors",
        "Handle 404/500",
      ],
      code: `fetch("https://api.example.com/data")
  .then(res => {
    if (!res.ok) throw new Error("HTTP error");
    return res.json();
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
      note: "Always check the response status.",
    },
  },


  {
    id: 268,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Abort Fetch",
    type: "code-plus",
    content: {
      title: "Cancel Requests",
      points: [
        "Use AbortController",
        "Stop long requests",
        "Improve UX",
      ],
      code: `const controller = new AbortController();
fetch("https://api.example.com/data", { signal: controller.signal });

// Later
controller.abort();`,
      note: "AbortController cancels pending requests.",
    },
  },

  // Module 11: Working with APIs & Fetching Data
  // =========================

  {
    id: 132,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "What Is an API?",
    type: "two-column",
    content: {
      left: {
        title: "API Explained Simply",
        items: [
          "API means Application Programming Interface",
          "It allows programs to talk to each other",
          "One program requests data",
          "Another program responds with data",
        ],
      },
      right: {
        title: "Real-Life Analogy",
        items: [
          "You order food at a restaurant",
          "The waiter is the API",
          "The kitchen prepares the data",
          "You receive the result",
        ],
      },
    },
  },

  {
    id: 133,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Why APIs Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without APIs",
        items: [
          "Applications are isolated",
          "No shared data",
          "Limited functionality",
          "Poor user experience",
        ],
      },
      right: {
        title: "With APIs",
        items: [
          "Access remote data",
          "Integrate services",
          "Build dynamic apps",
          "Power modern software",
        ],
      },
    },
  },

  {
    id: 134,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Client–Server Model",
    type: "two-column",
    content: {
      left: {
        title: "Client",
        items: [
          "Requests data",
          "Usually a browser or app",
          "Initiates communication",
          "Waits for response",
        ],
      },
      right: {
        title: "Server",
        items: [
          "Receives requests",
          "Processes logic",
          "Returns data",
          "Often hosts APIs",
        ],
      },
    },
  },

  {
    id: 135,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "HTTP Basics (Conceptual)",
    type: "two-column",
    content: {
      left: {
        title: "What Is HTTP?",
        items: [
          "Protocol for communication",
          "Defines how data is sent",
          "Used by browsers and servers",
          "Foundation of the web",
        ],
      },
      right: {
        title: "Common HTTP Methods",
        items: [
          "GET → retrieve data",
          "POST → send data",
          "PUT → update data",
          "DELETE → remove data",
        ],
      },
    },
  },

  {
    id: 136,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "What Is JSON?",
    type: "two-column",
    content: {
      left: {
        title: "JSON Explained",
        items: [
          "JavaScript Object Notation",
          "Lightweight data format",
          "Easy to read and write",
          "Used by most APIs",
        ],
      },
      right: {
        title: "Why JSON Is Popular",
        items: [
          "Language-independent",
          "Maps well to objects",
          "Human-readable",
          "Efficient for data exchange",
        ],
      },
    },
  },

  {
    id: 137,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "JSON Example",
    type: "code-plus",
    content: {
      title: "Typical API Response",
      points: [
        "Looks like a JavaScript object",
        "Keys and values",
        "Often nested",
      ],
      code: `{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com",
  "isActive": true
}`,
      note: "Most APIs send and receive data in JSON format.",
    },
  },

  {
    id: 138,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Introducing fetch()",
    type: "two-column",
    content: {
      left: {
        title: "What fetch() Does",
        items: [
          "Makes HTTP requests",
          "Returns a promise",
          "Used to call APIs",
          "Built into modern browsers",
        ],
      },
      right: {
        title: "Beginner Mental Model",
        items: [
          "Request data",
          "Wait for response",
          "Convert to JSON",
          "Use the result",
        ],
      },
    },
  },

  {
    id: 139,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Basic fetch() Example",
    type: "code-plus",
    content: {
      title: "Fetching Data from an API",
      points: [
        "fetch returns a promise",
        "response.json() parses data",
        "await makes code readable",
      ],
      code: `async function loadData() {
  const response = await fetch("https://api.example.com/users");
  const data = await response.json();
  console.log(data);
}

loadData();`,
      note:
        "fetch allows your app to retrieve data from external services.",
    },
  },

  {
    id: 140,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Handling Errors",
    type: "two-column",
    content: {
      left: {
        title: "Why Errors Happen",
        items: [
          "Network issues",
          "Server problems",
          "Invalid responses",
          "Wrong URLs",
        ],
      },
      right: {
        title: "How to Handle Them",
        items: [
          "Check response status",
          "Use try/catch",
          "Show user-friendly messages",
          "Never assume success",
        ],
      },
    },
  },

  {
    id: 141,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "fetch() with Error Handling",
    type: "code-plus",
    content: {
      title: "Safe API Calls",
      points: [
        "Always wrap in try/catch",
        "Check response.ok",
        "Handle failures gracefully",
      ],
      code: `async function loadData() {
  try {
    const response = await fetch("https://api.example.com/users");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

loadData();`,
      note: "Proper error handling prevents crashes and improves UX.",
    },
  },

  {
    id: 142,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting await",
          "Not parsing JSON",
          "Ignoring errors",
          "Hardcoding API logic",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Use async/await consistently",
          "Log responses while learning",
          "Handle failures early",
          "Test with simple APIs",
        ],
      },
    },
  },

  {
    id: 143,
    moduleId: 11,
    moduleTitle: "Working with APIs & Fetching Data",
    title: "Thinking in Data Flows",
    type: "two-column",
    content: {
      left: {
        title: "New Perspective",
        items: [
          "Data comes from outside",
          "Not everything is immediate",
          "UI reacts to data",
          "Errors are normal",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Recursion and call stack",
          "Deeper execution models",
          "Advanced problem solving",
          "Algorithmic thinking",
        ],
      },
    },
  }, // =========================

  {
    id: 234,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Factorial Example",
    type: "code-plus",
    content: {
      title: "Classic Recursion",
      points: [
        "Base case stops recursion",
        "Each call reduces input",
        "Returns a value",
      ],
      code: `function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));`,
      note: "Factorial is a standard recursion example.",
    },
  },

  {
    id: 235,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Tracing Calls",
    type: "code-plus",
    content: {
      title: "See the Stack",
      points: [
        "Log before recursion",
        "Log after recursion",
        "Understand call order",
      ],
      code: `function countdown(n) {
  if (n === 0) return;
  console.log("call", n);
  countdown(n - 1);
  console.log("return", n);
}

countdown(3);`,
      note: "This shows how the call stack grows and unwinds.",
    },
  },

  // Module 12: Recursion & the Call Stack
  // =========================

  {
    id: 144,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "What Is Recursion?",
    type: "two-column",
    content: {
      left: {
        title: "Simple Definition",
        items: [
          "A function that calls itself",
          "Solves a problem by breaking it down",
          "Each call works on a smaller part",
          "Stops when a condition is met",
        ],
      },
      right: {
        title: "Why It Exists",
        items: [
          "Some problems are naturally recursive",
          "Cleaner than complex loops",
          "Matches mathematical thinking",
          "Used in advanced programming",
        ],
      },
    },
  },

  {
    id: 145,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Real-Life Mental Model",
    type: "two-column",
    content: {
      left: {
        title: "Everyday Example",
        items: [
          "Looking into mirrors",
          "Opening nested folders",
          "Russian nesting dolls",
          "Repeating the same action",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Same task repeats",
          "Input gets smaller each time",
          "Eventually stops",
          "That stop is critical",
        ],
      },
    },
  },

  {
    id: 146,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Base Case vs Recursive Case",
    type: "two-column",
    content: {
      left: {
        title: "Base Case",
        items: [
          "The stopping condition",
          "Prevents infinite recursion",
          "Always required",
          "Simplest version of the problem",
        ],
      },
      right: {
        title: "Recursive Case",
        items: [
          "Function calls itself",
          "Moves closer to base case",
          "Handles part of the problem",
          "Repeats logic",
        ],
      },
    },
  },

  {
    id: 147,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Simple Recursion Example",
    type: "code-plus",
    content: {
      title: "Countdown with Recursion",
      points: [
        "Base case stops recursion",
        "Each call reduces the problem",
        "Same logic reused",
      ],
      code: `function countdown(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  countdown(n - 1);
}

countdown(5);`,
      note:
        "The function keeps calling itself until the base case is reached.",
    },
  },

  {
    id: 148,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Understanding the Call Stack",
    type: "two-column",
    content: {
      left: {
        title: "What Is the Call Stack?",
        items: [
          "Tracks function calls",
          "Last call goes on top",
          "Functions return in reverse order",
          "Managed automatically by JavaScript",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Explains recursion behavior",
          "Helps debug errors",
          "Important for performance",
          "Core execution concept",
        ],
      },
    },
  },

  {
    id: 149,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Call Stack Visualization",
    type: "two-column",
    content: {
      left: {
        title: "Stack Growth",
        items: [
          "Each call adds a new frame",
          "Variables are isolated per call",
          "Stack grows downward",
          "Memory is used per call",
        ],
      },
      right: {
        title: "Stack Unwinding",
        items: [
          "Base case reached",
          "Functions return values",
          "Stack clears upward",
          "Execution completes",
        ],
      },
    },
  },

  {
    id: 150,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Recursion with Return Values",
    type: "code-plus",
    content: {
      title: "Factorial Example",
      points: [
        "Each call returns a value",
        "Values combine on return",
        "Classic recursion use case",
      ],
      code: `function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120`,
      note:
        "Each recursive call returns a value that builds the final result.",
    },
  },

  {
    id: 151,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Recursion vs Loops",
    type: "two-column",
    content: {
      left: {
        title: "When Recursion Is Better",
        items: [
          "Tree-like data",
          "Nested structures",
          "Divide-and-conquer problems",
          "Cleaner expression",
        ],
      },
      right: {
        title: "When Loops Are Better",
        items: [
          "Simple repetition",
          "Large datasets",
          "Performance-critical code",
          "Avoiding stack overflow",
        ],
      },
    },
  },

  {
    id: 152,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Missing base case",
          "Base case never reached",
          "Infinite recursion",
          "Stack overflow errors",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always define base case first",
          "Test with small values",
          "Trace calls step by step",
          "Log function arguments",
        ],
      },
    },
  },

  {
    id: 153,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Thinking Recursively",
    type: "two-column",
    content: {
      left: {
        title: "Problem-Solving Mindset",
        items: [
          "Solve the smallest case",
          "Assume recursion works",
          "Reduce the problem size",
          "Trust the call stack",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Error handling",
          "Defensive programming",
          "Robust applications",
          "Production readiness",
        ],
      },
    },
  }, // =========================

  {
    id: 236,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "try / catch Example",
    type: "code-plus",
    content: {
      title: "Handle Errors",
      points: [
        "Wrap risky code",
        "Catch exceptions",
        "Prevent crashes",
      ],
      code: `try {
  JSON.parse("not json");
} catch (err) {
  console.log("Bad JSON");
}`,
      note: "try/catch keeps your app running safely.",
    },
  },

  {
    id: 237,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "Throwing Errors",
    type: "code-plus",
    content: {
      title: "Fail Fast",
      points: [
        "Throw when data is invalid",
        "Provide clear messages",
        "Helps debugging",
      ],
      code: `function setAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  return age;
}`,
      note: "Throwing errors early prevents hidden bugs.",
    },
  },

  // Module 13: Error Handling & Defensive Programming
  // =========================

  {
    id: 154,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "Why Errors Exist",
    type: "two-column",
    content: {
      left: {
        title: "Reality of Software",
        items: [
          "Users make mistakes",
          "Networks fail",
          "Data can be invalid",
          "Bugs are unavoidable",
        ],
      },
      right: {
        title: "Programmer Responsibility",
        items: [
          "Expect failures",
          "Handle errors gracefully",
          "Prevent crashes",
          "Protect user experience",
        ],
      },
    },
  },

  {
    id: 155,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "Types of Errors in JavaScript",
    type: "two-column",
    content: {
      left: {
        title: "Common Error Categories",
        items: [
          "Syntax errors",
          "Runtime errors",
          "Logical errors",
          "Network errors",
        ],
      },
      right: {
        title: "What This Means",
        items: [
          "Not all errors look the same",
          "Some stop execution",
          "Some produce wrong results",
          "Each needs a different approach",
        ],
      },
    },
  },

  {
    id: 156,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "What Is an Exception?",
    type: "two-column",
    content: {
      left: {
        title: "Exception Explained",
        items: [
          "An error that interrupts execution",
          "Thrown by JavaScript or your code",
          "Can be caught and handled",
          "Prevents silent failure",
        ],
      },
      right: {
        title: "Why Exceptions Matter",
        items: [
          "Surface unexpected problems",
          "Allow recovery logic",
          "Improve reliability",
          "Essential in production code",
        ],
      },
    },
  },

  {
    id: 157,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "try / catch Explained",
    type: "two-column",
    content: {
      left: {
        title: "try Block",
        items: [
          "Wrap risky code",
          "Code that may fail",
          "Executed first",
          "Monitored for errors",
        ],
      },
      right: {
        title: "catch Block",
        items: [
          "Runs if an error occurs",
          "Receives the error object",
          "Handles failure safely",
          "Prevents crashes",
        ],
      },
    },
  },

  {
    id: 158,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "Basic try / catch Example",
    type: "code-plus",
    content: {
      title: "Catching Runtime Errors",
      points: [
        "Error is caught, not crashed",
        "Program continues running",
        "Error message is available",
      ],
      code: `try {
  const result = JSON.parse("invalid json");
  console.log(result);
} catch (error) {
  console.log("Something went wrong:", error.message);
}`,
      note:
        "try/catch allows your program to recover from unexpected errors.",
    },
  },

  {
    id: 159,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "Throwing Your Own Errors",
    type: "two-column",
    content: {
      left: {
        title: "Why Throw Errors",
        items: [
          "Validate input",
          "Stop invalid execution",
          "Enforce rules",
          "Fail fast",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Throw meaningful messages",
          "Do not hide problems",
          "Make debugging easier",
          "Use Error objects",
        ],
      },
    },
  },

  {
    id: 160,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "throw Example",
    type: "code-plus",
    content: {
      title: "Custom Error Logic",
      points: [
        "Throw stops execution",
        "Error can be caught later",
        "Useful for validation",
      ],
      code: `function withdraw(amount) {
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }
  return "Withdrawal successful";
}

try {
  withdraw(-10);
} catch (error) {
  console.log(error.message);
}`,
      note: "Custom errors enforce rules and protect your logic.",
    },
  },

  {
    id: 161,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "finally Block",
    type: "two-column",
    content: {
      left: {
        title: "What finally Does",
        items: [
          "Runs after try/catch",
          "Always executes",
          "Used for cleanup",
          "Independent of success or failure",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Closing resources",
          "Stopping loaders",
          "Resetting state",
          "Logging",
        ],
      },
    },
  },

  {
    id: 162,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "Defensive Programming Mindset",
    type: "two-column",
    content: {
      left: {
        title: "How Professionals Think",
        items: [
          "Never trust input",
          "Assume failure is possible",
          "Handle edge cases",
          "Protect critical logic",
        ],
      },
      right: {
        title: "Practical Habits",
        items: [
          "Validate early",
          "Fail clearly",
          "Log intelligently",
          "Write predictable code",
        ],
      },
    },
  },

  {
    id: 163,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Ignoring errors",
          "Empty catch blocks",
          "Overusing try/catch",
          "Catching without handling",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always handle or rethrow",
          "Log meaningful messages",
          "Use try/catch sparingly",
          "Think about recovery",
        ],
      },
    },
  },

  {
    id: 164,
    moduleId: 13,
    moduleTitle: "Error Handling & Defensive Programming",
    title: "Production-Ready Thinking",
    type: "two-column",
    content: {
      left: {
        title: "What Changes in Production",
        items: [
          "Errors affect real users",
          "Failures cost money",
          "Stability matters",
          "Logs are critical",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Object-oriented programming",
          "Designing systems",
          "Scalable architecture",
          "Professional JavaScript",
        ],
      },
    },
  }, // =========================

  {
    id: 238,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP) in JavaScript",
    title: "Class Example",
    type: "code-plus",
    content: {
      title: "Class with Method",
      points: [
        "Classes group data + behavior",
        "Use constructor",
        "Call methods on instances",
      ],
      code: `class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi " + this.name;
  }
}

const u = new User("Ada");
console.log(u.greet());`,
      note: "Classes organize code for complex apps.",
    },
  },

  {
    id: 239,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP) in JavaScript",
    title: "Inheritance Example",
    type: "code-plus",
    content: {
      title: "Extending a Class",
      points: [
        "Child classes inherit behavior",
        "Use extends",
        "Override methods",
      ],
      code: `class Animal {
  speak() { return "..."; }
}

class Dog extends Animal {
  speak() { return "Woof"; }
}

console.log(new Dog().speak());`,
      note: "Inheritance helps you reuse logic.",
    },
  },


  {
    id: 254,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP) in JavaScript",
    title: "Getters and Setters",
    type: "code-plus",
    content: {
      title: "Controlled Access",
      points: [
        "Use get/set",
        "Validate values",
        "Encapsulate behavior",
      ],
      code: `class Account {
  constructor(balance) {
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  set balance(value) {
    if (value < 0) return;
    this._balance = value;
  }
}

const a = new Account(100);
a.balance = 50;
console.log(a.balance);`,
      note: "Getters and setters protect internal state.",
    },
  },

  // Module 14: Object-Oriented Programming (OOP) in JavaScript
  // =========================

  {
    id: 165,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Why Object-Oriented Programming Exists",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Large applications get complex",
          "Too many related variables and functions",
          "Hard to reason about behavior",
          "Code becomes difficult to maintain",
        ],
      },
      right: {
        title: "The OOP Solution",
        items: [
          "Group data and behavior together",
          "Model real-world entities",
          "Create reusable components",
          "Improve structure and clarity",
        ],
      },
    },
  },

  {
    id: 166,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Objects as the Foundation",
    type: "two-column",
    content: {
      left: {
        title: "What an Object Is",
        items: [
          "A collection of related data",
          "Contains properties and methods",
          "Represents a real-world thing",
          "Core JavaScript concept",
        ],
      },
      right: {
        title: "Why Objects Matter",
        items: [
          "Keep related logic together",
          "Reduce global variables",
          "Improve readability",
          "Foundation of OOP",
        ],
      },
    },
  },

  {
    id: 167,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Introducing Classes",
    type: "two-column",
    content: {
      left: {
        title: "What a Class Is",
        items: [
          "A blueprint for creating objects",
          "Defines structure and behavior",
          "Used to create many similar objects",
          "Introduced in ES6",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "Class is the design",
          "Object is the instance",
          "Multiple objects from one class",
          "Same structure, different data",
        ],
      },
    },
  },

  {
    id: 168,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Class Example",
    type: "code-plus",
    content: {
      title: "Defining a Class",
      points: [
        "constructor initializes data",
        "Methods define behavior",
        "new creates an instance",
      ],
      code: `class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return \`Hello, my name is \${this.name}\`;
  }
}

const user1 = new User("Alice", "alice@example.com");
console.log(user1.greet());`,
      note: "Classes allow you to bundle data and behavior together.",
    },
  },

  {
    id: 169,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "The constructor Method",
    type: "two-column",
    content: {
      left: {
        title: "What constructor Does",
        items: [
          "Runs when object is created",
          "Initializes properties",
          "Receives setup parameters",
          "Only one per class",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Ensures valid object state",
          "Centralizes setup logic",
          "Prevents uninitialized data",
          "Standard OOP pattern",
        ],
      },
    },
  },

  {
    id: 170,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "this Keyword Explained",
    type: "two-column",
    content: {
      left: {
        title: "What this Refers To",
        items: [
          "The current object",
          "Depends on how function is called",
          "Common source of confusion",
          "Critical in OOP",
        ],
      },
      right: {
        title: "Beginner Rule",
        items: [
          "Inside class methods, this is the instance",
          "Refers to object properties",
          "Avoid arrow functions for class methods (for now)",
          "Be explicit",
        ],
      },
    },
  },

  {
    id: 171,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Inheritance Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Inheritance Is",
        items: [
          "One class extends another",
          "Child inherits behavior",
          "Avoids duplication",
          "Models hierarchy",
        ],
      },
      right: {
        title: "Why Use It",
        items: [
          "Share common logic",
          "Specialize behavior",
          "Cleaner architecture",
          "Reusable code",
        ],
      },
    },
  },

  {
    id: 172,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Inheritance Example",
    type: "code-plus",
    content: {
      title: "Extending a Class",
      points: [
        "extends creates inheritance",
        "super calls parent constructor",
        "Child adds new behavior",
      ],
      code: `class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }

  isAdmin() {
    return true;
  }
}

const admin = new Admin("Bob", "bob@example.com", "super");
console.log(admin.isAdmin());`,
      note: "Inheritance allows classes to build on top of each other.",
    },
  },

  {
    id: 173,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Encapsulation",
    type: "two-column",
    content: {
      left: {
        title: "What Encapsulation Means",
        items: [
          "Hide internal details",
          "Expose only what is needed",
          "Protect object state",
          "Reduce accidental misuse",
        ],
      },
      right: {
        title: "How JavaScript Does It",
        items: [
          "Public properties",
          "Private fields (#)",
          "Methods as interfaces",
          "Controlled access",
        ],
      },
    },
  },

  {
    id: 174,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing classes",
          "Misunderstanding this",
          "Deep inheritance chains",
          "Mixing concerns",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Use classes when they add clarity",
          "Keep classes small",
          "Prefer composition over inheritance",
          "Model real concepts",
        ],
      },
    },
  },

  {
    id: 175,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "OOP in the Real World",
    type: "two-column",
    content: {
      left: {
        title: "Where You Will See OOP",
        items: [
          "Frontend frameworks",
          "Backend services",
          "Game development",
          "Enterprise applications",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Modules and code organization",
          "Import / export",
          "Project structure",
          "Scalable applications",
        ],
      },
    },
  }, // =========================

  {
    id: 240,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization (import / export)",
    title: "Named Exports",
    type: "code-plus",
    content: {
      title: "Export / Import",
      points: [
        "Export functions",
        "Import by name",
        "Keep files clean",
      ],
      code: `// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3));`,
      note: "Modules help organize large codebases.",
    },
  },

  {
    id: 241,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization (import / export)",
    title: "Default Export",
    type: "code-plus",
    content: {
      title: "One Main Export",
      points: [
        "Default export per file",
        "Import without braces",
        "Common pattern",
      ],
      code: `// logger.js
export default function log(msg) {
  console.log(msg);
}

// app.js
import log from "./logger.js";
log("Hello");`,
      note: "Default exports are useful for main utilities.",
    },
  },


  {
    id: 255,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization (import / export)",
    title: "Named + Default Together",
    type: "code-plus",
    content: {
      title: "Mixed Exports",
      points: [
        "Export named + default",
        "Import both styles",
        "Flexible structure",
      ],
      code: `// utils.js
export const PI = 3.14;
export default function square(x) {
  return x * x;
}

// app.js
import square, { PI } from "./utils.js";
console.log(square(2), PI);`,
      note: "You can mix named and default exports.",
    },
  },


  {
    id: 263,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization (import / export)",
    title: "Re-export Example",
    type: "code-plus",
    content: {
      title: "Centralize Exports",
      points: [
        "Use index.js barrel files",
        "Simplify imports",
        "Cleaner structure",
      ],
      code: `// index.js
export { add } from "./math.js";
export { log } from "./logger.js";

// app.js
import { add, log } from "./index.js";`,
      note: "Re-exports make imports cleaner.",
    },
  },


  {
    id: 269,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization (import / export)",
    title: "Dynamic Import",
    type: "code-plus",
    content: {
      title: "Load When Needed",
      points: [
        "Code splitting",
        "Load on demand",
        "Modern pattern",
      ],
      code: `async function loadChart() {
  const module = await import("./chart.js");
  module.render();
}`,
      note: "Dynamic imports reduce initial load time.",
    },
  },

  // Module 15: Modules & Code Organization (import / export)
  // =========================

  {
    id: 176,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "Why Code Organization Matters",
    type: "two-column",
    content: {
      left: {
        title: "Problems in Large Codebases",
        items: [
          "Files become too large",
          "Hard to find related logic",
          "Tight coupling between features",
          "Difficult maintenance",
        ],
      },
      right: {
        title: "Benefits of Organization",
        items: [
          "Clear separation of concerns",
          "Reusable code units",
          "Easier collaboration",
          "Scalable architecture",
        ],
      },
    },
  },

  {
    id: 177,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "What Is a Module?",
    type: "two-column",
    content: {
      left: {
        title: "Module Explained",
        items: [
          "A file with a specific responsibility",
          "Encapsulates related logic",
          "Exports what others can use",
          "Hides internal details",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "One feature per module",
          "Clear public interface",
          "Private implementation",
          "Loose coupling",
        ],
      },
    },
  },

  {
    id: 178,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "Named Exports",
    type: "two-column",
    content: {
      left: {
        title: "What Named Exports Are",
        items: [
          "Export multiple values",
          "Must use exact names",
          "Explicit and clear",
          "Common in utilities",
        ],
      },
      right: {
        title: "Why Use Them",
        items: [
          "Better discoverability",
          "Clear intent",
          "Avoid default ambiguity",
          "Encourages consistency",
        ],
      },
    },
  },

  {
    id: 179,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "Named Export Example",
    type: "code-plus",
    content: {
      title: "Exporting and Importing by Name",
      points: [
        "export exposes functionality",
        "import pulls exact names",
        "Names must match",
      ],
      code: `// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.js
import { add, subtract } from "./math.js";

console.log(add(2, 3));`,
      note: "Named exports make module APIs explicit.",
    },
  },

  {
    id: 180,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "Default Exports",
    type: "two-column",
    content: {
      left: {
        title: "What Default Exports Are",
        items: [
          "Export a single main value",
          "Import name is flexible",
          "One default per module",
          "Common for components",
        ],
      },
      right: {
        title: "When to Use Them",
        items: [
          "Main module responsibility",
          "UI components",
          "Single-purpose modules",
          "Clear ownership",
        ],
      },
    },
  },

  {
    id: 181,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "Default Export Example",
    type: "code-plus",
    content: {
      title: "Exporting a Default Value",
      points: [
        "Only one default allowed",
        "Import name can differ",
        "Clear primary export",
      ],
      code: `// logger.js
export default function log(message) {
  console.log(message);
}

// app.js
import log from "./logger.js";

log("Hello world");`,
      note: "Default exports simplify single-responsibility modules.",
    },
  },

  {
    id: 182,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "Combining Named and Default Exports",
    type: "two-column",
    content: {
      left: {
        title: "How It Works",
        items: [
          "One default export",
          "Multiple named exports",
          "Flexible but structured",
          "Common in libraries",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Use default for main feature",
          "Use named for helpers",
          "Document exports clearly",
          "Avoid confusion",
        ],
      },
    },
  },

  {
    id: 183,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "File & Folder Structure",
    type: "two-column",
    content: {
      left: {
        title: "Common Structures",
        items: [
          "Group by feature",
          "Group by layer",
          "Avoid flat structures",
          "Consistency matters",
        ],
      },
      right: {
        title: "Beginner Recommendation",
        items: [
          "One feature per folder",
          "Index files for exports",
          "Clear naming",
          "Shallow hierarchy",
        ],
      },
    },
  },

  {
    id: 184,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Circular dependencies",
          "Over-exporting internals",
          "Inconsistent naming",
          "Large god-modules",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Keep modules small",
          "Define clear boundaries",
          "Export intentionally",
          "Refactor early",
        ],
      },
    },
  },

  {
    id: 185,
    moduleId: 15,
    moduleTitle: "Modules & Code Organization",
    title: "Thinking in Modules",
    type: "two-column",
    content: {
      left: {
        title: "Architectural Mindset",
        items: [
          "Design before coding",
          "Separate responsibilities",
          "Think long-term",
          "Optimize for change",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Testing fundamentals",
          "Writing reliable code",
          "Confidence in changes",
          "Professional workflows",
        ],
      },
    },
  }, // =========================

  {
    id: 242,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals (Writing Reliable Code)",
    title: "Simple Assertions",
    type: "code-plus",
    content: {
      title: "Quick Checks",
      points: [
        "assert verifies expectations",
        "Fast feedback",
        "Great for learning",
      ],
      code: `function add(a, b) {
  return a + b;
}

console.assert(add(2, 3) === 5, "Add failed");`,
      note: "Assertions are the simplest testing tool.",
    },
  },

  {
    id: 243,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals (Writing Reliable Code)",
    title: "Jest-Style Test",
    type: "code-plus",
    content: {
      title: "Readable Tests",
      points: [
        "describe / it structure",
        "Expectations",
        "Common JS testing style",
      ],
      code: `test("adds numbers", () => {
  expect(2 + 3).toBe(5);
});`,
      note: "Jest is a popular JS testing framework.",
    },
  },


  {
    id: 256,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals (Writing Reliable Code)",
    title: "Test Edge Cases",
    type: "code-plus",
    content: {
      title: "Edge Case Testing",
      points: [
        "Test empty inputs",
        "Avoid hidden bugs",
        "Make code robust",
      ],
      code: `function average(nums) {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

console.log(average([])); // 0`,
      note: "Edge cases prevent real-world bugs.",
    },
  },

  // Module 16: Testing Fundamentals (Writing Reliable Code)
  // =========================

  {
    id: 186,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals",
    title: "Why Testing Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Tests",
        items: [
          "Bugs slip into production",
          "Fear of changing code",
          "Manual testing is slow",
          "Regressions go unnoticed",
        ],
      },
      right: {
        title: "With Tests",
        items: [
          "Confidence in changes",
          "Early bug detection",
          "Safer refactoring",
          "Professional development practice",
        ],
      },
    },
  },

  {
    id: 187,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals",
    title: "What Is a Test?",
    type: "two-column",
    content: {
      left: {
        title: "Test Explained",
        items: [
          "A piece of code that verifies behavior",
          "Checks expected vs actual output",
          "Runs automatically",
          "Gives fast feedback",
        ],
      },
      right: {
        title: "Key Characteristics",
        items: ["Deterministic", "Repeatable", "Fast", "Easy to understand"],
      },
    },
  },

  {
    id: 188,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals",
    title: "Types of Tests (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Common Test Types",
        items: [
          "Unit tests",
          "Integration tests",
          "End-to-end tests",
          "Manual tests",
        ],
      },
      right: {
        title: "Beginner Focus",
        items: [
          "Start with unit tests",
          "Test small pieces of logic",
          "Avoid complex setups",
          "Build confidence gradually",
        ],
      },
    },
  },

  {
    id: 189,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals",
    title: "Unit Tests Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Unit Tests Do",
        items: [
          "Test a single function or module",
          "Isolate logic",
          "Run very fast",
          "Easy to debug",
        ],
      },
      right: {
        title: "Why They Matter Most",
        items: [
          "Foundation of testing",
          "Catch bugs early",
          "Encourage good design",
          "Cheap to maintain",
        ],
      },
    },
  },

  {
    id: 190,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals",
    title: "Test Structure (Arrange, Act, Assert)",
    type: "two-column",
    content: {
      left: {
        title: "Arrange",
        items: [
          "Set up inputs",
          "Prepare data",
          "Initialize variables",
          "Create test context",
        ],
      },
      right: {
        title: "Act & Assert",
        items: [
          "Act: run the code",
          "Assert: check the result",
          "Compare expected vs actual",
          "Fail clearly if wrong",
        ],
      },
    },
  },

  {
    id: 191,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals",
    title: "Simple Test Example (Conceptual)",
    type: "code-plus",
    content: {
      title: "Testing a Function",
      points: [
        "Test inputs and outputs",
        "No side effects",
        "Readable expectation",
      ],
      code: `function add(a, b) {
  return a + b;
}

// Pseudo-test
const result = add(2, 3);
console.assert(result === 5, "Expected result to be 5");`,
      note: "A test checks that a function behaves as expected.",
    },
  },

  {
    id: 192,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals",
    title: "What Makes a Good Test?",
    type: "two-column",
    content: {
      left: {
        title: "Good Test Traits",
        items: [
          "Clear purpose",
          "Single responsibility",
          "Easy to read",
          "Fast execution",
        ],
      },
      right: {
        title: "What to Avoid",
        items: [
          "Testing implementation details",
          "Complex setups",
          "Multiple assertions for different things",
          "Brittle tests",
        ],
      },
    },
  },

  {
    id: 193,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Not testing edge cases",
          "Testing too much at once",
          "Skipping tests entirely",
          "Writing unclear tests",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Test small units",
          "Name tests clearly",
          "Start simple",
          "Add tests gradually",
        ],
      },
    },
  },

  {
    id: 194,
    moduleId: 16,
    moduleTitle: "Testing Fundamentals",
    title: "Testing Mindset",
    type: "two-column",
    content: {
      left: {
        title: "How Professionals Think",
        items: [
          "Tests are part of coding",
          "Code without tests is incomplete",
          "Tests document behavior",
          "Confidence comes from coverage",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Tooling and workflows",
          "Build processes",
          "Linting and formatting",
          "Professional setup",
        ],
      },
    },
  }, // =========================

  {
    id: 244,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "npm Scripts",
    type: "code-plus",
    content: {
      title: "Run Tasks Easily",
      points: [
        "Define scripts in package.json",
        "Run with npm run",
        "Standard workflow",
      ],
      code: `// package.json
{
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  }
}`,
      note: "Scripts standardize how a team runs tasks.",
    },
  },

  {
    id: 245,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Environment Variables",
    type: "code-plus",
    content: {
      title: "Safe Configuration",
      points: [
        "Keep secrets out of code",
        "Use process.env",
        "Load from .env",
      ],
      code: `const apiKey = process.env.API_KEY;
console.log(apiKey);`,
      note: "Environment variables keep secrets secure.",
    },
  },


  {
    id: 257,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Linting Example",
    type: "code-plus",
    content: {
      title: "ESLint in Action",
      points: [
        "Catches common bugs",
        "Enforces style",
        "Team consistency",
      ],
      code: `// .eslintrc.json
{
  "extends": ["eslint:recommended"]
}

// Run
// npx eslint .`,
      note: "Linters help keep code clean and consistent.",
    },
  },

  // Module 17: Tooling & Professional Workflow
  // =========================

  {
    id: 195,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Why Tooling Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Proper Tooling",
        items: [
          "Manual and repetitive work",
          "Inconsistent code styles",
          "Hard to catch errors early",
          "Slow development process",
        ],
      },
      right: {
        title: "With the Right Tools",
        items: [
          "Automation of boring tasks",
          "Consistent code quality",
          "Faster feedback loops",
          "Professional development workflow",
        ],
      },
    },
  },

  {
    id: 196,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "What Is a Development Tool?",
    type: "two-column",
    content: {
      left: {
        title: "Tool Explained",
        items: [
          "Software that helps you write code",
          "Improves speed and quality",
          "Supports best practices",
          "Used throughout development",
        ],
      },
      right: {
        title: "Common Categories",
        items: [
          "Package managers",
          "Build tools",
          "Linters and formatters",
          "Version control tools",
        ],
      },
    },
  },

  {
    id: 197,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Package Managers (npm)",
    type: "two-column",
    content: {
      left: {
        title: "What npm Does",
        items: [
          "Manages project dependencies",
          "Installs external libraries",
          "Keeps versions consistent",
          "Standard JavaScript tool",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Avoids manual downloads",
          "Simplifies collaboration",
          "Locks dependency versions",
          "Scales to large projects",
        ],
      },
    },
  },

  {
    id: 198,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "package.json Explained",
    type: "two-column",
    content: {
      left: {
        title: "What package.json Is",
        items: [
          "Project configuration file",
          "Lists dependencies",
          "Defines scripts",
          "Describes your project",
        ],
      },
      right: {
        title: "Key Sections",
        items: [
          "name and version",
          "dependencies",
          "devDependencies",
          "scripts",
        ],
      },
    },
  },

  {
    id: 199,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Scripts and Automation",
    type: "two-column",
    content: {
      left: {
        title: "What Scripts Are",
        items: [
          "Short commands in package.json",
          "Automate common tasks",
          "Run tools consistently",
          "Reduce manual work",
        ],
      },
      right: {
        title: "Common Scripts",
        items: ["start", "build", "test", "lint"],
      },
    },
  },

  {
    id: 200,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Linting Explained",
    type: "two-column",
    content: {
      left: {
        title: "What a Linter Does",
        items: [
          "Analyzes your code",
          "Finds potential problems",
          "Enforces style rules",
          "Runs automatically",
        ],
      },
      right: {
        title: "Why Linters Matter",
        items: [
          "Catch bugs early",
          "Enforce consistency",
          "Improve readability",
          "Reduce code reviews friction",
        ],
      },
    },
  },

  {
    id: 201,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Formatting Tools",
    type: "two-column",
    content: {
      left: {
        title: "What Formatters Do",
        items: [
          "Automatically format code",
          "Remove style debates",
          "Keep code consistent",
          "Save developer time",
        ],
      },
      right: {
        title: "Popular Tools",
        items: [
          "Prettier",
          "Editor auto-formatting",
          "Format-on-save",
          "Team-wide rules",
        ],
      },
    },
  },

  {
    id: 202,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Build Tools (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "What Build Tools Do",
        items: [
          "Bundle code",
          "Optimize assets",
          "Transform modern syntax",
          "Prepare code for production",
        ],
      },
      right: {
        title: "Examples",
        items: ["Vite", "Webpack", "Parcel", "Rollup"],
      },
    },
  },

  {
    id: 203,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Beginner Workflow",
    type: "two-column",
    content: {
      left: {
        title: "Typical Daily Flow",
        items: ["Write code", "Run tests", "Fix lint issues", "Commit changes"],
      },
      right: {
        title: "Why This Works",
        items: [
          "Fast feedback",
          "Fewer bugs",
          "Predictable results",
          "Professional habits",
        ],
      },
    },
  },

  {
    id: 204,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Ignoring lint warnings",
          "Overcomplicating setup",
          "Not using scripts",
          "Skipping automation",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Start simple",
          "Use defaults first",
          "Add tools gradually",
          "Understand before customizing",
        ],
      },
    },
  },

  {
    id: 205,
    moduleId: 17,
    moduleTitle: "Tooling & Professional Workflow",
    title: "Professional Readiness",
    type: "two-column",
    content: {
      left: {
        title: "What You Gain",
        items: [
          "Cleaner codebases",
          "Faster development",
          "Team compatibility",
          "Industry alignment",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Capstone project",
          "Putting it all together",
          "Real-world application",
          "Career readiness",
        ],
      },
    },
  }, // =========================

  {
    id: 246,
    moduleId: 18,
    moduleTitle: "Capstone Project (Putting It All Together)",
    title: "Project Structure",
    type: "code-plus",
    content: {
      title: "Organize Files",
      points: [
        "Separate concerns",
        "Keep code readable",
        "Scale later",
      ],
      code: `project/
  src/
    index.js
    api.js
  package.json`,
      note: "A clear structure makes projects easier to maintain.",
    },
  },

  {
    id: 247,
    moduleId: 18,
    moduleTitle: "Capstone Project (Putting It All Together)",
    title: "Capstone Main Flow",
    type: "code-plus",
    content: {
      title: "Putting It Together",
      points: [
        "Call functions in order",
        "Keep data flowing",
        "Build in small steps",
      ],
      code: `async function main() {
  const data = await loadData();
  const view = render(data);
  console.log(view);
}

main();`,
      note: "A simple main flow keeps the project organized.",
    },
  },


  {
    id: 258,
    moduleId: 18,
    moduleTitle: "Capstone Project (Putting It All Together)",
    title: "Simple API Call",
    type: "code-plus",
    content: {
      title: "Connect to Data",
      points: [
        "Fetch data for UI",
        "Use async/await",
        "Show results",
      ],
      code: `async function load() {
  const res = await fetch("https://api.example.com/items");
  const data = await res.json();
  console.log(data);
}

load();`,
      note: "Real projects often start with data fetching.",
    },
  },


  {
    id: 264,
    moduleId: 18,
    moduleTitle: "Capstone Project (Putting It All Together)",
    title: "Render a List",
    type: "code-plus",
    content: {
      title: "Display Items",
      points: [
        "Loop over data",
        "Build a simple UI",
        "Keep it readable",
      ],
      code: `const items = ["Buy milk", "Read book"];
items.forEach(item => {
  console.log("- " + item);
});`,
      note: "Rendering lists is a core app pattern.",
    },
  },

  // Module 18: Capstone Project (Putting It All Together)
  // =========================

  {
    id: 206,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "What Is a Capstone Project?",
    type: "two-column",
    content: {
      left: {
        title: "Capstone Explained",
        items: [
          "A complete, end-to-end project",
          "Uses everything learned so far",
          "Simulates real-world development",
          "Demonstrates practical competence",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Moves from theory to practice",
          "Builds real confidence",
          "Shows problem-solving ability",
          "Portfolio-ready work",
        ],
      },
    },
  },

  {
    id: 207,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Project Overview",
    type: "two-column",
    content: {
      left: {
        title: "What You Will Build",
        items: [
          "A small but complete application",
          "Uses APIs and async code",
          "Organized with modules",
          "Tested and maintainable",
        ],
      },
      right: {
        title: "Core Features",
        items: [
          "Data fetching",
          "User interaction",
          "Error handling",
          "Clean UI logic",
        ],
      },
    },
  },

  {
    id: 208,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Planning Before Coding",
    type: "two-column",
    content: {
      left: {
        title: "Why Planning Is Critical",
        items: [
          "Reduces confusion",
          "Prevents rework",
          "Clarifies requirements",
          "Improves final quality",
        ],
      },
      right: {
        title: "Planning Steps",
        items: [
          "Define the problem",
          "List features",
          "Break into modules",
          "Identify data flow",
        ],
      },
    },
  },

  {
    id: 209,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Project Architecture",
    type: "two-column",
    content: {
      left: {
        title: "Structural Decisions",
        items: [
          "Folder structure",
          "Module boundaries",
          "State management",
          "Data responsibilities",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Separation of concerns",
          "Reusable functions",
          "Clear naming",
          "Simple first, optimize later",
        ],
      },
    },
  },

  {
    id: 210,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Building Incrementally",
    type: "two-column",
    content: {
      left: {
        title: "Incremental Development",
        items: [
          "Start with core logic",
          "Add features gradually",
          "Test as you go",
          "Avoid big-bang coding",
        ],
      },
      right: {
        title: "Why This Works",
        items: [
          "Easier debugging",
          "Visible progress",
          "Less risk",
          "Professional workflow",
        ],
      },
    },
  },

  {
    id: 211,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Using What You’ve Learned",
    type: "two-column",
    content: {
      left: {
        title: "Concepts in Action",
        items: [
          "Functions and scope",
          "Array methods",
          "Async/await",
          "Error handling",
        ],
      },
      right: {
        title: "Advanced Elements",
        items: [
          "Recursion where appropriate",
          "Modular design",
          "Testing critical logic",
          "Defensive programming",
        ],
      },
    },
  },

  {
    id: 212,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Testing and Validation",
    type: "two-column",
    content: {
      left: {
        title: "What to Test",
        items: ["Core logic", "Edge cases", "Error paths", "User inputs"],
      },
      right: {
        title: "Validation Mindset",
        items: [
          "Assume failure",
          "Verify assumptions",
          "Log intelligently",
          "Fix issues early",
        ],
      },
    },
  },

  {
    id: 213,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Refactoring and Cleanup",
    type: "two-column",
    content: {
      left: {
        title: "Why Refactor",
        items: [
          "Improve readability",
          "Remove duplication",
          "Clarify intent",
          "Prepare for review",
        ],
      },
      right: {
        title: "What to Look For",
        items: [
          "Long functions",
          "Repeated logic",
          "Unclear names",
          "Tight coupling",
        ],
      },
    },
  },

  {
    id: 214,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Documenting Your Project",
    type: "two-column",
    content: {
      left: {
        title: "What to Document",
        items: [
          "Project purpose",
          "How to run it",
          "Key decisions",
          "Known limitations",
        ],
      },
      right: {
        title: "Why Documentation Matters",
        items: [
          "Others can understand your work",
          "Shows professionalism",
          "Helps future maintenance",
          "Improves communication",
        ],
      },
    },
  },

  {
    id: 215,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Final Review & Presentation",
    type: "two-column",
    content: {
      left: {
        title: "Final Checklist",
        items: [
          "All features working",
          "Errors handled",
          "Code organized",
          "Tests passing",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Sharing your project",
          "Portfolio inclusion",
          "Interview preparation",
          "Continuous learning",
        ],
      },
    },
  },
];
