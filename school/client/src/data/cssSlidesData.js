export const cssSlidesData = [
  // =========================
  // CSS Module 1: CSS Fundamentals & How Styling Works
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "What Is CSS?",
    type: "two-column",
    content: {
      left: {
        title: "CSS Defined",
        items: [
          "Cascading Style Sheets",
          "Controls presentation of HTML",
          "Not a programming language",
          "Rule-based styling system",
        ],
      },
      right: {
        title: "What CSS Controls",
        items: [
          "Colors & typography",
          "Spacing & layout",
          "Positioning",
          "Responsive behavior",
        ],
      },
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "Why CSS Exists",
    type: "two-column",
    content: {
      left: {
        title: "Without CSS",
        items: [
          "Plain, unstyled pages",
          "Poor readability",
          "No layout control",
          "Bad user experience",
        ],
      },
      right: {
        title: "With CSS",
        items: [
          "Visual hierarchy",
          "Brand identity",
          "Responsive layouts",
          "Professional polish",
        ],
      },
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "How CSS Works Conceptually",
    type: "two-column",
    content: {
      left: {
        title: "Browser Process",
        items: ["Parse HTML", "Build DOM", "Load CSS", "Apply styles"],
      },
      right: {
        title: "Key Insight",
        items: [
          "HTML provides structure",
          "CSS decorates structure",
          "Styles cascade",
          "Order matters",
        ],
      },
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "Ways to Add CSS",
    type: "two-column",
    content: {
      left: {
        title: "External CSS (Recommended)",
        items: ["Linked .css file", "Reusable", "Clean separation", "Scalable"],
      },
      right: {
        title: "Other Methods",
        items: [
          "Internal <style>",
          "Inline styles",
          "Inline discouraged",
          "Maintenance issues",
        ],
      },
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "Linking an External CSS File",
    type: "code",
    content: {
      description: "Connecting HTML to CSS.",
      code: `<link rel="stylesheet" href="styles.css" />`,
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "CSS Rule Anatomy",
    type: "two-column",
    content: {
      left: {
        title: "Rule Structure",
        items: ["Selector", "Declaration block", "Property", "Value"],
      },
      right: {
        title: "Mental Model",
        items: [
          "Select elements",
          "Describe appearance",
          "Apply rules",
          "Repeat consistently",
        ],
      },
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "CSS Rule Example",
    type: "code",
    content: {
      description: "Basic CSS rule.",
      code: `p {
  color: blue;
  font-size: 16px;
}`,
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "The Cascade Explained",
    type: "two-column",
    content: {
      left: {
        title: "Cascade Factors",
        items: ["Source order", "Specificity", "Importance", "Inheritance"],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Conflicting rules resolved",
          "Predictable styling",
          "Debugging clarity",
          "CSS power",
        ],
      },
    },
  },

  {
    id: 9,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "Inheritance Basics",
    type: "two-column",
    content: {
      left: {
        title: "Inherited Properties",
        items: ["color", "font-family", "line-height", "text-align"],
      },
      right: {
        title: "Not Inherited",
        items: ["margin", "padding", "border", "width/height"],
      },
    },
  },

  {
    id: 10,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "Common Beginner CSS Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Inline styles everywhere",
          "Overusing !important",
          "Messy selectors",
          "No structure",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "External stylesheets",
          "Understand cascade",
          "Write readable rules",
          "Style systematically",
        ],
      },
    },
  },

  {
    id: 11,
    moduleId: 1,
    moduleTitle: "CSS Fundamentals & How Styling Works",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Selectors",
          "Combinators",
          "Specificity",
          "Targeting elements",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Understand CSS purpose",
          "Know how CSS applies",
          "Read and write rules",
          "Ready for selectors",
        ],
      },
    },
  },
  // =========================
  // CSS Module 2: Selectors, Combinators & Specificity
  // =========================

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Why Selectors Matter",
    type: "two-column",
    content: {
      left: {
        title: "Selectors Define Reach",
        items: [
          "Determine what gets styled",
          "Control precision",
          "Affect performance",
          "Impact maintainability",
        ],
      },
      right: {
        title: "Good Selector Strategy",
        items: [
          "Predictable styling",
          "Minimal overrides",
          "Readable CSS",
          "Scalable codebase",
        ],
      },
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Basic Selectors",
    type: "two-column",
    content: {
      left: {
        title: "Common Selectors",
        items: [
          "Element selector",
          "Class selector",
          "ID selector",
          "Universal selector",
        ],
      },
      right: {
        title: "Examples",
        items: ["p", ".card", "#header", "*"],
      },
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Basic Selector Examples",
    type: "code",
    content: {
      description: "Targeting elements directly.",
      code: `p { color: black; }
.card { padding: 1rem; }
#header { background: #eee; }`,
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Class vs ID (Best Practice)",
    type: "two-column",
    content: {
      left: {
        title: "Class Selectors",
        items: [
          "Reusable",
          "Low specificity",
          "Preferred for styling",
          "Composable",
        ],
      },
      right: {
        title: "ID Selectors",
        items: [
          "Unique",
          "High specificity",
          "Avoid for styling",
          "Better for JS/hooks",
        ],
      },
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Attribute Selectors",
    type: "two-column",
    content: {
      left: {
        title: "What They Do",
        items: [
          "Target attributes",
          "No extra classes needed",
          "Semantic-friendly",
          "Useful for forms",
        ],
      },
      right: {
        title: "Common Patterns",
        items: [
          "[type='email']",
          "[href]",
          "[data-state='active']",
          "[aria-expanded='true']",
        ],
      },
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Attribute Selector Example",
    type: "code",
    content: {
      description: "Styling based on attributes.",
      code: `input[type="email"] {
  border-color: blue;
}`,
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Combinators Explained",
    type: "two-column",
    content: {
      left: {
        title: "Combinator Types",
        items: [
          "Descendant (space)",
          "Child (>)",
          "Adjacent sibling (+)",
          "General sibling (~)",
        ],
      },
      right: {
        title: "Why Use Them",
        items: [
          "Context-aware styling",
          "Avoid extra classes",
          "Reflect HTML structure",
          "Cleaner markup",
        ],
      },
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Combinator Examples",
    type: "code",
    content: {
      description: "Targeting by relationship.",
      code: `nav a { color: blue; }
ul > li { list-style: none; }
h2 + p { margin-top: 0; }`,
    },
  },

  {
    id: 20,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Pseudo-classes",
    type: "two-column",
    content: {
      left: {
        title: "Common Pseudo-classes",
        items: [":hover", ":focus", ":active", ":first-child"],
      },
      right: {
        title: "Use Cases",
        items: [
          "User interaction",
          "Keyboard accessibility",
          "State styling",
          "Better UX",
        ],
      },
    },
  },

  {
    id: 21,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Pseudo-class Example",
    type: "code",
    content: {
      description: "Interactive styling.",
      code: `button:hover {
  background: black;
  color: white;
}

a:focus {
  outline: 2px solid blue;
}`,
    },
  },

  {
    id: 22,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Specificity Explained",
    type: "two-column",
    content: {
      left: {
        title: "Specificity Order",
        items: [
          "Inline styles",
          "ID selectors",
          "Class / attribute selectors",
          "Element selectors",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Higher specificity wins",
          "Last rule wins if equal",
          "Avoid specificity wars",
          "Design for simplicity",
        ],
      },
    },
  },

  {
    id: 23,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Specificity Example",
    type: "code",
    content: {
      description: "Conflicting rules resolved.",
      code: `p { color: black; }
.article p { color: blue; }
#content p { color: red; }`,
    },
  },

  {
    id: 24,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Avoiding !important",
    type: "two-column",
    content: {
      left: {
        title: "Why !important Is Bad",
        items: [
          "Breaks cascade",
          "Hard to override",
          "Leads to hacks",
          "Poor maintainability",
        ],
      },
      right: {
        title: "Better Alternatives",
        items: [
          "Improve selector design",
          "Reduce specificity",
          "Refactor structure",
          "Use cascade intentionally",
        ],
      },
    },
  },

  {
    id: 25,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing IDs",
          "Long selector chains",
          "Excessive !important",
          "Styling without structure",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Prefer classes",
          "Keep selectors shallow",
          "Understand specificity",
          "Style intentionally",
        ],
      },
    },
  },

  {
    id: 26,
    moduleId: 2,
    moduleTitle: "Selectors, Combinators & Specificity",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Colors",
          "Units & sizing",
          "Typography basics",
          "Visual foundations",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Selectors mastered",
          "Specificity understood",
          "Cleaner CSS",
          "Ready for styling",
        ],
      },
    },
  },
  // =========================
  // CSS Module 3: Colors, Units & Typography Fundamentals
  // =========================

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Why Visual Fundamentals Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Visual Control",
        items: [
          "Poor readability",
          "Weak hierarchy",
          "Unprofessional look",
          "Accessibility issues",
        ],
      },
      right: {
        title: "With Strong Fundamentals",
        items: [
          "Clear hierarchy",
          "Readable content",
          "Consistent design",
          "Accessible UI",
        ],
      },
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Color in CSS",
    type: "two-column",
    content: {
      left: {
        title: "What Color Controls",
        items: ["Text color", "Backgrounds", "Borders", "UI emphasis"],
      },
      right: {
        title: "Design Insight",
        items: [
          "Contrast matters",
          "Color communicates meaning",
          "Accessibility first",
          "Consistency is key",
        ],
      },
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Color Formats",
    type: "two-column",
    content: {
      left: {
        title: "Common Formats",
        items: [
          "Named colors",
          "Hex (#RRGGBB)",
          "rgb() / rgba()",
          "hsl() / hsla()",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Hex for design systems",
          "RGB for transparency",
          "HSL for theming",
          "Avoid named colors in production",
        ],
      },
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Color Examples",
    type: "code",
    content: {
      description: "Different color formats.",
      code: `p { color: #333333; }
button { background-color: rgb(0, 120, 255); }
.alert { background: hsl(0, 80%, 60%); }`,
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Contrast & Accessibility",
    type: "two-column",
    content: {
      left: {
        title: "Accessibility Rule",
        items: [
          "Text must be readable",
          "WCAG contrast ratios",
          "Color is not the only cue",
          "Test contrast",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Dark text on light backgrounds",
          "Avoid low-contrast combos",
          "Use tools to test",
          "Design inclusively",
        ],
      },
    },
  },

  {
    id: 32,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "CSS Units Explained",
    type: "two-column",
    content: {
      left: {
        title: "Absolute Units",
        items: ["px", "pt", "cm", "Rarely responsive"],
      },
      right: {
        title: "Relative Units",
        items: ["em", "rem", "%", "vw / vh"],
      },
    },
  },

  {
    id: 33,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Why Relative Units Matter",
    type: "two-column",
    content: {
      left: {
        title: "Problems with px",
        items: [
          "Not user-scalable",
          "Accessibility issues",
          "Rigid layouts",
          "Harder responsiveness",
        ],
      },
      right: {
        title: "Benefits of rem/em",
        items: [
          "User-controlled scaling",
          "Consistent hierarchy",
          "Responsive by default",
          "Accessibility-friendly",
        ],
      },
    },
  },

  {
    id: 34,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Unit Examples",
    type: "code",
    content: {
      description: "Using relative units.",
      code: `html { font-size: 16px; }

body { font-size: 1rem; }
h1 { font-size: 2rem; }
.card { padding: 1.5em; }`,
    },
  },

  {
    id: 35,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Typography Basics",
    type: "two-column",
    content: {
      left: {
        title: "Core Properties",
        items: ["font-family", "font-size", "font-weight", "line-height"],
      },
      right: {
        title: "Typography Goals",
        items: [
          "Readable text",
          "Clear hierarchy",
          "Comfortable scanning",
          "Professional tone",
        ],
      },
    },
  },

  {
    id: 36,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Font Families",
    type: "two-column",
    content: {
      left: {
        title: "Generic Families",
        items: ["serif", "sans-serif", "monospace", "system-ui"],
      },
      right: {
        title: "Best Practice",
        items: [
          "Prefer system fonts early",
          "Use fallbacks",
          "Avoid too many fonts",
          "Consistency matters",
        ],
      },
    },
  },

  {
    id: 37,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Typography Example",
    type: "code",
    content: {
      description: "Basic typography styling.",
      code: `body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #222;
}

h1 {
  font-weight: 700;
}`,
    },
  },

  {
    id: 38,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Tiny font sizes",
          "Low contrast colors",
          "Using px everywhere",
          "Too many fonts",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Readable font sizes",
          "Test contrast",
          "Prefer rem/em",
          "Limit font families",
        ],
      },
    },
  },

  {
    id: 39,
    moduleId: 3,
    moduleTitle: "Colors, Units & Typography Fundamentals",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: ["Box model", "Margin & padding", "Borders", "Sizing elements"],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Color usage understood",
          "Responsive units applied",
          "Readable typography",
          "Ready for layout fundamentals",
        ],
      },
    },
  },
  // =========================
  // CSS Module 4: The Box Model, Spacing & Sizing
  // =========================

  {
    id: 40,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Why the Box Model Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Understanding It",
        items: [
          "Layouts break unexpectedly",
          "Spacing feels random",
          "Elements overflow",
          "Debugging becomes painful",
        ],
      },
      right: {
        title: "With Strong Understanding",
        items: [
          "Predictable layouts",
          "Consistent spacing",
          "Clean alignment",
          "Confident debugging",
        ],
      },
    },
  },

  {
    id: 41,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "What Is the CSS Box Model?",
    type: "two-column",
    content: {
      left: {
        title: "Box Layers",
        items: ["Content", "Padding", "Border", "Margin"],
      },
      right: {
        title: "Key Idea",
        items: [
          "Everything is a box",
          "Spacing is layered",
          "Size is cumulative",
          "Order matters",
        ],
      },
    },
  },

  {
    id: 42,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Visualizing the Box Model",
    type: "two-column",
    content: {
      left: {
        title: "From Inside Out",
        items: [
          "Content → text/image",
          "Padding → inner space",
          "Border → visible edge",
          "Margin → outer space",
        ],
      },
      right: {
        title: "Debug Tip",
        items: [
          "Use browser dev tools",
          "Inspect box layers",
          "Toggle box model view",
          "Understand spacing visually",
        ],
      },
    },
  },

  {
    id: 43,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Padding Explained",
    type: "two-column",
    content: {
      left: {
        title: "Padding Properties",
        items: [
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
        ],
      },
      right: {
        title: "Shorthand",
        items: [
          "padding: 1rem",
          "padding: 1rem 2rem",
          "padding: 1rem 2rem 0.5rem",
          "Clockwise order",
        ],
      },
    },
  },

  {
    id: 44,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Padding Example",
    type: "code",
    content: {
      description: "Adding space inside elements.",
      code: `.card {
  padding: 1.5rem;
}`,
    },
  },

  {
    id: 45,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Border Basics",
    type: "two-column",
    content: {
      left: {
        title: "Border Properties",
        items: [
          "border-width",
          "border-style",
          "border-color",
          "border-radius",
        ],
      },
      right: {
        title: "Why Borders Matter",
        items: [
          "Visual separation",
          "Debug layout edges",
          "UI emphasis",
          "Component definition",
        ],
      },
    },
  },

  {
    id: 46,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Border Example",
    type: "code",
    content: {
      description: "Defining element boundaries.",
      code: `.card {
  border: 1px solid #ddd;
  border-radius: 8px;
}`,
    },
  },

  {
    id: 47,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Margin Explained",
    type: "two-column",
    content: {
      left: {
        title: "Margin Properties",
        items: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
      },
      right: {
        title: "Key Behavior",
        items: [
          "Creates outer space",
          "Can collapse vertically",
          "Does not affect element size",
          "Controls separation",
        ],
      },
    },
  },

  {
    id: 48,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Margin Example",
    type: "code",
    content: {
      description: "Spacing between elements.",
      code: `.card {
  margin-bottom: 2rem;
}`,
    },
  },

  {
    id: 49,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Margin Collapsing",
    type: "two-column",
    content: {
      left: {
        title: "What Happens",
        items: [
          "Vertical margins collapse",
          "Larger margin wins",
          "Only affects block elements",
          "Common confusion point",
        ],
      },
      right: {
        title: "How to Avoid Issues",
        items: [
          "Use padding instead",
          "Add borders",
          "Use flexbox/grid",
          "Understand flow",
        ],
      },
    },
  },

  {
    id: 50,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Width & Height",
    type: "two-column",
    content: {
      left: {
        title: "Default Behavior",
        items: [
          "Width = content only",
          "Padding & border add size",
          "Can overflow container",
          "Box sizing matters",
        ],
      },
      right: {
        title: "Sizing Units",
        items: ["px", "%", "rem", "vw / vh"],
      },
    },
  },

  {
    id: 51,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "box-sizing Property",
    type: "two-column",
    content: {
      left: {
        title: "content-box (default)",
        items: [
          "Width excludes padding",
          "Width excludes border",
          "Harder to reason about",
          "Legacy behavior",
        ],
      },
      right: {
        title: "border-box (recommended)",
        items: [
          "Width includes padding",
          "Width includes border",
          "Predictable sizing",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 52,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "box-sizing Example",
    type: "code",
    content: {
      description: "Applying border-box globally.",
      code: `* {
  box-sizing: border-box;
}`,
    },
  },

  {
    id: 53,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Ignoring box-sizing",
          "Random margins",
          "Overlapping elements",
          "Hard-coded sizes",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use border-box",
          "Design spacing system",
          "Inspect layouts",
          "Use relative units",
        ],
      },
    },
  },

  {
    id: 54,
    moduleId: 4,
    moduleTitle: "The Box Model, Spacing & Sizing",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Display property",
          "Inline vs block",
          "Flexbox basics",
          "Layout flow",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Box model mastered",
          "Spacing predictable",
          "Sizing under control",
          "Ready for layout systems",
        ],
      },
    },
  },
  // =========================
  // CSS Module 5: Display, Flow & Flexbox Fundamentals
  // =========================

  {
    id: 55,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "Understanding Document Flow",
    type: "two-column",
    content: {
      left: {
        title: "Normal Flow",
        items: [
          "Block elements stack vertically",
          "Inline elements flow horizontally",
          "Predictable behavior",
          "Default browser layout",
        ],
      },
      right: {
        title: "Why Flow Matters",
        items: [
          "Layout expectations",
          "Avoids hacks",
          "Cleaner CSS",
          "Foundation for flex/grid",
        ],
      },
    },
  },

  {
    id: 56,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "The display Property",
    type: "two-column",
    content: {
      left: {
        title: "Common Values",
        items: ["block", "inline", "inline-block", "none"],
      },
      right: {
        title: "Layout Impact",
        items: [
          "Changes flow behavior",
          "Affects sizing",
          "Controls visibility",
          "Core CSS concept",
        ],
      },
    },
  },

  {
    id: 57,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "Display Examples",
    type: "code",
    content: {
      description: "Different display behaviors.",
      code: `.box { display: block; }
.badge { display: inline-block; }
.hidden { display: none; }`,
    },
  },

  {
    id: 58,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "Inline vs Block",
    type: "two-column",
    content: {
      left: {
        title: "Block Elements",
        items: [
          "Full-width by default",
          "Respect width/height",
          "New line",
          "Stack vertically",
        ],
      },
      right: {
        title: "Inline Elements",
        items: [
          "Only as wide as content",
          "Ignore width/height",
          "Flow in text",
          "No line break",
        ],
      },
    },
  },

  {
    id: 59,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "inline-block Explained",
    type: "two-column",
    content: {
      left: {
        title: "inline-block",
        items: [
          "Flows inline",
          "Accepts width/height",
          "Respects margin/padding",
          "Hybrid behavior",
        ],
      },
      right: {
        title: "Common Use",
        items: ["Buttons", "Badges", "Nav items", "Legacy layouts"],
      },
    },
  },

  {
    id: 60,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "Flexbox Introduction",
    type: "two-column",
    content: {
      left: {
        title: "What Flexbox Solves",
        items: [
          "One-dimensional layout",
          "Alignment issues",
          "Spacing distribution",
          "Responsive rows/columns",
        ],
      },
      right: {
        title: "Flexbox Mental Model",
        items: [
          "Container & items",
          "Main axis & cross axis",
          "Flexible sizing",
          "Content-driven layout",
        ],
      },
    },
  },

  {
    id: 61,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "Creating a Flex Container",
    type: "code",
    content: {
      description: "Turning on flexbox.",
      code: `.container {
  display: flex;
}`,
    },
  },

  {
    id: 62,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "Main Axis vs Cross Axis",
    type: "two-column",
    content: {
      left: {
        title: "Main Axis",
        items: [
          "Direction of items",
          "row (default)",
          "column",
          "Controlled by flex-direction",
        ],
      },
      right: {
        title: "Cross Axis",
        items: [
          "Perpendicular to main",
          "Alignment axis",
          "Depends on direction",
          "Used for centering",
        ],
      },
    },
  },

  {
    id: 63,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "flex-direction",
    type: "two-column",
    content: {
      left: {
        title: "Values",
        items: ["row", "row-reverse", "column", "column-reverse"],
      },
      right: {
        title: "Effect",
        items: [
          "Changes main axis",
          "Reorders items",
          "Controls layout direction",
          "Responsive control",
        ],
      },
    },
  },

  {
    id: 64,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "flex-direction Example",
    type: "code",
    content: {
      description: "Changing item direction.",
      code: `.container {
  display: flex;
  flex-direction: column;
}`,
    },
  },

  {
    id: 65,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "justify-content",
    type: "two-column",
    content: {
      left: {
        title: "Controls Main Axis",
        items: ["flex-start", "center", "space-between", "space-around"],
      },
      right: {
        title: "Common Use",
        items: [
          "Horizontal centering",
          "Spacing items",
          "Nav bars",
          "Button groups",
        ],
      },
    },
  },

  {
    id: 66,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "justify-content Example",
    type: "code",
    content: {
      description: "Spacing flex items.",
      code: `.container {
  display: flex;
  justify-content: space-between;
}`,
    },
  },

  {
    id: 67,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "align-items",
    type: "two-column",
    content: {
      left: {
        title: "Controls Cross Axis",
        items: ["stretch (default)", "center", "flex-start", "flex-end"],
      },
      right: {
        title: "Common Use",
        items: [
          "Vertical centering",
          "Align cards",
          "Header layouts",
          "UI polish",
        ],
      },
    },
  },

  {
    id: 68,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "align-items Example",
    type: "code",
    content: {
      description: "Cross-axis alignment.",
      code: `.container {
  display: flex;
  align-items: center;
}`,
    },
  },

  {
    id: 69,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using flex everywhere",
          "Confusing axes",
          "Over-nesting containers",
          "Hardcoding spacing",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use flex where needed",
          "Think in axes",
          "Keep structure flat",
          "Use gap when possible",
        ],
      },
    },
  },

  {
    id: 70,
    moduleId: 5,
    moduleTitle: "Display, Flow & Flexbox Fundamentals",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Advanced Flexbox",
          "Wrapping & alignment",
          "Flex items",
          "Real layouts",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Flow understood",
          "Flexbox basics mastered",
          "Layouts simplified",
          "Ready for advanced flex",
        ],
      },
    },
  },
  // =========================
  // CSS Module 6: Advanced Flexbox & Responsive Layouts
  // =========================

  {
    id: 71,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "Why Advanced Flexbox Matters",
    type: "two-column",
    content: {
      left: {
        title: "Beginner Flexbox Limits",
        items: [
          "Single-row layouts only",
          "Overflow issues",
          "Rigid designs",
          "Poor responsiveness",
        ],
      },
      right: {
        title: "Advanced Flexbox Benefits",
        items: [
          "Flexible wrapping",
          "Adaptive layouts",
          "Cleaner responsive code",
          "Fewer media queries",
        ],
      },
    },
  },

  {
    id: 72,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "flex-wrap",
    type: "two-column",
    content: {
      left: {
        title: "What flex-wrap Does",
        items: [
          "Controls item wrapping",
          "Moves items to new rows",
          "Prevents overflow",
          "Enables responsive rows",
        ],
      },
      right: {
        title: "Values",
        items: ["nowrap (default)", "wrap", "wrap-reverse", "Layout control"],
      },
    },
  },

  {
    id: 73,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "flex-wrap Example",
    type: "code",
    content: {
      description: "Allowing flex items to wrap.",
      code: `.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}`,
    },
  },

  {
    id: 74,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "flex-flow Shorthand",
    type: "two-column",
    content: {
      left: {
        title: "What flex-flow Combines",
        items: ["flex-direction", "flex-wrap", "Single shorthand"],
      },
      right: {
        title: "Why Use It",
        items: [
          "Cleaner CSS",
          "Readable intent",
          "Fewer lines",
          "Consistent layout logic",
        ],
      },
    },
  },

  {
    id: 75,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "flex-flow Example",
    type: "code",
    content: {
      description: "Direction and wrapping together.",
      code: `.container {
  display: flex;
  flex-flow: row wrap;
}`,
    },
  },

  {
    id: 76,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "align-content",
    type: "two-column",
    content: {
      left: {
        title: "What align-content Does",
        items: [
          "Aligns rows of items",
          "Works with wrapping",
          "Controls cross-axis spacing",
          "Often confused with align-items",
        ],
      },
      right: {
        title: "Values",
        items: ["stretch", "center", "space-between", "space-around"],
      },
    },
  },

  {
    id: 77,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "align-content Example",
    type: "code",
    content: {
      description: "Aligning wrapped rows.",
      code: `.container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}`,
    },
  },

  {
    id: 78,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "Flex Items: flex-grow",
    type: "two-column",
    content: {
      left: {
        title: "flex-grow",
        items: [
          "Controls growth factor",
          "Distributes free space",
          "Relative sizing",
          "Content-aware",
        ],
      },
      right: {
        title: "Common Use",
        items: [
          "Equal-width cards",
          "Fluid layouts",
          "Responsive grids",
          "Adaptive UI",
        ],
      },
    },
  },

  {
    id: 79,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "flex-grow Example",
    type: "code",
    content: {
      description: "Growing flex items.",
      code: `.item {
  flex-grow: 1;
}`,
    },
  },

  {
    id: 80,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "Flex Items: flex-shrink",
    type: "two-column",
    content: {
      left: {
        title: "flex-shrink",
        items: [
          "Controls shrinking",
          "Prevents overflow",
          "Relative behavior",
          "Important for small screens",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Leave default unless needed",
          "Avoid zero shrink everywhere",
          "Test narrow screens",
          "Use min-width wisely",
        ],
      },
    },
  },

  {
    id: 81,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "Flex Items: flex-basis",
    type: "two-column",
    content: {
      left: {
        title: "flex-basis",
        items: [
          "Initial size of item",
          "Overrides width",
          "Basis for flex calculations",
          "Core sizing control",
        ],
      },
      right: {
        title: "Common Values",
        items: ["auto", "0", "px / % / rem", "Content-based"],
      },
    },
  },

  {
    id: 82,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "flex Shorthand",
    type: "two-column",
    content: {
      left: {
        title: "flex = grow shrink basis",
        items: [
          "flex: 1",
          "flex: 1 1 0",
          "flex: 0 0 auto",
          "Powerful shorthand",
        ],
      },
      right: {
        title: "Why Use It",
        items: [
          "Concise code",
          "Clear intent",
          "Industry standard",
          "Component-friendly",
        ],
      },
    },
  },

  {
    id: 83,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "flex Shorthand Example",
    type: "code",
    content: {
      description: "Using flex shorthand.",
      code: `.item {
  flex: 1 1 300px;
}`,
    },
  },

  {
    id: 84,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Confusing align-items vs align-content",
          "Hardcoding widths",
          "Overusing flex everywhere",
          "Ignoring wrapping",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Understand axes clearly",
          "Let flex do the work",
          "Design mobile-first",
          "Test at all widths",
        ],
      },
    },
  },

  {
    id: 85,
    moduleId: 6,
    moduleTitle: "Advanced Flexbox & Responsive Layouts",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "CSS Grid",
          "Two-dimensional layouts",
          "Page-level design",
          "Modern layout systems",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Advanced flexbox mastery",
          "Responsive layouts",
          "Cleaner CSS",
          "Ready for grid",
        ],
      },
    },
  },
  // =========================
  // CSS Module 7: CSS Grid Fundamentals
  // =========================

  {
    id: 86,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Why CSS Grid Exists",
    type: "two-column",
    content: {
      left: {
        title: "Problems Before Grid",
        items: [
          "Complex layouts with hacks",
          "Over-nesting containers",
          "Hard-to-maintain CSS",
          "Limited two-dimensional control",
        ],
      },
      right: {
        title: "What Grid Solves",
        items: [
          "True 2D layouts",
          "Rows and columns together",
          "Cleaner markup",
          "Predictable page structure",
        ],
      },
    },
  },

  {
    id: 87,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Grid Mental Model",
    type: "two-column",
    content: {
      left: {
        title: "Core Concepts",
        items: ["Grid container", "Grid items", "Rows", "Columns"],
      },
      right: {
        title: "Key Insight",
        items: [
          "Layout-first thinking",
          "Explicit placement",
          "Two-dimensional control",
          "Page-level layouts",
        ],
      },
    },
  },

  {
    id: 88,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Creating a Grid Container",
    type: "code",
    content: {
      description: "Turning on CSS Grid.",
      code: `.grid {
  display: grid;
}`,
    },
  },

  {
    id: 89,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Defining Columns",
    type: "two-column",
    content: {
      left: {
        title: "grid-template-columns",
        items: [
          "Defines column tracks",
          "Accepts multiple values",
          "Controls layout width",
          "Foundation of grid",
        ],
      },
      right: {
        title: "Common Patterns",
        items: [
          "Fixed columns",
          "Fluid columns",
          "Equal columns",
          "Responsive columns",
        ],
      },
    },
  },

  {
    id: 90,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Column Example",
    type: "code",
    content: {
      description: "Three equal columns.",
      code: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`,
    },
  },

  {
    id: 91,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Defining Rows",
    type: "two-column",
    content: {
      left: {
        title: "grid-template-rows",
        items: [
          "Defines row tracks",
          "Optional for implicit rows",
          "Controls vertical layout",
          "Complements columns",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Let rows be auto when possible",
          "Define rows for page layouts",
          "Avoid over-specification",
          "Content-aware sizing",
        ],
      },
    },
  },

  {
    id: 92,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Rows Example",
    type: "code",
    content: {
      description: "Header, content, footer rows.",
      code: `.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
}`,
    },
  },

  {
    id: 93,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "The fr Unit",
    type: "two-column",
    content: {
      left: {
        title: "What fr Means",
        items: [
          "Fraction of free space",
          "Fluid sizing",
          "Responsive by default",
          "Grid-only unit",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Simpler layouts",
          "No math required",
          "Adaptive columns",
          "Cleaner CSS",
        ],
      },
    },
  },

  {
    id: 94,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Grid Gap",
    type: "two-column",
    content: {
      left: {
        title: "gap Property",
        items: [
          "Controls spacing",
          "Replaces margin hacks",
          "Row and column gaps",
          "Works in flex & grid",
        ],
      },
      right: {
        title: "Why Use gap",
        items: [
          "Cleaner spacing",
          "Consistent rhythm",
          "Easier maintenance",
          "Modern standard",
        ],
      },
    },
  },

  {
    id: 95,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Gap Example",
    type: "code",
    content: {
      description: "Spacing grid items.",
      code: `.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}`,
    },
  },

  {
    id: 96,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Placing Grid Items",
    type: "two-column",
    content: {
      left: {
        title: "Placement Properties",
        items: [
          "grid-column",
          "grid-row",
          "Start / end lines",
          "Explicit placement",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "Hero sections",
          "Sidebars",
          "Featured cards",
          "Complex layouts",
        ],
      },
    },
  },

  {
    id: 97,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Placement Example",
    type: "code",
    content: {
      description: "Spanning columns.",
      code: `.hero {
  grid-column: 1 / -1;
}`,
    },
  },

  {
    id: 98,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Implicit vs Explicit Grid",
    type: "two-column",
    content: {
      left: {
        title: "Explicit Grid",
        items: [
          "Defined rows/columns",
          "Predictable layout",
          "Page structure",
          "Design-driven",
        ],
      },
      right: {
        title: "Implicit Grid",
        items: [
          "Auto-created tracks",
          "Content-driven",
          "Flexible growth",
          "Default behavior",
        ],
      },
    },
  },

  {
    id: 99,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing grid everywhere",
          "Hardcoding track sizes",
          "Ignoring gap",
          "Overcomplicating placement",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use grid for 2D layouts",
          "Prefer fr units",
          "Use gap for spacing",
          "Start simple",
        ],
      },
    },
  },

  {
    id: 100,
    moduleId: 7,
    moduleTitle: "CSS Grid Fundamentals",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Advanced Grid",
          "Grid areas",
          "Responsive grids",
          "Real layouts",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Grid fundamentals mastered",
          "2D layouts possible",
          "Cleaner page structure",
          "Ready for advanced grid",
        ],
      },
    },
  },
  // =========================
  // CSS Module 8: Advanced Grid, Grid Areas & Responsive Design
  // =========================

  {
    id: 101,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "Why Advanced Grid Matters",
    type: "two-column",
    content: {
      left: {
        title: "Limitations of Basic Grid",
        items: [
          "Manual placement everywhere",
          "Hard-to-read layouts",
          "Poor scalability",
          "Responsive friction",
        ],
      },
      right: {
        title: "Advanced Grid Benefits",
        items: [
          "Named areas",
          "Readable layouts",
          "Responsive by design",
          "Page-level control",
        ],
      },
    },
  },

  {
    id: 102,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "Grid Template Areas",
    type: "two-column",
    content: {
      left: {
        title: "What They Are",
        items: [
          "Named layout regions",
          "Visual layout mapping",
          "Readable CSS",
          "Semantic alignment",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Page layouts",
          "Dashboards",
          "Complex sections",
          "Responsive shells",
        ],
      },
    },
  },

  {
    id: 103,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "Grid Areas Example",
    type: "code",
    content: {
      description: "Defining named layout areas.",
      code: `.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

