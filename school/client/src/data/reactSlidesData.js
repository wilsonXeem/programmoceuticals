export const reactSlidesData = [
  // =========================
  // React Module 1: Introduction to React & Component Thinking
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "What Is React?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "React Explained",
          items: [
          "A JavaScript library for building user interfaces",
          "Created and maintained by Meta",
          "Focuses on the view layer only",
          "Component-based architecture",
          ],
        },
        {
          title: "What React Is Not",
          items: [
          "Not a full framework",
          "Not a replacement for JavaScript",
          "Not only for large apps",
          "Not magic",
          ],
        },
      ],
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "Why React Exists",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problems Before React",
          items: [
          "Manual DOM manipulation",
          "Hard-to-maintain UI logic",
          "Tightly coupled code",
          "Poor scalability",
          ],
        },
        {
          title: "React’s Solution",
          items: [
          "Declarative UI",
          "Automatic UI updates",
          "Reusable components",
          "Predictable behavior",
          ],
        },
      ],
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "What Is a User Interface?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "UI Explained",
          items: [
          "What users see and interact with",
          "Buttons, text, forms, lists",
          "Visual representation of data",
          "Changes based on user actions",
          ],
        },
        {
          title: "UI Challenges",
          items: [
          "State changes frequently",
          "Many interactions",
          "Multiple screen states",
          "Hard to keep in sync",
          ],
        },
      ],
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "Thinking in Components",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Component Thinking",
          items: [
          "Break UI into small pieces",
          "Each piece has one responsibility",
          "Components can be reused",
          "Components can be nested",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "UI = tree of components",
          "Each component manages itself",
          "Data flows downward",
          "UI updates automatically",
          ],
        },
      ],
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "What Is a React Component?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Component Explained",
          items: [
          "A JavaScript function",
          "Returns UI description",
          "Can accept inputs (props)",
          "Reusable building block",
          ],
        },
        {
          title: "Why Components Matter",
          items: ["Encapsulation", "Reusability", "Readability", "Scalability"],
        },
      ],
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "Your First React Component",
    type: "code-plus",
    content: {
      title: "Basic Component Example",
      points: [
        "Component is a function",
        "Name starts with capital letter",
        "Returns JSX",
      ],
      code: `function Hello() {
  return <h1>Hello, React!</h1>;
}`,
      note: "This component returns a simple UI element.",
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "Declarative UI",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Declarative Approach",
          items: [
          "Describe what UI should look like",
          "React handles updates",
          "Less manual work",
          "Predictable results",
          ],
        },
        {
          title: "Imperative vs Declarative",
          items: [
          "Imperative: tell browser how",
          "Declarative: tell React what",
          "Cleaner logic",
          "Easier reasoning",
          ],
        },
      ],
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "How React Updates the UI",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Behind the Scenes",
          items: [
          "Virtual DOM",
          "Efficient diffing",
          "Minimal real DOM updates",
          "Performance optimized",
          ],
        },
        {
          title: "What You Need to Know",
          items: [
          "You don’t touch the DOM directly",
          "React decides updates",
          "UI stays in sync with data",
          "Focus on logic, not mechanics",
          ],
        },
      ],
    },
  },

  {
    id: 9,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "React in the Real World",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Used By",
          items: ["Facebook / Meta", "Instagram", "Netflix", "Airbnb"],
        },
        {
          title: "Why Companies Choose React",
          items: [
          "Scalable architecture",
          "Strong ecosystem",
          "Large community",
          "Long-term support",
          ],
        },
      ],
    },
  },

  {
    id: 10,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "Component Composition Example",
    type: "code-plus",
    content: {
      title: "UI as Components",
      points: [
        "Compose small components into a full UI",
        "Each component handles one concern",
        "Readable and reusable structure",
      ],
      code: `function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>My App</h1>;
}
`,
      note: "Composition is how React apps scale cleanly.",
    },
  },
  {
    id: 11,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "Props in Action",
    type: "code-plus",
    content: {
      title: "Reusable Components",
      points: [
        "Props customize behavior and content",
        "Same component, different output",
        "Data flows from parent to child",
      ],
      code: `function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

function App() {
  return (
    <div>
      <Greeting name="Ada" />
      <Greeting name="Linus" />
    </div>
  );
}
`,
      note: "Props are like function arguments for components.",
    },
  },
  {
    id: 12,
    moduleId: 1,
    moduleTitle: "Introduction to React & Component Thinking",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "JSX syntax",
          "Rendering elements",
          "Embedding expressions",
          "Understanding JSX rules",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You understand why React exists",
          "You think in components",
          "You wrote your first component",
          "Ready for JSX",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 2: JSX & Rendering
  // =========================

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "What Is JSX?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "JSX Explained",
          items: [
          "JSX is a syntax extension for JavaScript",
          "Looks like HTML but is not HTML",
          "Used to describe UI structure",
          "Compiled to JavaScript",
          ],
        },
        {
          title: "Why JSX Exists",
          items: [
          "UI and logic live together",
          "More readable components",
          "Less manual DOM code",
          "Clear intent",
          ],
        },
      ],
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "JSX Is JavaScript",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Important Reality",
          items: [
          "JSX runs inside JavaScript",
          "Can use variables",
          "Can use expressions",
          "Follows JS rules",
          ],
        },
        {
          title: "Mental Shift",
          items: [
          "Not template language",
          "Not string-based",
          "Real JS execution",
          "Powerful and flexible",
          ],
        },
      ],
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "Embedding Expressions in JSX",
    type: "infographic",
    content: {
      cards: [
        {
          title: "How It Works",
          items: [
          "Use curly braces {}",
          "Any JS expression allowed",
          "Evaluated at render time",
          "Keeps UI dynamic",
          ],
        },
        {
          title: "What You Can Embed",
          items: [
          "Variables",
          "Function calls",
          "Math operations",
          "Conditional expressions",
          ],
        },
      ],
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "JSX Expression Example",
    type: "code-plus",
    content: {
      title: "Using JavaScript Inside JSX",
      points: [
        "Curly braces inject values",
        "JS executes before render",
        "UI updates automatically",
      ],
      code: `function Welcome() {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
}`,
      note: "JSX allows JavaScript values to be rendered dynamically.",
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "JSX Rules You Must Know",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Rules",
          items: [
          "Must return one parent element",
          "Use className instead of class",
          "JS expressions only, not statements",
          "Self-close empty tags",
          ],
        },
        {
          title: "Why These Rules Exist",
          items: [
          "JSX compiles to JS objects",
          "Avoids ambiguity",
          "Keeps syntax predictable",
          "Prevents runtime errors",
          ],
        },
      ],
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "Single Root Element",
    type: "code-plus",
    content: {
      title: "Correct JSX Structure",
      points: [
        "Wrap elements in a parent",
        "Use div or fragment",
        "Avoid sibling roots",
      ],
      code: `function App() {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
}`,
      note: "JSX must return a single root element.",
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "Fragments",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Fragments Are",
          items: [
          "Invisible wrapper",
          "No extra DOM nodes",
          "Cleaner markup",
          "Used often",
          ],
        },
        {
          title: "Fragment Syntax",
          items: [
          "<></>",
          "<React.Fragment>",
          "Same behavior",
          "Choose based on clarity",
          ],
        },
      ],
    },
  },

  {
    id: 20,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "Fragment Example",
    type: "code-plus",
    content: {
      title: "Using Fragments",
      points: ["No wrapper div", "Cleaner DOM", "Same JSX rules apply"],
      code: `function App() {
  return (
    <>
      <h1>Title</h1>
      <p>Description</p>
    </>
  );
}`,
      note: "Fragments group elements without adding extra DOM nodes.",
    },
  },

  {
    id: 21,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "Rendering Components",
    type: "infographic",
    content: {
      cards: [
        {
          title: "How Rendering Works",
          items: [
          "Components return JSX",
          "React renders JSX to DOM",
          "UI reflects component output",
          "Re-renders on data change",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Rendering is automatic",
          "Driven by data",
          "Declarative process",
          "Predictable updates",
          ],
        },
      ],
    },
  },

  {
    id: 22,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Forgetting parent wrapper",
          "Using class instead of className",
          "Embedding statements in JSX",
          "Returning multiple roots",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Use fragments",
          "Remember JSX rules",
          "Keep expressions simple",
          "Read error messages",
          ],
        },
      ],
    },
  },

  {
    id: 23,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "JSX Conditional Rendering",
    type: "code-plus",
    content: {
      title: "Show/Hide UI",
      points: [
        "Use ternary or && to conditionally render",
        "Keep logic close to the UI",
        "Avoid if statements inside JSX",
      ],
      code: `function Status({ isOnline }) {
  return (
    <p>{isOnline ? 'Online' : 'Offline'}</p>
  );
}
`,
      note: "Ternaries are the most common JSX conditional pattern.",
    },
  },
  {
    id: 24,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "Rendering Lists in JSX",
    type: "code-plus",
    content: {
      title: "Map Data → UI",
      points: [
        "Use map to render arrays",
        "Add a stable key for each item",
        "Keys help React track changes",
      ],
      code: `const skills = ['JSX', 'Props', 'State'];

function SkillList() {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
`,
      note: "Keys should be stable and unique per item.",
    },
  },
  {
    id: 25,
    moduleId: 2,
    moduleTitle: "JSX & Rendering",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: ["Components", "Props", "Passing data", "Component reuse"],
        },
        {
          title: "Your Progress",
          items: [
          "You understand JSX",
          "You can embed JS in UI",
          "You know JSX rules",
          "Ready for props",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 3: Components & Props
  // =========================

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Why Components Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "UI Without Components",
          items: [
          "Large monolithic files",
          "Repeated UI logic",
          "Hard to reuse code",
          "Difficult to reason about",
          ],
        },
        {
          title: "UI With Components",
          items: [
          "Small reusable pieces",
          "Clear responsibilities",
          "Readable structure",
          "Scalable architecture",
          ],
        },
      ],
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Component Reusability",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Reuse Explained",
          items: [
          "Write once, use many times",
          "Same structure, different data",
          "Avoid duplication",
          "Consistent UI",
          ],
        },
        {
          title: "Real Examples",
          items: ["Buttons", "Cards", "Headers", "List items"],
        },
      ],
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "What Are Props?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Props Explained",
          items: [
          "Short for properties",
          "Inputs to a component",
          "Passed from parent to child",
          "Read-only",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Like function arguments",
          "Control component behavior",
          "Customize output",
          "Data flows downward",
          ],
        },
      ],
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Passing Props to a Component",
    type: "code-plus",
    content: {
      title: "Basic Props Usage",
      points: [
        "Props passed like HTML attributes",
        "Values can be strings or expressions",
        "Props are received as an object",
      ],
      code: `function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}`,
      note: "Props allow components to receive data from their parent.",
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Props Make Components Flexible",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Without Props",
          items: [
          "Hardcoded values",
          "Limited reuse",
          "Rigid components",
          "Not scalable",
          ],
        },
        {
          title: "With Props",
          items: [
          "Dynamic values",
          "Reusable components",
          "Configurable behavior",
          "Cleaner design",
          ],
        },
      ],
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Using Multiple Props",
    type: "code-plus",
    content: {
      title: "Passing Multiple Values",
      points: [
        "Multiple props allowed",
        "Accessed via props object",
        "Clear naming is important",
      ],
      code: `function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

<UserCard name="Bob" age={30} />`,
      note: "Components can receive multiple pieces of data via props.",
    },
  },

  {
    id: 32,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Destructuring Props",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Destructuring Does",
          items: [
          "Extract values from objects",
          "Cleaner syntax",
          "Less repetition",
          "Common React pattern",
          ],
        },
        {
          title: "Why It’s Preferred",
          items: [
          "Improves readability",
          "Reduces props.name repetition",
          "Cleaner components",
          "Professional style",
          ],
        },
      ],
    },
  },

  {
    id: 33,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Destructuring Example",
    type: "code-plus",
    content: {
      title: "Cleaner Props Access",
      points: [
        "Destructure in function parameters",
        "Direct variable access",
        "Same behavior",
      ],
      code: `function UserCard({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}`,
      note:
        "Destructuring makes component code cleaner and easier to read.",
    },
  },

  {
    id: 34,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Props Are Read-Only",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Important Rule",
          items: [
          "Props cannot be modified",
          "Owned by parent component",
          "Immutable inside child",
          "One-way data flow",
          ],
        },
        {
          title: "Why This Rule Exists",
          items: [
          "Predictable UI updates",
          "Clear data ownership",
          "Easier debugging",
          "Consistent behavior",
          ],
        },
      ],
    },
  },

  {
    id: 35,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Trying to change props",
          "Passing too many props",
          "Unclear prop names",
          "Hardcoding values",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Use state for changes",
          "Keep props minimal",
          "Use descriptive names",
          "Refactor components early",
          ],
        },
      ],
    },
  },

  {
    id: 36,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Default Props Pattern",
    type: "code-plus",
    content: {
      title: "Safe Defaults",
      points: [
        "Use default parameters for props",
        "Avoid undefined UI",
        "Makes components more robust",
      ],
      code: `function Avatar({ size = 48 }) {
  return <img width={size} height={size} src="/user.png" />;
}
`,
      note: "Default values keep components predictable.",
    },
  },
  {
    id: 37,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "Children Prop Example",
    type: "code-plus",
    content: {
      title: "Component Slots",
      points: [
        "children lets you nest content",
        "Build flexible layout components",
        "Common for cards and sections",
      ],
      code: `function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h2>Welcome</h2>
      <p>This is inside the card.</p>
    </Card>
  );
}
`,
      note: "children is a prop that represents nested content.",
    },
  },
  {
    id: 38,
    moduleId: 3,
    moduleTitle: "Components & Props",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: ["State", "Handling events", "User interaction", "Dynamic UI"],
        },
        {
          title: "Your Progress",
          items: [
          "You understand components",
          "You can pass data with props",
          "You know one-way data flow",
          "Ready for state",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 4: State & Events
  // =========================

  {
    id: 39,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Why State Exists",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem",
          items: [
          "UI needs to change over time",
          "User interactions affect data",
          "Props are read-only",
          "Static UI is not useful",
          ],
        },
        {
          title: "State Solves This",
          items: [
          "Stores changing data",
          "Triggers UI updates",
          "Lives inside components",
          "Drives interactivity",
          ],
        },
      ],
    },
  },

  {
    id: 40,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "What Is State?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "State Explained",
          items: [
          "Component-owned data",
          "Can change over time",
          "Causes re-render on update",
          "Private to component",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Like variables for UI",
          "Represents current situation",
          "UI is a function of state",
          "State → UI",
          ],
        },
      ],
    },
  },

  {
    id: 41,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Introducing useState",
    type: "infographic",
    content: {
      cards: [
        {
          title: "useState Hook",
          items: [
          "Built-in React Hook",
          "Adds state to function components",
          "Returns value and updater",
          "Most common hook",
          ],
        },
        {
          title: "Hook Rules (Preview)",
          items: [
          "Call at top level",
          "Only inside components",
          "Same order every render",
          "Deterministic behavior",
          ],
        },
      ],
    },
  },

  {
    id: 42,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Basic useState Example",
    type: "code-plus",
    content: {
      title: "Counter State",
      points: [
        "useState returns array",
        "First value is state",
        "Second updates state",
      ],
      code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <p>Count: {count}</p>;
}`,
      note: "This component stores and displays state.",
    },
  },

  {
    id: 43,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Updating State",
    type: "infographic",
    content: {
      cards: [
        {
          title: "How Updates Work",
          items: [
          "Use updater function",
          "Never modify state directly",
          "Triggers re-render",
          "Async behavior",
          ],
        },
        {
          title: "Why Direct Mutation Fails",
          items: [
          "React can’t detect changes",
          "UI won’t update correctly",
          "Breaks predictability",
          "Causes bugs",
          ],
        },
      ],
    },
  },

  {
    id: 44,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Updating State Example",
    type: "code-plus",
    content: {
      title: "Incrementing State",
      points: [
        "Call setter to update",
        "New state value",
        "UI updates automatically",
      ],
      code: `function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}`,
      note: "State updates trigger automatic re-rendering.",
    },
  },

  {
    id: 45,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Handling Events",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Events in React",
          items: [
          "User interactions",
          "Click, change, submit",
          "CamelCase naming",
          "Pass functions, not calls",
          ],
        },
        {
          title: "Key Rule",
          items: [
          "onClick={handler}",
          "Not onClick={handler()}",
          "React controls event system",
          "Synthetic events",
          ],
        },
      ],
    },
  },

  {
    id: 46,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Event Handling Example",
    type: "code-plus",
    content: {
      title: "Button Click",
      points: [
        "Function reference passed",
        "Event triggers update",
        "Clean separation",
      ],
      code: `function AlertButton() {
  function handleClick() {
    alert("Button clicked");
  }

  return <button onClick={handleClick}>Click me</button>;
}`,
      note: "Events trigger logic without immediate execution.",
    },
  },

  {
    id: 47,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "State Updates Are Asynchronous",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Important Behavior",
          items: [
          "State updates may be batched",
          "Value not updated immediately",
          "Multiple updates grouped",
          "Optimized for performance",
          ],
        },
        {
          title: "Correct Mental Model",
          items: [
          "Don’t rely on old state",
          "Use updater form when needed",
          "Trust React scheduling",
          "Predictable outcome",
          ],
        },
      ],
    },
  },

  {
    id: 48,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Functional State Update",
    type: "code-plus",
    content: {
      title: "Safe State Updates",
      points: [
        "Updater receives previous state",
        "Avoid stale values",
        "Recommended pattern",
      ],
      code: `setCount(prev => prev + 1);`,
      note: "This ensures correct updates even with batching.",
    },
  },

  {
    id: 49,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Mutating state directly",
          "Calling state setters immediately",
          "Storing derived data in state",
          "Too much state",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Always use setter",
          "Pass function references",
          "Compute derived values",
          "Keep state minimal",
          ],
        },
      ],
    },
  },

  {
    id: 50,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "useState with Objects",
    type: "code-plus",
    content: {
      title: "Update State Safely",
      points: [
        "Spread to copy old state",
        "Only update what changes",
        "Avoid direct mutation",
      ],
      code: `const [user, setUser] = useState({ name: 'Ada', age: 25 });

