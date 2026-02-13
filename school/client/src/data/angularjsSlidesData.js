export const angularjsSlidesData = [
  // =========================
  // AngularJS Module 1: Introduction to AngularJS & MVC Thinking
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Introduction to AngularJS & MVC Thinking",
    title: "What Is AngularJS?",
    type: "two-column",
    content: {
      left: {
        title: "AngularJS Explained",
        items: [
          "A JavaScript framework for building dynamic web applications",
          "Developed by Google",
          "Extends HTML with custom attributes",
          "Designed for Single Page Applications (SPAs)",
        ],
      },
      right: {
        title: "What AngularJS Is Not",
        items: [
          "Not plain JavaScript",
          "Not Angular (2+)",
          "Not just a templating engine",
          "Not a backend framework",
        ],
      },
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Introduction to AngularJS & MVC Thinking",
    title: "Why AngularJS Was Created",
    type: "two-column",
    content: {
      left: {
        title: "Problems Before AngularJS",
        items: [
          "Heavy reliance on jQuery",
          "Manual DOM manipulation",
          "Spaghetti frontend logic",
          "Hard-to-maintain UI code",
        ],
      },
      right: {
        title: "AngularJS Solutions",
        items: [
          "Declarative templates",
          "Automatic DOM updates",
          "Clear application structure",
          "Improved testability",
        ],
      },
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Introduction to AngularJS & MVC Thinking",
    title: "What Is MVC?",
    type: "two-column",
    content: {
      left: {
        title: "MVC Breakdown",
        items: [
          "Model: application data",
          "View: user interface",
          "Controller: business logic",
          "Separation of concerns",
        ],
      },
      right: {
        title: "Why MVC Matters",
        items: [
          "Cleaner code organization",
          "Easier debugging",
          "Scales to large applications",
          "Team-friendly architecture",
        ],
      },
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Introduction to AngularJS & MVC Thinking",
    title: "AngularJS MVC Mapping",
    type: "two-column",
    content: {
      left: {
        title: "AngularJS Components",
        items: [
          "Model: $scope data",
          "View: HTML templates",
          "Controller: JavaScript functions",
          "Two-way data binding",
        ],
      },
      right: {
        title: "Key Advantage",
        items: [
          "UI stays in sync with data",
          "No manual DOM updates",
          "Predictable UI behavior",
          "Declarative development style",
        ],
      },
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Introduction to AngularJS & MVC Thinking",
    title: "Your First AngularJS App",
    type: "code",
    content: {
      title: "Hello AngularJS",
      keyPoints: [
        "ng-app bootstraps AngularJS",
        "Expressions use double curly braces",
        "AngularJS runs inside HTML",
      ],
      code: `<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <h1>{{ "Hello, AngularJS!" }}</h1>
  </body>
</html>`,
      explanation:
        "AngularJS evaluates expressions inside {{ }} and updates the view automatically.",
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Introduction to AngularJS & MVC Thinking",
    title: "Declarative Programming",
    type: "two-column",
    content: {
      left: {
        title: "Declarative Approach",
        items: [
          "Describe what the UI should show",
          "Framework handles DOM updates",
          "Less imperative code",
          "Focus on intent, not steps",
        ],
      },
      right: {
        title: "Compared to Imperative Code",
        items: [
          "No manual element selection",
          "No explicit UI mutations",
          "Cleaner and shorter code",
          "Fewer bugs",
        ],
      },
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Introduction to AngularJS & MVC Thinking",
    title: "Where AngularJS Is Used Today",
    type: "two-column",
    content: {
      left: {
        title: "Common Use Cases",
        items: [
          "Legacy enterprise systems",
          "Internal dashboards",
          "Admin panels",
          "Long-lived business apps",
        ],
      },
      right: {
        title: "Why Learn It",
        items: [
          "Many systems still run AngularJS",
          "High demand for maintenance skills",
          "Excellent for learning MVC",
          "Foundation for modern frameworks",
        ],
      },
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Introduction to AngularJS & MVC Thinking",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "AngularJS modules",
          "Controllers and $scope",
          "Application structure",
          "Your first real AngularJS app",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand what AngularJS is",
          "You know why it exists",
          "You understand MVC",
          "You are ready to build",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 2: Environment Setup, Modules & First Real App
  // =========================

  {
    id: 9,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "Preparing to Use AngularJS",
    type: "two-column",
    content: {
      left: {
        title: "What You Need",
        items: [
          "A web browser",
          "A text editor (VS Code, etc.)",
          "Basic HTML knowledge",
          "AngularJS library",
        ],
      },
      right: {
        title: "What AngularJS Requires",
        items: [
          "Runs in the browser",
          "Included via script tag",
          "No build tools required",
          "Easy to start",
        ],
      },
    },
  },

  {
    id: 10,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "Including AngularJS in a Page",
    type: "code",
    content: {
      title: "Adding AngularJS via CDN",
      keyPoints: [
        "AngularJS is loaded via script tag",
        "Must be loaded before your app code",
        "CDN is simplest for beginners",
      ],
      code: `<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>`,
      explanation:
        "This script tag loads the AngularJS framework into your application.",
    },
  },

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "What Is an AngularJS Application?",
    type: "two-column",
    content: {
      left: {
        title: "AngularJS App Explained",
        items: [
          "A container for your code",
          "Defined using a module",
          "Represents a logical boundary",
          "Bootstrapped to HTML",
        ],
      },
      right: {
        title: "Why Apps Need Structure",
        items: [
          "Avoid global variables",
          "Organize features",
          "Enable dependency injection",
          "Support scalability",
        ],
      },
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "What Is an AngularJS Module?",
    type: "two-column",
    content: {
      left: {
        title: "Module Explained",
        items: [
          "A container for application parts",
          "Holds controllers, services, directives",
          "Created using angular.module",
          "Core building block",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "One app = one root module",
          "Modules group related logic",
          "Everything belongs to a module",
          "Enforces structure",
        ],
      },
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "Creating Your First Module",
    type: "code",
    content: {
      title: "Defining an AngularJS Module",
      keyPoints: [
        "angular.module creates a module",
        "First argument is module name",
        "Second argument is dependency array",
      ],
      code: `var app = angular.module("myApp", []);`,
      explanation:
        "This creates a new AngularJS module named myApp with no external dependencies.",
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "Connecting the Module to HTML",
    type: "two-column",
    content: {
      left: {
        title: "ng-app Directive",
        items: [
          "Bootstraps AngularJS",
          "Connects HTML to a module",
          "Defines application boundary",
          "Required for AngularJS to run",
        ],
      },
      right: {
        title: "How It Works",
        items: [
          "AngularJS scans the DOM",
          "Finds ng-app",
          "Initializes the module",
          "Starts data binding",
        ],
      },
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "Bootstrapping an AngularJS App",
    type: "code",
    content: {
      title: "Linking HTML and JavaScript",
      keyPoints: [
        "ng-app value must match module name",
        "Script order matters",
        "HTML becomes Angular-aware",
      ],
      code: `<html ng-app="myApp">
  <head>
    <script src="angular.min.js"></script>
    <script src="app.js"></script>
  </head>
  <body>
  </body>
</html>`,
      explanation:
        "AngularJS boots the myApp module when it encounters the ng-app directive.",
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "Your First Real AngularJS App",
    type: "code",
    content: {
      title: "Minimal Working App",
      keyPoints: [
        "Module defined in JavaScript",
        "Module connected via ng-app",
        "AngularJS running successfully",
      ],
      code: `// app.js
var app = angular.module("myApp", []);

// index.html
<html ng-app="myApp">
  <body>
    <h1>AngularJS App is Running</h1>
  </body>
</html>`,
      explanation: "This is the smallest complete AngularJS application setup.",
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting to include AngularJS",
          "Mismatch between ng-app and module name",
          "Incorrect script order",
          "Multiple ng-app declarations",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Check browser console",
          "Verify module names",
          "Load AngularJS first",
          "Use one root ng-app",
        ],
      },
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Environment Setup, Modules & First Real App",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Controllers",
          "$scope",
          "Connecting logic to views",
          "Dynamic data",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You set up AngularJS correctly",
          "You created a module",
          "You bootstrapped an app",
          "Ready for controllers",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 3: Controllers & $scope
  // =========================

  {
    id: 19,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Why Controllers Exist",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "HTML alone cannot handle logic",
          "UI needs dynamic behavior",
          "Data must change over time",
          "User actions need handling",
        ],
      },
      right: {
        title: "The Controller Solution",
        items: [
          "Holds application logic",
          "Manages data for the view",
          "Responds to user actions",
          "Connects model and view",
        ],
      },
    },
  },

  {
    id: 20,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "What Is an AngularJS Controller?",
    type: "two-column",
    content: {
      left: {
        title: "Controller Explained",
        items: [
          "A JavaScript function",
          "Registered on a module",
          "Controls a portion of the UI",
          "Executes when view is loaded",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "Controller = page logic",
          "HTML = view",
          "$scope = shared context",
          "AngularJS wires them together",
        ],
      },
    },
  },

  {
    id: 21,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Introducing $scope",
    type: "two-column",
    content: {
      left: {
        title: "$scope Explained",
        items: [
          "An object provided by AngularJS",
          "Holds data for the view",
          "Acts as a bridge",
          "Supports two-way data binding",
        ],
      },
      right: {
        title: "Key Characteristics",
        items: [
          "Automatically watched",
          "Accessible in HTML",
          "Scoped to controller",
          "Updates UI when changed",
        ],
      },
    },
  },

  {
    id: 22,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Creating Your First Controller",
    type: "code",
    content: {
      title: "Basic Controller Definition",
      keyPoints: [
        "Controllers are registered on modules",
        "$scope is injected",
        "Logic lives inside the function",
      ],
      code: `app.controller("MainController", function ($scope) {
  $scope.message = "Hello from Controller";
});`,
      explanation:
        "This controller attaches data to $scope, making it available to the view.",
    },
  },

  {
    id: 23,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Connecting Controller to the View",
    type: "two-column",
    content: {
      left: {
        title: "ng-controller Directive",
        items: [
          "Links HTML to a controller",
          "Defines controller scope",
          "Creates a new $scope",
          "Controls a section of the DOM",
        ],
      },
      right: {
        title: "How It Works",
        items: [
          "AngularJS instantiates controller",
          "$scope is created",
          "HTML gains access to scope data",
          "Data binding begins",
        ],
      },
    },
  },

  {
    id: 24,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Controller in Action",
    type: "code",
    content: {
      title: "Using ng-controller",
      keyPoints: [
        "Controller name must match",
        "$scope values appear in HTML",
        "Binding is automatic",
      ],
      code: `<div ng-controller="MainController">
  <h1>{{ message }}</h1>
</div>`,
      explanation: "The view can directly access properties defined on $scope.",
    },
  },

  {
    id: 25,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Two-Way Data Binding",
    type: "two-column",
    content: {
      left: {
        title: "What Two-Way Binding Means",
        items: [
          "View updates when data changes",
          "Data updates when user interacts",
          "Automatic synchronization",
          "Core AngularJS feature",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Less manual code",
          "Instant feedback",
          "Simpler logic",
          "Faster development",
        ],
      },
    },
  },

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Two-Way Binding Example",
    type: "code",
    content: {
      title: "Binding with ng-model",
      keyPoints: [
        "ng-model binds input to $scope",
        "Updates happen instantly",
        "No manual event handling",
      ],
      code: `<div ng-controller="MainController">
  <input ng-model="message" />
  <p>{{ message }}</p>
</div>`,
      explanation:
        "Changes in the input field automatically update the $scope and the view.",
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Adding Behavior with Functions",
    type: "two-column",
    content: {
      left: {
        title: "Functions on $scope",
        items: [
          "Controllers can define functions",
          "Functions handle user actions",
          "Bound to events in HTML",
          "Part of application logic",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Button clicks",
          "Form submissions",
          "Data manipulation",
          "Conditional behavior",
        ],
      },
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Function Example",
    type: "code",
    content: {
      title: "Handling User Actions",
      keyPoints: [
        "Functions live on $scope",
        "ng-click binds events",
        "Logic stays in controller",
      ],
      code: `app.controller("MainController", function ($scope) {
  $scope.count = 0;

  $scope.increment = function () {
    $scope.count++;
  };
});`,
      explanation:
        "The controller manages behavior while the view triggers it.",
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Putting logic directly in HTML",
          "Overusing $scope",
          "Using controllers for DOM manipulation",
          "Creating very large controllers",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Keep logic in controllers",
          "Use services for shared logic",
          "Let AngularJS manage the DOM",
          "Refactor early",
        ],
      },
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Controllers & $scope",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "AngularJS expressions",
          "Built-in directives",
          "Repeating data",
          "Conditional UI",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand controllers",
          "You use $scope correctly",
          "You bind data to views",
          "Ready for directives",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 4: Expressions, Data Binding & Scope Basics
  // =========================

  {
    id: 31,
    moduleId: 4,
    moduleTitle: "Expressions, Data Binding & Scope Basics",
    title: "What Are AngularJS Expressions?",
    type: "two-column",
    content: {
      left: {
        title: "Expressions Explained",
        items: [
          "Evaluated inside {{ }}",
          "Look like JavaScript",
          "Executed by AngularJS",
          "Used to display data",
        ],
      },
      right: {
        title: "How They Differ from JavaScript",
        items: [
          "No control flow statements",
          "No conditionals like if",
          "Safe execution",
          "Context is $scope",
        ],
      },
    },
  },

  {
    id: 32,
    moduleId: 4,
    moduleTitle: "Expressions, Data Binding & Scope Basics",
    title: "Using Expressions in the View",
    type: "code",
    content: {
      title: "Basic Expression Usage",
      keyPoints: [
        "Expressions read from $scope",
        "Automatically updated",
        "No manual DOM access",
      ],
      code: `<div ng-controller="MainController">
  <p>{{ message }}</p>
  <p>{{ 2 + 3 }}</p>
</div>`,
      explanation:
        "AngularJS evaluates expressions and keeps the UI in sync with scope data.",
    },
  },

  {
    id: 33,
    moduleId: 4,
    moduleTitle: "Expressions, Data Binding & Scope Basics",
    title: "Understanding Data Binding",
    type: "two-column",
    content: {
      left: {
        title: "What Is Data Binding?",
        items: [
          "Automatic synchronization",
          "Connects model and view",
          "Removes manual updates",
          "Core AngularJS feature",
        ],
      },
      right: {
        title: "Types of Binding",
        items: [
          "One-way binding",
          "Two-way binding",
          "Event-based updates",
          "Watcher-driven",
        ],
      },
    },
  },

  {
    id: 34,
    moduleId: 4,
    moduleTitle: "Expressions, Data Binding & Scope Basics",
    title: "Two-Way Data Binding Revisited",
    type: "two-column",
    content: {
      left: {
        title: "How It Works",
        items: [
          "View updates when model changes",
          "Model updates when view changes",
          "Handled via ng-model",
          "Powered by $scope",
        ],
      },
      right: {
        title: "Why It’s Powerful",
        items: [
          "Less boilerplate",
          "Instant feedback",
          "Simpler logic",
          "Faster development",
        ],
      },
    },
  },

  {
    id: 35,
    moduleId: 4,
    moduleTitle: "Expressions, Data Binding & Scope Basics",
    title: "ng-model in Action",
    type: "code",
    content: {
      title: "Binding Input to Data",
      keyPoints: [
        "ng-model creates two-way binding",
        "Input stays in sync with $scope",
        "No manual event handling",
      ],
      code: `<div ng-controller="MainController">
  <input ng-model="name" />
  <p>Hello, {{ name }}</p>
</div>`,
      explanation:
        "The input field and the displayed text stay synchronized automatically.",
    },
  },

  {
    id: 36,
    moduleId: 4,
    moduleTitle: "Expressions, Data Binding & Scope Basics",
    title: "Scope as the Application Context",
    type: "two-column",
    content: {
      left: {
        title: "What $scope Represents",
        items: [
          "Execution context for expressions",
          "Bridge between controller and view",
          "Holds data and functions",
          "Participates in digest cycle",
        ],
      },
      right: {
        title: "Scope Characteristics",
        items: [
          "Hierarchical",
          "Watched by AngularJS",
          "Automatically updated",
          "Lifecycle-managed",
        ],
      },
    },
  },

  {
    id: 37,
    moduleId: 4,
    moduleTitle: "Expressions, Data Binding & Scope Basics",
    title: "Scope Inheritance (Preview)",
    type: "two-column",
    content: {
      left: {
        title: "Scope Hierarchy",
        items: [
          "Scopes form a tree",
          "Child scopes inherit from parents",
          "Controllers create new scopes",
          "ng-repeat also creates scopes",
        ],
      },
      right: {
        title: "Why This Matters",
        items: [
          "Data visibility rules",
          "Avoid shadowing variables",
          "Predictable behavior",
          "Foundation for advanced topics",
        ],
      },
    },
  },

  {
    id: 38,
    moduleId: 4,
    moduleTitle: "Expressions, Data Binding & Scope Basics",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Putting complex logic in expressions",
          "Assuming expressions are full JavaScript",
          "Misusing $scope variables",
          "Ignoring scope hierarchy",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Keep expressions simple",
          "Move logic to controllers",
          "Understand scope boundaries",
          "Plan data ownership",
        ],
      },
    },
  },

  {
    id: 39,
    moduleId: 4,
    moduleTitle: "Expressions, Data Binding & Scope Basics",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Built-in directives",
          "Repeating data with ng-repeat",
          "Conditional rendering",
          "Dynamic templates",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand expressions",
          "You know how data binding works",
          "You grasp scope basics",
          "Ready for directives",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 5: Built-in Directives
  // =========================

  {
    id: 40,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "What Are Directives?",
    type: "two-column",
    content: {
      left: {
        title: "Directive Explained",
        items: [
          "Special AngularJS HTML attributes",
          "Extend HTML behavior",
          "Teach HTML new tricks",
          "Core AngularJS feature",
        ],
      },
      right: {
        title: "Why Directives Matter",
        items: [
          "Declarative UI logic",
          "No manual DOM manipulation",
          "Cleaner templates",
          "Reusable patterns",
        ],
      },
    },
  },

  {
    id: 41,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "How Directives Work",
    type: "two-column",
    content: {
      left: {
        title: "Behind the Scenes",
        items: [
          "AngularJS scans the DOM",
          "Finds directive attributes",
          "Attaches behavior",
          "Watches for changes",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "HTML is enhanced",
          "Logic stays in JavaScript",
          "UI reacts to data",
          "Framework controls updates",
        ],
      },
    },
  },

  {
    id: 42,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "ng-bind vs Interpolation",
    type: "two-column",
    content: {
      left: {
        title: "Interpolation {{ }}",
        items: [
          "Inline expressions",
          "Readable syntax",
          "Most commonly used",
          "Initial flicker possible",
        ],
      },
      right: {
        title: "ng-bind",
        items: [
          "Directive-based binding",
          "Avoids flicker",
          "Cleaner for large text",
          "Same behavior",
        ],
      },
    },
  },

  {
    id: 43,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "ng-bind Example",
    type: "code",
    content: {
      title: "Binding Text to Scope",
      keyPoints: [
        "ng-bind replaces element content",
        "Uses $scope values",
        "Avoids raw template display",
      ],
      code: `<div ng-controller="MainController">
  <p ng-bind="message"></p>
</div>`,
      explanation:
        "ng-bind displays scope data without showing raw interpolation syntax.",
    },
  },

  {
    id: 44,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "ng-repeat",
    type: "two-column",
    content: {
      left: {
        title: "ng-repeat Explained",
        items: [
          "Repeats HTML for collections",
          "Iterates over arrays",
          "Creates a new scope per item",
          "Very commonly used",
        ],
      },
      right: {
        title: "Why It’s Powerful",
        items: [
          "Dynamic lists",
          "Declarative loops",
          "Automatic UI updates",
          "No manual DOM code",
        ],
      },
    },
  },

  {
    id: 45,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "ng-repeat Example",
    type: "code",
    content: {
      title: "Rendering a List",
      keyPoints: [
        "Each item gets its own scope",
        "Expression syntax: item in items",
        "UI updates when array changes",
      ],
      code: `app.controller("MainController", function ($scope) {
  $scope.items = ["Apple", "Banana", "Orange"];
});`,
      explanation:
        "The controller provides data that ng-repeat renders dynamically.",
    },
  },

  {
    id: 46,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "ng-repeat in HTML",
    type: "code",
    content: {
      title: "Displaying the List",
      keyPoints: [
        "ng-repeat duplicates markup",
        "Bindings work per item",
        "Declarative looping",
      ],
      code: `<ul>
  <li ng-repeat="item in items">
    {{ item }}
  </li>
</ul>`,
      explanation:
        "AngularJS repeats the list item for each element in the array.",
    },
  },

  {
    id: 47,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "Conditional Directives",
    type: "two-column",
    content: {
      left: {
        title: "ng-if",
        items: [
          "Conditionally adds/removes DOM",
          "Element is destroyed if false",
          "Affects scope lifecycle",
          "Better for performance",
        ],
      },
      right: {
        title: "ng-show / ng-hide",
        items: [
          "Toggles visibility",
          "Element stays in DOM",
          "Uses CSS display",
          "Faster toggling",
        ],
      },
    },
  },

  {
    id: 48,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "Conditional Rendering Example",
    type: "code",
    content: {
      title: "ng-if vs ng-show",
      keyPoints: [
        "ng-if removes element",
        "ng-show hides element",
        "Choose based on behavior",
      ],
      code: `<p ng-if="isLoggedIn">Welcome back</p>
<p ng-show="isAdmin">Admin Panel</p>`,
      explanation: "Different directives control visibility in different ways.",
    },
  },

  {
    id: 49,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "Other Common Built-in Directives",
    type: "two-column",
    content: {
      left: {
        title: "Structure & Logic",
        items: ["ng-controller", "ng-model", "ng-click", "ng-init"],
      },
      right: {
        title: "Attributes & Behavior",
        items: ["ng-class", "ng-style", "ng-disabled", "ng-src"],
      },
    },
  },

  {
    id: 50,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing ng-init",
          "Complex logic in templates",
          "Misusing ng-if vs ng-show",
          "Ignoring scope creation",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Initialize data in controllers",
          "Keep templates simple",
          "Choose directives intentionally",
          "Understand scope behavior",
        ],
      },
    },
  },

  {
    id: 51,
    moduleId: 5,
    moduleTitle: "Built-in Directives",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "User interaction",
          "Event handling",
          "ng-click and events",
          "Dynamic behavior",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand directives",
          "You can render lists",
          "You control visibility",
          "Ready for events",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 6: Events & User Interaction
  // =========================

  {
    id: 52,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "Why User Interaction Matters",
    type: "two-column",
    content: {
      left: {
        title: "Static vs Interactive UI",
        items: [
          "Static pages only display data",
          "Users expect interaction",
          "Actions must trigger logic",
          "UI should respond immediately",
        ],
      },
      right: {
        title: "AngularJS Advantage",
        items: [
          "Declarative event binding",
          "No manual addEventListener",
          "Clean separation of concerns",
          "Predictable behavior",
        ],
      },
    },
  },

  {
    id: 53,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "AngularJS Event Directives",
    type: "two-column",
    content: {
      left: {
        title: "Common Event Directives",
        items: ["ng-click", "ng-change", "ng-submit", "ng-blur / ng-focus"],
      },
      right: {
        title: "Key Principle",
        items: [
          "Events call controller functions",
          "Logic stays out of HTML",
          "Events update $scope",
          "UI reacts automatically",
        ],
      },
    },
  },

  {
    id: 54,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "Handling Click Events",
    type: "code",
    content: {
      title: "Using ng-click",
      keyPoints: [
        "ng-click binds click events",
        "Calls a $scope function",
        "No inline JavaScript",
      ],
      code: `<button ng-click="increment()">
  Increment
</button>`,
      explanation:
        "ng-click triggers a controller function when the user clicks the button.",
    },
  },

  {
    id: 55,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "Click Event Controller Logic",
    type: "code",
    content: {
      title: "Controller Handling Events",
      keyPoints: [
        "Functions live on $scope",
        "Events modify data",
        "UI updates automatically",
      ],
      code: `app.controller("MainController", function ($scope) {
  $scope.count = 0;

  $scope.increment = function () {
    $scope.count++;
  };
});`,
      explanation:
        "The controller defines how the application responds to user actions.",
    },
  },

  {
    id: 56,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "Handling Form Events",
    type: "two-column",
    content: {
      left: {
        title: "Form Events",
        items: [
          "User input submission",
          "Validation triggers",
          "Data processing",
          "Common UI pattern",
        ],
      },
      right: {
        title: "Key Directives",
        items: ["ng-submit", "ng-change", "ng-model", "ng-disabled"],
      },
    },
  },

  {
    id: 57,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "Form Submission Example",
    type: "code",
    content: {
      title: "Using ng-submit",
      keyPoints: [
        "Prevents page reload",
        "Calls submit handler",
        "Works with forms",
      ],
      code: `<form ng-submit="save()">
  <input ng-model="name" />
  <button type="submit">Save</button>
</form>`,
      explanation:
        "AngularJS intercepts the form submission and runs the controller logic.",
    },
  },

  {
    id: 58,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "Form Controller Logic",
    type: "code",
    content: {
      title: "Processing Form Data",
      keyPoints: [
        "Form data stored in $scope",
        "Submit function handles logic",
        "No page refresh",
      ],
      code: `app.controller("FormController", function ($scope) {
  $scope.save = function () {
    console.log($scope.name);
  };
});`,
      explanation:
        "The controller processes user input when the form is submitted.",
    },
  },

  {
    id: 59,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "ng-change and Live Updates",
    type: "two-column",
    content: {
      left: {
        title: "ng-change",
        items: [
          "Runs on input change",
          "Triggers logic immediately",
          "Useful for validation",
          "Live feedback",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Character counters",
          "Form validation",
          "Search filters",
          "Dynamic UI updates",
        ],
      },
    },
  },

  {
    id: 60,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "ng-change Example",
    type: "code",
    content: {
      title: "Reacting to Input Changes",
      keyPoints: [
        "ng-change calls function",
        "Works with ng-model",
        "Immediate feedback",
      ],
      code: `<input
  ng-model="query"
  ng-change="search(query)"
/>`,
      explanation:
        "The search function is triggered whenever the input value changes.",
    },
  },

  {
    id: 61,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "Avoiding Anti-Patterns",
    type: "two-column",
    content: {
      left: {
        title: "What Not To Do",
        items: [
          "Inline JavaScript in HTML",
          "Complex expressions in directives",
          "Direct DOM manipulation",
          "Business logic in templates",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Keep logic in controllers",
          "Use services for reuse",
          "Let AngularJS manage DOM",
          "Keep templates declarative",
        ],
      },
    },
  },

  {
    id: 62,
    moduleId: 6,
    moduleTitle: "Events & User Interaction",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Services",
          "Dependency Injection",
          "Sharing logic",
          "Reusable data access",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You handle user events",
          "You manage form submissions",
          "You build interactive UI",
          "Ready for services",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 7: Services & Dependency Injection
  // =========================

  {
    id: 63,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "Why Services Exist",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Controllers become too large",
          "Logic is duplicated",
          "Data needs to be shared",
          "Poor separation of concerns",
        ],
      },
      right: {
        title: "The Service Solution",
        items: [
          "Reusable business logic",
          "Shared data across controllers",
          "Cleaner controllers",
          "Scalable architecture",
        ],
      },
    },
  },

  {
    id: 64,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "What Is an AngularJS Service?",
    type: "two-column",
    content: {
      left: {
        title: "Service Explained",
        items: [
          "A singleton object",
          "Created once per application",
          "Holds reusable logic",
          "Injected where needed",
        ],
      },
      right: {
        title: "Key Characteristics",
        items: [
          "Shared state",
          "No direct DOM access",
          "Testable",
          "Lifecycle-managed by AngularJS",
        ],
      },
    },
  },

  {
    id: 65,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "Introduction to Dependency Injection",
    type: "two-column",
    content: {
      left: {
        title: "Dependency Injection Explained",
        items: [
          "Dependencies are provided automatically",
          "Objects do not create dependencies",
          "AngularJS manages wiring",
          "Loose coupling",
        ],
      },
      right: {
        title: "Why DI Matters",
        items: [
          "Easier testing",
          "Flexible architecture",
          "Replaceable implementations",
          "Cleaner code",
        ],
      },
    },
  },

  {
    id: 66,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "Creating a Service",
    type: "code",
    content: {
      title: "Using app.service()",
      keyPoints: [
        "service creates a constructor",
        "Instantiated once",
        "Use this keyword",
      ],
      code: `app.service("UserService", function () {
  this.getName = function () {
    return "John Doe";
  };
});`,
      explanation:
        "Services created with app.service are instantiated using the new keyword.",
    },
  },

  {
    id: 67,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "Using a Service in a Controller",
    type: "code",
    content: {
      title: "Injecting a Service",
      keyPoints: [
        "Service name is injected",
        "AngularJS resolves dependency",
        "Same instance reused",
      ],
      code: `app.controller("MainController", function ($scope, UserService) {
  $scope.userName = UserService.getName();
});`,
      explanation:
        "AngularJS injects the UserService into the controller automatically.",
    },
  },

  {
    id: 68,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "factory vs service",
    type: "two-column",
    content: {
      left: {
        title: "service",
        items: [
          "Uses constructor function",
          "Uses this keyword",
          "Instantiated with new",
          "Good for simple logic",
        ],
      },
      right: {
        title: "factory",
        items: [
          "Returns an object",
          "More flexible",
          "Common in real projects",
          "Supports private variables",
        ],
      },
    },
  },

  {
    id: 69,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "Creating a Factory",
    type: "code",
    content: {
      title: "Using app.factory()",
      keyPoints: [
        "Factory returns an object",
        "More control over API",
        "Preferred in many cases",
      ],
      code: `app.factory("AuthService", function () {
  return {
    isLoggedIn: function () {
      return true;
    }
  };
});`,
      explanation: "Factories allow you to explicitly define what is exposed.",
    },
  },

  {
    id: 70,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "Sharing Data with Services",
    type: "two-column",
    content: {
      left: {
        title: "Shared State",
        items: [
          "Services are singletons",
          "State persists across controllers",
          "Ideal for shared data",
          "Central source of truth",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "User authentication",
          "Cached API data",
          "Application settings",
          "Cross-component communication",
        ],
      },
    },
  },

  {
    id: 71,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "Minification-Safe Dependency Injection",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Minification renames parameters",
          "DI relies on parameter names",
          "App can break in production",
          "Hard to debug",
        ],
      },
      right: {
        title: "The Solution",
        items: [
          "Explicit dependency annotation",
          "Array syntax",
          "$inject property",
          "Production-safe code",
        ],
      },
    },
  },

  {
    id: 72,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "Minification-Safe Example",
    type: "code",
    content: {
      title: "Array Annotation",
      keyPoints: [
        "Dependencies listed as strings",
        "Function parameters can be renamed",
        "Safe for production builds",
      ],
      code: `app.controller("MainController", [
  "$scope",
  "UserService",
  function ($scope, UserService) {
    $scope.userName = UserService.getName();
  }
]);`,
      explanation:
        "Array annotation protects dependency injection during minification.",
    },
  },

  {
    id: 73,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Putting logic in controllers",
          "Recreating shared state",
          "Forgetting DI safety",
          "Tightly coupled components",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Move logic to services",
          "Leverage singletons",
          "Always use DI-safe syntax",
          "Design for reuse",
        ],
      },
    },
  },

  {
    id: 74,
    moduleId: 7,
    moduleTitle: "Services & Dependency Injection",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Filters",
          "Data formatting",
          "Transforming output",
          "Presentation logic",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand services",
          "You use dependency injection",
          "You share logic cleanly",
          "Ready for filters",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 8: Filters & Data Transformation
  // =========================

  {
    id: 75,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Why Filters Exist",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Raw data is not always user-friendly",
          "Formatting logic clutters templates",
          "Repeated formatting logic",
          "Poor separation of concerns",
        ],
      },
      right: {
        title: "The Filter Solution",
        items: [
          "Clean data presentation",
          "Reusable formatting logic",
          "Declarative transformations",
          "Readable templates",
        ],
      },
    },
  },

  {
    id: 76,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "What Is an AngularJS Filter?",
    type: "two-column",
    content: {
      left: {
        title: "Filter Explained",
        items: [
          "A function that transforms data",
          "Used in views and JavaScript",
          "Does not modify original data",
          "Focused on presentation",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "Input value → filter → output",
          "Pure transformation",
          "No side effects",
          "Composable",
        ],
      },
    },
  },

  {
    id: 77,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Using Built-in Filters",
    type: "two-column",
    content: {
      left: {
        title: "Common Built-in Filters",
        items: ["uppercase / lowercase", "currency", "date", "number"],
      },
      right: {
        title: "Where Filters Can Be Used",
        items: [
          "Inside templates",
          "Inside controllers",
          "Inside services",
          "Chained together",
        ],
      },
    },
  },

  {
    id: 78,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Filter Syntax in Templates",
    type: "code",
    content: {
      title: "Using the Pipe Operator",
      keyPoints: [
        "Pipe symbol applies a filter",
        "Filters transform output",
        "Original data remains unchanged",
      ],
      code: `<p>{{ name | uppercase }}</p>
<p>{{ price | currency }}</p>`,
      explanation:
        "The pipe operator applies filters to values before displaying them.",
    },
  },

  {
    id: 79,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Chaining Multiple Filters",
    type: "two-column",
    content: {
      left: {
        title: "Filter Chaining",
        items: [
          "Multiple filters applied in order",
          "Readable transformations",
          "Powerful formatting",
          "Declarative style",
        ],
      },
      right: {
        title: "Example Use Cases",
        items: [
          "Sorting then formatting",
          "Formatting dates and numbers",
          "User-friendly output",
          "Presentation control",
        ],
      },
    },
  },

  {
    id: 80,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Chained Filter Example",
    type: "code",
    content: {
      title: "Multiple Filters Together",
      keyPoints: [
        "Order matters",
        "Each filter receives previous output",
        "Keeps templates clean",
      ],
      code: `<p>{{ total | number:2 | currency }}</p>`,
      explanation:
        "The value is first formatted as a number, then displayed as currency.",
    },
  },

  {
    id: 81,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Filtering Lists with filter",
    type: "two-column",
    content: {
      left: {
        title: "filter Filter",
        items: [
          "Filters arrays",
          "Used with ng-repeat",
          "Supports search",
          "Dynamic results",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Search boxes",
          "Live filtering",
          "Simple queries",
          "Small datasets",
        ],
      },
    },
  },

  {
    id: 82,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Filtering List Example",
    type: "code",
    content: {
      title: "Filtering with ng-repeat",
      keyPoints: [
        "filter works with arrays",
        "Dynamic filtering",
        "Simple syntax",
      ],
      code: `<input ng-model="searchText" />

<ul>
  <li ng-repeat="item in items | filter:searchText">
    {{ item }}
  </li>
</ul>`,
      explanation:
        "The list updates automatically as the user types in the search input.",
    },
  },

  {
    id: 83,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Using Filters in Controllers",
    type: "two-column",
    content: {
      left: {
        title: "Using $filter Service",
        items: [
          "Filters usable in JavaScript",
          "Injected via $filter",
          "Same behavior as template filters",
          "More control",
        ],
      },
      right: {
        title: "When to Use This",
        items: [
          "Complex logic",
          "Preprocessing data",
          "Non-template usage",
          "Cleaner templates",
        ],
      },
    },
  },

  {
    id: 84,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Filter in Controller Example",
    type: "code",
    content: {
      title: "Using $filter",
      keyPoints: [
        "$filter returns filter functions",
        "Same output as template usage",
        "Reusable logic",
      ],
      code: `app.controller("MainController", function ($scope, $filter) {
  var uppercase = $filter("uppercase");
  $scope.name = uppercase("angularjs");
});`,
      explanation:
        "Filters can be applied programmatically inside controllers.",
    },
  },

  {
    id: 85,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Creating a Custom Filter",
    type: "two-column",
    content: {
      left: {
        title: "Why Custom Filters",
        items: [
          "Custom formatting needs",
          "Reusable transformations",
          "Cleaner templates",
          "Project-specific logic",
        ],
      },
      right: {
        title: "Filter Rules",
        items: [
          "Must be pure",
          "Return transformed value",
          "No side effects",
          "Focused responsibility",
        ],
      },
    },
  },

  {
    id: 86,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Custom Filter Example",
    type: "code",
    content: {
      title: "Defining a Filter",
      keyPoints: [
        "Use app.filter",
        "Return a function",
        "Receives input value",
      ],
      code: `app.filter("reverse", function () {
  return function (input) {
    return input.split("").reverse().join("");
  };
});`,
      explanation: "This custom filter reverses a string before displaying it.",
    },
  },

  {
    id: 87,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Putting heavy logic in filters",
          "Filtering large datasets in templates",
          "Overusing filters",
          "Mutating original data",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Keep filters simple",
          "Filter data in controllers for large lists",
          "Use filters for presentation only",
          "Treat data as immutable",
        ],
      },
    },
  },

  {
    id: 88,
    moduleId: 8,
    moduleTitle: "Filters & Data Transformation",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Routing",
          "Single Page Applications",
          "View navigation",
          "Application structure",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You use built-in filters",
          "You create custom filters",
          "You transform data cleanly",
          "Ready for routing",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 9: Routing & Single Page Applications (SPA)
  // =========================

  {
    id: 89,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "What Is a Single Page Application?",
    type: "two-column",
    content: {
      left: {
        title: "SPA Explained",
        items: [
          "Application runs in one HTML page",
          "Views change without page reload",
          "JavaScript controls navigation",
          "Faster user experience",
        ],
      },
      right: {
        title: "Why SPAs Matter",
        items: [
          "Smooth navigation",
          "Reduced server load",
          "Modern web standard",
          "App-like behavior",
        ],
      },
    },
  },

  {
    id: 90,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "Why Routing Is Needed",
    type: "two-column",
    content: {
      left: {
        title: "Without Routing",
        items: [
          "One large HTML file",
          "Hard to manage views",
          "No URL-based navigation",
          "Poor scalability",
        ],
      },
      right: {
        title: "With Routing",
        items: [
          "Multiple views",
          "Clean URLs",
          "Better structure",
          "Scalable applications",
        ],
      },
    },
  },

  {
    id: 91,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "Introducing ngRoute",
    type: "two-column",
    content: {
      left: {
        title: "ngRoute Module",
        items: [
          "Official AngularJS routing module",
          "Provides $routeProvider",
          "Maps URLs to views",
          "Simple and lightweight",
        ],
      },
      right: {
        title: "Requirements",
        items: [
          "Include angular-route.js",
          "Add ngRoute as dependency",
          "Configure routes",
          "Use ng-view",
        ],
      },
    },
  },

  {
    id: 92,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "Including ngRoute",
    type: "code",
    content: {
      title: "Adding Routing Support",
      keyPoints: [
        "Load angular-route script",
        "Add ngRoute dependency",
        "Required for routing",
      ],
      code: `<script src="angular-route.min.js"></script>

var app = angular.module("myApp", ["ngRoute"]);`,
      explanation:
        "The ngRoute module enables routing functionality in AngularJS.",
    },
  },

  {
    id: 93,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "Configuring Routes",
    type: "two-column",
    content: {
      left: {
        title: "Route Configuration",
        items: [
          "Defined during config phase",
          "Uses $routeProvider",
          "Maps URL paths",
          "Associates views and controllers",
        ],
      },
      right: {
        title: "Key Concepts",
        items: [
          "when() defines a route",
          "otherwise() handles unknown routes",
          "Templates define views",
          "Controllers manage logic",
        ],
      },
    },
  },

  {
    id: 94,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "Route Configuration Example",
    type: "code",
    content: {
      title: "Defining Routes",
      keyPoints: [
        "Routes configured in app.config",
        "Each route maps to template and controller",
        "Fallback route recommended",
      ],
      code: `app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "HomeController"
    })
    .when("/about", {
      templateUrl: "about.html",
      controller: "AboutController"
    })
    .otherwise({
      redirectTo: "/"
    });
});`,
      explanation: "Each route maps a URL path to a view and a controller.",
    },
  },

  {
    id: 95,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "ng-view Directive",
    type: "two-column",
    content: {
      left: {
        title: "ng-view Explained",
        items: [
          "Placeholder for routed views",
          "AngularJS injects templates here",
          "One per application",
          "Required for routing",
        ],
      },
      right: {
        title: "How It Works",
        items: [
          "URL changes",
          "Route is matched",
          "Template is loaded",
          "Controller is instantiated",
        ],
      },
    },
  },

  {
    id: 96,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "ng-view Example",
    type: "code",
    content: {
      title: "Routing Placeholder",
      keyPoints: [
        "ng-view is placed in main layout",
        "Views swap automatically",
        "No page reload",
      ],
      code: `<div ng-view></div>`,
      explanation: "AngularJS dynamically loads route templates into ng-view.",
    },
  },

  {
    id: 97,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "Navigating Between Routes",
    type: "two-column",
    content: {
      left: {
        title: "Navigation Options",
        items: [
          "Anchor links",
          "$location service",
          "Programmatic navigation",
          "Browser history support",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Use href with hash",
          "Keep URLs meaningful",
          "Avoid hard reloads",
          "Leverage routing",
        ],
      },
    },
  },

  {
    id: 98,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "Navigation Example",
    type: "code",
    content: {
      title: "Using Links",
      keyPoints: [
        "Hash-based routing",
        "URL updates without reload",
        "Works with ngRoute",
      ],
      code: `<a href="#!/">Home</a>
<a href="#!/about">About</a>`,
      explanation:
        "Links update the URL and trigger route changes without reloading the page.",
    },
  },

  {
    id: 99,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "Common Routing Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting ng-view",
          "Missing ngRoute dependency",
          "Incorrect template paths",
          "Config logic outside config block",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Verify module dependencies",
          "Check browser console",
          "Use proper file structure",
          "Follow AngularJS lifecycle",
        ],
      },
    },
  },

  {
    id: 100,
    moduleId: 9,
    moduleTitle: "Routing & Single Page Applications",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "$http service",
          "API integration",
          "Server communication",
          "Real data",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand SPAs",
          "You configure routes",
          "You navigate views",
          "Ready for APIs",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 10: $http & API Integration
  // =========================

  {
    id: 101,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "Why Applications Need APIs",
    type: "two-column",
    content: {
      left: {
        title: "Modern App Reality",
        items: [
          "Data lives on servers",
          "Frontends consume APIs",
          "UI depends on remote data",
          "Apps must communicate externally",
        ],
      },
      right: {
        title: "AngularJS Solution",
        items: [
          "$http service for requests",
          "Promise-based API",
          "JSON-friendly",
          "Integrated with digest cycle",
        ],
      },
    },
  },

  {
    id: 102,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "What Is the $http Service?",
    type: "two-column",
    content: {
      left: {
        title: "$http Explained",
        items: [
          "Core AngularJS service",
          "Handles HTTP requests",
          "Returns promises",
          "Works with REST APIs",
        ],
      },
      right: {
        title: "Supported Operations",
        items: ["GET", "POST", "PUT", "DELETE"],
      },
    },
  },

  {
    id: 103,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "Making a GET Request",
    type: "code",
    content: {
      title: "Fetching Data from an API",
      keyPoints: [
        "$http.get sends a GET request",
        "Returns a promise",
        "Response data available in then()",
      ],
      code: `app.controller("UserController", function ($scope, $http) {
  $http.get("/api/users")
    .then(function (response) {
      $scope.users = response.data;
    });
});`,
      explanation:
        "The $http service fetches data and updates the scope when the response arrives.",
    },
  },

  {
    id: 104,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "Understanding Promises",
    type: "two-column",
    content: {
      left: {
        title: "Promise Basics",
        items: [
          "Represents future value",
          "Resolved on success",
          "Rejected on failure",
          "Asynchronous flow",
        ],
      },
      right: {
        title: "Why Promises Matter",
        items: [
          "Non-blocking requests",
          "Clean async handling",
          "Readable code",
          "Error handling support",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "Handling Errors",
    type: "two-column",
    content: {
      left: {
        title: "Error Scenarios",
        items: [
          "Network failures",
          "Server errors",
          "Unauthorized access",
          "Invalid responses",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Always handle errors",
          "Show user-friendly messages",
          "Log failures",
          "Fail gracefully",
        ],
      },
    },
  },

  {
    id: 106,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "Error Handling Example",
    type: "code",
    content: {
      title: "Handling Success and Failure",
      keyPoints: [
        "then handles success",
        "catch handles errors",
        "UI can respond to failures",
      ],
      code: `$http.get("/api/users")
  .then(function (response) {
    $scope.users = response.data;
  })
  .catch(function () {
    $scope.error = "Failed to load users";
  });`,
      explanation:
        "Errors are caught and handled without crashing the application.",
    },
  },

  {
    id: 107,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "POST Requests",
    type: "two-column",
    content: {
      left: {
        title: "Sending Data",
        items: [
          "Create new resources",
          "Submit forms",
          "Send JSON payloads",
          "Persist user input",
        ],
      },
      right: {
        title: "$http.post",
        items: [
          "Sends data to server",
          "Returns a promise",
          "Handles JSON automatically",
          "Used for create actions",
        ],
      },
    },
  },

  {
    id: 108,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "POST Request Example",
    type: "code",
    content: {
      title: "Submitting Data",
      keyPoints: [
        "Second argument is request body",
        "JSON sent by default",
        "Response handled via promise",
      ],
      code: `$http.post("/api/users", {
  name: $scope.name
}).then(function () {
  $scope.success = true;
});`,
      explanation:
        "The server receives data and the UI reacts to the response.",
    },
  },

  {
    id: 109,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "Using Services for API Calls",
    type: "two-column",
    content: {
      left: {
        title: "Why Use Services",
        items: [
          "Avoid duplicated API logic",
          "Centralize data access",
          "Simpler controllers",
          "Easier testing",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Put $http logic in services",
          "Controllers consume services",
          "Single source of truth",
          "Cleaner architecture",
        ],
      },
    },
  },

  {
    id: 110,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "API Service Example",
    type: "code",
    content: {
      title: "Encapsulating HTTP Logic",
      keyPoints: [
        "Service wraps $http",
        "Reusable API calls",
        "Controller stays thin",
      ],
      code: `app.factory("UserApi", function ($http) {
  return {
    getAll: function () {
      return $http.get("/api/users");
    }
  };
});`,
      explanation:
        "The service abstracts HTTP communication away from controllers.",
    },
  },

  {
    id: 111,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Calling APIs directly in templates",
          "Ignoring error handling",
          "Duplicating $http logic",
          "Blocking UI with sync logic",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always use services",
          "Handle success and errors",
          "Reuse API layers",
          "Think asynchronously",
        ],
      },
    },
  },

  {
    id: 112,
    moduleId: 10,
    moduleTitle: "$http & API Integration",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Forms",
          "Validation",
          "ngModel deep dive",
          "User input control",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You fetch remote data",
          "You handle async logic",
          "You integrate APIs",
          "Ready for forms",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 11: Forms, Validation & ngModel
  // =========================

  {
    id: 113,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Why Forms Matter",
    type: "two-column",
    content: {
      left: {
        title: "Forms in Applications",
        items: [
          "User data entry",
          "Authentication",
          "Settings and profiles",
          "Core interaction point",
        ],
      },
      right: {
        title: "AngularJS Advantage",
        items: [
          "Built-in form handling",
          "Automatic state tracking",
          "Declarative validation",
          "Clean user feedback",
        ],
      },
    },
  },

  {
    id: 114,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "What Is ngModel?",
    type: "two-column",
    content: {
      left: {
        title: "ngModel Explained",
        items: [
          "Directive for two-way binding",
          "Connects input to $scope",
          "Tracks control state",
          "Central to forms",
        ],
      },
      right: {
        title: "What ngModel Provides",
        items: [
          "Value synchronization",
          "Validation state",
          "Dirty / pristine tracking",
          "Touched / untouched tracking",
        ],
      },
    },
  },

  {
    id: 115,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Basic Form with ngModel",
    type: "code",
    content: {
      title: "Simple Form Example",
      keyPoints: [
        "ng-model binds input to data",
        "Form submission via ng-submit",
        "No manual DOM handling",
      ],
      code: `<form ng-submit="submit()">
  <input type="text" ng-model="user.name" />
  <button type="submit">Submit</button>
</form>`,
      explanation: "The input field is bound to scope data using ng-model.",
    },
  },

  {
    id: 116,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Form Controller Logic",
    type: "code",
    content: {
      title: "Handling Submission",
      keyPoints: [
        "Form data stored in $scope",
        "Submit function processes input",
        "AngularJS prevents reload",
      ],
      code: `app.controller("FormController", function ($scope) {
  $scope.user = {};

  $scope.submit = function () {
    console.log($scope.user);
  };
});`,
      explanation: "The controller handles form submission logic cleanly.",
    },
  },

  {
    id: 117,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Form States",
    type: "two-column",
    content: {
      left: {
        title: "Form State Flags",
        items: ["$pristine", "$dirty", "$valid", "$invalid"],
      },
      right: {
        title: "Why State Matters",
        items: [
          "User feedback",
          "Validation control",
          "UX improvements",
          "Form logic decisions",
        ],
      },
    },
  },

  {
    id: 118,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Input Validation Basics",
    type: "two-column",
    content: {
      left: {
        title: "Built-in Validators",
        items: ["required", "type", "minlength / maxlength", "pattern"],
      },
      right: {
        title: "Validation Behavior",
        items: [
          "Validation runs automatically",
          "Errors tracked per input",
          "UI updates dynamically",
          "No custom code required",
        ],
      },
    },
  },

  {
    id: 119,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Validation Example",
    type: "code",
    content: {
      title: "Required Field Validation",
      keyPoints: [
        "required attribute triggers validation",
        "ng-model tracks validity",
        "Form state updates automatically",
      ],
      code: `<form name="userForm">
  <input
    type="email"
    ng-model="user.email"
    required
  />
  <span ng-show="userForm.$invalid">
    Invalid email
  </span>
</form>`,
      explanation:
        "AngularJS automatically validates the input and updates form state.",
    },
  },

  {
    id: 120,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Displaying Validation Errors",
    type: "two-column",
    content: {
      left: {
        title: "User Feedback",
        items: [
          "Show errors only when needed",
          "Avoid overwhelming users",
          "Clear messages",
          "UX-focused validation",
        ],
      },
      right: {
        title: "Common Conditions",
        items: ["$touched", "$dirty", "$invalid", "$submitted"],
      },
    },
  },

  {
    id: 121,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Error Display Example",
    type: "code",
    content: {
      title: "Conditional Error Messages",
      keyPoints: [
        "Show errors after interaction",
        "Use form state flags",
        "Cleaner UX",
      ],
      code: `<span
  ng-show="userForm.email.$touched && userForm.email.$invalid">
  Please enter a valid email
</span>`,
      explanation:
        "Errors are shown only after the user interacts with the input.",
    },
  },

  {
    id: 122,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Disabling Submit Until Valid",
    type: "two-column",
    content: {
      left: {
        title: "Why Disable Submit",
        items: [
          "Prevent invalid submissions",
          "Guide user behavior",
          "Improve UX",
          "Reduce server errors",
        ],
      },
      right: {
        title: "How AngularJS Helps",
        items: [
          "Form validity flags",
          "ng-disabled directive",
          "Declarative control",
          "Simple logic",
        ],
      },
    },
  },

  {
    id: 123,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Disable Submit Example",
    type: "code",
    content: {
      title: "Preventing Invalid Submission",
      keyPoints: [
        "ng-disabled binds to form state",
        "Button enabled only when valid",
        "Declarative UX control",
      ],
      code: `<button
  type="submit"
  ng-disabled="userForm.$invalid">
  Submit
</button>`,
      explanation:
        "The submit button is disabled until the form becomes valid.",
    },
  },

  {
    id: 124,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Ignoring form state",
          "Showing errors too early",
          "Manual validation logic",
          "Mixing DOM logic with controllers",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Leverage AngularJS validation",
          "Use built-in flags",
          "Keep templates declarative",
          "Trust the framework",
        ],
      },
    },
  },

  {
    id: 125,
    moduleId: 11,
    moduleTitle: "Forms, Validation & ngModel",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Scope hierarchy",
          "Digest cycle",
          "Performance considerations",
          "Advanced internals",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You build validated forms",
          "You use ngModel effectively",
          "You manage user input",
          "Ready for AngularJS internals",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 12: Scope Hierarchy & Digest Cycle
  // =========================

  {
    id: 126,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "Why Scope Internals Matter",
    type: "two-column",
    content: {
      left: {
        title: "Beginner vs Expert Gap",
        items: [
          "Beginners use $scope",
          "Experts understand how it works",
          "Performance issues come from misuse",
          "Debugging requires internal knowledge",
        ],
      },
      right: {
        title: "What You’ll Learn",
        items: [
          "How scopes are created",
          "How data flows",
          "Why updates happen",
          "How AngularJS detects changes",
        ],
      },
    },
  },

  {
    id: 127,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "Scope Hierarchy Explained",
    type: "two-column",
    content: {
      left: {
        title: "Scope Tree",
        items: [
          "Scopes form a hierarchy",
          "Root scope at the top",
          "Child scopes inherit properties",
          "Each controller creates a scope",
        ],
      },
      right: {
        title: "Common Scope Creators",
        items: ["ng-controller", "ng-repeat", "Directives", "ng-if"],
      },
    },
  },

  {
    id: 128,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "Scope Inheritance Example",
    type: "code",
    content: {
      title: "Parent and Child Scopes",
      keyPoints: [
        "Child scope inherits from parent",
        "Primitive values can be shadowed",
        "Objects are shared by reference",
      ],
      code: `app.controller("ParentCtrl", function ($scope) {
  $scope.user = { name: "Alice" };
});

app.controller("ChildCtrl", function ($scope) {
  $scope.user.name = "Bob";
});`,
      explanation:
        "Changes to object properties affect both parent and child scopes.",
    },
  },

  {
    id: 129,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "Primitive vs Object Binding",
    type: "two-column",
    content: {
      left: {
        title: "Primitive Values",
        items: [
          "Copied to child scope",
          "Can be shadowed",
          "Common source of bugs",
          "Breaks expected behavior",
        ],
      },
      right: {
        title: "Objects",
        items: [
          "Shared by reference",
          "Preferred for binding",
          "Avoids shadowing",
          "Best practice",
        ],
      },
    },
  },

  {
    id: 130,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "Introducing the Digest Cycle",
    type: "two-column",
    content: {
      left: {
        title: "Digest Cycle Explained",
        items: [
          "AngularJS change detection mechanism",
          "Runs watchers",
          "Checks for data changes",
          "Updates the view",
        ],
      },
      right: {
        title: "When It Runs",
        items: ["User events", "$http responses", "$timeout", "$interval"],
      },
    },
  },

  {
    id: 131,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "Watchers",
    type: "two-column",
    content: {
      left: {
        title: "What Is a Watcher?",
        items: [
          "Function that tracks expressions",
          "Created for bindings",
          "Checked every digest cycle",
          "Can impact performance",
        ],
      },
      right: {
        title: "Important Facts",
        items: [
          "More watchers = slower digest",
          "ng-repeat adds many watchers",
          "Complex expressions are costly",
          "Performance-sensitive feature",
        ],
      },
    },
  },

  {
    id: 132,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "Using $watch",
    type: "code",
    content: {
      title: "Watching Scope Changes",
      keyPoints: [
        "$watch observes expressions",
        "Callback runs on change",
        "Use sparingly",
      ],
      code: `$scope.$watch("count", function (newVal, oldVal) {
  if (newVal !== oldVal) {
    console.log("Count changed");
  }
});`,
      explanation: "The watcher runs whenever the watched value changes.",
    },
  },

  {
    id: 133,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "$apply vs $digest",
    type: "two-column",
    content: {
      left: {
        title: "$digest",
        items: [
          "Runs watchers on current scope",
          "Used internally",
          "Limited scope traversal",
          "Lower-level API",
        ],
      },
      right: {
        title: "$apply",
        items: [
          "Triggers full digest cycle",
          "Used for external changes",
          "Wraps non-Angular code",
          "Safer for updates",
        ],
      },
    },
  },

  {
    id: 134,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "$apply Example",
    type: "code",
    content: {
      title: "Updating Scope from External Code",
      keyPoints: [
        "Use $apply for non-Angular events",
        "Ensures UI updates",
        "Avoids sync issues",
      ],
      code: `setTimeout(function () {
  $scope.$apply(function () {
    $scope.count++;
  });
}, 1000);`,
      explanation: "Wrapping changes in $apply ensures AngularJS notices them.",
    },
  },

  {
    id: 135,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "Performance Considerations",
    type: "two-column",
    content: {
      left: {
        title: "What Hurts Performance",
        items: [
          "Too many watchers",
          "Deep scope trees",
          "Heavy expressions",
          "Large ng-repeat lists",
        ],
      },
      right: {
        title: "Optimization Tips",
        items: [
          "Use one-time bindings",
          "Limit watchers",
          "Paginate large lists",
          "Profile before optimizing",
        ],
      },
    },
  },

  {
    id: 136,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "Common Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing $watch",
          "Ignoring scope inheritance",
          "Calling $digest manually",
          "Binding primitives in child scopes",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Understand scope flow",
          "Prefer object binding",
          "Let AngularJS manage digests",
          "Design with performance in mind",
        ],
      },
    },
  },

  {
    id: 137,
    moduleId: 12,
    moduleTitle: "Scope Hierarchy & Digest Cycle",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Custom directives",
          "Reusable UI components",
          "DOM interaction",
          "Advanced AngularJS patterns",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand scope internals",
          "You know how digest works",
          "You can debug performance issues",
          "Ready for custom directives",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 13: Custom Directives (Deep Dive)
  // =========================

  {
    id: 138,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Why Custom Directives Matter",
    type: "two-column",
    content: {
      left: {
        title: "The Limitation",
        items: [
          "Built-in directives are generic",
          "Complex UI logic gets duplicated",
          "Controllers should not touch DOM",
          "Templates become cluttered",
        ],
      },
      right: {
        title: "The Directive Solution",
        items: [
          "Encapsulated DOM behavior",
          "Reusable UI components",
          "Cleaner controllers",
          "Declarative custom HTML",
        ],
      },
    },
  },

  {
    id: 139,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "What Is a Custom Directive?",
    type: "two-column",
    content: {
      left: {
        title: "Directive Explained",
        items: [
          "A marker on a DOM element",
          "Attaches custom behavior",
          "Can manipulate DOM safely",
          "AngularJS-managed lifecycle",
        ],
      },
      right: {
        title: "Key Use Cases",
        items: [
          "Reusable UI widgets",
          "DOM integrations",
          "Complex interactions",
          "Third-party library wrapping",
        ],
      },
    },
  },

  {
    id: 140,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Creating a Basic Directive",
    type: "code",
    content: {
      title: "Directive Definition",
      keyPoints: [
        "Defined using app.directive",
        "Returns a directive definition object",
        "Name uses camelCase in JS",
      ],
      code: `app.directive("myDirective", function () {
  return {
    restrict: "E",
    template: "<p>Hello from directive</p>"
  };
});`,
      explanation: "The directive can now be used as a custom HTML element.",
    },
  },

  {
    id: 141,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Directive Naming & Usage",
    type: "two-column",
    content: {
      left: {
        title: "Naming Rules",
        items: [
          "camelCase in JavaScript",
          "kebab-case in HTML",
          "Prefix recommended",
          "Avoid collisions",
        ],
      },
      right: {
        title: "HTML Usage",
        items: [
          "<my-directive></my-directive>",
          "my-directive attribute",
          "Readable templates",
          "Declarative components",
        ],
      },
    },
  },

  {
    id: 142,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Directive Restrict Options",
    type: "two-column",
    content: {
      left: {
        title: "Restrict Types",
        items: [
          "E – Element",
          "A – Attribute",
          "C – Class",
          "M – Comment (rare)",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Prefer E and A",
          "Avoid C and M",
          "Keep usage consistent",
          "Readable HTML",
        ],
      },
    },
  },

  {
    id: 143,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Template vs TemplateUrl",
    type: "two-column",
    content: {
      left: {
        title: "template",
        items: [
          "Inline HTML",
          "Good for small markup",
          "Quick prototyping",
          "Harder to maintain",
        ],
      },
      right: {
        title: "templateUrl",
        items: [
          "External HTML file",
          "Better for large templates",
          "Cleaner directives",
          "Production-ready",
        ],
      },
    },
  },

  {
    id: 144,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Isolate Scope",
    type: "two-column",
    content: {
      left: {
        title: "Why Isolate Scope",
        items: [
          "Avoid scope pollution",
          "Create reusable components",
          "Explicit data flow",
          "Safer architecture",
        ],
      },
      right: {
        title: "Binding Types",
        items: [
          "@ – string binding",
          "= – two-way binding",
          "& – function binding",
          "Explicit API",
        ],
      },
    },
  },

  {
    id: 145,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Isolate Scope Example",
    type: "code",
    content: {
      title: "Directive with Isolate Scope",
      keyPoints: [
        "Explicit input bindings",
        "Reusable component behavior",
        "Cleaner scope boundaries",
      ],
      code: `app.directive("userCard", function () {
  return {
    restrict: "E",
    scope: {
      name: "@",
      onSelect: "&"
    },
    template: "<div>{{ name }}</div>"
  };
});`,
      explanation:
        "The directive defines a clear API using isolate scope bindings.",
    },
  },

  {
    id: 146,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "compile vs link",
    type: "two-column",
    content: {
      left: {
        title: "compile",
        items: [
          "Runs once per template",
          "DOM transformation",
          "Before scope binding",
          "Rarely needed",
        ],
      },
      right: {
        title: "link",
        items: [
          "Runs per instance",
          "Access to scope",
          "Event listeners",
          "Most common hook",
        ],
      },
    },
  },

  {
    id: 147,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Link Function Example",
    type: "code",
    content: {
      title: "DOM Interaction Safely",
      keyPoints: [
        "Use link for DOM access",
        "Avoid controllers for DOM",
        "AngularJS lifecycle aware",
      ],
      code: `link: function (scope, element) {
  element.on("click", function () {
    element.addClass("active");
  });
}`,
      explanation:
        "The link function allows safe DOM interaction within AngularJS.",
    },
  },

  {
    id: 148,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Directive Controllers",
    type: "two-column",
    content: {
      left: {
        title: "Directive Controller",
        items: [
          "Used for directive communication",
          "Shared logic between directives",
          "Not the same as ng-controller",
          "Advanced pattern",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Nested directives",
          "Complex components",
          "Shared behavior",
          "Large systems",
        ],
      },
    },
  },

  {
    id: 149,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "Common Directive Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Manipulating DOM in controllers",
          "Not using isolate scope",
          "Overengineering directives",
          "Ignoring lifecycle hooks",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Use directives for DOM work",
          "Define clear APIs",
          "Start simple",
          "Follow AngularJS patterns",
        ],
      },
    },
  },

  {
    id: 150,
    moduleId: 13,
    moduleTitle: "Custom Directives (Deep Dive)",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Advanced dependency injection",
          "Providers",
          "Config vs run phases",
          "Application lifecycle",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You build custom directives",
          "You understand directive internals",
          "You create reusable components",
          "Ready for DI internals",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 14: Advanced Dependency Injection & Providers
  // =========================

  {
    id: 151,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Why Advanced DI Matters",
    type: "two-column",
    content: {
      left: {
        title: "Beyond Basics",
        items: [
          "Large applications need configuration",
          "Different environments require flexibility",
          "Runtime behavior must be controlled",
          "Poor DI design causes tight coupling",
        ],
      },
      right: {
        title: "What Advanced DI Enables",
        items: [
          "Configurable services",
          "Environment-based behavior",
          "Clean application lifecycle",
          "Scalable architecture",
        ],
      },
    },
  },

  {
    id: 152,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "AngularJS Application Lifecycle",
    type: "two-column",
    content: {
      left: {
        title: "Two Main Phases",
        items: [
          "Config phase",
          "Run phase",
          "Each has different capabilities",
          "DI behaves differently",
        ],
      },
      right: {
        title: "Why This Matters",
        items: [
          "Some services unavailable in config",
          "Providers only configurable early",
          "Prevents runtime errors",
          "Expert-level understanding",
        ],
      },
    },
  },

  {
    id: 153,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Config Phase",
    type: "two-column",
    content: {
      left: {
        title: "Config Phase Explained",
        items: [
          "Runs before app starts",
          "Used for configuration",
          "Only providers injectable",
          "No access to $scope",
        ],
      },
      right: {
        title: "Common Uses",
        items: [
          "Routing configuration",
          "HTTP interceptors",
          "Provider setup",
          "Constant values",
        ],
      },
    },
  },

  {
    id: 154,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Run Phase",
    type: "two-column",
    content: {
      left: {
        title: "Run Phase Explained",
        items: [
          "Runs after injector is ready",
          "Application startup logic",
          "Access to services",
          "No configuration allowed",
        ],
      },
      right: {
        title: "Common Uses",
        items: [
          "Authentication checks",
          "Initial data loading",
          "Global event listeners",
          "App initialization",
        ],
      },
    },
  },

  {
    id: 155,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Understanding Providers",
    type: "two-column",
    content: {
      left: {
        title: "What Is a Provider?",
        items: [
          "Lowest-level DI construct",
          "Used to create services",
          "Configurable before instantiation",
          "Exposes $get method",
        ],
      },
      right: {
        title: "Why Providers Exist",
        items: [
          "Allow configuration",
          "Control service creation",
          "Environment flexibility",
          "Advanced use cases",
        ],
      },
    },
  },

  {
    id: 156,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Provider vs Factory vs Service",
    type: "two-column",
    content: {
      left: {
        title: "service",
        items: [
          "Simple constructor",
          "Instantiated with new",
          "Not configurable",
          "Beginner-friendly",
        ],
      },
      right: {
        title: "factory / provider",
        items: [
          "Factory returns object",
          "Provider is configurable",
          "More control",
          "Advanced usage",
        ],
      },
    },
  },

  {
    id: 157,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Creating a Provider",
    type: "code",
    content: {
      title: "Provider Definition",
      keyPoints: [
        "Provider exposes $get",
        "Configurable before runtime",
        "Used for advanced services",
      ],
      code: `app.provider("ApiConfig", function () {
  var baseUrl = "";

  this.setBaseUrl = function (url) {
    baseUrl = url;
  };

  this.$get = function () {
    return {
      getBaseUrl: function () {
        return baseUrl;
      }
    };
  };
});`,
      explanation: "Providers allow configuration before the application runs.",
    },
  },

  {
    id: 158,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Configuring a Provider",
    type: "code",
    content: {
      title: "Using Provider in Config Phase",
      keyPoints: [
        "Providers configurable in config",
        "Used for environment setup",
        "Not available at runtime",
      ],
      code: `app.config(function (ApiConfigProvider) {
  ApiConfigProvider.setBaseUrl("/api");
});`,
      explanation: "Provider configuration happens during the config phase.",
    },
  },

  {
    id: 159,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Using Provider at Runtime",
    type: "code",
    content: {
      title: "Injecting Configured Service",
      keyPoints: [
        "Use provider-created service",
        "Configured values available",
        "Normal DI applies",
      ],
      code: `app.controller("MainController", function ($scope, ApiConfig) {
  $scope.apiUrl = ApiConfig.getBaseUrl();
});`,
      explanation: "The configured provider is injected as a normal service.",
    },
  },

  {
    id: 160,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Constants vs Values",
    type: "two-column",
    content: {
      left: {
        title: "constant",
        items: [
          "Available in config phase",
          "Immutable",
          "Used for configuration",
          "Safe for critical values",
        ],
      },
      right: {
        title: "value",
        items: [
          "Available at runtime only",
          "Mutable",
          "Simple data storage",
          "Less strict",
        ],
      },
    },
  },

  {
    id: 161,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "Common Advanced DI Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Injecting services in config",
          "Misusing providers",
          "Overengineering DI",
          "Ignoring lifecycle phases",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Know what phase you're in",
          "Use simplest DI tool needed",
          "Design before coding",
          "Follow AngularJS patterns",
        ],
      },
    },
  },

  {
    id: 162,
    moduleId: 14,
    moduleTitle: "Advanced Dependency Injection & Providers",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Performance optimization",
          "Watchers and bindings",
          "Real-world scaling issues",
          "Expert-level tuning",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand DI internals",
          "You use providers correctly",
          "You manage app lifecycle",
          "Ready for performance optimization",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 15: Performance Optimization & Best Practices
  // =========================

  {
    id: 163,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "Why Performance Matters in AngularJS",
    type: "two-column",
    content: {
      left: {
        title: "Common Performance Problems",
        items: [
          "Slow UI updates",
          "Laggy interactions",
          "High CPU usage",
          "Poor user experience",
        ],
      },
      right: {
        title: "Why AngularJS Apps Suffer",
        items: [
          "Too many watchers",
          "Heavy digest cycles",
          "Large DOM trees",
          "Poor architectural choices",
        ],
      },
    },
  },

  {
    id: 164,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "Understanding Watcher Cost",
    type: "two-column",
    content: {
      left: {
        title: "Watcher Impact",
        items: [
          "Each binding creates a watcher",
          "All watchers run every digest",
          "More watchers = slower app",
          "Hidden performance bottleneck",
        ],
      },
      right: {
        title: "High-Risk Features",
        items: [
          "ng-repeat on large lists",
          "Complex expressions",
          "Nested scopes",
          "Frequent digest triggers",
        ],
      },
    },
  },

  {
    id: 165,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "One-Time Bindings",
    type: "two-column",
    content: {
      left: {
        title: "One-Time Binding (::)",
        items: [
          "Stops watching after first value",
          "Reduces watcher count",
          "Improves performance",
          "Ideal for static data",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Configuration data",
          "Static labels",
          "API data that won't change",
          "Read-only content",
        ],
      },
    },
  },

  {
    id: 166,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "One-Time Binding Example",
    type: "code",
    content: {
      title: "Using :: Syntax",
      keyPoints: [
        "Binding removed after first digest",
        "Reduces digest workload",
        "Simple optimization",
      ],
      code: `<p>{{ ::appName }}</p>`,
      explanation:
        "AngularJS stops watching this expression after it resolves once.",
    },
  },

  {
    id: 167,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "Optimizing ng-repeat",
    type: "two-column",
    content: {
      left: {
        title: "Common Issues",
        items: [
          "Large lists",
          "Repeated DOM creation",
          "High watcher count",
          "Slow scrolling",
        ],
      },
      right: {
        title: "Optimization Techniques",
        items: [
          "track by",
          "Pagination",
          "Virtual scrolling",
          "Limit visible items",
        ],
      },
    },
  },

  {
    id: 168,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "ng-repeat Optimization Example",
    type: "code",
    content: {
      title: "Using track by",
      keyPoints: [
        "Improves DOM reuse",
        "Prevents unnecessary re-renders",
        "Recommended for lists",
      ],
      code: `<li ng-repeat="item in items track by item.id">
  {{ item.name }}
</li>`,
      explanation: "track by helps AngularJS reuse DOM elements efficiently.",
    },
  },

  {
    id: 169,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "Avoiding Expensive Expressions",
    type: "two-column",
    content: {
      left: {
        title: "What Hurts Performance",
        items: [
          "Function calls in templates",
          "Complex calculations",
          "Deep object traversal",
          "Repeated execution",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Precompute values",
          "Use simple bindings",
          "Move logic to controllers",
          "Cache results",
        ],
      },
    },
  },

  {
    id: 170,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "Using $timeout and $interval Wisely",
    type: "two-column",
    content: {
      left: {
        title: "Potential Issues",
        items: [
          "Trigger digest cycles",
          "High-frequency updates",
          "Battery drain",
          "Unnecessary UI refresh",
        ],
      },
      right: {
        title: "Optimization Tips",
        items: [
          "Limit frequency",
          "Cancel unused timers",
          "Avoid tight loops",
          "Batch updates",
        ],
      },
    },
  },

  {
    id: 171,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "Manual DOM Manipulation Warning",
    type: "two-column",
    content: {
      left: {
        title: "Why It’s Dangerous",
        items: [
          "Bypasses AngularJS lifecycle",
          "Causes sync issues",
          "Hard to debug",
          "Breaks data binding",
        ],
      },
      right: {
        title: "Proper Alternatives",
        items: [
          "Use directives",
          "Use bindings",
          "Leverage AngularJS APIs",
          "Let framework manage DOM",
        ],
      },
    },
  },

  {
    id: 172,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "Profiling AngularJS Apps",
    type: "two-column",
    content: {
      left: {
        title: "Profiling Tools",
        items: [
          "Browser DevTools",
          "Batarang (legacy)",
          "Performance tab",
          "Console logging",
        ],
      },
      right: {
        title: "What to Measure",
        items: [
          "Digest duration",
          "Watcher count",
          "DOM updates",
          "Memory usage",
        ],
      },
    },
  },

  {
    id: 173,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "Production Best Practices",
    type: "two-column",
    content: {
      left: {
        title: "Recommended Practices",
        items: [
          "Use minification-safe DI",
          "Enable strict DI",
          "Organize modules",
          "Remove debug code",
        ],
      },
      right: {
        title: "Long-Term Stability",
        items: [
          "Predictable performance",
          "Easier maintenance",
          "Fewer regressions",
          "Scalable codebase",
        ],
      },
    },
  },

  {
    id: 174,
    moduleId: 15,
    moduleTitle: "Performance Optimization & Best Practices",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Testing AngularJS applications",
          "Unit and integration tests",
          "Mocking services",
          "Production readiness",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You optimize AngularJS apps",
          "You manage performance",
          "You avoid common pitfalls",
          "Ready for testing",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 16: Testing AngularJS Applications
  // =========================

  {
    id: 175,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "Why Testing Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Testing",
        items: [
          "Bugs reach production",
          "Refactoring becomes risky",
          "Hard to verify behavior",
          "Low confidence releases",
        ],
      },
      right: {
        title: "With Testing",
        items: [
          "Predictable behavior",
          "Safer refactoring",
          "Higher code quality",
          "Professional-grade applications",
        ],
      },
    },
  },

  {
    id: 176,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "Types of Tests in AngularJS",
    type: "two-column",
    content: {
      left: {
        title: "Unit Tests",
        items: [
          "Test individual components",
          "Fast execution",
          "Isolated logic",
          "Most common",
        ],
      },
      right: {
        title: "Integration / E2E Tests",
        items: [
          "Test full flows",
          "Simulate user behavior",
          "Slower but realistic",
          "Used sparingly",
        ],
      },
    },
  },

  {
    id: 177,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "Testing Tools Overview",
    type: "two-column",
    content: {
      left: {
        title: "Core Tools",
        items: [
          "Jasmine – test framework",
          "Karma – test runner",
          "angular-mocks",
          "Browser-based testing",
        ],
      },
      right: {
        title: "Why These Tools",
        items: [
          "Official AngularJS support",
          "Easy DI mocking",
          "Fast feedback",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 178,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "Testing a Controller",
    type: "code",
    content: {
      title: "Controller Unit Test",
      keyPoints: [
        "Load module under test",
        "Inject dependencies",
        "Assert scope behavior",
      ],
      code: `describe("MainController", function () {
  beforeEach(module("myApp"));

  it("should initialize count to 0", inject(function ($controller, $rootScope) {
    var scope = $rootScope.$new();
    $controller("MainController", { $scope: scope });

    expect(scope.count).toBe(0);
  }));
});`,
      explanation:
        "This test verifies that the controller initializes state correctly.",
    },
  },

  {
    id: 179,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "Mocking Services",
    type: "two-column",
    content: {
      left: {
        title: "Why Mock Services",
        items: [
          "Isolate logic",
          "Avoid real API calls",
          "Control test data",
          "Faster tests",
        ],
      },
      right: {
        title: "angular-mocks Features",
        items: [
          "$provide",
          "Mock services",
          "Override implementations",
          "Test isolation",
        ],
      },
    },
  },

  {
    id: 180,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "Mock Service Example",
    type: "code",
    content: {
      title: "Mocking with $provide",
      keyPoints: [
        "Override real service",
        "Provide fake implementation",
        "Test controller behavior",
      ],
      code: `beforeEach(module(function ($provide) {
  $provide.service("UserService", function () {
    this.getName = function () {
      return "Test User";
    };
  });
}));`,
      explanation:
        "The real UserService is replaced with a mock during testing.",
    },
  },

  {
    id: 181,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "Testing Services",
    type: "code",
    content: {
      title: "Service Unit Test",
      keyPoints: [
        "Inject service directly",
        "Test business logic",
        "No DOM involved",
      ],
      code: `describe("MathService", function () {
  beforeEach(module("myApp"));

  it("should add numbers correctly", inject(function (MathService) {
    expect(MathService.add(2, 3)).toBe(5);
  }));
});`,
      explanation: "Services are easy to test because they contain pure logic.",
    },
  },

  {
    id: 182,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "Testing HTTP Calls",
    type: "two-column",
    content: {
      left: {
        title: "$httpBackend",
        items: [
          "Mock HTTP requests",
          "Control responses",
          "No real network calls",
          "Deterministic tests",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "API service tests",
          "Error handling verification",
          "Async flow testing",
          "Edge case simulation",
        ],
      },
    },
  },

  {
    id: 183,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "HTTP Mock Example",
    type: "code",
    content: {
      title: "Mocking $http Requests",
      keyPoints: [
        "Expect HTTP calls",
        "Respond with fake data",
        "Flush to resolve",
      ],
      code: `it("should fetch users", inject(function ($httpBackend, UserApi) {
  $httpBackend.expectGET("/api/users").respond(200, []);

  UserApi.getAll();
  $httpBackend.flush();
}));`,
      explanation:
        "The test intercepts HTTP calls and provides mock responses.",
    },
  },

  {
    id: 184,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "Common Testing Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Testing implementation details",
          "Not mocking dependencies",
          "Slow, brittle tests",
          "Skipping tests entirely",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Test behavior, not internals",
          "Mock external dependencies",
          "Keep tests small",
          "Test critical paths",
        ],
      },
    },
  },

  {
    id: 185,
    moduleId: 16,
    moduleTitle: "Testing AngularJS Applications",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Component-based AngularJS",
          "Modern AngularJS patterns",
          "Preparing for migration",
          "Final architecture",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You write unit tests",
          "You mock dependencies",
          "You test APIs",
          "Ready for modern AngularJS",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 17: Component-Based AngularJS (1.5+)
  // =========================

  {
    id: 186,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Why Components Were Introduced",
    type: "two-column",
    content: {
      left: {
        title: "Problems with Controllers + Directives",
        items: [
          "Too many patterns",
          "Inconsistent structure",
          "Hard to onboard new developers",
          "Difficult maintenance",
        ],
      },
      right: {
        title: "Component Solution",
        items: [
          "Standardized architecture",
          "Clear inputs and outputs",
          "Simpler mental model",
          "Closer to modern frameworks",
        ],
      },
    },
  },

  {
    id: 187,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "What Is an AngularJS Component?",
    type: "two-column",
    content: {
      left: {
        title: "Component Explained",
        items: [
          "A simplified directive",
          "Focused on UI composition",
          "Uses isolate scope by default",
          "Controller-first design",
        ],
      },
      right: {
        title: "Key Characteristics",
        items: [
          "One-way bindings",
          "Template-driven",
          "Lifecycle hooks",
          "Encourages best practices",
        ],
      },
    },
  },

  {
    id: 188,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Creating a Component",
    type: "code",
    content: {
      title: "Basic Component Definition",
      keyPoints: [
        "Defined using app.component",
        "Encapsulates template and logic",
        "Preferred over controllers",
      ],
      code: `app.component("userProfile", {
  template: "<h3>{{$ctrl.name}}</h3>",
  controller: function () {
    this.name = "AngularJS User";
  }
});`,
      explanation:
        "Components combine template and controller into a single unit.",
    },
  },

  {
    id: 189,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Component Naming & Usage",
    type: "two-column",
    content: {
      left: {
        title: "Naming Conventions",
        items: [
          "camelCase in JavaScript",
          "kebab-case in HTML",
          "Descriptive names",
          "Component per feature",
        ],
      },
      right: {
        title: "HTML Usage",
        items: [
          "<user-profile></user-profile>",
          "Readable templates",
          "Declarative UI",
          "Encapsulated behavior",
        ],
      },
    },
  },

  {
    id: 190,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Component Bindings",
    type: "two-column",
    content: {
      left: {
        title: "Binding Types",
        items: [
          "< – one-way binding",
          "@ – string binding",
          "& – callback binding",
          "Explicit data flow",
        ],
      },
      right: {
        title: "Why One-Way Matters",
        items: [
          "Predictable data flow",
          "Easier debugging",
          "Fewer side effects",
          "Modern pattern",
        ],
      },
    },
  },

  {
    id: 191,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Component Binding Example",
    type: "code",
    content: {
      title: "Passing Data to a Component",
      keyPoints: [
        "Bindings define component API",
        "Data flows from parent",
        "Callbacks notify parent",
      ],
      code: `app.component("userCard", {
  bindings: {
    user: "<",
    onSelect: "&"
  },
  template: "<div ng-click='$ctrl.onSelect()'>{{$ctrl.user.name}}</div>"
});`,
      explanation: "The component receives data and communicates via bindings.",
    },
  },

  {
    id: 192,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Component Controllers",
    type: "two-column",
    content: {
      left: {
        title: "Controller Responsibilities",
        items: [
          "Manage component state",
          "Handle logic",
          "Respond to lifecycle hooks",
          "No DOM manipulation",
        ],
      },
      right: {
        title: "controllerAs Syntax",
        items: [
          "$ctrl alias",
          "Avoids $scope",
          "Cleaner templates",
          "Best practice",
        ],
      },
    },
  },

  {
    id: 193,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Lifecycle Hooks",
    type: "two-column",
    content: {
      left: {
        title: "Available Hooks",
        items: ["$onInit", "$onChanges", "$onDestroy", "$postLink"],
      },
      right: {
        title: "Why Hooks Matter",
        items: [
          "Controlled initialization",
          "Respond to input changes",
          "Cleanup resources",
          "Predictable lifecycle",
        ],
      },
    },
  },

  {
    id: 194,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Lifecycle Hook Example",
    type: "code",
    content: {
      title: "Using $onInit",
      keyPoints: [
        "Runs after bindings initialized",
        "Safe place for setup",
        "Replaces constructor logic",
      ],
      code: `controller: function () {
  this.$onInit = function () {
    this.loaded = true;
  };
}`,
      explanation: "The $onInit hook is ideal for initialization logic.",
    },
  },

  {
    id: 195,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Components vs Directives",
    type: "two-column",
    content: {
      left: {
        title: "Components",
        items: [
          "UI-focused",
          "Simpler API",
          "Encouraged by AngularJS",
          "Default isolate scope",
        ],
      },
      right: {
        title: "Directives",
        items: [
          "DOM-focused",
          "Lower-level",
          "More flexible",
          "Used sparingly",
        ],
      },
    },
  },

  {
    id: 196,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "Common Component Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using $scope inside components",
          "Two-way binding everywhere",
          "Large monolithic components",
          "DOM manipulation in controller",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Use $ctrl consistently",
          "Prefer one-way bindings",
          "Split components",
          "Use directives for DOM work",
        ],
      },
    },
  },

  {
    id: 197,
    moduleId: 17,
    moduleTitle: "Component-Based AngularJS (1.5+)",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Topics",
        items: [
          "Legacy AngularJS patterns",
          "Anti-patterns",
          "Migration strategies",
          "Capstone project",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You use components",
          "You follow modern AngularJS patterns",
          "You write maintainable UI code",
          "Ready for real-world AngularJS",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 18: Legacy Patterns, Anti-Patterns & Migration Strategy
  // =========================

  {
    id: 198,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "Why This Module Matters",
    type: "two-column",
    content: {
      left: {
        title: "Real-World Reality",
        items: [
          "Most AngularJS apps are legacy",
          "You will maintain existing code",
          "Not all code follows best practices",
          "Understanding bad patterns is critical",
        ],
      },
      right: {
        title: "What You’ll Gain",
        items: [
          "Ability to read old codebases",
          "Confidence fixing legacy issues",
          "Skill to modernize incrementally",
          "Professional AngularJS competence",
        ],
      },
    },
  },

  {
    id: 199,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "Common Legacy AngularJS Patterns",
    type: "two-column",
    content: {
      left: {
        title: "Frequently Seen Patterns",
        items: [
          "$scope everywhere",
          "Logic-heavy controllers",
          "Direct DOM manipulation",
          "Monolithic modules",
        ],
      },
      right: {
        title: "Why They Existed",
        items: [
          "Early AngularJS guidance",
          "Lack of components",
          "Small initial apps",
          "Framework evolution",
        ],
      },
    },
  },

  {
    id: 200,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "Controller Anti-Patterns",
    type: "two-column",
    content: {
      left: {
        title: "Anti-Patterns",
        items: [
          "Fat controllers",
          "DOM access in controllers",
          "Business logic in $scope",
          "Duplicated logic",
        ],
      },
      right: {
        title: "Modern Fix",
        items: [
          "Move logic to services",
          "Use components",
          "Thin controllers",
          "Clear separation of concerns",
        ],
      },
    },
  },

  {
    id: 201,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "Template Anti-Patterns",
    type: "two-column",
    content: {
      left: {
        title: "Bad Practices",
        items: [
          "Complex expressions",
          "Calling functions in templates",
          "Nested ng-repeat abuse",
          "Heavy filters",
        ],
      },
      right: {
        title: "Best Practice Replacement",
        items: [
          "Precompute values",
          "Simple bindings",
          "Component composition",
          "Template simplicity",
        ],
      },
    },
  },

  {
    id: 202,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "Service Anti-Patterns",
    type: "two-column",
    content: {
      left: {
        title: "What Goes Wrong",
        items: [
          "God services",
          "State mutation everywhere",
          "Hidden side effects",
          "Tight coupling",
        ],
      },
      right: {
        title: "Correct Approach",
        items: [
          "Single responsibility",
          "Explicit APIs",
          "Predictable behavior",
          "Testable services",
        ],
      },
    },
  },

  {
    id: 203,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "Refactoring Toward Components",
    type: "two-column",
    content: {
      left: {
        title: "Incremental Refactor",
        items: [
          "Wrap legacy UI in components",
          "Move logic gradually",
          "Isolate new code",
          "Avoid big rewrites",
        ],
      },
      right: {
        title: "Why Incremental Works",
        items: [
          "Lower risk",
          "Easier testing",
          "Continuous delivery",
          "Business-friendly",
        ],
      },
    },
  },

  {
    id: 204,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "Preparing for Angular (2+)",
    type: "two-column",
    content: {
      left: {
        title: "AngularJS → Angular",
        items: [
          "Different architecture",
          "TypeScript-based",
          "Component-only model",
          "RxJS heavy",
        ],
      },
      right: {
        title: "Preparation Steps",
        items: [
          "Use components everywhere",
          "controllerAs syntax",
          "One-way bindings",
          "Modular structure",
        ],
      },
    },
  },

  {
    id: 205,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "Using ngUpgrade (Conceptual)",
    type: "two-column",
    content: {
      left: {
        title: "ngUpgrade Explained",
        items: [
          "Hybrid AngularJS + Angular apps",
          "Gradual migration",
          "Shared services",
          "Enterprise approach",
        ],
      },
      right: {
        title: "When to Use It",
        items: [
          "Large production apps",
          "No rewrite option",
          "Long migration timeline",
          "Dedicated teams",
        ],
      },
    },
  },

  {
    id: 206,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "When NOT to Migrate",
    type: "two-column",
    content: {
      left: {
        title: "Valid Reasons",
        items: [
          "App is stable",
          "Low change frequency",
          "Budget constraints",
          "No new feature demand",
        ],
      },
      right: {
        title: "Alternative",
        items: [
          "Refactor for maintainability",
          "Improve performance",
          "Add tests",
          "Freeze architecture",
        ],
      },
    },
  },

  {
    id: 207,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "Professional Expectations",
    type: "two-column",
    content: {
      left: {
        title: "As a Developer",
        items: [
          "Read legacy code confidently",
          "Refactor safely",
          "Communicate tradeoffs",
          "Choose pragmatic solutions",
        ],
      },
      right: {
        title: "Industry Reality",
        items: [
          "Legacy never disappears",
          "Maintenance is valuable",
          "Modernization is gradual",
          "Experience > hype",
        ],
      },
    },
  },

  {
    id: 208,
    moduleId: 18,
    moduleTitle: "Legacy Patterns, Anti-Patterns & Migration Strategy",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Final Module",
        items: [
          "Capstone project",
          "Full AngularJS application",
          "Real-world structure",
          "Beginner → Expert validation",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand legacy AngularJS",
          "You recognize anti-patterns",
          "You plan migrations strategically",
          "Ready for capstone",
        ],
      },
    },
  },
  // =========================
  // AngularJS Module 19: Capstone Project – Full AngularJS Application
  // =========================

  {
    id: 209,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "Capstone Overview",
    type: "two-column",
    content: {
      left: {
        title: "Project Goal",
        items: [
          "Build a real AngularJS SPA",
          "Apply beginner-to-expert concepts",
          "Follow best practices",
          "Demonstrate production-ready structure",
        ],
      },
      right: {
        title: "What You’ll Build",
        items: [
          "User management app",
          "Authentication simulation",
          "API-driven data",
          "Component-based UI",
        ],
      },
    },
  },

  {
    id: 210,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "Functional Requirements",
    type: "two-column",
    content: {
      left: {
        title: "Core Features",
        items: [
          "List users",
          "View user details",
          "Create new users",
          "Delete users",
        ],
      },
      right: {
        title: "Technical Requirements",
        items: [
          "Routing with ngRoute",
          "Services for API logic",
          "Components for UI",
          "Form validation",
        ],
      },
    },
  },

  {
    id: 211,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "Application Architecture",
    type: "two-column",
    content: {
      left: {
        title: "High-Level Structure",
        items: [
          "Single root module",
          "Feature-based components",
          "Centralized services",
          "Declarative templates",
        ],
      },
      right: {
        title: "Folder Structure",
        items: ["/components", "/services", "/views", "/app.js", "/index.html"],
      },
    },
  },

  {
    id: 212,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "Defining the Root Module",
    type: "code",
    content: {
      title: "App Initialization",
      keyPoints: [
        "Declare dependencies",
        "Enable routing",
        "Single entry point",
      ],
      code: `var app = angular.module("userApp", ["ngRoute"]);`,
      explanation:
        "The root module wires together routing, components, and services.",
    },
  },

  {
    id: 213,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "Routing Configuration",
    type: "code",
    content: {
      title: "App Routes",
      keyPoints: [
        "Map URLs to components",
        "Separate views by feature",
        "Fallback route",
      ],
      code: `app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      template: "<user-list></user-list>"
    })
    .when("/users/new", {
      template: "<user-form></user-form>"
    })
    .otherwise({ redirectTo: "/" });
});`,
      explanation: "Routing connects URLs to component-driven views.",
    },
  },

  {
    id: 214,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "Creating the User Service",
    type: "code",
    content: {
      title: "Centralized Data Logic",
      keyPoints: [
        "Encapsulate $http",
        "Single source of truth",
        "Reusable API layer",
      ],
      code: `app.factory("UserService", function ($http) {
  return {
    getAll: function () {
      return $http.get("/api/users");
    },
    create: function (user) {
      return $http.post("/api/users", user);
    },
    remove: function (id) {
      return $http.delete("/api/users/" + id);
    }
  };
});`,
      explanation: "The service abstracts all server communication.",
    },
  },

  {
    id: 215,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "User List Component",
    type: "code",
    content: {
      title: "Listing Users",
      keyPoints: [
        "Component-based UI",
        "Consumes UserService",
        "One-way data flow",
      ],
      code: `app.component("userList", {
  template: \`
    <h2>Users</h2>
    <ul>
      <li ng-repeat="user in $ctrl.users track by user.id">
        {{ user.name }}
        <button ng-click="$ctrl.delete(user.id)">Delete</button>
      </li>
    </ul>
  \`,
  controller: function (UserService) {
    var ctrl = this;

    ctrl.$onInit = function () {
      UserService.getAll().then(function (res) {
        ctrl.users = res.data;
      });
    };

    ctrl.delete = function (id) {
      UserService.remove(id);
    };
  }
});`,
      explanation:
        "The component loads and displays users using best practices.",
    },
  },

  {
    id: 216,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "User Form Component",
    type: "code",
    content: {
      title: "Creating Users",
      keyPoints: ["Form validation", "ngModel usage", "Service integration"],
      code: `app.component("userForm", {
  template: \`
    <form ng-submit="$ctrl.save()" name="userForm">
      <input ng-model="$ctrl.user.name" required />
      <button type="submit" ng-disabled="userForm.$invalid">
        Save
      </button>
    </form>
  \`,
  controller: function (UserService, $location) {
    this.user = {};

    this.save = function () {
      UserService.create(this.user).then(function () {
        $location.path("/");
      });
    };
  }
});`,
      explanation: "The form component handles creation with validation.",
    },
  },

  {
    id: 217,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "Applying Best Practices",
    type: "two-column",
    content: {
      left: {
        title: "What We Applied",
        items: [
          "Components over controllers",
          "Services for logic",
          "One-way bindings",
          "Routing-based navigation",
        ],
      },
      right: {
        title: "What We Avoided",
        items: [
          "Fat controllers",
          "DOM manipulation",
          "Global state abuse",
          "Template complexity",
        ],
      },
    },
  },

  {
    id: 218,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "How This Proves Mastery",
    type: "two-column",
    content: {
      left: {
        title: "Beginner Skills",
        items: ["Bindings", "Directives", "Forms", "Routing"],
      },
      right: {
        title: "Expert Skills",
        items: [
          "Architecture",
          "Performance awareness",
          "Maintainability",
          "Migration readiness",
        ],
      },
    },
  },

  {
    id: 219,
    moduleId: 19,
    moduleTitle: "Capstone Project – Full AngularJS Application",
    title: "Course Completion",
    type: "two-column",
    content: {
      left: {
        title: "You Can Now",
        items: [
          "Build AngularJS apps confidently",
          "Maintain legacy codebases",
          "Refactor to modern patterns",
          "Explain AngularJS internals",
        ],
      },
      right: {
        title: "Next Steps",
        items: [
          "Practice with real projects",
          "Add testing",
          "Explore Angular (2+)",
          "Apply skills professionally",
        ],
      },
    },
  },
];