header { grid-area: header; }
aside  { grid-area: sidebar; }
main   { grid-area: main; }
footer { grid-area: footer; }`,
    },
  },

  {
    id: 104,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "Responsive Grid with Media Queries",
    type: "two-column",
    content: {
      left: {
        title: "Why Media Queries",
        items: [
          "Adapt layouts to screens",
          "Change grid structure",
          "Improve usability",
          "Mobile-first design",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Start mobile-first",
          "Adjust columns, not content",
          "Use breakpoints sparingly",
          "Test real devices",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "Responsive Grid Example",
    type: "code",
    content: {
      description: "Switching layout at breakpoint.",
      code: `.layout {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 240px 1fr;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
}`,
    },
  },

  {
    id: 106,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "auto-fit vs auto-fill",
    type: "two-column",
    content: {
      left: {
        title: "auto-fit",
        items: [
          "Collapses empty tracks",
          "Fills available space",
          "Flexible layouts",
          "Common choice",
        ],
      },
      right: {
        title: "auto-fill",
        items: [
          "Keeps empty tracks",
          "Reserves space",
          "Predictable count",
          "Special cases",
        ],
      },
    },
  },

  {
    id: 107,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "auto-fit Example",
    type: "code",
    content: {
      description: "Fluid responsive columns.",
      code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}`,
    },
  },

  {
    id: 108,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "Minmax Explained",
    type: "two-column",
    content: {
      left: {
        title: "minmax()",
        items: [
          "Defines min & max size",
          "Prevents overflow",
          "Enables fluid grids",
          "Responsive-friendly",
        ],
      },
      right: {
        title: "Common Pattern",
        items: [
          "minmax(200px, 1fr)",
          "Card layouts",
          "Gallery grids",
          "Dashboards",
        ],
      },
    },
  },

  {
    id: 109,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "Grid vs Flexbox (When to Use)",
    type: "two-column",
    content: {
      left: {
        title: "Use Grid When",
        items: [
          "Two-dimensional layouts",
          "Page structure",
          "Explicit placement",
          "Complex sections",
        ],
      },
      right: {
        title: "Use Flexbox When",
        items: [
          "One-dimensional layouts",
          "Alignment",
          "Components",
          "Content-driven flow",
        ],
      },
    },
  },

  {
    id: 110,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing media queries",
          "Hardcoding breakpoints",
          "Ignoring grid areas",
          "Mixing grid/flex poorly",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Let grid do the work",
          "Use minmax & auto-fit",
          "Name areas clearly",
          "Choose the right tool",
        ],
      },
    },
  },

  {
    id: 111,
    moduleId: 8,
    moduleTitle: "Advanced Grid, Grid Areas & Responsive Design",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Positioning",
          "Z-index",
          "Stacking context",
          "Advanced layouts",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Advanced grid mastery",
          "Responsive layouts",
          "Clean page structure",
          "Ready for positioning",
        ],
      },
    },
  },
  // =========================
  // CSS Module 9: Positioning, Z-Index & Stacking Context
  // =========================

  {
    id: 112,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "Why Positioning Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Positioning",
        items: [
          "Limited layout control",
          "Hard to overlay elements",
          "No fixed UI elements",
          "Hacky solutions",
        ],
      },
      right: {
        title: "With Positioning",
        items: [
          "Precise placement",
          "Overlays & modals",
          "Sticky headers",
          "Advanced UI patterns",
        ],
      },
    },
  },

  {
    id: 113,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "The position Property",
    type: "two-column",
    content: {
      left: {
        title: "Common Values",
        items: ["static (default)", "relative", "absolute", "fixed", "sticky"],
      },
      right: {
        title: "Key Idea",
        items: [
          "Controls reference point",
          "Enables offsets",
          "Affects stacking",
          "Context-dependent",
        ],
      },
    },
  },

  {
    id: 114,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "static vs relative",
    type: "two-column",
    content: {
      left: {
        title: "static",
        items: [
          "Default behavior",
          "No offset effect",
          "Participates in normal flow",
          "Most elements",
        ],
      },
      right: {
        title: "relative",
        items: [
          "Offsets relative to itself",
          "Keeps original space",
          "Creates positioning context",
          "Most common setup",
        ],
      },
    },
  },

  {
    id: 115,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "relative Example",
    type: "code",
    content: {
      description: "Offsetting an element relative to itself.",
      code: `.badge {
  position: relative;
  top: -4px;
  left: 6px;
}`,
    },
  },

  {
    id: 116,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "absolute Positioning",
    type: "two-column",
    content: {
      left: {
        title: "absolute",
        items: [
          "Removed from normal flow",
          "Positions to nearest positioned ancestor",
          "Uses top/right/bottom/left",
          "Common for overlays",
        ],
      },
      right: {
        title: "Key Requirement",
        items: [
          "Ancestor must be positioned",
          "Use relative on parent",
          "Predictable placement",
          "Avoid body anchoring by mistake",
        ],
      },
    },
  },

  {
    id: 117,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "absolute Example",
    type: "code",
    content: {
      description: "Positioning within a container.",
      code: `.card {
  position: relative;
}

.card__icon {
  position: absolute;
  top: 1rem;
  right: 1rem;
}`,
    },
  },

  {
    id: 118,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "fixed Positioning",
    type: "two-column",
    content: {
      left: {
        title: "fixed",
        items: [
          "Anchored to viewport",
          "Ignores scrolling",
          "Removed from flow",
          "Common for navs",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "Sticky headers",
          "Chat widgets",
          "Floating actions",
          "Persistent UI",
        ],
      },
    },
  },

  {
    id: 119,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "fixed Example",
    type: "code",
    content: {
      description: "Fixed header.",
      code: `.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}`,
    },
  },

  {
    id: 120,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "sticky Positioning",
    type: "two-column",
    content: {
      left: {
        title: "sticky",
        items: [
          "Hybrid of relative & fixed",
          "Sticks after scroll threshold",
          "Requires top value",
          "Respects container",
        ],
      },
      right: {
        title: "Common Uses",
        items: [
          "Section headers",
          "Tables of contents",
          "Filters",
          "Sub-navigation",
        ],
      },
    },
  },

  {
    id: 121,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "sticky Example",
    type: "code",
    content: {
      description: "Sticky sidebar.",
      code: `.sidebar {
  position: sticky;
  top: 1rem;
}`,
    },
  },

  {
    id: 122,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "Z-Index Explained",
    type: "two-column",
    content: {
      left: {
        title: "What z-index Does",
        items: [
          "Controls stacking order",
          "Higher value on top",
          "Works on positioned elements",
          "Context-aware",
        ],
      },
      right: {
        title: "Important Notes",
        items: [
          "Only for positioned elements",
          "Relative order matters",
          "Large numbers don’t fix logic",
          "Context is key",
        ],
      },
    },
  },

  {
    id: 123,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "z-index Example",
    type: "code",
    content: {
      description: "Layering elements.",
      code: `.modal {
  position: fixed;
  z-index: 1000;
}

.backdrop {
  position: fixed;
  z-index: 900;
}`,
    },
  },

  {
    id: 124,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "Stacking Context",
    type: "two-column",
    content: {
      left: {
        title: "Creates New Context",
        items: ["position + z-index", "opacity < 1", "transform", "filter"],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Limits z-index scope",
          "Explains overlap bugs",
          "Prevents runaway layers",
          "Debugging clarity",
        ],
      },
    },
  },

  {
    id: 125,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting positioned ancestor",
          "Using huge z-index values",
          "Breaking flow unintentionally",
          "Misusing fixed everywhere",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Position parents intentionally",
          "Keep z-index scale small",
          "Prefer sticky when possible",
          "Understand contexts",
        ],
      },
    },
  },

  {
    id: 126,
    moduleId: 9,
    moduleTitle: "Positioning, Z-Index & Stacking Context",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Transitions & animations",
          "Motion basics",
          "Micro-interactions",
          "UI polish",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Positioning mastered",
          "Layering predictable",
          "Advanced layouts possible",
          "Ready for motion",
        ],
      },
    },
  },
  // =========================
  // CSS Module 10: Transitions, Animations & Motion Fundamentals
  // =========================

  {
    id: 127,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Why Motion Matters in UI",
    type: "two-column",
    content: {
      left: {
        title: "Without Motion",
        items: [
          "Abrupt UI changes",
          "Confusing interactions",
          "Low perceived quality",
          "Poor feedback",
        ],
      },
      right: {
        title: "With Motion",
        items: [
          "Clear user feedback",
          "Smoother interactions",
          "Improved usability",
          "Professional polish",
        ],
      },
    },
  },

  {
    id: 128,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "CSS Transitions Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Transitions Do",
        items: [
          "Animate property changes",
          "Respond to state changes",
          "Simple motion effects",
          "Low cognitive load",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Hover effects",
          "Focus states",
          "Button feedback",
          "Menus & toggles",
        ],
      },
    },
  },

  {
    id: 129,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Transition Properties",
    type: "two-column",
    content: {
      left: {
        title: "Core Properties",
        items: [
          "transition-property",
          "transition-duration",
          "transition-timing-function",
          "transition-delay",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Animate few properties",
          "Keep durations short",
          "Use easing functions",
          "Avoid motion overload",
        ],
      },
    },
  },

  {
    id: 130,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Transition Example",
    type: "code",
    content: {
      description: "Smooth hover transition.",
      code: `.button {
  background: #2563eb;
  color: white;
  transition: background-color 0.2s ease;
}

.button:hover {
  background: #1e40af;
}`,
    },
  },

  {
    id: 131,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "CSS Animations Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Animations Do",
        items: [
          "Run independently of user action",
          "Define keyframes",
          "Loop or play once",
          "More control than transitions",
        ],
      },
      right: {
        title: "Common Uses",
        items: [
          "Loading indicators",
          "Attention cues",
          "Intro animations",
          "Status feedback",
        ],
      },
    },
  },

  {
    id: 132,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Keyframes",
    type: "two-column",
    content: {
      left: {
        title: "@keyframes",
        items: [
          "Defines animation steps",
          "Uses percentages or from/to",
          "Reusable animations",
          "Declarative motion",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Start simple",
          "Animate transform & opacity",
          "Avoid layout thrashing",
          "Performance-friendly",
        ],
      },
    },
  },

  {
    id: 133,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Animation Example",
    type: "code",
    content: {
      description: "Simple loading animation.",
      code: `@keyframes pulse {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}

.loader {
  animation: pulse 1.2s infinite ease-in-out;
}`,
    },
  },

  {
    id: 134,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Animation Properties",
    type: "two-column",
    content: {
      left: {
        title: "Core Properties",
        items: [
          "animation-name",
          "animation-duration",
          "animation-timing-function",
          "animation-iteration-count",
        ],
      },
      right: {
        title: "Advanced Options",
        items: [
          "animation-delay",
          "animation-direction",
          "animation-fill-mode",
          "animation-play-state",
        ],
      },
    },
  },

  {
    id: 135,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Performance Considerations",
    type: "two-column",
    content: {
      left: {
        title: "Good Properties to Animate",
        items: [
          "transform",
          "opacity",
          "filter (carefully)",
          "GPU-accelerated",
        ],
      },
      right: {
        title: "Avoid Animating",
        items: [
          "width / height",
          "top / left",
          "margin / padding",
          "Layout-affecting properties",
        ],
      },
    },
  },

  {
    id: 136,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Reduced Motion Accessibility",
    type: "two-column",
    content: {
      left: {
        title: "Why It Matters",
        items: [
          "Motion sensitivity",
          "Vestibular disorders",
          "User preference",
          "Inclusive design",
        ],
      },
      right: {
        title: "CSS Support",
        items: [
          "prefers-reduced-motion",
          "Respect user settings",
          "Disable non-essential motion",
          "Accessibility best practice",
        ],
      },
    },
  },

  {
    id: 137,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Reduced Motion Example",
    type: "code",
    content: {
      description: "Respecting reduced motion preferences.",
      code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}`,
    },
  },

  {
    id: 138,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Over-animating everything",
          "Long durations",
          "Animating layout properties",
          "Ignoring accessibility",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Subtle, purposeful motion",
          "Short durations",
          "Animate transform/opacity",
          "Respect reduced motion",
        ],
      },
    },
  },

  {
    id: 139,
    moduleId: 10,
    moduleTitle: "Transitions, Animations & Motion Fundamentals",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Responsive design",
          "Media queries",
          "Mobile-first CSS",
          "Production layouts",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Motion used responsibly",
          "Transitions & animations mastered",
          "Accessible interactions",
          "Ready for responsive design",
        ],
      },
    },
  },
  // =========================
  // CSS Module 11: Responsive Design, Media Queries & Mobile-First CSS
  // =========================

  {
    id: 140,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "What Is Responsive Design?",
    type: "two-column",
    content: {
      left: {
        title: "Responsive Design Defined",
        items: [
          "Adapts to screen sizes",
          "Works on all devices",
          "Fluid layouts",
          "User-centered design",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Mobile-first world",
          "Better UX",
          "SEO advantages",
          "Future-proof layouts",
        ],
      },
    },
  },

  {
    id: 141,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Responsive Design Pillars",
    type: "two-column",
    content: {
      left: {
        title: "Core Principles",
        items: [
          "Fluid grids",
          "Flexible images",
          "Media queries",
          "Content priority",
        ],
      },
      right: {
        title: "Design Mindset",
        items: [
          "Design for touch",
          "Progressive enhancement",
          "Performance awareness",
          "Accessibility-first",
        ],
      },
    },
  },

  {
    id: 142,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Mobile-First Approach",
    type: "two-column",
    content: {
      left: {
        title: "What Mobile-First Means",
        items: [
          "Start with small screens",
          "Add complexity upward",
          "Base styles = mobile",
          "Enhance progressively",
        ],
      },
      right: {
        title: "Benefits",
        items: [
          "Cleaner CSS",
          "Fewer overrides",
          "Better performance",
          "Clear priorities",
        ],
      },
    },
  },

  {
    id: 143,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Media Queries Explained",
    type: "two-column",
    content: {
      left: {
        title: "@media Rule",
        items: [
          "Conditional CSS",
          "Applies styles selectively",
          "Device-aware",
          "Viewport-based",
        ],
      },
      right: {
        title: "Common Conditions",
        items: [
          "min-width",
          "max-width",
          "orientation",
          "prefers-reduced-motion",
        ],
      },
    },
  },

  {
    id: 144,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Media Query Example",
    type: "code",
    content: {
      description: "Mobile-first breakpoint.",
      code: `body {
  font-size: 1rem;
}

@media (min-width: 768px) {
  body {
    font-size: 1.125rem;
  }
}`,
    },
  },

  {
    id: 145,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Choosing Breakpoints",
    type: "two-column",
    content: {
      left: {
        title: "Good Breakpoints",
        items: [
          "Content-driven",
          "Based on layout breaks",
          "Not device-specific",
          "Minimal count",
        ],
      },
      right: {
        title: "Avoid This",
        items: [
          "Targeting devices",
          "Too many breakpoints",
          "Magic numbers",
          "Overengineering",
        ],
      },
    },
  },

  {
    id: 146,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Responsive Images",
    type: "two-column",
    content: {
      left: {
        title: "Techniques",
        items: [
          "max-width: 100%",
          "height: auto",
          "Object-fit",
          "Avoid fixed sizes",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Prevents overflow",
          "Maintains aspect ratio",
          "Performance-friendly",
          "Better UX",
        ],
      },
    },
  },

  {
    id: 147,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Responsive Image Example",
    type: "code",
    content: {
      description: "Making images responsive.",
      code: `img {
  max-width: 100%;
  height: auto;
}`,
    },
  },

  {
    id: 148,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Fluid Typography",
    type: "two-column",
    content: {
      left: {
        title: "Fluid Text",
        items: [
          "Scales with viewport",
          "Improves readability",
          "Less breakpoint reliance",
          "Modern approach",
        ],
      },
      right: {
        title: "Tools",
        items: [
          "clamp()",
          "vw units",
          "rem baseline",
          "Accessibility-aware scaling",
        ],
      },
    },
  },

  {
    id: 149,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Fluid Typography Example",
    type: "code",
    content: {
      description: "Using clamp for font sizes.",
      code: `h1 {
  font-size: clamp(1.5rem, 2.5vw, 3rem);
}`,
    },
  },

  {
    id: 150,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Desktop-first CSS",
          "Too many breakpoints",
          "Fixed widths",
          "Ignoring performance",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Mobile-first mindset",
          "Content-based breakpoints",
          "Fluid layouts",
          "Test on real devices",
        ],
      },
    },
  },

  {
    id: 151,
    moduleId: 11,
    moduleTitle: "Responsive Design, Media Queries & Mobile-First CSS",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "CSS architecture",
          "Naming conventions",
          "Scalable stylesheets",
          "Team workflows",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Responsive layouts mastered",
          "Mobile-first CSS",
          "Clean breakpoints",
          "Ready for architecture",
        ],
      },
    },
  },
  // =========================
  // CSS Module 12: CSS Architecture, Naming Conventions & Scalable Stylesheets
  // =========================

  {
    id: 152,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "Why CSS Architecture Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Architecture",
        items: [
          "Unpredictable styling",
          "Specificity conflicts",
          "Hard-to-maintain code",
          "Fear of making changes",
        ],
      },
      right: {
        title: "With Architecture",
        items: [
          "Scalable styles",
          "Clear ownership",
          "Predictable behavior",
          "Team-friendly CSS",
        ],
      },
    },
  },

  {
    id: 153,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "Separation of Concerns in CSS",
    type: "two-column",
    content: {
      left: {
        title: "What to Separate",
        items: [
          "Base styles",
          "Layout styles",
          "Component styles",
          "Utility styles",
        ],
      },
      right: {
        title: "Why It Works",
        items: [
          "Clear responsibilities",
          "Reduced conflicts",
          "Easier debugging",
          "Logical structure",
        ],
      },
    },
  },

  {
    id: 154,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "Common CSS Architecture Patterns",
    type: "two-column",
    content: {
      left: {
        title: "Popular Approaches",
        items: ["BEM", "OOCSS", "SMACSS", "Utility-first"],
      },
      right: {
        title: "Choosing One",
        items: [
          "Team size matters",
          "Project complexity",
          "Consistency over perfection",
          "Document your choice",
        ],
      },
    },
  },

  {
    id: 155,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "BEM Naming Convention",
    type: "two-column",
    content: {
      left: {
        title: "BEM Breakdown",
        items: ["Block", "Element", "Modifier", "Predictable naming"],
      },
      right: {
        title: "Example Pattern",
        items: [".card", ".card__title", ".card--featured", "Low specificity"],
      },
    },
  },

  {
    id: 156,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "BEM Example",
    type: "code",
    content: {
      description: "BEM naming in practice.",
      code: `.card {}
.card__title {}
.card__button {}
.card--highlighted {}`,
    },
  },

  {
    id: 157,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "Utility Classes",
    type: "two-column",
    content: {
      left: {
        title: "What Utilities Are",
        items: [
          "Single-purpose classes",
          "Low specificity",
          "Composable styles",
          "Fast development",
        ],
      },
      right: {
        title: "Examples",
        items: [".mt-4", ".text-center", ".flex", ".hidden"],
      },
    },
  },

  {
    id: 158,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "Utility Class Example",
    type: "code",
    content: {
      description: "Composable utility classes.",
      code: `.text-center { text-align: center; }
.mt-4 { margin-top: 1rem; }
.hidden { display: none; }`,
    },
  },

  {
    id: 159,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "Avoiding Specificity Wars",
    type: "two-column",
    content: {
      left: {
        title: "What Causes Them",
        items: [
          "Deep selectors",
          "IDs in CSS",
          "!important usage",
          "Unclear ownership",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Flat selectors",
          "Consistent naming",
          "Architecture discipline",
          "Refactor early",
        ],
      },
    },
  },

  {
    id: 160,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "File Organization Strategy",
    type: "two-column",
    content: {
      left: {
        title: "Typical Structure",
        items: ["base.css", "layout.css", "components.css", "utilities.css"],
      },
      right: {
        title: "Benefits",
        items: [
          "Faster navigation",
          "Clear intent",
          "Easier onboarding",
          "Scalable growth",
        ],
      },
    },
  },

  {
    id: 161,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Random class names",
          "Long selector chains",
          "Mixing concerns",
          "No structure",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Adopt naming conventions",
          "Keep selectors shallow",
          "Separate responsibilities",
          "Document decisions",
        ],
      },
    },
  },

  {
    id: 162,
    moduleId: 12,
    moduleTitle: "CSS Architecture, Naming Conventions & Scalable Stylesheets",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "CSS capstone project",
          "Build a responsive layout",
          "Apply all concepts",
          "Production mindset",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Scalable CSS mindset",
          "Clean naming",
          "Maintainable styles",
          "Ready for capstone",
        ],
      },
    },
  },
  // =========================
  // CSS Module 13 (Final): CSS Capstone – Building a Responsive Website Layout
  // =========================

  {
    id: 163,
    moduleId: 13,
    moduleTitle: "CSS Capstone: Building a Responsive Website Layout",
    title: "Capstone Overview",
    type: "two-column",
    content: {
      left: {
        title: "What You Will Build",
        items: [
          "A full responsive website layout",
          "Header, main content, sidebar, footer",
          "Modern layout using Grid & Flexbox",
          "Accessible and mobile-first design",
        ],
      },
      right: {
        title: "Why This Capstone Matters",
        items: [
          "Applies all CSS concepts",
          "Simulates real-world work",
          "Builds layout confidence",
          "Portfolio-ready foundation",
        ],
      },
    },
  },

  {
    id: 164,
    moduleId: 13,
    moduleTitle: "CSS Capstone: Building a Responsive Website Layout",
    title: "Project Requirements",
    type: "two-column",
    content: {
      left: {
        title: "Must Include",
        items: [
          "Mobile-first CSS",
          "Flexbox components",
          "Grid-based page layout",
          "Responsive typography",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "No inline styles",
          "Semantic HTML only",
          "Consistent spacing system",
          "Accessible contrast",
        ],
      },
    },
  },

  {
    id: 165,
    moduleId: 13,
    moduleTitle: "CSS Capstone: Building a Responsive Website Layout",
    title: "Suggested Layout Structure",
    type: "code",
    content: {
      description: "High-level CSS layout strategy.",
      code: `.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 240px 1fr;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
}`,
    },
  },

  {
    id: 166,
    moduleId: 13,
    moduleTitle: "CSS Capstone: Building a Responsive Website Layout",
    title: "Component Styling Expectations",
    type: "two-column",
    content: {
      left: {
        title: "Components to Style",
        items: [
          "Navigation bar",
          "Cards or content sections",
          "Buttons & links",
          "Forms or call-to-action",
        ],
      },
      right: {
        title: "Styling Focus",
        items: [
          "Clear visual hierarchy",
          "Consistent spacing",
          "Hover & focus states",
          "Subtle motion",
        ],
      },
    },
  },

  {
    id: 167,
    moduleId: 13,
    moduleTitle: "CSS Capstone: Building a Responsive Website Layout",
    title: "Accessibility Checklist",
    type: "two-column",
    content: {
      left: {
        title: "Required Checks",
        items: [
          "Readable font sizes",
          "Sufficient color contrast",
          "Visible focus styles",
          "Reduced motion support",
        ],
      },
      right: {
        title: "Validation",
        items: [
          "Resize viewport",
          "Keyboard-only navigation",
          "Lighthouse audit",
          "Cross-browser testing",
        ],
      },
    },
  },

  {
    id: 168,
    moduleId: 13,
    moduleTitle: "CSS Capstone: Building a Responsive Website Layout",
    title: "Common Capstone Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Desktop-first CSS",
          "Overusing media queries",
          "Inconsistent spacing",
          "Ignoring accessibility",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Mobile-first styles",
          "Let Grid & Flexbox work",
          "Use rem & gap",
          "Test accessibility early",
        ],
      },
    },
  },

  {
    id: 169,
    moduleId: 13,
    moduleTitle: "CSS Capstone: Building a Responsive Website Layout",
    title: "Capstone Outcome & Next Steps",
    type: "two-column",
    content: {
      left: {
        title: "By the End",
        items: [
          "Responsive layout built",
          "Clean, scalable CSS",
          "Modern layout skills",
          "Confidence in CSS",
        ],
      },
      right: {
        title: "What Comes Next",
        items: [
          "JavaScript fundamentals",
          "DOM manipulation",
          "Interactive UI",
          "Full frontend development",
        ],
      },
    },
  },
];