function updateAge() {
  setUser(prev => ({ ...prev, age: prev.age + 1 }));
}
`,
      note: "Always create a new object when updating state.",
    },
  },
  {
    id: 51,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Input Event Handling",
    type: "code-plus",
    content: {
      title: "Sync UI and State",
      points: [
        "Use onChange to track input",
        "State holds the current value",
        "UI re-renders automatically",
      ],
      code: `const [name, setName] = useState('');

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
`,
      note: "Controlled inputs are the React standard.",
    },
  },
  {
    id: 52,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "Functional State Update",
    type: "code-plus",
    content: {
      title: "Use Prev State",
      points: [
        "Safe when updates depend on previous state",
        "Prevents stale values",
        "Recommended for counters",
      ],
      code: `const [count, setCount] = useState(0);

function increment() {
  setCount(prev => prev + 1);
}
`,
      note: "Functional updates keep state changes reliable.",
    },
  },
  {
    id: 53,
    moduleId: 4,
    moduleTitle: "State & Events",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Conditional rendering",
          "Showing and hiding UI",
          "Dynamic layouts",
          "Control flow in JSX",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You understand state",
          "You handle events",
          "You build interactive UI",
          "Ready for conditions",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 5: Conditional Rendering
  // =========================

  {
    id: 54,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Why Conditional Rendering Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "UI Is Not Static",
          items: [
          "Users can be logged in or logged out",
          "Data may be loading or already loaded",
          "Errors can occur",
          "User actions change what is shown",
          ],
        },
        {
          title: "What Conditional Rendering Solves",
          items: [
          "Shows different UI states",
          "Responds to user actions",
          "Handles loading and errors",
          "Makes apps feel real",
          ],
        },
      ],
    },
  },

  {
    id: 55,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "What Is Conditional Rendering?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Concept Explained",
          items: [
          "Render UI based on conditions",
          "Uses JavaScript logic",
          "Driven by state or props",
          "Dynamic UI output",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "If condition is true → show UI",
          "If condition is false → hide or replace UI",
          "UI follows data",
          "Declarative control flow",
          ],
        },
      ],
    },
  },

  {
    id: 56,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Using if Statements",
    type: "infographic",
    content: {
      cards: [
        {
          title: "if Outside JSX",
          items: [
          "Use standard JavaScript if",
          "Decide what to return",
          "Very readable",
          "Best for complex logic",
          ],
        },
        {
          title: "Important Limitation",
          items: [
          "Cannot use if directly in JSX",
          "Logic must be above return",
          "Return chosen JSX",
          "Common beginner pattern",
          ],
        },
      ],
    },
  },

  {
    id: 57,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "if Statement Example",
    type: "code-plus",
    content: {
      title: "Conditional Return",
      points: [
        "Condition checked first",
        "Different JSX returned",
        "Clear control flow",
      ],
      code: `function Status({ isOnline }) {
  if (isOnline) {
    return <p>Online</p>;
  }

  return <p>Offline</p>;
}`,
      note:
        "The component returns different UI depending on the condition.",
    },
  },

  {
    id: 58,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Using the Ternary Operator",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Ternary Operator",
          items: [
          "Inline conditional expression",
          "condition ? A : B",
          "Allowed inside JSX",
          "Very common in React",
          ],
        },
        {
          title: "When to Use It",
          items: [
          "Simple conditions",
          "Short UI differences",
          "Readable expressions",
          "Avoid deep nesting",
          ],
        },
      ],
    },
  },

  {
    id: 59,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Ternary Operator Example",
    type: "code-plus",
    content: {
      title: "Inline Conditional Rendering",
      points: [
        "Expression inside JSX",
        "Compact and readable",
        "Good for simple UI switches",
      ],
      code: `function LoginStatus({ loggedIn }) {
  return (
    <h1>
      {loggedIn ? "Welcome back" : "Please log in"}
    </h1>
  );
}`,
      note: "The ternary operator allows inline conditional rendering.",
    },
  },

  {
    id: 60,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Using Logical AND (&&)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Logical AND Operator",
          items: [
          "Renders UI only when condition is true",
          "Uses short-circuit evaluation",
          "No else case",
          "Very concise",
          ],
        },
        {
          title: "Mental Rule",
          items: [
          "true && JSX → JSX renders",
          "false && JSX → nothing",
          "Best for optional UI",
          "Keep conditions simple",
          ],
        },
      ],
    },
  },

  {
    id: 61,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Logical AND Example",
    type: "code-plus",
    content: {
      title: "Optional UI Rendering",
      points: [
        "No else branch",
        "Condition controls rendering",
        "Clean and minimal",
      ],
      code: `function Message({ unread }) {
  return (
    <div>
      {unread > 0 && <p>You have new messages</p>}
    </div>
  );
}`,
      note: "The message only appears when the condition is true.",
    },
  },

  {
    id: 62,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Common Conditional Patterns",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Typical Scenarios",
          items: [
          "Loading vs content",
          "Error vs success",
          "Authenticated vs guest",
          "Empty list vs populated list",
          ],
        },
        {
          title: "Best Practices",
          items: [
          "Keep conditions readable",
          "Avoid nested ternaries",
          "Extract components when needed",
          "Favor clarity over cleverness",
          ],
        },
      ],
    },
  },

  {
    id: 63,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Using if directly inside JSX",
          "Over-nesting ternary operators",
          "Unreadable conditions",
          "Forgetting else cases",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Prepare logic before return",
          "Keep conditions simple",
          "Refactor complex UI",
          "Optimize for readability",
          ],
        },
      ],
    },
  },

  {
    id: 64,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Short-Circuit Rendering",
    type: "code-plus",
    content: {
      title: "Show When True",
      points: [
        "Use && to render conditionally",
        "Great for optional UI",
        "Keeps JSX concise",
      ],
      code: `function Alert({ message }) {
  return message && <div className="alert">{message}</div>;
}
`,
      note: "If message is empty, nothing renders.",
    },
  },
  {
    id: 65,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Conditional Rendering (Ternary)",
    type: "code-plus",
    content: {
      title: "Inline Decisions",
      points: [
        "Use ternary for simple branches",
        "Readable in JSX",
        "Great for small UI choices",
      ],
      code: `function Welcome({ loggedIn }) {
  return (
    <h2>{loggedIn ? 'Welcome back' : 'Please sign in'}</h2>
  );
}
`,
      note: "Ternary is the go-to for simple conditional UI.",
    },
  },
  {
    id: 66,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "Conditional Rendering (Guard)",
    type: "code-plus",
    content: {
      title: "Render Only When True",
      points: [
        "Use && for optional UI",
        "Short and clean",
        "Avoids unnecessary markup",
      ],
      code: `function Banner({ message }) {
  return message && <div className="banner">{message}</div>;
}
`,
      note: "If the condition is false, nothing renders.",
    },
  },
  {
    id: 67,
    moduleId: 5,
    moduleTitle: "Conditional Rendering",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Rendering lists",
          "Mapping over arrays",
          "Keys in React",
          "Dynamic collections",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You can control UI flow",
          "You handle multiple UI states",
          "You write dynamic JSX",
          "Ready for lists and keys",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 6: Lists, Keys & Rendering Patterns
  // =========================

  {
    id: 68,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Why Rendering Lists Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Real-World UI Reality",
          items: [
          "Most UIs display collections",
          "Data often comes as arrays",
          "Lists change over time",
          "Static markup is not enough",
          ],
        },
        {
          title: "What React Enables",
          items: [
          "Render dynamic collections",
          "Update lists efficiently",
          "Reuse list item components",
          "Keep UI in sync with data",
          ],
        },
      ],
    },
  },

  {
    id: 69,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Rendering Arrays in React",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "Arrays represent collections",
          "Each item maps to UI",
          "JavaScript drives rendering",
          "Declarative list creation",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Array in → UI out",
          "One item → one element",
          "Same structure repeated",
          "Data controls output",
          ],
        },
      ],
    },
  },

  {
    id: 70,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Using map() to Render Lists",
    type: "infographic",
    content: {
      cards: [
        {
          title: "map() Explained",
          items: [
          "Transforms arrays",
          "Returns a new array",
          "Perfect for JSX rendering",
          "Most common React pattern",
          ],
        },
        {
          title: "Why map() Is Preferred",
          items: [
          "Clean and readable",
          "Functional approach",
          "Avoids manual loops",
          "Predictable output",
          ],
        },
      ],
    },
  },

  {
    id: 71,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "map() Rendering Example",
    type: "code-plus",
    content: {
      title: "Rendering a List of Items",
      points: [
        "Use map inside JSX",
        "Each item returns JSX",
        "Array drives UI",
      ],
      code: `function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li>{user}</li>
      ))}
    </ul>
  );
}`,
      note: "Each array item is transformed into a list element.",
    },
  },

  {
    id: 72,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "The Key Prop",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Is a Key?",
          items: [
          "Special prop for lists",
          "Helps React identify items",
          "Must be unique",
          "Used internally by React",
          ],
        },
        {
          title: "Why Keys Matter",
          items: [
          "Efficient updates",
          "Correct re-rendering",
          "Preserves component state",
          "Avoids UI bugs",
          ],
        },
      ],
    },
  },

  {
    id: 73,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Key Usage Example",
    type: "code-plus",
    content: {
      title: "Adding Keys to List Items",
      points: [
        "Key goes on outer element",
        "Should be stable",
        "Should be unique",
      ],
      code: `function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
      note: "Keys help React track list items across renders.",
    },
  },

  {
    id: 74,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Why Not Use Array Index as Key?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Temptation",
          items: [
          "Easy to access index",
          "Works for static lists",
          "Looks harmless",
          "Common beginner choice",
          ],
        },
        {
          title: "The Problem",
          items: [
          "Breaks when list changes",
          "Causes incorrect re-renders",
          "State bugs appear",
          "Hard to debug",
          ],
        },
      ],
    },
  },

  {
    id: 75,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Rendering Components in Lists",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Best Practice",
          items: [
          "Extract list item component",
          "Keep list logic clean",
          "Improve readability",
          "Encourage reuse",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Parent maps data",
          "Child renders item",
          "Key stays at top level",
          "Separation of concerns",
          ],
        },
      ],
    },
  },

  {
    id: 76,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Component List Example",
    type: "code-plus",
    content: {
      title: "Rendering Components from Arrays",
      points: [
        "Component per item",
        "Key on component",
        "Cleaner structure",
      ],
      code: `function UserItem({ user }) {
  return <li>{user.name}</li>;
}

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}`,
      note: "Separating list items into components improves clarity.",
    },
  },

  {
    id: 77,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Forgetting the key prop",
          "Using index as key incorrectly",
          "Complex logic inside map",
          "Rendering too much in one component",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Always include stable keys",
          "Prefer IDs",
          "Extract components",
          "Keep map callbacks simple",
          ],
        },
      ],
    },
  },

  {
    id: 78,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Keys Done Right",
    type: "code-plus",
    content: {
      title: "Stable Keys",
      points: [
        "Use IDs from your data",
        "Avoid index when order can change",
        "Prevents UI bugs",
      ],
      code: `const todos = [
  { id: 'a1', text: 'Learn JSX' },
  { id: 'b2', text: 'Build a component' },
];

<ul>
  {todos.map(todo => (
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
`,
      note: "Stable keys help React keep items in sync.",
    },
  },
  {
    id: 79,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Filtering Lists",
    type: "code-plus",
    content: {
      title: "Render a Subset",
      points: [
        "Filter data before map",
        "Keep JSX clean",
        "Common in search UIs",
      ],
      code: `const items = [
  { id: 1, name: 'Apple', inStock: true },
  { id: 2, name: 'Banana', inStock: false },
];

function List() {
  return items
    .filter(item => item.inStock)
    .map(item => <div key={item.id}>{item.name}</div>);
}
`,
      note: "Filtering before rendering keeps JSX readable.",
    },
  },
  {
    id: 80,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Forms and inputs",
          "Handling user input",
          "Controlled components",
          "Two-way interaction",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You can render dynamic lists",
          "You understand keys",
          "You use map correctly",
          "Ready for forms",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 6: Lists, Keys & Rendering Patterns
  // =========================

  {
    id: 81,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Why Rendering Lists Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Real-World UI Reality",
          items: [
          "Most UIs display collections",
          "Data often comes as arrays",
          "Lists change over time",
          "Static markup is not enough",
          ],
        },
        {
          title: "What React Enables",
          items: [
          "Render dynamic collections",
          "Update lists efficiently",
          "Reuse list item components",
          "Keep UI in sync with data",
          ],
        },
      ],
    },
  },

  {
    id: 82,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Rendering Arrays in React",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "Arrays represent collections",
          "Each item maps to UI",
          "JavaScript drives rendering",
          "Declarative list creation",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Array in → UI out",
          "One item → one element",
          "Same structure repeated",
          "Data controls output",
          ],
        },
      ],
    },
  },

  {
    id: 83,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Using map() to Render Lists",
    type: "infographic",
    content: {
      cards: [
        {
          title: "map() Explained",
          items: [
          "Transforms arrays",
          "Returns a new array",
          "Perfect for JSX rendering",
          "Most common React pattern",
          ],
        },
        {
          title: "Why map() Is Preferred",
          items: [
          "Clean and readable",
          "Functional approach",
          "Avoids manual loops",
          "Predictable output",
          ],
        },
      ],
    },
  },

  {
    id: 84,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "map() Rendering Example",
    type: "code-plus",
    content: {
      title: "Rendering a List of Items",
      points: [
        "Use map inside JSX",
        "Each item returns JSX",
        "Array drives UI",
      ],
      code: `function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li>{user}</li>
      ))}
    </ul>
  );
}`,
      note: "Each array item is transformed into a list element.",
    },
  },

  {
    id: 85,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "The Key Prop",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Is a Key?",
          items: [
          "Special prop for lists",
          "Helps React identify items",
          "Must be unique",
          "Used internally by React",
          ],
        },
        {
          title: "Why Keys Matter",
          items: [
          "Efficient updates",
          "Correct re-rendering",
          "Preserves component state",
          "Avoids UI bugs",
          ],
        },
      ],
    },
  },

  {
    id: 86,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Key Usage Example",
    type: "code-plus",
    content: {
      title: "Adding Keys to List Items",
      points: [
        "Key goes on outer element",
        "Should be stable",
        "Should be unique",
      ],
      code: `function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
      note: "Keys help React track list items across renders.",
    },
  },

  {
    id: 87,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Why Not Use Array Index as Key?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Temptation",
          items: [
          "Easy to access index",
          "Works for static lists",
          "Looks harmless",
          "Common beginner choice",
          ],
        },
        {
          title: "The Problem",
          items: [
          "Breaks when list changes",
          "Causes incorrect re-renders",
          "State bugs appear",
          "Hard to debug",
          ],
        },
      ],
    },
  },

  {
    id: 88,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Rendering Components in Lists",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Best Practice",
          items: [
          "Extract list item component",
          "Keep list logic clean",
          "Improve readability",
          "Encourage reuse",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Parent maps data",
          "Child renders item",
          "Key stays at top level",
          "Separation of concerns",
          ],
        },
      ],
    },
  },

  {
    id: 89,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Component List Example",
    type: "code-plus",
    content: {
      title: "Rendering Components from Arrays",
      points: [
        "Component per item",
        "Key on component",
        "Cleaner structure",
      ],
      code: `function UserItem({ user }) {
  return <li>{user.name}</li>;
}

function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
}`,
      note: "Separating list items into components improves clarity.",
    },
  },

  {
    id: 90,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Forgetting the key prop",
          "Using index as key incorrectly",
          "Complex logic inside map",
          "Rendering too much in one component",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Always include stable keys",
          "Prefer IDs",
          "Extract components",
          "Keep map callbacks simple",
          ],
        },
      ],
    },
  },

  {
    id: 91,
    moduleId: 6,
    moduleTitle: "Lists, Keys & Rendering Patterns",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Forms and inputs",
          "Handling user input",
          "Controlled components",
          "Two-way interaction",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You can render dynamic lists",
          "You understand keys",
          "You use map correctly",
          "Ready for forms",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 7: Forms & Controlled Components
  // =========================

  {
    id: 92,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Why Forms Matter in React",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Forms Are Everywhere",
          items: [
          "Login and registration",
          "Search inputs",
          "Settings and profiles",
          "Data collection",
          ],
        },
        {
          title: "The React Challenge",
          items: [
          "Inputs change frequently",
          "UI must stay in sync",
          "Validation is required",
          "State drives behavior",
          ],
        },
      ],
    },
  },

  {
    id: 93,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Uncontrolled vs Controlled Inputs",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Uncontrolled Inputs",
          items: [
          "Browser manages state",
          "Harder to validate",
          "Less predictable",
          "Not idiomatic React",
          ],
        },
        {
          title: "Controlled Inputs",
          items: [
          "React manages state",
          "Single source of truth",
          "Easy validation",
          "Recommended approach",
          ],
        },
      ],
    },
  },

  {
    id: 94,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "What Is a Controlled Component?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Controlled Component Explained",
          items: [
          "Input value comes from state",
          "onChange updates state",
          "State controls input",
          "UI and data stay in sync",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "State → input value",
          "User types → state updates",
          "State updates → UI re-renders",
          "One-way data flow",
          ],
        },
      ],
    },
  },

  {
    id: 95,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Basic Controlled Input",
    type: "code-plus",
    content: {
      title: "Text Input Example",
      points: [
        "value bound to state",
        "onChange updates state",
        "Always in sync",
      ],
      code: `import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}`,
      note: "The input value is fully controlled by React state.",
    },
  },

  {
    id: 96,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Handling Form Submission",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Form Submit Basics",
          items: [
          "Use onSubmit handler",
          "Prevent default behavior",
          "Process form data",
          "Trigger business logic",
          ],
        },
        {
          title: "Why preventDefault()",
          items: [
          "Stops page reload",
          "Keeps SPA behavior",
          "Allows custom handling",
          "Required in React forms",
          ],
        },
      ],
    },
  },

  {
    id: 97,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Form Submission Example",
    type: "code-plus",
    content: {
      title: "Submitting a Form",
      points: ["Use onSubmit", "Prevent page reload", "Access state values"],
      code: `function LoginForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`,
      note:
        "React handles the form submission without reloading the page.",
    },
  },

  {
    id: 98,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Handling Multiple Inputs",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Challenge",
          items: [
          "Forms often have many fields",
          "Managing many state variables",
          "Keeping code readable",
          "Avoid repetition",
          ],
        },
        {
          title: "Common Solution",
          items: [
          "Use object state",
          "Use input name attribute",
          "Generic change handler",
          "Scales better",
          ],
        },
      ],
    },
  },

  {
    id: 99,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Multiple Input Example",
    type: "code-plus",
    content: {
      title: "Form with Multiple Fields",
      points: ["Single state object", "Dynamic updates", "Cleaner logic"],
      code: `function SignupForm() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="password"
        value={form.password}
        onChange={handleChange}
      />
    </>
  );
}`,
      note: "A single handler can manage multiple controlled inputs.",
    },
  },

  {
    id: 100,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Forgetting value attribute",
          "Not preventing default submit",
          "Too many separate state variables",
          "Uncontrolled inputs by accident",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Always bind value to state",
          "Use onSubmit correctly",
          "Group related state",
          "Check console warnings",
          ],
        },
      ],
    },
  },

  {
    id: 101,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Controlled Select Example",
    type: "code-plus",
    content: {
      title: "Select State",
      points: [
        "Select value comes from state",
        "onChange updates that state",
        "Form stays predictable",
      ],
      code: `const [role, setRole] = useState('student');

