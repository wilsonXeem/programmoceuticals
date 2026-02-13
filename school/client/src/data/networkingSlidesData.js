export const networkingSlidesData = [
  {
    id: 0,
    moduleId: 1,
    moduleTitle: "Module 1: Computer Networking Fundamentals",
    title: "Computer Networking Fundamentals",
    type: "hero",
    content: {
      eyebrow: "Module 1 • Networking Foundations",
      subtitle: "Learn how devices communicate, how networks are structured, and how data moves across the internet.",
      bullets: [
        "Understand the OSI and TCP/IP models",
        "Learn IP addressing, routing, and switching",
        "Explore DNS, HTTP/HTTPS, and security basics",
        "Build practical troubleshooting skills",
      ],
      chips: ["Protocols", "Infrastructure", "Security", "Troubleshooting"],
    },
    codeExample: "",
    language: "networking",
  },
  // =========================
  // Networking Module 1: Introduction to Computer Networking
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "What Is Computer Networking?",
    type: "infographic",
    content: {
      intro: "Networking is how devices connect, share data, and provide services.",
      cards: [
        {
          tag: "Definition",
          title: "Connect Devices",
          description: "Computers, servers, phones, and IoT devices.",
        },
        {
          tag: "Definition",
          title: "Share Data",
          description: "Files, messages, and real-time updates.",
        },
        {
          tag: "Definition",
          title: "Use Protocols",
          description: "Rules that make communication reliable.",
        },
        {
          tag: "Enables",
          title: "Internet Access",
          description: "Web, email, and cloud services.",
        },
        {
          tag: "Enables",
          title: "Collaboration",
          description: "Remote work and distributed systems.",
        },
        {
          tag: "Enables",
          title: "Security Layers",
          description: "Firewalls, VPNs, and access control.",
        },
      ],
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "Why Networking Matters",
    type: "diagram",
    content: {
      intro: "Networking transforms isolated devices into connected systems.",
      nodes: [
        {
          title: "Isolated Devices",
          description: "No sharing or communication.",
        },
        {
          title: "Connected Network",
          description: "Devices communicate using protocols.",
        },
        {
          title: "Shared Services",
          description: "Files, apps, and cloud resources.",
        },
        {
          title: "Modern Systems",
          description: "Remote work, distributed apps, global access.",
        },
      ],
      footer: "Networking is the backbone of modern computing.",
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "Types of Networks (By Size)",
    type: "infographic",
    content: {
      intro: "Network types are defined by size and coverage.",
      cards: [
        {
          tag: "LAN",
          title: "Local Area Network",
          description: "Home or office network.",
        },
        {
          tag: "WAN",
          title: "Wide Area Network",
          description: "The Internet is the biggest WAN.",
        },
        {
          tag: "MAN",
          title: "Metropolitan Area Network",
          description: "City-wide ISP or campus.",
        },
        {
          tag: "PAN",
          title: "Personal Area Network",
          description: "Bluetooth devices and wearables.",
        },
      ],
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "Network Components",
    type: "infographic",
    content: {
      intro: "Networks are made of end devices and network devices.",
      cards: [
        {
          tag: "End Devices",
          title: "Clients & Servers",
          items: ["Computers", "Servers", "Phones", "IoT devices"],
        },
        {
          tag: "Network Devices",
          title: "Traffic Managers",
          items: ["Routers", "Switches", "Access points", "Firewalls"],
        },
      ],
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "Client–Server vs Peer-to-Peer",
    type: "infographic",
    content: {
      intro: "Two common ways devices communicate.",
      cards: [
        {
          tag: "Client–Server",
          title: "Centralized",
          items: [
            "Central server",
            "Clients request services",
            "Highly scalable",
            "Used on the internet",
          ],
        },
        {
          tag: "Peer-to-Peer",
          title: "Distributed",
          items: [
            "No central server",
            "Peers share resources",
            "Simple setup",
            "Limited scalability",
          ],
        },
      ],
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "Data Transmission Basics",
    type: "diagram",
    content: {
      intro: "Networks move data by splitting it into packets.",
      nodes: [
        {
          title: "Split",
          description: "Data is broken into packets.",
        },
        {
          title: "Transmit",
          description: "Packets travel across the network.",
        },
        {
          title: "Reassemble",
          description: "Packets are put back together.",
        },
        {
          title: "Verify",
          description: "Errors are detected and corrected.",
        },
      ],
      footer: "Packets make transmission efficient and reliable.",
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "Protocols (High Level)",
    type: "infographic",
    content: {
      intro: "Protocols are rules that make communication possible.",
      cards: [
        {
          tag: "Protocol",
          title: "Rules",
          description: "Define how data is sent and received.",
        },
        {
          tag: "Protocol",
          title: "Standardized",
          description: "Ensures all devices understand each other.",
        },
        {
          tag: "Examples",
          title: "Web",
          description: "HTTP / HTTPS",
        },
        {
          tag: "Examples",
          title: "Transport",
          description: "TCP / UDP",
        },
        {
          tag: "Examples",
          title: "Email",
          description: "SMTP / IMAP",
        },
      ],
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "Network vs Internet",
    type: "diagram",
    content: {
      intro: "The internet is a network of networks.",
      nodes: [
        {
          title: "Network",
          description: "Connected devices under one control.",
        },
        {
          title: "Private or Local",
          description: "Home, office, or campus.",
        },
        {
          title: "Internet",
          description: "Global public network of networks.",
        },
        {
          title: "TCP/IP",
          description: "Common protocol that connects everything.",
        },
      ],
      footer: "All internets are networks, but not all networks are the internet.",
    },
  },

  {
    id: 9,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "Who Needs Networking Knowledge?",
    type: "infographic",
    content: {
      intro: "Networking is essential across many technical roles.",
      cards: [
        {
          tag: "Roles",
          title: "Engineering",
          items: ["Developers", "Cloud engineers", "System admins"],
        },
        {
          tag: "Security",
          title: "Cybersecurity",
          items: ["Threat detection", "Secure design", "Incident response"],
        },
        {
          tag: "Benefits",
          title: "Why It Helps",
          items: ["Debugging", "Architecture", "Performance", "Reliability"],
        },
      ],
    },
  },

  {
    id: 10,
    moduleId: 1,
    moduleTitle: "Introduction to Computer Networking",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "You now have the foundation to understand network models.",
      nodes: [
        {
          title: "Core Concepts",
          description: "Devices, protocols, and data flow.",
        },
        {
          title: "Network Types",
          description: "LAN, WAN, MAN, PAN.",
        },
        {
          title: "Components",
          description: "Routers, switches, and hosts.",
        },
        {
          title: "Next: OSI Model",
          description: "Layered communication basics.",
        },
      ],
      footer: "Up next: OSI and TCP/IP models.",
    },
  },
  // =========================
  // Networking Module 2: OSI Model & TCP/IP Model
  // =========================

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Why Network Models Exist",
    type: "infographic",
    content: {
      intro: "Models make networking easier to learn and troubleshoot.",
      cards: [
        {
          tag: "Problem",
          title: "Too Complex",
          description: "Without a model, it’s hard to reason about issues.",
        },
        {
          tag: "Problem",
          title: "No Standard",
          description: "Vendors describe things differently.",
        },
        {
          tag: "Model Benefit",
          title: "Standardized",
          description: "Shared language across the industry.",
        },
        {
          tag: "Model Benefit",
          title: "Troubleshooting",
          description: "Diagnose by layer.",
        },
      ],
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "What Is the OSI Model?",
    type: "diagram",
    content: {
      intro: "The OSI model explains how data moves through 7 layers.",
      nodes: [
        {
          title: "Application",
          description: "What the user interacts with.",
        },
        {
          title: "Transport",
          description: "Reliable delivery (TCP/UDP).",
        },
        {
          title: "Network",
          description: "Routing with IP.",
        },
        {
          title: "Physical",
          description: "Cables and signals.",
        },
      ],
      footer: "OSI is a learning and troubleshooting framework.",
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "OSI Layers Overview",
    type: "infographic",
    content: {
      intro: "OSI layers from top to bottom.",
      cards: [
        {
          tag: "7–5",
          title: "Application / Presentation / Session",
          description: "User-facing and data formatting layers.",
        },
        {
          tag: "4",
          title: "Transport",
          description: "Reliable delivery and ports.",
        },
        {
          tag: "3",
          title: "Network",
          description: "IP and routing.",
        },
        {
          tag: "2–1",
          title: "Data Link / Physical",
          description: "Frames, MAC, cables, signals.",
        },
      ],
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Layer 7 – Application",
    type: "infographic",
    content: {
      intro: "The Application layer is where users interact with network services.",
      cards: [
        {
          tag: "Responsibilities",
          title: "User-facing services",
          items: [
            "Application communication",
            "Protocol interaction",
            "Interface to software",
          ],
        },
        {
          tag: "Examples",
          title: "Common protocols",
          items: ["HTTP / HTTPS", "FTP", "SMTP", "DNS"],
        },
      ],
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Layer 6 – Presentation",
    type: "infographic",
    content: {
      intro: "The Presentation layer handles data formatting and security.",
      cards: [
        {
          tag: "Responsibilities",
          title: "Format & secure data",
          items: [
            "Data formatting",
            "Encryption / decryption",
            "Compression",
            "Character encoding",
          ],
        },
        {
          tag: "Examples",
          title: "Common formats",
          items: ["SSL / TLS", "JPEG / PNG", "ASCII / UTF-8", "Serialization"],
        },
      ],
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Layer 5 – Session",
    type: "infographic",
    content: {
      intro: "The Session layer manages conversations between systems.",
      cards: [
        {
          tag: "Responsibilities",
          title: "Session control",
          items: [
            "Establish sessions",
            "Maintain sessions",
            "Terminate sessions",
            "Synchronization",
          ],
        },
        {
          tag: "Real Meaning",
          title: "Practical view",
          items: [
            "Keeps conversations alive",
            "Manages checkpoints",
            "Controls dialog",
            "Rarely explicit today",
          ],
        },
      ],
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Layer 4 – Transport",
    type: "infographic",
    content: {
      intro: "The Transport layer delivers data end-to-end.",
      cards: [
        {
          tag: "Responsibilities",
          title: "Reliable delivery",
          items: [
            "End-to-end delivery",
            "Port numbers",
            "Flow control",
            "Error handling",
          ],
        },
        {
          tag: "Protocols",
          title: "Common transport",
          items: ["TCP", "UDP", "SCTP", "QUIC"],
        },
      ],
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Layer 3 – Network",
    type: "infographic",
    content: {
      intro: "The Network layer handles routing and IP addressing.",
      cards: [
        {
          tag: "Responsibilities",
          title: "Routing & forwarding",
          items: [
            "Logical addressing",
            "Routing",
            "Path selection",
            "Packet forwarding",
          ],
        },
        {
          tag: "Examples",
          title: "Network tools",
          items: ["IP (IPv4 / IPv6)", "Routers", "ICMP", "Routing protocols"],
        },
      ],
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Layer 2 – Data Link",
    type: "infographic",
    content: {
      intro: "The Data Link layer moves frames on a local network.",
      cards: [
        {
          tag: "Responsibilities",
          title: "Local delivery",
          items: [
            "MAC addressing",
            "Frame delivery",
            "Error detection",
            "Switching",
          ],
        },
        {
          tag: "Examples",
          title: "Common tech",
          items: ["Ethernet", "Wi-Fi", "Switches", "ARP"],
        },
      ],
    },
  },

  {
    id: 20,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Layer 1 – Physical",
    type: "infographic",
    content: {
      intro: "The Physical layer sends bits over real media.",
      cards: [
        {
          tag: "Responsibilities",
          title: "Signals & media",
          items: [
            "Bits transmission",
            "Electrical signals",
            "Cabling",
            "Physical media",
          ],
        },
        {
          tag: "Examples",
          title: "Hardware",
          items: ["Ethernet cables", "Fiber optics", "Voltage levels", "NICs"],
        },
      ],
    },
  },

  {
    id: 21,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "TCP/IP Model Overview",
    type: "diagram",
    content: {
      intro: "TCP/IP is the practical model used on the internet.",
      nodes: [
        { title: "Application", description: "User-facing protocols like HTTP, DNS." },
        { title: "Transport", description: "TCP and UDP delivery." },
        { title: "Internet", description: "IP routing across networks." },
        { title: "Network Access", description: "Ethernet, Wi-Fi, physical media." },
      ],
      footer: "TCP/IP has 4 layers and mirrors real-world networking.",
    },
  },

  {
    id: 22,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "OSI vs TCP/IP Mapping",
    type: "infographic",
    content: {
      intro: "OSI’s 7 layers compress into TCP/IP’s 4 practical layers.",
      cards: [
        {
          tag: "OSI → TCP/IP",
          title: "Application Stack",
          items: [
            "OSI: Application / Presentation / Session",
            "TCP/IP: Application",
            "Goal: user-facing services",
          ],
        },
        {
          tag: "OSI → TCP/IP",
          title: "Transport",
          items: ["OSI: Transport", "TCP/IP: Transport", "Goal: end-to-end delivery"],
        },
        {
          tag: "OSI → TCP/IP",
          title: "Network",
          items: ["OSI: Network", "TCP/IP: Internet", "Goal: routing across networks"],
        },
        {
          tag: "OSI → TCP/IP",
          title: "Link + Physical",
          items: [
            "OSI: Data Link / Physical",
            "TCP/IP: Network Access",
            "Goal: local delivery + media",
          ],
        },
      ],
    },
  },

  {
    id: 23,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Why Engineers Use Both Models",
    type: "infographic",
    content: {
      intro: "OSI explains the theory; TCP/IP powers the real internet.",
      cards: [
        {
          tag: "OSI",
          title: "Learning model",
          items: [
            "Clear layer boundaries",
            "Troubleshooting mental map",
            "Interview language",
            "Protocol categorization",
          ],
        },
        {
          tag: "TCP/IP",
          title: "Implementation model",
          items: [
            "Actual protocol stack",
            "Internet operations",
            "Device configuration",
            "Network engineering work",
          ],
        },
        {
          tag: "Together",
          title: "Best practice",
          items: [
            "Learn with OSI",
            "Implement with TCP/IP",
            "Map issues between both",
          ],
        },
      ],
    },
  },

  {
    id: 24,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "Focus on purpose, not just memorization.",
      cards: [
        {
          tag: "Mistake",
          title: "Memorizing only",
          description: "Students recite layers but can’t map real protocols.",
        },
        {
          tag: "Fix",
          title: "Map protocols",
          description: "Match HTTP, TCP, IP, Ethernet to their layers.",
        },
        {
          tag: "Mistake",
          title: "Mixing responsibilities",
          description: "Confusing transport with network or data link.",
        },
        {
          tag: "Fix",
          title: "Follow data flow",
          description: "Trace data from app → wire → app.",
        },
      ],
    },
  },

  {
    id: 25,
    moduleId: 2,
    moduleTitle: "OSI Model & TCP/IP Model",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "Next up: IP addressing and how networks scale.",
      nodes: [
        {
          title: "IPv4 Basics",
          description: "Address structure, private vs public.",
        },
        {
          title: "IPv6 Intro",
          description: "Why it exists and how it’s formatted.",
        },
        {
          title: "Subnets",
          description: "Divide networks with subnet masks.",
        },
        {
          title: "CIDR",
          description: "Efficient addressing and routing.",
        },
      ],
      footer: "You now understand OSI and TCP/IP foundations.",
    },
  },
  // =========================
  // Networking Module 3: IP Addressing, IPv4, IPv6 & Subnetting
  // =========================

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Why IP Addressing Exists",
    type: "infographic",
    content: {
      intro: "IP addressing gives every device a routable identity.",
      cards: [
        {
          tag: "Problem",
          title: "No global identity",
          items: [
            "Devices need unique addresses",
            "Data must reach correct hosts",
            "Networks must scale",
            "Routing requires structure",
          ],
        },
        {
          tag: "Solution",
          title: "Logical addressing",
          items: [
            "Hierarchical addresses",
            "Efficient routing decisions",
            "Global uniqueness",
            "Separation of networks",
          ],
        },
      ],
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "What Is an IP Address?",
    type: "infographic",
    content: {
      intro: "An IP address is a logical identifier used for routing.",
      cards: [
        {
          tag: "Definition",
          title: "Layer 3 identifier",
          items: [
            "Assigned to interfaces",
            "Used by routers",
            "Enables end-to-end delivery",
            "Logical (not physical)",
          ],
        },
        {
          tag: "Plain Meaning",
          title: "Device address",
          items: [
            "Tells where data should go",
            "Can change over time",
            "Different from MAC",
            "Supports mobility",
          ],
        },
      ],
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "IPv4 Overview",
    type: "diagram",
    content: {
      intro: "IPv4 uses 32-bit addressing written in dotted decimal.",
      nodes: [
        {
          title: "32-bit address",
          description: "Four 8-bit octets.",
        },
        {
          title: "Dotted decimal",
          description: "Example: 192.168.1.1",
        },
        {
          title: "Address space",
          description: "≈ 4.3 billion total addresses.",
        },
        {
          title: "Still common",
          description: "Most networks still rely on IPv4.",
        },
      ],
      footer: "IPv4’s limit is why IPv6 exists.",
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "IPv4 Address Structure",
    type: "infographic",
    content: {
      intro: "Every IPv4 address has a network part and a host part.",
      cards: [
        {
          tag: "Structure",
          title: "Two logical parts",
          items: [
            "Network portion",
            "Host portion",
            "Separated by subnet mask",
            "Guides routing decisions",
          ],
        },
        {
          tag: "Why it matters",
          title: "Scales networks",
          items: [
            "Identifies the network",
            "Identifies the device",
            "Enables grouping",
            "Improves routing efficiency",
          ],
        },
      ],
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Public vs Private IP Addresses",
    type: "infographic",
    content: {
      intro: "Public addresses face the internet; private addresses stay inside.",
      cards: [
        {
          tag: "Public",
          title: "Internet-routable",
          items: [
            "Globally unique",
            "Assigned by ISPs",
            "Visible externally",
            "Reachable over internet",
          ],
        },
        {
          tag: "Private",
          title: "Local-only",
          items: [
            "Used inside LANs",
            "Not internet-routable",
            "Reusable ranges",
            "Uses NAT for internet access",
          ],
        },
      ],
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Private IPv4 Address Ranges",
    type: "infographic",
    content: {
      intro: "RFC 1918 defines the private IPv4 address space.",
      cards: [
        {
          tag: "Ranges",
          title: "Private blocks",
          items: [
            "10.0.0.0 – 10.255.255.255",
            "172.16.0.0 – 172.31.255.255",
            "192.168.0.0 – 192.168.255.255",
          ],
        },
        {
          tag: "Use cases",
          title: "Where they live",
          items: ["Home networks", "Office LANs", "Cloud VPCs", "Internal services"],
        },
      ],
    },
  },

  {
    id: 32,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Special IPv4 Addresses",
    type: "infographic",
    content: {
      intro: "Some IPv4 addresses have special meanings.",
      cards: [
        {
          tag: "Special",
          title: "Reserved addresses",
          items: [
            "127.0.0.1 – Loopback",
            "0.0.0.0 – Unspecified",
            "255.255.255.255 – Broadcast",
            "169.254.x.x – APIPA",
          ],
        },
        {
          tag: "Purpose",
          title: "Why they exist",
          items: [
            "Local testing",
            "Initialization",
            "Broadcast communication",
            "Fallback networking",
          ],
        },
      ],
    },
  },

  {
    id: 33,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "What Is a Subnet Mask?",
    type: "diagram",
    content: {
      intro: "Subnet masks separate network bits from host bits.",
      nodes: [
        {
          title: "Purpose",
          description: "Defines which part is network vs host.",
        },
        {
          title: "Applied to IPv4",
          description: "Works with 32-bit addresses.",
        },
        {
          title: "Controls size",
          description: "Determines number of hosts per subnet.",
        },
        {
          title: "Examples",
          description: "255.255.255.0, 255.255.0.0",
        },
      ],
      footer: "Subnet masks translate into CIDR prefixes.",
    },
  },

  {
    id: 34,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "CIDR Notation",
    type: "infographic",
    content: {
      intro: "CIDR uses a prefix length to define network size.",
      cards: [
        {
          tag: "CIDR",
          title: "What it means",
          items: [
            "Classless Inter-Domain Routing",
            "Uses /prefix length",
            "Counts network bits",
            "Replaces classful addressing",
          ],
        },
        {
          tag: "Examples",
          title: "Common blocks",
          items: ["192.168.1.0/24", "10.0.0.0/8", "172.16.0.0/12"],
        },
      ],
    },
  },

  {
    id: 35,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Why Subnetting Is Used",
    type: "infographic",
    content: {
      intro: "Subnetting improves performance and control.",
      cards: [
        {
          tag: "Without subnetting",
          title: "Pain points",
          items: [
            "Huge broadcast domains",
            "Wasted IPs",
            "Slow performance",
            "Limited segmentation",
          ],
        },
        {
          tag: "With subnetting",
          title: "Benefits",
          items: [
            "Smaller networks",
            "Better performance",
            "Security boundaries",
            "Efficient IP usage",
          ],
        },
      ],
    },
  },

  {
    id: 36,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Subnetting Concept (High Level)",
    type: "diagram",
    content: {
      intro: "Subnetting trades host space for more networks.",
      nodes: [
        {
          title: "Borrow bits",
          description: "Move host bits to the network portion.",
        },
        {
          title: "Create subnets",
          description: "Multiple smaller networks from one block.",
        },
        {
          title: "New ranges",
          description: "Each subnet has its own host range.",
        },
        {
          title: "Key changes",
          description: "Network, broadcast, usable hosts.",
        },
      ],
      footer: "Subnetting is a sizing decision: networks vs hosts.",
    },
  },

  {
    id: 37,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "IPv6 Overview",
    type: "infographic",
    content: {
      intro: "IPv6 solves IPv4’s scale limits.",
      cards: [
        {
          tag: "Why IPv6",
          title: "Motivation",
          items: [
            "IPv4 exhaustion",
            "Massive device growth",
            "Simpler routing",
            "Modern internet needs",
          ],
        },
        {
          tag: "IPv6 traits",
          title: "Key characteristics",
          items: [
            "128-bit address",
            "Hexadecimal notation",
            "Huge address space",
            "Built-in security support",
          ],
        },
      ],
    },
  },

  {
    id: 38,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "IPv4 vs IPv6 (High Level)",
    type: "infographic",
    content: {
      intro: "Both are IP, but IPv6 scales dramatically better.",
      cards: [
        {
          tag: "IPv4",
          title: "Legacy standard",
          items: ["32-bit", "Dotted decimal", "Limited addresses", "Uses NAT"],
        },
        {
          tag: "IPv6",
          title: "Modern scale",
          items: [
            "128-bit",
            "Hexadecimal",
            "Huge address space",
            "End-to-end connectivity",
          ],
        },
      ],
    },
  },

  {
    id: 39,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "Focus on layer roles and step-by-step reasoning.",
      cards: [
        {
          tag: "Mistake",
          title: "Confusing IP and MAC",
          description: "IP is logical routing; MAC is local delivery.",
        },
        {
          tag: "Fix",
          title: "Understand layers",
          description: "Map IP to Layer 3 and MAC to Layer 2.",
        },
        {
          tag: "Mistake",
          title: "Ignoring subnet masks",
          description: "Without masks, routing decisions fail.",
        },
        {
          tag: "Fix",
          title: "Practice CIDR",
          description: "Use /prefix lengths and real examples.",
        },
      ],
    },
  },

  {
    id: 40,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "Next: local delivery and MAC resolution.",
      nodes: [
        {
          title: "MAC addresses",
          description: "Physical device identifiers.",
        },
        {
          title: "ARP",
          description: "IP-to-MAC resolution on a LAN.",
        },
        {
          title: "Layer 2 vs Layer 3",
          description: "Local delivery vs routing.",
        },
        {
          title: "LAN communication",
          description: "How frames move between devices.",
        },
      ],
      footer: "You’re ready to dive into Layer 2 communication.",
    },
  },

  {
    id: 41,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Subnetting Walkthrough: /24 → /26",
    type: "steps",
    content: {
      intro: "Split a /24 into four smaller /26 networks.",
      steps: [
        {
          title: "Start with /24",
          description: "Example: 192.168.1.0/24 (256 addresses).",
        },
        {
          title: "Borrow 2 host bits",
          description: "New prefix: /26 (adds 2 network bits).",
        },
        {
          title: "Find block size",
          description: "256 ÷ 4 = 64 addresses per subnet.",
        },
        {
          title: "List subnets",
          description: "192.168.1.0/26, .64/26, .128/26, .192/26.",
        },
      ],
    },
  },

  {
    id: 42,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Subnetting Quick Math",
    type: "infographic",
    content: {
      intro: "Use powers of 2 to estimate subnets and hosts.",
      cards: [
        {
          tag: "Subnets",
          title: "2ⁿ networks",
          items: [
            "n = borrowed bits",
            "/24 → /26 borrows 2 bits",
            "2² = 4 subnets",
          ],
        },
        {
          tag: "Hosts",
          title: "2ʰ − 2 hosts",
          items: [
            "h = remaining host bits",
            "/26 has 6 host bits",
            "2⁶ − 2 = 62 usable hosts",
          ],
        },
      ],
    },
  },

  {
    id: 43,
    moduleId: 3,
    moduleTitle: "IP Addressing, IPv4, IPv6 & Subnetting",
    title: "Terminal: Check IPv4/IPv6 Address",
    type: "code-plus",
    content: {
      title: "Find your IPs",
      points: [
        "IPv4 and IPv6 can be listed separately",
        "Look for active interface (Wi‑Fi/Ethernet)",
        "Addresses can change on reconnect",
      ],
      code: `# macOS
ipconfig getifaddr en0
ifconfig | grep inet

# Windows
ipconfig

# Linux
ip a
hostname -I`,
      note: "IPv4 is dotted-decimal; IPv6 is hex with colons.",
    },
  },
  // =========================
  // Networking Module 4: MAC Addresses, ARP & Local Network Communication
  // =========================

  {
    id: 44,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "Why Layer 2 Matters",
    type: "infographic",
    content: {
      intro: "Layer 2 makes local delivery possible.",
      cards: [
        {
          tag: "Without Layer 2",
          title: "Local traffic fails",
          items: [
            "IP alone isn’t enough",
            "No frame delivery",
            "Devices can’t communicate locally",
            "LAN breaks down",
          ],
        },
        {
          tag: "With Layer 2",
          title: "Local delivery works",
          items: [
            "MAC-based identification",
            "Frame delivery on LAN",
            "Switch-based forwarding",
            "Foundation of Ethernet",
          ],
        },
      ],
    },
  },

  {
    id: 45,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "What Is a MAC Address?",
    type: "infographic",
    content: {
      intro: "A MAC address is the hardware identity on a LAN.",
      cards: [
        {
          tag: "Definition",
          title: "Layer 2 identifier",
          items: [
            "Media Access Control address",
            "Unique hardware identifier",
            "Assigned to network interface",
            "Used for local delivery",
          ],
        },
        {
          tag: "Plain meaning",
          title: "Device fingerprint",
          items: [
            "Physical identity of device",
            "Usually burned into NIC",
            "Used only on local network",
            "Different from IP",
          ],
        },
      ],
    },
  },

  {
    id: 46,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "MAC Address Format",
    type: "diagram",
    content: {
      intro: "MAC addresses are 48-bit identifiers written in hex.",
      nodes: [
        {
          title: "48-bit address",
          description: "6 bytes total.",
        },
        {
          title: "Hex format",
          description: "Written like 00:1A:2B:3C:4D:5E.",
        },
        {
          title: "OUI vendor",
          description: "First 3 bytes identify the vendor.",
        },
        {
          title: "Device ID",
          description: "Last 3 bytes are unique per device.",
        },
      ],
      footer: "MAC addresses are globally unique per interface.",
    },
  },

  {
    id: 47,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "MAC Address vs IP Address",
    type: "infographic",
    content: {
      intro: "MAC is local delivery; IP is routing.",
      cards: [
        {
          tag: "MAC Address",
          title: "Layer 2 identity",
          items: [
            "Physical / hardware-based",
            "Used within LAN",
            "Stable over time",
            "Switch-forwarded",
          ],
        },
        {
          tag: "IP Address",
          title: "Layer 3 identity",
          items: [
            "Logical / software-based",
            "Used across networks",
            "Can change frequently",
            "Router-forwarded",
          ],
        },
      ],
    },
  },

  {
    id: 48,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "Why ARP Is Needed",
    type: "infographic",
    content: {
      intro: "ARP connects Layer 3 to Layer 2.",
      cards: [
        {
          tag: "Problem",
          title: "Missing MAC",
          items: [
            "IP knows destination logically",
            "Ethernet needs a MAC",
            "IP-to-MAC mapping required",
            "No automatic lookup",
          ],
        },
        {
          tag: "Solution",
          title: "ARP",
          items: [
            "Address Resolution Protocol",
            "Maps IP → MAC",
            "Works inside LAN",
            "Automatic resolution",
          ],
        },
      ],
    },
  },

  {
    id: 49,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "How ARP Works (Step-by-Step)",
    type: "diagram",
    content: {
      intro: "ARP resolves IP addresses to MAC addresses.",
      nodes: [
        {
          title: "Check cache",
          description: "Host looks for IP → MAC in ARP cache.",
        },
        {
          title: "Broadcast request",
          description: "Who has this IP? Tell me your MAC.",
        },
        {
          title: "Unicast reply",
          description: "Target sends back its MAC address.",
        },
        {
          title: "Cache entry",
          description: "Mapping stored for future use.",
        },
      ],
      footer: "ARP operates only within the local subnet.",
    },
  },

  {
    id: 50,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "ARP Example (Conceptual)",
    type: "infographic",
    content: {
      intro: "ARP in action on a local network.",
      cards: [
        {
          tag: "Scenario",
          title: "Host A needs MAC",
          items: [
            "Wants 192.168.1.10",
            "Knows IP, not MAC",
            "Broadcasts ARP request",
            "Receives MAC reply",
          ],
        },
        {
          tag: "Result",
          title: "Delivery happens",
          items: [
            "Frame sent to correct MAC",
            "Local delivery succeeds",
            "ARP cache updated",
            "Communication continues",
          ],
        },
      ],
    },
  },

  {
    id: 51,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "ARP Cache",
    type: "infographic",
    content: {
      intro: "ARP cache stores recent IP-to-MAC mappings.",
      cards: [
        {
          tag: "Definition",
          title: "Temporary table",
          items: [
            "IP–MAC mapping table",
            "Stored on each device",
            "Reduces ARP broadcasts",
            "Expires over time",
          ],
        },
        {
          tag: "Impact",
          title: "Why it matters",
          items: [
            "Faster communication",
            "Lower network noise",
            "Efficient LAN traffic",
            "Improved performance",
          ],
        },
      ],
    },
  },

  {
    id: 52,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "Switches and MAC Tables",
    type: "infographic",
    content: {
      intro: "Switches learn where devices live using MAC tables.",
      cards: [
        {
          tag: "Switch",
          title: "Layer 2 role",
          items: [
            "Forwards frames by MAC",
            "Learns device locations",
            "Reduces collisions",
            "Builds forwarding table",
          ],
        },
        {
          tag: "MAC Table",
          title: "How it works",
          items: [
            "Maps MAC → switch port",
            "Built dynamically",
            "Updated automatically",
            "Entries age out",
          ],
        },
      ],
    },
  },

  {
    id: 53,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "Broadcast vs Unicast",
    type: "infographic",
    content: {
      intro: "Broadcast reaches everyone; unicast targets one device.",
      cards: [
        {
          tag: "Broadcast",
          title: "One-to-all",
          items: [
            "Sent to all devices",
            "Uses FF:FF:FF:FF:FF:FF",
            "Used by ARP",
            "Consumes bandwidth",
          ],
        },
        {
          tag: "Unicast",
          title: "One-to-one",
          items: [
            "Sent to one device",
            "Uses specific MAC",
            "Efficient delivery",
            "Most data traffic",
          ],
        },
      ],
    },
  },

  {
    id: 54,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "Security Note: ARP Spoofing (Intro)",
    type: "infographic",
    content: {
      intro: "ARP is trust-based, which creates security risk.",
      cards: [
        {
          tag: "Weakness",
          title: "Trust-based protocol",
          items: [
            "No authentication",
            "Vulnerable to spoofing",
            "Local network attacks",
            "Easy to manipulate",
          ],
        },
        {
          tag: "Impact",
          title: "Why it matters",
          items: [
            "Man-in-the-middle attacks",
            "Traffic interception",
            "Network compromise",
            "Security awareness",
          ],
        },
      ],
    },
  },

  {
    id: 55,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      intro: "Focus on Layer 2 vs Layer 3 roles.",
      cards: [
        {
          tag: "Mistake",
          title: "IP sends frames",
          description: "IP routes packets; Ethernet delivers frames.",
        },
        {
          tag: "Fix",
          title: "Think IP → ARP → MAC",
          description: "Translate IP to MAC before sending frames.",
        },
        {
          tag: "Mistake",
          title: "Switches use IP",
          description: "Switches forward based on MAC tables.",
        },
        {
          tag: "Fix",
          title: "Map data flow",
          description: "Use OSI to debug the path of data.",
        },
      ],
    },
  },

  {
    id: 56,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "What Comes Next",
    type: "diagram",
    content: {
      intro: "Next: routing between networks.",
      nodes: [
        {
          title: "Routing",
          description: "Move packets across networks.",
        },
        {
          title: "Default gateways",
          description: "Exit point for local networks.",
        },
        {
          title: "Routers vs switches",
          description: "Layer 3 vs Layer 2 roles.",
        },
        {
          title: "Inter-network flow",
          description: "How packets traverse multiple networks.",
        },
      ],
      footer: "You’re ready to move beyond the LAN.",
    },
  },

  {
    id: 57,
    moduleId: 4,
    moduleTitle: "MAC Addresses, ARP & Local Network Communication",
    title: "Terminal: Find Your MAC Address",
    type: "code-plus",
    content: {
      title: "Locate MAC",
      points: [
        "MAC is the hardware address for each interface",
        "Often labeled as “ether” or “Physical Address”",
        "Each interface has its own MAC",
      ],
      code: `# macOS
ifconfig en0 | grep ether

# Windows
getmac /v
ipconfig /all

# Linux
ip link show
cat /sys/class/net/eth0/address`,
      note: "MAC addresses are 48-bit hex values like 00:1A:2B:3C:4D:5E.",
    },
  },
  // =========================
  // Networking Module 5: Routing, Routers & Default Gateways
  // =========================

  {
    id: 58,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "Why Routing Is Needed",
    type: "two-column",
    content: {
      left: {
        title: "The Limitation of LANs",
        items: [
          "ARP works only within a subnet",
          "MAC addresses are local",
          "Broadcasts do not cross networks",
          "Large networks must be segmented",
        ],
      },
      right: {
        title: "What Routing Solves",
        items: [
          "Communication between networks",
          "Path selection across subnets",
          "Internet connectivity",
          "Scalable network design",
        ],
      },
    },
  },

  {
    id: 59,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "What Is Routing?",
    type: "two-column",
    content: {
      left: {
        title: "Routing Defined",
        items: [
          "Forwarding packets between networks",
          "Layer 3 operation",
          "Uses IP addresses",
          "Decision-based forwarding",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Choosing where packets go next",
          "Finding a path to destination",
          "Moving data across networks",
          "Beyond the local LAN",
        ],
      },
    },
  },

  {
    id: 60,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "What Is a Router?",
    type: "two-column",
    content: {
      left: {
        title: "Router Role",
        items: [
          "Connects different networks",
          "Operates at Layer 3",
          "Uses routing tables",
          "Separates broadcast domains",
        ],
      },
      right: {
        title: "Common Examples",
        items: [
          "Home internet router",
          "Enterprise edge router",
          "Cloud virtual router",
          "ISP backbone routers",
        ],
      },
    },
  },

  {
    id: 61,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "Router vs Switch",
    type: "two-column",
    content: {
      left: {
        title: "Switch",
        items: [
          "Layer 2 device",
          "Uses MAC addresses",
          "Works within one network",
          "Forwards frames",
        ],
      },
      right: {
        title: "Router",
        items: [
          "Layer 3 device",
          "Uses IP addresses",
          "Connects multiple networks",
          "Forwards packets",
        ],
      },
    },
  },

  {
    id: 62,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "Default Gateway Explained",
    type: "two-column",
    content: {
      left: {
        title: "Default Gateway",
        items: [
          "Router IP address",
          "Exit point from local network",
          "Used when destination is remote",
          "Configured on hosts",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Where your computer sends traffic",
          "When it doesn't know the destination",
          "Path to the internet",
          "Usually your router",
        ],
      },
    },
  },

  {
    id: 63,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "Packet Flow with a Default Gateway",
    type: "two-column",
    content: {
      left: {
        title: "Inside the LAN",
        items: [
          "Host checks destination IP",
          "Same subnet → ARP + MAC",
          "Different subnet → gateway",
          "Frame sent to router MAC",
        ],
      },
      right: {
        title: "Beyond the LAN",
        items: [
          "Router receives packet",
          "Checks routing table",
          "Forwards to next hop",
          "Repeats until destination",
        ],
      },
    },
  },

  {
    id: 64,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "Routing Table (Concept)",
    type: "two-column",
    content: {
      left: {
        title: "Routing Table",
        items: [
          "List of known networks",
          "Destination → next hop mapping",
          "Includes default route",
          "Core of routing logic",
        ],
      },
      right: {
        title: "Typical Entries",
        items: [
          "Directly connected networks",
          "Static routes",
          "Dynamic routes",
          "0.0.0.0/0 default route",
        ],
      },
    },
  },

  {
    id: 65,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "Static vs Dynamic Routing",
    type: "two-column",
    content: {
      left: {
        title: "Static Routing",
        items: [
          "Manually configured",
          "Simple and predictable",
          "Low overhead",
          "Not scalable",
        ],
      },
      right: {
        title: "Dynamic Routing",
        items: [
          "Learns routes automatically",
          "Uses routing protocols",
          "Scales well",
          "Adapts to changes",
        ],
      },
    },
  },

  {
    id: 66,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "Common Routing Protocols (Intro)",
    type: "two-column",
    content: {
      left: {
        title: "Interior Protocols",
        items: ["RIP", "OSPF", "EIGRP", "IS-IS"],
      },
      right: {
        title: "Exterior Protocols",
        items: [
          "BGP",
          "Internet-scale routing",
          "ISP backbone",
          "Autonomous systems",
        ],
      },
    },
  },

  {
    id: 67,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Thinking routers use MAC only",
          "Misconfiguring default gateway",
          "Ignoring subnet boundaries",
          "Assuming internet = LAN",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Check IP + subnet + gateway",
          "Understand packet flow",
          "Use OSI model",
          "Trace traffic logically",
        ],
      },
    },
  },

  {
    id: 68,
    moduleId: 5,
    moduleTitle: "Routing, Routers & Default Gateways",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "NAT",
          "Public vs private addressing",
          "Internet access",
          "Address translation",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Routing fundamentals mastered",
          "Default gateway understood",
          "Router role clear",
          "Ready for NAT",
        ],
      },
    },
  },
  // =========================
  // Networking Module 6: NAT, Public vs Private IP & Internet Access
  // =========================

  {
    id: 69,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "Why NAT Exists",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "IPv4 address exhaustion",
          "Too many private devices",
          "Limited public IPs",
          "Global scaling challenge",
        ],
      },
      right: {
        title: "The Solution",
        items: [
          "Network Address Translation (NAT)",
          "Reuse private IPs",
          "Controlled internet access",
          "Extended IPv4 lifespan",
        ],
      },
    },
  },

  {
    id: 70,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "What Is NAT?",
    type: "two-column",
    content: {
      left: {
        title: "NAT Defined",
        items: [
          "Translates IP addresses",
          "Private ↔ Public mapping",
          "Occurs on routers",
          "Layer 3 / 4 operation",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Hides private network",
          "Shares one public IP",
          "Tracks connections",
          "Controls traffic flow",
        ],
      },
    },
  },

  {
    id: 71,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "Private IP Addresses (Review)",
    type: "two-column",
    content: {
      left: {
        title: "Private Ranges",
        items: [
          "10.0.0.0/8",
          "172.16.0.0/12",
          "192.168.0.0/16",
          "Not internet routable",
        ],
      },
      right: {
        title: "Where Used",
        items: [
          "Home networks",
          "Enterprise LANs",
          "Cloud VPCs",
          "Internal services",
        ],
      },
    },
  },

  {
    id: 72,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "Public IP Addresses",
    type: "two-column",
    content: {
      left: {
        title: "Public IPs",
        items: [
          "Globally unique",
          "Internet routable",
          "Assigned by ISPs",
          "Limited availability",
        ],
      },
      right: {
        title: "Used For",
        items: [
          "Web servers",
          "APIs",
          "Email servers",
          "Internet-facing services",
        ],
      },
    },
  },

  {
    id: 73,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "How NAT Works (Outbound Traffic)",
    type: "two-column",
    content: {
      left: {
        title: "Outbound Process",
        items: [
          "Private host sends packet",
          "Router replaces source IP",
          "Router tracks translation",
          "Packet sent to internet",
        ],
      },
      right: {
        title: "Key Detail",
        items: [
          "Uses port numbers",
          "Maintains NAT table",
          "Session-based mapping",
          "Transparent to user",
        ],
      },
    },
  },

  {
    id: 74,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "Inbound Traffic & NAT",
    type: "two-column",
    content: {
      left: {
        title: "Default Behavior",
        items: [
          "Inbound traffic blocked",
          "No matching NAT entry",
          "Security benefit",
          "Implicit firewall",
        ],
      },
      right: {
        title: "When Inbound Is Allowed",
        items: [
          "Port forwarding configured",
          "Static NAT",
          "Public-facing services",
          "Explicit rules",
        ],
      },
    },
  },

  {
    id: 75,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "Types of NAT",
    type: "two-column",
    content: {
      left: {
        title: "Common Types",
        items: [
          "Static NAT",
          "Dynamic NAT",
          "PAT (NAT Overload)",
          "Carrier-Grade NAT",
        ],
      },
      right: {
        title: "Most Common",
        items: [
          "PAT (many → one)",
          "Used in home routers",
          "Uses port translation",
          "Highly scalable",
        ],
      },
    },
  },

  {
    id: 76,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "PAT (Port Address Translation)",
    type: "two-column",
    content: {
      left: {
        title: "PAT Explained",
        items: [
          "Multiple devices",
          "Single public IP",
          "Unique source ports",
          "Connection tracking",
        ],
      },
      right: {
        title: "Why PAT Is Popular",
        items: [
          "Efficient IP usage",
          "Low cost",
          "Default in home routers",
          "Supports thousands of sessions",
        ],
      },
    },
  },

  {
    id: 77,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "Port Forwarding (Concept)",
    type: "two-column",
    content: {
      left: {
        title: "Port Forwarding",
        items: [
          "Maps public port → private host",
          "Allows inbound access",
          "Used for servers",
          "Manual configuration",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "Web server at home",
          "Remote desktop",
          "Game servers",
          "Self-hosted apps",
        ],
      },
    },
  },

  {
    id: 78,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "NAT and Security",
    type: "two-column",
    content: {
      left: {
        title: "Security Benefits",
        items: [
          "Hides internal IPs",
          "Blocks unsolicited inbound traffic",
          "Reduces attack surface",
          "Basic protection layer",
        ],
      },
      right: {
        title: "Security Limitations",
        items: [
          "Not a firewall",
          "No deep packet inspection",
          "Does not stop malware",
          "False sense of security",
        ],
      },
    },
  },

  {
    id: 79,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "NAT and IPv6",
    type: "two-column",
    content: {
      left: {
        title: "IPv6 Philosophy",
        items: [
          "No address exhaustion",
          "End-to-end connectivity",
          "No NAT required",
          "Simpler routing",
        ],
      },
      right: {
        title: "Reality Today",
        items: [
          "IPv4 still dominant",
          "Dual-stack environments",
          "NAT still widely used",
          "Gradual IPv6 adoption",
        ],
      },
    },
  },

  {
    id: 80,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Thinking NAT = security",
          "Confusing NAT with routing",
          "Forgetting port translation",
          "Ignoring inbound rules",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Understand NAT flow",
          "Combine NAT with firewall",
          "Trace packets logically",
          "Design intentionally",
        ],
      },
    },
  },

  {
    id: 81,
    moduleId: 6,
    moduleTitle: "NAT, Public vs Private IP & Internet Access",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "TCP vs UDP",
          "Ports & sockets",
          "Transport layer behavior",
          "Connection management",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "NAT fully understood",
          "Public vs private IP clarity",
          "Internet access demystified",
          "Ready for transport layer",
        ],
      },
    },
  },
  // =========================
  // Networking Module 7: TCP vs UDP, Ports & Transport Layer Concepts
  // =========================

  {
    id: 82,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "Why the Transport Layer Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Transport Control",
        items: [
          "No reliability guarantees",
          "Unordered data delivery",
          "No flow control",
          "Unpredictable communication",
        ],
      },
      right: {
        title: "With Transport Layer",
        items: [
          "End-to-end communication",
          "Reliability when needed",
          "Performance optimization",
          "Application-level control",
        ],
      },
    },
  },

  {
    id: 83,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "What Is the Transport Layer?",
    type: "two-column",
    content: {
      left: {
        title: "Transport Layer Defined",
        items: [
          "OSI Layer 4",
          "Process-to-process communication",
          "Uses port numbers",
          "Sits above IP",
        ],
      },
      right: {
        title: "Core Responsibilities",
        items: [
          "Segmentation & reassembly",
          "Reliability",
          "Flow control",
          "Error handling",
        ],
      },
    },
  },

  {
    id: 84,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "What Are Ports?",
    type: "two-column",
    content: {
      left: {
        title: "Ports Explained",
        items: [
          "Logical endpoints",
          "Identify applications",
          "Used with IP addresses",
          "16-bit numbers",
        ],
      },
      right: {
        title: "Common Port Ranges",
        items: [
          "0–1023: Well-known",
          "1024–49151: Registered",
          "49152–65535: Ephemeral",
          "Client-side usage",
        ],
      },
    },
  },

  {
    id: 85,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "Sockets (Concept)",
    type: "two-column",
    content: {
      left: {
        title: "Socket Defined",
        items: [
          "IP + Port combination",
          "Unique communication endpoint",
          "Identifies a connection",
          "Used by applications",
        ],
      },
      right: {
        title: "Example",
        items: [
          "192.168.1.10:443",
          "Client–server pairing",
          "Multiple sockets per host",
          "Connection tracking",
        ],
      },
    },
  },

  {
    id: 86,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "TCP Overview",
    type: "two-column",
    content: {
      left: {
        title: "TCP Characteristics",
        items: [
          "Connection-oriented",
          "Reliable delivery",
          "Ordered data",
          "Error recovery",
        ],
      },
      right: {
        title: "When TCP Is Used",
        items: ["Web browsing (HTTP/HTTPS)", "Email", "File transfers", "APIs"],
      },
    },
  },

  {
    id: 87,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "TCP Three-Way Handshake",
    type: "two-column",
    content: {
      left: {
        title: "Handshake Steps",
        items: ["SYN", "SYN-ACK", "ACK", "Connection established"],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Ensures both sides are ready",
          "Negotiates parameters",
          "Prevents half-open connections",
          "Foundation of reliability",
        ],
      },
    },
  },

  {
    id: 88,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "TCP Reliability Mechanisms",
    type: "two-column",
    content: {
      left: {
        title: "How TCP Ensures Reliability",
        items: [
          "Sequence numbers",
          "Acknowledgements",
          "Retransmissions",
          "Checksums",
        ],
      },
      right: {
        title: "Additional Features",
        items: [
          "Flow control (windowing)",
          "Congestion control",
          "Adaptive rate",
          "Network-friendly behavior",
        ],
      },
    },
  },

  {
    id: 89,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "UDP Overview",
    type: "two-column",
    content: {
      left: {
        title: "UDP Characteristics",
        items: [
          "Connectionless",
          "No delivery guarantees",
          "No ordering",
          "Low overhead",
        ],
      },
      right: {
        title: "When UDP Is Used",
        items: ["Streaming", "Online gaming", "DNS", "VoIP"],
      },
    },
  },

  {
    id: 90,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "TCP vs UDP Comparison",
    type: "two-column",
    content: {
      left: {
        title: "TCP",
        items: ["Reliable", "Ordered", "Slower", "Connection-based"],
      },
      right: {
        title: "UDP",
        items: ["Fast", "Unreliable", "Unordered", "Connectionless"],
      },
    },
  },

  {
    id: 91,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "Ports & Common Services",
    type: "two-column",
    content: {
      left: {
        title: "Common TCP Ports",
        items: ["80 – HTTP", "443 – HTTPS", "22 – SSH", "25 – SMTP"],
      },
      right: {
        title: "Common UDP Ports",
        items: ["53 – DNS", "67/68 – DHCP", "123 – NTP", "5060 – SIP"],
      },
    },
  },

  {
    id: 92,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "Choosing TCP vs UDP",
    type: "two-column",
    content: {
      left: {
        title: "Choose TCP When",
        items: [
          "Data must be accurate",
          "Loss is unacceptable",
          "Order matters",
          "Security is critical",
        ],
      },
      right: {
        title: "Choose UDP When",
        items: [
          "Speed matters more",
          "Minor loss is acceptable",
          "Real-time data",
          "Low latency required",
        ],
      },
    },
  },

  {
    id: 93,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Thinking UDP is broken TCP",
          "Ignoring ports",
          "Assuming TCP is always better",
          "Confusing sockets with protocols",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Understand application needs",
          "Trace transport behavior",
          "Map protocols to ports",
          "Design intentionally",
        ],
      },
    },
  },

  {
    id: 94,
    moduleId: 7,
    moduleTitle: "TCP vs UDP, Ports & Transport Layer Concepts",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "DNS",
          "Name resolution",
          "How the web finds servers",
          "Application-layer services",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Transport layer mastered",
          "TCP vs UDP clarity",
          "Ports & sockets understood",
          "Ready for DNS",
        ],
      },
    },
  },
  // =========================
  // Networking Module 8: DNS, Name Resolution & How the Internet Finds Servers
  // =========================

  {
    id: 95,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "Why DNS Exists",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Humans remember names, not numbers",
          "IP addresses are hard to memorize",
          "Web navigation would be impractical",
          "Scalability issue",
        ],
      },
      right: {
        title: "The Solution",
        items: [
          "Domain Name System (DNS)",
          "Maps names to IP addresses",
          "Hierarchical and distributed",
          "Foundation of the web",
        ],
      },
    },
  },

  {
    id: 96,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "What Is DNS?",
    type: "two-column",
    content: {
      left: {
        title: "DNS Defined",
        items: [
          "Distributed naming system",
          "Resolves domain names",
          "Works at application layer",
          "Uses UDP and TCP",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Internet phonebook",
          "Name → IP translator",
          "Automatic lookup",
          "Invisible to users",
        ],
      },
    },
  },

  {
    id: 97,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "DNS Hierarchy",
    type: "two-column",
    content: {
      left: {
        title: "Hierarchy Levels",
        items: [
          "Root servers (.)",
          "Top-Level Domains (TLDs)",
          "Second-level domains",
          "Subdomains",
        ],
      },
      right: {
        title: "Examples",
        items: [
          ".com, .org, .ng",
          "google.com",
          "mail.google.com",
          "api.example.com",
        ],
      },
    },
  },

  {
    id: 98,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "DNS Resolution Flow (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Resolution Steps",
        items: [
          "Client queries local resolver",
          "Resolver checks cache",
          "Queries root server",
          "Traverses hierarchy",
        ],
      },
      right: {
        title: "Key Concepts",
        items: [
          "Recursive vs iterative queries",
          "Caching at multiple levels",
          "Fast lookups",
          "Global distribution",
        ],
      },
    },
  },

  {
    id: 99,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "Recursive vs Iterative Queries",
    type: "two-column",
    content: {
      left: {
        title: "Recursive Query",
        items: [
          "Client asks for full answer",
          "Resolver does the work",
          "Simpler for clients",
          "Most common",
        ],
      },
      right: {
        title: "Iterative Query",
        items: [
          "Server gives partial answer",
          "Client continues querying",
          "Used between DNS servers",
          "Hierarchical discovery",
        ],
      },
    },
  },

  {
    id: 100,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "Common DNS Record Types",
    type: "two-column",
    content: {
      left: {
        title: "Record Types",
        items: [
          "A – IPv4 address",
          "AAAA – IPv6 address",
          "CNAME – Alias",
          "MX – Mail server",
        ],
      },
      right: {
        title: "Other Important Records",
        items: [
          "NS – Name server",
          "TXT – Verification",
          "SRV – Service records",
          "PTR – Reverse DNS",
        ],
      },
    },
  },

  {
    id: 101,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "DNS Caching",
    type: "two-column",
    content: {
      left: {
        title: "Caching Explained",
        items: [
          "Stores previous results",
          "Reduces lookup time",
          "Decreases DNS traffic",
          "Controlled by TTL",
        ],
      },
      right: {
        title: "TTL (Time To Live)",
        items: [
          "Cache expiration time",
          "Measured in seconds",
          "Trade-off between speed and freshness",
          "Important for migrations",
        ],
      },
    },
  },

  {
    id: 102,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "DNS Transport Protocols",
    type: "two-column",
    content: {
      left: {
        title: "UDP Usage",
        items: [
          "Default for queries",
          "Fast and lightweight",
          "Port 53",
          "Small responses",
        ],
      },
      right: {
        title: "TCP Usage",
        items: [
          "Zone transfers",
          "Large responses",
          "Reliability required",
          "Fallback mechanism",
        ],
      },
    },
  },

  {
    id: 103,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "Reverse DNS",
    type: "two-column",
    content: {
      left: {
        title: "Reverse Lookup",
        items: [
          "IP → domain name",
          "Uses PTR records",
          "Opposite of normal DNS",
          "Used for verification",
        ],
      },
      right: {
        title: "Where Used",
        items: [
          "Email spam checks",
          "Logging",
          "Security analysis",
          "Network diagnostics",
        ],
      },
    },
  },

  {
    id: 104,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "DNS and Security (Intro)",
    type: "two-column",
    content: {
      left: {
        title: "DNS Weaknesses",
        items: [
          "DNS spoofing",
          "Cache poisoning",
          "Man-in-the-middle attacks",
          "No built-in encryption (classic DNS)",
        ],
      },
      right: {
        title: "Mitigations",
        items: [
          "DNSSEC",
          "DNS over HTTPS (DoH)",
          "DNS over TLS (DoT)",
          "Secure resolvers",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Thinking DNS is centralized",
          "Ignoring caching behavior",
          "Forgetting TTL during changes",
          "Assuming DNS = hosting",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Understand resolution flow",
          "Plan DNS changes carefully",
          "Use tools like nslookup/dig",
          "Separate DNS from hosting",
        ],
      },
    },
  },

  {
    id: 106,
    moduleId: 8,
    moduleTitle: "DNS, Name Resolution & How the Internet Finds Servers",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "HTTP & HTTPS",
          "How web communication works",
          "Request–response cycle",
          "Web performance basics",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "DNS fully understood",
          "Name resolution clarity",
          "Record types mastered",
          "Ready for web protocols",
        ],
      },
    },
  },
  // =========================
  // Networking Module 9: HTTP, HTTPS & Web Communication Fundamentals
  // =========================

  {
    id: 107,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "Why HTTP Exists",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Browsers need a standard way to talk to servers",
          "Different systems must interoperate",
          "Requests and responses must be structured",
          "Scalable communication required",
        ],
      },
      right: {
        title: "The Solution",
        items: [
          "HyperText Transfer Protocol (HTTP)",
          "Stateless request–response model",
          "Simple and extensible",
          "Foundation of the web",
        ],
      },
    },
  },

  {
    id: 108,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "What Is HTTP?",
    type: "two-column",
    content: {
      left: {
        title: "HTTP Defined",
        items: [
          "Application-layer protocol",
          "Client–server communication",
          "Text-based (mostly)",
          "Runs over TCP",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Rules for web communication",
          "Browser asks, server responds",
          "Every web page uses it",
          "Invisible to users",
        ],
      },
    },
  },

  {
    id: 109,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "Client–Server Model (Web)",
    type: "two-column",
    content: {
      left: {
        title: "Client",
        items: [
          "Browser or app",
          "Initiates requests",
          "Consumes responses",
          "Stateless between requests",
        ],
      },
      right: {
        title: "Server",
        items: [
          "Hosts resources",
          "Processes requests",
          "Sends responses",
          "Scales for many clients",
        ],
      },
    },
  },

  {
    id: 110,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "HTTP Request Structure",
    type: "two-column",
    content: {
      left: {
        title: "Request Components",
        items: [
          "Request line (method + path)",
          "Headers",
          "Optional body",
          "Sent by client",
        ],
      },
      right: {
        title: "Example Elements",
        items: [
          "GET /index.html",
          "Host header",
          "User-Agent",
          "Payload (POST/PUT)",
        ],
      },
    },
  },

  {
    id: 111,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "HTTP Methods",
    type: "two-column",
    content: {
      left: {
        title: "Common Methods",
        items: [
          "GET – retrieve data",
          "POST – send data",
          "PUT – replace resource",
          "DELETE – remove resource",
        ],
      },
      right: {
        title: "Why Methods Matter",
        items: [
          "Clear intent",
          "RESTful design",
          "Security controls",
          "Predictable behavior",
        ],
      },
    },
  },

  {
    id: 112,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "HTTP Response Structure",
    type: "two-column",
    content: {
      left: {
        title: "Response Components",
        items: ["Status line", "Headers", "Response body", "Sent by server"],
      },
      right: {
        title: "Example Elements",
        items: [
          "HTTP/1.1 200 OK",
          "Content-Type",
          "Content-Length",
          "HTML / JSON data",
        ],
      },
    },
  },

  {
    id: 113,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "HTTP Status Codes",
    type: "two-column",
    content: {
      left: {
        title: "Status Code Classes",
        items: [
          "1xx – Informational",
          "2xx – Success",
          "3xx – Redirection",
          "4xx – Client errors",
          "5xx – Server errors",
        ],
      },
      right: {
        title: "Common Codes",
        items: [
          "200 OK",
          "301 Moved Permanently",
          "404 Not Found",
          "500 Internal Server Error",
        ],
      },
    },
  },

  {
    id: 114,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "Stateless Nature of HTTP",
    type: "two-column",
    content: {
      left: {
        title: "Stateless Explained",
        items: [
          "Each request is independent",
          "Server stores no session by default",
          "No memory of past requests",
          "Scales easily",
        ],
      },
      right: {
        title: "How State Is Added",
        items: ["Cookies", "Sessions", "Tokens (JWT)", "Application logic"],
      },
    },
  },

  {
    id: 115,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "What Is HTTPS?",
    type: "two-column",
    content: {
      left: {
        title: "HTTPS Defined",
        items: [
          "HTTP over TLS",
          "Encrypted communication",
          "Authentication",
          "Data integrity",
        ],
      },
      right: {
        title: "Why HTTPS Is Mandatory",
        items: [
          "Prevents eavesdropping",
          "Stops tampering",
          "Protects credentials",
          "Required by browsers",
        ],
      },
    },
  },

  {
    id: 116,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "HTTP vs HTTPS",
    type: "two-column",
    content: {
      left: {
        title: "HTTP",
        items: ["Plain text", "No encryption", "Insecure", "Port 80"],
      },
      right: {
        title: "HTTPS",
        items: ["Encrypted", "Secure", "Certificate-based", "Port 443"],
      },
    },
  },

  {
    id: 117,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "Proxy Basics",
    type: "infographic",
    content: {
      intro: "A proxy sits between client and server to control traffic.",
      cards: [
        {
          tag: "What it is",
          title: "Middle layer",
          items: [
            "Receives client requests",
            "Forwards to servers",
            "Returns responses",
            "Can cache or filter",
          ],
        },
        {
          tag: "Why use it",
          title: "Benefits",
          items: [
            "Performance via caching",
            "Access control",
            "Logging and monitoring",
            "Security policies",
          ],
        },
      ],
    },
  },

  {
    id: 118,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "Forward vs Reverse Proxy",
    type: "diagram",
    content: {
      intro: "Direction matters: who the proxy represents.",
      nodes: [
        {
          title: "Forward Proxy",
          description: "Represents the client; used for outbound control.",
        },
        {
          title: "Internet",
          description: "Requests pass through the proxy.",
        },
        {
          title: "Reverse Proxy",
          description: "Represents the server; protects and balances traffic.",
        },
      ],
      footer: "Forward = client side. Reverse = server side.",
    },
  },

  {
    id: 119,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "Proxy vs VPN (Quick Contrast)",
    type: "infographic",
    content: {
      intro: "Both route traffic, but they solve different problems.",
      cards: [
        {
          tag: "Proxy",
          title: "App-level routing",
          items: [
            "Usually per-app or per-browser",
            "Often HTTP/HTTPS only",
            "Good for caching and filtering",
          ],
        },
        {
          tag: "VPN",
          title: "Network-level routing",
          items: [
            "Tunnels all traffic",
            "Encrypts the link",
            "Acts like you’re on another network",
          ],
        },
      ],
    },
  },

  {
    id: 120,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "TLS Handshake (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Handshake Purpose",
        items: [
          "Verify server identity",
          "Negotiate encryption",
          "Exchange keys",
          "Secure channel setup",
        ],
      },
      right: {
        title: "Key Elements",
        items: [
          "Certificates",
          "Public/private keys",
          "Symmetric encryption",
          "Trust chains",
        ],
      },
    },
  },

  {
    id: 121,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Assuming HTTPS is optional",
          "Ignoring status codes",
          "Misusing HTTP methods",
          "Confusing HTTP with TCP",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use HTTPS everywhere",
          "Read responses carefully",
          "Design RESTful APIs",
          "Trace full request flow",
        ],
      },
    },
  },

  {
    id: 122,
    moduleId: 9,
    moduleTitle: "HTTP, HTTPS & Web Communication Fundamentals",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Firewalls",
          "Network security basics",
          "Traffic filtering",
          "Defense in depth",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "HTTP/HTTPS mastered",
          "Web request flow understood",
          "Security context established",
          "Ready for network security",
        ],
      },
    },
  },
  // =========================
  // Networking Module 10: Firewalls, Network Security Basics & Traffic Filtering
  // =========================

  {
    id: 123,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "Why Network Security Is Necessary",
    type: "two-column",
    content: {
      left: {
        title: "Without Network Security",
        items: [
          "Unauthorized access",
          "Data breaches",
          "Malware spread",
          "Service disruption",
        ],
      },
      right: {
        title: "With Network Security",
        items: [
          "Controlled access",
          "Protected data",
          "Reduced attack surface",
          "Reliable systems",
        ],
      },
    },
  },

  {
    id: 124,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "What Is a Firewall?",
    type: "two-column",
    content: {
      left: {
        title: "Firewall Defined",
        items: [
          "Network security device/software",
          "Monitors traffic",
          "Applies security rules",
          "Allows or blocks packets",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Security gate for networks",
          "Traffic inspector",
          "Rule-based control",
          "First line of defense",
        ],
      },
    },
  },

  {
    id: 125,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "Types of Firewalls",
    type: "two-column",
    content: {
      left: {
        title: "Firewall Types",
        items: [
          "Packet-filtering firewalls",
          "Stateful firewalls",
          "Application-layer firewalls",
          "Next-generation firewalls (NGFW)",
        ],
      },
      right: {
        title: "Where Used",
        items: [
          "Home routers",
          "Enterprise networks",
          "Cloud environments",
          "Data centers",
        ],
      },
    },
  },

  {
    id: 126,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "Packet Filtering",
    type: "two-column",
    content: {
      left: {
        title: "Packet Filtering",
        items: [
          "Checks IP, port, protocol",
          "Stateless inspection",
          "Fast processing",
          "Simple rules",
        ],
      },
      right: {
        title: "Limitations",
        items: [
          "No session awareness",
          "Limited context",
          "Easier to bypass",
          "Basic security",
        ],
      },
    },
  },

  {
    id: 127,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "Stateful Inspection",
    type: "two-column",
    content: {
      left: {
        title: "Stateful Firewalls",
        items: [
          "Track active connections",
          "Understand session state",
          "Smarter filtering",
          "More secure",
        ],
      },
      right: {
        title: "Benefits",
        items: [
          "Allows return traffic automatically",
          "Blocks unsolicited packets",
          "Better attack detection",
          "Common in enterprises",
        ],
      },
    },
  },

  {
    id: 128,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "Application-Layer Firewalls",
    type: "two-column",
    content: {
      left: {
        title: "Application Awareness",
        items: [
          "Inspects application data",
          "Understands protocols",
          "Blocks malicious payloads",
          "Used for web security",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "Web Application Firewalls (WAF)",
          "API gateways",
          "Reverse proxies",
          "Cloud security services",
        ],
      },
    },
  },

  {
    id: 129,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "Inbound vs Outbound Rules",
    type: "two-column",
    content: {
      left: {
        title: "Inbound Traffic",
        items: [
          "Traffic entering network",
          "Higher risk",
          "Usually restricted",
          "Explicit allow rules",
        ],
      },
      right: {
        title: "Outbound Traffic",
        items: [
          "Traffic leaving network",
          "Usually allowed",
          "Monitored for abuse",
          "Policy-controlled",
        ],
      },
    },
  },

  {
    id: 130,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "Defense in Depth",
    type: "two-column",
    content: {
      left: {
        title: "Defense in Depth",
        items: [
          "Multiple security layers",
          "No single point of failure",
          "Redundant controls",
          "Holistic security approach",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "Firewall + IDS",
          "Network segmentation",
          "Endpoint security",
          "Access controls",
        ],
      },
    },
  },

  {
    id: 131,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "Common Firewall Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Allowing all traffic",
          "Overly complex rules",
          "No rule reviews",
          "Ignoring outbound traffic",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Least privilege rules",
          "Clear documentation",
          "Regular audits",
          "Test changes safely",
        ],
      },
    },
  },

  {
    id: 132,
    moduleId: 10,
    moduleTitle: "Firewalls, Network Security Basics & Traffic Filtering",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "VPNs",
          "Secure remote access",
          "Tunneling",
          "Encryption in transit",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Firewall fundamentals mastered",
          "Traffic filtering understood",
          "Security mindset developed",
          "Ready for VPNs",
        ],
      },
    },
  },
  // =========================
  // Networking Module 11: VPNs, Secure Tunneling & Remote Access
  // =========================

  {
    id: 133,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "Why VPNs Exist",
    type: "two-column",
    content: {
      left: {
        title: "The Problem",
        items: [
          "Untrusted public networks",
          "Remote work requirements",
          "Data interception risks",
          "Secure access needed",
        ],
      },
      right: {
        title: "The Solution",
        items: [
          "Virtual Private Networks (VPNs)",
          "Encrypted tunnels",
          "Secure remote connectivity",
          "Private network extension",
        ],
      },
    },
  },

  {
    id: 134,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "What Is a VPN?",
    type: "two-column",
    content: {
      left: {
        title: "VPN Defined",
        items: [
          "Encrypted network tunnel",
          "Runs over public internet",
          "Connects remote users or networks",
          "Security-focused",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Private path through the internet",
          "Hides data from outsiders",
          "Secures traffic",
          "Acts like local connection",
        ],
      },
    },
  },

  {
    id: 135,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "How VPNs Work (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "VPN Process",
        items: [
          "Client initiates connection",
          "Authentication occurs",
          "Encrypted tunnel established",
          "Traffic flows securely",
        ],
      },
      right: {
        title: "Key Components",
        items: [
          "VPN client",
          "VPN server/gateway",
          "Encryption protocols",
          "Authentication methods",
        ],
      },
    },
  },

  {
    id: 136,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "Tunneling Explained",
    type: "two-column",
    content: {
      left: {
        title: "Tunneling",
        items: [
          "Encapsulating packets",
          "Inside another protocol",
          "Hides original data",
          "Ensures confidentiality",
        ],
      },
      right: {
        title: "Why Tunneling Matters",
        items: [
          "Bypasses insecure networks",
          "Maintains data integrity",
          "Prevents eavesdropping",
          "Enables secure routing",
        ],
      },
    },
  },

  {
    id: 137,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "Common VPN Protocols",
    type: "two-column",
    content: {
      left: {
        title: "VPN Protocols",
        items: ["IPsec", "OpenVPN", "WireGuard", "L2TP"],
      },
      right: {
        title: "Protocol Traits",
        items: [
          "Encryption strength",
          "Performance",
          "Compatibility",
          "Security maturity",
        ],
      },
    },
  },

  {
    id: 138,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "Site-to-Site vs Remote-Access VPN",
    type: "two-column",
    content: {
      left: {
        title: "Site-to-Site VPN",
        items: [
          "Connects two networks",
          "Used by organizations",
          "Always-on connection",
          "Transparent to users",
        ],
      },
      right: {
        title: "Remote-Access VPN",
        items: [
          "Connects individual users",
          "Used for remote work",
          "Client-based",
          "User authentication required",
        ],
      },
    },
  },

  {
    id: 139,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "Split Tunneling vs Full Tunneling",
    type: "two-column",
    content: {
      left: {
        title: "Split Tunneling",
        items: [
          "Only specific traffic via VPN",
          "Better performance",
          "More exposure risk",
          "Policy-driven",
        ],
      },
      right: {
        title: "Full Tunneling",
        items: [
          "All traffic via VPN",
          "Higher security",
          "More latency",
          "Stronger control",
        ],
      },
    },
  },

  {
    id: 140,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "Authentication in VPNs",
    type: "two-column",
    content: {
      left: {
        title: "Authentication Methods",
        items: [
          "Username & password",
          "Certificates",
          "Multi-factor authentication",
          "Pre-shared keys",
        ],
      },
      right: {
        title: "Why Authentication Matters",
        items: [
          "Prevents unauthorized access",
          "Ensures identity",
          "Protects internal resources",
          "Compliance requirements",
        ],
      },
    },
  },

  {
    id: 141,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "VPN Performance Considerations",
    type: "two-column",
    content: {
      left: {
        title: "Performance Factors",
        items: [
          "Encryption overhead",
          "Server location",
          "Bandwidth limits",
          "Device capabilities",
        ],
      },
      right: {
        title: "Optimization Tips",
        items: [
          "Choose modern protocols",
          "Use nearby servers",
          "Hardware acceleration",
          "Split tunneling when appropriate",
        ],
      },
    },
  },

  {
    id: 142,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "Common VPN Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using weak protocols",
          "No MFA",
          "Poor key management",
          "Overtrusting VPN alone",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use strong encryption",
          "Implement MFA",
          "Rotate keys regularly",
          "Layer security controls",
        ],
      },
    },
  },

  {
    id: 143,
    moduleId: 11,
    moduleTitle: "VPNs, Secure Tunneling & Remote Access",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Monitoring",
          "Troubleshooting networks",
          "Common tools",
          "Network diagnostics",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "VPN concepts mastered",
          "Secure tunneling understood",
          "Remote access clarity",
          "Ready for troubleshooting",
        ],
      },
    },
  },
  // =========================
  // Networking Module 12: Network Monitoring, Troubleshooting & Diagnostic Tools
  // =========================

  {
    id: 144,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Why Network Troubleshooting Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Troubleshooting Skills",
        items: [
          "Long outages",
          "Blind problem solving",
          "Repeated failures",
          "Poor user experience",
        ],
      },
      right: {
        title: "With Proper Troubleshooting",
        items: [
          "Faster issue resolution",
          "Root-cause identification",
          "Stable networks",
          "Operational confidence",
        ],
      },
    },
  },

  {
    id: 145,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Troubleshooting Mindset",
    type: "two-column",
    content: {
      left: {
        title: "Systematic Approach",
        items: [
          "Define the problem",
          "Identify scope",
          "Form a hypothesis",
          "Test step-by-step",
        ],
      },
      right: {
        title: "Key Principles",
        items: [
          "Change one thing at a time",
          "Verify assumptions",
          "Document findings",
          "Avoid guesswork",
        ],
      },
    },
  },

  {
    id: 146,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Using the OSI Model for Troubleshooting",
    type: "two-column",
    content: {
      left: {
        title: "Bottom-Up Approach",
        items: [
          "Start at Physical layer",
          "Check cables and links",
          "Move up layer by layer",
          "Isolate failure domain",
        ],
      },
      right: {
        title: "Top-Down Approach",
        items: [
          "Start at Application layer",
          "Check service availability",
          "Move downward",
          "User-focused diagnosis",
        ],
      },
    },
  },

  {
    id: 147,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Physical & Data Link Checks",
    type: "two-column",
    content: {
      left: {
        title: "Layer 1 Checks",
        items: [
          "Cable connections",
          "Link lights",
          "Interface status",
          "Hardware failures",
        ],
      },
      right: {
        title: "Layer 2 Checks",
        items: [
          "MAC address learning",
          "Switch ports",
          "ARP table",
          "VLAN configuration",
        ],
      },
    },
  },

  {
    id: 148,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Layer 3 Troubleshooting",
    type: "two-column",
    content: {
      left: {
        title: "IP-Level Checks",
        items: [
          "IP address assignment",
          "Subnet mask",
          "Default gateway",
          "Routing table",
        ],
      },
      right: {
        title: "Common Issues",
        items: [
          "Wrong subnet",
          "Missing route",
          "IP conflicts",
          "Misconfigured gateway",
        ],
      },
    },
  },

  {
    id: 149,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Transport & Application Checks",
    type: "two-column",
    content: {
      left: {
        title: "Transport Layer",
        items: [
          "Port availability",
          "TCP vs UDP behavior",
          "Connection resets",
          "Firewall blocks",
        ],
      },
      right: {
        title: "Application Layer",
        items: [
          "Service running",
          "Correct configuration",
          "Authentication issues",
          "Application logs",
        ],
      },
    },
  },

  {
    id: 150,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Ping Tool",
    type: "two-column",
    content: {
      left: {
        title: "What Ping Does",
        items: [
          "Tests reachability",
          "Uses ICMP",
          "Measures latency",
          "Detects packet loss",
        ],
      },
      right: {
        title: "When to Use Ping",
        items: [
          "Basic connectivity test",
          "Network reachability",
          "Quick diagnostics",
          "Baseline measurement",
        ],
      },
    },
  },

  {
    id: 151,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Traceroute / Tracert",
    type: "two-column",
    content: {
      left: {
        title: "Traceroute Explained",
        items: [
          "Shows packet path",
          "Lists hops",
          "Identifies delays",
          "Finds routing issues",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "Detect routing loops",
          "Find bottlenecks",
          "ISP issue isolation",
          "Latency troubleshooting",
        ],
      },
    },
  },

  {
    id: 152,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "DNS Troubleshooting Tools",
    type: "two-column",
    content: {
      left: {
        title: "Common Tools",
        items: ["nslookup", "dig", "host", "Online DNS checkers"],
      },
      right: {
        title: "What to Verify",
        items: [
          "Correct records",
          "Propagation",
          "TTL values",
          "Resolver behavior",
        ],
      },
    },
  },

  {
    id: 153,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Port & Service Testing",
    type: "two-column",
    content: {
      left: {
        title: "Tools",
        items: ["netstat", "ss", "lsof", "telnet / nc"],
      },
      right: {
        title: "What They Show",
        items: [
          "Listening ports",
          "Active connections",
          "Service binding",
          "Process ownership",
        ],
      },
    },
  },

  {
    id: 154,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Packet Capture (Intro)",
    type: "two-column",
    content: {
      left: {
        title: "Packet Capture",
        items: [
          "Inspect raw traffic",
          "Deep troubleshooting",
          "Protocol analysis",
          "Advanced diagnosis",
        ],
      },
      right: {
        title: "Tools",
        items: ["Wireshark", "tcpdump", "Cloud packet mirroring", "SPAN ports"],
      },
    },
  },

  {
    id: 155,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Monitoring vs Troubleshooting",
    type: "two-column",
    content: {
      left: {
        title: "Monitoring",
        items: [
          "Continuous observation",
          "Detect trends",
          "Alert on anomalies",
          "Prevent outages",
        ],
      },
      right: {
        title: "Troubleshooting",
        items: [
          "Reactive process",
          "Fix active issues",
          "Root cause analysis",
          "Incident response",
        ],
      },
    },
  },

  {
    id: 156,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Skipping basic checks",
          "Random configuration changes",
          "Ignoring logs",
          "Not isolating scope",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Follow OSI model",
          "Use tools methodically",
          "Verify assumptions",
          "Document fixes",
        ],
      },
    },
  },

  {
    id: 157,
    moduleId: 12,
    moduleTitle: "Network Monitoring, Troubleshooting & Diagnostic Tools",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Cloud networking",
          "Virtual networks",
          "Load balancers",
          "Modern architectures",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Troubleshooting framework mastered",
          "Core tools understood",
          "Network visibility gained",
          "Ready for cloud networking",
        ],
      },
    },
  },
  // =========================
  // Networking Module 13: Cloud Networking, Virtual Networks & Load Balancers
  // =========================

  {
    id: 158,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Why Cloud Networking Exists",
    type: "two-column",
    content: {
      left: {
        title: "Traditional Networking Limits",
        items: [
          "Physical hardware dependency",
          "Slow provisioning",
          "Limited scalability",
          "High upfront cost",
        ],
      },
      right: {
        title: "Cloud Networking Benefits",
        items: [
          "On-demand networks",
          "Elastic scalability",
          "Software-defined control",
          "Global reach",
        ],
      },
    },
  },

  {
    id: 159,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "What Is Cloud Networking?",
    type: "two-column",
    content: {
      left: {
        title: "Cloud Networking Defined",
        items: [
          "Virtualized networking",
          "Software-defined infrastructure",
          "Runs in cloud environments",
          "Provider-managed backbone",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Networks without cables",
          "Created with configuration",
          "Scales automatically",
          "Accessible anywhere",
        ],
      },
    },
  },

  {
    id: 160,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Virtual Networks (VPC / VNet)",
    type: "two-column",
    content: {
      left: {
        title: "Virtual Network Concepts",
        items: [
          "Isolated private network",
          "User-defined IP ranges",
          "Cloud equivalent of LAN",
          "Fully customizable",
        ],
      },
      right: {
        title: "Cloud Examples",
        items: ["AWS VPC", "Azure VNet", "GCP VPC", "OCI VCN"],
      },
    },
  },

  {
    id: 161,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Subnets in the Cloud",
    type: "two-column",
    content: {
      left: {
        title: "Cloud Subnets",
        items: [
          "Divide virtual networks",
          "CIDR-based addressing",
          "Availability-zone aware",
          "Security boundaries",
        ],
      },
      right: {
        title: "Typical Usage",
        items: [
          "Public subnets",
          "Private subnets",
          "Database isolation",
          "Tiered architectures",
        ],
      },
    },
  },

  {
    id: 162,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Internet Gateways & NAT Gateways",
    type: "two-column",
    content: {
      left: {
        title: "Internet Gateway",
        items: [
          "Enables internet access",
          "Attached to VPC",
          "Public IP routing",
          "Inbound & outbound traffic",
        ],
      },
      right: {
        title: "NAT Gateway",
        items: [
          "Outbound-only internet access",
          "Used by private subnets",
          "No inbound traffic",
          "Improved security",
        ],
      },
    },
  },

  {
    id: 163,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Routing in Cloud Networks",
    type: "two-column",
    content: {
      left: {
        title: "Route Tables",
        items: [
          "Define traffic paths",
          "CIDR-based rules",
          "Attach to subnets",
          "Cloud-managed routing",
        ],
      },
      right: {
        title: "Common Routes",
        items: [
          "Local VPC traffic",
          "Internet-bound traffic",
          "NAT gateway routes",
          "Peering routes",
        ],
      },
    },
  },

  {
    id: 164,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Security Groups & Network ACLs",
    type: "two-column",
    content: {
      left: {
        title: "Security Groups",
        items: [
          "Instance-level firewall",
          "Stateful",
          "Allow rules only",
          "Applied to resources",
        ],
      },
      right: {
        title: "Network ACLs",
        items: [
          "Subnet-level firewall",
          "Stateless",
          "Allow & deny rules",
          "Ordered rule processing",
        ],
      },
    },
  },

  {
    id: 165,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Load Balancers (Why They Matter)",
    type: "two-column",
    content: {
      left: {
        title: "Problems Without Load Balancing",
        items: [
          "Single point of failure",
          "Uneven traffic distribution",
          "Poor scalability",
          "Service outages",
        ],
      },
      right: {
        title: "Load Balancer Benefits",
        items: [
          "High availability",
          "Traffic distribution",
          "Fault tolerance",
          "Elastic scaling",
        ],
      },
    },
  },

  {
    id: 166,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Types of Load Balancers",
    type: "two-column",
    content: {
      left: {
        title: "Load Balancer Types",
        items: [
          "Layer 4 (TCP/UDP)",
          "Layer 7 (HTTP/HTTPS)",
          "Internal",
          "External",
        ],
      },
      right: {
        title: "Cloud Examples",
        items: [
          "AWS ALB / NLB",
          "Azure Load Balancer",
          "GCP Load Balancer",
          "Managed services",
        ],
      },
    },
  },

  {
    id: 167,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Health Checks & Traffic Distribution",
    type: "two-column",
    content: {
      left: {
        title: "Health Checks",
        items: [
          "Monitor backend health",
          "Remove unhealthy targets",
          "Automatic recovery",
          "Continuous probing",
        ],
      },
      right: {
        title: "Distribution Methods",
        items: [
          "Round robin",
          "Least connections",
          "IP hash",
          "Weighted routing",
        ],
      },
    },
  },

  {
    id: 168,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Cloud Networking Architecture Example",
    type: "two-column",
    content: {
      left: {
        title: "Typical Architecture",
        items: [
          "Public load balancer",
          "Private application servers",
          "Database in private subnet",
          "NAT gateway for outbound traffic",
        ],
      },
      right: {
        title: "Why This Works",
        items: [
          "Security by design",
          "Scalable architecture",
          "Clear traffic flow",
          "Industry standard",
        ],
      },
    },
  },

  {
    id: 169,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Putting databases in public subnets",
          "Overusing public IPs",
          "Ignoring route tables",
          "Misconfigured security groups",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use private subnets",
          "Apply least privilege",
          "Design before deploying",
          "Test networking rules",
        ],
      },
    },
  },

  {
    id: 170,
    moduleId: 13,
    moduleTitle: "Cloud Networking, Virtual Networks & Load Balancers",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Network security advanced topics",
          "IDS/IPS",
          "Zero Trust networking",
          "Modern security models",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Cloud networking fundamentals mastered",
          "Virtual networks understood",
          "Load balancing concepts clear",
          "Ready for advanced security",
        ],
      },
    },
  },
  // =========================
  // Networking Module 14: Advanced Network Security, IDS/IPS & Zero Trust
  // =========================

  {
    id: 171,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "Why Advanced Network Security Is Needed",
    type: "two-column",
    content: {
      left: {
        title: "Modern Threat Landscape",
        items: [
          "Sophisticated cyber attacks",
          "Insider threats",
          "Cloud and remote work risks",
          "Automated exploits",
        ],
      },
      right: {
        title: "Security Evolution",
        items: [
          "Beyond perimeter defenses",
          "Continuous monitoring",
          "Identity-aware controls",
          "Assume breach mindset",
        ],
      },
    },
  },

  {
    id: 172,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "What Are IDS and IPS?",
    type: "two-column",
    content: {
      left: {
        title: "IDS (Intrusion Detection System)",
        items: [
          "Monitors network traffic",
          "Detects suspicious activity",
          "Alerts administrators",
          "Passive security control",
        ],
      },
      right: {
        title: "IPS (Intrusion Prevention System)",
        items: [
          "Actively blocks threats",
          "Inline traffic inspection",
          "Automatic mitigation",
          "Prevents known attacks",
        ],
      },
    },
  },

  {
    id: 173,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "Signature-Based vs Anomaly-Based Detection",
    type: "two-column",
    content: {
      left: {
        title: "Signature-Based Detection",
        items: [
          "Matches known attack patterns",
          "Low false positives",
          "Requires frequent updates",
          "Cannot detect unknown threats",
        ],
      },
      right: {
        title: "Anomaly-Based Detection",
        items: [
          "Detects unusual behavior",
          "Can find zero-day attacks",
          "Uses baselines",
          "Higher false positives",
        ],
      },
    },
  },

  {
    id: 174,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "Network-Based vs Host-Based IDS/IPS",
    type: "two-column",
    content: {
      left: {
        title: "Network-Based (NIDS/NIPS)",
        items: [
          "Monitors network traffic",
          "Placed at strategic points",
          "Sees multiple hosts",
          "Good for perimeter visibility",
        ],
      },
      right: {
        title: "Host-Based (HIDS/HIPS)",
        items: [
          "Runs on individual hosts",
          "Monitors system activity",
          "Deep visibility",
          "Protects critical servers",
        ],
      },
    },
  },

  {
    id: 175,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "Inline vs Passive Deployment",
    type: "two-column",
    content: {
      left: {
        title: "Inline Deployment",
        items: [
          "Traffic passes through device",
          "Can block attacks",
          "Higher impact if misconfigured",
          "Used by IPS",
        ],
      },
      right: {
        title: "Passive Deployment",
        items: [
          "Traffic is mirrored",
          "No impact on traffic flow",
          "Detection only",
          "Used by IDS",
        ],
      },
    },
  },

  {
    id: 176,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "Introduction to Zero Trust",
    type: "two-column",
    content: {
      left: {
        title: "Zero Trust Principle",
        items: [
          "Never trust, always verify",
          "No implicit trust",
          "Continuous validation",
          "Identity-centric security",
        ],
      },
      right: {
        title: "Why Zero Trust Matters",
        items: [
          "Perimeter is gone",
          "Cloud and remote users",
          "Stops lateral movement",
          "Reduces blast radius",
        ],
      },
    },
  },

  {
    id: 177,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "Core Pillars of Zero Trust",
    type: "two-column",
    content: {
      left: {
        title: "Zero Trust Pillars",
        items: ["Identity", "Device", "Network", "Application", "Data"],
      },
      right: {
        title: "How They Work Together",
        items: [
          "Continuous authentication",
          "Context-aware access",
          "Micro-segmentation",
          "Policy-driven enforcement",
        ],
      },
    },
  },

  {
    id: 178,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "Micro-Segmentation",
    type: "two-column",
    content: {
      left: {
        title: "Micro-Segmentation Explained",
        items: [
          "Network isolation at granular level",
          "Limits lateral movement",
          "Policy-based access",
          "Common in cloud environments",
        ],
      },
      right: {
        title: "Benefits",
        items: [
          "Reduced attack surface",
          "Improved containment",
          "Fine-grained control",
          "Compliance support",
        ],
      },
    },
  },

  {
    id: 179,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "IDS/IPS in Modern Networks",
    type: "two-column",
    content: {
      left: {
        title: "Modern Integration",
        items: [
          "Cloud-native IDS/IPS",
          "SIEM integration",
          "Automation & SOAR",
          "Threat intelligence feeds",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "AWS GuardDuty",
          "Azure Defender",
          "Snort / Suricata",
          "Managed security services",
        ],
      },
    },
  },

  {
    id: 180,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Relying only on firewalls",
          "Ignoring false positives",
          "No monitoring strategy",
          "Treating Zero Trust as a tool",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Layer security controls",
          "Tune detection rules",
          "Adopt Zero Trust mindset",
          "Continuously improve",
        ],
      },
    },
  },

  {
    id: 181,
    moduleId: 14,
    moduleTitle: "Advanced Network Security, IDS/IPS & Zero Trust",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Networking capstone project",
          "Real-world network design",
          "Security-focused architecture",
          "Hands-on scenarios",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Advanced security concepts mastered",
          "IDS/IPS understood",
          "Zero Trust principles clear",
          "Ready for capstone",
        ],
      },
    },
  },
];
