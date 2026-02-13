export const slidesData = [
  // =========================
  // Python Module 1: Introduction to Programming & Python
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "What Is Programming?",
    type: "hero",
    content: {
      eyebrow: "Module 1 • Python Foundations",
      subtitle: "Programming is writing precise, step-by-step instructions that computers execute exactly.",
      bullets: [
        "Programs solve real-world problems with logic",
        "Computers follow instructions in order, no guessing",
        "Small mistakes change outcomes",
        "Clear structure builds reliable results",
      ],
      chips: ["Automation", "Logic", "Problem Solving", "Creativity"],
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "What Is Python?",
    type: "infographic",
    content: {
      intro: "Python emphasizes readability and is used across the software industry.",
      cards: [
        {
          tag: "Python Trait",
          title: "Simple & Readable",
          description: "Syntax is close to human language.",
        },
        {
          tag: "Python Trait",
          title: "Beginner Friendly",
          description: "Less boilerplate, more focus on logic.",
        },
        {
          tag: "Python Trait",
          title: "Versatile",
          description: "Scales from scripts to large systems.",
        },
        {
          tag: "Use Case",
          title: "Web Development",
          description: "Build websites and APIs.",
        },
        {
          tag: "Use Case",
          title: "Data & AI",
          description: "Power analytics, ML, and automation.",
        },
        {
          tag: "Use Case",
          title: "Backend Systems",
          description: "Run services and internal tools.",
        },
      ],
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "Why Learn Python First?",
    type: "two-column",
    content: {
      left: {
        title: "Beginner Advantages",
        items: [
          "Simple syntax",
          "Less boilerplate",
          "Focus on logic",
          "Easy to read and write",
        ],
      },
      right: {
        title: "Long-Term Value",
        items: [
          "High industry demand",
          "Versatile language",
          "Strong community",
          "Scales from beginner to expert",
        ],
      },
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "How Programs Run",
    type: "diagram",
    content: {
      intro: "Python executes code in a predictable, top-to-bottom flow.",
      nodes: [
        {
          title: "Read Code",
          description: "Python reads each line in order.",
        },
        {
          title: "Execute",
          description: "Every line runs exactly as written.",
        },
        {
          title: "Stop on Error",
          description: "Execution halts when an error appears.",
        },
        {
          title: "Output",
          description: "Results show only if no errors happen.",
        },
      ],
      footer: "Order matters. Precision matters.",
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "Your First Python Code",
    type: "code-plus",
    content: {
      title: "Printing Output",
      points: [
        "print displays output",
        "Strings must be in quotes",
        "Python runs line by line",
      ],
      code: `print("Hello, Python!")`,
      note: "This is a complete Python program that prints text to the screen.",
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "Understanding Errors (Early)",
    type: "two-column",
    content: {
      left: {
        title: "What Errors Are",
        items: [
          "Messages when something goes wrong",
          "Python stops execution",
          "Errors help you fix issues",
          "Normal part of learning",
        ],
      },
      right: {
        title: "Beginner Mindset",
        items: [
          "Do not fear errors",
          "Read error messages",
          "Fix one thing at a time",
          "Practice patience",
        ],
      },
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "How to Practice Python",
    type: "two-column",
    content: {
      left: {
        title: "Ways to Practice",
        items: [
          "Use Python interactive shell",
          "Write small scripts",
          "Change examples",
          "Experiment freely",
        ],
      },
      right: {
        title: "Learning Advice",
        items: [
          "Practice consistently",
          "Type code yourself",
          "Break things on purpose",
          "Ask why things work",
        ],
      },
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: ["Variables", "Data types", "User input", "Simple calculations"],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand what programming is",
          "You wrote your first Python code",
          "You learned how programs run",
          "You are ready to continue",
        ],
      },
    },
  },
  // =========================
  // Python Module 2: Variables, Data Types & Input
  // =========================

  {
    id: 9,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "What Is a Variable?",
    type: "diagram",
    content: {
      intro: "A variable is a named place in memory that stores a value.",
      nodes: [
        {
          title: "Name (Label)",
          description: "A readable word you choose, like name or age.",
        },
        {
          title: "Value (Data)",
          description: "The information stored (text, numbers, true/false).",
        },
        {
          title: "Assignment",
          description: "Use = to put a value inside the variable.",
        },
        {
          title: "Update",
          description: "You can replace the value anytime.",
        },
      ],
      footer: "Think of a variable as a labeled box you can update.",
    },
  },

  {
    id: 10,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "Creating Variables in Python",
    type: "code-plus",
    content: {
      title: "Variable Assignment",
      points: [
        "Use = to assign values",
        "No keyword needed",
        "Python figures out the type",
        "Use clear, readable names",
      ],
      code: `name = "Alice"
age = 25
is_student = True`,
      note: "Python uses dynamic typing, so you do not declare variable types.",
    },
  },

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "Basic Data Types",
    type: "infographic",
    content: {
      intro: "Different data types behave differently in Python.",
      cards: [
        {
          tag: "Type",
          title: "int",
          description: "Whole numbers like 3 or 42.",
        },
        {
          tag: "Type",
          title: "float",
          description: "Decimal numbers like 3.14.",
        },
        {
          tag: "Type",
          title: "str",
          description: "Text like \"hello\".",
        },
        {
          tag: "Type",
          title: "bool",
          description: "True or False.",
        },
        {
          tag: "Why It Matters",
          title: "Correct Operations",
          description: "Some operations only work on certain types.",
        },
        {
          tag: "Why It Matters",
          title: "Avoid Errors",
          description: "Knowing types prevents logic bugs.",
        },
      ],
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "Numbers in Python",
    type: "code-plus",
    content: {
      title: "Working with Numbers",
      points: [
        "int and float are numeric types",
        "Support arithmetic operations",
        "Python handles math naturally",
        "Store results in variables",
      ],
      code: `x = 10
y = 3.5

print(x + y)
print(x * y)`,
      note: "Python automatically handles operations between numbers.",
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "Strings in Python",
    type: "code-plus",
    content: {
      title: "Working with Text",
      points: [
        "Strings are text",
        "Use single or double quotes",
        "Text is immutable",
        "Concatenate or format strings",
      ],
      code: `message = "Hello"
name = 'Bob'

print(message + " " + name)`,
      note: "Strings are combined using concatenation.",
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "Booleans Explained",
    type: "steps",
    content: {
      intro: "Booleans are the yes/no values that power program decisions.",
      steps: [
        {
          title: "Compare Values",
          description: "Expressions like 5 > 3 return True/False.",
        },
        {
          title: "Store the Result",
          description: "Save booleans in variables when needed.",
        },
        {
          title: "Use in Decisions",
          description: "if statements check booleans to choose a path.",
        },
        {
          title: "Use in Loops",
          description: "while loops keep running while a boolean is True.",
        },
      ],
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "Getting User Input",
    type: "code-plus",
    content: {
      title: "input() Function",
      points: [
        "Reads data from user",
        "Always returns a string",
        "Can be stored in variables",
        "Great for interactive programs",
      ],
      code: `name = input("Enter your name: ")
print("Hello", name)`,
      note: "input allows programs to interact with users.",
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "Type Conversion",
    type: "code-plus",
    content: {
      title: "Converting Input Types",
      points: [
        "input returns strings",
        "Convert to int or float when needed",
        "Prevents calculation errors",
        "Always validate user data",
      ],
      code: `age = input("Enter your age: ")
age = int(age)

print(age + 1)`,
      note: "Type conversion ensures correct operations.",
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "Avoid these issues early to build strong habits.",
      cards: [
        {
          tag: "Mistake",
          title: "Using Variables Too Early",
          description: "Always assign a value before use.",
        },
        {
          tag: "Mistake",
          title: "Skipping Type Conversion",
          description: "input() returns strings by default.",
        },
        {
          tag: "Mistake",
          title: "Mixing Numbers & Strings",
          description: "Convert types before math.",
        },
        {
          tag: "Mistake",
          title: "Unclear Names",
          description: "Use descriptive variable names.",
        },
        {
          tag: "Fix",
          title: "Initialize Values",
          description: "Set default values early.",
        },
        {
          tag: "Fix",
          title: "Check Types",
          description: "Use type() when unsure.",
        },
      ],
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Variables, Data Types & Input",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "You now have the building blocks for logic and expressions.",
      nodes: [
        {
          title: "Variables",
          description: "Store data with clear names.",
        },
        {
          title: "Types",
          description: "Understand numbers, text, and booleans.",
        },
        {
          title: "Input",
          description: "Collect data from users safely.",
        },
        {
          title: "Next: Operators",
          description: "Combine values into real logic.",
        },
      ],
      footer: "Up next: operators, expressions, and comparisons.",
    },
  },
  // =========================
  // Python Module 3: Operators & Expressions
  // =========================

  {
    id: 19,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "What Is an Operator?",
    type: "diagram",
    content: {
      intro: "Operators are symbols or words that perform actions on values.",
      nodes: [
        {
          title: "Values",
          description: "Numbers, strings, or booleans.",
        },
        {
          title: "Operator",
          description: "Performs an action like +, >, or and.",
        },
        {
          title: "Result",
          description: "Produces a new value.",
        },
        {
          title: "Expression",
          description: "A complete statement that evaluates to a value.",
        },
      ],
      footer: "Expressions combine values and operators to produce results.",
    },
  },

  {
    id: 20,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Arithmetic Operators",
    type: "infographic",
    content: {
      intro: "Arithmetic operators work with numbers in Python.",
      cards: [
        {
          tag: "Math",
          title: "Addition (+)",
          description: "Combine values, like 3 + 2.",
        },
        {
          tag: "Math",
          title: "Subtraction (-)",
          description: "Find the difference.",
        },
        {
          tag: "Math",
          title: "Multiplication (*)",
          description: "Repeat or scale values.",
        },
        {
          tag: "Math",
          title: "Division (/)",
          description: "Always returns a float.",
        },
        {
          tag: "More",
          title: "Modulus (%)",
          description: "Remainder after division.",
        },
        {
          tag: "More",
          title: "Exponent (**)",
          description: "Powers, like 2 ** 3.",
        },
      ],
    },
  },

  {
    id: 21,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Arithmetic Operator Example",
    type: "code-plus",
    content: {
      title: "Basic Math in Python",
      points: [
        "Operators work left to right",
        "Python follows math rules",
        "Results can be stored",
        "Use % for remainders",
      ],
      code: `a = 10
b = 3

print(a + b)
print(a % b)
print(a ** b)`,
      note: "Python supports all common arithmetic operations.",
    },
  },

  {
    id: 22,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Assignment Operators",
    type: "infographic",
    content: {
      intro: "Assignment operators store values and update variables.",
      cards: [
        {
          tag: "Assignment",
          title: "Basic (=)",
          description: "Stores a value in a variable.",
        },
        {
          tag: "Shortcut",
          title: "Add (+=)",
          description: "x += 1 is the same as x = x + 1.",
        },
        {
          tag: "Shortcut",
          title: "Subtract (-=)",
          description: "x -= 1 reduces a value.",
        },
        {
          tag: "Shortcut",
          title: "Multiply (*=)",
          description: "x *= 2 doubles a value.",
        },
        {
          tag: "Shortcut",
          title: "Divide (/=)",
          description: "x /= 2 halves a value.",
        },
      ],
    },
  },

  {
    id: 23,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Assignment Operator Example",
    type: "code-plus",
    content: {
      title: "Updating Values",
      points: [
        "Shortcuts reduce repetition",
        "Value updates in place",
        "Improves readability",
        "Great for counters",
      ],
      code: `count = 5
count += 1
count *= 2

print(count)`,
      note: "Assignment operators modify existing values.",
    },
  },

  {
    id: 24,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Comparison Operators",
    type: "infographic",
    content: {
      intro: "Comparison operators return True or False.",
      cards: [
        {
          tag: "Compare",
          title: "Equal (==)",
          description: "Checks if values match.",
        },
        {
          tag: "Compare",
          title: "Not Equal (!=)",
          description: "Checks if values differ.",
        },
        {
          tag: "Compare",
          title: "Greater Than (>)",
          description: "Checks if left side is bigger.",
        },
        {
          tag: "Compare",
          title: "Less Than (<)",
          description: "Checks if left side is smaller.",
        },
        {
          tag: "Compare",
          title: "Greater or Equal (>=)",
          description: "Includes equality.",
        },
        {
          tag: "Compare",
          title: "Less or Equal (<=)",
          description: "Includes equality.",
        },
      ],
    },
  },

  {
    id: 25,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Comparison Example",
    type: "code-plus",
    content: {
      title: "Comparing Values",
      points: [
        "Comparisons return True or False",
        "Used for decision making",
        "Do not confuse = and ==",
        "Great for validations",
      ],
      code: `age = 18

print(age >= 18)
print(age == 21)`,
      note: "Comparison operators are the foundation of program logic.",
    },
  },

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Logical Operators",
    type: "steps",
    content: {
      intro: "Logical operators combine or reverse conditions.",
      steps: [
        {
          title: "and",
          description: "All conditions must be True.",
        },
        {
          title: "or",
          description: "At least one condition is True.",
        },
        {
          title: "not",
          description: "Flips True to False (and vice versa).",
        },
      ],
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Logical Operator Example",
    type: "code-plus",
    content: {
      title: "Combining Conditions",
      points: [
        "Multiple checks in one expression",
        "Produces boolean result",
        "Readable logic",
        "Used in if statements",
      ],
      code: `age = 25
has_id = True

print(age >= 18 and has_id)`,
      note: "Logical operators allow complex decision making.",
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Operator Precedence",
    type: "diagram",
    content: {
      intro: "Precedence decides which parts of an expression run first.",
      nodes: [
        {
          title: "Parentheses ()",
          description: "Always evaluate first.",
        },
        {
          title: "Powers (**)",
          description: "Exponents are next.",
        },
        {
          title: "Multiply / Divide",
          description: "Then * / // %.",
        },
        {
          title: "Add / Subtract",
          description: "Finally + and -.",
        },
      ],
      footer: "Use parentheses to make intent clear.",
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Precedence Example",
    type: "code-plus",
    content: {
      title: "Using Parentheses",
      points: [
        "Parentheses change order",
        "Improves clarity",
        "Avoids subtle bugs",
      ],
      code: `result = (2 + 3) * 4
print(result)`,
      note: "Parentheses ensure expressions run as intended.",
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "These mistakes cause most beginner bugs with operators.",
      cards: [
        {
          tag: "Mistake",
          title: "Using = Instead of ==",
          description: "Remember: = assigns, == compares.",
        },
        {
          tag: "Mistake",
          title: "Ignoring Precedence",
          description: "Use parentheses to be safe.",
        },
        {
          tag: "Mistake",
          title: "Overcomplicating",
          description: "Split long expressions into steps.",
        },
        {
          tag: "Mistake",
          title: "Ignoring Booleans",
          description: "Check that comparisons return True/False.",
        },
        {
          tag: "Fix",
          title: "Read it Aloud",
          description: "Expressions should sound logical.",
        },
        {
          tag: "Fix",
          title: "Test Pieces",
          description: "Verify each part separately.",
        },
      ],
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "Operators & Expressions",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "You can now build logic and compare values.",
      nodes: [
        {
          title: "Operators",
          description: "Math, assignment, and comparisons.",
        },
        {
          title: "Expressions",
          description: "Combine values to compute results.",
        },
        {
          title: "Booleans",
          description: "True/False decisions.",
        },
        {
          title: "Next: Control Flow",
          description: "if, elif, else decision making.",
        },
      ],
      footer: "Up next: control flow and decision logic.",
    },
  },
  // =========================
  // Python Module 4: Control Flow (if / elif / else)
  // =========================

  {
    id: 32,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "What Is Control Flow?",
    type: "diagram",
    content: {
      intro: "Control flow decides which code runs and when.",
      nodes: [
        {
          title: "Condition",
          description: "Ask a yes/no question.",
        },
        {
          title: "Decision",
          description: "Choose a path based on True or False.",
        },
        {
          title: "Execution",
          description: "Run the matching block of code.",
        },
        {
          title: "Outcome",
          description: "Different inputs lead to different results.",
        },
      ],
      footer: "Control flow makes programs react to data and user input.",
    },
  },

  {
    id: 33,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "The if Statement",
    type: "steps",
    content: {
      intro: "The if statement runs code only when a condition is True.",
      steps: [
        {
          title: "Write a Condition",
          description: "Create an expression that returns True/False.",
        },
        {
          title: "Add a Colon",
          description: "The colon ends the condition line.",
        },
        {
          title: "Indent the Block",
          description: "Indented code runs if the condition is True.",
        },
        {
          title: "Skip if False",
          description: "If the condition is False, the block is ignored.",
        },
      ],
    },
  },

  {
    id: 34,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "if Statement Example",
    type: "code-plus",
    content: {
      title: "Basic if Example",
      points: [
        "Condition is evaluated",
        "Indented code runs if true",
        "No execution if false",
      ],
      code: `age = 20

if age >= 18:
    print("You are an adult")`,
      note: "The print statement runs only if the condition is true.",
    },
  },

  {
    id: 35,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "The else Statement",
    type: "infographic",
    content: {
      intro: "else handles the fallback when the if condition is False.",
      cards: [
        {
          tag: "else",
          title: "Runs When if is False",
          description: "Catches remaining cases.",
        },
        {
          tag: "else",
          title: "No Condition Needed",
          description: "else always runs when if fails.",
        },
        {
          tag: "else",
          title: "One Branch Only",
          description: "Exactly one branch executes.",
        },
        {
          tag: "Tip",
          title: "Keep it Aligned",
          description: "Indent else to match if.",
        },
      ],
    },
  },

  {
    id: 36,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "if / else Example",
    type: "code-plus",
    content: {
      title: "Two-Way Decision",
      points: ["Either if or else runs", "Never both", "Clear branching"],
      code: `score = 45

if score >= 50:
    print("Passed")
else:
    print("Failed")`,
      note: "The program chooses exactly one path.",
    },
  },

  {
    id: 37,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "The elif Statement",
    type: "diagram",
    content: {
      intro: "elif adds extra conditions without deep nesting.",
      nodes: [
        {
          title: "if",
          description: "First condition checked.",
        },
        {
          title: "elif",
          description: "Only checked if previous conditions failed.",
        },
        {
          title: "elif",
          description: "Add more checks if needed.",
        },
        {
          title: "else",
          description: "Fallback if none match.",
        },
      ],
      footer: "elif keeps decision logic readable and scalable.",
    },
  },

  {
    id: 38,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "if / elif / else Example",
    type: "code-plus",
    content: {
      title: "Multiple Conditions",
      points: [
        "Conditions checked top-down",
        "First true condition runs",
        "Order matters",
      ],
      code: `grade = 75

if grade >= 90:
    print("A")
elif grade >= 70:
    print("B")
elif grade >= 50:
    print("C")
else:
    print("F")`,
      note: "The first matching condition determines the output.",
    },
  },

  {
    id: 39,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "Indentation in Python",
    type: "steps",
    content: {
      intro: "Indentation is how Python knows which code belongs together.",
      steps: [
        {
          title: "Use 4 Spaces",
          description: "Python style standard for blocks.",
        },
        {
          title: "Stay Consistent",
          description: "Mixing tabs and spaces causes errors.",
        },
        {
          title: "Indent Only Blocks",
          description: "Only indent after :, like if, for, while.",
        },
        {
          title: "Align else/elif",
          description: "Line up with the matching if.",
        },
      ],
    },
  },

  {
    id: 40,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "Nested Conditions",
    type: "infographic",
    content: {
      intro: "Nested if statements are valid but can get messy.",
      cards: [
        {
          tag: "Nesting",
          title: "if inside if",
          description: "Checks more specific conditions.",
        },
        {
          tag: "Risk",
          title: "Hard to Read",
          description: "Deep nesting hurts clarity.",
        },
        {
          tag: "Tip",
          title: "Use elif",
          description: "Prefer elif for clean branching.",
        },
        {
          tag: "Tip",
          title: "Refactor Early",
          description: "Break logic into smaller checks.",
        },
      ],
    },
  },

  {
    id: 41,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "Most control flow bugs come from these issues.",
      cards: [
        {
          tag: "Mistake",
          title: "Missing Colon",
          description: "Every if/elif/else line ends with :",
        },
        {
          tag: "Mistake",
          title: "Bad Indentation",
          description: "Blocks must line up correctly.",
        },
        {
          tag: "Mistake",
          title: "Using = Instead of ==",
          description: "One assigns, the other compares.",
        },
        {
          tag: "Mistake",
          title: "Unreachable Branches",
          description: "Order conditions carefully.",
        },
        {
          tag: "Fix",
          title: "Read Errors",
          description: "Python explains what went wrong.",
        },
        {
          tag: "Fix",
          title: "Test Small",
          description: "Use simple examples to debug logic.",
        },
      ],
    },
  },

  {
    id: 42,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "You can now branch logic and control decisions.",
      nodes: [
        {
          title: "if / elif / else",
          description: "Decide which code runs.",
        },
        {
          title: "Indentation",
          description: "Defines the block boundaries.",
        },
        {
          title: "Readable Logic",
          description: "Keep branching clean and clear.",
        },
        {
          title: "Next: Loops",
          description: "Repeat actions automatically.",
        },
      ],
      footer: "Up next: for loops and while loops.",
    },
  },
  // =========================
  // Python Module 5: Loops (for / while)
  // =========================

  {
    id: 43,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "Why Loops Exist",
    type: "infographic",
    content: {
      intro: "Loops remove repetition and make code easier to maintain.",
      cards: [
        {
          tag: "Problem",
          title: "Manual Repetition",
          description: "Copy-pasting code creates errors.",
        },
        {
          tag: "Problem",
          title: "Hard to Maintain",
          description: "Fixing one bug means editing many lines.",
        },
        {
          tag: "Problem",
          title: "Error-Prone",
          description: "Small changes break repeated logic.",
        },
        {
          tag: "Problem",
          title: "Slow Workflow",
          description: "Manual duplication wastes time.",
        },
        {
          tag: "Loop Solution",
          title: "Automate Repetition",
          description: "Run the same logic safely.",
        },
        {
          tag: "Loop Solution",
          title: "Control the Flow",
          description: "Start, repeat, and stop with intent.",
        },
        {
          tag: "Loop Solution",
          title: "Cleaner Programs",
          description: "Less code, more clarity.",
        },
        {
          tag: "Loop Solution",
          title: "Fewer Bugs",
          description: "Update once, apply everywhere.",
        },
      ],
    },
  },

  {
    id: 44,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "What Is a Loop?",
    type: "diagram",
    content: {
      intro: "Loops repeat logic until a stop condition is reached.",
      nodes: [
        {
          title: "Start",
          description: "Set a condition or sequence.",
        },
        {
          title: "Repeat",
          description: "Run the same block of code.",
        },
        {
          title: "Update",
          description: "Move to the next item or state.",
        },
        {
          title: "Stop",
          description: "Condition becomes false.",
        },
      ],
      footer: "A loop must always have a clear stopping point.",
    },
  },

  {
    id: 45,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "The for Loop",
    type: "infographic",
    content: {
      intro: "for loops are Python’s most common way to iterate.",
      cards: [
        {
          tag: "for Loop",
          title: "Iterates a Sequence",
          description: "Runs once per item.",
        },
        {
          tag: "for Loop",
          title: "Readable",
          description: "Clear, beginner-friendly syntax.",
        },
        {
          tag: "for Loop",
          title: "Most Common",
          description: "Default choice for iteration.",
        },
        {
          tag: "for Loop",
          title: "Loop Over Lists",
          description: "Process items in order.",
        },
        {
          tag: "for Loop",
          title: "Loop Over Strings",
          description: "Iterate character by character.",
        },
        {
          tag: "for Loop",
          title: "Loop Over Ranges",
          description: "Generate counts with range().",
        },
      ],
    },
  },

  {
    id: 46,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "for Loop Example",
    type: "code-plus",
    content: {
      title: "Looping with range()",
      points: [
        "range generates numbers",
        "Loop variable updates automatically",
        "Stops at end",
      ],
      code: `for i in range(5):
    print(i)`,
      note: "The loop runs once for each number produced by range.",
    },
  },

  {
    id: 47,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "Looping Over a List",
    type: "code-plus",
    content: {
      title: "Iterating Through Items",
      points: [
        "Each item is accessed in order",
        "No index required",
        "Very readable",
      ],
      code: `fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)`,
      note: "The loop processes each list item one by one.",
    },
  },

  {
    id: 48,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "The while Loop",
    type: "steps",
    content: {
      intro: "while loops repeat as long as a condition stays true.",
      steps: [
        {
          title: "Check the Condition",
          description: "If it’s true, the loop runs.",
        },
        {
          title: "Run the Body",
          description: "Execute the repeated logic.",
        },
        {
          title: "Update State",
          description: "Change variables to move toward stopping.",
        },
        {
          title: "Stop Safely",
          description: "When condition becomes false, the loop ends.",
        },
      ],
    },
  },

  {
    id: 49,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "while Loop Example",
    type: "code-plus",
    content: {
      title: "Condition-Based Loop",
      points: [
        "Condition controls repetition",
        "Value must change",
        "Avoid infinite loops",
      ],
      code: `count = 0

while count < 3:
    print(count)
    count += 1`,
      note: "The loop stops when the condition becomes false.",
    },
  },

  {
    id: 50,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "break and continue",
    type: "infographic",
    content: {
      intro: "Use break and continue to control loop flow.",
      cards: [
        {
          tag: "break",
          title: "Stop the Loop",
          items: [
            "Exits immediately",
            "Overrides the condition",
            "Ends early by choice",
          ],
        },
        {
          tag: "continue",
          title: "Skip an Iteration",
          items: [
            "Moves to the next cycle",
            "Keeps loop running",
            "Great for filtering data",
          ],
        },
      ],
    },
  },

  {
    id: 51,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "break / continue Example",
    type: "code-plus",
    content: {
      title: "Controlling Loop Flow",
      points: [
        "break exits loop",
        "continue skips iteration",
        "Improves control",
      ],
      code: `for num in range(5):
    if num == 3:
        break
    print(num)

for num in range(5):
    if num == 2:
        continue
    print(num)`,
      note: "break and continue control how loops behave.",
    },
  },

  {
    id: 52,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "These loop mistakes are common for beginners.",
      cards: [
        {
          tag: "Mistake",
          title: "Infinite Loops",
          description: "Always update your loop variable.",
        },
        {
          tag: "Mistake",
          title: "No Stop Condition",
          description: "A loop needs a clear ending.",
        },
        {
          tag: "Mistake",
          title: "Wrong Loop Type",
          description: "Use for for sequences, while for conditions.",
        },
        {
          tag: "Mistake",
          title: "Overcomplicated Logic",
          description: "Keep the loop body simple.",
        },
        {
          tag: "Fix",
          title: "Trace Step by Step",
          description: "Walk through each iteration.",
        },
        {
          tag: "Fix",
          title: "Test Small",
          description: "Use small values to verify behavior.",
        },
      ],
    },
  },

  {
    id: 53,
    moduleId: 5,
    moduleTitle: "Loops (for / while)",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "You can now repeat logic safely and efficiently.",
      nodes: [
        {
          title: "for Loops",
          description: "Iterate over sequences.",
        },
        {
          title: "while Loops",
          description: "Repeat while a condition is true.",
        },
        {
          title: "Loop Control",
          description: "Use break/continue wisely.",
        },
        {
          title: "Next: Functions",
          description: "Create reusable code blocks.",
        },
      ],
      footer: "Up next: functions, parameters, and return values.",
    },
  },
  // =========================
  // Python Module 6: Functions & Scope
  // =========================

  {
    id: 54,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Why Functions Exist",
    type: "infographic",
    content: {
      intro: "Functions organize code into reusable, easy-to-read blocks.",
      cards: [
        {
          tag: "Without Functions",
          title: "Repeated Code",
          description: "Copy-paste logic everywhere.",
        },
        {
          tag: "Without Functions",
          title: "Hard to Update",
          description: "Fixing one bug means many edits.",
        },
        {
          tag: "Without Functions",
          title: "Unreadable Files",
          description: "Long scripts are hard to follow.",
        },
        {
          tag: "Without Functions",
          title: "Error-Prone Changes",
          description: "Small edits cause hidden bugs.",
        },
        {
          tag: "With Functions",
          title: "Reusable Logic",
          description: "Write once, call many times.",
        },
        {
          tag: "With Functions",
          title: "Cleaner Programs",
          description: "Focused blocks do one job.",
        },
        {
          tag: "With Functions",
          title: "Easier Debugging",
          description: "Isolate issues quickly.",
        },
        {
          tag: "With Functions",
          title: "Better Organization",
          description: "Group logic by purpose.",
        },
      ],
    },
  },

  {
    id: 55,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "What Is a Function?",
    type: "diagram",
    content: {
      intro: "Think of a function as a reusable machine.",
      nodes: [
        {
          title: "Input",
          description: "Values go into the function.",
        },
        {
          title: "Work",
          description: "Logic runs inside the function body.",
        },
        {
          title: "Output",
          description: "A result comes out (optional).",
        },
      ],
      footer: "Same input → same logic → predictable output.",
    },
  },

  {
    id: 56,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Defining a Function",
    type: "code-plus",
    content: {
      title: "Basic Function Syntax",
      points: [
        "def keyword defines function",
        "Indentation defines body",
        "Function name should be descriptive",
      ],
      code: `def greet():
    print("Hello!")`,
      note: "This function prints a greeting when called.",
    },
  },

  {
    id: 57,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Calling a Function",
    type: "code-plus",
    content: {
      title: "Executing a Function",
      points: [
        "Use function name with parentheses",
        "Function runs only when called",
        "Can be called multiple times",
      ],
      code: `greet()
greet()`,
      note: "Each call executes the function body.",
    },
  },

  {
    id: 58,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Function Parameters",
    type: "infographic",
    content: {
      intro: "Parameters make functions flexible and reusable.",
      cards: [
        {
          tag: "Definition",
          title: "Inputs to a Function",
          description: "Parameters receive values when the function runs.",
        },
        {
          tag: "Definition",
          title: "Defined in Signature",
          description: "Placed inside the parentheses.",
        },
        {
          tag: "Benefit",
          title: "Customize Behavior",
          description: "Same function, different results.",
        },
        {
          tag: "Benefit",
          title: "Avoid Hardcoding",
          description: "No fixed values inside the function.",
        },
        {
          tag: "Benefit",
          title: "Reuse Logic",
          description: "One function works for many inputs.",
        },
        {
          tag: "Benefit",
          title: "Clean Abstraction",
          description: "Hide details behind a simple call.",
        },
      ],
    },
  },

  {
    id: 59,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Parameters Example",
    type: "code-plus",
    content: {
      title: "Passing Arguments",
      points: [
        "Arguments map to parameters",
        "Order matters",
        "Values are local",
      ],
      code: `def greet(name):
    print("Hello", name)

greet("Alice")
greet("Bob")`,
      note: "The function greets different names based on input.",
    },
  },

  {
    id: 60,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Return Values",
    type: "diagram",
    content: {
      intro: "return gives a function an output you can reuse.",
      nodes: [
        {
          title: "Input",
          description: "Pass values into a function.",
        },
        {
          title: "Work",
          description: "Function performs logic.",
        },
        {
          title: "return",
          description: "Send a result back to the caller.",
        },
        {
          title: "Reuse",
          description: "Store or combine results later.",
        },
      ],
      footer: "return ends the function immediately and sends a value back.",
    },
  },

  {
    id: 61,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Return Example",
    type: "code-plus",
    content: {
      title: "Returning Results",
      points: [
        "Returned value can be stored",
        "Function becomes expression-like",
        "Improves testability",
      ],
      code: `def add(a, b):
    return a + b

result = add(3, 4)
print(result)`,
      note: "Functions can compute and return values.",
    },
  },

  {
    id: 62,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Scope Explained",
    type: "infographic",
    content: {
      intro: "Scope controls where variables can be used.",
      cards: [
        {
          tag: "Scope",
          title: "Local Variables",
          description: "Defined inside a function, used only there.",
        },
        {
          tag: "Scope",
          title: "Global Variables",
          description: "Defined outside, accessible everywhere.",
        },
        {
          tag: "Rule",
          title: "Prefer Local",
          description: "Avoid globals to reduce bugs.",
        },
        {
          tag: "Rule",
          title: "Pass Data In",
          description: "Use parameters to share values.",
        },
        {
          tag: "Why",
          title: "Prevents Conflicts",
          description: "Keeps variables from colliding.",
        },
      ],
    },
  },

  {
    id: 63,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Local vs Global Example",
    type: "code-plus",
    content: {
      title: "Understanding Scope",
      points: [
        "Local variables exist only in function",
        "Globals exist everywhere",
        "Name conflicts avoided",
      ],
      code: `x = 10

def show():
    x = 5
    print(x)

show()
print(x)`,
      note: "Local and global variables are separate.",
    },
  },

  {
    id: 64,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "These mistakes make functions harder to use.",
      cards: [
        {
          tag: "Mistake",
          title: "Forgetting return",
          description: "No output when you need one.",
        },
        {
          tag: "Mistake",
          title: "Overusing Globals",
          description: "Hard to debug and test.",
        },
        {
          tag: "Mistake",
          title: "Huge Functions",
          description: "Too much logic in one place.",
        },
        {
          tag: "Mistake",
          title: "Unclear Names",
          description: "Functions should describe their job.",
        },
        {
          tag: "Fix",
          title: "Return Explicitly",
          description: "Always return the intended value.",
        },
        {
          tag: "Fix",
          title: "Keep it Small",
          description: "One function = one responsibility.",
        },
      ],
    },
  },

  {
    id: 65,
    moduleId: 6,
    moduleTitle: "Functions & Scope",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "You can now create reusable logic with functions.",
      nodes: [
        {
          title: "Functions",
          description: "Reusable blocks of code.",
        },
        {
          title: "Parameters",
          description: "Pass data in.",
        },
        {
          title: "Return Values",
          description: "Get data out.",
        },
        {
          title: "Next: Collections",
          description: "Lists and tuples.",
        },
      ],
      footer: "Up next: working with collections.",
    },
  },
  // =========================
  // Python Module 7: Lists & Tuples
  // =========================

  {
    id: 66,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "Why Collections Exist",
    type: "infographic",
    content: {
      intro: "Collections store many related values in one place.",
      cards: [
        {
          tag: "Problem",
          title: "Too Many Variables",
          description: "Managing lots of separate values is hard.",
        },
        {
          tag: "Problem",
          title: "Repetitive Code",
          description: "Same logic repeated for each value.",
        },
        {
          tag: "Problem",
          title: "Poor Scalability",
          description: "Adding more data becomes messy.",
        },
        {
          tag: "Solution",
          title: "Group Data",
          description: "Store many items in one list or tuple.",
        },
        {
          tag: "Solution",
          title: "Process as a Group",
          description: "Loop through items easily.",
        },
        {
          tag: "Solution",
          title: "Cleaner Logic",
          description: "Simplifies programs and workflows.",
        },
      ],
    },
  },

  {
    id: 67,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "What Is a List?",
    type: "diagram",
    content: {
      intro: "Lists store ordered values you can modify.",
      nodes: [
        {
          title: "Ordered",
          description: "Items stay in a specific order.",
        },
        {
          title: "Indexed",
          description: "Each item has a position starting at 0.",
        },
        {
          title: "Mutable",
          description: "You can change, add, or remove items.",
        },
        {
          title: "Flexible",
          description: "Can store mixed data types.",
        },
      ],
      footer: "Lists are Python’s most common collection.",
    },
  },

  {
    id: 68,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "Creating a List",
    type: "code-plus",
    content: {
      title: "List Creation",
      points: [
        "Comma-separated values",
        "Can mix data types",
        "Stored in a single variable",
      ],
      code: `numbers = [1, 2, 3, 4]
items = ["apple", 10, True]`,
      note: "Lists can store multiple values in one variable.",
    },
  },

  {
    id: 69,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "Accessing List Items",
    type: "code-plus",
    content: {
      title: "Indexing",
      points: [
        "Index starts at 0",
        "Negative index counts from end",
        "Access items directly",
      ],
      code: `fruits = ["apple", "banana", "orange"]

print(fruits[0])
print(fruits[-1])`,
      note: "Indexing allows direct access to list elements.",
    },
  },

  {
    id: 70,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "Modifying Lists",
    type: "steps",
    content: {
      intro: "Lists are built to change as your data changes.",
      steps: [
        {
          title: "Update Values",
          description: "Assign a new value at an index.",
        },
        {
          title: "Add Items",
          description: "Use append() or insert().",
        },
        {
          title: "Remove Items",
          description: "Use remove(), pop(), or del.",
        },
        {
          title: "Reorder",
          description: "Use sort() or reverse().",
        },
      ],
    },
  },

  {
    id: 71,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "List Modification Example",
    type: "code-plus",
    content: {
      title: "Updating a List",
      points: [
        "Assign to index to update",
        "append adds to end",
        "remove deletes item",
      ],
      code: `numbers = [1, 2, 3]
numbers[1] = 20
numbers.append(4)
numbers.remove(1)

print(numbers)`,
      note: "Lists can be modified after creation.",
    },
  },

  {
    id: 72,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "Looping Through Lists",
    type: "infographic",
    content: {
      intro: "Looping through lists is one of the most common patterns in Python.",
      cards: [
        {
          tag: "Pattern",
          title: "for item in list",
          description: "Each loop gives you one item.",
        },
        {
          tag: "Use Case",
          title: "Batch Processing",
          description: "Apply the same logic to many items.",
        },
        {
          tag: "Use Case",
          title: "Data Analysis",
          description: "Inspect or transform datasets.",
        },
        {
          tag: "Use Case",
          title: "Automation",
          description: "Process tasks repeatedly.",
        },
      ],
    },
  },

  {
    id: 73,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "Looping Example",
    type: "code-plus",
    content: {
      title: "Processing List Items",
      points: [
        "Each iteration gives one item",
        "Order preserved",
        "Simple syntax",
      ],
      code: `scores = [70, 85, 90]

for score in scores:
    print(score)`,
      note: "Loops allow you to work with each list item.",
    },
  },

  {
    id: 74,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "What Is a Tuple?",
    type: "diagram",
    content: {
      intro: "Tuples are ordered collections that cannot change.",
      nodes: [
        {
          title: "Ordered",
          description: "Items keep a fixed order.",
        },
        {
          title: "Immutable",
          description: "Values cannot be changed after creation.",
        },
        {
          title: "Parentheses",
          description: "Defined with ( ) instead of [ ].",
        },
        {
          title: "Use for Fixed Data",
          description: "Great for coordinates or records.",
        },
      ],
      footer: "Tuples communicate intent: this data should not change.",
    },
  },

  {
    id: 75,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "Tuple Example",
    type: "code-plus",
    content: {
      title: "Creating a Tuple",
      points: [
        "Parentheses syntax",
        "Immutable data",
        "Accessed like lists",
      ],
      code: `point = (10, 20)

print(point[0])`,
      note: "Tuples store fixed collections of values.",
    },
  },

  {
    id: 76,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "Lists vs Tuples",
    type: "infographic",
    content: {
      intro: "Lists change; tuples stay fixed.",
      cards: [
        {
          tag: "Lists",
          title: "Mutable",
          description: "Can add, remove, or update items.",
        },
        {
          tag: "Lists",
          title: "Flexible",
          description: "Great for dynamic data.",
        },
        {
          tag: "Tuples",
          title: "Immutable",
          description: "Cannot be changed after creation.",
        },
        {
          tag: "Tuples",
          title: "Stable",
          description: "Good for fixed records.",
        },
        {
          tag: "Performance",
          title: "Tuples are Lighter",
          description: "Slightly faster and smaller.",
        },
      ],
    },
  },

  {
    id: 77,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "These mistakes show up often when learning collections.",
      cards: [
        {
          tag: "Mistake",
          title: "Index Out of Range",
          description: "Check length before accessing.",
        },
        {
          tag: "Mistake",
          title: "Modifying Tuples",
          description: "Tuples cannot be changed.",
        },
        {
          tag: "Mistake",
          title: "Confusing Syntax",
          description: "Lists use [ ], tuples use ( ).",
        },
        {
          tag: "Mistake",
          title: "Overusing Lists",
          description: "Choose tuples for fixed data.",
        },
        {
          tag: "Fix",
          title: "Practice Small",
          description: "Test with short lists first.",
        },
      ],
    },
  },

  {
    id: 78,
    moduleId: 7,
    moduleTitle: "Lists & Tuples",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "You can now store and process groups of data.",
      nodes: [
        {
          title: "Lists",
          description: "Flexible collections of items.",
        },
        {
          title: "Tuples",
          description: "Fixed collections of items.",
        },
        {
          title: "Looping",
          description: "Process data item by item.",
        },
        {
          title: "Next: Dictionaries",
          description: "Key–value data structures.",
        },
      ],
      footer: "Up next: dictionaries and sets.",
    },
  },
  // =========================
  // Python Module 8: Dictionaries & Sets
  // =========================

  {
    id: 79,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "Why Key–Value Data Exists",
    type: "infographic",
    content: {
      intro: "Key–value structures model real-world data more clearly than lists.",
      cards: [
        {
          tag: "List Limitation",
          title: "Index Only",
          description: "You must remember what each index means.",
        },
        {
          tag: "List Limitation",
          title: "Unclear Meaning",
          description: "The purpose of each value isn’t obvious.",
        },
        {
          tag: "List Limitation",
          title: "Order Dependence",
          description: "Logic breaks if order changes.",
        },
        {
          tag: "Key–Value Solution",
          title: "Access by Name",
          description: "Use keys like \"name\" or \"email\".",
        },
        {
          tag: "Key–Value Solution",
          title: "Clear Meaning",
          description: "Each key describes its value.",
        },
        {
          tag: "Key–Value Solution",
          title: "Real-World Modeling",
          description: "Great for users, products, configs.",
        },
      ],
    },
  },

  {
    id: 80,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "What Is a Dictionary?",
    type: "diagram",
    content: {
      intro: "A dictionary maps keys to values.",
      nodes: [
        {
          title: "Key",
          description: "A unique identifier like \"name\".",
        },
        {
          title: "Value",
          description: "The data stored for that key.",
        },
        {
          title: "Pair",
          description: "A key and value stored together.",
        },
        {
          title: "Fast Lookup",
          description: "Access values instantly by key.",
        },
      ],
      footer: "Keys are unique; values can be any type.",
    },
  },

  {
    id: 81,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "Creating a Dictionary",
    type: "code-plus",
    content: {
      title: "Dictionary Syntax",
      points: ["Uses curly braces", "Key: value pairs", "Comma separated"],
      code: `user = {
    "name": "Alice",
    "age": 30,
    "is_active": True
}`,
      note: "Dictionaries store related data with meaningful keys.",
    },
  },

  {
    id: 82,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "Accessing Dictionary Values",
    type: "code-plus",
    content: {
      title: "Reading Values",
      points: [
        "Access by key",
        "Raises error if key missing",
        "Exact key match required",
      ],
      code: `print(user["name"])
print(user["age"])`,
      note: "Dictionary values are accessed using their keys.",
    },
  },

  {
    id: 83,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "Updating Dictionaries",
    type: "steps",
    content: {
      intro: "Dictionaries are designed to change as data changes.",
      steps: [
        {
          title: "Update Values",
          description: "Assign a new value to an existing key.",
        },
        {
          title: "Add New Keys",
          description: "Create keys on the fly.",
        },
        {
          title: "Remove Entries",
          description: "Use pop() or del to delete keys.",
        },
        {
          title: "Model Real Data",
          description: "Perfect for user profiles and API responses.",
        },
      ],
    },
  },

  {
    id: 84,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "Dictionary Update Example",
    type: "code-plus",
    content: {
      title: "Modifying a Dictionary",
      points: [
        "Assign to key to update",
        "New keys are added",
        "pop removes entries",
      ],
      code: `user["age"] = 31
user["email"] = "alice@example.com"
user.pop("is_active")

print(user)`,
      note: "Dictionaries can be modified at runtime.",
    },
  },

  {
    id: 85,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "Looping Through Dictionaries",
    type: "infographic",
    content: {
      intro: "You can loop through keys, values, or pairs.",
      cards: [
        {
          tag: "Pattern",
          title: "Keys",
          description: "for key in dict",
        },
        {
          tag: "Pattern",
          title: "Values",
          description: "for value in dict.values()",
        },
        {
          tag: "Pattern",
          title: "Items",
          description: "for key, value in dict.items()",
        },
        {
          tag: "Tip",
          title: "Don’t Rely on Order",
          description: "Treat iteration as unordered.",
        },
      ],
    },
  },

  {
    id: 86,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "Dictionary Loop Example",
    type: "code-plus",
    content: {
      title: "Iterating Over Key–Value Pairs",
      points: [
        "items() returns key and value",
        "Each iteration gives a pair",
        "Very common pattern",
      ],
      code: `for key, value in user.items():
    print(key, value)`,
      note: "Looping over items gives access to both keys and values.",
    },
  },

  {
    id: 87,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "What Is a Set?",
    type: "diagram",
    content: {
      intro: "Sets store unique items with fast lookup.",
      nodes: [
        {
          title: "Unique Values",
          description: "Duplicates are removed automatically.",
        },
        {
          title: "Unordered",
          description: "No fixed position or index.",
        },
        {
          title: "Fast Lookup",
          description: "Great for membership checks.",
        },
        {
          title: "Use Cases",
          description: "Deduping, comparisons, membership.",
        },
      ],
      footer: "Sets are perfect for uniqueness and fast checks.",
    },
  },

  {
    id: 88,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "Set Example",
    type: "code-plus",
    content: {
      title: "Working with Sets",
      points: [
        "Duplicates are removed",
        "Uses curly braces or set()",
        "Order not guaranteed",
      ],
      code: `numbers = {1, 2, 2, 3}
numbers.add(4)

print(numbers)`,
      note: "Sets automatically handle uniqueness.",
    },
  },

  {
    id: 89,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "Avoid these pitfalls with dictionaries and sets.",
      cards: [
        {
          tag: "Mistake",
          title: "Mutable Keys",
          description: "Keys must be immutable types.",
        },
        {
          tag: "Mistake",
          title: "Expecting Order in Sets",
          description: "Sets are unordered by design.",
        },
        {
          tag: "Mistake",
          title: "Missing Keys",
          description: "Use get() to avoid errors.",
        },
        {
          tag: "Mistake",
          title: "Wrong Structure",
          description: "Choose lists, dicts, or sets intentionally.",
        },
        {
          tag: "Fix",
          title: "Use get()",
          description: "Provide a default value.",
        },
      ],
    },
  },

  {
    id: 90,
    moduleId: 8,
    moduleTitle: "Dictionaries & Sets",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "You can now model data with keys and enforce uniqueness.",
      nodes: [
        {
          title: "Dictionaries",
          description: "Store data by key.",
        },
        {
          title: "Sets",
          description: "Store unique values.",
        },
        {
          title: "Iteration",
          description: "Loop through keys, values, or items.",
        },
        {
          title: "Next: Advanced Ops",
          description: "Comprehensions and functional tools.",
        },
      ],
      footer: "Up next: comprehensions and functional patterns.",
    },
  },
  // =========================
  // Python Module 9: Advanced Data Operations (Comprehensions & Functional Patterns)
  // =========================

  {
    id: 91,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "Why Advanced Data Operations Matter",
    type: "infographic",
    content: {
      intro: "Advanced operations make data processing shorter and clearer.",
      cards: [
        {
          tag: "Problem",
          title: "Verbose Loops",
          description: "Too much boilerplate for simple work.",
        },
        {
          tag: "Problem",
          title: "Repetitive Logic",
          description: "Same transformation repeated many times.",
        },
        {
          tag: "Problem",
          title: "Hard to Read",
          description: "Long loops hide intent.",
        },
        {
          tag: "Advanced",
          title: "Express Intent",
          description: "One line can show the goal.",
        },
        {
          tag: "Advanced",
          title: "Reduce Boilerplate",
          description: "Less code, fewer bugs.",
        },
        {
          tag: "Advanced",
          title: "Pythonic Style",
          description: "Readable, clean data operations.",
        },
      ],
    },
  },

  {
    id: 92,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "List Comprehensions Explained",
    type: "diagram",
    content: {
      intro: "Comprehensions build new lists from existing data.",
      nodes: [
        {
          title: "Start with Data",
          description: "Use a list or iterable.",
        },
        {
          title: "Transform",
          description: "Apply an expression to each item.",
        },
        {
          title: "Filter (Optional)",
          description: "Keep only matching items.",
        },
        {
          title: "New List",
          description: "Produces a clean new list.",
        },
      ],
      footer: "Comprehensions replace many simple loops.",
    },
  },

  {
    id: 93,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "List Comprehension Syntax",
    type: "code-plus",
    content: {
      title: "Basic Structure",
      points: [
        "Expression comes first",
        "for defines iteration",
        "Optional if filters values",
      ],
      code: `numbers = [1, 2, 3, 4]

squares = [n * n for n in numbers]

print(squares)`,
      note: "List comprehensions create new lists from existing ones.",
    },
  },

  {
    id: 94,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "Comprehension with Condition",
    type: "code-plus",
    content: {
      title: "Filtering Data",
      points: [
        "if filters items",
        "Condition comes last",
        "Very readable pattern",
      ],
      code: `numbers = [1, 2, 3, 4, 5]

evens = [n for n in numbers if n % 2 == 0]

print(evens)`,
      note: "Conditions allow selective data processing.",
    },
  },

  {
    id: 95,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "Dictionary Comprehensions",
    type: "infographic",
    content: {
      intro: "Dictionary comprehensions build key–value data quickly.",
      cards: [
        {
          tag: "What They Do",
          title: "Concise Creation",
          description: "Build dicts in a single line.",
        },
        {
          tag: "What They Do",
          title: "Transform Values",
          description: "Update values while copying keys.",
        },
        {
          tag: "Use Case",
          title: "Reformat API Data",
          description: "Normalize complex responses.",
        },
        {
          tag: "Use Case",
          title: "Index by Key",
          description: "Map IDs to objects.",
        },
      ],
    },
  },

  {
    id: 96,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "Dictionary Comprehension Example",
    type: "code-plus",
    content: {
      title: "Key–Value Transformation",
      points: [
        "Key and value expressions",
        "Iterate over items()",
        "Produces new dictionary",
      ],
      code: `scores = {"Alice": 80, "Bob": 90}

adjusted = {name: score + 5 for name, score in scores.items()}

print(adjusted)`,
      note: "Dictionary comprehensions transform mappings cleanly.",
    },
  },

  {
    id: 97,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "Set Comprehensions",
    type: "diagram",
    content: {
      intro: "Set comprehensions create unique values from data.",
      nodes: [
        {
          title: "Start with Data",
          description: "Use a list or iterable.",
        },
        {
          title: "Transform",
          description: "Compute a new value per item.",
        },
        {
          title: "Uniqueness",
          description: "Duplicates removed automatically.",
        },
        {
          title: "Result Set",
          description: "Fast membership checks.",
        },
      ],
      footer: "Great for cleanup and removing duplicates.",
    },
  },

  {
    id: 98,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "Set Comprehension Example",
    type: "code-plus",
    content: {
      title: "Unique Transformations",
      points: [
        "Curly brace syntax",
        "Duplicates removed automatically",
        "Fast membership checks",
      ],
      code: `numbers = [1, 2, 2, 3, 3]

unique_squares = {n * n for n in numbers}

print(unique_squares)`,
      note: "Set comprehensions enforce uniqueness by default.",
    },
  },

  {
    id: 99,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "map() Function",
    type: "steps",
    content: {
      intro: "map() applies a function to every item.",
      steps: [
        {
          title: "Provide a Function",
          description: "Define how each item changes.",
        },
        {
          title: "Provide Data",
          description: "Pass a list or iterable.",
        },
        {
          title: "Get an Iterator",
          description: "Wrap in list() if you need a list.",
        },
        {
          title: "Use Carefully",
          description: "Comprehensions are often clearer.",
        },
      ],
    },
  },

  {
    id: 100,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "map() Example",
    type: "code-plus",
    content: {
      title: "Mapping Values",
      points: [
        "Function passed to map",
        "Produces iterable",
        "Often wrapped in list()",
      ],
      code: `numbers = [1, 2, 3]

squares = list(map(lambda x: x * x, numbers))

print(squares)`,
      note: "map applies a function to each element.",
    },
  },

  {
    id: 101,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "filter() Function",
    type: "steps",
    content: {
      intro: "filter() keeps only items that pass a test.",
      steps: [
        {
          title: "Write a Condition",
          description: "Function returns True/False.",
        },
        {
          title: "Apply to Data",
          description: "filter() checks each item.",
        },
        {
          title: "Get an Iterator",
          description: "Wrap in list() if needed.",
        },
        {
          title: "Use When Clear",
          description: "Comprehensions are often more readable.",
        },
      ],
    },
  },

  {
    id: 102,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "filter() Example",
    type: "code-plus",
    content: {
      title: "Filtering Data",
      points: [
        "Function returns boolean",
        "Items kept when True",
        "Often wrapped in list()",
      ],
      code: `numbers = [1, 2, 3, 4]

evens = list(filter(lambda x: x % 2 == 0, numbers))

print(evens)`,
      note: "filter keeps items that satisfy a condition.",
    },
  },

  {
    id: 103,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "Comprehensions vs map/filter",
    type: "two-column",
    content: {
      left: {
        title: "Comprehensions",
        items: [
          "More readable",
          "Pythonic style",
          "Inline logic",
          "Preferred by community",
        ],
      },
      right: {
        title: "map / filter",
        items: [
          "Functional style",
          "Good for pipelines",
          "Less readable for beginners",
          "Still useful",
        ],
      },
    },
  },

  {
    id: 104,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overly complex comprehensions",
          "Unreadable one-liners",
          "Using lambda excessively",
          "Ignoring readability",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Keep comprehensions simple",
          "Break logic into steps",
          "Prefer clarity over brevity",
          "Refactor when unclear",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 9,
    moduleTitle: "Advanced Data Operations",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Working with files",
          "Reading and writing data",
          "Persistent storage",
          "Real-world I/O",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You can transform data cleanly",
          "You understand comprehensions",
          "You know functional patterns",
          "Ready for file handling",
        ],
      },
    },
  },
  // =========================
  // Python Module 10: Working with Files (Reading & Writing Data)
  // =========================

  {
    id: 106,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "Why File Handling Matters",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Data disappears when program ends",
          "Manual data entry is inefficient",
          "Programs need persistent storage",
          "Real-world apps use files",
        ],
      },
      right: {
        title: "The File Solution",
        items: [
          "Save data permanently",
          "Reuse stored information",
          "Exchange data between programs",
          "Foundation of real applications",
        ],
      },
    },
  },

  {
    id: 107,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "What Is a File?",
    type: "two-column",
    content: {
      left: {
        title: "File Explained",
        items: [
          "A collection of stored data",
          "Lives on disk",
          "Has a name and path",
          "Persists after program ends",
        ],
      },
      right: {
        title: "Common File Types",
        items: [
          "Text files (.txt)",
          "CSV files (.csv)",
          "JSON files (.json)",
          "Log files",
        ],
      },
    },
  },

  {
    id: 108,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "Opening Files in Python",
    type: "two-column",
    content: {
      left: {
        title: "open() Function",
        items: [
          "Used to open files",
          "Requires file path",
          "Requires mode",
          "Returns file object",
        ],
      },
      right: {
        title: "Common Modes",
        items: [
          "r → read",
          "w → write (overwrite)",
          "a → append",
          "x → create new file",
        ],
      },
    },
  },

  {
    id: 109,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "Reading from a File",
    type: "code-plus",
    content: {
      title: "Basic File Read",
      points: [
        "open file in read mode",
        "read() gets content",
        "Always close file",
      ],
      code: `file = open("data.txt", "r")
content = file.read()
print(content)
file.close()`,
      note: "This reads the entire content of a text file.",
    },
  },

  {
    id: 110,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "Writing to a File",
    type: "code-plus",
    content: {
      title: "Basic File Write",
      points: [
        "w mode overwrites file",
        "Creates file if missing",
        "write stores text",
      ],
      code: `file = open("data.txt", "w")
file.write("Hello, file!")
file.close()`,
      note: "Writing mode replaces existing file content.",
    },
  },

  {
    id: 111,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "Appending to a File",
    type: "code-plus",
    content: {
      title: "Adding Data Safely",
      points: [
        "a mode preserves content",
        "Adds data to end",
        "Useful for logs",
      ],
      code: `file = open("data.txt", "a")
file.write("\nNew line added")
file.close()`,
      note: "Append mode adds content without deleting existing data.",
    },
  },

  {
    id: 112,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "Using with Statement",
    type: "two-column",
    content: {
      left: {
        title: "What with Does",
        items: [
          "Automatically closes files",
          "Safer and cleaner",
          "Handles errors better",
          "Recommended approach",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Prevents resource leaks",
          "Cleaner syntax",
          "Less boilerplate",
          "Professional standard",
        ],
      },
    },
  },

  {
    id: 113,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "with Statement Example",
    type: "code-plus",
    content: {
      title: "Best Practice File Handling",
      points: ["No manual close needed", "Clear scope", "Exception-safe"],
      code: `with open("data.txt", "r") as file:
    content = file.read()
    print(content)`,
      note: "The file is closed automatically when the block ends.",
    },
  },

  {
    id: 114,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "Reading Line by Line",
    type: "two-column",
    content: {
      left: {
        title: "Why Line-by-Line",
        items: [
          "Large files",
          "Memory efficiency",
          "Streaming data",
          "Log processing",
        ],
      },
      right: {
        title: "How It Works",
        items: [
          "Iterate over file object",
          "One line at a time",
          "Very Pythonic",
          "Common pattern",
        ],
      },
    },
  },

  {
    id: 115,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "Line-by-Line Example",
    type: "code-plus",
    content: {
      title: "Iterating Over File Lines",
      points: [
        "Each iteration gives one line",
        "Trailing newline included",
        "Strip when needed",
      ],
      code: `with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())`,
      note: "This reads files efficiently line by line.",
    },
  },

  {
    id: 116,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting to close files",
          "Using wrong file mode",
          "Overwriting data accidentally",
          "Hardcoding file paths",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always use with",
          "Double-check modes",
          "Backup important files",
          "Use relative paths",
        ],
      },
    },
  },

  {
    id: 117,
    moduleId: 10,
    moduleTitle: "Working with Files",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Errors and exceptions",
          "Handling failures",
          "Robust programs",
          "Defensive coding",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You can persist data",
          "You can read and write files",
          "You understand best practices",
          "Ready for error handling",
        ],
      },
    },
  },
  // =========================
  // Python Module 11: Errors & Exceptions
  // =========================

  {
    id: 118,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Why Errors Exist",
    type: "two-column",
    content: {
      left: {
        title: "Reality of Programs",
        items: [
          "Users enter wrong input",
          "Files may not exist",
          "Networks can fail",
          "Bugs are unavoidable",
        ],
      },
      right: {
        title: "Programmer Responsibility",
        items: [
          "Expect failure",
          "Handle errors gracefully",
          "Prevent crashes",
          "Protect user experience",
        ],
      },
    },
  },

  {
    id: 119,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "What Is an Error?",
    type: "two-column",
    content: {
      left: {
        title: "Error Explained",
        items: [
          "Something goes wrong at runtime",
          "Stops normal execution",
          "Python reports what happened",
          "Helps locate problems",
        ],
      },
      right: {
        title: "Important Mindset",
        items: [
          "Errors are not failures",
          "They are feedback",
          "Every developer sees errors",
          "Learning includes debugging",
        ],
      },
    },
  },

  {
    id: 120,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Common Types of Errors",
    type: "two-column",
    content: {
      left: {
        title: "Frequent Error Types",
        items: ["SyntaxError", "NameError", "TypeError", "ValueError"],
      },
      right: {
        title: "What This Means",
        items: [
          "Each error has a cause",
          "Messages are descriptive",
          "Error type gives clues",
          "Read errors carefully",
        ],
      },
    },
  },

  {
    id: 121,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "What Is an Exception?",
    type: "two-column",
    content: {
      left: {
        title: "Exception Explained",
        items: [
          "An error object",
          "Raised when something goes wrong",
          "Interrupts normal flow",
          "Can be handled",
        ],
      },
      right: {
        title: "Why Exceptions Matter",
        items: [
          "Allow recovery",
          "Prevent crashes",
          "Make programs robust",
          "Professional standard",
        ],
      },
    },
  },

  {
    id: 122,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "try / except Explained",
    type: "two-column",
    content: {
      left: {
        title: "try Block",
        items: [
          "Wrap risky code",
          "Code that might fail",
          "Runs first",
          "Monitored for errors",
        ],
      },
      right: {
        title: "except Block",
        items: [
          "Runs if error occurs",
          "Receives exception",
          "Handles failure safely",
          "Prevents program crash",
        ],
      },
    },
  },

  {
    id: 123,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Basic try / except Example",
    type: "code-plus",
    content: {
      title: "Catching an Error",
      points: [
        "Error is caught",
        "Program continues running",
        "Message is available",
      ],
      code: `try:
    number = int("abc")
except ValueError:
    print("Invalid number")`,
      note: "The program handles invalid input without crashing.",
    },
  },

  {
    id: 124,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Catching Multiple Exceptions",
    type: "two-column",
    content: {
      left: {
        title: "Why Multiple except Blocks",
        items: [
          "Different errors need different handling",
          "Clearer logic",
          "Better debugging",
          "More control",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Handle specific exceptions",
          "Avoid bare except",
          "Be intentional",
          "Fail clearly",
        ],
      },
    },
  },

  {
    id: 125,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Multiple Exception Example",
    type: "code-plus",
    content: {
      title: "Handling Different Errors",
      points: [
        "Specific except blocks",
        "Order matters",
        "Fallback handling",
      ],
      code: `try:
    file = open("missing.txt", "r")
    content = int(file.read())
except FileNotFoundError:
    print("File not found")
except ValueError:
    print("Invalid file content")`,
      note: "Different errors are handled separately.",
    },
  },

  {
    id: 126,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "else and finally",
    type: "two-column",
    content: {
      left: {
        title: "else Block",
        items: [
          "Runs if no exception occurs",
          "Keeps success logic clean",
          "Optional",
          "Improves readability",
        ],
      },
      right: {
        title: "finally Block",
        items: [
          "Always runs",
          "Used for cleanup",
          "Closes resources",
          "Guaranteed execution",
        ],
      },
    },
  },

  {
    id: 127,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "else / finally Example",
    type: "code-plus",
    content: {
      title: "Full Exception Flow",
      points: ["try risky code", "else on success", "finally always runs"],
      code: `try:
    file = open("data.txt", "r")
except FileNotFoundError:
    print("Missing file")
else:
    print(file.read())
finally:
    print("Done")`,
      note: "This structure handles success, failure, and cleanup.",
    },
  },

  {
    id: 128,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Raising Your Own Exceptions",
    type: "two-column",
    content: {
      left: {
        title: "Why Raise Exceptions",
        items: [
          "Validate input",
          "Enforce rules",
          "Stop invalid execution",
          "Fail fast",
        ],
      },
      right: {
        title: "When to Raise",
        items: [
          "Invalid arguments",
          "Unexpected states",
          "Business rules violated",
          "Unsafe operations",
        ],
      },
    },
  },

  {
    id: 129,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "raise Example",
    type: "code-plus",
    content: {
      title: "Custom Error Logic",
      points: [
        "raise triggers exception",
        "Can be caught later",
        "Clear error messages",
      ],
      code: `def withdraw(amount):
    if amount <= 0:
        raise ValueError("Amount must be positive")
    return "Withdrawal successful"`,
      note: "Raising exceptions enforces rules and protects logic.",
    },
  },

  {
    id: 130,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Catching all exceptions blindly",
          "Ignoring error messages",
          "Overusing try blocks",
          "Not validating input",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Catch specific exceptions",
          "Read stack traces",
          "Use try only where needed",
          "Validate early",
        ],
      },
    },
  },

  {
    id: 131,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Recursion",
          "Call stack",
          "Advanced problem solving",
          "Execution models",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You can handle failures",
          "You write safer programs",
          "You understand exceptions",
          "Ready for recursion",
        ],
      },
    },
  },
  // =========================
  // Python Module 12: Recursion & the Call Stack
  // =========================

  {
    id: 132,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "What Is Recursion?",
    type: "diagram",
    content: {
      intro: "Recursion solves problems by reducing them into smaller versions of the same problem.",
      nodes: [
        {
          title: "Original Problem",
          description: "Start with a large task.",
        },
        {
          title: "Smaller Problem",
          description: "Call the function with reduced input.",
        },
        {
          title: "Base Case",
          description: "Stopping condition prevents infinite calls.",
        },
        {
          title: "Unwind & Return",
          description: "Results flow back through the stack.",
        },
      ],
      footer: "Recursion works when every call moves toward a base case.",
    },
  },

  {
    id: 133,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "The Recursive Mental Model",
    type: "steps",
    content: {
      intro: "A simple way to reason about recursion.",
      steps: [
        {
          title: "Trust the Function",
          description: "Assume it works on smaller inputs.",
        },
        {
          title: "Reduce the Input",
          description: "Each call moves closer to the base case.",
        },
        {
          title: "Let the Stack Work",
          description: "The call stack tracks each call.",
        },
        {
          title: "Stop at the Base Case",
          description: "No base case means infinite recursion.",
        },
      ],
    },
  },

  {
    id: 134,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Base Case vs Recursive Case",
    type: "infographic",
    content: {
      intro: "Every recursive function needs both parts.",
      cards: [
        {
          tag: "Base Case",
          title: "Stopping Condition",
          items: [
            "Ends recursion",
            "Must be reachable",
            "Simplest version of the problem",
          ],
        },
        {
          tag: "Recursive Case",
          title: "Self-Call",
          items: [
            "Calls the function again",
            "Reduces problem size",
            "Moves toward base case",
          ],
        },
      ],
    },
  },

  {
    id: 135,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Simple Recursion Example",
    type: "code-plus",
    content: {
      title: "Countdown Function",
      points: [
        "Base case stops recursion",
        "Each call reduces input",
        "Same logic reused",
      ],
      code: `def countdown(n):
    if n == 0:
        return
    print(n)
    countdown(n - 1)

countdown(5)`,
      note: "The function calls itself until the base case is reached.",
    },
  },

  {
    id: 136,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Understanding the Call Stack",
    type: "two-column",
    content: {
      left: {
        title: "What Is the Call Stack?",
        items: [
          "Tracks active function calls",
          "Last call goes on top",
          "Each call has its own scope",
          "Managed automatically by Python",
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
    id: 137,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Call Stack Growth & Unwinding",
    type: "two-column",
    content: {
      left: {
        title: "Stack Growth",
        items: [
          "Each recursive call adds a frame",
          "Local variables stored per call",
          "Memory usage increases",
          "Too deep causes errors",
        ],
      },
      right: {
        title: "Stack Unwinding",
        items: [
          "Base case reached",
          "Functions return in reverse order",
          "Frames are removed",
          "Final result produced",
        ],
      },
    },
  },

  {
    id: 138,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Recursion with Return Values",
    type: "code-plus",
    content: {
      title: "Factorial Example",
      points: [
        "Each call returns a value",
        "Results combine during unwinding",
        "Classic recursion pattern",
      ],
      code: `def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))`,
      note: "Each recursive call contributes to the final result.",
    },
  },

  {
    id: 139,
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
          "Cleaner problem expression",
        ],
      },
      right: {
        title: "When Loops Are Better",
        items: [
          "Simple repetition",
          "Large iteration counts",
          "Performance-critical code",
          "Avoiding stack overflow",
        ],
      },
    },
  },

  {
    id: 140,
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
          "Always write base case first",
          "Test with small inputs",
          "Trace calls step by step",
          "Print arguments while debugging",
        ],
      },
    },
  },

  {
    id: 141,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Thinking Recursively",
    type: "two-column",
    content: {
      left: {
        title: "Problem-Solving Shift",
        items: [
          "Think in smaller problems",
          "Trust function correctness",
          "Let stack manage repetition",
          "Focus on transitions",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Modules and packages",
          "Code organization",
          "Reusable programs",
          "Scaling Python projects",
        ],
      },
    },
  },
  // =========================
  // Python Module 13: Modules & Packages
  // =========================

  {
    id: 142,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "Why Code Organization Matters",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Large single files",
          "Hard to maintain code",
          "Name collisions",
          "Poor scalability",
        ],
      },
      right: {
        title: "The Organized Approach",
        items: [
          "Split code into files",
          "Reuse logic cleanly",
          "Improve readability",
          "Professional structure",
        ],
      },
    },
  },

  {
    id: 143,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "What Is a Module?",
    type: "two-column",
    content: {
      left: {
        title: "Module Explained",
        items: [
          "A Python file",
          "Contains functions and variables",
          "Reusable code unit",
          "Imported when needed",
        ],
      },
      right: {
        title: "Why Modules Matter",
        items: [
          "Logical separation",
          "Cleaner programs",
          "Easier debugging",
          "Reusability",
        ],
      },
    },
  },

  {
    id: 144,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "Importing a Module",
    type: "code-plus",
    content: {
      title: "Basic Import",
      points: [
        "import keyword",
        "Module name without .py",
        "Access via dot notation",
      ],
      code: `import math

print(math.sqrt(16))`,
      note: "Modules expose their contents through the module name.",
    },
  },

  {
    id: 145,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "from ... import Syntax",
    type: "two-column",
    content: {
      left: {
        title: "What This Does",
        items: [
          "Imports specific items",
          "Avoids module prefix",
          "More concise access",
          "Commonly used",
        ],
      },
      right: {
        title: "Trade-offs",
        items: [
          "Possible name clashes",
          "Less explicit origin",
          "Use carefully",
          "Prefer clarity",
        ],
      },
    },
  },

  {
    id: 146,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "Selective Import Example",
    type: "code-plus",
    content: {
      title: "Importing Specific Functions",
      points: ["Direct access", "Cleaner syntax", "Same functionality"],
      code: `from math import sqrt

print(sqrt(25))`,
      note: "Specific imports reduce typing but require caution.",
    },
  },

  {
    id: 147,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "What Is a Package?",
    type: "two-column",
    content: {
      left: {
        title: "Package Explained",
        items: [
          "A collection of modules",
          "Organized in directories",
          "Represents a namespace",
          "Scales large projects",
        ],
      },
      right: {
        title: "Why Packages Exist",
        items: [
          "Group related modules",
          "Avoid naming conflicts",
          "Improve structure",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 148,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "Creating Your Own Module",
    type: "two-column",
    content: {
      left: {
        title: "How It Works",
        items: [
          "Create a .py file",
          "Define functions or variables",
          "Save in same directory",
          "Import when needed",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Meaningful filenames",
          "One responsibility per module",
          "Avoid circular imports",
          "Keep modules focused",
        ],
      },
    },
  },

  {
    id: 149,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "Custom Module Example",
    type: "code-plus",
    content: {
      title: "Using Your Own Module",
      points: [
        "Same import syntax",
        "Python finds local files",
        "Reusable logic",
      ],
      code: `# utils.py
def add(a, b):
    return a + b

# main.py
import utils
print(utils.add(2, 3))`,
      note: "Your own modules behave like built-in ones.",
    },
  },

  {
    id: 150,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "The Python Standard Library",
    type: "two-column",
    content: {
      left: {
        title: "What It Is",
        items: [
          "Built-in modules",
          "Ships with Python",
          "No installation required",
          "Very powerful",
        ],
      },
      right: {
        title: "Examples",
        items: ["math", "datetime", "os", "random"],
      },
    },
  },

  {
    id: 151,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Wrong import paths",
          "Circular imports",
          "Overusing from-import",
          "Poor file naming",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Plan structure early",
          "Use explicit imports",
          "Test modules independently",
          "Keep hierarchy simple",
        ],
      },
    },
  },

  {
    id: 152,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Object-oriented programming",
          "Classes and objects",
          "Encapsulation",
          "Reusable designs",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You can organize code",
          "You understand imports",
          "You can reuse modules",
          "Ready for OOP",
        ],
      },
    },
  },
  // =========================
  // Python Module 14: Object-Oriented Programming (OOP)
  // =========================

  {
    id: 153,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Why Object-Oriented Programming?",
    type: "two-column",
    content: {
      left: {
        title: "Limits of Procedural Code",
        items: [
          "Hard to model real-world entities",
          "Data and logic are scattered",
          "Poor scalability for large systems",
          "Difficult to maintain over time",
        ],
      },
      right: {
        title: "OOP Benefits",
        items: [
          "Models real-world concepts",
          "Groups data with behavior",
          "Improves reusability",
          "Industry-standard paradigm",
        ],
      },
    },
  },

  {
    id: 154,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "What Is an Object?",
    type: "two-column",
    content: {
      left: {
        title: "Object Explained",
        items: [
          "An instance of a class",
          "Represents a real-world entity",
          "Contains data and behavior",
          "Created from a blueprint",
        ],
      },
      right: {
        title: "Examples",
        items: ["User", "Car", "BankAccount", "Product"],
      },
    },
  },

  {
    id: 155,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "What Is a Class?",
    type: "two-column",
    content: {
      left: {
        title: "Class Explained",
        items: [
          "Blueprint for objects",
          "Defines attributes and methods",
          "Not an object itself",
          "Reusable design",
        ],
      },
      right: {
        title: "Key Idea",
        items: [
          "One class → many objects",
          "Shared structure",
          "Separate instances",
          "Encapsulation",
        ],
      },
    },
  },

  {
    id: 156,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Defining a Class",
    type: "code-plus",
    content: {
      title: "Basic Class Syntax",
      points: [
        "class keyword defines a class",
        "__init__ initializes objects",
        "self refers to the instance",
      ],
      code: `class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age`,
      note: "Classes define the structure and behavior of objects.",
    },
  },

  {
    id: 157,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Creating Objects",
    type: "code-plus",
    content: {
      title: "Instantiating a Class",
      points: [
        "Call class like a function",
        "__init__ runs automatically",
        "Each object is independent",
      ],
      code: `user1 = User("Alice", 30)
user2 = User("Bob", 25)

print(user1.name)
print(user2.age)`,
      note: "Each object has its own data.",
    },
  },

  {
    id: 158,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Instance Attributes",
    type: "two-column",
    content: {
      left: {
        title: "Attributes",
        items: [
          "Store object data",
          "Defined using self",
          "Unique per object",
          "Accessed with dot notation",
        ],
      },
      right: {
        title: "Why They Matter",
        items: [
          "Hold object state",
          "Represent properties",
          "Enable behavior",
          "Model real entities",
        ],
      },
    },
  },

  {
    id: 159,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Instance Methods",
    type: "two-column",
    content: {
      left: {
        title: "Methods Explained",
        items: [
          "Functions inside classes",
          "Operate on object data",
          "First parameter is self",
          "Define object behavior",
        ],
      },
      right: {
        title: "Why Methods Matter",
        items: [
          "Encapsulate logic",
          "Protect data",
          "Improve readability",
          "Encourage reuse",
        ],
      },
    },
  },

  {
    id: 160,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Method Example",
    type: "code-plus",
    content: {
      title: "Adding Behavior",
      points: [
        "Methods access attributes via self",
        "Encapsulate logic",
        "Called on objects",
      ],
      code: `class User:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print("Hello,", self.name)

user = User("Alice")
user.greet()`,
      note: "Methods define what an object can do.",
    },
  },

  {
    id: 161,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Encapsulation",
    type: "two-column",
    content: {
      left: {
        title: "Encapsulation Explained",
        items: [
          "Group data and methods together",
          "Hide internal details",
          "Expose only what is needed",
          "Improve safety",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Prevents accidental misuse",
          "Simplifies interfaces",
          "Improves maintainability",
          "Supports abstraction",
        ],
      },
    },
  },

  {
    id: 162,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Inheritance",
    type: "two-column",
    content: {
      left: {
        title: "Inheritance Explained",
        items: [
          "Create classes from existing classes",
          "Reuse behavior",
          "Extend functionality",
          "Is-a relationship",
        ],
      },
      right: {
        title: "Why Use It",
        items: [
          "Avoid duplication",
          "Shared logic",
          "Clear hierarchies",
          "Scalable design",
        ],
      },
    },
  },

  {
    id: 163,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Inheritance Example",
    type: "code-plus",
    content: {
      title: "Extending a Class",
      points: [
        "Child class inherits parent",
        "super() calls parent logic",
        "Overrides behavior if needed",
      ],
      code: `class Admin(User):
    def __init__(self, name):
        super().__init__(name)

    def delete_user(self):
        print("User deleted")`,
      note: "Inheritance allows extension of existing classes.",
    },
  },

  {
    id: 164,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting self",
          "Overusing inheritance",
          "Large monolithic classes",
          "Mixing responsibilities",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Keep classes small",
          "Prefer composition",
          "Use clear naming",
          "Refactor early",
        ],
      },
    },
  },

  {
    id: 165,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Virtual environments",
          "Package management",
          "Tooling",
          "Professional workflows",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand OOP basics",
          "You can model real-world entities",
          "You can write reusable classes",
          "Ready for Python tooling",
        ],
      },
    },
  },
  // =========================
  // Python Module 15: Virtual Environments & Tooling
  // =========================

  {
    id: 166,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "Why Tooling Matters in Python",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Conflicting library versions",
          "Broken projects after installs",
          "Global environment pollution",
          "Hard-to-reproduce setups",
        ],
      },
      right: {
        title: "The Professional Solution",
        items: [
          "Isolated environments",
          "Project-specific dependencies",
          "Reproducible setups",
          "Industry best practice",
        ],
      },
    },
  },

  {
    id: 167,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "What Is a Virtual Environment?",
    type: "two-column",
    content: {
      left: {
        title: "Virtual Environment Explained",
        items: [
          "Isolated Python environment",
          "Separate dependencies per project",
          "Uses same Python interpreter",
          "Lightweight and fast",
        ],
      },
      right: {
        title: "Why It Exists",
        items: [
          "Avoid dependency conflicts",
          "Keep system Python clean",
          "Support multiple projects",
          "Professional workflow",
        ],
      },
    },
  },

  {
    id: 168,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "Creating a Virtual Environment",
    type: "code-plus",
    content: {
      title: "venv Command",
      points: [
        "Built into Python",
        "Creates isolated folder",
        "Project-specific setup",
      ],
      code: `python -m venv venv`,
      note: "This creates a virtual environment in a folder named venv.",
    },
  },

  {
    id: 169,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "Activating a Virtual Environment",
    type: "two-column",
    content: {
      left: {
        title: "Activation Commands",
        items: [
          "Windows: venv\\Scripts\\activate",
          "macOS/Linux: source venv/bin/activate",
          "Shell prompt changes",
          "Environment becomes active",
        ],
      },
      right: {
        title: "What Activation Does",
        items: [
          "Uses local Python",
          "Uses local pip",
          "Installs stay isolated",
          "Easy to deactivate",
        ],
      },
    },
  },

  {
    id: 170,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "Installing Packages with pip",
    type: "two-column",
    content: {
      left: {
        title: "pip Explained",
        items: [
          "Python package manager",
          "Installs external libraries",
          "Works inside venv",
          "Industry standard",
        ],
      },
      right: {
        title: "Common Commands",
        items: [
          "pip install package",
          "pip uninstall package",
          "pip list",
          "pip show package",
        ],
      },
    },
  },

  {
    id: 171,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "pip Example",
    type: "code-plus",
    content: {
      title: "Installing a Package",
      points: [
        "Run inside active venv",
        "Downloads from PyPI",
        "Available to project only",
      ],
      code: `pip install requests`,
      note:
        "This installs the requests library into the active virtual environment.",
    },
  },

  {
    id: 172,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "requirements.txt",
    type: "two-column",
    content: {
      left: {
        title: "What It Is",
        items: [
          "List of project dependencies",
          "Used to recreate environments",
          "Version-pinned libraries",
          "Shared with teams",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Reproducible builds",
          "Easy setup",
          "Deployment-ready",
          "Professional standard",
        ],
      },
    },
  },

  {
    id: 173,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "requirements.txt Example",
    type: "code-plus",
    content: {
      title: "Generating Dependencies",
      points: [
        "Freeze installed packages",
        "Captures versions",
        "Easy sharing",
      ],
      code: `pip freeze > requirements.txt`,
      note: "This saves all installed packages and versions.",
    },
  },

  {
    id: 174,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "Installing from requirements.txt",
    type: "code-plus",
    content: {
      title: "Recreating Environments",
      points: [
        "Installs all dependencies",
        "Exact versions restored",
        "Fast setup",
      ],
      code: `pip install -r requirements.txt`,
      note: "This installs all dependencies listed in the file.",
    },
  },

  {
    id: 175,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Not using virtual environments",
          "Installing globally by accident",
          "Forgetting to activate venv",
          "Ignoring dependency versions",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always create venv per project",
          "Check shell prompt",
          "Use requirements.txt",
          "Document setup steps",
        ],
      },
    },
  },

  {
    id: 176,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Testing basics",
          "Writing reliable code",
          "Automated validation",
          "Quality assurance",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand Python tooling",
          "You can isolate projects",
          "You can manage dependencies",
          "Ready for testing",
        ],
      },
    },
  },
  // =========================
  // Python Module 16: Testing Basics (Writing Reliable Code)
  // =========================

  {
    id: 177,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "Why Testing Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Testing",
        items: [
          "Bugs go unnoticed",
          "Changes break existing code",
          "Hard to trust results",
          "Manual checking is slow",
        ],
      },
      right: {
        title: "With Testing",
        items: [
          "Catch bugs early",
          "Confidence in changes",
          "Faster development",
          "Professional code quality",
        ],
      },
    },
  },

  {
    id: 178,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "What Is a Test?",
    type: "two-column",
    content: {
      left: {
        title: "Test Explained",
        items: [
          "Small piece of code",
          "Checks expected behavior",
          "Runs automatically",
          "Passes or fails",
        ],
      },
      right: {
        title: "Core Idea",
        items: [
          "Given input",
          "Expect output",
          "Verify result",
          "Detect regressions",
        ],
      },
    },
  },

  {
    id: 179,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "Manual vs Automated Testing",
    type: "two-column",
    content: {
      left: {
        title: "Manual Testing",
        items: [
          "Run code by hand",
          "Error-prone",
          "Not repeatable",
          "Slow at scale",
        ],
      },
      right: {
        title: "Automated Testing",
        items: [
          "Run with one command",
          "Repeatable",
          "Fast feedback",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 180,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "Using assert",
    type: "two-column",
    content: {
      left: {
        title: "assert Statement",
        items: [
          "Built into Python",
          "Checks a condition",
          "Raises error if false",
          "Simple testing tool",
        ],
      },
      right: {
        title: "When to Use It",
        items: [
          "Quick sanity checks",
          "Learning phase",
          "Simple scripts",
          "Not for production testing",
        ],
      },
    },
  },

  {
    id: 181,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "assert Example",
    type: "code-plus",
    content: {
      title: "Basic Assertion",
      points: [
        "Expression must be True",
        "Failure stops execution",
        "Useful for validation",
      ],
      code: `def add(a, b):
    return a + b

assert add(2, 3) == 5`,
      note: "If the assertion fails, Python raises an AssertionError.",
    },
  },

  {
    id: 182,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "Introduction to pytest",
    type: "two-column",
    content: {
      left: {
        title: "pytest Explained",
        items: [
          "Popular Python testing framework",
          "Simple syntax",
          "Powerful features",
          "Widely used in industry",
        ],
      },
      right: {
        title: "Why pytest",
        items: [
          "Readable tests",
          "Automatic test discovery",
          "Detailed error output",
          "Scales well",
        ],
      },
    },
  },

  {
    id: 183,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "Writing a pytest Test",
    type: "code-plus",
    content: {
      title: "Basic pytest Example",
      points: [
        "Test files start with test_",
        "Use plain assert",
        "pytest runs all tests automatically",
      ],
      code: `def add(a, b):
    return a + b

def test_add():
    assert add(2, 3) == 5`,
      note: "pytest discovers and runs this test automatically.",
    },
  },

  {
    id: 184,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "Running Tests",
    type: "two-column",
    content: {
      left: {
        title: "How to Run Tests",
        items: [
          "Run pytest in terminal",
          "All tests executed",
          "Results shown clearly",
          "Failures highlighted",
        ],
      },
      right: {
        title: "What You Learn",
        items: [
          "Which test failed",
          "Why it failed",
          "Expected vs actual",
          "Stack trace",
        ],
      },
    },
  },

  {
    id: 185,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Not writing tests early",
          "Testing too much at once",
          "Ignoring failing tests",
          "Hardcoding values",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Test small units",
          "Write tests alongside code",
          "Fix failures immediately",
          "Keep tests simple",
        ],
      },
    },
  },

  {
    id: 186,
    moduleId: 16,
    moduleTitle: "Testing Basics",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Working with APIs",
          "HTTP requests",
          "External data",
          "Real-world integration",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand testing purpose",
          "You can write basic tests",
          "You know pytest basics",
          "Ready for APIs",
        ],
      },
    },
  },
  // =========================
  // Python Module 17: Working with APIs (HTTP & External Data)
  // =========================

  {
    id: 187,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "Why APIs Matter",
    type: "two-column",
    content: {
      left: {
        title: "Modern Software Reality",
        items: [
          "Applications communicate over the internet",
          "Data often lives on remote servers",
          "Programs rarely work in isolation",
          "Integration is everywhere",
        ],
      },
      right: {
        title: "What APIs Enable",
        items: [
          "Access external data",
          "Connect services together",
          "Build real-world applications",
          "Automate interactions",
        ],
      },
    },
  },

  {
    id: 188,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "What Is an API?",
    type: "two-column",
    content: {
      left: {
        title: "API Explained",
        items: [
          "Application Programming Interface",
          "Defines how software communicates",
          "Exposes data and functionality",
          "Acts as a contract",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "Client makes a request",
          "Server processes request",
          "Response is returned",
          "Usually in JSON format",
        ],
      },
    },
  },

  {
    id: 189,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "HTTP Basics",
    type: "two-column",
    content: {
      left: {
        title: "HTTP Explained",
        items: [
          "Protocol for web communication",
          "Request–response model",
          "Stateless by design",
          "Foundation of APIs",
        ],
      },
      right: {
        title: "Common HTTP Methods",
        items: [
          "GET → fetch data",
          "POST → send data",
          "PUT → update data",
          "DELETE → remove data",
        ],
      },
    },
  },

  {
    id: 190,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "API Requests with requests",
    type: "two-column",
    content: {
      left: {
        title: "requests Library",
        items: [
          "Popular HTTP client for Python",
          "Simple and readable syntax",
          "Handles headers and JSON",
          "Industry standard",
        ],
      },
      right: {
        title: "What It Simplifies",
        items: [
          "URL requests",
          "Status codes",
          "Response parsing",
          "Error handling",
        ],
      },
    },
  },

  {
    id: 191,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "GET Request Example",
    type: "code-plus",
    content: {
      title: "Fetching Data from an API",
      points: [
        "requests.get sends GET request",
        "Response contains status and data",
        "json() parses JSON body",
      ],
      code: `import requests

response = requests.get("https://api.example.com/data")

if response.status_code == 200:
    data = response.json()
    print(data)`,
      note: "This fetches and parses data from an external API.",
    },
  },

  {
    id: 192,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "Handling API Errors",
    type: "two-column",
    content: {
      left: {
        title: "What Can Go Wrong",
        items: [
          "Network issues",
          "Invalid endpoints",
          "Authentication failures",
          "Server errors",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Check status codes",
          "Handle exceptions",
          "Fail gracefully",
          "Log errors",
        ],
      },
    },
  },

  {
    id: 193,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "Error Handling Example",
    type: "code-plus",
    content: {
      title: "Robust API Calls",
      points: ["Use try / except", "Check response status", "Avoid crashes"],
      code: `import requests

try:
    response = requests.get("https://api.example.com/data")
    response.raise_for_status()
    print(response.json())
except requests.exceptions.RequestException as e:
    print("API error:", e)`,
      note: "This handles network and HTTP-related errors safely.",
    },
  },

  {
    id: 194,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "Sending Data with POST",
    type: "two-column",
    content: {
      left: {
        title: "POST Requests",
        items: [
          "Send data to server",
          "Often used to create records",
          "Payload usually JSON",
          "Requires correct headers",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Form submissions",
          "User registration",
          "Data creation",
          "Webhook calls",
        ],
      },
    },
  },

  {
    id: 195,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "POST Request Example",
    type: "code-plus",
    content: {
      title: "Sending JSON Data",
      points: [
        "Use json parameter",
        "requests sets headers automatically",
        "Check response",
      ],
      code: `import requests

payload = {"name": "Alice", "age": 30}

response = requests.post(
    "https://api.example.com/users",
    json=payload
)

print(response.status_code)`,
      note: "POST requests send structured data to APIs.",
    },
  },

  {
    id: 196,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Ignoring status codes",
          "Hardcoding API keys",
          "Not handling timeouts",
          "Assuming API always works",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always validate responses",
          "Use environment variables",
          "Add error handling",
          "Read API documentation",
        ],
      },
    },
  },

  {
    id: 197,
    moduleId: 17,
    moduleTitle: "Working with APIs",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Capstone project",
          "End-to-end application",
          "Apply everything learned",
          "Professional workflow",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You can consume APIs",
          "You understand HTTP basics",
          "You can handle API errors",
          "Ready for a full project",
        ],
      },
    },
  },
  // =========================
  // Python Module 18: Capstone Project (End-to-End Application)
  // =========================

  {
    id: 198,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Purpose of the Capstone Project",
    type: "two-column",
    content: {
      left: {
        title: "Why a Capstone?",
        items: [
          "Apply everything learned",
          "Build a complete program",
          "Experience real-world workflow",
          "Gain confidence as a developer",
        ],
      },
      right: {
        title: "What You Will Practice",
        items: [
          "Problem breakdown",
          "Program design",
          "Clean code structure",
          "Debugging and testing",
        ],
      },
    },
  },

  {
    id: 199,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Project Overview",
    type: "two-column",
    content: {
      left: {
        title: "Project Description",
        items: [
          "Build a command-line application",
          "Interact with users",
          "Store and retrieve data",
          "Handle errors gracefully",
        ],
      },
      right: {
        title: "Example Project Ideas",
        items: [
          "Student record system",
          "Expense tracker",
          "Task manager",
          "Simple API consumer",
        ],
      },
    },
  },

  {
    id: 200,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Project Requirements",
    type: "two-column",
    content: {
      left: {
        title: "Core Requirements",
        items: [
          "Use functions for logic",
          "Use lists or dictionaries",
          "Include file persistence",
          "Handle user input safely",
        ],
      },
      right: {
        title: "Advanced Requirements",
        items: [
          "Use modules",
          "Apply error handling",
          "Write basic tests",
          "Use a virtual environment",
        ],
      },
    },
  },

  {
    id: 201,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Planning the Application",
    type: "two-column",
    content: {
      left: {
        title: "Before Writing Code",
        items: [
          "Define the problem clearly",
          "List features",
          "Sketch program flow",
          "Identify data structures",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Start small",
          "Build incrementally",
          "Test each feature",
          "Refactor often",
        ],
      },
    },
  },

  {
    id: 202,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Suggested Project Structure",
    type: "two-column",
    content: {
      left: {
        title: "Typical Layout",
        items: [
          "main.py for entry point",
          "modules for logic",
          "data files for storage",
          "tests folder",
        ],
      },
      right: {
        title: "Why Structure Matters",
        items: [
          "Easier navigation",
          "Scalable design",
          "Cleaner separation",
          "Professional appearance",
        ],
      },
    },
  },

  {
    id: 203,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "User Interaction Design",
    type: "two-column",
    content: {
      left: {
        title: "CLI Interaction",
        items: [
          "Clear prompts",
          "Readable output",
          "Simple menus",
          "Input validation",
        ],
      },
      right: {
        title: "User Experience",
        items: [
          "Helpful messages",
          "Graceful failures",
          "Logical flow",
          "Consistent behavior",
        ],
      },
    },
  },

  {
    id: 204,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Testing the Project",
    type: "two-column",
    content: {
      left: {
        title: "What to Test",
        items: [
          "Core logic functions",
          "Edge cases",
          "Error handling paths",
          "Expected outputs",
        ],
      },
      right: {
        title: "Testing Approach",
        items: [
          "Use pytest",
          "Test small units",
          "Automate tests",
          "Fix failures early",
        ],
      },
    },
  },

  {
    id: 205,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "Common Capstone Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Trying to build too much",
          "Skipping planning",
          "Hardcoding values",
          "Ignoring errors",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Limit scope",
          "Plan before coding",
          "Reuse functions",
          "Test frequently",
        ],
      },
    },
  },

  {
    id: 206,
    moduleId: 18,
    moduleTitle: "Capstone Project",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "After the Capstone",
        items: [
          "Refine your project",
          "Add features gradually",
          "Share your work",
          "Build more projects",
        ],
      },
      right: {
        title: "Your Achievement",
        items: [
          "You built a full Python program",
          "You applied core concepts",
          "You followed best practices",
          "You are ready to move forward",
        ],
      },
    },
  },
  // =========================
  // Python Module 19: Career Paths & Next Steps
  // =========================

  {
    id: 207,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "What You Have Achieved",
    type: "two-column",
    content: {
      left: {
        title: "Technical Skills Gained",
        items: [
          "Python fundamentals",
          "Data structures and algorithms",
          "File handling and APIs",
          "Testing and tooling",
        ],
      },
      right: {
        title: "Professional Readiness",
        items: [
          "Structured problem solving",
          "Readable and maintainable code",
          "Debugging confidence",
          "Project-based experience",
        ],
      },
    },
  },

  {
    id: 208,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "Python Career Paths",
    type: "two-column",
    content: {
      left: {
        title: "Common Career Tracks",
        items: [
          "Backend developer",
          "Data analyst",
          "Machine learning engineer",
          "Automation / scripting engineer",
        ],
      },
      right: {
        title: "Where Python Is Used",
        items: [
          "Web services",
          "Healthcare and finance",
          "AI and data science",
          "DevOps and tooling",
        ],
      },
    },
  },

  {
    id: 209,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "Choosing a Specialization",
    type: "two-column",
    content: {
      left: {
        title: "How to Decide",
        items: [
          "Interest and curiosity",
          "Industry demand",
          "Existing background",
          "Long-term goals",
        ],
      },
      right: {
        title: "Beginner Guidance",
        items: [
          "Start broad",
          "Explore small projects",
          "Avoid rushing specialization",
          "Follow real problems",
        ],
      },
    },
  },

  {
    id: 210,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "Recommended Next Learning Paths",
    type: "two-column",
    content: {
      left: {
        title: "Backend & Web",
        items: [
          "Flask or Django",
          "REST API design",
          "Databases (PostgreSQL)",
          "Authentication basics",
        ],
      },
      right: {
        title: "Data & AI",
        items: [
          "NumPy and pandas",
          "Data visualization",
          "Machine learning basics",
          "Model evaluation",
        ],
      },
    },
  },

  {
    id: 211,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "Building a Portfolio",
    type: "two-column",
    content: {
      left: {
        title: "What to Include",
        items: [
          "Small focused projects",
          "One larger capstone",
          "Clean README files",
          "Clear problem statements",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Show your thinking",
          "Write readable code",
          "Use version control",
          "Demonstrate testing",
        ],
      },
    },
  },

  {
    id: 212,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "Learning Habits That Matter",
    type: "two-column",
    content: {
      left: {
        title: "Effective Habits",
        items: [
          "Consistent practice",
          "Building real projects",
          "Reading others’ code",
          "Debugging intentionally",
        ],
      },
      right: {
        title: "What to Avoid",
        items: [
          "Tutorial addiction",
          "Skipping fundamentals",
          "Copy-paste learning",
          "Fear of making mistakes",
        ],
      },
    },
  },

  {
    id: 213,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "Professional Tools to Learn Next",
    type: "two-column",
    content: {
      left: {
        title: "Core Tools",
        items: [
          "Git and GitHub",
          "Linux basics",
          "Command-line proficiency",
          "Code editors and debuggers",
        ],
      },
      right: {
        title: "Why They Matter",
        items: [
          "Team collaboration",
          "Production readiness",
          "Industry alignment",
          "Career mobility",
        ],
      },
    },
  },

  {
    id: 214,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "Final Advice",
    type: "two-column",
    content: {
      left: {
        title: "Mindset",
        items: [
          "Programming is a skill",
          "Skill improves with practice",
          "Confusion is part of learning",
          "Progress beats perfection",
        ],
      },
      right: {
        title: "Your Next Step",
        items: [
          "Pick a direction",
          "Build consistently",
          "Seek feedback",
          "Keep learning",
        ],
      },
    },
  },


  // =========================
  // Additional Python Code Examples (to deepen practice)
  // =========================

  {
    id: 215,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "Trying Python in the REPL",
    type: "code-plus",
    content: {
      title: "Quick Interactive Test",
      points: [
        "Type code and see instant output",
        "Great for learning syntax",
        "Safe place to experiment",
      ],
      code: `>>> 2 + 2
4
>>> print("Hello, Python!")
Hello, Python!`,
      note: "The Python REPL is a fast way to practice small ideas.",
    },
  },

  {
    id: 216,
    moduleId: 1,
    moduleTitle: "Introduction to Programming & Python",
    title: "A First Error Example",
    type: "code-plus",
    content: {
      title: "Understanding Syntax Errors",
      points: [
        "Errors show what went wrong",
        "Read the line number",
        "Fix one issue at a time",
      ],
      code: `print("Hello"
print("World")`,
      note: "Missing parentheses cause a syntax error. The message points to the line.",
    },
  },

  {
    id: 217,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "Boolean Expressions",
    type: "code-plus",
    content: {
      title: "Conditions in Action",
      points: [
        "Comparisons return True/False",
        "Use booleans in if statements",
        "Keep conditions readable",
      ],
      code: `temperature = 30

print(temperature > 25)
print(temperature <= 20)`,
      note: "These boolean results can control which code runs.",
    },
  },

  {
    id: 218,
    moduleId: 4,
    moduleTitle: "Control Flow (if / elif / else)",
    title: "Nested if Example",
    type: "code-plus",
    content: {
      title: "Checking Multiple Conditions",
      points: [
        "Nested checks are possible",
        "Keep nesting shallow",
        "Prefer clarity",
      ],
      code: `age = 20
member = True

if age >= 18:
    if member:
        print("Discount applied")
    else:
        print("Join to get a discount")`,
      note: "Nested ifs are valid, but readability matters.",
    },
  },

  {
    id: 219,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Basic try / except",
    type: "code-plus",
    content: {
      title: "Handling Errors Safely",
      points: [
        "Protect risky code",
        "Prevent crashes",
        "Handle exceptions gracefully",
      ],
      code: `try:
    number = int("abc")
except ValueError:
    print("That was not a number")`,
      note: "ValueError happens when conversion fails.",
    },
  },

  {
    id: 220,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Catching Specific Errors",
    type: "code-plus",
    content: {
      title: "Be Precise",
      points: [
        "Catch only what you expect",
        "Avoid hiding other bugs",
        "Improve debugging",
      ],
      code: `try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")`,
      note: "Catching specific errors is safer than catching all.",
    },
  },

  {
    id: 221,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "else and finally",
    type: "code-plus",
    content: {
      title: "Complete Error Flow",
      points: [
        "else runs if no error",
        "finally always runs",
        "Good for cleanup",
      ],
      code: `try:
    value = int("42")
except ValueError:
    print("Bad input")
else:
    print("Parsed:", value)
finally:
    print("Done")`,
      note: "Use finally for closing files or cleaning resources.",
    },
  },

  {
    id: 222,
    moduleId: 11,
    moduleTitle: "Errors & Exceptions",
    title: "Raising Your Own Errors",
    type: "code-plus",
    content: {
      title: "Custom Validation",
      points: [
        "raise stops execution",
        "Use for invalid states",
        "Explain the issue",
      ],
      code: `age = -1

if age < 0:
    raise ValueError("Age cannot be negative")`,
      note: "Raising errors early makes bugs easier to find.",
    },
  },

  {
    id: 223,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Factorial (Recursive)",
    type: "code-plus",
    content: {
      title: "Classic Recursion Example",
      points: [
        "Base case stops recursion",
        "Each call reduces n",
        "Returns a value",
      ],
      code: `def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))`,
      note: "Factorial is a standard recursion problem.",
    },
  },

  {
    id: 224,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Fibonacci (Recursive)",
    type: "code-plus",
    content: {
      title: "Small Inputs Only",
      points: [
        "Two recursive calls",
        "Base case required",
        "Slow for large n",
      ],
      code: `def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(6))`,
      note: "Recursive Fibonacci is simple but inefficient for big inputs.",
    },
  },

  {
    id: 225,
    moduleId: 12,
    moduleTitle: "Recursion & the Call Stack",
    title: "Tracing Recursive Calls",
    type: "code-plus",
    content: {
      title: "See the Stack",
      points: [
        "Print before recursion",
        "Print after recursion",
        "Understand call order",
      ],
      code: `def countdown(n):
    if n == 0:
        print("Done")
        return
    print("Calling:", n)
    countdown(n - 1)
    print("Returning:", n)

countdown(3)`,
      note: "This shows how the stack grows and unwinds.",
    },
  },

  {
    id: 226,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "Importing a Module",
    type: "code-plus",
    content: {
      title: "Using Standard Library",
      points: [
        "import brings in a module",
        "Access functions with dot",
        "Standard library is powerful",
      ],
      code: `import math

print(math.sqrt(16))
print(math.pi)`,
      note: "Python ships with many built-in modules.",
    },
  },

  {
    id: 227,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "from ... import",
    type: "code-plus",
    content: {
      title: "Selective Imports",
      points: [
        "Import only what you need",
        "Cleaner names",
        "Avoid namespace clutter",
      ],
      code: `from datetime import datetime

print(datetime.now())`,
      note: "Selective imports make code shorter and clearer.",
    },
  },

  {
    id: 228,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "Creating Your Own Module",
    type: "code-plus",
    content: {
      title: "Two-File Example",
      points: [
        "Save functions in a .py file",
        "Import them elsewhere",
        "Reuse your code",
      ],
      code: `# helpers.py
def add(a, b):
    return a + b

# main.py
from helpers import add

print(add(2, 3))`,
      note: "Split code into modules to keep projects organized.",
    },
  },

  {
    id: 229,
    moduleId: 13,
    moduleTitle: "Modules & Packages",
    title: "__name__ == \"__main__\"",
    type: "code-plus",
    content: {
      title: "Run or Import",
      points: [
        "Run code only when executed",
        "Avoid auto-running on import",
        "Standard Python pattern",
      ],
      code: `def main():
    print("App running")

if __name__ == "__main__":
    main()`,
      note: "This block runs only when the file is executed directly.",
    },
  },

  {
    id: 230,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Creating a Class",
    type: "code-plus",
    content: {
      title: "Class + __init__",
      points: [
        "Classes define blueprints",
        "__init__ sets up data",
        "self refers to the object",
      ],
      code: `class Student:
    def __init__(self, name):
        self.name = name

student = Student("Ada")
print(student.name)`,
      note: "Classes bundle data and behavior together.",
    },
  },

  {
    id: 231,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Adding Methods",
    type: "code-plus",
    content: {
      title: "Behavior in Classes",
      points: [
        "Methods define actions",
        "Use self to access data",
        "Keep methods focused",
      ],
      code: `class Student:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, {self.name}"

student = Student("Ada")
print(student.greet())`,
      note: "Methods let objects perform actions.",
    },
  },

  {
    id: 232,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "Inheritance",
    type: "code-plus",
    content: {
      title: "Reusing Behavior",
      points: [
        "Child classes extend parent",
        "Inherit methods and data",
        "Override when needed",
      ],
      code: `class Animal:
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):
        return "Woof"

print(Dog().speak())`,
      note: "Inheritance helps avoid duplicated logic.",
    },
  },

  {
    id: 233,
    moduleId: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    title: "__str__ for Friendly Output",
    type: "code-plus",
    content: {
      title: "Readable Objects",
      points: [
        "__str__ controls print output",
        "Improve debugging",
        "Make objects human-friendly",
      ],
      code: `class Book:
    def __init__(self, title):
        self.title = title

    def __str__(self):
        return f"Book: {self.title}"

print(Book("Python"))`,
      note: "__str__ makes printed objects easier to read.",
    },
  },

  {
    id: 234,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "Creating a Virtual Environment",
    type: "code-plus",
    content: {
      title: "venv Commands",
      points: [
        "Isolate dependencies",
        "Keep projects clean",
        "Recommended for every project",
      ],
      code: `python -m venv .venv
source .venv/bin/activate
# Windows: .venv\Scripts\activate`,
      note: "Use a virtual environment to avoid dependency conflicts.",
    },
  },

  {
    id: 235,
    moduleId: 15,
    moduleTitle: "Virtual Environments & Tooling",
    title: "Freezing Dependencies",
    type: "code-plus",
    content: {
      title: "requirements.txt",
      points: [
        "Capture exact versions",
        "Share with teammates",
        "Recreate environments",
      ],
      code: `pip freeze > requirements.txt

pip install -r requirements.txt`,
      note: "Keep dependencies consistent across machines.",
    },
  },

  {
    id: 236,
    moduleId: 16,
    moduleTitle: "Testing Basics (Writing Reliable Code)",
    title: "Simple assert",
    type: "code-plus",
    content: {
      title: "Quick Sanity Check",
      points: [
        "assert verifies expectations",
        "Great for quick checks",
        "Raises error if false",
      ],
      code: `def add(a, b):
    return a + b

assert add(2, 3) == 5`,
      note: "Assertions are the simplest testing tool.",
    },
  },

  {
    id: 237,
    moduleId: 16,
    moduleTitle: "Testing Basics (Writing Reliable Code)",
    title: "pytest Example",
    type: "code-plus",
    content: {
      title: "A Real Test File",
      points: [
        "pytest auto-discovers tests",
        "Use simple function tests",
        "Readable and clean",
      ],
      code: `def add(a, b):
    return a + b


def test_add():
    assert add(2, 3) == 5`,
      note: "pytest is a popular testing tool in Python.",
    },
  },

  {
    id: 238,
    moduleId: 16,
    moduleTitle: "Testing Basics (Writing Reliable Code)",
    title: "Testing Exceptions",
    type: "code-plus",
    content: {
      title: "Expecting Errors",
      points: [
        "Test error cases",
        "Ensure proper exceptions",
        "Build reliable code",
      ],
      code: `import pytest


def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b


def test_divide_zero():
    with pytest.raises(ValueError):
        divide(10, 0)`,
      note: "Testing failures is just as important as testing success.",
    },
  },

  {
    id: 239,
    moduleId: 16,
    moduleTitle: "Testing Basics (Writing Reliable Code)",
    title: "Testing Edge Cases",
    type: "code-plus",
    content: {
      title: "Small Inputs",
      points: [
        "Test empty values",
        "Test boundaries",
        "Prevent hidden bugs",
      ],
      code: `def average(nums):
    if not nums:
        return 0
    return sum(nums) / len(nums)


def test_average_empty():
    assert average([]) == 0`,
      note: "Edge cases often reveal the toughest bugs.",
    },
  },

  {
    id: 240,
    moduleId: 17,
    moduleTitle: "Working with APIs (HTTP & External Data)",
    title: "Basic GET Request",
    type: "code-plus",
    content: {
      title: "Using requests",
      points: [
        "GET data from an API",
        "Check status codes",
        "Handle errors",
      ],
      code: `import requests

response = requests.get("https://api.example.com/data")
print(response.status_code)`,
      note: "requests is a common library for HTTP calls.",
    },
  },

  {
    id: 241,
    moduleId: 17,
    moduleTitle: "Working with APIs (HTTP & External Data)",
    title: "Parsing JSON",
    type: "code-plus",
    content: {
      title: "Read API Data",
      points: [
        "Use .json()",
        "Access keys like a dict",
        "Handle missing fields",
      ],
      code: `data = response.json()
print(data["name"])`,
      note: "Most APIs return JSON data.",
    },
  },

  {
    id: 242,
    moduleId: 17,
    moduleTitle: "Working with APIs (HTTP & External Data)",
    title: "Query Parameters",
    type: "code-plus",
    content: {
      title: "Filtering Results",
      points: [
        "Pass params as a dict",
        "APIs use query strings",
        "Make requests flexible",
      ],
      code: `params = {"limit": 5, "sort": "desc"}
response = requests.get("https://api.example.com/items", params=params)`,
      note: "Query params let you filter or paginate data.",
    },
  },

  {
    id: 243,
    moduleId: 17,
    moduleTitle: "Working with APIs (HTTP & External Data)",
    title: "Error Handling",
    type: "code-plus",
    content: {
      title: "Check for Failures",
      points: [
        "Use raise_for_status()",
        "Handle network errors",
        "Keep APIs resilient",
      ],
      code: `try:
    response = requests.get("https://api.example.com/data", timeout=5)
    response.raise_for_status()
except requests.RequestException as error:
    print("Request failed:", error)`,
      note: "Always handle network errors in real apps.",
    },
  },

  {
    id: 244,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Project Structure",
    type: "code-plus",
    content: {
      title: "Basic Layout",
      points: [
        "Keep files organized",
        "Separate concerns",
        "Scale the project easily",
      ],
      code: `project/
  main.py
  data.py
  utils.py
  requirements.txt`,
      note: "A clean structure makes the project easier to grow.",
    },
  },

  {
    id: 245,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Core Data Model",
    type: "code-plus",
    content: {
      title: "Representing Data",
      points: [
        "Use dicts for records",
        "Keep keys consistent",
        "Build reusable helpers",
      ],
      code: `tasks = [
    {"title": "Learn Python", "done": False},
    {"title": "Build project", "done": False}
]`,
      note: "Simple data structures are perfect for an MVP.",
    },
  },

  {
    id: 246,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Main Menu Loop",
    type: "code-plus",
    content: {
      title: "User Interaction",
      points: [
        "Use a while loop",
        "Display options clearly",
        "Break when user exits",
      ],
      code: `while True:
    print("1) Add task  2) View  3) Exit")
    choice = input("Choose: ")
    if choice == "3":
        break`,
      note: "A loop keeps the app running until exit.",
    },
  },

  {
    id: 247,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Adding a Task",
    type: "code-plus",
    content: {
      title: "Create New Data",
      points: [
        "Collect input",
        "Append to list",
        "Keep data consistent",
      ],
      code: `title = input("Task title: ")
tasks.append({"title": title, "done": False})`,
      note: "Keep data structure consistent across the project.",
    },
  },

  {
    id: 248,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Marking Done",
    type: "code-plus",
    content: {
      title: "Update State",
      points: [
        "Select task by index",
        "Update a field",
        "Reflect progress",
      ],
      code: `index = int(input("Task number: "))
tasks[index]["done"] = True`,
      note: "Updating data drives app behavior.",
    },
  },

  {
    id: 249,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Display Tasks",
    type: "code-plus",
    content: {
      title: "Readable Output",
      points: [
        "Loop through data",
        "Show status",
        "Keep output clean",
      ],
      code: `for i, task in enumerate(tasks):
    status = "✓" if task["done"] else "✗"
    print(f"{i}. {task['title']} [{status}]")`,
      note: "Good output makes apps easier to use.",
    },
  },

  {
    id: 250,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Save to File",
    type: "code-plus",
    content: {
      title: "Persisting Data",
      points: [
        "Use JSON for storage",
        "Write to disk",
        "Load later",
      ],
      code: `import json

with open("tasks.json", "w") as f:
    json.dump(tasks, f)`,
      note: "Saving data keeps user progress.",
    },
  },

  {
    id: 251,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Load from File",
    type: "code-plus",
    content: {
      title: "Restoring State",
      points: [
        "Read saved JSON",
        "Handle missing file",
        "Continue where you left off",
      ],
      code: `import json

try:
    with open("tasks.json") as f:
        tasks = json.load(f)
except FileNotFoundError:
    tasks = []`,
      note: "Gracefully handle first-time users.",
    },
  },

  {
    id: 252,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Refactor into Functions",
    type: "code-plus",
    content: {
      title: "Keep Code Clean",
      points: [
        "Small functions are reusable",
        "Testable components",
        "Easier to debug",
      ],
      code: `def add_task(tasks):
    title = input("Task title: ")
    tasks.append({"title": title, "done": False})`,
      note: "Functions keep your project maintainable.",
    },
  },

  {
    id: 253,
    moduleId: 18,
    moduleTitle: "Capstone Project (End-to-End Application)",
    title: "Main Entry Point",
    type: "code-plus",
    content: {
      title: "Run the App",
      points: [
        "Use a main() function",
        "Call it under __main__",
        "Industry standard pattern",
      ],
      code: `def main():
    print("Welcome to Task Tracker")

if __name__ == "__main__":
    main()`,
      note: "This keeps your app clean and organized.",
    },
  },

  {
    id: 254,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "Build a Tiny Automation Script",
    type: "code-plus",
    content: {
      title: "Start Small",
      points: [
        "Automate a daily task",
        "Build confidence",
        "Create a portfolio artifact",
      ],
      code: `import datetime

print("Today is", datetime.date.today())`,
      note: "Small scripts prove you can build useful tools.",
    },
  },

  {
    id: 255,
    moduleId: 19,
    moduleTitle: "Career Paths & Next Steps",
    title: "Showcase Your Work",
    type: "code-plus",
    content: {
      title: "Create a GitHub README",
      points: [
        "Explain your project",
        "Add screenshots",
        "Share results",
      ],
      code: `# Task Tracker

A simple Python app to manage daily tasks.

## Features
- Add tasks
- Mark complete
- Save to file`,
      note: "Clear documentation helps your work stand out.",
    },
  },

];
