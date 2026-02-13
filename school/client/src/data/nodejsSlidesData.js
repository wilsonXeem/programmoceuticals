export const nodejsSlidesData = [
  // =========================
  // Node.js & Express.js Module 1: Backend Fundamentals + First Node Program
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + First Node Program",
    title: "What Is the Backend?",
    type: "two-column",
    content: {
      left: {
        title: "Backend Explained",
        items: [
          "Runs on a server",
          "Handles application logic",
          "Processes requests",
          "Manages data and security",
        ],
      },
      right: {
        title: "Backend Is NOT",
        items: [
          "HTML or CSS",
          "Browser UI",
          "Client-side interactions",
          "Design or layout",
        ],
      },
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + First Node Program",
    title: "Why Backends Exist",
    type: "two-column",
    content: {
      left: {
        title: "Without a Backend",
        items: [
          "No shared data",
          "No authentication",
          "No persistence",
          "No access control",
        ],
      },
      right: {
        title: "With a Backend",
        items: [
          "Centralized logic",
          "Secure data access",
          "Multiple clients supported",
          "Scalable systems",
        ],
      },
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + First Node Program",
    title: "What Is Node.js?",
    type: "two-column",
    content: {
      left: {
        title: "Node.js Explained",
        items: [
          "JavaScript runtime",
          "Runs outside the browser",
          "Built on Chrome’s V8 engine",
          "Used for server-side apps",
        ],
      },
      right: {
        title: "Why Node.js Matters",
        items: [
          "One language full-stack",
          "Fast execution",
          "Huge ecosystem (npm)",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + First Node Program",
    title: "Your First Node.js Program",
    type: "code",
    content: {
      description:
        "This is the simplest possible Node.js program. It proves Node is installed and working.",
      code: `console.log("Hello from Node.js");`,
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + First Node Program",
    title: "What Happens When This Code Runs",
    type: "two-column",
    content: {
      left: {
        title: "Execution Flow",
        items: [
          "Node starts a runtime",
          "Reads the JavaScript file",
          "Executes line by line",
          "Prints output to terminal",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "No browser involved",
          "No HTML required",
          "JavaScript runs directly",
          "Terminal is the output",
        ],
      },
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + First Node Program",
    title: "Why This Simple Script Matters",
    type: "two-column",
    content: {
      left: {
        title: "What You Just Learned",
        items: [
          "Node executes JavaScript",
          "Backend code runs on servers",
          "Output goes to terminal",
          "JS is not browser-only",
        ],
      },
      right: {
        title: "Foundation for Everything",
        items: [
          "Servers start as scripts",
          "APIs are programs",
          "Express builds on this",
          "All backend logic lives here",
        ],
      },
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + First Node Program",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Expecting HTML output",
          "Trying to run Node in browser",
          "Confusing Node with Express",
          "Skipping the basics",
        ],
      },
      right: {
        title: "Correct Understanding",
        items: [
          "Node runs in terminal/server",
          "Express comes later",
          "This is backend execution",
          "Every server starts here",
        ],
      },
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Backend Fundamentals + First Node Program",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "JavaScript runtime internals",
          "How Node handles async work",
          "Event loop basics",
          "Why Node scales",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Node is installed",
          "First program executed",
          "Backend concept understood",
          "Ready for Node internals",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 2: Node.js Runtime, Event Loop & Async Behavior
  // =========================

  {
    id: 9,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "What Is the Node.js Runtime?",
    type: "two-column",
    content: {
      left: {
        title: "Runtime Explained",
        items: [
          "Environment where JavaScript executes",
          "Provides APIs outside the browser",
          "Handles files, network, timers",
          "Built on V8 + native bindings",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Enables server-side JS",
          "Non-blocking operations",
          "High concurrency",
          "Foundation for Express",
        ],
      },
    },
  },

  {
    id: 10,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "Single-Threaded Does NOT Mean Slow",
    type: "two-column",
    content: {
      left: {
        title: "Common Misconception",
        items: [
          "Single thread = one thing at a time",
          "Blocking equals bad performance",
          "Servers need many threads",
          "JS cannot scale",
        ],
      },
      right: {
        title: "Node Reality",
        items: [
          "Single main thread",
          "Non-blocking I/O",
          "Async delegation",
          "Concurrency via event loop",
        ],
      },
    },
  },

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "Synchronous (Blocking) Code",
    type: "code",
    content: {
      description:
        "This code blocks execution. Each line must finish before the next runs.",
      code: `console.log("Start");

function blockForSeconds(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {}
}

blockForSeconds(3);
console.log("End");`,
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "What Happened in the Blocking Example",
    type: "two-column",
    content: {
      left: {
        title: "Execution Behavior",
        items: [
          "Node starts execution",
          "Blocking loop runs",
          "Event loop is frozen",
          "Nothing else can run",
        ],
      },
      right: {
        title: "Why This Is Dangerous",
        items: [
          "Freezes the server",
          "Blocks all requests",
          "Kills concurrency",
          "Never do this in production",
        ],
      },
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "Asynchronous (Non-Blocking) Code",
    type: "code",
    content: {
      description:
        "This code schedules work and continues execution immediately.",
      code: `console.log("Start");

setTimeout(() => {
  console.log("Async task finished");
}, 3000);

console.log("End");`,
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "Why the Output Looks Strange (But Is Correct)",
    type: "two-column",
    content: {
      left: {
        title: "Observed Output Order",
        items: ["Start", "End", "Async task finished"],
      },
      right: {
        title: "Reason",
        items: [
          "setTimeout is non-blocking",
          "Callback is deferred",
          "Main thread keeps running",
          "Event loop schedules callback",
        ],
      },
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "What Is the Event Loop?",
    type: "two-column",
    content: {
      left: {
        title: "Event Loop Explained",
        items: [
          "Manages async callbacks",
          "Runs after main stack clears",
          "Processes queued tasks",
          "Keeps Node responsive",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Event loop is NOT magic",
          "It schedules work",
          "It does not parallelize JS",
          "Async ≠ multithreaded",
        ],
      },
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "Async Code with Callbacks",
    type: "code",
    content: {
      description: "Classic Node.js async pattern using callbacks.",
      code: `function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData((result) => {
  console.log(result);
});

console.log("Fetching...");`,
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "Why Async Is Critical for Servers",
    type: "two-column",
    content: {
      left: {
        title: "Without Async",
        items: [
          "Each request blocks others",
          "Server becomes unresponsive",
          "Poor scalability",
          "Bad user experience",
        ],
      },
      right: {
        title: "With Async",
        items: [
          "Many requests handled concurrently",
          "Efficient resource usage",
          "High throughput",
          "Scalable servers",
        ],
      },
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Writing blocking loops",
          "Assuming async runs in parallel",
          "Ignoring event loop behavior",
          "Using sync APIs in servers",
        ],
      },
      right: {
        title: "Correct Mental Model",
        items: [
          "One main thread",
          "Async work is scheduled",
          "Event loop manages callbacks",
          "Never block the thread",
        ],
      },
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "Node.js Runtime, Event Loop & Async Behavior",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Node.js modules",
          "require vs import",
          "File system basics",
          "Project structure",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "You understand async behavior",
          "You know why Node scales",
          "Event loop is clear",
          "Ready to structure real apps",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 3: Node.js Modules, Files & Project Structure
  // =========================

  {
    id: 20,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "Why Code Organization Matters",
    type: "two-column",
    content: {
      left: {
        title: "Unstructured Code",
        items: [
          "Hard to read",
          "Hard to maintain",
          "Hard to scale",
          "Easy to break",
        ],
      },
      right: {
        title: "Well-Structured Code",
        items: [
          "Clear responsibilities",
          "Reusable logic",
          "Easier debugging",
          "Professional codebase",
        ],
      },
    },
  },

  {
    id: 21,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "What Is a Module in Node.js?",
    type: "two-column",
    content: {
      left: {
        title: "Module Explained",
        items: [
          "A file with its own scope",
          "Encapsulates functionality",
          "Exports reusable logic",
          "Imported where needed",
        ],
      },
      right: {
        title: "Why Modules Exist",
        items: [
          "Avoid global variables",
          "Encourage reuse",
          "Improve readability",
          "Enable scaling",
        ],
      },
    },
  },

  {
    id: 22,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "Creating Your First Module",
    type: "code",
    content: {
      description: "A simple module that exports a function.",
      code: `// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;`,
    },
  },

  {
    id: 23,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "Importing a Module with require",
    type: "code",
    content: {
      description: "Using the exported function from another file.",
      code: `// index.js
const add = require("./math");

console.log(add(2, 3));`,
    },
  },

  {
    id: 24,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "How require() Works",
    type: "two-column",
    content: {
      left: {
        title: "What Node Does",
        items: [
          "Finds the file",
          "Executes it once",
          "Caches the result",
          "Returns module.exports",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Modules are singletons",
          "Code runs once per process",
          "Exports define public API",
          "Imports are references",
        ],
      },
    },
  },

  {
    id: 25,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "Exporting Multiple Values",
    type: "code",
    content: {
      description: "Exporting an object with multiple functions.",
      code: `// math.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};`,
    },
  },

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "Importing Multiple Exports",
    type: "code",
    content: {
      description: "Destructuring imported functions.",
      code: `// index.js
const { add, subtract } = require("./math");

console.log(add(5, 2));
console.log(subtract(5, 2));`,
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "Built-in Node.js Modules",
    type: "two-column",
    content: {
      left: {
        title: "Examples",
        items: ["fs (file system)", "path", "http", "os"],
      },
      right: {
        title: "Why They Matter",
        items: [
          "No external libraries needed",
          "High-performance native code",
          "Core backend capabilities",
          "Used heavily in servers",
        ],
      },
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "Reading a File with fs (Async)",
    type: "code",
    content: {
      description: "Reading a file without blocking the event loop.",
      code: `const fs = require("fs");

fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("Reading file...");`,
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "Basic Project Structure",
    type: "two-column",
    content: {
      left: {
        title: "Typical Files",
        items: ["index.js", "package.json", "src/", "node_modules/"],
      },
      right: {
        title: "Why Structure Matters",
        items: [
          "Predictable layout",
          "Team collaboration",
          "Scales with features",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Putting all code in one file",
          "Using global variables",
          "Misusing module.exports",
          "Blocking file operations",
        ],
      },
      right: {
        title: "Correct Approach",
        items: [
          "Split logic into modules",
          "Export intentionally",
          "Use async APIs",
          "Organize early",
        ],
      },
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "Node.js Modules, Files & Project Structure",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "npm and package.json",
          "Installing dependencies",
          "Scripts",
          "Project initialization",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "You understand modules",
          "You can split files",
          "You can import/export logic",
          "Ready for npm",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 4: npm, package.json & Dependency Management
  // =========================

  {
    id: 32,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "What Is npm?",
    type: "two-column",
    content: {
      left: {
        title: "npm Explained",
        items: [
          "Node Package Manager",
          "Manages third-party libraries",
          "Installs and updates dependencies",
          "Standard tooling for Node.js",
        ],
      },
      right: {
        title: "Why npm Matters",
        items: [
          "Avoid reinventing the wheel",
          "Use battle-tested libraries",
          "Manage versions safely",
          "Power modern Node apps",
        ],
      },
    },
  },

  {
    id: 33,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "Initializing a Node Project",
    type: "code",
    content: {
      description: "Creates a package.json file for your project.",
      code: `npm init -y`,
    },
  },

  {
    id: 34,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "What Is package.json?",
    type: "two-column",
    content: {
      left: {
        title: "package.json Contains",
        items: ["Project metadata", "Dependencies", "Scripts", "Entry point"],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Defines the project",
          "Reproducible installs",
          "Automation via scripts",
          "Required for deployment",
        ],
      },
    },
  },

  {
    id: 35,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "Installing Your First Dependency",
    type: "code",
    content: {
      description: "Installs Express and adds it to dependencies.",
      code: `npm install express`,
    },
  },

  {
    id: 36,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "dependencies vs devDependencies",
    type: "two-column",
    content: {
      left: {
        title: "dependencies",
        items: [
          "Required at runtime",
          "Used in production",
          "Core app libraries",
          "Example: express",
        ],
      },
      right: {
        title: "devDependencies",
        items: [
          "Used during development",
          "Not required in production",
          "Testing and tooling",
          "Example: nodemon",
        ],
      },
    },
  },

  {
    id: 37,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "Installing a Dev Dependency",
    type: "code",
    content: {
      description: "Installs nodemon for development-only usage.",
      code: `npm install --save-dev nodemon`,
    },
  },

  {
    id: 38,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "Understanding node_modules",
    type: "two-column",
    content: {
      left: {
        title: "node_modules Folder",
        items: [
          "Holds installed packages",
          "Can be very large",
          "Generated automatically",
          "Not committed to git",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Recreated via npm install",
          "package.json is the source of truth",
          "node_modules is disposable",
          "Never edit manually",
        ],
      },
    },
  },

  {
    id: 39,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "npm Scripts",
    type: "code",
    content: {
      description: "Custom scripts defined in package.json.",
      code: `{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}`,
    },
  },

  {
    id: 40,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "Running Scripts",
    type: "code",
    content: {
      description: "How to execute npm scripts.",
      code: `npm run dev`,
    },
  },

  {
    id: 41,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "Versioning Basics",
    type: "two-column",
    content: {
      left: {
        title: "Semantic Versioning",
        items: [
          "Major.Minor.Patch",
          "Breaking changes → major",
          "New features → minor",
          "Bug fixes → patch",
        ],
      },
      right: {
        title: "Why This Matters",
        items: [
          "Avoid breaking updates",
          "Predict compatibility",
          "Stable deployments",
          "Controlled upgrades",
        ],
      },
    },
  },

  {
    id: 42,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Committing node_modules",
          "Installing globally unnecessarily",
          "Ignoring package-lock.json",
          "Hardcoding script logic",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Commit package.json only",
          "Use local dependencies",
          "Respect lock files",
          "Use scripts consistently",
        ],
      },
    },
  },

  {
    id: 43,
    moduleId: 4,
    moduleTitle: "npm, package.json & Dependency Management",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "What Express.js is",
          "Why frameworks exist",
          "Your first Express server",
          "Handling HTTP requests",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Project initialized",
          "Dependencies installed",
          "Scripts configured",
          "Ready for Express",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 5: Introduction to Express.js + First Server
  // =========================

  {
    id: 44,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "Why Express.js Exists",
    type: "two-column",
    content: {
      left: {
        title: "Without Express (Pure Node)",
        items: [
          "Manual request parsing",
          "Complex routing logic",
          "Verbose boilerplate",
          "Hard to scale",
        ],
      },
      right: {
        title: "With Express",
        items: [
          "Simple routing",
          "Middleware support",
          "Cleaner APIs",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 45,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "What Is Express.js?",
    type: "two-column",
    content: {
      left: {
        title: "Express Explained",
        items: [
          "Minimal Node.js framework",
          "Built on top of http module",
          "Focused on APIs and servers",
          "Unopinionated",
        ],
      },
      right: {
        title: "What Express Is NOT",
        items: [
          "A database",
          "A frontend framework",
          "A replacement for Node",
          "A full-stack solution",
        ],
      },
    },
  },

  {
    id: 46,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "Creating Your First Express Server",
    type: "code",
    content: {
      description: "This is the smallest possible Express server.",
      code: `const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`,
    },
  },

  {
    id: 47,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "What This Code Does",
    type: "two-column",
    content: {
      left: {
        title: "Step-by-Step",
        items: [
          "Import Express",
          "Create app instance",
          "Start HTTP server",
          "Listen for requests",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "app is your server",
          "Node handles networking",
          "Express simplifies logic",
          "Server runs continuously",
        ],
      },
    },
  },

  {
    id: 48,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "Handling Your First Route",
    type: "code",
    content: {
      description: "Responding to a GET request.",
      code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`,
    },
  },

  {
    id: 49,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "Understanding req and res",
    type: "two-column",
    content: {
      left: {
        title: "req (Request)",
        items: [
          "Incoming request data",
          "Headers, params, body",
          "Client information",
          "HTTP metadata",
        ],
      },
      right: {
        title: "res (Response)",
        items: [
          "What you send back",
          "Status codes",
          "Response body",
          "Ends the request",
        ],
      },
    },
  },

  {
    id: 50,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "Why app.listen Is Important",
    type: "two-column",
    content: {
      left: {
        title: "listen() Does",
        items: [
          "Binds to a port",
          "Starts the server",
          "Accepts network traffic",
          "Keeps process alive",
        ],
      },
      right: {
        title: "Common Mistake",
        items: [
          "Forgetting to listen",
          "Wrong port usage",
          "Port already in use",
          "Server never starts",
        ],
      },
    },
  },

  {
    id: 51,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "Project Structure (Current)",
    type: "two-column",
    content: {
      left: {
        title: "Files So Far",
        items: ["index.js", "package.json", "node_modules/", ".gitignore"],
      },
      right: {
        title: "Why This Is OK (For Now)",
        items: [
          "Small project",
          "Easy to follow",
          "Will refactor later",
          "Learning-first approach",
        ],
      },
    },
  },

  {
    id: 52,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting res.send()",
          "Using console.log instead of response",
          "Restarting server manually",
          "Confusing routes and URLs",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Always send a response",
          "Use nodemon in dev",
          "Test routes in browser/Postman",
          "Understand HTTP methods",
        ],
      },
    },
  },

  {
    id: 53,
    moduleId: 5,
    moduleTitle: "Introduction to Express.js + First Server",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "HTTP methods",
          "Multiple routes",
          "RESTful endpoints",
          "Building real APIs",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Express server running",
          "First route created",
          "Request/response understood",
          "Ready for routing",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 6: Routing, HTTP Methods & REST Basics
  // =========================

  {
    id: 54,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "What Is Routing?",
    type: "two-column",
    content: {
      left: {
        title: "Routing Explained",
        items: [
          "Maps URLs to logic",
          "Handles different endpoints",
          "Separates concerns",
          "Core of every API",
        ],
      },
      right: {
        title: "Why Routing Matters",
        items: [
          "Organized APIs",
          "Predictable behavior",
          "Easier maintenance",
          "Scalable structure",
        ],
      },
    },
  },

  {
    id: 55,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "HTTP Methods Overview",
    type: "two-column",
    content: {
      left: {
        title: "Common Methods",
        items: [
          "GET → read data",
          "POST → create data",
          "PUT → update data",
          "DELETE → remove data",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Same URL, different actions",
          "Method defines intent",
          "REST relies on methods",
          "Predictable APIs",
        ],
      },
    },
  },

  {
    id: 56,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "GET Route Example",
    type: "code",
    content: {
      description: "A simple GET endpoint to fetch tasks.",
      code: `const express = require("express");
const app = express();

app.get("/tasks", (req, res) => {
  res.json({ message: "List of tasks" });
});

app.listen(3000);`,
    },
  },

  {
    id: 57,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "POST Route Example",
    type: "code",
    content: {
      description: "A POST endpoint to create a task.",
      code: `app.use(express.json());

app.post("/tasks", (req, res) => {
  const task = req.body;
  res.status(201).json({
    message: "Task created",
    task
  });
});`,
    },
  },

  {
    id: 58,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "Why express.json() Is Required",
    type: "two-column",
    content: {
      left: {
        title: "Without It",
        items: [
          "req.body is undefined",
          "Cannot read JSON payload",
          "POST requests fail",
          "Hard to debug",
        ],
      },
      right: {
        title: "With It",
        items: [
          "JSON parsed automatically",
          "req.body populated",
          "Cleaner route logic",
          "Required for APIs",
        ],
      },
    },
  },

  {
    id: 59,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "Route Parameters",
    type: "code",
    content: {
      description: "Dynamic routes using parameters.",
      code: `app.get("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  res.json({ taskId });
});`,
    },
  },

  {
    id: 60,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "Query Parameters",
    type: "code",
    content: {
      description: "Using query strings for filtering.",
      code: `app.get("/tasks", (req, res) => {
  const status = req.query.status;
  res.json({ filterBy: status });
});`,
    },
  },

  {
    id: 61,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "RESTful Thinking",
    type: "two-column",
    content: {
      left: {
        title: "REST Principles",
        items: [
          "Resources are nouns",
          "URLs represent data",
          "Methods represent actions",
          "Stateless requests",
        ],
      },
      right: {
        title: "Good REST Examples",
        items: ["GET /tasks", "POST /tasks", "GET /tasks/1", "DELETE /tasks/1"],
      },
    },
  },

  {
    id: 62,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using verbs in URLs",
          "Ignoring HTTP methods",
          "Not sending status codes",
          "Mixing concerns",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Let methods define actions",
          "Use proper status codes",
          "Keep routes simple",
          "Follow REST conventions",
        ],
      },
    },
  },

  {
    id: 63,
    moduleId: 6,
    moduleTitle: "Routing, HTTP Methods & REST Basics",
    title: "Project Progress",
    type: "two-column",
    content: {
      left: {
        title: "What We Have Now",
        items: [
          "Multiple routes",
          "GET and POST endpoints",
          "Dynamic routing",
          "JSON handling",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "Middleware",
          "Request lifecycle",
          "Reusable logic",
          "Cleaner architecture",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 7: Middleware & Request Lifecycle
  // =========================

  {
    id: 64,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "What Is Middleware?",
    type: "two-column",
    content: {
      left: {
        title: "Middleware Explained",
        items: [
          "Functions that run between request and response",
          "Have access to req, res, and next",
          "Can modify request or response",
          "Control request flow",
        ],
      },
      right: {
        title: "Why Middleware Matters",
        items: [
          "Code reuse",
          "Cleaner routes",
          "Centralized logic",
          "Foundation of Express apps",
        ],
      },
    },
  },

  {
    id: 65,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "The Request–Response Lifecycle",
    type: "two-column",
    content: {
      left: {
        title: "Lifecycle Steps",
        items: [
          "Client sends request",
          "Middleware runs (top to bottom)",
          "Route handler executes",
          "Response is sent",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Order matters",
          "Each step can stop the flow",
          "One response per request",
          "next() controls continuation",
        ],
      },
    },
  },

  {
    id: 66,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "A Simple Middleware Example",
    type: "code",
    content: {
      description: "A middleware that logs every request.",
      code: `const express = require("express");
const app = express();

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello Middleware");
});

app.listen(3000);`,
    },
  },

  {
    id: 67,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "What next() Does",
    type: "two-column",
    content: {
      left: {
        title: "Without next()",
        items: [
          "Request stops",
          "Route never runs",
          "Client hangs",
          "Buggy behavior",
        ],
      },
      right: {
        title: "With next()",
        items: [
          "Control passes forward",
          "Next middleware runs",
          "Route handler executes",
          "Response continues",
        ],
      },
    },
  },

  {
    id: 68,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "Global Middleware",
    type: "code",
    content: {
      description: "Runs for every incoming request.",
      code: `app.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});`,
    },
  },

  {
    id: 69,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "Route-Level Middleware",
    type: "code",
    content: {
      description: "Runs only for specific routes.",
      code: `const checkAuth = (req, res, next) => {
  const authorized = true;
  if (!authorized) {
    return res.status(401).send("Unauthorized");
  }
  next();
};

app.get("/tasks", checkAuth, (req, res) => {
  res.json({ tasks: [] });
});`,
    },
  },

  {
    id: 70,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "Built-in Middleware",
    type: "two-column",
    content: {
      left: {
        title: "Common Built-ins",
        items: [
          "express.json()",
          "express.urlencoded()",
          "express.static()",
          "Error handlers",
        ],
      },
      right: {
        title: "Why Use Them",
        items: [
          "Well-tested",
          "Optimized",
          "Standard behavior",
          "Less custom code",
        ],
      },
    },
  },

  {
    id: 71,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "Middleware Order Matters",
    type: "code",
    content: {
      description: "Order determines execution flow.",
      code: `app.use((req, res, next) => {
  console.log("First");
  next();
});

app.use((req, res, next) => {
  console.log("Second");
  next();
});

app.get("/", (req, res) => {
  res.send("Done");
});`,
    },
  },

  {
    id: 72,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "Error-Handling Middleware",
    type: "code",
    content: {
      description: "Special middleware for handling errors.",
      code: `app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Something went wrong" });
});`,
    },
  },

  {
    id: 73,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting next()",
          "Sending multiple responses",
          "Wrong middleware order",
          "Putting logic in routes",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Always control flow",
          "One response per request",
          "Design middleware intentionally",
          "Keep routes thin",
        ],
      },
    },
  },

  {
    id: 74,
    moduleId: 7,
    moduleTitle: "Middleware & Request Lifecycle",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Separating routes",
          "Controllers",
          "Cleaner folder structure",
          "Scalable architecture",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "You understand middleware",
          "You control request flow",
          "You can reuse logic",
          "Ready to scale structure",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 8: Controllers, Routers & Clean Architecture
  // =========================

  {
    id: 75,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "Why We Need Structure",
    type: "two-column",
    content: {
      left: {
        title: "Flat Files Problem",
        items: [
          "Everything in index.js",
          "Hard to read",
          "Hard to test",
          "Does not scale",
        ],
      },
      right: {
        title: "Structured Code Benefits",
        items: [
          "Clear responsibilities",
          "Easier collaboration",
          "Scalable architecture",
          "Professional codebase",
        ],
      },
    },
  },

  {
    id: 76,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "What Is a Router?",
    type: "two-column",
    content: {
      left: {
        title: "Router Explained",
        items: [
          "Mini Express app",
          "Groups related routes",
          "Keeps main file clean",
          "Reusable",
        ],
      },
      right: {
        title: "Why Routers Matter",
        items: [
          "Feature-based organization",
          "Cleaner entry point",
          "Easier maintenance",
          "Better readability",
        ],
      },
    },
  },

  {
    id: 77,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "Creating a Task Router",
    type: "code",
    content: {
      description: "Router dedicated to task-related routes.",
      code: `// routes/taskRoutes.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "All tasks" });
});

module.exports = router;`,
    },
  },

  {
    id: 78,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "Using the Router in the App",
    type: "code",
    content: {
      description: "Mounting the router in the main app file.",
      code: `// index.js
const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(3000);`,
    },
  },

  {
    id: 79,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "What Is a Controller?",
    type: "two-column",
    content: {
      left: {
        title: "Controller Explained",
        items: [
          "Holds business logic",
          "Handles request processing",
          "Calls services or models",
          "Returns responses",
        ],
      },
      right: {
        title: "What Controllers Are NOT",
        items: [
          "HTTP servers",
          "Database connections",
          "Route definitions",
          "Middleware",
        ],
      },
    },
  },

  {
    id: 80,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "Extracting a Controller",
    type: "code",
    content: {
      description: "Moving logic out of routes.",
      code: `// controllers/taskController.js
const getTasks = (req, res) => {
  res.json({ message: "All tasks from controller" });
};

module.exports = {
  getTasks
};`,
    },
  },

  {
    id: 81,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "Connecting Controller to Router",
    type: "code",
    content: {
      description: "Router delegates logic to controller.",
      code: `// routes/taskRoutes.js
const express = require("express");
const { getTasks } = require("../controllers/taskController");

const router = express.Router();

router.get("/", getTasks);

module.exports = router;`,
    },
  },

  {
    id: 82,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "Updated Project Structure",
    type: "two-column",
    content: {
      left: {
        title: "Current Structure",
        items: ["index.js", "routes/", "controllers/", "package.json"],
      },
      right: {
        title: "Why This Scales",
        items: [
          "Feature separation",
          "Cleaner files",
          "Testable logic",
          "Easy growth",
        ],
      },
    },
  },

  {
    id: 83,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "Thin Routes, Fat Controllers",
    type: "two-column",
    content: {
      left: {
        title: "Best Practice",
        items: [
          "Routes only map URLs",
          "Controllers hold logic",
          "Easy to test controllers",
          "Reusable logic",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Cleaner code",
          "Less duplication",
          "Easier debugging",
          "Professional structure",
        ],
      },
    },
  },

  {
    id: 84,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Putting logic in routes",
          "Overusing index.js",
          "Deep nesting",
          "Skipping structure early",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Separate concerns",
          "Use routers and controllers",
          "Keep files small",
          "Refactor early",
        ],
      },
    },
  },

  {
    id: 85,
    moduleId: 8,
    moduleTitle: "Controllers, Routers & Clean Architecture",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Data storage",
          "In-memory data",
          "CRUD operations",
          "State handling",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Clean architecture in place",
          "Controllers extracted",
          "Routes organized",
          "Ready for data",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 9: In-Memory Data & CRUD Operations
  // =========================

  {
    id: 86,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "Why We Start with In-Memory Data",
    type: "two-column",
    content: {
      left: {
        title: "Beginner Advantage",
        items: [
          "No database setup required",
          "Focus on API logic",
          "Immediate feedback",
          "Easier debugging",
        ],
      },
      right: {
        title: "Important Limitation",
        items: [
          "Data resets on restart",
          "Not for production",
          "Single-process only",
          "Learning tool",
        ],
      },
    },
  },

  {
    id: 87,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "What CRUD Means",
    type: "two-column",
    content: {
      left: {
        title: "CRUD Explained",
        items: ["Create", "Read", "Update", "Delete"],
      },
      right: {
        title: "API Mapping",
        items: [
          "POST → Create",
          "GET → Read",
          "PUT/PATCH → Update",
          "DELETE → Delete",
        ],
      },
    },
  },

  {
    id: 88,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "Creating an In-Memory Store",
    type: "code",
    content: {
      description: "A simple in-memory array to store tasks.",
      code: `// data/tasks.js
let tasks = [];

module.exports = tasks;`,
    },
  },

  {
    id: 89,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "Creating a Task (POST)",
    type: "code",
    content: {
      description: "Add a new task to memory.",
      code: `// controllers/taskController.js
const tasks = require("../data/tasks");

const createTask = (req, res) => {
  const task = {
    id: Date.now().toString(),
    title: req.body.title,
    completed: false
  };

  tasks.push(task);

  res.status(201).json(task);
};

module.exports = {
  createTask
};`,
    },
  },

  {
    id: 90,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "Reading All Tasks (GET)",
    type: "code",
    content: {
      description: "Fetch all stored tasks.",
      code: `const tasks = require("../data/tasks");

const getTasks = (req, res) => {
  res.json(tasks);
};

module.exports = {
  getTasks
};`,
    },
  },

  {
    id: 91,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "Updating a Task (PUT)",
    type: "code",
    content: {
      description: "Update a task by ID.",
      code: `const updateTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
};`,
    },
  },

  {
    id: 92,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "Deleting a Task (DELETE)",
    type: "code",
    content: {
      description: "Remove a task from memory.",
      code: `const deleteTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);
  res.status(204).send();
};`,
    },
  },

  {
    id: 93,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "Wiring Routes to Controllers",
    type: "code",
    content: {
      description: "Connecting CRUD handlers to routes.",
      code: `// routes/taskRoutes.js
const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;`,
    },
  },

  {
    id: 94,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "Testing CRUD Endpoints",
    type: "two-column",
    content: {
      left: {
        title: "How to Test",
        items: [
          "Use Postman or Insomnia",
          "Send JSON payloads",
          "Check status codes",
          "Verify responses",
        ],
      },
      right: {
        title: "What to Observe",
        items: [
          "Data persists during runtime",
          "IDs are unique",
          "Errors return correctly",
          "State changes correctly",
        ],
      },
    },
  },

  {
    id: 95,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting express.json()",
          "Not handling missing IDs",
          "Mutating wrong objects",
          "Assuming persistence",
        ],
      },
      right: {
        title: "Correct Understanding",
        items: [
          "Memory resets on restart",
          "Always validate input",
          "Handle edge cases",
          "Databases come next",
        ],
      },
    },
  },

  {
    id: 96,
    moduleId: 9,
    moduleTitle: "In-Memory Data & CRUD Operations",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Connecting real databases",
          "MongoDB introduction",
          "Persistence",
          "Production data handling",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Full CRUD API working",
          "Controllers managing state",
          "Routes fully wired",
          "Ready for databases",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 10: Connecting a Database (MongoDB)
  // =========================

  {
    id: 97,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Why We Need a Real Database",
    type: "two-column",
    content: {
      left: {
        title: "Problems with In-Memory Data",
        items: [
          "Data is lost on restart",
          "No multi-user safety",
          "No querying power",
          "Not production-ready",
        ],
      },
      right: {
        title: "What Databases Solve",
        items: [
          "Persistent storage",
          "Concurrent access",
          "Querying and indexing",
          "Reliable production systems",
        ],
      },
    },
  },

  {
    id: 98,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Why MongoDB for This Course",
    type: "two-column",
    content: {
      left: {
        title: "MongoDB Characteristics",
        items: [
          "Document-based database",
          "JSON-like data (BSON)",
          "Schema flexibility",
          "Widely used with Node.js",
        ],
      },
      right: {
        title: "Learning Advantage",
        items: [
          "Matches JavaScript objects",
          "Minimal friction for beginners",
          "Easy local setup",
          "Concepts transfer to other DBs",
        ],
      },
    },
  },

  {
    id: 99,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Installing MongoDB Driver",
    type: "code",
    content: {
      description: "Install Mongoose (MongoDB ODM for Node.js).",
      code: `npm install mongoose`,
    },
  },

  {
    id: 100,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Why Use Mongoose?",
    type: "two-column",
    content: {
      left: {
        title: "Without an ODM",
        items: [
          "Manual query handling",
          "No schema enforcement",
          "Verbose code",
          "Harder validation",
        ],
      },
      right: {
        title: "With Mongoose",
        items: [
          "Schemas and models",
          "Built-in validation",
          "Cleaner queries",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 101,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Connecting to MongoDB",
    type: "code",
    content: {
      description: "Establishing a database connection.",
      code: `// config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/task-manager");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection failed", error);
    process.exit(1);
  }
};

module.exports = connectDB;`,
    },
  },

  {
    id: 102,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Using the Database Connection",
    type: "code",
    content: {
      description: "Connecting MongoDB before starting the server.",
      code: `// index.js
const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
    },
  },

  {
    id: 103,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Defining a Task Schema",
    type: "code",
    content: {
      description: "Schema defines structure and rules for data.",
      code: `// models/Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);`,
    },
  },

  {
    id: 104,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Replacing In-Memory Logic with DB Logic",
    type: "two-column",
    content: {
      left: {
        title: "Before",
        items: [
          "Array-based storage",
          "Manual ID handling",
          "Lost data on restart",
          "Limited querying",
        ],
      },
      right: {
        title: "After",
        items: [
          "Persistent documents",
          "Auto-generated IDs",
          "Query support",
          "Production-ready",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Creating a Task with MongoDB",
    type: "code",
    content: {
      description: "Saving a task to MongoDB.",
      code: `// controllers/taskController.js
const Task = require("../models/Task");

const createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title
  });

  res.status(201).json(task);
};

module.exports = {
  createTask
};`,
    },
  },

  {
    id: 106,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Reading Tasks from MongoDB",
    type: "code",
    content: {
      description: "Fetching tasks from the database.",
      code: `const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};`,
    },
  },

  {
    id: 107,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Hardcoding DB credentials",
          "Starting server without DB",
          "Skipping async/await",
          "Ignoring connection errors",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use environment variables",
          "Fail fast on DB errors",
          "Handle async properly",
          "Log connection status",
        ],
      },
    },
  },

  {
    id: 108,
    moduleId: 10,
    moduleTitle: "Connecting a Database (MongoDB)",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Error handling",
          "Async error patterns",
          "Centralized error middleware",
          "Safer APIs",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Database connected",
          "Models defined",
          "CRUD persisted",
          "API now production-capable",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 11: Error Handling & Async Safety
  // =========================

  {
    id: 109,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Why Error Handling Is Mandatory",
    type: "two-column",
    content: {
      left: {
        title: "Without Proper Errors",
        items: [
          "Server crashes unexpectedly",
          "Clients get no response",
          "Debugging becomes guesswork",
          "Security details may leak",
        ],
      },
      right: {
        title: "With Proper Errors",
        items: [
          "Stable APIs",
          "Consistent responses",
          "Easier debugging",
          "Production readiness",
        ],
      },
    },
  },

  {
    id: 110,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Synchronous vs Asynchronous Errors",
    type: "two-column",
    content: {
      left: {
        title: "Synchronous Errors",
        items: [
          "Thrown immediately",
          "Caught by try/catch",
          "Occur in same call stack",
          "Easy to detect",
        ],
      },
      right: {
        title: "Asynchronous Errors",
        items: [
          "Occur in promises",
          "Not caught by normal try/catch",
          "Can crash the app",
          "Require special handling",
        ],
      },
    },
  },

  {
    id: 111,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "The Problem with Async Route Errors",
    type: "code",
    content: {
      description: "This error will NOT be handled by Express automatically.",
      code: `app.get("/crash", async (req, res) => {
  throw new Error("Something went wrong");
});`,
    },
  },

  {
    id: 112,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Why This Crashes the App",
    type: "two-column",
    content: {
      left: {
        title: "What Happens",
        items: [
          "Promise rejects",
          "No error middleware catches it",
          "Unhandled rejection occurs",
          "Process may crash",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Express does not auto-catch async errors",
          "You must forward errors manually",
          "Async safety is your responsibility",
          "This is a common production bug",
        ],
      },
    },
  },

  {
    id: 113,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Async Error Wrapper Pattern",
    type: "code",
    content: {
      description: "A reusable wrapper to catch async errors safely.",
      code: `// utils/asyncHandler.js
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = asyncHandler;`,
    },
  },

  {
    id: 114,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Using the Async Handler",
    type: "code",
    content: {
      description: "Wrap async controllers to forward errors.",
      code: `const asyncHandler = require("../utils/asyncHandler");

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});`,
    },
  },

  {
    id: 115,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Centralized Error Middleware",
    type: "code",
    content: {
      description: "Single place to handle all application errors.",
      code: `// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error"
  });
};

module.exports = errorHandler;`,
    },
  },

  {
    id: 116,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Registering the Error Middleware",
    type: "code",
    content: {
      description: "Error middleware must be registered LAST.",
      code: `const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);`,
    },
  },

  {
    id: 117,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Creating Custom Errors",
    type: "code",
    content: {
      description: "Custom error class for consistent errors.",
      code: `// utils/AppError.js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = AppError;`,
    },
  },

  {
    id: 118,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Using Custom Errors in Controllers",
    type: "code",
    content: {
      description: "Throw meaningful errors with status codes.",
      code: `const AppError = require("../utils/AppError");

const getTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    throw new AppError("Task not found", 404);
  }

  res.json(task);
});`,
    },
  },

  {
    id: 119,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "No error middleware",
          "Throwing raw errors",
          "Unhandled promise rejections",
          "Returning stack traces to clients",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Centralize error handling",
          "Use async wrappers",
          "Hide internal details",
          "Return consistent responses",
        ],
      },
    },
  },

  {
    id: 120,
    moduleId: 11,
    moduleTitle: "Error Handling & Async Safety",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Input validation",
          "Request sanitization",
          "Data integrity",
          "Safer APIs",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Async-safe controllers",
          "Centralized error handling",
          "Production-ready error flow",
          "Ready for validation",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 12: Input Validation & Data Integrity
  // =========================

  {
    id: 121,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "Why Validation Is Non-Negotiable",
    type: "two-column",
    content: {
      left: {
        title: "Without Validation",
        items: [
          "Invalid data enters the system",
          "Unexpected crashes occur",
          "Security vulnerabilities appear",
          "Data becomes unreliable",
        ],
      },
      right: {
        title: "With Validation",
        items: [
          "Predictable API behavior",
          "Clear client feedback",
          "Stronger security posture",
          "Reliable stored data",
        ],
      },
    },
  },

  {
    id: 122,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "What Should Be Validated",
    type: "two-column",
    content: {
      left: {
        title: "Validation Targets",
        items: ["Request body", "URL parameters", "Query strings", "Headers"],
      },
      right: {
        title: "Validation Goals",
        items: [
          "Correct data types",
          "Required fields present",
          "Acceptable value ranges",
          "Expected formats",
        ],
      },
    },
  },

  {
    id: 123,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "Installing a Validation Library",
    type: "code",
    content: {
      description: "Install express-validator for request validation.",
      code: `npm install express-validator`,
    },
  },

  {
    id: 124,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "Validating Request Body (Example)",
    type: "code",
    content: {
      description: "Validate incoming task creation requests.",
      code: `// routes/taskRoutes.js
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters")
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createTask
);`,
    },
  },

  {
    id: 125,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "Why Validation Runs Before Controllers",
    type: "two-column",
    content: {
      left: {
        title: "Execution Order",
        items: [
          "Request arrives",
          "Validation middleware runs",
          "Errors returned early",
          "Controller runs only if valid",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Fail fast",
          "Protect business logic",
          "Reduce unnecessary DB calls",
          "Cleaner controllers",
        ],
      },
    },
  },

  {
    id: 126,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "Reusing Validation Logic",
    type: "code",
    content: {
      description: "Extract reusable validators.",
      code: `// validators/taskValidators.js
const { body } = require("express-validator");

exports.createTaskValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters")
];`,
    },
  },

  {
    id: 127,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "Cleaner Route with Validator",
    type: "code",
    content: {
      description: "Using extracted validation middleware.",
      code: `const { createTaskValidator } = require("../validators/taskValidators");

router.post(
  "/",
  createTaskValidator,
  validateRequest,
  createTask
);`,
    },
  },

  {
    id: 128,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "Central Validation Error Handler",
    type: "code",
    content: {
      description: "Middleware to handle validation errors consistently.",
      code: `// middleware/validateRequest.js
const { validationResult } = require("express-validator");

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      errors: errors.array()
    });
  }
  next();
};

module.exports = validateRequest;`,
    },
  },

  {
    id: 129,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "Validation vs Sanitization",
    type: "two-column",
    content: {
      left: {
        title: "Validation",
        items: [
          "Checks correctness",
          "Rejects bad data",
          "Enforces rules",
          "Stops execution",
        ],
      },
      right: {
        title: "Sanitization",
        items: [
          "Cleans input",
          "Normalizes data",
          "Removes unwanted chars",
          "Prepares data",
        ],
      },
    },
  },

  {
    id: 130,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Trusting client input",
          "Validating inside controllers",
          "Inconsistent error responses",
          "Skipping validation on updates",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Validate at API boundaries",
          "Use middleware",
          "Centralize validation errors",
          "Validate all write operations",
        ],
      },
    },
  },

  {
    id: 131,
    moduleId: 12,
    moduleTitle: "Input Validation & Data Integrity",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Authentication",
          "User identity",
          "JWT basics",
          "Protecting routes",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Input validation in place",
          "Cleaner controllers",
          "Safer API surface",
          "Ready for authentication",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 13: Authentication & JWT Basics
  // =========================

  {
    id: 132,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "Why Authentication Exists",
    type: "two-column",
    content: {
      left: {
        title: "The Core Problem",
        items: [
          "Not all users are the same",
          "Some data must be protected",
          "Actions must be attributable",
          "Systems need identity",
        ],
      },
      right: {
        title: "What Authentication Solves",
        items: [
          "User identification",
          "Access control",
          "Secure operations",
          "Auditability",
        ],
      },
    },
  },

  {
    id: 133,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "Authentication vs Authorization",
    type: "two-column",
    content: {
      left: {
        title: "Authentication",
        items: [
          "Who are you?",
          "Identity verification",
          "Happens at login",
          "Credential-based",
        ],
      },
      right: {
        title: "Authorization",
        items: [
          "What can you do?",
          "Permission checks",
          "Happens after auth",
          "Role or rule-based",
        ],
      },
    },
  },

  {
    id: 134,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "Why JWT Is Used in APIs",
    type: "two-column",
    content: {
      left: {
        title: "Problems with Sessions",
        items: [
          "Server-side state",
          "Hard to scale horizontally",
          "Tight coupling",
          "Not ideal for APIs",
        ],
      },
      right: {
        title: "JWT Advantages",
        items: [
          "Stateless authentication",
          "Scales easily",
          "Client-managed tokens",
          "Perfect for APIs",
        ],
      },
    },
  },

  {
    id: 135,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "Installing Auth Dependencies",
    type: "code",
    content: {
      description: "Install bcrypt for hashing and jsonwebtoken for tokens.",
      code: `npm install bcryptjs jsonwebtoken`,
    },
  },

  {
    id: 136,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "Creating a User Model",
    type: "code",
    content: {
      description: "User schema with password hashing responsibility.",
      code: `// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);`,
    },
  },

  {
    id: 137,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "Hashing Passwords",
    type: "code",
    content: {
      description: "Never store plain-text passwords.",
      code: `const bcrypt = require("bcryptjs");

const hashedPassword = await bcrypt.hash(password, 10);`,
    },
  },

  {
    id: 138,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "User Registration (Signup)",
    type: "code",
    content: {
      description: "Create a new user securely.",
      code: `const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashedPassword
  });

  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(201).json({ token });
};`,
    },
  },

  {
    id: 139,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "User Login",
    type: "code",
    content: {
      description: "Authenticate user and issue token.",
      code: `const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
};`,
    },
  },

  {
    id: 140,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "Protecting Routes with JWT",
    type: "code",
    content: {
      description: "Middleware to verify tokens.",
      code: `// middleware/auth.js
const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = protect;`,
    },
  },

  {
    id: 141,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "Using Protected Routes",
    type: "code",
    content: {
      description: "Only authenticated users can access this route.",
      code: `router.get("/private", protect, (req, res) => {
  res.json({ message: "Protected data" });
});`,
    },
  },

  {
    id: 142,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Storing plain-text passwords",
          "Hardcoding JWT secrets",
          "Not expiring tokens",
          "Trusting client tokens blindly",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Always hash passwords",
          "Use environment variables",
          "Expire tokens",
          "Verify tokens server-side",
        ],
      },
    },
  },

  {
    id: 143,
    moduleId: 13,
    moduleTitle: "Authentication & JWT Basics",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Authorization & roles",
          "Admin vs user access",
          "Policy-based control",
          "Secure APIs",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "User auth implemented",
          "JWT flow understood",
          "Protected routes working",
          "Ready for authorization",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 14: Authorization, Roles & Access Control
  // =========================

  {
    id: 144,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Why Authorization Is Different from Authentication",
    type: "two-column",
    content: {
      left: {
        title: "Authentication",
        items: [
          "Confirms user identity",
          "Answers: who are you?",
          "Usually done once (login)",
          "Issues a token",
        ],
      },
      right: {
        title: "Authorization",
        items: [
          "Controls permissions",
          "Answers: what can you do?",
          "Checked on every request",
          "Prevents privilege abuse",
        ],
      },
    },
  },

  {
    id: 145,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Why Roles Are Needed",
    type: "two-column",
    content: {
      left: {
        title: "Without Roles",
        items: [
          "All users have same power",
          "Sensitive actions exposed",
          "Hard to scale permissions",
          "Security risks",
        ],
      },
      right: {
        title: "With Roles",
        items: [
          "Clear permission boundaries",
          "Least-privilege access",
          "Easier policy management",
          "Enterprise-ready systems",
        ],
      },
    },
  },

  {
    id: 146,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Adding Roles to the User Model",
    type: "code",
    content: {
      description: "Extend the User schema with a role field.",
      code: `// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

module.exports = mongoose.model("User", userSchema);`,
    },
  },

  {
    id: 147,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Embedding Role into JWT",
    type: "code",
    content: {
      description: "Include role data when issuing tokens.",
      code: `const token = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);`,
    },
  },

  {
    id: 148,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Accessing Role from Token",
    type: "code",
    content: {
      description: "Decode role during authentication.",
      code: `const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.userId = decoded.userId;
req.role = decoded.role;
next();`,
    },
  },

  {
    id: 149,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Role-Based Authorization Middleware",
    type: "code",
    content: {
      description: "Middleware to restrict access by role.",
      code: `// middleware/authorize.js
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

module.exports = authorize;`,
    },
  },

  {
    id: 150,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Protecting an Admin-Only Route",
    type: "code",
    content: {
      description: "Only admins can access this endpoint.",
      code: `const protect = require("../middleware/auth");
const authorize = require("../middleware/authorize");

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteTask
);`,
    },
  },

  {
    id: 151,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Authorization Flow Summary",
    type: "two-column",
    content: {
      left: {
        title: "Flow Order",
        items: [
          "Request arrives",
          "Authentication middleware runs",
          "Authorization middleware runs",
          "Controller executes",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Auth always comes first",
          "Authorization is layered",
          "Middleware enforces policy",
          "Controllers stay clean",
        ],
      },
    },
  },

  {
    id: 152,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Security Best Practices for Roles",
    type: "two-column",
    content: {
      left: {
        title: "Best Practices",
        items: [
          "Default to least privilege",
          "Never trust client role",
          "Validate role server-side",
          "Log denied access attempts",
        ],
      },
      right: {
        title: "Production Insight",
        items: [
          "Roles may evolve",
          "Use enums or constants",
          "Avoid role sprawl",
          "Test permission boundaries",
        ],
      },
    },
  },

  {
    id: 153,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Skipping authorization",
          "Hardcoding role checks",
          "Trusting client role input",
          "Mixing auth logic into controllers",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use middleware consistently",
          "Centralize access rules",
          "Keep controllers business-only",
          "Test all role paths",
        ],
      },
    },
  },

  {
    id: 154,
    moduleId: 14,
    moduleTitle: "Authorization, Roles & Access Control",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Environment variables",
          "Configuration management",
          "Secrets handling",
          "Production safety",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Role-based access implemented",
          "Admin-only routes secured",
          "Authorization layered correctly",
          "Ready for configuration",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 15: Environment Variables & Configuration Management
  // =========================

  {
    id: 155,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "Why Configuration Management Matters",
    type: "two-column",
    content: {
      left: {
        title: "Hardcoded Configuration Problems",
        items: [
          "Secrets exposed in code",
          "Different environments conflict",
          "Unsafe production deployments",
          "Difficult to rotate credentials",
        ],
      },
      right: {
        title: "Proper Configuration Benefits",
        items: [
          "Secrets kept out of source code",
          "Environment-specific behavior",
          "Safer deployments",
          "Industry best practice",
        ],
      },
    },
  },

  {
    id: 156,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "What Are Environment Variables?",
    type: "two-column",
    content: {
      left: {
        title: "Environment Variables",
        items: [
          "Key–value pairs",
          "Provided by the OS",
          "Accessible via process.env",
          "Different per environment",
        ],
      },
      right: {
        title: "Common Uses",
        items: [
          "Database connection strings",
          "JWT secrets",
          "Port numbers",
          "Third-party API keys",
        ],
      },
    },
  },

  {
    id: 157,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "Installing dotenv",
    type: "code",
    content: {
      description:
        "dotenv loads environment variables from a file into process.env.",
      code: `npm install dotenv`,
    },
  },

  {
    id: 158,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "Creating a .env File",
    type: "code",
    content: {
      description: "Define environment-specific configuration.",
      code: `PORT=3000
MONGO_URI=mongodb://localhost:27017/task-manager
JWT_SECRET=supersecretkey`,
    },
  },

  {
    id: 159,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "Loading Environment Variables",
    type: "code",
    content: {
      description: "Load variables at application startup.",
      code: `require("dotenv").config();`,
    },
  },

  {
    id: 160,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "Using Environment Variables in Code",
    type: "code",
    content: {
      description: "Access configuration via process.env.",
      code: `const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
    },
  },

  {
    id: 161,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "Securing Sensitive Files",
    type: "two-column",
    content: {
      left: {
        title: "What NOT to Commit",
        items: [".env file", "Private keys", "Secrets", "Credentials"],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use .gitignore",
          "Provide .env.example",
          "Rotate leaked secrets",
          "Use secret managers in prod",
        ],
      },
    },
  },

  {
    id: 162,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "Environment-Specific Behavior",
    type: "two-column",
    content: {
      left: {
        title: "NODE_ENV Usage",
        items: ["development", "test", "production", "Controls behavior"],
      },
      right: {
        title: "Examples",
        items: [
          "Verbose logging in dev",
          "Strict security in prod",
          "Different databases",
          "Conditional features",
        ],
      },
    },
  },

  {
    id: 163,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Hardcoding secrets",
          "Committing .env files",
          "Missing fallback values",
          "Loading dotenv too late",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Always use process.env",
          "Fail fast if config missing",
          "Load config early",
          "Separate environments clearly",
        ],
      },
    },
  },

  {
    id: 164,
    moduleId: 15,
    moduleTitle: "Environment Variables & Configuration Management",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Security middleware",
          "HTTP headers protection",
          "Rate limiting",
          "API hardening",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Secrets externalized",
          "Config is environment-safe",
          "Ready for production practices",
          "Security layer next",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 16: Security Middleware & API Hardening
  // =========================

  {
    id: 165,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Why API Security Matters",
    type: "two-column",
    content: {
      left: {
        title: "Unsecured APIs",
        items: [
          "Easy attack surface",
          "Data leaks",
          "Service abuse",
          "Regulatory risk",
        ],
      },
      right: {
        title: "Secured APIs",
        items: [
          "Controlled access",
          "Reduced attack vectors",
          "Predictable behavior",
          "Production readiness",
        ],
      },
    },
  },

  {
    id: 166,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Common API Threats",
    type: "two-column",
    content: {
      left: {
        title: "Threats",
        items: [
          "Brute-force attacks",
          "Excessive requests",
          "Malicious payloads",
          "Information disclosure",
        ],
      },
      right: {
        title: "Mitigation Strategy",
        items: [
          "Rate limiting",
          "Request sanitization",
          "Secure headers",
          "Controlled error responses",
        ],
      },
    },
  },

  {
    id: 167,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Installing Security Middleware",
    type: "code",
    content: {
      description: "Install commonly used security packages.",
      code: `npm install helmet express-rate-limit cors`,
    },
  },

  {
    id: 168,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Using Helmet for Secure Headers",
    type: "code",
    content: {
      description:
        "Helmet sets HTTP headers to protect against common attacks.",
      code: `const helmet = require("helmet");

app.use(helmet());`,
    },
  },

  {
    id: 169,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Why Secure Headers Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Secure Headers",
        items: [
          "XSS vulnerabilities",
          "Clickjacking risks",
          "MIME sniffing",
          "Information leakage",
        ],
      },
      right: {
        title: "With Helmet",
        items: [
          "Headers set automatically",
          "Best-practice defaults",
          "Minimal configuration",
          "Immediate protection",
        ],
      },
    },
  },

  {
    id: 170,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Rate Limiting Requests",
    type: "code",
    content: {
      description: "Limit repeated requests from the same IP.",
      code: `const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);`,
    },
  },

  {
    id: 171,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Why Rate Limiting Is Critical",
    type: "two-column",
    content: {
      left: {
        title: "Without Rate Limiting",
        items: [
          "Brute-force attacks",
          "API abuse",
          "Server overload",
          "Denial of service",
        ],
      },
      right: {
        title: "With Rate Limiting",
        items: [
          "Controlled traffic",
          "Fair usage",
          "Improved availability",
          "Safer auth endpoints",
        ],
      },
    },
  },

  {
    id: 172,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "CORS: Cross-Origin Resource Sharing",
    type: "two-column",
    content: {
      left: {
        title: "What CORS Controls",
        items: [
          "Which origins can access API",
          "Allowed HTTP methods",
          "Allowed headers",
          "Credential sharing",
        ],
      },
      right: {
        title: "Why CORS Matters",
        items: [
          "Prevents unwanted access",
          "Browser-level protection",
          "Frontend-backend separation",
          "Security boundary",
        ],
      },
    },
  },

  {
    id: 173,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Configuring CORS",
    type: "code",
    content: {
      description: "Allow requests only from trusted origins.",
      code: `const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);`,
    },
  },

  {
    id: 174,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Error Message Hardening",
    type: "two-column",
    content: {
      left: {
        title: "Bad Practice",
        items: [
          "Exposing stack traces",
          "Leaking DB errors",
          "Verbose error messages",
          "Helpful hints to attackers",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Generic client messages",
          "Detailed server logs",
          "Consistent error format",
          "No internal leakage",
        ],
      },
    },
  },

  {
    id: 175,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Security Middleware Order",
    type: "two-column",
    content: {
      left: {
        title: "Recommended Order",
        items: ["Helmet", "Rate limiter", "CORS", "Routes"],
      },
      right: {
        title: "Why Order Matters",
        items: [
          "Early protection",
          "Consistent enforcement",
          "Reduced attack surface",
          "Predictable behavior",
        ],
      },
    },
  },

  {
    id: 176,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Skipping security in dev",
          "Allowing all CORS origins",
          "No rate limits on auth",
          "Verbose production errors",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Secure early",
          "Restrict access intentionally",
          "Protect sensitive endpoints",
          "Treat dev like prod",
        ],
      },
    },
  },

  {
    id: 177,
    moduleId: 16,
    moduleTitle: "Security Middleware & API Hardening",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Logging",
          "Monitoring",
          "Debugging production issues",
          "Operational visibility",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "API hardened",
          "Security middleware active",
          "Production risks reduced",
          "Ready for observability",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 17: Logging, Monitoring & Debugging
  // =========================

  {
    id: 178,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Why Logging Is Critical in Backend Systems",
    type: "two-column",
    content: {
      left: {
        title: "Without Logging",
        items: [
          "Errors appear without context",
          "Production issues are hard to trace",
          "No visibility into system behavior",
          "Debugging becomes guesswork",
        ],
      },
      right: {
        title: "With Proper Logging",
        items: [
          "Clear execution history",
          "Faster issue resolution",
          "Audit trails",
          "Operational confidence",
        ],
      },
    },
  },

  {
    id: 179,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "console.log Is Not Enough",
    type: "two-column",
    content: {
      left: {
        title: "console.log Limitations",
        items: [
          "No log levels",
          "Hard to filter logs",
          "Poor structure",
          "Not production-friendly",
        ],
      },
      right: {
        title: "Professional Logging",
        items: [
          "Log levels (info, warn, error)",
          "Structured JSON logs",
          "Centralized collection",
          "Production ready",
        ],
      },
    },
  },

  {
    id: 180,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Installing a Logging Library",
    type: "code",
    content: {
      description: "Winston is a popular production-grade logger.",
      code: `npm install winston`,
    },
  },

  {
    id: 181,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Creating a Logger",
    type: "code",
    content: {
      description: "Centralized logger configuration.",
      code: `// utils/logger.js
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

module.exports = logger;`,
    },
  },

  {
    id: 182,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Using Logger in the App",
    type: "code",
    content: {
      description: "Replace console.log with structured logs.",
      code: `const logger = require("./utils/logger");

logger.info("Server started");
logger.error("Something failed");`,
    },
  },

  {
    id: 183,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Logging HTTP Requests",
    type: "code",
    content: {
      description: "Log incoming requests via middleware.",
      code: `app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    time: new Date().toISOString()
  });
  next();
});`,
    },
  },

  {
    id: 184,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Logging Errors Centrally",
    type: "two-column",
    content: {
      left: {
        title: "Why Centralize Errors",
        items: [
          "Single source of truth",
          "Consistent formatting",
          "Easier alerting",
          "Cleaner controllers",
        ],
      },
      right: {
        title: "What to Log",
        items: [
          "Error message",
          "Stack trace (server only)",
          "Request context",
          "Timestamp",
        ],
      },
    },
  },

  {
    id: 185,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Enhancing Error Middleware with Logging",
    type: "code",
    content: {
      description: "Log errors before responding to client.",
      code: `const errorHandler = (err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    route: req.originalUrl
  });

  res.status(err.statusCode || 500).json({
    message: "Internal Server Error"
  });
};`,
    },
  },

  {
    id: 186,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Monitoring vs Logging",
    type: "two-column",
    content: {
      left: {
        title: "Logging",
        items: [
          "Event records",
          "Used for debugging",
          "Detailed context",
          "Reactive",
        ],
      },
      right: {
        title: "Monitoring",
        items: [
          "System health metrics",
          "Alerts and thresholds",
          "Performance tracking",
          "Proactive",
        ],
      },
    },
  },

  {
    id: 187,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "What Should Be Monitored",
    type: "two-column",
    content: {
      left: {
        title: "Key Metrics",
        items: [
          "Response time",
          "Error rate",
          "CPU and memory usage",
          "Uptime",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Detect outages early",
          "Prevent performance degradation",
          "Capacity planning",
          "SLA compliance",
        ],
      },
    },
  },

  {
    id: 188,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Debugging Production Issues",
    type: "two-column",
    content: {
      left: {
        title: "Bad Approach",
        items: [
          "Guessing the problem",
          "Adding console.logs blindly",
          "Restarting without insight",
          "Blaming infrastructure",
        ],
      },
      right: {
        title: "Correct Approach",
        items: [
          "Check logs first",
          "Reproduce issue locally",
          "Inspect recent deployments",
          "Use monitoring data",
        ],
      },
    },
  },

  {
    id: 189,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Logging too little",
          "Logging sensitive data",
          "No log levels",
          "Ignoring logs in prod",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Log meaningful events",
          "Mask sensitive fields",
          "Use structured logs",
          "Review logs regularly",
        ],
      },
    },
  },

  {
    id: 190,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Testing APIs",
          "Unit and integration tests",
          "Test-driven confidence",
          "Preventing regressions",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Observability in place",
          "Logs structured",
          "Errors traceable",
          "Ready for testing",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 17: Logging, Monitoring & Debugging
  // =========================

  {
    id: 178,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Why Logging Is Critical in Backend Systems",
    type: "two-column",
    content: {
      left: {
        title: "Without Logging",
        items: [
          "Errors appear without context",
          "Production issues are hard to trace",
          "No visibility into system behavior",
          "Debugging becomes guesswork",
        ],
      },
      right: {
        title: "With Proper Logging",
        items: [
          "Clear execution history",
          "Faster issue resolution",
          "Audit trails",
          "Operational confidence",
        ],
      },
    },
  },

  {
    id: 179,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "console.log Is Not Enough",
    type: "two-column",
    content: {
      left: {
        title: "console.log Limitations",
        items: [
          "No log levels",
          "Hard to filter logs",
          "Poor structure",
          "Not production-friendly",
        ],
      },
      right: {
        title: "Professional Logging",
        items: [
          "Log levels (info, warn, error)",
          "Structured JSON logs",
          "Centralized collection",
          "Production ready",
        ],
      },
    },
  },

  {
    id: 180,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Installing a Logging Library",
    type: "code",
    content: {
      description: "Winston is a popular production-grade logger.",
      code: `npm install winston`,
    },
  },

  {
    id: 181,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Creating a Logger",
    type: "code",
    content: {
      description: "Centralized logger configuration.",
      code: `// utils/logger.js
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

