export const htmlSlidesData = [
  // =========================
  // HTML Module 1: Web Fundamentals & HTML Overview
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "What Is the Web?",
    type: "two-column",
    content: {
      left: {
        title: "The Web Explained",
        items: [
          "A system of connected documents",
          "Runs on the internet",
          "Uses browsers as clients",
          "Built on open standards",
        ],
      },
      right: {
        title: "Core Web Technologies",
        items: [
          "HTML → structure",
          "CSS → presentation",
          "JavaScript → behavior",
          "HTTP → communication",
        ],
      },
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "What Is HTML?",
    type: "two-column",
    content: {
      left: {
        title: "HTML Defined",
        items: [
          "HyperText Markup Language",
          "Describes page structure",
          "Not a programming language",
          "Browser-interpreted",
        ],
      },
      right: {
        title: "What HTML Does",
        items: [
          "Defines content meaning",
          "Creates document hierarchy",
          "Links resources",
          "Forms the DOM",
        ],
      },
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "Why HTML Comes First",
    type: "two-column",
    content: {
      left: {
        title: "Without HTML",
        items: ["No content", "No structure", "No accessibility", "No SEO"],
      },
      right: {
        title: "With Proper HTML",
        items: [
          "Clear structure",
          "Accessible pages",
          "Search-engine friendly",
          "Foundation for CSS & JS",
        ],
      },
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "How Browsers Use HTML",
    type: "two-column",
    content: {
      left: {
        title: "Browser Process",
        items: [
          "Fetch HTML",
          "Parse markup",
          "Build DOM tree",
          "Render content",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "HTML is the source of truth",
          "DOM drives CSS & JS",
          "Errors affect rendering",
          "Structure matters",
        ],
      },
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "HTML Tags Explained",
    type: "two-column",
    content: {
      left: {
        title: "Tag Anatomy",
        items: ["Opening tag", "Closing tag", "Attributes", "Content"],
      },
      right: {
        title: "Example",
        items: [
          "<p>Text</p>",
          "<a href=''>Link</a>",
          "<img src=''>",
          "<input />",
        ],
      },
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "Block vs Inline Elements",
    type: "two-column",
    content: {
      left: {
        title: "Block Elements",
        items: [
          "Start on new line",
          "Take full width",
          "Structural elements",
          "Examples: div, p, section",
        ],
      },
      right: {
        title: "Inline Elements",
        items: [
          "Stay within text flow",
          "Only take needed width",
          "Text-level semantics",
          "Examples: span, a, strong",
        ],
      },
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "Why Semantic HTML Matters",
    type: "two-column",
    content: {
      left: {
        title: "Non-Semantic",
        items: [
          "Overuse of divs",
          "Unclear meaning",
          "Poor accessibility",
          "Harder maintenance",
        ],
      },
      right: {
        title: "Semantic HTML",
        items: [
          "Meaningful tags",
          "Screen-reader friendly",
          "Better SEO",
          "Cleaner structure",
        ],
      },
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "Common Semantic Tags",
    type: "two-column",
    content: {
      left: {
        title: "Layout Semantics",
        items: ["header", "nav", "main", "footer"],
      },
      right: {
        title: "Content Semantics",
        items: ["article", "section", "aside", "figure"],
      },
    },
  },

  {
    id: 9,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "HTML File Structure",
    type: "code",
    content: {
      description: "Minimal valid HTML document.",
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
    },
  },

  {
    id: 10,
    moduleId: 1,
    moduleTitle: "Web Fundamentals & HTML Overview",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Text & heading elements",
          "Lists",
          "Links & navigation",
          "Images",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Understand HTML’s role",
          "Know core concepts",
          "Read basic HTML",
          "Ready to write content",
        ],
      },
    },
  },
  // =========================
  // HTML Module 2: Text, Headings, Lists & Links
  // =========================

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Text Content in HTML",
    type: "two-column",
    content: {
      left: {
        title: "Why Text Matters",
        items: [
          "Primary web content",
          "Consumed by users & search engines",
          "Read by screen readers",
          "Forms document meaning",
        ],
      },
      right: {
        title: "HTML Text Philosophy",
        items: [
          "Structure before style",
          "Meaning over appearance",
          "Accessibility-first",
          "CSS handles visuals",
        ],
      },
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Paragraphs",
    type: "code",
    content: {
      description: "Use <p> for blocks of text.",
      code: `<p>This is a paragraph of text.</p>
<p>Paragraphs create readable blocks.</p>`,
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Headings Explained",
    type: "two-column",
    content: {
      left: {
        title: "Heading Levels",
        items: [
          "h1 → page title",
          "h2 → sections",
          "h3–h6 → subsections",
          "Hierarchy matters",
        ],
      },
      right: {
        title: "SEO & Accessibility",
        items: [
          "Search engines read structure",
          "Screen readers navigate headings",
          "Do not skip levels",
          "One h1 per page (best practice)",
        ],
      },
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Heading Example",
    type: "code",
    content: {
      description: "Proper heading hierarchy.",
      code: `<h1>Blog</h1>
<h2>Latest Posts</h2>
<h3>Understanding HTML</h3>`,
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Text Emphasis",
    type: "two-column",
    content: {
      left: {
        title: "Semantic Emphasis",
        items: [
          "<strong> → importance",
          "<em> → emphasis",
          "Meaningful emphasis",
          "Screen-reader aware",
        ],
      },
      right: {
        title: "Non-Semantic Styling",
        items: [
          "<b> → bold text",
          "<i> → italic text",
          "Visual only",
          "Avoid for meaning",
        ],
      },
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Emphasis Example",
    type: "code",
    content: {
      description: "Use semantic emphasis.",
      code: `<p>This is <strong>important</strong> information.</p>
<p>This word is <em>emphasized</em>.</p>`,
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Lists in HTML",
    type: "two-column",
    content: {
      left: {
        title: "Unordered Lists",
        items: [
          "<ul> + <li>",
          "Order doesn’t matter",
          "Navigation menus",
          "Feature lists",
        ],
      },
      right: {
        title: "Ordered Lists",
        items: [
          "<ol> + <li>",
          "Order matters",
          "Steps & rankings",
          "Procedures",
        ],
      },
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "List Examples",
    type: "code",
    content: {
      description: "Ordered and unordered lists.",
      code: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<ol>
  <li>Install tools</li>
  <li>Write code</li>
  <li>Deploy app</li>
</ol>`,
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Links & Navigation",
    type: "two-column",
    content: {
      left: {
        title: "Anchor Tag",
        items: [
          "<a> creates links",
          "Uses href attribute",
          "Internal or external",
          "Core web feature",
        ],
      },
      right: {
        title: "Link Types",
        items: [
          "External websites",
          "Internal pages",
          "Page sections (#id)",
          "Email & phone links",
        ],
      },
    },
  },

  {
    id: 20,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Link Examples",
    type: "code",
    content: {
      description: "Different kinds of links.",
      code: `<a href="https://example.com">Visit Example</a>
<a href="/about.html">About Us</a>
<a href="#contact">Go to Contact</a>`,
    },
  },

  {
    id: 21,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Accessibility & Links",
    type: "two-column",
    content: {
      left: {
        title: "Bad Practice",
        items: [
          "Click here",
          "Read more",
          "Unclear context",
          "Poor screen-reader UX",
        ],
      },
      right: {
        title: "Good Practice",
        items: [
          "Descriptive link text",
          "Clear destination",
          "Meaningful context",
          "Accessible navigation",
        ],
      },
    },
  },

  {
    id: 22,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using divs for text",
          "Skipping heading levels",
          "Styling instead of semantics",
          "Poor link text",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use proper text tags",
          "Respect heading hierarchy",
          "Separate structure & style",
          "Write accessible links",
        ],
      },
    },
  },

  {
    id: 23,
    moduleId: 2,
    moduleTitle: "Text, Headings, Lists & Links",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Images",
          "Media elements",
          "Paths & assets",
          "Figure & captions",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Text structured correctly",
          "Lists understood",
          "Links navigable",
          "Ready for media",
        ],
      },
    },
  },
  // =========================
  // HTML Module 3: Images, Media & Assets
  // =========================

  {
    id: 24,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Why Media Matters on the Web",
    type: "two-column",
    content: {
      left: {
        title: "Role of Media",
        items: [
          "Visual communication",
          "User engagement",
          "Storytelling",
          "Content clarity",
        ],
      },
      right: {
        title: "Media Types",
        items: ["Images", "Audio", "Video", "Icons & SVGs"],
      },
    },
  },

  {
    id: 25,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Images in HTML",
    type: "two-column",
    content: {
      left: {
        title: "img Tag Basics",
        items: [
          "<img> is self-closing",
          "Uses src attribute",
          "Requires alt text",
          "Inline element by default",
        ],
      },
      right: {
        title: "Why alt Text Matters",
        items: [
          "Accessibility",
          "Screen readers",
          "SEO benefits",
          "Fallback when image fails",
        ],
      },
    },
  },

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Image Example",
    type: "code",
    content: {
      description: "Basic image usage.",
      code: `<img src="images/logo.png" alt="Company logo" />`,
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Image Paths Explained",
    type: "two-column",
    content: {
      left: {
        title: "Relative Paths",
        items: ["Same folder", "Subfolders", "../ to go up", "Most common"],
      },
      right: {
        title: "Absolute Paths",
        items: ["Full URL", "External resources", "CDNs", "Less portable"],
      },
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "figure & figcaption",
    type: "two-column",
    content: {
      left: {
        title: "figure Element",
        items: [
          "Wraps media",
          "Self-contained content",
          "Semantic grouping",
          "Improves meaning",
        ],
      },
      right: {
        title: "figcaption",
        items: [
          "Describes the media",
          "Accessible captions",
          "Optional",
          "Linked contextually",
        ],
      },
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Figure Example",
    type: "code",
    content: {
      description: "Semantic image grouping.",
      code: `<figure>
  <img src="images/chart.png" alt="Sales chart" />
  <figcaption>Monthly sales performance</figcaption>
</figure>`,
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Audio in HTML",
    type: "two-column",
    content: {
      left: {
        title: "audio Tag",
        items: [
          "Embeds sound",
          "Supports controls",
          "Multiple formats",
          "Fallback text allowed",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "Podcasts",
          "Voice notes",
          "Music previews",
          "Accessibility narration",
        ],
      },
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Audio Example",
    type: "code",
    content: {
      description: "Embedding audio.",
      code: `<audio controls>
  <source src="audio/theme.mp3" type="audio/mpeg" />
  Your browser does not support audio.
</audio>`,
    },
  },

  {
    id: 32,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Video in HTML",
    type: "two-column",
    content: {
      left: {
        title: "video Tag",
        items: [
          "Embeds video",
          "Supports controls",
          "Multiple formats",
          "Poster images",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Tutorials",
          "Marketing videos",
          "Product demos",
          "Educational content",
        ],
      },
    },
  },

  {
    id: 33,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Video Example",
    type: "code",
    content: {
      description: "Embedding video.",
      code: `<video controls width="400">
  <source src="video/demo.mp4" type="video/mp4" />
  Your browser does not support video.
</video>`,
    },
  },

  {
    id: 34,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Optimizing Media",
    type: "two-column",
    content: {
      left: {
        title: "Best Practices",
        items: [
          "Compress images",
          "Use correct formats",
          "Lazy load when possible",
          "Avoid huge files",
        ],
      },
      right: {
        title: "Performance Impact",
        items: [
          "Faster load times",
          "Better Core Web Vitals",
          "Improved SEO",
          "Better UX",
        ],
      },
    },
  },

  {
    id: 35,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Missing alt attributes",
          "Huge uncompressed images",
          "Using media for layout",
          "Broken paths",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Always add alt text",
          "Optimize assets",
          "Use media semantically",
          "Test paths locally",
        ],
      },
    },
  },

  {
    id: 36,
    moduleId: 3,
    moduleTitle: "Images, Media & Assets",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Forms & user input",
          "Input types",
          "Labels & accessibility",
          "Form submission",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Media embedded correctly",
          "Assets managed",
          "Accessibility improved",
          "Ready for forms",
        ],
      },
    },
  },
  // =========================
  // HTML Module 4: Forms, Inputs & Accessibility
  // =========================

  {
    id: 37,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Why Forms Matter on the Web",
    type: "two-column",
    content: {
      left: {
        title: "Role of Forms",
        items: [
          "Collect user input",
          "Enable interaction",
          "Send data to servers",
          "Power web applications",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Login & registration",
          "Search",
          "Contact forms",
          "Checkout flows",
        ],
      },
    },
  },

  {
    id: 38,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "The form Element",
    type: "two-column",
    content: {
      left: {
        title: "form Basics",
        items: [
          "Wraps input elements",
          "Defines submission behavior",
          "Uses action & method",
          "Foundation of data entry",
        ],
      },
      right: {
        title: "Key Attributes",
        items: [
          "action → destination URL",
          "method → GET or POST",
          "autocomplete",
          "novalidate",
        ],
      },
    },
  },

  {
    id: 39,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Basic Form Example",
    type: "code",
    content: {
      description: "Simple HTML form structure.",
      code: `<form action="/submit" method="post">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>`,
    },
  },

  {
    id: 40,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Input Types Overview",
    type: "two-column",
    content: {
      left: {
        title: "Common Input Types",
        items: ["text", "email", "password", "number", "date"],
      },
      right: {
        title: "Special Inputs",
        items: ["checkbox", "radio", "file", "range", "color"],
      },
    },
  },

  {
    id: 41,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Input Examples",
    type: "code",
    content: {
      description: "Different input types.",
      code: `<input type="email" name="email" />
<input type="password" name="password" />
<input type="checkbox" name="subscribe" />`,
    },
  },

  {
    id: 42,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Labels & Accessibility",
    type: "two-column",
    content: {
      left: {
        title: "Why Labels Matter",
        items: [
          "Screen-reader support",
          "Clickable association",
          "Clear form meaning",
          "WCAG compliance",
        ],
      },
      right: {
        title: "Correct Usage",
        items: [
          "Use <label> for every input",
          "Match for & id",
          "Do not rely on placeholders",
          "Improve usability",
        ],
      },
    },
  },

  {
    id: 43,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Label Example",
    type: "code",
    content: {
      description: "Proper label association.",
      code: `<label for="email">Email</label>
<input id="email" type="email" name="email" />`,
    },
  },

  {
    id: 44,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Required & Validation Attributes",
    type: "two-column",
    content: {
      left: {
        title: "HTML Validation",
        items: ["required", "min / max", "maxlength", "pattern"],
      },
      right: {
        title: "Benefits",
        items: [
          "Immediate feedback",
          "Reduced bad data",
          "Better UX",
          "Client-side safety",
        ],
      },
    },
  },

  {
    id: 45,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Validation Example",
    type: "code",
    content: {
      description: "Basic input validation.",
      code: `<input type="email" required />
<input type="number" min="1" max="10" />`,
    },
  },

  {
    id: 46,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Form Submission Methods",
    type: "two-column",
    content: {
      left: {
        title: "GET",
        items: ["Data in URL", "Used for search", "Bookmarkable", "Not secure"],
      },
      right: {
        title: "POST",
        items: [
          "Data in request body",
          "Used for sensitive data",
          "Not visible in URL",
          "More secure",
        ],
      },
    },
  },

  {
    id: 47,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Accessibility Best Practices",
    type: "two-column",
    content: {
      left: {
        title: "Do This",
        items: [
          "Use labels",
          "Group related inputs",
          "Provide error messages",
          "Maintain focus order",
        ],
      },
      right: {
        title: "Avoid This",
        items: [
          "Placeholder-only labels",
          "Unlabeled inputs",
          "Color-only errors",
          "Keyboard traps",
        ],
      },
    },
  },

  {
    id: 48,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Missing labels",
          "Wrong input types",
          "Relying on placeholders",
          "Ignoring accessibility",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Label every input",
          "Choose semantic types",
          "Validate input",
          "Design for all users",
        ],
      },
    },
  },

  {
    id: 49,
    moduleId: 4,
    moduleTitle: "Forms, Inputs & Accessibility",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Page layout",
          "Semantic layout tags",
          "HTML structure patterns",
          "Real-world layouts",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Forms built correctly",
          "Accessible inputs",
          "Validated user data",
          "Ready for layout",
        ],
      },
    },
  },
  // =========================
  // HTML Module 5: Page Layout, Sections & Semantic Structure
  // =========================

  {
    id: 50,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "Why Page Structure Matters",
    type: "two-column",
    content: {
      left: {
        title: "Poor Structure",
        items: [
          "Hard to read code",
          "Poor accessibility",
          "SEO issues",
          "Difficult maintenance",
        ],
      },
      right: {
        title: "Good Structure",
        items: [
          "Clear document hierarchy",
          "Screen-reader friendly",
          "Search-engine optimized",
          "Scalable layouts",
        ],
      },
    },
  },

  {
    id: 51,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "HTML5 Semantic Layout Tags",
    type: "two-column",
    content: {
      left: {
        title: "Primary Layout Tags",
        items: ["<header>", "<nav>", "<main>", "<footer>"],
      },
      right: {
        title: "Supporting Tags",
        items: ["<section>", "<article>", "<aside>", "<address>"],
      },
    },
  },

  {
    id: 52,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "header & nav Explained",
    type: "two-column",
    content: {
      left: {
        title: "header",
        items: [
          "Introductory content",
          "Branding",
          "Page or section header",
          "May appear multiple times",
        ],
      },
      right: {
        title: "nav",
        items: [
          "Primary navigation links",
          "Menus & breadcrumbs",
          "Screen-reader landmarks",
          "Not for every link",
        ],
      },
    },
  },

  {
    id: 53,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "main Element",
    type: "two-column",
    content: {
      left: {
        title: "Purpose of main",
        items: [
          "Unique page content",
          "Only one per page",
          "Excludes headers/footers",
          "Accessibility landmark",
        ],
      },
      right: {
        title: "Inside main",
        items: ["Sections", "Articles", "Core content", "User focus area"],
      },
    },
  },

  {
    id: 54,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "section vs article",
    type: "two-column",
    content: {
      left: {
        title: "section",
        items: [
          "Thematic grouping",
          "Related content",
          "Requires heading",
          "Structural division",
        ],
      },
      right: {
        title: "article",
        items: [
          "Self-contained content",
          "Reusable independently",
          "Blog posts",
          "News items",
        ],
      },
    },
  },

  {
    id: 55,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "aside & footer",
    type: "two-column",
    content: {
      left: {
        title: "aside",
        items: [
          "Complementary content",
          "Sidebars",
          "Related links",
          "Callouts",
        ],
      },
      right: {
        title: "footer",
        items: ["Closing content", "Copyright", "Legal links", "Metadata"],
      },
    },
  },

  {
    id: 56,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "Semantic Layout Example",
    type: "code",
    content: {
      description: "A clean, semantic page structure.",
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Semantic Layout</title>
  </head>
  <body>
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>

    <main>
      <article>
        <h2>Blog Post</h2>
        <p>Main article content.</p>
      </article>

      <aside>
        <p>Related links</p>
      </aside>
    </main>

    <footer>
      <p>&copy; 2025</p>
    </footer>
  </body>
</html>`,
    },
  },

  {
    id: 57,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "Accessibility Landmarks",
    type: "two-column",
    content: {
      left: {
        title: "Landmark Roles",
        items: ["header", "nav", "main", "footer"],
      },
      right: {
        title: "Why They Matter",
        items: [
          "Keyboard navigation",
          "Screen-reader shortcuts",
          "Faster content access",
          "Inclusive design",
        ],
      },
    },
  },

  {
    id: 58,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "When to Use div",
    type: "two-column",
    content: {
      left: {
        title: "Use div When",
        items: [
          "No semantic meaning fits",
          "Pure styling hooks",
          "Layout containers",
          "Last resort",
        ],
      },
      right: {
        title: "Avoid div When",
        items: [
          "A semantic tag exists",
          "Meaning is lost",
          "Accessibility suffers",
          "SEO is impacted",
        ],
      },
    },
  },

  {
    id: 59,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Everything in divs",
          "Multiple main elements",
          "Missing headings in sections",
          "Over-nesting",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use semantic tags first",
          "One main per page",
          "Heading for every section",
          "Flat, readable structure",
        ],
      },
    },
  },

  {
    id: 60,
    moduleId: 5,
    moduleTitle: "Page Layout, Sections & Semantic Structure",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "HTML tables",
          "Tabular data",
          "Accessibility in tables",
          "Real-world examples",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Semantic layouts mastered",
          "Accessible structure",
          "Clean HTML documents",
          "Ready for tables",
        ],
      },
    },
  },
  // =========================
  // HTML Module 6: Tables & Tabular Data
  // =========================

  {
    id: 61,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "When to Use Tables",
    type: "two-column",
    content: {
      left: {
        title: "Correct Use",
        items: [
          "Displaying tabular data",
          "Financial reports",
          "Schedules",
          "Comparison charts",
        ],
      },
      right: {
        title: "Incorrect Use",
        items: [
          "Page layout",
          "Positioning elements",
          "Styling grids",
          "Visual alignment",
        ],
      },
    },
  },

  {
    id: 62,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "Table Structure",
    type: "two-column",
    content: {
      left: {
        title: "Core Elements",
        items: ["<table>", "<thead>", "<tbody>", "<tfoot>"],
      },
      right: {
        title: "Cell Elements",
        items: [
          "<tr> → row",
          "<th> → header cell",
          "<td> → data cell",
          "scope attribute",
        ],
      },
    },
  },

  {
    id: 63,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "Basic Table Example",
    type: "code",
    content: {
      description: "Simple, accessible table.",
      code: `<table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ada</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>Grace</td>
      <td>Engineer</td>
    </tr>
  </tbody>
</table>`,
    },
  },

  {
    id: 64,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "thead, tbody & tfoot",
    type: "two-column",
    content: {
      left: {
        title: "Why They Matter",
        items: [
          "Logical grouping",
          "Improved accessibility",
          "Styling control",
          "Consistent structure",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Always include thead",
          "Use tbody for data",
          "tfoot for summaries",
          "Even if small tables",
        ],
      },
    },
  },

  {
    id: 65,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "Headers & Scope",
    type: "two-column",
    content: {
      left: {
        title: "Header Cells",
        items: [
          "<th> defines headers",
          "Use scope='col' or 'row'",
          "Associates data correctly",
          "Critical for screen readers",
        ],
      },
      right: {
        title: "Accessibility Impact",
        items: [
          "Correct data reading order",
          "Context-aware navigation",
          "Improved usability",
          "WCAG compliance",
        ],
      },
    },
  },

  {
    id: 66,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "Caption Element",
    type: "two-column",
    content: {
      left: {
        title: "caption",
        items: [
          "Describes table purpose",
          "First child of table",
          "Visible by default",
          "Accessibility-friendly",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Complex tables",
          "Reports",
          "Financial data",
          "Comparison tables",
        ],
      },
    },
  },

  {
    id: 67,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "Table Caption Example",
    type: "code",
    content: {
      description: "Table with caption.",
      code: `<table>
  <caption>Employee Directory</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sam</td>
      <td>HR</td>
    </tr>
  </tbody>
</table>`,
    },
  },

  {
    id: 68,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "Complex Tables (Overview)",
    type: "two-column",
    content: {
      left: {
        title: "Complex Features",
        items: ["colspan", "rowspan", "Multiple headers", "Grouped data"],
      },
      right: {
        title: "Caution",
        items: [
          "Accessibility complexity",
          "Harder maintenance",
          "Screen-reader challenges",
          "Use only when necessary",
        ],
      },
    },
  },

  {
    id: 69,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "Styling Tables (Preview)",
    type: "two-column",
    content: {
      left: {
        title: "HTML Role",
        items: [
          "Defines structure",
          "No visual styling",
          "Semantic layout",
          "Data meaning",
        ],
      },
      right: {
        title: "CSS Role",
        items: ["Borders", "Spacing", "Colors", "Responsive behavior"],
      },
    },
  },

  {
    id: 70,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using tables for layout",
          "Missing headers",
          "No caption",
          "Overusing colspan",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Tables only for data",
          "Always define headers",
          "Add captions",
          "Keep tables simple",
        ],
      },
    },
  },

  {
    id: 71,
    moduleId: 6,
    moduleTitle: "Tables & Tabular Data",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "HTML attributes",
          "Global attributes",
          "Data-* attributes",
          "Best practices",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Tables used correctly",
          "Accessible data",
          "Clean markup",
          "Ready for attributes",
        ],
      },
    },
  },
  // =========================
  // HTML Module 7: Global Attributes & Metadata
  // =========================

  {
    id: 72,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "What Are HTML Attributes?",
    type: "two-column",
    content: {
      left: {
        title: "Attributes Defined",
        items: [
          "Provide extra information",
          "Modify element behavior",
          "Appear in opening tags",
          "Key-value pairs",
        ],
      },
      right: {
        title: "Why They Matter",
        items: [
          "Control semantics",
          "Enable accessibility",
          "Support CSS & JS",
          "Improve maintainability",
        ],
      },
    },
  },

  {
    id: 73,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "Global Attributes Explained",
    type: "two-column",
    content: {
      left: {
        title: "Common Global Attributes",
        items: ["id", "class", "title", "hidden"],
      },
      right: {
        title: "Advanced Global Attributes",
        items: ["data-*", "contenteditable", "draggable", "tabindex"],
      },
    },
  },

  {
    id: 74,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "id vs class",
    type: "two-column",
    content: {
      left: {
        title: "id",
        items: [
          "Unique per page",
          "Used for anchors",
          "JavaScript targeting",
          "High specificity",
        ],
      },
      right: {
        title: "class",
        items: [
          "Reusable",
          "Styling groups",
          "Multiple allowed",
          "Preferred for CSS",
        ],
      },
    },
  },

  {
    id: 75,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "id & class Example",
    type: "code",
    content: {
      description: "Using id and class correctly.",
      code: `<section id="about">
  <p class="lead highlight">Welcome</p>
</section>`,
    },
  },

  {
    id: 76,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "data-* Attributes",
    type: "two-column",
    content: {
      left: {
        title: "What data-* Is",
        items: [
          "Custom attributes",
          "Store extra info",
          "Accessible via JS",
          "Does not affect semantics",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "State storage",
          "UI configuration",
          "Analytics hooks",
          "JS logic",
        ],
      },
    },
  },

  {
    id: 77,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "data-* Example",
    type: "code",
    content: {
      description: "Custom data attributes.",
      code: `<button data-role="admin" data-id="42">
  Delete
</button>`,
    },
  },

  {
    id: 78,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "title Attribute",
    type: "two-column",
    content: {
      left: {
        title: "title",
        items: [
          "Tooltip text",
          "Extra context",
          "Hover-based",
          "Not for critical info",
        ],
      },
      right: {
        title: "Accessibility Note",
        items: [
          "Not read by all screen readers",
          "Do not rely on it alone",
          "Supplement labels",
          "Use sparingly",
        ],
      },
    },
  },

  {
    id: 79,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "hidden & contenteditable",
    type: "two-column",
    content: {
      left: {
        title: "hidden",
        items: [
          "Removes element from view",
          "Not rendered",
          "Useful for toggles",
          "JS-controlled",
        ],
      },
      right: {
        title: "contenteditable",
        items: [
          "Allows inline editing",
          "Editable text areas",
          "User-driven content",
          "Advanced use cases",
        ],
      },
    },
  },

  {
    id: 80,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "tabindex & Keyboard Navigation",
    type: "two-column",
    content: {
      left: {
        title: "tabindex Values",
        items: [
          "0 → natural order",
          "-1 → programmatic focus",
          "Avoid positive values",
          "Keyboard control",
        ],
      },
      right: {
        title: "Accessibility Impact",
        items: [
          "Keyboard users",
          "Screen readers",
          "Focus management",
          "Inclusive UX",
        ],
      },
    },
  },

  {
    id: 81,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "Metadata in head",
    type: "two-column",
    content: {
      left: {
        title: "Common Meta Tags",
        items: ["charset", "viewport", "description", "author"],
      },
      right: {
        title: "Why Metadata Matters",
        items: [
          "SEO",
          "Responsive behavior",
          "Encoding correctness",
          "Social sharing",
        ],
      },
    },
  },

  {
    id: 82,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "Meta Tags Example",
    type: "code",
    content: {
      description: "Essential metadata.",
      code: `<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Learning HTML fundamentals" />`,
    },
  },

  {
    id: 83,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Duplicate ids",
          "Overusing tabindex",
          "Misusing title attribute",
          "Ignoring metadata",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Unique ids only",
          "Respect natural focus order",
          "Use labels for meaning",
          "Always include meta viewport",
        ],
      },
    },
  },

  {
    id: 84,
    moduleId: 7,
    moduleTitle: "Global Attributes & Metadata",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "HTML accessibility",
          "ARIA basics",
          "Inclusive design",
          "Best practices",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Attributes understood",
          "Metadata applied",
          "Accessible markup",
          "Ready for ARIA",
        ],
      },
    },
  },
  // =========================
  // HTML Module 8: Accessibility & ARIA Fundamentals
  // =========================

  {
    id: 85,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "What Is Web Accessibility?",
    type: "two-column",
    content: {
      left: {
        title: "Accessibility Defined",
        items: [
          "Design for all users",
          "Includes disabilities",
          "Legal & ethical requirement",
          "Core web principle",
        ],
      },
      right: {
        title: "Who Benefits",
        items: [
          "Screen-reader users",
          "Keyboard-only users",
          "Low-vision users",
          "Temporary impairments",
        ],
      },
    },
  },

  {
    id: 86,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "Accessibility Is Not Optional",
    type: "two-column",
    content: {
      left: {
        title: "If Ignored",
        items: [
          "Users excluded",
          "Legal risks",
          "Poor UX",
          "Negative brand impact",
        ],
      },
      right: {
        title: "If Done Right",
        items: [
          "Inclusive products",
          "Better usability",
          "Improved SEO",
          "Wider reach",
        ],
      },
    },
  },

  {
    id: 87,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "The First Rule of ARIA",
    type: "two-column",
    content: {
      left: {
        title: "Golden Rule",
        items: [
          "Use native HTML first",
          "ARIA is a last resort",
          "HTML already accessible",
          "Don’t replace semantics",
        ],
      },
      right: {
        title: "Why This Matters",
        items: [
          "Native elements work best",
          "Less complexity",
          "Fewer bugs",
          "Better screen-reader support",
        ],
      },
    },
  },

  {
    id: 88,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "Keyboard Accessibility",
    type: "two-column",
    content: {
      left: {
        title: "Keyboard Users",
        items: [
          "Tab to navigate",
          "Enter/Space to activate",
          "Focus indicators",
          "Logical order",
        ],
      },
      right: {
        title: "Developer Responsibility",
        items: [
          "Ensure focusable elements",
          "Avoid keyboard traps",
          "Visible focus states",
          "Correct tab order",
        ],
      },
    },
  },

  {
    id: 89,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "ARIA Explained",
    type: "two-column",
    content: {
      left: {
        title: "What ARIA Is",
        items: [
          "Accessible Rich Internet Applications",
          "Adds meaning where HTML falls short",
          "Attributes, not elements",
          "Enhances accessibility",
        ],
      },
      right: {
        title: "What ARIA Is NOT",
        items: [
          "Not a replacement for HTML",
          "Not required everywhere",
          "Not visual styling",
          "Not a JS framework",
        ],
      },
    },
  },

  {
    id: 90,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "Common ARIA Roles",
    type: "two-column",
    content: {
      left: {
        title: "Landmark Roles",
        items: [
          "role='navigation'",
          "role='main'",
          "role='banner'",
          "role='contentinfo'",
        ],
      },
      right: {
        title: "Widget Roles",
        items: [
          "role='button'",
          "role='dialog'",
          "role='alert'",
          "role='tablist'",
        ],
      },
    },
  },

  {
    id: 91,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "ARIA Attribute Examples",
    type: "code",
    content: {
      description: "Enhancing accessibility with ARIA.",
      code: `<button aria-label="Close modal">×</button>

<div role="alert">
  Form submission failed
</div>`,
    },
  },

  {
    id: 92,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "ARIA States & Properties",
    type: "two-column",
    content: {
      left: {
        title: "State Examples",
        items: [
          "aria-expanded",
          "aria-hidden",
          "aria-checked",
          "aria-disabled",
        ],
      },
      right: {
        title: "Why They Matter",
        items: [
          "Communicate UI state",
          "Dynamic interfaces",
          "Screen-reader feedback",
          "Accessible interactions",
        ],
      },
    },
  },

  {
    id: 93,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "Bad ARIA Practices",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Adding ARIA to everything",
          "Conflicting roles",
          "Incorrect state values",
          "Ignoring keyboard behavior",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use semantic HTML first",
          "Add ARIA only when needed",
          "Keep states in sync",
          "Test with keyboard & screen readers",
        ],
      },
    },
  },

  {
    id: 94,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "Testing Accessibility",
    type: "two-column",
    content: {
      left: {
        title: "Manual Testing",
        items: [
          "Keyboard-only navigation",
          "Screen reader testing",
          "Zoom & contrast checks",
          "Logical focus order",
        ],
      },
      right: {
        title: "Automated Tools",
        items: ["Lighthouse", "axe DevTools", "WAVE", "Browser audits"],
      },
    },
  },

  {
    id: 95,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Ignoring accessibility entirely",
          "Relying on color alone",
          "Missing focus styles",
          "Misusing ARIA",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Accessibility-first mindset",
          "Test with keyboard",
          "Use semantic HTML",
          "Learn ARIA gradually",
        ],
      },
    },
  },

  {
    id: 96,
    moduleId: 8,
    moduleTitle: "Accessibility & ARIA Fundamentals",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "HTML best practices",
          "Validation & linting",
          "Clean markup",
          "Production readiness",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Accessible HTML",
          "ARIA fundamentals understood",
          "Inclusive mindset",
          "Professional foundations",
        ],
      },
    },
  },
  // =========================
  // HTML Module 9: HTML Best Practices, Validation & Clean Markup
  // =========================

  {
    id: 97,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "Why HTML Best Practices Matter",
    type: "two-column",
    content: {
      left: {
        title: "Poor HTML",
        items: [
          "Hard to maintain",
          "Bug-prone layouts",
          "Accessibility issues",
          "Unpredictable rendering",
        ],
      },
      right: {
        title: "Clean HTML",
        items: [
          "Readable code",
          "Consistent behavior",
          "Accessible by default",
          "Professional quality",
        ],
      },
    },
  },

  {
    id: 98,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "Indentation & Readability",
    type: "two-column",
    content: {
      left: {
        title: "Good Formatting",
        items: [
          "Consistent indentation",
          "One element per line",
          "Clear nesting",
          "Readable structure",
        ],
      },
      right: {
        title: "Bad Formatting",
        items: [
          "Messy nesting",
          "Inline everything",
          "Hard-to-track tags",
          "Error-prone code",
        ],
      },
    },
  },

  {
    id: 99,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "Proper Tag Usage",
    type: "two-column",
    content: {
      left: {
        title: "Do This",
        items: [
          "Use semantic tags",
          "Close all elements",
          "Use attributes correctly",
          "Keep markup minimal",
        ],
      },
      right: {
        title: "Avoid This",
        items: [
          "Div soup",
          "Deprecated tags",
          "Inline styles",
          "Duplicate ids",
        ],
      },
    },
  },

  {
    id: 100,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "Valid HTML Matters",
    type: "two-column",
    content: {
      left: {
        title: "What Validation Does",
        items: [
          "Catches syntax errors",
          "Detects invalid nesting",
          "Improves browser consistency",
          "Prevents hidden bugs",
        ],
      },
      right: {
        title: "When to Validate",
        items: [
          "Before deployment",
          "After major changes",
          "When debugging layout issues",
          "During learning",
        ],
      },
    },
  },

  {
    id: 101,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "Common Validation Errors",
    type: "two-column",
    content: {
      left: {
        title: "Typical Errors",
        items: [
          "Unclosed tags",
          "Invalid nesting",
          "Missing attributes",
          "Duplicate ids",
        ],
      },
      right: {
        title: "How to Fix",
        items: [
          "Indent properly",
          "Use validator tools",
          "Read error messages",
          "Fix root causes",
        ],
      },
    },
  },

  {
    id: 102,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "HTML Validation Tools",
    type: "two-column",
    content: {
      left: {
        title: "Popular Tools",
        items: [
          "W3C Markup Validator",
          "VS Code extensions",
          "Browser dev tools",
          "CI linters",
        ],
      },
      right: {
        title: "Why Use Them",
        items: [
          "Immediate feedback",
          "Learning reinforcement",
          "Consistent quality",
          "Production safety",
        ],
      },
    },
  },

  {
    id: 103,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "Separation of Concerns",
    type: "two-column",
    content: {
      left: {
        title: "HTML Responsibility",
        items: [
          "Structure",
          "Content meaning",
          "Document hierarchy",
          "Accessibility",
        ],
      },
      right: {
        title: "CSS & JS Responsibility",
        items: [
          "Styling & layout",
          "Interactivity",
          "State & logic",
          "Behavior",
        ],
      },
    },
  },

  {
    id: 104,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "Comments in HTML",
    type: "two-column",
    content: {
      left: {
        title: "When to Comment",
        items: [
          "Section boundaries",
          "Complex structures",
          "Temporary notes",
          "Team collaboration",
        ],
      },
      right: {
        title: "When NOT to Comment",
        items: [
          "Obvious markup",
          "Every line",
          "Outdated notes",
          "Self-explanatory code",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "HTML Comments Example",
    type: "code",
    content: {
      description: "Using comments responsibly.",
      code: `<!-- Main navigation -->
<nav>
  <a href="/">Home</a>
</nav>`,
    },
  },

  {
    id: 106,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "Production-Ready HTML Checklist",
    type: "two-column",
    content: {
      left: {
        title: "Checklist",
        items: [
          "Valid HTML",
          "Semantic structure",
          "Accessible markup",
          "Optimized assets",
        ],
      },
      right: {
        title: "Professional Habit",
        items: [
          "Validate before deploy",
          "Review markup",
          "Test in browsers",
          "Think accessibility",
        ],
      },
    },
  },

  {
    id: 107,
    moduleId: 9,
    moduleTitle: "HTML Best Practices, Validation & Clean Markup",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "HTML capstone",
          "Build a complete page",
          "Apply all concepts",
          "Prepare for CSS",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Clean HTML habits",
          "Validated markup",
          "Professional mindset",
          "Ready for styling",
        ],
      },
    },
  },
  // =========================
  // HTML Module 10 (Final): HTML Capstone – Building a Complete Web Page
  // =========================

  {
    id: 108,
    moduleId: 10,
    moduleTitle: "HTML Capstone: Building a Complete Web Page",
    title: "Capstone Overview",
    type: "two-column",
    content: {
      left: {
        title: "What You Will Build",
        items: [
          "A complete static web page",
          "Semantic structure",
          "Accessible content",
          "Clean, validated HTML",
        ],
      },
      right: {
        title: "Why This Matters",
        items: [
          "Reinforces all HTML concepts",
          "Prepares for CSS styling",
          "Real-world structure",
          "Portfolio foundation",
        ],
      },
    },
  },

  {
    id: 109,
    moduleId: 10,
    moduleTitle: "HTML Capstone: Building a Complete Web Page",
    title: "Page Requirements",
    type: "two-column",
    content: {
      left: {
        title: "Must Include",
        items: [
          "header, nav, main, footer",
          "At least one article",
          "Images with alt text",
          "A form with labels",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Semantic tags only",
          "Accessible headings",
          "Valid HTML",
          "No inline styles",
        ],
      },
    },
  },

  {
    id: 110,
    moduleId: 10,
    moduleTitle: "HTML Capstone: Building a Complete Web Page",
    title: "Suggested Page Structure",
    type: "code",
    content: {
      description: "High-level layout structure.",
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Capstone</title>
  </head>
  <body>
    <header></header>
    <nav></nav>
    <main>
      <article></article>
      <section></section>
      <aside></aside>
    </main>
    <footer></footer>
  </body>
</html>`,
    },
  },

  {
    id: 111,
    moduleId: 10,
    moduleTitle: "HTML Capstone: Building a Complete Web Page",
    title: "Accessibility Checklist",
    type: "two-column",
    content: {
      left: {
        title: "Required",
        items: [
          "alt text on images",
          "Labels for inputs",
          "Logical heading order",
          "Keyboard navigation",
        ],
      },
      right: {
        title: "Verification",
        items: [
          "Tab through page",
          "Use Lighthouse",
          "Run HTML validator",
          "Review landmarks",
        ],
      },
    },
  },

  {
    id: 112,
    moduleId: 10,
    moduleTitle: "HTML Capstone: Building a Complete Web Page",
    title: "Common Capstone Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing divs",
          "Missing meta viewport",
          "Unlabeled inputs",
          "Broken nesting",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Semantic-first thinking",
          "Validate frequently",
          "Accessibility checks",
          "Readable indentation",
        ],
      },
    },
  },

  {
    id: 113,
    moduleId: 10,
    moduleTitle: "HTML Capstone: Building a Complete Web Page",
    title: "Outcome & Transition",
    type: "two-column",
    content: {
      left: {
        title: "By the End",
        items: [
          "Complete HTML document",
          "Accessible structure",
          "Clean markup",
          "Confidence with HTML",
        ],
      },
      right: {
        title: "Next Step",
        items: [
          "CSS fundamentals",
          "Styling & layout",
          "Visual design",
          "Responsive pages",
        ],
      },
    },
  },
];