<select value={role} onChange={(e) => setRole(e.target.value)}>
  <option value="student">Student</option>
  <option value="teacher">Teacher</option>
</select>
`,
      note: "Controlled selects behave like controlled inputs.",
    },
  },
  {
    id: 102,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Checkbox Controlled Input",
    type: "code-plus",
    content: {
      title: "Boolean Form State",
      points: [
        "Checkboxes use checked",
        "State controls the UI",
        "Keep forms predictable",
      ],
      code: `const [agreed, setAgreed] = useState(false);

<input
  type="checkbox"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
`,
      note: "Controlled inputs are the React standard.",
    },
  },
  {
    id: 103,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "Form Submit Handler",
    type: "code-plus",
    content: {
      title: "Handle Submit",
      points: [
        "Prevent default refresh",
        "Use current state values",
        "Trigger your action",
      ],
      code: `function SignupForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Join</button>
    </form>
  );
}
`,
      note: "Forms should submit through a handler, not a page reload.",
    },
  },
  {
    id: 104,
    moduleId: 7,
    moduleTitle: "Forms & Controlled Components",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Lifting state up",
          "Component communication",
          "Sharing data",
          "Parent–child coordination",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You handle form inputs",
          "You control UI with state",
          "You manage submissions",
          "Ready to share state",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 8: Lifting State & Component Communication
  // =========================

  {
    id: 105,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "Why Components Need to Communicate",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem",
          items: [
          "Multiple components depend on same data",
          "Sibling components cannot share state directly",
          "Duplicated state causes bugs",
          "UI becomes inconsistent",
          ],
        },
        {
          title: "The React Solution",
          items: [
          "Lift state to common parent",
          "Single source of truth",
          "Pass data down with props",
          "Pass actions up with callbacks",
          ],
        },
      ],
    },
  },

  {
    id: 106,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "What Does Lifting State Mean?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Concept Explained",
          items: [
          "Move state up the component tree",
          "Store state in closest common parent",
          "Remove duplicated state",
          "Children become controlled",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "State lives higher",
          "Data flows downward",
          "Events flow upward",
          "Parent coordinates children",
          ],
        },
      ],
    },
  },

  {
    id: 107,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "Before Lifting State",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problematic Pattern",
          items: [
          "Each child has its own state",
          "States fall out of sync",
          "Hard to reason about behavior",
          "Unexpected UI bugs",
          ],
        },
        {
          title: "Warning Signs",
          items: [
          "Same state duplicated",
          "Props drilling confusion",
          "Inconsistent UI",
          "Complex debugging",
          ],
        },
      ],
    },
  },

  {
    id: 108,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "After Lifting State",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Improved Pattern",
          items: [
          "Single shared state",
          "Children receive props",
          "Parent manages logic",
          "Predictable behavior",
          ],
        },
        {
          title: "Key Benefits",
          items: [
          "One source of truth",
          "Cleaner data flow",
          "Easier debugging",
          "Scalable design",
          ],
        },
      ],
    },
  },

  {
    id: 109,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "Lifting State Example (Concept)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Scenario",
          items: [
          "Two inputs need same value",
          "Both must stay in sync",
          "User interaction affects both",
          "Shared responsibility",
          ],
        },
        {
          title: "Solution",
          items: [
          "Move state to parent",
          "Pass value as prop",
          "Pass updater as callback",
          "Children stay stateless",
          ],
        },
      ],
    },
  },

  {
    id: 110,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "Lifting State Code Example",
    type: "code-plus",
    content: {
      title: "Parent Controls State",
      points: [
        "State lives in parent",
        "Children receive value",
        "Children notify parent",
      ],
      code: `function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <ChildInput value={value} onChange={setValue} />
      <ChildDisplay value={value} />
    </>
  );
}

function ChildInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

function ChildDisplay({ value }) {
  return <p>{value}</p>;
}`,
      note:
        "The parent owns the state and coordinates child components.",
    },
  },

  {
    id: 111,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "Passing Callbacks to Children",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Callbacks Are Needed",
          items: [
          "Children cannot change parent state directly",
          "Functions are passed as props",
          "Triggers parent updates",
          "Maintains one-way data flow",
          ],
        },
        {
          title: "Mental Rule",
          items: [
          "Data flows down",
          "Actions flow up",
          "Parent stays in control",
          "Predictable updates",
          ],
        },
      ],
    },
  },

  {
    id: 112,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "When to Lift State",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Good Candidates",
          items: [
          "Shared data between siblings",
          "Coordinated UI behavior",
          "Derived state needed",
          "Validation across components",
          ],
        },
        {
          title: "When Not To",
          items: [
          "State used in one place",
          "Purely presentational data",
          "Temporary UI state",
          "Local component concerns",
          ],
        },
      ],
    },
  },

  {
    id: 113,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Lifting state too early",
          "Passing too many props",
          "Confusing data flow",
          "Overcomplicating components",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Lift only when needed",
          "Keep props minimal",
          "Draw component tree",
          "Refactor gradually",
          ],
        },
      ],
    },
  },

  {
    id: 114,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "Lifting State Up Example",
    type: "code-plus",
    content: {
      title: "Shared State",
      points: [
        "Move state to the closest common parent",
        "Pass state and setters down as props",
        "Keeps siblings in sync",
      ],
      code: `function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter value={count} />
      <Button onAdd={() => setCount(c => c + 1)} />
    </div>
  );
}
`,
      note: "Lifting state prevents duplicated source of truth.",
    },
  },
  {
    id: 115,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "Prop Drilling (Preview)",
    type: "code-plus",
    content: {
      title: "Passing Data Down",
      points: [
        "Props can pass through multiple levels",
        "Works but can be verbose",
        "Context helps later",
      ],
      code: `function App() {
  const [theme] = useState('dark');
  return <Layout theme={theme} />;
}

function Layout({ theme }) {
  return <Panel theme={theme} />;
}
`,
      note: "Prop drilling is OK for small trees.",
    },
  },
  {
    id: 116,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "Sibling Sync Example",
    type: "code-plus",
    content: {
      title: "Lifted State",
      points: [
        "Shared state in parent",
        "Siblings receive props",
        "One source of truth",
      ],
      code: `function Parent() {
  const [text, setText] = useState('');
  return (
    <div>
      <Input value={text} onChange={setText} />
      <Preview value={text} />
    </div>
  );
}
`,
      note: "Lifting state keeps sibling components in sync.",
    },
  },
  {
    id: 117,
    moduleId: 8,
    moduleTitle: "Lifting State & Component Communication",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Side effects",
          "useEffect hook",
          "Lifecycle thinking",
          "Data fetching",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You understand shared state",
          "You can coordinate components",
          "You follow one-way data flow",
          "Ready for side effects",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 9: useEffect & Side Effects
  // =========================

  {
    id: 118,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Why Side Effects Exist",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Pure UI Is Not Enough",
          items: [
          "Data must be fetched",
          "Subscriptions must be managed",
          "Timers and listeners are needed",
          "External systems must be synced",
          ],
        },
        {
          title: "Side Effects Solve This",
          items: [
          "Run code after render",
          "Interact with external systems",
          "Keep UI and data in sync",
          "Model real application behavior",
          ],
        },
      ],
    },
  },

  {
    id: 119,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "What Is a Side Effect?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Side Effect Explained",
          items: [
          "Anything outside rendering",
          "Affects something external",
          "Not part of UI calculation",
          "Runs after render",
          ],
        },
        {
          title: "Common Examples",
          items: [
          "Fetching data",
          "Updating document title",
          "Setting timers",
          "Subscribing to events",
          ],
        },
      ],
    },
  },

  {
    id: 120,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Introducing useEffect",
    type: "infographic",
    content: {
      cards: [
        {
          title: "useEffect Hook",
          items: [
          "Built-in React Hook",
          "Handles side effects",
          "Runs after render",
          "Replaces lifecycle methods",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Render UI first",
          "Then run effect",
          "React controls timing",
          "Declarative side effects",
          ],
        },
      ],
    },
  },

  {
    id: 121,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Basic useEffect Example",
    type: "code-plus",
    content: {
      title: "Running Code After Render",
      points: [
        "Effect runs after render",
        "No dependencies means every render",
        "Used for simple effects",
      ],
      code: `import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component rendered");
  });

  return <h1>Hello</h1>;
}`,
      note: "This effect runs after every render.",
    },
  },

  {
    id: 122,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "The Dependency Array",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Dependencies Do",
          items: [
          "Control when effect runs",
          "Track specific values",
          "Prevent unnecessary runs",
          "Improve performance",
          ],
        },
        {
          title: "Common Patterns",
          items: [
          "[] → run once",
          "[value] → run on change",
          "No array → run always",
          "Be explicit",
          ],
        },
      ],
    },
  },

  {
    id: 123,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Dependency Examples",
    type: "code-plus",
    content: {
      title: "Controlling Effect Execution",
      points: [
        "Empty array runs once",
        "Value array runs on change",
        "Predictable behavior",
      ],
      code: `useEffect(() => {
  console.log("Runs once");
}, []);

