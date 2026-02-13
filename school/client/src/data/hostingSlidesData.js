export const hostingSlidesData = [
  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Module 1: Web Hosting Fundamentals",
    title: "Web Hosting Fundamentals",
    type: "title",
    content: {
      title: "🌐 Web Hosting Fundamentals",
      subtitle: "Learn how to deploy and host your web applications",
      description:
        "Master domain names, DNS, web servers, deployment strategies, SSL certificates, and performance optimization",
    },
    codeExample: "",
    language: "hosting",
  },
  // Add more slides here following the same structure
  // =========================
  // Hosting Module 1: What Hosting Is & How the Web Works
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "What Hosting Is & How the Web Works",
    title: "What Does It Mean to Host a Website?",
    type: "two-column",
    content: {
      left: {
        title: "Hosting Explained",
        items: [
          "Hosting means putting your website or app on a server",
          "The server is always connected to the internet",
          "Other people can access it anytime",
          "Your code runs on someone else’s computer",
        ],
      },
      right: {
        title: "Key Idea",
        items: [
          "Your laptop is temporary",
          "Servers are permanent",
          "Hosting makes your app public",
          "Internet users connect to servers",
        ],
      },
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "What Hosting Is & How the Web Works",
    title: "What Is a Server?",
    type: "two-column",
    content: {
      left: {
        title: "Server Explained",
        items: [
          "A server is a computer",
          "Designed to run 24/7",
          "Optimized for reliability",
          "Responds to requests",
        ],
      },
      right: {
        title: "How It Differs from Your PC",
        items: [
          "No screen or keyboard",
          "Runs remotely",
          "More stable hardware",
          "Always online",
        ],
      },
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "What Hosting Is & How the Web Works",
    title: "How the Web Works (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "The Basic Flow",
        items: [
          "User types a website address",
          "Browser sends a request",
          "Server receives the request",
          "Server sends a response",
        ],
      },
      right: {
        title: "Important Insight",
        items: [
          "Everything is request–response",
          "Servers do not guess",
          "Requests are explicit",
          "Responses contain data",
        ],
      },
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "What Hosting Is & How the Web Works",
    title: "Client vs Server",
    type: "two-column",
    content: {
      left: {
        title: "Client",
        items: [
          "Browser or app",
          "Initiates requests",
          "Runs on user device",
          "Consumes responses",
        ],
      },
      right: {
        title: "Server",
        items: [
          "Receives requests",
          "Processes logic",
          "Returns responses",
          "Hosts applications",
        ],
      },
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "What Hosting Is & How the Web Works",
    title: "What Happens When You Visit a Website?",
    type: "two-column",
    content: {
      left: {
        title: "Step-by-Step",
        items: [
          "You enter a URL",
          "DNS resolves the address",
          "Browser connects to server",
          "Server returns content",
        ],
      },
      right: {
        title: "Behind the Scenes",
        items: [
          "Networking protocols involved",
          "Security checks happen",
          "Server software handles request",
          "Files or data are sent back",
        ],
      },
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "What Hosting Is & How the Web Works",
    title: "Static vs Dynamic Websites",
    type: "two-column",
    content: {
      left: {
        title: "Static Websites",
        items: [
          "Same content for everyone",
          "HTML, CSS, JS files",
          "No server-side logic",
          "Fast and simple",
        ],
      },
      right: {
        title: "Dynamic Websites",
        items: [
          "Content changes per user",
          "Uses backend code",
          "Connects to databases",
          "More complex hosting",
        ],
      },
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "What Hosting Is & How the Web Works",
    title: "Why Hosting Knowledge Matters",
    type: "two-column",
    content: {
      left: {
        title: "For Developers",
        items: [
          "Deploy your applications",
          "Debug production issues",
          "Understand performance",
          "Work professionally",
        ],
      },
      right: {
        title: "For the Real World",
        items: [
          "Apps must live somewhere",
          "Clients expect uptime",
          "Security is critical",
          "Scalability matters",
        ],
      },
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "What Hosting Is & How the Web Works",
    title: "Common Beginner Misconceptions",
    type: "two-column",
    content: {
      left: {
        title: "Misconceptions",
        items: [
          "Hosting is just buying a domain",
          "Hosting means uploading files only",
          "Servers are magical",
          "Cloud means no servers",
        ],
      },
      right: {
        title: "Reality",
        items: [
          "Domains and hosting are different",
          "Servers still exist",
          "Cloud is managed servers",
          "Understanding basics is essential",
        ],
      },
    },
  },

  {
    id: 9,
    moduleId: 1,
    moduleTitle: "What Hosting Is & How the Web Works",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Domains",
          "DNS",
          "Name resolution",
          "How browsers find servers",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand hosting conceptually",
          "You know what a server is",
          "You understand client–server flow",
          "Ready for DNS",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 2: Domains, DNS & Name Resolution
  // =========================

  {
    id: 10,
    moduleId: 2,
    moduleTitle: "Domains, DNS & Name Resolution",
    title: "What Is a Domain Name?",
    type: "two-column",
    content: {
      left: {
        title: "Domain Explained",
        items: [
          "A human-readable website address",
          "Maps to a server on the internet",
          "Easier than remembering IP addresses",
          "Unique across the internet",
        ],
      },
      right: {
        title: "Examples",
        items: ["google.com", "example.org", "mywebsite.ng", "api.service.com"],
      },
    },
  },

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "Domains, DNS & Name Resolution",
    title: "What Is an IP Address?",
    type: "two-column",
    content: {
      left: {
        title: "IP Address Explained",
        items: [
          "Numerical identifier for servers",
          "Used by computers to communicate",
          "IPv4 or IPv6 formats",
          "Not user-friendly",
        ],
      },
      right: {
        title: "Why Domains Exist",
        items: [
          "Humans remember names better",
          "IPs can change",
          "Domains stay constant",
          "Abstraction layer",
        ],
      },
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "Domains, DNS & Name Resolution",
    title: "What Is DNS?",
    type: "two-column",
    content: {
      left: {
        title: "DNS Explained",
        items: [
          "Domain Name System",
          "Acts like the internet’s phonebook",
          "Translates domains to IPs",
          "Critical internet infrastructure",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Browsers do not understand domains",
          "Servers understand IPs",
          "DNS bridges the gap",
          "Without DNS, the web breaks",
        ],
      },
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "Domains, DNS & Name Resolution",
    title: "DNS Resolution Flow",
    type: "two-column",
    content: {
      left: {
        title: "Step-by-Step",
        items: [
          "User enters domain",
          "Browser checks cache",
          "DNS resolver is queried",
          "IP address is returned",
        ],
      },
      right: {
        title: "Behind the Scenes",
        items: [
          "Recursive queries",
          "Authoritative name servers",
          "Fast lookups",
          "Highly distributed system",
        ],
      },
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "Domains, DNS & Name Resolution",
    title: "Common DNS Record Types",
    type: "two-column",
    content: {
      left: {
        title: "Core Records",
        items: [
          "A → domain to IPv4",
          "AAAA → domain to IPv6",
          "CNAME → alias to another domain",
          "MX → mail servers",
        ],
      },
      right: {
        title: "Other Important Records",
        items: [
          "TXT → verification & security",
          "NS → name servers",
          "SRV → service records",
          "CAA → certificate authority rules",
        ],
      },
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Domains, DNS & Name Resolution",
    title: "How Browsers Use DNS",
    type: "two-column",
    content: {
      left: {
        title: "Browser Behavior",
        items: [
          "Checks local DNS cache",
          "Asks operating system",
          "Queries DNS resolver",
          "Caches results",
        ],
      },
      right: {
        title: "Why Caching Matters",
        items: [
          "Faster page loads",
          "Reduced DNS traffic",
          "Improved performance",
          "Temporary records (TTL)",
        ],
      },
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Domains, DNS & Name Resolution",
    title: "Domain Registrars vs DNS Providers",
    type: "two-column",
    content: {
      left: {
        title: "Domain Registrar",
        items: [
          "Sells domain names",
          "Manages ownership",
          "Handles renewals",
          "ICANN accredited",
        ],
      },
      right: {
        title: "DNS Provider",
        items: [
          "Manages DNS records",
          "Resolves domains to IPs",
          "Can be separate from registrar",
          "Controls traffic routing",
        ],
      },
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Domains, DNS & Name Resolution",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Confusing domain with hosting",
          "Deleting DNS records blindly",
          "Ignoring TTL delays",
          "Misusing CNAME records",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Understand roles clearly",
          "Document DNS changes",
          "Wait for propagation",
          "Change one record at a time",
        ],
      },
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Domains, DNS & Name Resolution",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Types of hosting",
          "Shared vs VPS vs Cloud",
          "Trade-offs",
          "Cost vs control",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand domains",
          "You know how DNS works",
          "You understand name resolution",
          "Ready for hosting types",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 3: Types of Hosting (Shared, VPS, Dedicated, Cloud)
  // =========================

  {
    id: 19,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "Why There Are Different Hosting Types",
    type: "two-column",
    content: {
      left: {
        title: "The Core Problem",
        items: [
          "Not all websites have the same needs",
          "Traffic levels vary widely",
          "Budgets are different",
          "Control requirements differ",
        ],
      },
      right: {
        title: "The Hosting Solution",
        items: [
          "Different hosting models exist",
          "Each balances cost and control",
          "Scales with application needs",
          "Choose based on use case",
        ],
      },
    },
  },

  {
    id: 20,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "Shared Hosting Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Shared Hosting Is",
        items: [
          "Multiple websites on one server",
          "Resources are shared",
          "Managed by hosting provider",
          "Very beginner-friendly",
        ],
      },
      right: {
        title: "Pros & Cons",
        items: [
          "Low cost",
          "Easy setup",
          "Limited performance",
          "Limited control",
        ],
      },
    },
  },

  {
    id: 21,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "When to Use Shared Hosting",
    type: "two-column",
    content: {
      left: {
        title: "Good Use Cases",
        items: [
          "Personal websites",
          "Small blogs",
          "Landing pages",
          "Low traffic sites",
        ],
      },
      right: {
        title: "When to Avoid",
        items: [
          "High traffic apps",
          "Custom server configuration",
          "Backend-heavy workloads",
          "Production APIs",
        ],
      },
    },
  },

  {
    id: 22,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "VPS Hosting Explained",
    type: "two-column",
    content: {
      left: {
        title: "What VPS Is",
        items: [
          "Virtual Private Server",
          "One physical server split virtually",
          "Dedicated resources per VPS",
          "More control than shared hosting",
        ],
      },
      right: {
        title: "Key Characteristics",
        items: [
          "Root access",
          "Custom software installation",
          "Better performance",
          "Moderate cost",
        ],
      },
    },
  },

  {
    id: 23,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "When to Use VPS Hosting",
    type: "two-column",
    content: {
      left: {
        title: "Good Use Cases",
        items: [
          "Backend applications",
          "APIs",
          "Small to medium businesses",
          "Learning server administration",
        ],
      },
      right: {
        title: "Trade-offs",
        items: [
          "Requires Linux knowledge",
          "You manage the server",
          "Security is your responsibility",
          "More setup required",
        ],
      },
    },
  },

  {
    id: 24,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "Dedicated Servers Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Dedicated Hosting Is",
        items: [
          "One server for one customer",
          "All resources are yours",
          "Maximum control",
          "Highest performance",
        ],
      },
      right: {
        title: "Key Characteristics",
        items: [
          "Full hardware access",
          "High reliability",
          "Expensive",
          "Requires expertise",
        ],
      },
    },
  },

  {
    id: 25,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "When to Use Dedicated Hosting",
    type: "two-column",
    content: {
      left: {
        title: "Good Use Cases",
        items: [
          "Very high traffic platforms",
          "Enterprise systems",
          "Strict compliance needs",
          "Performance-critical workloads",
        ],
      },
      right: {
        title: "Why Beginners Avoid It",
        items: [
          "High cost",
          "Complex management",
          "Overkill for small apps",
          "Operational overhead",
        ],
      },
    },
  },

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "Cloud Hosting Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Cloud Hosting Is",
        items: [
          "Uses multiple servers",
          "Resources scale on demand",
          "Highly resilient",
          "Pay-as-you-use model",
        ],
      },
      right: {
        title: "Key Characteristics",
        items: [
          "Elastic scaling",
          "High availability",
          "Managed infrastructure",
          "Abstracted hardware",
        ],
      },
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "Cloud vs VPS (Important Distinction)",
    type: "two-column",
    content: {
      left: {
        title: "VPS",
        items: [
          "Single physical server",
          "Fixed resources",
          "Manual scaling",
          "Simpler model",
        ],
      },
      right: {
        title: "Cloud",
        items: [
          "Multiple servers",
          "Dynamic resources",
          "Automatic scaling",
          "More abstraction",
        ],
      },
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "Choosing the Right Hosting Type",
    type: "two-column",
    content: {
      left: {
        title: "Questions to Ask",
        items: [
          "How much traffic?",
          "What is the budget?",
          "How much control is needed?",
          "What skills do I have?",
        ],
      },
      right: {
        title: "Beginner Recommendation",
        items: [
          "Start small",
          "Prefer VPS for learning",
          "Scale when needed",
          "Avoid premature complexity",
        ],
      },
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Choosing hosting based on hype",
          "Overpaying early",
          "Ignoring maintenance",
          "Underestimating traffic growth",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Match hosting to use case",
          "Plan for growth",
          "Understand trade-offs",
          "Upgrade gradually",
        ],
      },
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Types of Hosting",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Servers and operating systems",
          "Why Linux dominates hosting",
          "Server environments",
          "Basic server concepts",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand hosting types",
          "You know when to use each",
          "You can choose wisely",
          "Ready for servers & OS",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 4: Servers & Operating Systems (Linux-First)
  // =========================

  {
    id: 31,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "Why Operating Systems Matter in Hosting",
    type: "two-column",
    content: {
      left: {
        title: "The Role of an OS",
        items: [
          "Manages hardware resources",
          "Runs applications",
          "Handles users and permissions",
          "Controls networking",
        ],
      },
      right: {
        title: "In Hosting Context",
        items: [
          "Every server runs an OS",
          "OS choice affects stability",
          "Security depends on OS",
          "Performance is OS-dependent",
        ],
      },
    },
  },

  {
    id: 32,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "Why Linux Dominates Servers",
    type: "two-column",
    content: {
      left: {
        title: "Linux Advantages",
        items: [
          "Free and open source",
          "Stable and reliable",
          "Highly customizable",
          "Strong security model",
        ],
      },
      right: {
        title: "Industry Reality",
        items: [
          "Most servers run Linux",
          "Cloud providers default to Linux",
          "Strong community support",
          "Ideal for automation",
        ],
      },
    },
  },

  {
    id: 33,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "Linux Distributions Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Is a Distribution?",
        items: [
          "A packaged version of Linux",
          "Includes kernel and tools",
          "Different goals and audiences",
          "Choice matters for hosting",
        ],
      },
      right: {
        title: "Common Server Distros",
        items: ["Ubuntu Server", "Debian", "CentOS / AlmaLinux", "Rocky Linux"],
      },
    },
  },

  {
    id: 34,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "Server vs Desktop Linux",
    type: "two-column",
    content: {
      left: {
        title: "Server Linux",
        items: [
          "No graphical interface",
          "Command-line focused",
          "Optimized for uptime",
          "Minimal software",
        ],
      },
      right: {
        title: "Desktop Linux",
        items: [
          "Graphical UI",
          "User-focused tools",
          "More background services",
          "Not optimized for servers",
        ],
      },
    },
  },

  {
    id: 35,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "Accessing a Server (SSH)",
    type: "two-column",
    content: {
      left: {
        title: "What Is SSH?",
        items: [
          "Secure Shell protocol",
          "Remote server access",
          "Encrypted communication",
          "Command-line based",
        ],
      },
      right: {
        title: "Why SSH Is Critical",
        items: [
          "Primary way to manage servers",
          "No physical access needed",
          "Secure administration",
          "Automation-friendly",
        ],
      },
    },
  },

  {
    id: 36,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "Basic Server Responsibilities",
    type: "two-column",
    content: {
      left: {
        title: "Core Responsibilities",
        items: [
          "Serve web requests",
          "Run applications",
          "Store data",
          "Manage security",
        ],
      },
      right: {
        title: "Always-On Mindset",
        items: [
          "Uptime matters",
          "Failures must be handled",
          "Monitoring is essential",
          "Maintenance is continuous",
        ],
      },
    },
  },

  {
    id: 37,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "User Accounts on Servers",
    type: "two-column",
    content: {
      left: {
        title: "Why Users Matter",
        items: [
          "Avoid running as root",
          "Limit permissions",
          "Improve security",
          "Track actions",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Create non-root users",
          "Use sudo when needed",
          "Separate concerns",
          "Follow least privilege",
        ],
      },
    },
  },

  {
    id: 38,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "File System Structure (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Key Directories",
        items: [
          "/ → root",
          "/home → user files",
          "/etc → configuration",
          "/var → logs & data",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Know where things live",
          "Avoid accidental deletion",
          "Understand configs vs data",
          "Debug faster",
        ],
      },
    },
  },

  {
    id: 39,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Running everything as root",
          "Installing unnecessary software",
          "Ignoring updates",
          "No understanding of OS basics",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Use least privilege",
          "Keep servers minimal",
          "Apply security updates",
          "Learn fundamentals first",
        ],
      },
    },
  },

  {
    id: 40,
    moduleId: 4,
    moduleTitle: "Servers & Operating Systems",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Web servers",
          "Nginx vs Apache",
          "Serving HTTP traffic",
          "Request handling",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand server OS",
          "You know why Linux is used",
          "You understand server basics",
          "Ready for web servers",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 5: Web Servers (Nginx & Apache)
  // =========================

  {
    id: 41,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "What Is a Web Server?",
    type: "two-column",
    content: {
      left: {
        title: "Web Server Explained",
        items: [
          "Software that handles HTTP requests",
          "Listens on ports (80, 443)",
          "Receives requests from browsers",
          "Sends responses back to clients",
        ],
      },
      right: {
        title: "Key Responsibility",
        items: [
          "Serve websites",
          "Route requests",
          "Handle static files",
          "Forward traffic to applications",
        ],
      },
    },
  },

  {
    id: 42,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "Why Web Servers Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without a Web Server",
        items: [
          "Browsers cannot talk to apps directly",
          "No request handling",
          "No security layer",
          "No traffic management",
        ],
      },
      right: {
        title: "With a Web Server",
        items: [
          "Standardized HTTP handling",
          "Performance optimizations",
          "Security features",
          "Production readiness",
        ],
      },
    },
  },

  {
    id: 43,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "Nginx vs Apache (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Nginx",
        items: [
          "Event-driven architecture",
          "Very fast and lightweight",
          "Excellent for reverse proxying",
          "Modern default choice",
        ],
      },
      right: {
        title: "Apache",
        items: [
          "Process/thread-based",
          "Highly configurable",
          "Long history and stability",
          "Still widely used",
        ],
      },
    },
  },

  {
    id: 44,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "When to Use Nginx",
    type: "two-column",
    content: {
      left: {
        title: "Best Use Cases",
        items: [
          "High traffic sites",
          "Reverse proxy setups",
          "Static file serving",
          "Modern architectures",
        ],
      },
      right: {
        title: "Why Nginx Wins",
        items: [
          "Handles many connections efficiently",
          "Low memory usage",
          "Simple configuration",
          "Excellent scalability",
        ],
      },
    },
  },

  {
    id: 45,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "When to Use Apache",
    type: "two-column",
    content: {
      left: {
        title: "Best Use Cases",
        items: [
          "Legacy systems",
          "Shared hosting environments",
          "Complex .htaccess rules",
          "Compatibility needs",
        ],
      },
      right: {
        title: "Why Apache Still Exists",
        items: [
          "Extremely flexible",
          "Mature ecosystem",
          "Large documentation base",
          "Proven reliability",
        ],
      },
    },
  },

  {
    id: 46,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "Static File Serving",
    type: "two-column",
    content: {
      left: {
        title: "What Happens",
        items: [
          "Browser requests a file",
          "Web server finds the file",
          "File is returned directly",
          "No backend logic involved",
        ],
      },
      right: {
        title: "Examples",
        items: ["HTML files", "CSS files", "JavaScript files", "Images"],
      },
    },
  },

  {
    id: 47,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "Reverse Proxy Explained",
    type: "two-column",
    content: {
      left: {
        title: "Reverse Proxy",
        items: [
          "Sits in front of applications",
          "Receives incoming traffic",
          "Forwards requests to backend",
          "Hides backend details",
        ],
      },
      right: {
        title: "Why It’s Important",
        items: [
          "Improves security",
          "Handles SSL",
          "Enables load balancing",
          "Simplifies app configuration",
        ],
      },
    },
  },

  {
    id: 48,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "Ports & Traffic Flow",
    type: "two-column",
    content: {
      left: {
        title: "Common Ports",
        items: [
          "80 → HTTP",
          "443 → HTTPS",
          "3000 → App servers",
          "8000 → Development servers",
        ],
      },
      right: {
        title: "Traffic Flow",
        items: [
          "Browser → Web server",
          "Web server → Application",
          "Application → Web server",
          "Response → Browser",
        ],
      },
    },
  },

  {
    id: 49,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Confusing web server with backend app",
          "Exposing app ports publicly",
          "Skipping reverse proxy",
          "Poor server configuration",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Understand server roles",
          "Use Nginx in front of apps",
          "Expose only ports 80/443",
          "Follow standard layouts",
        ],
      },
    },
  },

  {
    id: 50,
    moduleId: 5,
    moduleTitle: "Web Servers",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Deploying static websites",
          "Hosting HTML/CSS/JS",
          "First real deployment",
          "Hands-on hosting",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand web servers",
          "You know Nginx vs Apache",
          "You understand request flow",
          "Ready to deploy sites",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 6: Deploying Static Websites
  // =========================

  {
    id: 51,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "What Is a Static Website?",
    type: "two-column",
    content: {
      left: {
        title: "Static Site Explained",
        items: [
          "Files served exactly as stored",
          "No server-side code execution",
          "Same content for every visitor",
          "Very fast and reliable",
        ],
      },
      right: {
        title: "Common Technologies",
        items: ["HTML", "CSS", "JavaScript", "Images and assets"],
      },
    },
  },

  {
    id: 52,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "Why Start with Static Deployment?",
    type: "two-column",
    content: {
      left: {
        title: "Beginner Advantages",
        items: [
          "Simplest deployment type",
          "No backend configuration",
          "Fewer failure points",
          "Easy to debug",
        ],
      },
      right: {
        title: "Professional Reality",
        items: [
          "Many production sites are static",
          "Marketing pages",
          "Documentation sites",
          "Landing pages",
        ],
      },
    },
  },

  {
    id: 53,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "Basic Static Hosting Flow",
    type: "two-column",
    content: {
      left: {
        title: "Deployment Flow",
        items: [
          "Create static files locally",
          "Upload files to server",
          "Configure web server",
          "Access site via domain or IP",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "No application runtime needed",
          "Web server does all the work",
          "Files must be in correct directory",
          "Permissions matter",
        ],
      },
    },
  },

  {
    id: 54,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "Where Static Files Live on a Server",
    type: "two-column",
    content: {
      left: {
        title: "Common Locations",
        items: [
          "/var/www/html",
          "/usr/share/nginx/html",
          "Custom web root directories",
          "Provider-defined paths",
        ],
      },
      right: {
        title: "Why Location Matters",
        items: [
          "Web server serves from a root",
          "Wrong path = 404 errors",
          "Security boundaries",
          "Clean organization",
        ],
      },
    },
  },

  {
    id: 55,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "Uploading Files to the Server",
    type: "two-column",
    content: {
      left: {
        title: "Common Methods",
        items: [
          "SCP (secure copy)",
          "SFTP",
          "Git-based deployment",
          "Provider dashboards",
        ],
      },
      right: {
        title: "Beginner Recommendation",
        items: [
          "Start with SCP or SFTP",
          "Simple and reliable",
          "Uses SSH",
          "Widely supported",
        ],
      },
    },
  },

  {
    id: 56,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "Configuring the Web Server",
    type: "two-column",
    content: {
      left: {
        title: "What Configuration Means",
        items: [
          "Define site root directory",
          "Set domain or server name",
          "Enable file serving",
          "Reload server",
        ],
      },
      right: {
        title: "Common Web Servers",
        items: [
          "Nginx configuration files",
          "Apache virtual hosts",
          "Provider templates",
          "Default configs",
        ],
      },
    },
  },

  {
    id: 57,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "Permissions & Ownership",
    type: "two-column",
    content: {
      left: {
        title: "Why Permissions Matter",
        items: [
          "Web server must read files",
          "Wrong permissions cause errors",
          "Security concerns",
          "Linux access control",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Readable by web server user",
          "Avoid overly open permissions",
          "Consistent ownership",
          "Test after changes",
        ],
      },
    },
  },

  {
    id: 58,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "Testing the Deployment",
    type: "two-column",
    content: {
      left: {
        title: "What to Check",
        items: [
          "Site loads in browser",
          "All assets load correctly",
          "No 404 errors",
          "Correct content displayed",
        ],
      },
      right: {
        title: "Troubleshooting Mindset",
        items: [
          "Check paths first",
          "Check permissions",
          "Check server logs",
          "Reload web server",
        ],
      },
    },
  },

  {
    id: 59,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Uploading files to wrong directory",
          "Forgetting to reload server",
          "Incorrect file permissions",
          "Assuming upload equals live",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Know your web root",
          "Reload after config changes",
          "Verify permissions",
          "Test in browser",
        ],
      },
    },
  },

  {
    id: 60,
    moduleId: 6,
    moduleTitle: "Deploying Static Websites",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Deploying backend applications",
          "Running servers continuously",
          "Process managers",
          "Production apps",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You can deploy static sites",
          "You understand file-based hosting",
          "You know where issues occur",
          "Ready for backend deployment",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 7: Deploying Backend Applications
  // =========================

  {
    id: 61,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "What Is a Backend Application?",
    type: "two-column",
    content: {
      left: {
        title: "Backend Explained",
        items: [
          "Runs server-side code",
          "Handles business logic",
          "Processes requests",
          "Interacts with databases",
        ],
      },
      right: {
        title: "Common Examples",
        items: [
          "Python APIs",
          "Node.js servers",
          "Authentication services",
          "Data processing services",
        ],
      },
    },
  },

  {
    id: 62,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "How Backend Hosting Differs from Static Hosting",
    type: "two-column",
    content: {
      left: {
        title: "Static Hosting",
        items: [
          "Serves files only",
          "No runtime needed",
          "Stops after request",
          "Very simple setup",
        ],
      },
      right: {
        title: "Backend Hosting",
        items: [
          "Runs continuously",
          "Needs a runtime",
          "Handles logic per request",
          "Requires process management",
        ],
      },
    },
  },

  {
    id: 63,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "The Backend Deployment Flow",
    type: "two-column",
    content: {
      left: {
        title: "High-Level Flow",
        items: [
          "User sends request",
          "Web server receives request",
          "Request forwarded to backend app",
          "Response returned to user",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Backend does not face internet directly",
          "Web server acts as gatekeeper",
          "App listens on internal port",
          "Reverse proxy is essential",
        ],
      },
    },
  },

  {
    id: 64,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "Application Runtimes",
    type: "two-column",
    content: {
      left: {
        title: "What Is a Runtime?",
        items: [
          "Environment where code executes",
          "Language-specific",
          "Must be installed on server",
          "Version matters",
        ],
      },
      right: {
        title: "Common Runtimes",
        items: ["Python", "Node.js", "Java", "Go"],
      },
    },
  },

  {
    id: 65,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "Keeping Applications Running",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Apps crash",
          "Servers restart",
          "Processes stop unexpectedly",
          "Manual restarts are unreliable",
        ],
      },
      right: {
        title: "The Solution",
        items: [
          "Process managers",
          "Automatic restarts",
          "Startup on boot",
          "Monitoring",
        ],
      },
    },
  },

  {
    id: 66,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "Process Managers (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "What They Do",
        items: [
          "Run apps in background",
          "Restart on failure",
          "Manage logs",
          "Control lifecycle",
        ],
      },
      right: {
        title: "Common Tools",
        items: ["systemd", "PM2", "Supervisor", "Docker (later)"],
      },
    },
  },

  {
    id: 67,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "Environment Configuration",
    type: "two-column",
    content: {
      left: {
        title: "Why Configuration Matters",
        items: [
          "Different environments",
          "Secrets management",
          "Database connections",
          "Port configuration",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Use environment variables",
          "Never hardcode secrets",
          "Separate config from code",
          "Document variables",
        ],
      },
    },
  },

  {
    id: 68,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "Connecting Backend to Web Server",
    type: "two-column",
    content: {
      left: {
        title: "Reverse Proxy Role",
        items: [
          "Receives external traffic",
          "Routes to backend app",
          "Handles SSL",
          "Improves security",
        ],
      },
      right: {
        title: "Typical Setup",
        items: [
          "Nginx on port 80/443",
          "Backend on internal port",
          "Local-only exposure",
          "Clear separation",
        ],
      },
    },
  },

  {
    id: 69,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "Testing a Backend Deployment",
    type: "two-column",
    content: {
      left: {
        title: "What to Verify",
        items: [
          "Application is running",
          "Requests reach backend",
          "Correct responses returned",
          "No errors in logs",
        ],
      },
      right: {
        title: "Debugging Approach",
        items: [
          "Check process status",
          "Check web server logs",
          "Check application logs",
          "Test locally first",
        ],
      },
    },
  },

  {
    id: 70,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Exposing backend ports publicly",
          "Running apps manually",
          "Hardcoding environment values",
          "Skipping process managers",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always use reverse proxy",
          "Automate app startup",
          "Use environment variables",
          "Follow production patterns",
        ],
      },
    },
  },

  {
    id: 71,
    moduleId: 7,
    moduleTitle: "Deploying Backend Applications",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Databases & hosting",
          "Data persistence",
          "Database servers",
          "Production data management",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand backend hosting",
          "You know runtime requirements",
          "You understand reverse proxies",
          "Ready for databases",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 8: Databases & Hosting
  // =========================

  {
    id: 72,
    moduleId: 8,
    moduleTitle: "Databases & Hosting",
    title: "Why Databases Matter in Hosting",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Data must persist",
          "Applications restart",
          "Files are not enough",
          "Multiple users need shared data",
        ],
      },
      right: {
        title: "Database Solution",
        items: [
          "Structured data storage",
          "Concurrent access",
          "Reliable persistence",
          "Scalable access patterns",
        ],
      },
    },
  },

  {
    id: 73,
    moduleId: 8,
    moduleTitle: "Databases & Hosting",
    title: "What Is a Database Server?",
    type: "two-column",
    content: {
      left: {
        title: "Database Server Explained",
        items: [
          "Dedicated service for data",
          "Runs independently",
          "Accepts connections",
          "Manages storage and queries",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Database is a server too",
          "Often separated from app",
          "Has its own security model",
          "Requires backups",
        ],
      },
    },
  },

  {
    id: 74,
    moduleId: 8,
    moduleTitle: "Databases & Hosting",
    title: "Common Database Types",
    type: "two-column",
    content: {
      left: {
        title: "Relational Databases",
        items: [
          "Structured tables",
          "SQL queries",
          "Strong consistency",
          "Schemas",
        ],
      },
      right: {
        title: "Non-Relational Databases",
        items: [
          "Flexible schemas",
          "Document or key-value",
          "Horizontal scaling",
          "Use-case driven",
        ],
      },
    },
  },

  {
    id: 75,
    moduleId: 8,
    moduleTitle: "Databases & Hosting",
    title: "Where Databases Run",
    type: "two-column",
    content: {
      left: {
        title: "Deployment Options",
        items: [
          "Same server as app",
          "Separate database server",
          "Managed database service",
          "Cloud-native databases",
        ],
      },
      right: {
        title: "Trade-offs",
        items: [
          "Simplicity vs isolation",
          "Cost vs control",
          "Performance needs",
          "Operational complexity",
        ],
      },
    },
  },

  {
    id: 76,
    moduleId: 8,
    moduleTitle: "Databases & Hosting",
    title: "Connecting Applications to Databases",
    type: "two-column",
    content: {
      left: {
        title: "Connection Basics",
        items: [
          "Hostname or IP",
          "Port number",
          "Credentials",
          "Database name",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Use environment variables",
          "Restrict network access",
          "Use least privilege",
          "Encrypt connections",
        ],
      },
    },
  },

  {
    id: 77,
    moduleId: 8,
    moduleTitle: "Databases & Hosting",
    title: "Database Security Basics",
    type: "two-column",
    content: {
      left: {
        title: "Security Risks",
        items: [
          "Public exposure",
          "Weak passwords",
          "SQL injection",
          "Data loss",
        ],
      },
      right: {
        title: "Protection Measures",
        items: [
          "Private networking",
          "Strong authentication",
          "Regular updates",
          "Access controls",
        ],
      },
    },
  },

  {
    id: 78,
    moduleId: 8,
    moduleTitle: "Databases & Hosting",
    title: "Backups & Data Safety",
    type: "two-column",
    content: {
      left: {
        title: "Why Backups Matter",
        items: [
          "Accidental deletions",
          "Server failures",
          "Security incidents",
          "Human error",
        ],
      },
      right: {
        title: "Backup Strategy",
        items: [
          "Regular backups",
          "Off-server storage",
          "Test restore process",
          "Automate backups",
        ],
      },
    },
  },

  {
    id: 79,
    moduleId: 8,
    moduleTitle: "Databases & Hosting",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Running databases publicly",
          "No backups",
          "Hardcoded credentials",
          "Ignoring updates",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Use private networks",
          "Automate backups",
          "Use environment variables",
          "Patch regularly",
        ],
      },
    },
  },

  {
    id: 80,
    moduleId: 8,
    moduleTitle: "Databases & Hosting",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "SSL and HTTPS",
          "Encryption in transit",
          "Certificates",
          "Secure communication",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand database hosting",
          "You know deployment options",
          "You understand security basics",
          "Ready for HTTPS",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 9: SSL, HTTPS & Security Basics
  // =========================

  {
    id: 81,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "Why Security Matters in Hosting",
    type: "two-column",
    content: {
      left: {
        title: "Security Reality",
        items: [
          "Traffic travels over public networks",
          "Data can be intercepted",
          "Attackers scan servers constantly",
          "Security is not optional",
        ],
      },
      right: {
        title: "Hosting Responsibility",
        items: [
          "Protect user data",
          "Ensure trust",
          "Meet compliance needs",
          "Prevent breaches",
        ],
      },
    },
  },

  {
    id: 82,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "What Is HTTPS?",
    type: "two-column",
    content: {
      left: {
        title: "HTTPS Explained",
        items: [
          "Secure version of HTTP",
          "Encrypts data in transit",
          "Prevents eavesdropping",
          "Ensures data integrity",
        ],
      },
      right: {
        title: "What HTTPS Provides",
        items: [
          "Confidentiality",
          "Authentication",
          "Trust",
          "Modern web standard",
        ],
      },
    },
  },

  {
    id: 83,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "SSL vs TLS (Important Clarification)",
    type: "two-column",
    content: {
      left: {
        title: "SSL",
        items: [
          "Older terminology",
          "Now deprecated",
          "Still commonly referenced",
          "Conceptually similar",
        ],
      },
      right: {
        title: "TLS",
        items: [
          "Modern protocol",
          "Actively maintained",
          "More secure",
          "Used in HTTPS today",
        ],
      },
    },
  },

  {
    id: 84,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "What Is an SSL Certificate?",
    type: "two-column",
    content: {
      left: {
        title: "Certificate Explained",
        items: [
          "Digital identity for a website",
          "Issued by Certificate Authority",
          "Binds domain to a public key",
          "Used during HTTPS handshake",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Verifies server identity",
          "Prevents impersonation",
          "Required by browsers",
          "Builds user trust",
        ],
      },
    },
  },

  {
    id: 85,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "HTTPS Handshake (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Handshake Steps",
        items: [
          "Client connects to server",
          "Server presents certificate",
          "Certificate is verified",
          "Encrypted session established",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Encryption starts after handshake",
          "Public key used initially",
          "Session keys are symmetric",
          "Fast after setup",
        ],
      },
    },
  },

  {
    id: 86,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "Why HTTP Is Dangerous",
    type: "two-column",
    content: {
      left: {
        title: "Risks of HTTP",
        items: [
          "Data sent in plain text",
          "Passwords can be stolen",
          "Man-in-the-middle attacks",
          "Browser warnings",
        ],
      },
      right: {
        title: "Modern Web Reality",
        items: [
          "Browsers block insecure sites",
          "APIs require HTTPS",
          "SEO penalizes HTTP",
          "HTTPS is mandatory",
        ],
      },
    },
  },

  {
    id: 87,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "Obtaining SSL Certificates",
    type: "two-column",
    content: {
      left: {
        title: "Common Options",
        items: [
          "Let’s Encrypt (free)",
          "Hosting provider certificates",
          "Commercial CAs",
          "Cloud-managed SSL",
        ],
      },
      right: {
        title: "Beginner Recommendation",
        items: [
          "Use Let’s Encrypt",
          "Automated renewal",
          "Industry trusted",
          "Widely supported",
        ],
      },
    },
  },

  {
    id: 88,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "Beyond HTTPS (Security Basics)",
    type: "two-column",
    content: {
      left: {
        title: "Additional Security Layers",
        items: [
          "Firewalls",
          "SSH hardening",
          "Regular updates",
          "Access controls",
        ],
      },
      right: {
        title: "Security Mindset",
        items: [
          "Defense in depth",
          "Assume attacks happen",
          "Minimize exposure",
          "Monitor continuously",
        ],
      },
    },
  },

  {
    id: 89,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Running sites without HTTPS",
          "Ignoring certificate expiration",
          "Assuming HTTPS is enough",
          "Weak server security",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Enable HTTPS by default",
          "Automate renewals",
          "Layer security",
          "Stay updated",
        ],
      },
    },
  },

  {
    id: 90,
    moduleId: 9,
    moduleTitle: "SSL, HTTPS & Security Basics",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Environment variables",
          "Secrets management",
          "Configuration handling",
          "Production safety",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand HTTPS",
          "You know why SSL matters",
          "You understand security basics",
          "Ready for configuration management",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 10: Environment Variables & Secrets Management
  // =========================

  {
    id: 91,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "Why Configuration Management Matters",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Hardcoded secrets leak",
          "Different environments need different values",
          "Config changes require code edits",
          "Security risks increase",
        ],
      },
      right: {
        title: "The Proper Approach",
        items: [
          "Separate config from code",
          "Store secrets securely",
          "Change behavior without redeploying",
          "Industry best practice",
        ],
      },
    },
  },

  {
    id: 92,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "What Are Environment Variables?",
    type: "two-column",
    content: {
      left: {
        title: "Environment Variables Explained",
        items: [
          "Key–value pairs",
          "Available to running processes",
          "Defined outside application code",
          "OS-level configuration",
        ],
      },
      right: {
        title: "Why They Are Used",
        items: [
          "Store secrets safely",
          "Configure environments",
          "Avoid code changes",
          "Support deployments",
        ],
      },
    },
  },

  {
    id: 93,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "Common Use Cases",
    type: "two-column",
    content: {
      left: {
        title: "Typical Variables",
        items: [
          "Database URLs",
          "API keys",
          "Application ports",
          "Environment flags",
        ],
      },
      right: {
        title: "Environments",
        items: ["Development", "Staging", "Production", "Testing"],
      },
    },
  },

  {
    id: 94,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "How Applications Read Environment Variables",
    type: "two-column",
    content: {
      left: {
        title: "At Runtime",
        items: [
          "Variables injected by OS",
          "Read on startup",
          "Accessible to code",
          "Language-agnostic concept",
        ],
      },
      right: {
        title: "Important Insight",
        items: [
          "Values not stored in repo",
          "Same code, different behavior",
          "Safer deployments",
          "Easy rotations",
        ],
      },
    },
  },

  {
    id: 95,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "Defining Environment Variables",
    type: "two-column",
    content: {
      left: {
        title: "Common Methods",
        items: [
          "Shell export",
          "System service files",
          ".env files (development)",
          "Hosting provider dashboards",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Never commit secrets",
          "Use different values per environment",
          "Restrict access",
          "Rotate regularly",
        ],
      },
    },
  },

  {
    id: 96,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "Secrets vs Configuration",
    type: "two-column",
    content: {
      left: {
        title: "Secrets",
        items: [
          "Passwords",
          "API tokens",
          "Private keys",
          "Sensitive credentials",
        ],
      },
      right: {
        title: "Configuration",
        items: [
          "Ports",
          "Feature flags",
          "Environment names",
          "Non-sensitive values",
        ],
      },
    },
  },

  {
    id: 97,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "Security Risks of Poor Secret Management",
    type: "two-column",
    content: {
      left: {
        title: "What Can Go Wrong",
        items: [
          "Credential leaks",
          "Unauthorized access",
          "Data breaches",
          "Service abuse",
        ],
      },
      right: {
        title: "Real-World Consequences",
        items: [
          "Financial loss",
          "Reputation damage",
          "Account bans",
          "Compliance violations",
        ],
      },
    },
  },

  {
    id: 98,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "Rotating Secrets",
    type: "two-column",
    content: {
      left: {
        title: "Why Rotate",
        items: [
          "Assume secrets leak eventually",
          "Limit exposure time",
          "Improve security posture",
          "Meet compliance requirements",
        ],
      },
      right: {
        title: "Rotation Strategy",
        items: [
          "Change secrets regularly",
          "Update applications safely",
          "Automate where possible",
          "Document changes",
        ],
      },
    },
  },

  {
    id: 99,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Committing .env files",
          "Hardcoding secrets",
          "Sharing secrets in chat",
          "Using same secrets everywhere",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Add .env to .gitignore",
          "Use environment variables",
          "Restrict secret access",
          "Separate environments",
        ],
      },
    },
  },

  {
    id: 100,
    moduleId: 10,
    moduleTitle: "Environment Variables & Secrets",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Monitoring and logs",
          "Uptime tracking",
          "Observability basics",
          "Production visibility",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand environment variables",
          "You know how to manage secrets",
          "You understand security risks",
          "Ready for monitoring",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 11: Monitoring, Logs & Uptime
  // =========================

  {
    id: 101,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "Why Monitoring Matters",
    type: "two-column",
    content: {
      left: {
        title: "The Reality of Production",
        items: [
          "Servers can fail",
          "Applications can crash",
          "Traffic can spike unexpectedly",
          "Issues happen without warning",
        ],
      },
      right: {
        title: "Monitoring Solves This",
        items: [
          "Early problem detection",
          "Reduced downtime",
          "Better user experience",
          "Operational confidence",
        ],
      },
    },
  },

  {
    id: 102,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "What Is Monitoring?",
    type: "two-column",
    content: {
      left: {
        title: "Monitoring Explained",
        items: [
          "Continuous observation of systems",
          "Tracks server and app health",
          "Measures performance",
          "Detects anomalies",
        ],
      },
      right: {
        title: "Common Metrics",
        items: ["CPU usage", "Memory usage", "Disk space", "Network traffic"],
      },
    },
  },

  {
    id: 103,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "What Are Logs?",
    type: "two-column",
    content: {
      left: {
        title: "Logs Explained",
        items: [
          "Recorded events over time",
          "Generated by servers and apps",
          "Text-based records",
          "Critical for debugging",
        ],
      },
      right: {
        title: "Why Logs Matter",
        items: [
          "Understand failures",
          "Trace requests",
          "Audit activity",
          "Support troubleshooting",
        ],
      },
    },
  },

  {
    id: 104,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "Types of Logs",
    type: "two-column",
    content: {
      left: {
        title: "Common Log Categories",
        items: ["Access logs", "Error logs", "Application logs", "System logs"],
      },
      right: {
        title: "What They Tell You",
        items: [
          "Who accessed what",
          "What went wrong",
          "How the app behaved",
          "System-level events",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "Uptime & Availability",
    type: "two-column",
    content: {
      left: {
        title: "Uptime Explained",
        items: [
          "Percentage of time system is available",
          "Measured over a period",
          "Critical business metric",
          "User-facing reliability",
        ],
      },
      right: {
        title: "Common Targets",
        items: [
          "99% → basic reliability",
          "99.9% → production standard",
          "99.99% → high availability",
          "Trade-off with cost",
        ],
      },
    },
  },

  {
    id: 106,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "Basic Monitoring Tools (Conceptual)",
    type: "two-column",
    content: {
      left: {
        title: "Monitoring Tools",
        items: [
          "Uptime checkers",
          "System metrics collectors",
          "Application monitors",
          "Alerting systems",
        ],
      },
      right: {
        title: "What They Do",
        items: [
          "Check endpoints regularly",
          "Collect performance data",
          "Trigger alerts",
          "Provide dashboards",
        ],
      },
    },
  },

  {
    id: 107,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "Alerts & Notifications",
    type: "two-column",
    content: {
      left: {
        title: "Why Alerts Matter",
        items: [
          "Problems need attention",
          "Humans must be notified",
          "Automation alone is not enough",
          "Time matters in outages",
        ],
      },
      right: {
        title: "Good Alerting Practices",
        items: [
          "Alert on actionable issues",
          "Avoid alert fatigue",
          "Use clear messages",
          "Escalate when needed",
        ],
      },
    },
  },

  {
    id: 108,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "Log Management Basics",
    type: "two-column",
    content: {
      left: {
        title: "Managing Logs",
        items: [
          "Logs grow quickly",
          "Need rotation",
          "Need retention policies",
          "Need secure storage",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Rotate logs automatically",
          "Limit retention",
          "Centralize logs",
          "Protect sensitive data",
        ],
      },
    },
  },

  {
    id: 109,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "No monitoring at all",
          "Ignoring logs",
          "Alerting on everything",
          "No incident response plan",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Add monitoring early",
          "Check logs regularly",
          "Alert only on real issues",
          "Define basic response steps",
        ],
      },
    },
  },

  {
    id: 110,
    moduleId: 11,
    moduleTitle: "Monitoring, Logs & Uptime",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Scaling concepts",
          "Handling growth",
          "Load considerations",
          "Performance planning",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand monitoring basics",
          "You know why logs matter",
          "You understand uptime",
          "Ready for scaling concepts",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 12: Scaling & Load Concepts
  // =========================

  {
    id: 111,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "Why Scaling Becomes Necessary",
    type: "two-column",
    content: {
      left: {
        title: "The Growth Problem",
        items: [
          "More users",
          "More requests",
          "Higher resource usage",
          "Performance degradation",
        ],
      },
      right: {
        title: "Scaling Solves This",
        items: [
          "Maintain performance",
          "Handle traffic spikes",
          "Improve reliability",
          "Support business growth",
        ],
      },
    },
  },

  {
    id: 112,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "What Is Load?",
    type: "two-column",
    content: {
      left: {
        title: "Load Explained",
        items: [
          "Amount of work on system",
          "Requests per second",
          "Resource consumption",
          "Concurrency",
        ],
      },
      right: {
        title: "Common Bottlenecks",
        items: ["CPU", "Memory", "Disk I/O", "Network"],
      },
    },
  },

  {
    id: 113,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "Vertical Scaling",
    type: "two-column",
    content: {
      left: {
        title: "Vertical Scaling (Scale Up)",
        items: [
          "Add more resources to one server",
          "Increase CPU or RAM",
          "Simple approach",
          "Hardware limits exist",
        ],
      },
      right: {
        title: "When to Use It",
        items: [
          "Early-stage applications",
          "Quick performance boost",
          "Low operational complexity",
          "Short-term solution",
        ],
      },
    },
  },

  {
    id: 114,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "Horizontal Scaling",
    type: "two-column",
    content: {
      left: {
        title: "Horizontal Scaling (Scale Out)",
        items: [
          "Add more servers",
          "Distribute traffic",
          "Improves resilience",
          "Scales further",
        ],
      },
      right: {
        title: "Requirements",
        items: [
          "Load balancer",
          "Stateless applications",
          "Shared databases",
          "More complexity",
        ],
      },
    },
  },

  {
    id: 115,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "Load Balancing Explained",
    type: "two-column",
    content: {
      left: {
        title: "Load Balancer Role",
        items: [
          "Distributes traffic",
          "Sits in front of servers",
          "Prevents overload",
          "Improves availability",
        ],
      },
      right: {
        title: "Common Strategies",
        items: [
          "Round robin",
          "Least connections",
          "IP hashing",
          "Health-based routing",
        ],
      },
    },
  },

  {
    id: 116,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "Stateless vs Stateful Applications",
    type: "two-column",
    content: {
      left: {
        title: "Stateless Apps",
        items: [
          "No session data stored locally",
          "Easy to scale",
          "Requests independent",
          "Preferred for cloud",
        ],
      },
      right: {
        title: "Stateful Apps",
        items: [
          "Store session locally",
          "Harder to scale",
          "Require sticky sessions",
          "More complexity",
        ],
      },
    },
  },

  {
    id: 117,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "Scaling Databases (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Database Challenges",
        items: [
          "Single point of failure",
          "Heavy read/write load",
          "Data consistency",
          "Backup complexity",
        ],
      },
      right: {
        title: "Common Approaches",
        items: [
          "Read replicas",
          "Caching layers",
          "Sharding",
          "Managed databases",
        ],
      },
    },
  },

  {
    id: 118,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "When Not to Scale",
    type: "two-column",
    content: {
      left: {
        title: "Common Mistakes",
        items: [
          "Scaling too early",
          "Ignoring code efficiency",
          "Overengineering",
          "Unnecessary cost",
        ],
      },
      right: {
        title: "Better Approach",
        items: [
          "Measure first",
          "Optimize code",
          "Scale when needed",
          "Plan incrementally",
        ],
      },
    },
  },

  {
    id: 119,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Confusing scaling types",
          "Skipping load testing",
          "Ignoring database bottlenecks",
          "No monitoring",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Understand fundamentals",
          "Test under load",
          "Monitor metrics",
          "Scale deliberately",
        ],
      },
    },
  },

  {
    id: 120,
    moduleId: 12,
    moduleTitle: "Scaling & Load Concepts",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "CI/CD basics",
          "Automated deployments",
          "Reducing human error",
          "Professional workflows",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand scaling concepts",
          "You know load basics",
          "You understand trade-offs",
          "Ready for CI/CD",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 13: CI/CD Basics (Continuous Integration & Deployment)
  // =========================

  {
    id: 121,
    moduleId: 13,
    moduleTitle: "CI/CD Basics",
    title: "Why CI/CD Exists",
    type: "two-column",
    content: {
      left: {
        title: "The Old Way",
        items: [
          "Manual deployments",
          "Human error",
          "Downtime during releases",
          "Slow iteration",
        ],
      },
      right: {
        title: "The CI/CD Way",
        items: [
          "Automated testing",
          "Automated deployments",
          "Faster releases",
          "Reliable production changes",
        ],
      },
    },
  },

  {
    id: 122,
    moduleId: 13,
    moduleTitle: "CI/CD Basics",
    title: "What Is CI?",
    type: "two-column",
    content: {
      left: {
        title: "Continuous Integration",
        items: [
          "Code is merged frequently",
          "Tests run automatically",
          "Bugs detected early",
          "Shared codebase stays healthy",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Small changes reduce risk",
          "Automation catches issues",
          "Feedback is fast",
          "Quality improves",
        ],
      },
    },
  },

  {
    id: 123,
    moduleId: 13,
    moduleTitle: "CI/CD Basics",
    title: "What Is CD?",
    type: "two-column",
    content: {
      left: {
        title: "Continuous Deployment / Delivery",
        items: [
          "Code moves to production automatically",
          "No manual steps",
          "Repeatable process",
          "Consistent environments",
        ],
      },
      right: {
        title: "Two Meanings of CD",
        items: [
          "Continuous Delivery → manual approval",
          "Continuous Deployment → fully automatic",
          "Both reduce release friction",
          "Choice depends on risk",
        ],
      },
    },
  },

  {
    id: 124,
    moduleId: 13,
    moduleTitle: "CI/CD Basics",
    title: "CI/CD Pipeline (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Typical Pipeline Stages",
        items: ["Code commit", "Build", "Test", "Deploy"],
      },
      right: {
        title: "Why Pipelines Matter",
        items: [
          "Standardized releases",
          "Repeatable results",
          "Clear failure points",
          "Auditability",
        ],
      },
    },
  },

  {
    id: 125,
    moduleId: 13,
    moduleTitle: "CI/CD Basics",
    title: "What Gets Automated",
    type: "two-column",
    content: {
      left: {
        title: "Common Automations",
        items: [
          "Running tests",
          "Linting code",
          "Building artifacts",
          "Deploying to servers",
        ],
      },
      right: {
        title: "Benefits",
        items: [
          "Fewer mistakes",
          "Faster feedback",
          "Consistent deployments",
          "Higher confidence",
        ],
      },
    },
  },

  {
    id: 126,
    moduleId: 13,
    moduleTitle: "CI/CD Basics",
    title: "CI/CD Tools (Conceptual)",
    type: "two-column",
    content: {
      left: {
        title: "Common CI/CD Tools",
        items: ["GitHub Actions", "GitLab CI", "Jenkins", "CircleCI"],
      },
      right: {
        title: "Tool Choice Insight",
        items: [
          "Concepts matter more than tools",
          "All tools implement pipelines",
          "Start simple",
          "Avoid overengineering",
        ],
      },
    },
  },

  {
    id: 127,
    moduleId: 13,
    moduleTitle: "CI/CD Basics",
    title: "CI/CD and Hosting",
    type: "two-column",
    content: {
      left: {
        title: "Why Hosting Needs CI/CD",
        items: [
          "Frequent updates",
          "Production reliability",
          "Team collaboration",
          "Rollback capability",
        ],
      },
      right: {
        title: "Deployment Mindset",
        items: [
          "Infrastructure as code",
          "Automate everything repeatable",
          "Humans approve strategy",
          "Machines execute steps",
        ],
      },
    },
  },

  {
    id: 128,
    moduleId: 13,
    moduleTitle: "CI/CD Basics",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Skipping tests",
          "Deploying directly to production",
          "No rollback plan",
          "Overcomplicated pipelines",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Add tests early",
          "Use staging environments",
          "Keep pipelines simple",
          "Improve gradually",
        ],
      },
    },
  },

  {
    id: 129,
    moduleId: 13,
    moduleTitle: "CI/CD Basics",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Cloud providers overview",
          "Infrastructure options",
          "Managed vs self-hosted",
          "Choosing platforms",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand CI/CD concepts",
          "You know pipeline stages",
          "You understand automation value",
          "Ready for cloud overview",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 14: Cloud Providers Overview
  // =========================

  {
    id: 130,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "Why Cloud Providers Exist",
    type: "two-column",
    content: {
      left: {
        title: "Traditional Hosting Limitations",
        items: [
          "Manual server provisioning",
          "Fixed hardware limits",
          "Scaling takes time",
          "Operational overhead",
        ],
      },
      right: {
        title: "Cloud Provider Advantages",
        items: [
          "On-demand infrastructure",
          "Elastic scaling",
          "Managed services",
          "Global availability",
        ],
      },
    },
  },

  {
    id: 131,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "What Cloud Providers Offer",
    type: "two-column",
    content: {
      left: {
        title: "Core Services",
        items: [
          "Virtual machines",
          "Storage services",
          "Networking",
          "Managed databases",
        ],
      },
      right: {
        title: "Higher-Level Services",
        items: [
          "Load balancers",
          "Monitoring",
          "Identity management",
          "Automation tools",
        ],
      },
    },
  },

  {
    id: 132,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "Popular Cloud Providers",
    type: "two-column",
    content: {
      left: {
        title: "Major Players",
        items: [
          "Amazon Web Services (AWS)",
          "Microsoft Azure",
          "Google Cloud Platform (GCP)",
          "DigitalOcean",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "All solve similar problems",
          "Different pricing and UX",
          "Concepts transfer easily",
          "Avoid vendor lock-in early",
        ],
      },
    },
  },

  {
    id: 133,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "Infrastructure as a Service (IaaS)",
    type: "two-column",
    content: {
      left: {
        title: "IaaS Explained",
        items: [
          "You manage servers",
          "Provider manages hardware",
          "Most flexible model",
          "Closest to VPS hosting",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "EC2 (AWS)",
          "Virtual Machines (Azure)",
          "Compute Engine (GCP)",
          "Droplets (DigitalOcean)",
        ],
      },
    },
  },

  {
    id: 134,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "Platform as a Service (PaaS)",
    type: "two-column",
    content: {
      left: {
        title: "PaaS Explained",
        items: [
          "No server management",
          "Focus on code",
          "Platform handles scaling",
          "Less operational work",
        ],
      },
      right: {
        title: "Trade-offs",
        items: [
          "Less control",
          "Opinionated platforms",
          "Potential lock-in",
          "Pricing can grow",
        ],
      },
    },
  },

  {
    id: 135,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "Serverless (Conceptual)",
    type: "two-column",
    content: {
      left: {
        title: "Serverless Explained",
        items: [
          "No visible servers",
          "Functions run on demand",
          "Automatic scaling",
          "Pay per execution",
        ],
      },
      right: {
        title: "Reality Check",
        items: [
          "Servers still exist",
          "Highly abstracted",
          "Good for specific use cases",
          "Not universal",
        ],
      },
    },
  },

  {
    id: 136,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "Choosing a Cloud Provider",
    type: "two-column",
    content: {
      left: {
        title: "Decision Factors",
        items: [
          "Project requirements",
          "Budget",
          "Team expertise",
          "Ecosystem needs",
        ],
      },
      right: {
        title: "Beginner Advice",
        items: [
          "Start simple",
          "Learn core concepts",
          "Avoid unnecessary services",
          "Switch later if needed",
        ],
      },
    },
  },

  {
    id: 137,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "Cloud vs Traditional Hosting",
    type: "two-column",
    content: {
      left: {
        title: "Traditional Hosting",
        items: [
          "Fixed resources",
          "Manual scaling",
          "Lower abstraction",
          "Predictable costs",
        ],
      },
      right: {
        title: "Cloud Hosting",
        items: [
          "Elastic resources",
          "On-demand scaling",
          "Managed services",
          "Usage-based pricing",
        ],
      },
    },
  },

  {
    id: 138,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using too many services",
          "Ignoring pricing models",
          "Skipping cost monitoring",
          "Overengineering early",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Start with core services",
          "Understand pricing basics",
          "Monitor usage",
          "Grow gradually",
        ],
      },
    },
  },

  {
    id: 139,
    moduleId: 14,
    moduleTitle: "Cloud Providers Overview",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Real-world deployment project",
          "Putting it all together",
          "Hands-on hosting",
          "End-to-end setup",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand cloud concepts",
          "You know major providers",
          "You understand service models",
          "Ready for final project",
        ],
      },
    },
  },
  // =========================
  // Hosting Module 15: Real-World Deployment Project
  // =========================

  {
    id: 140,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Project Overview",
    type: "two-column",
    content: {
      left: {
        title: "What You Will Build",
        items: [
          "A complete production-ready application",
          "Frontend + backend + database",
          "Secured with HTTPS",
          "Accessible via a domain name",
        ],
      },
      right: {
        title: "Why This Matters",
        items: [
          "Simulates real industry work",
          "Brings all modules together",
          "Builds deployment confidence",
          "Demonstrates professional skill",
        ],
      },
    },
  },

  {
    id: 141,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Project Architecture",
    type: "two-column",
    content: {
      left: {
        title: "System Components",
        items: [
          "Client (browser)",
          "Web server (Nginx)",
          "Backend application",
          "Database server",
        ],
      },
      right: {
        title: "High-Level Flow",
        items: [
          "Client sends request",
          "Nginx handles HTTPS",
          "Backend processes logic",
          "Database stores data",
        ],
      },
    },
  },

  {
    id: 142,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Step 1: Prepare the Server",
    type: "two-column",
    content: {
      left: {
        title: "Server Setup",
        items: [
          "Provision Linux server",
          "Create non-root user",
          "Secure SSH access",
          "Update system packages",
        ],
      },
      right: {
        title: "Why This Comes First",
        items: [
          "Security baseline",
          "Clean environment",
          "Repeatable setup",
          "Production mindset",
        ],
      },
    },
  },

  {
    id: 143,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Step 2: Install Core Software",
    type: "two-column",
    content: {
      left: {
        title: "Required Software",
        items: [
          "Web server (Nginx)",
          "Application runtime",
          "Database engine",
          "Firewall tools",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Minimal installations",
          "Avoid unnecessary packages",
          "Reduce attack surface",
          "Easier maintenance",
        ],
      },
    },
  },

  {
    id: 144,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Step 3: Deploy the Application",
    type: "two-column",
    content: {
      left: {
        title: "Deployment Tasks",
        items: [
          "Upload application code",
          "Install dependencies",
          "Configure environment variables",
          "Start application process",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Never hardcode secrets",
          "Use process managers",
          "Log application output",
          "Test locally first",
        ],
      },
    },
  },

  {
    id: 145,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Step 4: Configure Web Server",
    type: "two-column",
    content: {
      left: {
        title: "Web Server Tasks",
        items: [
          "Set server name",
          "Configure reverse proxy",
          "Enable HTTPS",
          "Reload configuration",
        ],
      },
      right: {
        title: "Why This Matters",
        items: [
          "Security",
          "Performance",
          "Clean URLs",
          "Production readiness",
        ],
      },
    },
  },

  {
    id: 146,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Step 5: Domain & DNS Setup",
    type: "two-column",
    content: {
      left: {
        title: "DNS Tasks",
        items: [
          "Point domain to server IP",
          "Verify DNS propagation",
          "Configure web server domain",
          "Test access",
        ],
      },
      right: {
        title: "Common Pitfalls",
        items: [
          "Wrong DNS records",
          "TTL delays",
          "Domain mismatch",
          "Forgetting HTTPS renewal",
        ],
      },
    },
  },

  {
    id: 147,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Step 6: Monitoring & Validation",
    type: "two-column",
    content: {
      left: {
        title: "Validation Checks",
        items: [
          "App responds correctly",
          "Logs show no errors",
          "HTTPS works",
          "Uptime checks pass",
        ],
      },
      right: {
        title: "Production Checklist",
        items: [
          "Monitoring enabled",
          "Backups configured",
          "Secrets secured",
          "Access restricted",
        ],
      },
    },
  },

  {
    id: 148,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Common Deployment Failures",
    type: "two-column",
    content: {
      left: {
        title: "Failure Causes",
        items: [
          "Wrong ports exposed",
          "Missing environment variables",
          "Permission errors",
          "Misconfigured proxy",
        ],
      },
      right: {
        title: "Debugging Strategy",
        items: [
          "Check logs first",
          "Verify process status",
          "Test endpoints manually",
          "Work layer by layer",
        ],
      },
    },
  },

  {
    id: 149,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "What You Have Achieved",
    type: "two-column",
    content: {
      left: {
        title: "Skills Gained",
        items: [
          "End-to-end deployment",
          "Production hosting knowledge",
          "Security awareness",
          "Operational confidence",
        ],
      },
      right: {
        title: "Professional Outcome",
        items: [
          "You can host real applications",
          "You understand production systems",
          "You can debug deployments",
          "You are deployment-ready",
        ],
      },
    },
  },

  {
    id: 150,
    moduleId: 15,
    moduleTitle: "Real-World Deployment Project",
    title: "Course Completion",
    type: "two-column",
    content: {
      left: {
        title: "You Now Understand",
        items: [
          "How hosting works",
          "How servers operate",
          "How apps reach users",
          "How to deploy professionally",
        ],
      },
      right: {
        title: "What Comes After",
        items: [
          "Advanced cloud specialization",
          "DevOps tooling",
          "Containerization",
          "Infrastructure automation",
        ],
      },
    },
  },
];