module.exports = logger;`,
    },
  },

  {
    id: 182,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Using Logger in the App",
    type: "code",
    content: {
      description: "Replace console.log with structured logs.",
      code: `const logger = require("./utils/logger");

logger.info("Server started");
logger.error("Something failed");`,
    },
  },

  {
    id: 183,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Logging HTTP Requests",
    type: "code",
    content: {
      description: "Log incoming requests via middleware.",
      code: `app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    time: new Date().toISOString()
  });
  next();
});`,
    },
  },

  {
    id: 184,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Logging Errors Centrally",
    type: "two-column",
    content: {
      left: {
        title: "Why Centralize Errors",
        items: [
          "Single source of truth",
          "Consistent formatting",
          "Easier alerting",
          "Cleaner controllers",
        ],
      },
      right: {
        title: "What to Log",
        items: [
          "Error message",
          "Stack trace (server only)",
          "Request context",
          "Timestamp",
        ],
      },
    },
  },

  {
    id: 185,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Enhancing Error Middleware with Logging",
    type: "code",
    content: {
      description: "Log errors before responding to client.",
      code: `const errorHandler = (err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    route: req.originalUrl
  });

  res.status(err.statusCode || 500).json({
    message: "Internal Server Error"
  });
};`,
    },
  },

  {
    id: 186,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Monitoring vs Logging",
    type: "two-column",
    content: {
      left: {
        title: "Logging",
        items: [
          "Event records",
          "Used for debugging",
          "Detailed context",
          "Reactive",
        ],
      },
      right: {
        title: "Monitoring",
        items: [
          "System health metrics",
          "Alerts and thresholds",
          "Performance tracking",
          "Proactive",
        ],
      },
    },
  },

  {
    id: 187,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "What Should Be Monitored",
    type: "two-column",
    content: {
      left: {
        title: "Key Metrics",
        items: [
          "Response time",
          "Error rate",
          "CPU and memory usage",
          "Uptime",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Detect outages early",
          "Prevent performance degradation",
          "Capacity planning",
          "SLA compliance",
        ],
      },
    },
  },

  {
    id: 188,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Debugging Production Issues",
    type: "two-column",
    content: {
      left: {
        title: "Bad Approach",
        items: [
          "Guessing the problem",
          "Adding console.logs blindly",
          "Restarting without insight",
          "Blaming infrastructure",
        ],
      },
      right: {
        title: "Correct Approach",
        items: [
          "Check logs first",
          "Reproduce issue locally",
          "Inspect recent deployments",
          "Use monitoring data",
        ],
      },
    },
  },

  {
    id: 189,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Logging too little",
          "Logging sensitive data",
          "No log levels",
          "Ignoring logs in prod",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Log meaningful events",
          "Mask sensitive fields",
          "Use structured logs",
          "Review logs regularly",
        ],
      },
    },
  },

  {
    id: 190,
    moduleId: 17,
    moduleTitle: "Logging, Monitoring & Debugging",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Testing APIs",
          "Unit and integration tests",
          "Test-driven confidence",
          "Preventing regressions",
        ],
      },
      right: {
        title: "Project Progress",
        items: [
          "Observability in place",
          "Logs structured",
          "Errors traceable",
          "Ready for testing",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 19: Deployment & Hosting (Going Live)
  // =========================

  {
    id: 204,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "What Deployment Really Means",
    type: "two-column",
    content: {
      left: {
        title: "Before Deployment",
        items: [
          "Runs only on your machine",
          "Accessible via localhost",
          "No external users",
          "Development environment",
        ],
      },
      right: {
        title: "After Deployment",
        items: [
          "Runs on a remote server",
          "Accessible via the internet",
          "Serves real users",
          "Production environment",
        ],
      },
    },
  },

  {
    id: 205,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "What You Need Before Deploying",
    type: "two-column",
    content: {
      left: {
        title: "Technical Requirements",
        items: [
          "Working API",
          "Environment variables",
          "Production-ready config",
          "Tests passing",
        ],
      },
      right: {
        title: "Operational Requirements",
        items: [
          "Git repository",
          "Hosting provider",
          "Database access",
          "Monitoring plan",
        ],
      },
    },
  },

  {
    id: 206,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "Choosing a Hosting Platform",
    type: "two-column",
    content: {
      left: {
        title: "Beginner-Friendly Platforms",
        items: ["Render", "Railway", "Fly.io", "Vercel (API only)"],
      },
      right: {
        title: "Why These Platforms",
        items: [
          "Simple setup",
          "Free tiers available",
          "Automatic deployments",
          "Minimal DevOps knowledge required",
        ],
      },
    },
  },

  {
    id: 207,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "Preparing the App for Production",
    type: "code",
    content: {
      description: "Ensure the app listens on the correct port.",
      code: `const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
    },
  },

  {
    id: 208,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "Production package.json Scripts",
    type: "code",
    content: {
      description: "Define a start script for production.",
      code: `{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  }
}`,
    },
  },

  {
    id: 209,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "Environment Variables in Production",
    type: "two-column",
    content: {
      left: {
        title: "Local Development",
        items: [".env file", "dotenv package", "Local secrets", "Git ignored"],
      },
      right: {
        title: "Production Hosting",
        items: [
          "Dashboard-based config",
          "No .env files",
          "Encrypted storage",
          "Provider-managed secrets",
        ],
      },
    },
  },

  {
    id: 210,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "Connecting to Production Database",
    type: "two-column",
    content: {
      left: {
        title: "Development DB",
        items: ["Local MongoDB", "Test data", "Frequent resets", "Low risk"],
      },
      right: {
        title: "Production DB",
        items: [
          "MongoDB Atlas",
          "Persistent data",
          "Secure access",
          "Backups enabled",
        ],
      },
    },
  },

  {
    id: 211,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "Deployment Flow (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Typical Flow",
        items: [
          "Push code to GitHub",
          "Hosting platform pulls repo",
          "Installs dependencies",
          "Starts the server",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "No manual server setup",
          "CI/CD is automated",
          "Deployments are repeatable",
          "Rollback is possible",
        ],
      },
    },
  },

  {
    id: 212,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "Common Deployment Issues",
    type: "two-column",
    content: {
      left: {
        title: "Common Failures",
        items: [
          "Missing environment variables",
          "Wrong start command",
          "Port binding issues",
          "Database connection errors",
        ],
      },
      right: {
        title: "How to Debug",
        items: [
          "Check platform logs",
          "Verify env variables",
          "Confirm start script",
          "Test locally with prod config",
        ],
      },
    },
  },

  {
    id: 213,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "Post-Deployment Checklist",
    type: "two-column",
    content: {
      left: {
        title: "Verify",
        items: [
          "API responds correctly",
          "Auth works",
          "Database persists data",
          "Errors are logged",
        ],
      },
      right: {
        title: "Next Steps",
        items: [
          "Add monitoring alerts",
          "Enable backups",
          "Document API",
          "Plan scaling",
        ],
      },
    },
  },

  {
    id: 214,
    moduleId: 19,
    moduleTitle: "Deployment & Hosting (Going Live)",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Final Module",
        items: [
          "Scaling concepts",
          "Performance optimization",
          "Caching",
          "Professional next steps",
        ],
      },
      right: {
        title: "Project Status",
        items: [
          "API deployed",
          "Publicly accessible",
          "Production-ready",
          "Ready to scale",
        ],
      },
    },
  },
  // =========================
  // Node.js & Express.js Module 20: Scaling, Performance & Caching (Final Module)
  // =========================

  {
    id: 215,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Why Scaling Becomes Necessary",
    type: "two-column",
    content: {
      left: {
        title: "Single-Instance Limitations",
        items: [
          "Limited CPU and memory",
          "Single point of failure",
          "Performance degrades under load",
          "No fault tolerance",
        ],
      },
      right: {
        title: "When Scaling Is Required",
        items: [
          "More users",
          "Higher request volume",
          "Slower response times",
          "Business growth",
        ],
      },
    },
  },

  {
    id: 216,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Vertical vs Horizontal Scaling",
    type: "two-column",
    content: {
      left: {
        title: "Vertical Scaling",
        items: [
          "Add more CPU/RAM",
          "Simple to implement",
          "Limited by hardware",
          "Single machine",
        ],
      },
      right: {
        title: "Horizontal Scaling",
        items: [
          "Add more server instances",
          "Load balancing required",
          "High availability",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 217,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Why Stateless APIs Scale Better",
    type: "two-column",
    content: {
      left: {
        title: "Stateful Servers",
        items: [
          "Session stored in memory",
          "Hard to distribute load",
          "Sticky sessions required",
          "Scaling is complex",
        ],
      },
      right: {
        title: "Stateless APIs",
        items: [
          "No server-side session",
          "JWT-based auth",
          "Easy load balancing",
          "Cloud-native",
        ],
      },
    },
  },

  {
    id: 218,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Performance Bottlenecks in APIs",
    type: "two-column",
    content: {
      left: {
        title: "Common Bottlenecks",
        items: [
          "Slow database queries",
          "Repeated computations",
          "Blocking operations",
          "Excessive network calls",
        ],
      },
      right: {
        title: "Optimization Targets",
        items: [
          "Database indexing",
          "Caching",
          "Async operations",
          "Reducing payload size",
        ],
      },
    },
  },

  {
    id: 219,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "What Is Caching?",
    type: "two-column",
    content: {
      left: {
        title: "Caching Explained",
        items: [
          "Store frequently used data",
          "Serve data faster",
          "Reduce database load",
          "Improve response time",
        ],
      },
      right: {
        title: "Where Caching Happens",
        items: [
          "In-memory (Redis)",
          "HTTP cache",
          "Application-level cache",
          "CDN",
        ],
      },
    },
  },

  {
    id: 220,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Basic In-Memory Caching Example",
    type: "code",
    content: {
      description: "Simple in-process caching (learning purpose only).",
      code: `let cache = {};

const getCachedData = async (key, fetchFn) => {
  if (cache[key]) {
    return cache[key];
  }

  const data = await fetchFn();
  cache[key] = data;
  return data;
};`,
    },
  },

  {
    id: 221,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Why In-Memory Cache Is Limited",
    type: "two-column",
    content: {
      left: {
        title: "Limitations",
        items: [
          "Cache lost on restart",
          "Not shared across instances",
          "Memory constraints",
          "Not production-grade",
        ],
      },
      right: {
        title: "Production Solution",
        items: [
          "Redis",
          "Centralized cache",
          "TTL-based eviction",
          "Shared across servers",
        ],
      },
    },
  },

  {
    id: 222,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "High-Level Redis Use Case",
    type: "two-column",
    content: {
      left: {
        title: "What Redis Provides",
        items: [
          "In-memory key-value store",
          "Very fast reads",
          "TTL support",
          "Distributed cache",
        ],
      },
      right: {
        title: "When to Use Redis",
        items: [
          "Frequently accessed data",
          "Expensive DB queries",
          "Session storage",
          "Rate limiting",
        ],
      },
    },
  },

  {
    id: 223,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Other Performance Techniques",
    type: "two-column",
    content: {
      left: {
        title: "Techniques",
        items: [
          "Pagination",
          "Indexing",
          "Response compression",
          "Async queues",
        ],
      },
      right: {
        title: "Why They Matter",
        items: [
          "Lower memory usage",
          "Faster responses",
          "Better user experience",
          "Lower infrastructure cost",
        ],
      },
    },
  },

  {
    id: 224,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Scaling Mindset Shift",
    type: "two-column",
    content: {
      left: {
        title: "Beginner Thinking",
        items: [
          "Make it work",
          "Single server",
          "No traffic assumptions",
          "Local testing",
        ],
      },
      right: {
        title: "Professional Thinking",
        items: [
          "Make it scalable",
          "Design for failure",
          "Expect growth",
          "Observe and optimize",
        ],
      },
    },
  },

  {
    id: 225,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Premature optimization",
          "Ignoring database performance",
          "Caching everything blindly",
          "Blocking the event loop",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Measure before optimizing",
          "Fix real bottlenecks",
          "Cache selectively",
          "Keep Node non-blocking",
        ],
      },
    },
  },

  {
    id: 226,
    moduleId: 20,
    moduleTitle: "Scaling, Performance & Caching",
    title: "Course Wrap-Up & Next Steps",
    type: "two-column",
    content: {
      left: {
        title: "What You Now Understand",
        items: [
          "How backend systems work",
          "How to build APIs with Node & Express",
          "How to secure and deploy APIs",
          "How to think about scale",
        ],
      },
      right: {
        title: "Professional Next Steps",
        items: [
          "Dockerize the API",
          "Add CI/CD pipelines",
          "Explore GraphQL",
          "Build real-world projects",
        ],
      },
    },
  },
];