useEffect(() => {
  console.log("Runs when count changes");
}, [count]);`,
      note: "Dependencies determine when effects execute.",
    },
  },

  {
    id: 124,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Fetching Data with useEffect",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why useEffect for Fetching",
          items: [
          "Data fetching is a side effect",
          "Runs after initial render",
          "Updates state with results",
          "Avoids blocking UI",
          ],
        },
        {
          title: "Typical Flow",
          items: [
          "Render loading UI",
          "Fetch data",
          "Update state",
          "Re-render with data",
          ],
        },
      ],
    },
  },

  {
    id: 125,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Data Fetching Example",
    type: "code-plus",
    content: {
      title: "Fetching on Mount",
      points: [
        "Empty dependency array",
        "Async logic inside effect",
        "State update triggers re-render",
      ],
      code: `import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <div>{users.length} users</div>;
}`,
      note: "Data is fetched once when the component mounts.",
    },
  },

  {
    id: 126,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Cleanup Functions",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Cleanup Is Needed",
          items: [
          "Prevent memory leaks",
          "Stop subscriptions",
          "Clear timers",
          "Avoid duplicate effects",
          ],
        },
        {
          title: "How Cleanup Works",
          items: [
          "Return a function from effect",
          "Runs before re-run",
          "Runs on unmount",
          "Automatic lifecycle handling",
          ],
        },
      ],
    },
  },

  {
    id: 127,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Cleanup Example",
    type: "code-plus",
    content: {
      title: "Clearing a Timer",
      points: [
        "Return cleanup function",
        "Runs on unmount",
        "Prevents leaks",
      ],
      code: `useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);`,
      note: "The interval is cleaned up when the component unmounts.",
    },
  },

  {
    id: 128,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Missing dependencies",
          "Infinite loops",
          "Putting render logic in effects",
          "Forgetting cleanup",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "List all dependencies",
          "Understand render vs effect",
          "Keep effects focused",
          "Always clean up",
          ],
        },
      ],
    },
  },

  {
    id: 129,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "useEffect Cleanup Example",
    type: "code-plus",
    content: {
      title: "Avoid Leaks",
      points: [
        "Cleanup runs on unmount",
        "Stops timers and listeners",
        "Keeps apps fast",
      ],
      code: `useEffect(() => {
  const id = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(id);
}, []);
`,
      note: "Always clean up subscriptions and timers.",
    },
  },
  {
    id: 130,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "useEffect Dependency Example",
    type: "code-plus",
    content: {
      title: "Run When Value Changes",
      points: [
        "Dependency array controls re-runs",
        "Only run when value changes",
        "Avoid unnecessary effects",
      ],
      code: `function Title({ name }) {
  useEffect(() => {
    document.title = \`Hello, \${name}\`;
  }, [name]);

  return <h2>Hello {name}</h2>;
}
`,
      note: "Dependencies keep effects predictable and efficient.",
    },
  },
  {
    id: 131,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "Abort Fetch on Unmount",
    type: "code-plus",
    content: {
      title: "Prevent Memory Leaks",
      points: [
        "Abort fetch on unmount",
        "Avoid setting state after unmount",
        "Cleaner side effects",
      ],
      code: `useEffect(() => {
  const controller = new AbortController();
  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(() => {});

  return () => controller.abort();
}, []);
`,
      note: "AbortController keeps effects safe.",
    },
  },
  {
    id: 132,
    moduleId: 9,
    moduleTitle: "useEffect & Side Effects",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Custom hooks",
          "Reusing logic",
          "Abstraction patterns",
          "Cleaner components",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You understand side effects",
          "You use useEffect correctly",
          "You fetch data safely",
          "Ready for custom hooks",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 10: Custom Hooks
  // =========================

  {
    id: 133,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "Why Custom Hooks Exist",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem",
          items: [
          "Repeated logic across components",
          "Large, cluttered components",
          "Hard-to-reuse side-effect logic",
          "Poor separation of concerns",
          ],
        },
        {
          title: "The Custom Hook Solution",
          items: [
          "Extract reusable logic",
          "Share behavior, not UI",
          "Cleaner components",
          "Scalable patterns",
          ],
        },
      ],
    },
  },

  {
    id: 134,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "What Is a Custom Hook?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Custom Hook Explained",
          items: [
          "A JavaScript function",
          "Uses built-in hooks",
          "Encapsulates logic",
          "Starts with use",
          ],
        },
        {
          title: "What It Is Not",
          items: [
          "Not a component",
          "Does not return JSX",
          "Not tied to UI",
          "Pure logic reuse",
          ],
        },
      ],
    },
  },

  {
    id: 135,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "When to Create a Custom Hook",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Good Candidates",
          items: [
          "Repeated useEffect logic",
          "Shared state behavior",
          "API fetching logic",
          "Subscriptions or listeners",
          ],
        },
        {
          title: "When Not To",
          items: [
          "Logic used once",
          "Pure UI rendering",
          "Very simple state",
          "Premature abstraction",
          ],
        },
      ],
    },
  },

  {
    id: 136,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "Basic Custom Hook Example",
    type: "code-plus",
    content: {
      title: "Extracting Logic",
      points: [
        "Hook name starts with use",
        "Can use useState and useEffect",
        "Returns reusable values",
      ],
      code: `import { useState } from "react";

function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  function increment() {
    setCount(c => c + 1);
  }

  return { count, increment };
}`,
      note: "This custom hook encapsulates counter logic for reuse.",
    },
  },

  {
    id: 137,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "Using a Custom Hook",
    type: "code-plus",
    content: {
      title: "Consuming the Hook",
      points: [
        "Call hook inside component",
        "Receive returned values",
        "UI stays clean",
      ],
      code: `function Counter() {
  const { count, increment } = useCounter(0);

  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}`,
      note: "Components focus on UI while logic lives in the hook.",
    },
  },

  {
    id: 138,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "Rules of Hooks Still Apply",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Rules Recap",
          items: [
          "Call hooks at top level",
          "Only call hooks in functions",
          "Same order every render",
          "No conditional calls",
          ],
        },
        {
          title: "Why This Matters",
          items: [
          "Predictable behavior",
          "Correct state association",
          "Avoids runtime bugs",
          "Core React guarantee",
          ],
        },
      ],
    },
  },

  {
    id: 139,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "Custom Hooks with useEffect",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Common Pattern",
          items: [
          "Encapsulate side effects",
          "Hide implementation details",
          "Expose simple API",
          "Improve readability",
          ],
        },
        {
          title: "Typical Use Cases",
          items: ["Data fetching", "Window events", "Timers", "Subscriptions"],
        },
      ],
    },
  },

  {
    id: 140,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "Data Fetching Hook Example",
    type: "code-plus",
    content: {
      title: "Reusable Fetch Logic",
      points: [
        "Effect inside hook",
        "State managed internally",
        "Clean consumer API",
      ],
      code: `import { useState, useEffect } from "react";

function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return users;
}`,
      note: "The hook hides fetching logic and exposes data.",
    },
  },

  {
    id: 141,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "Benefits of Custom Hooks",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Developer Benefits",
          items: [
          "Cleaner components",
          "Less duplication",
          "Better testability",
          "Clear abstractions",
          ],
        },
        {
          title: "Project Benefits",
          items: [
          "Consistent behavior",
          "Easier refactoring",
          "Shared logic",
          "Scalable architecture",
          ],
        },
      ],
    },
  },

  {
    id: 142,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Returning JSX from hooks",
          "Calling hooks conditionally",
          "Over-abstracting early",
          "Ignoring dependencies",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Keep hooks logic-only",
          "Follow hook rules strictly",
          "Abstract when repetition appears",
          "Test hooks independently",
          ],
        },
      ],
    },
  },

  {
    id: 143,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "Custom Hook Example",
    type: "code-plus",
    content: {
      title: "useToggle",
      points: [
        "Extract reusable state logic",
        "Hooks start with use",
        "Keep components clean",
      ],
      code: `function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle];
}
`,
      note: "Custom hooks package logic for reuse.",
    },
  },
  {
    id: 144,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "useLocalStorage Hook",
    type: "code-plus",
    content: {
      title: "Persist Values",
      points: [
        "Store state in localStorage",
        "Hydrate on mount",
        "Reusable across components",
      ],
      code: `function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
`,
      note: "Custom hooks let you reuse stateful logic.",
    },
  },
  {
    id: 145,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "useFetch Hook",
    type: "code-plus",
    content: {
      title: "Reusable Data Hook",
      points: [
        "Encapsulate fetch logic",
        "Return loading + data",
        "Reuse across screens",
      ],
      code: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}
`,
      note: "Custom hooks keep repeated patterns DRY.",
    },
  },
  {
    id: 146,
    moduleId: 10,
    moduleTitle: "Custom Hooks",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Global state",
          "Context API",
          "Avoiding prop drilling",
          "App-wide data",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You can extract logic",
          "You write reusable hooks",
          "You keep components clean",
          "Ready for global state",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 11: Context API & Global State
  // =========================

  {
    id: 147,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "Why Global State Exists",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem",
          items: [
          "Props passed through many layers",
          "Deep component trees",
          "Unrelated components need same data",
          "Prop drilling becomes messy",
          ],
        },
        {
          title: "Global State Solves This",
          items: [
          "Shared data accessible anywhere",
          "Cleaner component APIs",
          "Less prop drilling",
          "Centralized control",
          ],
        },
      ],
    },
  },

  {
    id: 148,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "What Is the Context API?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Context Explained",
          items: [
          "Built-in React feature",
          "Provides global data",
          "Avoids manual prop passing",
          "Scoped to a tree",
          ],
        },
        {
          title: "What Context Is Not",
          items: [
          "Not a replacement for all state",
          "Not a database",
          "Not magic",
          "Not always needed",
          ],
        },
      ],
    },
  },

  {
    id: 149,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "When to Use Context",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Good Use Cases",
          items: [
          "Theme (dark/light)",
          "Authentication state",
          "User preferences",
          "Locale settings",
          ],
        },
        {
          title: "When Not To",
          items: [
          "Local component state",
          "High-frequency updates",
          "Highly dynamic data",
          "Simple parent–child passing",
          ],
        },
      ],
    },
  },

  {
    id: 150,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "Creating a Context",
    type: "code-plus",
    content: {
      title: "Context Creation",
      points: [
        "Use createContext",
        "Default value optional",
        "Context object created once",
      ],
      code: `import { createContext } from "react";

const ThemeContext = createContext("light");`,
      note: "This creates a context for sharing theme data.",
    },
  },

  {
    id: 151,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "Providing Context",
    type: "code-plus",
    content: {
      title: "Context Provider",
      points: [
        "Wrap part of the tree",
        "value prop supplies data",
        "All children can consume",
      ],
      code: `function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Dashboard />
    </ThemeContext.Provider>
  );
}`,
      note: "The Provider makes context available to child components.",
    },
  },

  {
    id: 152,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "Consuming Context with useContext",
    type: "infographic",
    content: {
      cards: [
        {
          title: "useContext Hook",
          items: [
          "Access context values",
          "Simpler than Consumer",
          "Triggers re-render on change",
          "Most common approach",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Subscribe to context",
          "Receive latest value",
          "React handles updates",
          "Declarative consumption",
          ],
        },
      ],
    },
  },

  {
    id: 153,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "useContext Example",
    type: "code-plus",
    content: {
      title: "Reading Context Value",
      points: [
        "Call inside component",
        "Pass context object",
        "Value updates automatically",
      ],
      code: `import { useContext } from "react";

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}`,
      note: "The component reads the current context value.",
    },
  },

  {
    id: 154,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "Context with State",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Common Pattern",
          items: [
          "Store state in provider",
          "Pass value and updater",
          "Centralize logic",
          "Controlled access",
          ],
        },
        {
          title: "Why It Works",
          items: [
          "Single source of truth",
          "Predictable updates",
          "Shared behavior",
          "Clean consumers",
          ],
        },
      ],
    },
  },

  {
    id: 155,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "Context State Example",
    type: "code-plus",
    content: {
      title: "Global State via Context",
      points: [
        "State in provider",
        "Updater passed down",
        "Consumers trigger changes",
      ],
      code: `function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`,
      note: "Context can expose both data and actions.",
    },
  },

  {
    id: 156,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Using context everywhere",
          "Overloading context values",
          "Missing provider wrapper",
          "Performance issues",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Use context sparingly",
          "Keep context focused",
          "Wrap tree correctly",
          "Split contexts when needed",
          ],
        },
      ],
    },
  },

  {
    id: 157,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "Context Provider Example",
    type: "code-plus",
    content: {
      title: "Share Global State",
      points: [
        "Create context with React.createContext",
        "Wrap app with Provider",
        "Consume with useContext",
      ],
      code: `const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Hello</div>;
}
`,
      note: "Context removes the need for prop drilling.",
    },
  },
  {
    id: 158,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "Auth Context Example",
    type: "code-plus",
    content: {
      title: "Share User State",
      points: [
        "Provide auth data globally",
        "Consume in any component",
        "Avoid prop drilling",
      ],
      code: `const AuthContext = React.createContext(null);

function App() {
  const [user] = useState({ name: 'Ada' });
  return (
    <AuthContext.Provider value={user}>
      <Profile />
    </AuthContext.Provider>
  );
}

function Profile() {
  const user = useContext(AuthContext);
  return <p>Welcome, {user.name}</p>;
}
`,
      note: "Context is ideal for app-wide state like auth.",
    },
  },
  {
    id: 159,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "useReducer + Context",
    type: "code-plus",
    content: {
      title: "Structured Global State",
      points: [
        "useReducer for complex state",
        "Context for sharing state",
        "Clear action patterns",
      ],
      code: `function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.user };
    default:
      return state;
  }
}

const AuthContext = React.createContext();
`,
      note: "Reducer + Context scales better for complex state.",
    },
  },
  {
    id: 160,
    moduleId: 11,
    moduleTitle: "Context API & Global State",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Data fetching patterns",
          "Async state handling",
          "Loading and error states",
          "Real-world APIs",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You avoid prop drilling",
          "You share state safely",
          "You understand global state",
          "Ready for data fetching",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 12: Data Fetching & APIs
  // =========================

  {
    id: 161,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Why Data Fetching Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Modern App Reality",
          items: [
          "Data lives on servers",
          "UIs depend on remote data",
          "Network requests are async",
          "Data changes over time",
          ],
        },
        {
          title: "What React Needs",
          items: [
          "Fetch data safely",
          "Handle loading states",
          "Handle errors gracefully",
          "Keep UI responsive",
          ],
        },
      ],
    },
  },

  {
    id: 162,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Client–Server Mental Model",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Client (React App)",
          items: [
          "Requests data",
          "Displays UI",
          "Handles user interaction",
          "Manages state",
          ],
        },
        {
          title: "Server (API)",
          items: [
          "Processes requests",
          "Returns data (usually JSON)",
          "Handles business logic",
          "Stateless",
          ],
        },
      ],
    },
  },

  {
    id: 163,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "When to Fetch Data",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Common Scenarios",
          items: [
          "On component mount",
          "When a parameter changes",
          "After user action",
          "On refresh",
          ],
        },
        {
          title: "Best Practice",
          items: [
          "Fetch in useEffect",
          "Control with dependencies",
          "Avoid fetching in render",
          "Keep effects focused",
          ],
        },
      ],
    },
  },

  {
    id: 164,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Basic Fetch Pattern",
    type: "infographic",
    content: {
      cards: [
        {
          title: "fetch API",
          items: [
          "Built into the browser",
          "Promise-based",
          "Returns a Response object",
          "Requires parsing JSON",
          ],
        },
        {
          title: "Typical Flow",
          items: [
          "Send request",
          "Wait for response",
          "Parse JSON",
          "Update state",
          ],
        },
      ],
    },
  },

  {
    id: 165,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Fetching Data on Mount",
    type: "code-plus",
    content: {
      title: "useEffect + fetch",
      points: [
        "Empty dependency array",
        "Runs once on mount",
        "State updated with data",
      ],
      code: `import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return <div>{posts.length} posts</div>;
}`,
      note: "Data is fetched once when the component mounts.",
    },
  },

  {
    id: 166,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Loading State",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Loading State Is Needed",
          items: [
          "Network requests take time",
          "UI should not appear broken",
          "User needs feedback",
          "Improves UX",
          ],
        },
        {
          title: "Common Patterns",
          items: [
          "Boolean isLoading",
          "Conditional rendering",
          "Skeletons or spinners",
          "Disable actions",
          ],
        },
      ],
    },
  },

  {
    id: 167,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Loading State Example",
    type: "code-plus",
    content: {
      title: "Handling Loading",
      points: [
        "Set loading before fetch",
        "Clear loading after fetch",
        "Conditional UI",
      ],
      code: `function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return <div>{users.length} users</div>;
}`,
      note: "The UI reflects loading state before data arrives.",
    },
  },

  {
    id: 168,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Error Handling",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Can Go Wrong",
          items: [
          "Network failures",
          "Server errors",
          "Invalid responses",
          "Timeouts",
          ],
        },
        {
          title: "Best Practice",
          items: [
          "Handle errors explicitly",
          "Show user-friendly messages",
          "Avoid silent failures",
          "Log errors",
          ],
        },
      ],
    },
  },

  {
    id: 169,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Error Handling Example",
    type: "code-plus",
    content: {
      title: "Safe Fetching",
      points: ["Catch errors", "Store error state", "Render error UI"],
      code: `function Data() {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then(res => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return <p>Data loaded</p>;
}`,
      note: "Errors are handled explicitly and reflected in the UI.",
    },
  },

  {
    id: 170,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Avoiding Common Pitfalls",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Common Mistakes",
          items: [
          "Fetching in render",
          "Missing dependencies",
          "No loading state",
          "Ignoring errors",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Use useEffect correctly",
          "Track dependencies carefully",
          "Always handle loading and errors",
          "Test slow networks",
          ],
        },
      ],
    },
  },

  {
    id: 171,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Fetching Data with useEffect",
    type: "code-plus",
    content: {
      title: "Async Data",
      points: [
        "Fetch on mount",
        "Store response in state",
        "Show loading UI",
      ],
      code: `function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  return users.map(u => <div key={u.id}>{u.name}</div>);
}
`,
      note: "useEffect is the go-to for data fetching in React.",
    },
  },
  {
    id: 172,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Async/Await Fetch",
    type: "code-plus",
    content: {
      title: "Cleaner Async Code",
      points: [
        "Use async functions inside effects",
        "Handle loading state",
        "Keep logic readable",
      ],
      code: `function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setItems(data);
    };
    load();
  }, []);

  return items.map(i => <div key={i.id}>{i.name}</div>);
}
`,
      note: "Async/await keeps data fetching readable.",
    },
  },
  {
    id: 173,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Error State UI",
    type: "code-plus",
    content: {
      title: "Handle Failures",
      points: [
        "Track error in state",
        "Show fallback UI",
        "Keep UX reliable",
      ],
      code: `const [error, setError] = useState(null);

useEffect(() => {
  fetch('/api/items')
    .then(res => res.json())
    .then(setItems)
    .catch(() => setError('Failed to load'));
}, []);

if (error) return <p>{error}</p>;
`,
      note: "Always handle errors in data fetching flows.",
    },
  },
  {
    id: 174,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "Pagination Example",
    type: "code-plus",
    content: {
      title: "Load in Pages",
      points: [
        "Fetch by page index",
        "Control loading state",
        "Improve performance",
      ],
      code: `const [page, setPage] = useState(1);

useEffect(() => {
  fetch(\`/api/items?page=\${page}\`)
    .then(res => res.json())
    .then(setItems);
}, [page]);
`,
      note: "Pagination keeps large lists responsive.",
    },
  },
  {
    id: 175,
    moduleId: 12,
    moduleTitle: "Data Fetching & APIs",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Performance optimization",
          "Memoization",
          "Avoiding unnecessary renders",
          "Efficient React apps",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You fetch data safely",
          "You handle loading and errors",
          "You understand async UI",
          "Ready for optimization",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 13: Performance & Optimization
  // =========================

  {
    id: 176,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "Why Performance Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "User Expectations",
          items: [
          "Fast UI responses",
          "Smooth interactions",
          "No unnecessary re-renders",
          "Consistent experience",
          ],
        },
        {
          title: "Developer Responsibility",
          items: [
          "Efficient rendering",
          "Minimal wasted work",
          "Scalable components",
          "Predictable performance",
          ],
        },
      ],
    },
  },

  {
    id: 177,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "Understanding Re-renders",
    type: "infographic",
    content: {
      cards: [
        {
          title: "When React Re-renders",
          items: [
          "State changes",
          "Props change",
          "Parent re-renders",
          "Context updates",
          ],
        },
        {
          title: "Key Insight",
          items: [
          "Re-render ≠ DOM update",
          "Virtual DOM diffing",
          "Efficient reconciliation",
          "Usually cheap",
          ],
        },
      ],
    },
  },

  {
    id: 178,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "When Optimization Is Needed",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Signs of Problems",
          items: [
          "Laggy UI",
          "Slow list rendering",
          "Frequent unnecessary renders",
          "Performance warnings",
          ],
        },
        {
          title: "Rule of Thumb",
          items: [
          "Optimize after measuring",
          "Avoid premature optimization",
          "Fix real bottlenecks",
          "Keep code readable",
          ],
        },
      ],
    },
  },

  {
    id: 179,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "React.memo",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What React.memo Does",
          items: [
          "Memoizes components",
          "Skips re-render if props unchanged",
          "Optimizes pure components",
          "Shallow comparison",
          ],
        },
        {
          title: "When to Use It",
          items: [
          "Expensive child components",
          "Stable props",
          "Large trees",
          "Measured bottlenecks",
          ],
        },
      ],
    },
  },

  {
    id: 180,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "React.memo Example",
    type: "code-plus",
    content: {
      title: "Preventing Unnecessary Re-renders",
      points: [
        "Wrap component with React.memo",
        "Props must be stable",
        "Performance improvement depends on usage",
      ],
      code: `const Item = React.memo(function Item({ value }) {
  return <li>{value}</li>;
});`,
      note: "React.memo skips re-rendering when props do not change.",
    },
  },

  {
    id: 181,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "useCallback",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What useCallback Does",
          items: [
          "Memoizes functions",
          "Prevents new function references",
          "Works with React.memo",
          "Improves prop stability",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Same function between renders",
          "Avoids child re-renders",
          "Dependency-driven",
          "Use intentionally",
          ],
        },
      ],
    },
  },

  {
    id: 182,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "useCallback Example",
    type: "code-plus",
    content: {
      title: "Stable Callback",
      points: [
        "Dependencies control recreation",
        "Useful for child props",
        "Avoids re-renders",
      ],
      code: `const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);`,
      note:
        "useCallback returns the same function reference across renders.",
    },
  },

  {
    id: 183,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "useMemo",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What useMemo Does",
          items: [
          "Memoizes computed values",
          "Avoids expensive recalculations",
          "Runs only when dependencies change",
          "Performance optimization tool",
          ],
        },
        {
          title: "When to Use It",
          items: [
          "Heavy calculations",
          "Large lists",
          "Derived data",
          "Measured cost",
          ],
        },
      ],
    },
  },

  {
    id: 184,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "useMemo Example",
    type: "code-plus",
    content: {
      title: "Memoized Computation",
      points: [
        "Cache derived value",
        "Dependencies control recompute",
        "Avoid unnecessary work",
      ],
      code: `const total = useMemo(() => {
  return items.reduce((sum, i) => sum + i.price, 0);
}, [items]);`,
      note:
        "useMemo caches expensive computations until dependencies change.",
    },
  },

  {
    id: 185,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "Performance Best Practices",
    type: "infographic",
    content: {
      cards: [
        {
          title: "General Tips",
          items: [
          "Keep components small",
          "Avoid inline objects/functions",
          "Use keys correctly",
          "Profile before optimizing",
          ],
        },
        {
          title: "Tooling",
          items: [
          "React DevTools Profiler",
          "Browser performance tools",
          "Why-did-you-render",
          "Production builds",
          ],
        },
      ],
    },
  },

  {
    id: 186,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Overusing memoization",
          "Optimizing without measuring",
          "Ignoring readability",
          "Misusing dependencies",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Measure first",
          "Optimize bottlenecks only",
          "Keep code simple",
          "Understand hook behavior",
          ],
        },
      ],
    },
  },

  {
    id: 187,
    moduleId: 13,
    moduleTitle: "Performance & Optimization",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Routing",
          "Multi-page experiences",
          "Navigation",
          "URL-driven UI",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You understand re-renders",
          "You can optimize safely",
          "You use memoization correctly",
          "Ready for routing",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 14: Routing with React Router
  // =========================

  {
    id: 188,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Why Routing Is Needed",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Single Page Application Reality",
          items: [
          "Apps have multiple screens",
          "Users expect URLs to change",
          "Navigation should feel instant",
          "State should persist across views",
          ],
        },
        {
          title: "Routing Solves This",
          items: [
          "Maps URLs to components",
          "Enables navigation without reloads",
          "Creates multi-page experience",
          "Keeps SPA performance",
          ],
        },
      ],
    },
  },

  {
    id: 189,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "What Is React Router?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "React Router Explained",
          items: [
          "Popular routing library",
          "Client-side routing",
          "Declarative route definitions",
          "Industry standard",
          ],
        },
        {
          title: "What It Handles",
          items: [
          "URL matching",
          "Navigation",
          "Route parameters",
          "Nested routes",
          ],
        },
      ],
    },
  },

  {
    id: 190,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Routes vs Links",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Routes",
          items: [
          "Define which component renders",
          "Match URL paths",
          "Control screen content",
          "Declarative mapping",
          ],
        },
        {
          title: "Links",
          items: [
          "Navigate between routes",
          "Replace anchor tags",
          "Prevent full reload",
          "Maintain SPA behavior",
          ],
        },
      ],
    },
  },

  {
    id: 191,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Basic Router Setup",
    type: "code-plus",
    content: {
      title: "Setting Up Routes",
      points: [
        "Wrap app with BrowserRouter",
        "Define Routes and Route",
        "Each path maps to component",
      ],
      code: `import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`,
      note: "React Router maps URLs to components.",
    },
  },

  {
    id: 192,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Navigating with Link",
    type: "code-plus",
    content: {
      title: "Client-Side Navigation",
      points: [
        "Use Link instead of <a>",
        "Prevents full page reload",
        "Preserves app state",
      ],
      code: `import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}`,
      note: "Link enables SPA-style navigation.",
    },
  },

  {
    id: 193,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Route Parameters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Dynamic Routes",
          items: [
          "URLs contain variables",
          "Same component, different data",
          "Common in detail pages",
          "Flexible routing",
          ],
        },
        {
          title: "Typical Examples",
          items: ["/users/1", "/products/42", "/posts/slug", "Profile pages"],
        },
      ],
    },
  },

  {
    id: 194,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Using useParams",
    type: "code-plus",
    content: {
      title: "Accessing Route Params",
      points: [
        "useParams reads URL variables",
        "Returns an object",
        "Triggers re-render on change",
      ],
      code: `import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h1>User {id}</h1>;
}`,
      note: "Route parameters allow dynamic rendering based on URL.",
    },
  },

  {
    id: 195,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Programmatic Navigation",
    type: "infographic",
    content: {
      cards: [
        {
          title: "When It's Needed",
          items: [
          "After form submission",
          "After login/logout",
          "Conditional redirects",
          "Workflow navigation",
          ],
        },
        {
          title: "React Router Tool",
          items: [
          "useNavigate hook",
          "Navigate in code",
          "Controlled redirects",
          "Cleaner logic",
          ],
        },
      ],
    },
  },

  {
    id: 196,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "useNavigate Example",
    type: "code-plus",
    content: {
      title: "Navigating in Code",
      points: [
        "Call navigate function",
        "Redirect after action",
        "Keeps SPA flow",
      ],
      code: `import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return <button onClick={handleLogin}>Login</button>;
}`,
      note: "useNavigate allows navigation via logic.",
    },
  },

  {
    id: 197,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Using <a> instead of Link",
          "Forgetting BrowserRouter",
          "Hardcoding navigation logic",
          "Misusing route params",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Always use Link",
          "Wrap app correctly",
          "Use hooks provided",
          "Follow routing patterns",
          ],
        },
      ],
    },
  },

  {
    id: 198,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Route Params Example",
    type: "code-plus",
    content: {
      title: "Dynamic Routes",
      points: [
        "Use params to load specific data",
        "URL drives the UI",
        "Common in detail pages",
      ],
      code: `function ProductPage() {
  const { id } = useParams();
  return <h2>Product {id}</h2>;
}
`,
      note: "Route params connect URLs to components.",
    },
  },
  {
    id: 199,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Navigate Programmatically",
    type: "code-plus",
    content: {
      title: "Redirect on Action",
      points: [
        "useNavigate for redirects",
        "Common after submit",
        "Keeps UI responsive",
      ],
      code: `function SaveButton() {
  const navigate = useNavigate();
  const onSave = () => {
    // save...
    navigate('/dashboard');
  };
  return <button onClick={onSave}>Save</button>;
}
`,
      note: "useNavigate replaces older useHistory.",
    },
  },
  {
    id: 200,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Nested Routes Example",
    type: "code-plus",
    content: {
      title: "Layout + Outlet",
      points: [
        "Nest routes for shared layouts",
        "Outlet renders child routes",
        "Great for dashboards",
      ],
      code: `function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
`,
      note: "Nested routes keep layouts clean and consistent.",
    },
  },
  {
    id: 201,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "Protected Route Example",
    type: "code-plus",
    content: {
      title: "Guarded Pages",
      points: [
        "Block unauthenticated access",
        "Redirect to login",
        "Common in apps",
      ],
      code: `function ProtectedRoute({ user, children }) {
  if (!user) return <Navigate to="/login" />;
  return children;
}
`,
      note: "Protected routes secure private pages.",
    },
  },
  {
    id: 202,
    moduleId: 14,
    moduleTitle: "Routing with React Router",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Project structure",
          "Best practices",
          "Scalable architecture",
          "Production readiness",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You understand routing",
          "You navigate without reloads",
          "You use dynamic routes",
          "Ready for real-world structure",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 15: Project Structure & Best Practices
  // =========================

  {
    id: 203,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Why Project Structure Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problems of Poor Structure",
          items: [
          "Hard to navigate codebase",
          "Difficult onboarding for new devs",
          "Tight coupling between concerns",
          "Scaling becomes painful",
          ],
        },
        {
          title: "Benefits of Good Structure",
          items: [
          "Clear separation of concerns",
          "Faster development",
          "Easier maintenance",
          "Scales with team size",
          ],
        },
      ],
    },
  },

  {
    id: 204,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Common React Folder Structures",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Feature-Based Structure",
          items: [
          "Group files by feature",
          "Scales well for large apps",
          "Encapsulates logic",
          "Recommended for teams",
          ],
        },
        {
          title: "Type-Based Structure",
          items: [
          "Group by components, hooks, pages",
          "Simple for small apps",
          "Easy to understand initially",
          "Can grow messy",
          ],
        },
      ],
    },
  },

  {
    id: 205,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Example Folder Structure",
    type: "code-plus",
    content: {
      title: "Feature-Based Layout",
      points: [
        "Each feature is self-contained",
        "Clear ownership",
        "Easy to extend",
      ],
      code: `src/
  features/
    auth/
      AuthPage.jsx
      auth.api.js
      auth.hooks.js
    users/
      UsersPage.jsx
      users.api.js
  shared/
    components/
    hooks/
  app/
    App.jsx
    router.jsx`,
      note: "Feature-based structure keeps related logic together.",
    },
  },

  {
    id: 206,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Component Design Best Practices",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Good Component Design",
          items: [
          "Single responsibility",
          "Small and focused",
          "Reusable when possible",
          "Readable JSX",
          ],
        },
        {
          title: "Anti-Patterns",
          items: [
          "Huge components",
          "Too much logic in JSX",
          "Tight coupling",
          "Premature abstraction",
          ],
        },
      ],
    },
  },

  {
    id: 207,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "State Management Best Practices",
    type: "infographic",
    content: {
      cards: [
        {
          title: "State Guidelines",
          items: [
          "Keep state minimal",
          "Lift state only when needed",
          "Prefer local state",
          "Derive state when possible",
          ],
        },
        {
          title: "Avoid",
          items: [
          "Duplicated state",
          "Global state for everything",
          "Derived values in state",
          "Unnecessary complexity",
          ],
        },
      ],
    },
  },

  {
    id: 208,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Hooks & Logic Organization",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Best Practices",
          items: [
          "Extract reusable logic",
          "Use custom hooks",
          "Name hooks clearly",
          "Keep hooks focused",
          ],
        },
        {
          title: "Common Mistakes",
          items: [
          "Hooks doing too much",
          "Mixing UI and logic",
          "Overusing hooks",
          "Ignoring dependencies",
          ],
        },
      ],
    },
  },

  {
    id: 209,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Styling Best Practices",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Styling Approaches",
          items: [
          "CSS Modules",
          "Styled Components",
          "Utility-first CSS",
          "Global styles sparingly",
          ],
        },
        {
          title: "Key Principles",
          items: [
          "Avoid global leaks",
          "Keep styles close to components",
          "Consistent naming",
          "Predictable overrides",
          ],
        },
      ],
    },
  },

  {
    id: 210,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Error Handling & Resilience",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why It Matters",
          items: [
          "APIs fail",
          "Users do unexpected things",
          "Network is unreliable",
          "Apps must recover gracefully",
          ],
        },
        {
          title: "Best Practices",
          items: [
          "Handle errors explicitly",
          "Show fallback UI",
          "Log errors",
          "Fail gracefully",
          ],
        },
      ],
    },
  },

  {
    id: 211,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Production Readiness Checklist",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Before Shipping",
          items: [
          "Remove console logs",
          "Handle loading & errors",
          "Optimize performance",
          "Test critical flows",
          ],
        },
        {
          title: "Ongoing Practices",
          items: ["Code reviews", "Refactoring", "Monitoring", "Documentation"],
        },
      ],
    },
  },

  {
    id: 212,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Feature Folder Example",
    type: "code-plus",
    content: {
      title: "Feature-Based Structure",
      points: [
        "Group files by feature",
        "Keeps related logic together",
        "Scales for teams",
      ],
      code: `src/
  features/
    auth/
      AuthPage.jsx
      authSlice.js
    dashboard/
      Dashboard.jsx
      dashboardApi.js
`,
      note: "Feature folders keep code discoverable.",
    },
  },

  {
    id: 213,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Barrel Export Example",
    type: "code-plus",
    content: {
      title: "Cleaner Imports",
      points: [
        "Re-export from index files",
        "Shorter import paths",
        "Easier refactors",
      ],
      code: `// components/index.js
export { Button } from './Button';
export { Card } from './Card';

// usage
import { Button, Card } from './components';
`,
      note: "Barrel files simplify import statements.",
    },
  },

  {
    id: 214,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "Testable Component Example",
    type: "code-plus",
    content: {
      title: "Write Test-Friendly UI",
      points: [
        "Use data-testid sparingly",
        "Prefer accessible roles",
        "Keep logic simple",
      ],
      code: `function SubmitButton() {
  return <button aria-label="submit">Submit</button>;
}
`,
      note: "Accessible components are easier to test.",
    },
  },

  {
    id: 215,
    moduleId: 15,
    moduleTitle: "Project Structure & Best Practices",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Topics",
          items: [
          "Capstone project",
          "End-to-end React app",
          "Real-world patterns",
          "Portfolio-ready build",
          ],
        },
        {
          title: "Your Progress",
          items: [
          "You structure React projects well",
          "You follow best practices",
          "You write maintainable code",
          "Ready for the capstone",
          ],
        },
      ],
    },
  },
  // =========================
  // React Module 16: Capstone Project
  // =========================

  {
    id: 216,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Why a Capstone Project?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Learning Gap",
          items: [
          "Tutorials don’t reflect real work",
          "Concepts feel disconnected",
          "Confidence is still fragile",
          "Theory without application fades",
          ],
        },
        {
          title: "Capstone Value",
          items: [
          "Integrates all React concepts",
          "Simulates real-world development",
          "Builds portfolio credibility",
          "Strengthens problem-solving skills",
          ],
        },
      ],
    },
  },

  {
    id: 217,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Capstone Project Overview",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Project Description",
          items: [
          "Build a complete React application",
          "Multiple pages and components",
          "API-driven data",
          "Production-ready structure",
          ],
        },
        {
          title: "Core Features",
          items: [
          "Authentication flow (mock or real)",
          "CRUD operations",
          "Routing and navigation",
          "State management",
          ],
        },
      ],
    },
  },

  {
    id: 218,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Suggested Project Ideas",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Ideas",
          items: [
          "Task / Todo management app",
          "Blog or content platform",
          "Dashboard with charts",
          "Inventory or records system",
          ],
        },
        {
          title: "Selection Criteria",
          items: [
          "Solves a real problem",
          "Requires multiple components",
          "Uses data fetching",
          "Demonstrates state management",
          ],
        },
      ],
    },
  },

  {
    id: 219,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Planning the Application",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Before Writing Code",
          items: [
          "Define the problem",
          "Identify users",
          "List features",
          "Decide data flow",
          ],
        },
        {
          title: "Artifacts to Produce",
          items: [
          "Component tree",
          "Page list",
          "State ownership plan",
          "API endpoints",
          ],
        },
      ],
    },
  },

  {
    id: 220,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Defining the Component Tree",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why It Matters",
          items: [
          "Clarifies responsibilities",
          "Prevents prop chaos",
          "Guides state placement",
          "Improves scalability",
          ],
        },
        {
          title: "Best Practices",
          items: [
          "Top-down design",
          "Reusable components",
          "Minimal prop drilling",
          "Clear boundaries",
          ],
        },
      ],
    },
  },

  {
    id: 221,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "State Management Strategy",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Local State",
          items: [
          "Form inputs",
          "UI toggles",
          "Component-specific data",
          "Temporary values",
          ],
        },
        {
          title: "Shared / Global State",
          items: [
          "Authenticated user",
          "Theme or preferences",
          "Shared collections",
          "App-wide flags",
          ],
        },
      ],
    },
  },

  {
    id: 222,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Routing Plan",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Typical Pages",
          items: [
          "Home / Dashboard",
          "List view",
          "Detail view",
          "Create / Edit view",
          ],
        },
        {
          title: "Routing Best Practices",
          items: [
          "Use meaningful URLs",
          "Use route params",
          "Protect private routes",
          "Handle 404s",
          ],
        },
      ],
    },
  },

  {
    id: 223,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Data Fetching Strategy",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What to Fetch",
          items: [
          "Initial page data",
          "User-specific data",
          "Lists and details",
          "Derived resources",
          ],
        },
        {
          title: "How to Fetch",
          items: [
          "useEffect on mount",
          "Loading and error states",
          "Reusable fetch hooks",
          "Graceful failures",
          ],
        },
      ],
    },
  },

  {
    id: 224,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Error & Loading States",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why They Matter",
          items: [
          "Networks are unreliable",
          "Users need feedback",
          "Avoid broken UI",
          "Professional experience",
          ],
        },
        {
          title: "Best Practices",
          items: [
          "Global loading indicators",
          "Inline error messages",
          "Retry mechanisms",
          "Fallback UI",
          ],
        },
      ],
    },
  },

  {
    id: 225,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Polish & Optimization",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Final Improvements",
          items: [
          "Remove dead code",
          "Optimize renders",
          "Improve UX",
          "Clean folder structure",
          ],
        },
        {
          title: "Quality Checklist",
          items: [
          "Readable code",
          "Consistent patterns",
          "Error-free console",
          "Responsive UI",
          ],
        },
      ],
    },
  },

  {
    id: 226,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "What This Proves",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Technical Skills",
          items: [
          "Component architecture",
          "Hooks mastery",
          "Routing and data flow",
          "Performance awareness",
          ],
        },
        {
          title: "Professional Readiness",
          items: [
          "End-to-end ownership",
          "Real-world thinking",
          "Debugging confidence",
          "Portfolio-ready output",
          ],
        },
      ],
    },
  },

  {
    id: 227,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "API Service Module",
    type: "code-plus",
    content: {
      title: "Separate Data Layer",
      points: [
        "Keep fetch logic in one place",
        "Reuse across components",
        "Easier to test",
      ],
      code: `// services/api.js
export async function getTasks() {
  const res = await fetch('/api/tasks');
  return res.json();
}
`,
      note: "Centralized API calls keep components clean.",
    },
  },

  {
    id: 228,
    moduleId: 16,
    moduleTitle: "Capstone Project",
    title: "Component Tree Sketch",
    type: "code-plus",
    content: {
      title: "Plan Your UI",
      points: [
        "Identify reusable pieces",
        "Clarify state ownership",
        "Guides routing and data flow",
      ],
      code: `App
├─ Nav
├─ Routes
│  ├─ Dashboard
│  │  ├─ Stats
│  │  └─ ActivityList
│  └─ Settings
`,
      note: "A simple tree helps plan components before coding.",
    },
  },
  // =========================
  // React Module 17: React Career Readiness
  // =========================

  {
    id: 229,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "Why Career Readiness Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Technical Skill Is Not Enough",
          items: [
          "Employers expect real-world readiness",
          "Projects must show decision-making",
          "Communication matters",
          "Code quality reflects professionalism",
          ],
        },
        {
          title: "What This Module Delivers",
          items: [
          "How to present React skills",
          "How to think like a React developer",
          "How to prepare for interviews",
          "How to grow after the course",
          ],
        },
      ],
    },
  },

  {
    id: 230,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "Portfolio README Example",
    type: "code-plus",
    content: {
      title: "Show Your Work",
      points: [
        "Explain features and architecture",
        "Include setup steps",
        "Add screenshots or demo link",
      ],
      code: `# TaskFlow
A React task manager with auth and real-time updates.

## Features
- CRUD tasks
- Protected routes
- Responsive UI

## Setup
npm install
npm run dev
`,
      note: "A strong README boosts your project credibility.",
    },
  },

  {
    id: 231,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "What Employers Expect from React Developers",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Expectations",
          items: [
          "Strong component thinking",
          "Hooks proficiency",
          "State management clarity",
          "Clean, readable code",
          ],
        },
        {
          title: "Beyond Code",
          items: [
          "Understanding trade-offs",
          "Debugging skills",
          "Ability to learn quickly",
          "Collaboration readiness",
          ],
        },
      ],
    },
  },

  {
    id: 232,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "Turning the Capstone into a Portfolio Project",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Recruiters Look For",
          items: [
          "Problem statement clarity",
          "Architecture decisions",
          "Feature completeness",
          "Code organization",
          ],
        },
        {
          title: "How to Present It",
          items: [
          "Clear README",
          "Screenshots or demo video",
          "Live deployment link",
          "Explanation of choices",
          ],
        },
      ],
    },
  },

  {
    id: 233,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "Explaining Your React Decisions",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Common Interview Questions",
          items: [
          "Why did you lift state here?",
          "Why use Context instead of props?",
          "Why this folder structure?",
          "How did you handle side effects?",
          ],
        },
        {
          title: "Strong Answers Show",
          items: [
          "Clear mental models",
          "Awareness of alternatives",
          "Intentional decisions",
          "Confidence in trade-offs",
          ],
        },
      ],
    },
  },

  {
    id: 234,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "React Interview Topics to Master",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Topics",
          items: [
          "JSX and rendering",
          "Props vs state",
          "Hooks rules",
          "useEffect behavior",
          ],
        },
        {
          title: "Advanced Topics",
          items: [
          "Performance optimization",
          "Context vs external state",
          "Controlled components",
          "Rendering patterns",
          ],
        },
      ],
    },
  },

  {
    id: 235,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "Common React Interview Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Memorizing without understanding",
          "Overusing advanced patterns",
          "Ignoring fundamentals",
          "Poor explanations",
          ],
        },
        {
          title: "How to Avoid Them",
          items: [
          "Explain with mental models",
          "Start with simple solutions",
          "Justify optimizations",
          "Practice explaining out loud",
          ],
        },
      ],
    },
  },

  {
    id: 236,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "Recommended Next Learning Steps",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Technical Growth",
          items: [
          "Advanced React patterns",
          "Testing with React Testing Library",
          "TypeScript with React",
          "State libraries (Redux, Zustand)",
          ],
        },
        {
          title: "Professional Growth",
          items: [
          "Code reviews",
          "Open-source contributions",
          "System design basics",
          "Algorithm fundamentals",
          ],
        },
      ],
    },
  },

  {
    id: 237,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "How This Course Positions You",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What You Can Do Now",
          items: [
          "Build real React applications",
          "Explain your code clearly",
          "Debug confidently",
          "Learn new React tools faster",
          ],
        },
        {
          title: "Your Developer Mindset",
          items: [
          "Component-first thinking",
          "Data-driven UI design",
          "Intentional state management",
          "Performance awareness",
          ],
        },
      ],
    },
  },

  {
    id: 238,
    moduleId: 17,
    moduleTitle: "React Career Readiness",
    title: "Final Takeaway",
    type: "infographic",
    content: {
      cards: [
        {
          title: "React Mastery Is a Journey",
          items: [
          "Fundamentals matter most",
          "Patterns evolve",
          "Tools change",
          "Mental models last",
          ],
        },
        {
          title: "You Are Ready to Move On",
          items: [
          "Confident with React",
          "Prepared for real projects",
          "Ready for algorithms & data structures",
          "Equipped for continuous growth",
          ],
        },
      ],
    },
  },
];
