export const mongodbSlidesData = [
  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "What Is MongoDB?",
    type: "two-column",
    content: {
      left: {
        title: "MongoDB Explained",
        items: [
          "Document-oriented NoSQL database",
          "Stores data in BSON (JSON-like)",
          "Schema-flexible",
          "Designed for scalability",
        ],
      },
      right: {
        title: "Why MongoDB Exists",
        items: [
          "Traditional SQL limits flexibility",
          "Modern apps evolve quickly",
          "Handles large datasets easily",
          "Built for distributed systems",
        ],
      },
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "SQL vs NoSQL",
    type: "two-column",
    content: {
      left: {
        title: "SQL Databases",
        items: [
          "Table-based",
          "Fixed schema",
          "Relational joins",
          "Vertical scaling",
        ],
      },
      right: {
        title: "NoSQL Databases",
        items: [
          "Document / Key-Value / Graph",
          "Schema flexibility",
          "Embedded relationships",
          "Horizontal scaling",
        ],
      },
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "Where MongoDB Is Used",
    type: "two-column",
    content: {
      left: {
        title: "Common Use Cases",
        items: [
          "Web applications",
          "APIs and microservices",
          "Real-time analytics",
          "Content management",
        ],
      },
      right: {
        title: "Industries",
        items: ["Fintech", "Healthcare", "E-commerce", "Logistics"],
      },
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "Core MongoDB Concepts",
    type: "two-column",
    content: {
      left: {
        title: "Relational Mapping",
        items: [
          "Database → Database",
          "Table → Collection",
          "Row → Document",
          "Column → Field",
        ],
      },
      right: {
        title: "MongoDB Terms",
        items: ["Collections", "Documents", "Fields", "_id (Primary Key)"],
      },
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "What Is a Document?",
    type: "code",
    content: {
      title: "MongoDB Document Example",
      keyPoints: [
        "Stored as BSON",
        "Flexible structure",
        "Nested objects supported",
      ],
      code: `{
  _id: ObjectId("64f12abc123"),
  name: "John Doe",
  email: "john@example.com",
  age: 30,
  isActive: true
}`,
      explanation:
        "Each document is a self-contained record with flexible fields.",
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "Why Schema Flexibility Matters",
    type: "two-column",
    content: {
      left: {
        title: "Traditional Schema Issues",
        items: [
          "Costly migrations",
          "Rigid structures",
          "Downtime during changes",
          "Slower iteration",
        ],
      },
      right: {
        title: "MongoDB Advantage",
        items: [
          "Add fields anytime",
          "Evolve data naturally",
          "No breaking changes",
          "Agile development",
        ],
      },
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "MongoDB vs Other NoSQL Databases",
    type: "two-column",
    content: {
      left: {
        title: "MongoDB",
        items: [
          "Document database",
          "Rich query language",
          "Indexing support",
          "Strong community",
        ],
      },
      right: {
        title: "Others",
        items: [
          "Redis – Key-Value",
          "Cassandra – Wide-column",
          "Neo4j – Graph",
          "Different use cases",
        ],
      },
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "When NOT to Use MongoDB",
    type: "two-column",
    content: {
      left: {
        title: "Poor Fit Scenarios",
        items: [
          "Heavy relational joins",
          "Strict ACID transactions everywhere",
          "Legacy reporting systems",
          "Fixed-schema compliance",
        ],
      },
      right: {
        title: "Alternatives",
        items: ["PostgreSQL", "MySQL", "Oracle", "Hybrid architectures"],
      },
    },
  },

  {
    id: 9,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "MongoDB Editions",
    type: "two-column",
    content: {
      left: {
        title: "Community Edition",
        items: [
          "Free and open source",
          "Self-hosted",
          "Core features",
          "Most common for learning",
        ],
      },
      right: {
        title: "Enterprise & Atlas",
        items: [
          "Advanced security",
          "Cloud-managed",
          "Auto-scaling",
          "Production-grade",
        ],
      },
    },
  },

  {
    id: 10,
    moduleId: 1,
    moduleTitle: "Introduction to MongoDB & NoSQL",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Installing MongoDB",
          "MongoDB Compass",
          "Mongo Shell (mongosh)",
          "First database",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand MongoDB basics",
          "You know when to use it",
          "You understand documents",
          "Ready to install and use MongoDB",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 2: Installation, Tools & First Database
  // =========================

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "Why Setup Matters",
    type: "two-column",
    content: {
      left: {
        title: "Beginner Challenges",
        items: [
          "Database not running",
          "Wrong client tools",
          "Connection confusion",
          "Environment mismatch",
        ],
      },
      right: {
        title: "What You’ll Achieve",
        items: [
          "Install MongoDB correctly",
          "Understand MongoDB tools",
          "Connect with confidence",
          "Create your first database",
        ],
      },
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "MongoDB Deployment Options",
    type: "two-column",
    content: {
      left: {
        title: "Local Installation",
        items: [
          "Runs on your machine",
          "Best for learning",
          "Full control",
          "Offline capable",
        ],
      },
      right: {
        title: "MongoDB Atlas",
        items: [
          "Cloud-managed",
          "No local setup",
          "Production-grade",
          "Free tier available",
        ],
      },
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "MongoDB Core Tools",
    type: "two-column",
    content: {
      left: {
        title: "Essential Tools",
        items: [
          "mongod – database server",
          "mongosh – shell client",
          "MongoDB Compass – GUI",
          "MongoDB Atlas UI",
        ],
      },
      right: {
        title: "Tool Responsibilities",
        items: [
          "mongod stores data",
          "mongosh runs commands",
          "Compass visualizes data",
          "Atlas manages cloud clusters",
        ],
      },
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "Starting the MongoDB Server",
    type: "code",
    content: {
      title: "Running mongod",
      keyPoints: [
        "mongod starts the database server",
        "Must be running before connections",
        "Default port is 27017",
      ],
      code: `mongod`,
      explanation: "This command starts the MongoDB database server locally.",
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "Connecting with mongosh",
    type: "code",
    content: {
      title: "Opening the MongoDB Shell",
      keyPoints: [
        "mongosh is the modern MongoDB shell",
        "Connects to local or remote MongoDB",
        "Interactive command environment",
      ],
      code: `mongosh`,
      explanation: "mongosh opens an interactive shell connected to MongoDB.",
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "Understanding Databases",
    type: "two-column",
    content: {
      left: {
        title: "Database Basics",
        items: [
          "Container for collections",
          "Created on first use",
          "No explicit create command",
          "Logical separation",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Database appears after insert",
          "Lightweight creation",
          "Encourages experimentation",
          "No upfront schema",
        ],
      },
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "Creating Your First Database",
    type: "code",
    content: {
      title: "Using use Database",
      keyPoints: [
        "Switches database context",
        "Creates database on insert",
        "No error if database doesn’t exist",
      ],
      code: `use myFirstDatabase`,
      explanation: "MongoDB switches to the specified database context.",
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "Creating a Collection",
    type: "code",
    content: {
      title: "Implicit Collection Creation",
      keyPoints: [
        "Collections created automatically",
        "Created on first insert",
        "No schema required",
      ],
      code: `db.users.insertOne({
  name: "Alice",
  email: "alice@example.com"
});`,
      explanation:
        "The users collection is created automatically on first insert.",
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "Viewing Databases and Collections",
    type: "code",
    content: {
      title: "Inspection Commands",
      keyPoints: [
        "show dbs lists databases",
        "show collections lists collections",
        "Helpful for navigation",
      ],
      code: `show dbs
show collections`,
      explanation: "These commands help you inspect your MongoDB environment.",
    },
  },

  {
    id: 20,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "Using MongoDB Compass",
    type: "two-column",
    content: {
      left: {
        title: "Compass Benefits",
        items: [
          "Visual document browsing",
          "Query builder",
          "Index management",
          "Beginner-friendly UI",
        ],
      },
      right: {
        title: "When to Use Compass",
        items: [
          "Learning MongoDB",
          "Exploring data",
          "Debugging queries",
          "Quick inspections",
        ],
      },
    },
  },

  {
    id: 21,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting to start mongod",
          "Using old mongo shell",
          "Expecting CREATE DATABASE",
          "Confusing Compass with server",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always start mongod first",
          "Use mongosh",
          "Insert to create DB",
          "Understand tool roles",
        ],
      },
    },
  },

  {
    id: 22,
    moduleId: 2,
    moduleTitle: "Installation, Tools & First Database",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "CRUD operations",
          "Insert, find, update, delete",
          "Query basics",
          "Hands-on practice",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "MongoDB is installed",
          "You can connect with mongosh",
          "You created your first database",
          "Ready for CRUD operations",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 3: CRUD Operations (Create, Read, Update, Delete)
  // =========================

  {
    id: 23,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "What Is CRUD?",
    type: "two-column",
    content: {
      left: {
        title: "CRUD Explained",
        items: [
          "Create – insert data",
          "Read – query data",
          "Update – modify data",
          "Delete – remove data",
        ],
      },
      right: {
        title: "Why CRUD Matters",
        items: [
          "Foundation of all database work",
          "Used in every application",
          "Maps to API operations",
          "Required for backend mastery",
        ],
      },
    },
  },

  {
    id: 24,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Create: insertOne",
    type: "code",
    content: {
      title: "Inserting a Single Document",
      keyPoints: [
        "insertOne adds one document",
        "_id is auto-generated",
        "Returns insertion result",
      ],
      code: `db.users.insertOne({
  name: "John",
  age: 28,
  email: "john@example.com"
});`,
      explanation:
        "MongoDB automatically assigns a unique _id if not provided.",
    },
  },

  {
    id: 25,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Create: insertMany",
    type: "code",
    content: {
      title: "Inserting Multiple Documents",
      keyPoints: [
        "insertMany inserts an array",
        "More efficient for bulk inserts",
        "All documents stored together",
      ],
      code: `db.users.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Carol", age: 29 }
]);`,
      explanation: "Bulk inserts are faster and commonly used during seeding.",
    },
  },

  {
    id: 26,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Read: find() Basics",
    type: "code",
    content: {
      title: "Querying Documents",
      keyPoints: [
        "find returns a cursor",
        "Empty filter returns all documents",
        "Most common read operation",
      ],
      code: `db.users.find({});`,
      explanation:
        "An empty query object matches all documents in the collection.",
    },
  },

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Read: findOne",
    type: "code",
    content: {
      title: "Fetching a Single Document",
      keyPoints: [
        "Returns first matching document",
        "Useful for unique lookups",
        "Returns null if none found",
      ],
      code: `db.users.findOne({ name: "Alice" });`,
      explanation: "findOne returns a single document instead of a cursor.",
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Filtering Documents",
    type: "two-column",
    content: {
      left: {
        title: "Query Filters",
        items: [
          "Exact match queries",
          "Match by field values",
          "Case-sensitive by default",
          "JSON-based syntax",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "{ age: 25 }",
          "{ name: 'John' }",
          "{ isActive: true }",
          "Simple and readable",
        ],
      },
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Update: updateOne",
    type: "code",
    content: {
      title: "Updating a Single Document",
      keyPoints: [
        "First argument is filter",
        "Second argument uses update operators",
        "$set modifies fields",
      ],
      code: `db.users.updateOne(
  { name: "John" },
  { $set: { age: 29 } }
);`,
      explanation: "Only the specified fields are updated using $set.",
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Update Operators",
    type: "two-column",
    content: {
      left: {
        title: "Common Operators",
        items: [
          "$set – set field value",
          "$inc – increment number",
          "$unset – remove field",
          "$push – add to array",
        ],
      },
      right: {
        title: "Why Operators Matter",
        items: [
          "Prevent overwriting documents",
          "Atomic updates",
          "Efficient modifications",
          "Production-safe updates",
        ],
      },
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Delete: deleteOne",
    type: "code",
    content: {
      title: "Deleting a Document",
      keyPoints: [
        "Deletes first matching document",
        "Uses filter to select target",
        "Permanent operation",
      ],
      code: `db.users.deleteOne({ name: "Bob" });`,
      explanation: "MongoDB permanently removes the matching document.",
    },
  },

  {
    id: 32,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Delete: deleteMany",
    type: "code",
    content: {
      title: "Bulk Deletion",
      keyPoints: [
        "Deletes all matching documents",
        "Use with caution",
        "Common for cleanup tasks",
      ],
      code: `db.users.deleteMany({ age: { $lt: 25 } });`,
      explanation: "All documents matching the filter are deleted.",
    },
  },

  {
    id: 33,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Understanding ObjectId",
    type: "two-column",
    content: {
      left: {
        title: "_id Field",
        items: [
          "Primary key in MongoDB",
          "Unique per document",
          "Indexed by default",
          "Usually an ObjectId",
        ],
      },
      right: {
        title: "ObjectId Properties",
        items: [
          "12-byte value",
          "Contains timestamp",
          "Globally unique",
          "Sortable by creation time",
        ],
      },
    },
  },

  {
    id: 34,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Finding by _id",
    type: "code",
    content: {
      title: "Querying with ObjectId",
      keyPoints: [
        "_id must be ObjectId type",
        "String will not match",
        "Use ObjectId() helper",
      ],
      code: `db.users.findOne({
  _id: ObjectId("64f12abc1234567890abcd")
});`,
      explanation: "MongoDB requires ObjectId type for _id queries.",
    },
  },

  {
    id: 35,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting update operators",
          "Using strings for _id",
          "Accidental deleteMany",
          "Overwriting documents",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always use $set / $inc",
          "Use ObjectId() correctly",
          "Test filters carefully",
          "Review queries before execution",
        ],
      },
    },
  },

  {
    id: 36,
    moduleId: 3,
    moduleTitle: "CRUD Operations",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Advanced querying",
          "Comparison operators",
          "Logical operators",
          "Projection and sorting",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You can create documents",
          "You can read and filter data",
          "You can update safely",
          "You can delete correctly",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 4: Advanced Querying, Projection & Sorting
  // =========================

  {
    id: 37,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Why Advanced Queries Matter",
    type: "two-column",
    content: {
      left: {
        title: "Beyond Basic find()",
        items: [
          "Real applications need complex queries",
          "Filtering by ranges and conditions",
          "Combining multiple criteria",
          "Optimizing data retrieval",
        ],
      },
      right: {
        title: "What You’ll Learn",
        items: [
          "Comparison operators",
          "Logical operators",
          "Field projection",
          "Sorting results",
        ],
      },
    },
  },

  {
    id: 38,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Comparison Operators",
    type: "two-column",
    content: {
      left: {
        title: "Common Operators",
        items: [
          "$eq – equal",
          "$ne – not equal",
          "$gt – greater than",
          "$gte – greater or equal",
        ],
      },
      right: {
        title: "More Operators",
        items: [
          "$lt – less than",
          "$lte – less or equal",
          "$in – matches any value",
          "$nin – not in array",
        ],
      },
    },
  },

  {
    id: 39,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Comparison Operator Example",
    type: "code",
    content: {
      title: "Querying by Range",
      keyPoints: [
        "Operators go inside field object",
        "Works with numbers and dates",
        "Very common in real apps",
      ],
      code: `db.users.find({
  age: { $gte: 25, $lte: 35 }
});`,
      explanation: "This query returns users whose age is between 25 and 35.",
    },
  },

  {
    id: 40,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Logical Operators",
    type: "two-column",
    content: {
      left: {
        title: "$and / $or",
        items: [
          "Combine multiple conditions",
          "Explicit logical grouping",
          "Useful for complex rules",
          "Readable query logic",
        ],
      },
      right: {
        title: "$not / $nor",
        items: [
          "Negate conditions",
          "Exclude patterns",
          "Advanced filtering",
          "Less commonly used",
        ],
      },
    },
  },

  {
    id: 41,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Logical Operator Example",
    type: "code",
    content: {
      title: "Using $or",
      keyPoints: [
        "Array of conditions",
        "Matches any condition",
        "Flexible logic",
      ],
      code: `db.users.find({
  $or: [
    { age: { $lt: 18 } },
    { isAdmin: true }
  ]
});`,
      explanation: "This query matches users under 18 or users who are admins.",
    },
  },

  {
    id: 42,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Field Projection",
    type: "two-column",
    content: {
      left: {
        title: "What Is Projection?",
        items: [
          "Select specific fields",
          "Reduce data transfer",
          "Improve performance",
          "Control API responses",
        ],
      },
      right: {
        title: "Projection Rules",
        items: [
          "1 to include fields",
          "0 to exclude fields",
          "Cannot mix include/exclude",
          "_id excluded explicitly",
        ],
      },
    },
  },

  {
    id: 43,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Projection Example",
    type: "code",
    content: {
      title: "Selecting Fields",
      keyPoints: [
        "Second argument to find()",
        "Limits returned fields",
        "Common in APIs",
      ],
      code: `db.users.find(
  { age: { $gte: 18 } },
  { name: 1, email: 1, _id: 0 }
);`,
      explanation: "Only name and email are returned, excluding _id.",
    },
  },

  {
    id: 44,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Sorting Results",
    type: "two-column",
    content: {
      left: {
        title: "sort() Basics",
        items: [
          "Orders query results",
          "1 for ascending",
          "-1 for descending",
          "Applied after filtering",
        ],
      },
      right: {
        title: "Real Use Cases",
        items: [
          "Latest records first",
          "Alphabetical lists",
          "Rankings",
          "Reports",
        ],
      },
    },
  },

  {
    id: 45,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Sorting Example",
    type: "code",
    content: {
      title: "Sorting by Field",
      keyPoints: [
        "Chainable with find()",
        "Multiple sort fields allowed",
        "Order matters",
      ],
      code: `db.users.find({})
  .sort({ age: -1 });`,
      explanation: "Users are returned from oldest to youngest.",
    },
  },

  {
    id: 46,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Limiting and Skipping Results",
    type: "two-column",
    content: {
      left: {
        title: "limit()",
        items: [
          "Restricts number of results",
          "Useful for pagination",
          "Improves performance",
          "Often combined with sort()",
        ],
      },
      right: {
        title: "skip()",
        items: [
          "Skips number of documents",
          "Used in pagination",
          "Avoid large skips in production",
          "Index-dependent",
        ],
      },
    },
  },

  {
    id: 47,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Pagination Example",
    type: "code",
    content: {
      title: "Using skip and limit",
      keyPoints: [
        "Basic pagination approach",
        "Works for small datasets",
        "Indexing required for scale",
      ],
      code: `db.users.find({})
  .sort({ createdAt: -1 })
  .skip(20)
  .limit(10);`,
      explanation: "This query returns page 3 of results (10 per page).",
    },
  },

  {
    id: 48,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Query Performance Awareness",
    type: "two-column",
    content: {
      left: {
        title: "Potential Issues",
        items: [
          "Full collection scans",
          "Large result sets",
          "Unindexed queries",
          "Slow APIs",
        ],
      },
      right: {
        title: "Good Habits",
        items: [
          "Use projection",
          "Limit results",
          "Sort on indexed fields",
          "Measure performance early",
        ],
      },
    },
  },

  {
    id: 49,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "Common Query Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Fetching entire documents unnecessarily",
          "Sorting without indexes",
          "Large skip values",
          "Overly complex filters",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Project only needed fields",
          "Index sort fields",
          "Use cursor-based pagination",
          "Keep queries readable",
        ],
      },
    },
  },

  {
    id: 50,
    moduleId: 4,
    moduleTitle: "Advanced Querying, Projection & Sorting",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Indexes",
          "Query performance",
          "Explain plans",
          "Production optimization",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You write complex queries",
          "You control returned data",
          "You sort and paginate",
          "Ready for indexing",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 5: Indexes & Query Performance
  // =========================

  {
    id: 51,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "Why Indexes Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Indexes",
        items: [
          "Full collection scans",
          "Slow query response",
          "High CPU usage",
          "Poor scalability",
        ],
      },
      right: {
        title: "With Indexes",
        items: [
          "Fast query execution",
          "Efficient data access",
          "Scales with data size",
          "Production-ready performance",
        ],
      },
    },
  },

  {
    id: 52,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "What Is an Index?",
    type: "two-column",
    content: {
      left: {
        title: "Index Explained",
        items: [
          "Data structure for fast lookups",
          "Maps field values to documents",
          "Similar to book index",
          "Stored separately from documents",
        ],
      },
      right: {
        title: "Important Facts",
        items: [
          "_id index exists by default",
          "Indexes speed reads",
          "Indexes slow writes",
          "Trade-off required",
        ],
      },
    },
  },

  {
    id: 53,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "Creating an Index",
    type: "code",
    content: {
      title: "Basic Index Creation",
      keyPoints: [
        "createIndex creates index",
        "1 = ascending, -1 = descending",
        "Runs in background by default",
      ],
      code: `db.users.createIndex({ email: 1 });`,
      explanation:
        "This index speeds up queries filtering or sorting by email.",
    },
  },

  {
    id: 54,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "Single Field vs Compound Indexes",
    type: "two-column",
    content: {
      left: {
        title: "Single Field Index",
        items: [
          "Indexes one field",
          "Simple and common",
          "Low storage cost",
          "Good for basic queries",
        ],
      },
      right: {
        title: "Compound Index",
        items: [
          "Indexes multiple fields",
          "Order matters",
          "Optimized for combined queries",
          "More complex",
        ],
      },
    },
  },

  {
    id: 55,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "Compound Index Example",
    type: "code",
    content: {
      title: "Multiple Fields",
      keyPoints: [
        "Field order is critical",
        "Supports prefix queries",
        "Common in production",
      ],
      code: `db.orders.createIndex({
  userId: 1,
  createdAt: -1
});`,
      explanation:
        "This index optimizes queries filtering by userId and sorting by date.",
    },
  },

  {
    id: 56,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "How MongoDB Uses Indexes",
    type: "two-column",
    content: {
      left: {
        title: "Index Usage Rules",
        items: [
          "Matches filter fields",
          "Supports sort when possible",
          "Left-prefix rule applies",
          "Planner chooses best index",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Indexes are not automatic",
          "Query shape matters",
          "Order of fields matters",
          "Test with explain()",
        ],
      },
    },
  },

  {
    id: 57,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "Using explain()",
    type: "code",
    content: {
      title: "Analyzing Query Execution",
      keyPoints: [
        "Shows query plan",
        "Reveals index usage",
        "Essential optimization tool",
      ],
      code: `db.users.find({ email: "a@example.com" })
  .explain("executionStats");`,
      explanation:
        "explain shows whether an index was used and how efficient the query was.",
    },
  },

  {
    id: 58,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "Index Performance Metrics",
    type: "two-column",
    content: {
      left: {
        title: "Key Metrics",
        items: [
          "nReturned",
          "totalDocsExamined",
          "totalKeysExamined",
          "executionTimeMillis",
        ],
      },
      right: {
        title: "What You Want",
        items: [
          "Low docs examined",
          "Keys examined ≈ results",
          "Fast execution time",
          "Index scan, not collection scan",
        ],
      },
    },
  },

  {
    id: 59,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "When Indexes Hurt Performance",
    type: "two-column",
    content: {
      left: {
        title: "Downsides",
        items: [
          "Slower inserts",
          "Slower updates",
          "Increased disk usage",
          "Maintenance overhead",
        ],
      },
      right: {
        title: "Indexing Strategy",
        items: [
          "Index query patterns",
          "Avoid unused indexes",
          "Measure before adding",
          "Review periodically",
        ],
      },
    },
  },

  {
    id: 60,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "Special Index Types",
    type: "two-column",
    content: {
      left: {
        title: "Common Special Indexes",
        items: ["Unique index", "Sparse index", "TTL index", "Text index"],
      },
      right: {
        title: "Use Cases",
        items: [
          "Enforce uniqueness",
          "Optional fields",
          "Auto-expiring data",
          "Search functionality",
        ],
      },
    },
  },

  {
    id: 61,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "Unique Index Example",
    type: "code",
    content: {
      title: "Enforcing Uniqueness",
      keyPoints: [
        "Prevents duplicate values",
        "Fails insert/update on conflict",
        "Common for emails",
      ],
      code: `db.users.createIndex(
  { email: 1 },
  { unique: true }
);`,
      explanation: "MongoDB prevents duplicate email values in the collection.",
    },
  },

  {
    id: 62,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "Common Indexing Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Indexing everything",
          "Ignoring write performance",
          "Wrong field order",
          "Never checking explain()",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Index based on queries",
          "Balance reads vs writes",
          "Design compound indexes carefully",
          "Use explain routinely",
        ],
      },
    },
  },

  {
    id: 63,
    moduleId: 5,
    moduleTitle: "Indexes & Query Performance",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Data modeling",
          "Embedding vs referencing",
          "Schema design patterns",
          "Real-world structures",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand indexes",
          "You optimize queries",
          "You use explain()",
          "Ready for data modeling",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 6: Data Modeling & Schema Design
  // =========================

  {
    id: 64,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "Why Data Modeling Matters",
    type: "two-column",
    content: {
      left: {
        title: "Poor Modeling Consequences",
        items: [
          "Slow queries",
          "Complex application logic",
          "Hard-to-maintain schemas",
          "Scaling challenges",
        ],
      },
      right: {
        title: "Good Modeling Benefits",
        items: [
          "Efficient queries",
          "Simpler code",
          "Predictable performance",
          "Scalable design",
        ],
      },
    },
  },

  {
    id: 65,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "MongoDB Modeling Mindset",
    type: "two-column",
    content: {
      left: {
        title: "SQL vs MongoDB Thinking",
        items: [
          "SQL normalizes aggressively",
          "MongoDB optimizes for reads",
          "Joins are avoided",
          "Data is shaped by queries",
        ],
      },
      right: {
        title: "Key Principle",
        items: [
          "Model based on access patterns",
          "Denormalize intentionally",
          "Optimize for common queries",
          "Design for scale early",
        ],
      },
    },
  },

  {
    id: 66,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "Embedding vs Referencing",
    type: "two-column",
    content: {
      left: {
        title: "Embedding",
        items: [
          "Store related data inside document",
          "Single query fetch",
          "Atomic updates",
          "Faster reads",
        ],
      },
      right: {
        title: "Referencing",
        items: [
          "Store related data separately",
          "Use references (_id)",
          "Avoid document growth",
          "More flexible relationships",
        ],
      },
    },
  },

  {
    id: 67,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "Embedding Example",
    type: "code",
    content: {
      title: "Embedded Documents",
      keyPoints: [
        "Data stored together",
        "Ideal for one-to-few relationships",
        "Reduces joins",
      ],
      code: `{
  _id: ObjectId("..."),
  name: "John",
  orders: [
    { total: 120, status: "paid" },
    { total: 80, status: "pending" }
  ]
}`,
      explanation: "Orders are embedded directly inside the user document.",
    },
  },

  {
    id: 68,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "Referencing Example",
    type: "code",
    content: {
      title: "Referenced Documents",
      keyPoints: [
        "Data split into collections",
        "References via ObjectId",
        "Better for one-to-many",
      ],
      code: `// user
{
  _id: ObjectId("user1"),
  name: "John"
}

// order
{
  _id: ObjectId("order1"),
  userId: ObjectId("user1"),
  total: 120
}`,
      explanation: "Orders reference the user instead of being embedded.",
    },
  },

  {
    id: 69,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "When to Embed",
    type: "two-column",
    content: {
      left: {
        title: "Good Candidates",
        items: [
          "One-to-few relationships",
          "Data always accessed together",
          "Small subdocuments",
          "Read-heavy use cases",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "User profile + settings",
          "Blog post + comments (limited)",
          "Product + specifications",
          "Audit metadata",
        ],
      },
    },
  },

  {
    id: 70,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "When to Reference",
    type: "two-column",
    content: {
      left: {
        title: "Good Candidates",
        items: [
          "One-to-many or many-to-many",
          "Unbounded growth",
          "Frequently changing data",
          "Shared relationships",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "Users and orders",
          "Students and courses",
          "Products and categories",
          "Permissions and roles",
        ],
      },
    },
  },

  {
    id: 71,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "Document Growth & Size Limits",
    type: "two-column",
    content: {
      left: {
        title: "MongoDB Limits",
        items: [
          "16MB document size limit",
          "Unbounded arrays are dangerous",
          "Frequent document moves",
          "Performance degradation",
        ],
      },
      right: {
        title: "Design Implications",
        items: [
          "Avoid growing arrays infinitely",
          "Cap array sizes",
          "Use referencing for large lists",
          "Plan for scale",
        ],
      },
    },
  },

  {
    id: 72,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "Schema Validation",
    type: "two-column",
    content: {
      left: {
        title: "Why Validate",
        items: [
          "Prevent bad data",
          "Enforce structure",
          "Catch bugs early",
          "Improve data quality",
        ],
      },
      right: {
        title: "MongoDB Support",
        items: [
          "JSON Schema validation",
          "Optional enforcement",
          "Flexible constraints",
          "Production-ready",
        ],
      },
    },
  },

  {
    id: 73,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "Schema Validation Example",
    type: "code",
    content: {
      title: "Creating a Validated Collection",
      keyPoints: [
        "Uses JSON Schema",
        "Enforced at write time",
        "Optional strictness",
      ],
      code: `db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email"],
      properties: {
        email: { bsonType: "string" },
        age: { bsonType: "int", minimum: 18 }
      }
    }
  }
});`,
      explanation:
        "MongoDB enforces basic schema rules on inserts and updates.",
    },
  },

  {
    id: 74,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "Common Modeling Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Modeling like SQL",
          "Over-embedding data",
          "Ignoring access patterns",
          "No validation at all",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Design for queries",
          "Balance embed vs reference",
          "Plan for growth",
          "Use validation wisely",
        ],
      },
    },
  },

  {
    id: 75,
    moduleId: 6,
    moduleTitle: "Data Modeling & Schema Design",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Aggregation framework",
          "Data transformation",
          "Pipelines",
          "Analytics queries",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You design MongoDB schemas",
          "You choose embed vs reference",
          "You plan for scale",
          "Ready for aggregation",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 7: Aggregation Framework & Pipelines
  // =========================

  {
    id: 76,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "Why Aggregation Matters",
    type: "two-column",
    content: {
      left: {
        title: "Limits of find()",
        items: [
          "Basic filtering only",
          "No transformations",
          "Limited analytics",
          "Not suitable for reports",
        ],
      },
      right: {
        title: "Aggregation Power",
        items: [
          "Data transformation",
          "Grouping and calculations",
          "Analytics queries",
          "Backend reporting",
        ],
      },
    },
  },

  {
    id: 77,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "What Is an Aggregation Pipeline?",
    type: "two-column",
    content: {
      left: {
        title: "Pipeline Concept",
        items: [
          "Series of processing stages",
          "Documents flow stage by stage",
          "Each stage transforms data",
          "Final output is new shape",
        ],
      },
      right: {
        title: "Mental Model",
        items: [
          "Like Unix pipes",
          "Input → transform → output",
          "Declarative processing",
          "Order matters",
        ],
      },
    },
  },

  {
    id: 78,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "Basic Aggregation Syntax",
    type: "code",
    content: {
      title: "aggregate() Basics",
      keyPoints: [
        "aggregate accepts array of stages",
        "Stages are executed in order",
        "Each stage starts with $",
      ],
      code: `db.orders.aggregate([
  { $match: { status: "paid" } }
]);`,
      explanation: "This pipeline filters documents before further processing.",
    },
  },

  {
    id: 79,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "$match Stage",
    type: "two-column",
    content: {
      left: {
        title: "$match Explained",
        items: [
          "Filters documents",
          "Similar to find()",
          "Should appear early",
          "Improves performance",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Filter as early as possible",
          "Use indexed fields",
          "Reduce pipeline workload",
          "Optimize execution",
        ],
      },
    },
  },

  {
    id: 80,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "$group Stage",
    type: "two-column",
    content: {
      left: {
        title: "$group Explained",
        items: [
          "Groups documents",
          "Performs calculations",
          "Uses accumulator operators",
          "Key analytics stage",
        ],
      },
      right: {
        title: "Common Accumulators",
        items: ["$sum", "$avg", "$min", "$max"],
      },
    },
  },

  {
    id: 81,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "$group Example",
    type: "code",
    content: {
      title: "Total Sales by Status",
      keyPoints: [
        "_id defines group key",
        "Use accumulators",
        "Output is grouped data",
      ],
      code: `db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      totalSales: { $sum: "$amount" }
    }
  }
]);`,
      explanation: "Orders are grouped by status and total sales calculated.",
    },
  },

  {
    id: 82,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "$project Stage",
    type: "two-column",
    content: {
      left: {
        title: "$project Explained",
        items: [
          "Reshapes documents",
          "Selects or renames fields",
          "Computes new fields",
          "Controls output format",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Different from find projection",
          "Supports expressions",
          "Transforms data",
          "Very powerful",
        ],
      },
    },
  },

  {
    id: 83,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "$project Example",
    type: "code",
    content: {
      title: "Shaping Output",
      keyPoints: [
        "Create new fields",
        "Rename fields",
        "Exclude _id if needed",
      ],
      code: `db.users.aggregate([
  {
    $project: {
      _id: 0,
      email: 1,
      isAdult: { $gte: ["$age", 18] }
    }
  }
]);`,
      explanation: "The pipeline computes a new boolean field isAdult.",
    },
  },

  {
    id: 84,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "$sort, $limit, $skip",
    type: "two-column",
    content: {
      left: {
        title: "Pipeline Control",
        items: [
          "$sort orders documents",
          "$limit restricts output",
          "$skip skips documents",
          "Used for pagination",
        ],
      },
      right: {
        title: "Performance Tip",
        items: [
          "Sort early with indexes",
          "Limit output size",
          "Avoid large skips",
          "Design pipelines carefully",
        ],
      },
    },
  },

  {
    id: 85,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "Multi-Stage Pipeline Example",
    type: "code",
    content: {
      title: "Complete Pipeline",
      keyPoints: [
        "Multiple stages combined",
        "Order is important",
        "Real-world analytics",
      ],
      code: `db.orders.aggregate([
  { $match: { status: "paid" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
  { $limit: 5 }
]);`,
      explanation: "This pipeline finds top 5 users by total paid amount.",
    },
  },

  {
    id: 86,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "Aggregation Performance Awareness",
    type: "two-column",
    content: {
      left: {
        title: "Potential Issues",
        items: [
          "Memory-intensive stages",
          "Large datasets",
          "Unoptimized pipelines",
          "Disk spill",
        ],
      },
      right: {
        title: "Good Practices",
        items: [
          "Filter early",
          "Project only needed fields",
          "Index match and sort fields",
          "Test with explain()",
        ],
      },
    },
  },

  {
    id: 87,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "Common Aggregation Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using aggregation for simple queries",
          "Missing $match stage early",
          "Overcomplicated pipelines",
          "Ignoring performance",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Use find when possible",
          "Filter first",
          "Keep pipelines readable",
          "Measure performance",
        ],
      },
    },
  },

  {
    id: 88,
    moduleId: 7,
    moduleTitle: "Aggregation Framework & Pipelines",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Transactions",
          "ACID guarantees",
          "Multi-document consistency",
          "Production safety",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You use aggregation pipelines",
          "You transform data",
          "You perform analytics",
          "Ready for transactions",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 8: Transactions & Data Consistency
  // =========================

  {
    id: 89,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "Why Transactions Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Transactions",
        items: [
          "Partial updates",
          "Inconsistent data",
          "Hard-to-debug errors",
          "Business logic failures",
        ],
      },
      right: {
        title: "With Transactions",
        items: [
          "All-or-nothing operations",
          "Data integrity",
          "Safer multi-step workflows",
          "Enterprise-grade reliability",
        ],
      },
    },
  },

  {
    id: 90,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "ACID in MongoDB",
    type: "two-column",
    content: {
      left: {
        title: "ACID Properties",
        items: ["Atomicity", "Consistency", "Isolation", "Durability"],
      },
      right: {
        title: "MongoDB Support",
        items: [
          "Replica sets",
          "Sharded clusters",
          "Multi-document transactions",
          "Production-ready",
        ],
      },
    },
  },

  {
    id: 91,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "When to Use Transactions",
    type: "two-column",
    content: {
      left: {
        title: "Good Use Cases",
        items: [
          "Money transfers",
          "Inventory updates",
          "Multi-collection writes",
          "Critical business workflows",
        ],
      },
      right: {
        title: "When NOT to Use",
        items: [
          "Single-document updates",
          "High-throughput writes",
          "Simple CRUD",
          "Performance-critical paths",
        ],
      },
    },
  },

  {
    id: 92,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "Transaction Requirements",
    type: "two-column",
    content: {
      left: {
        title: "Prerequisites",
        items: [
          "Replica set or sharded cluster",
          "MongoDB 4.0+",
          "Session-based operations",
          "WiredTiger storage engine",
        ],
      },
      right: {
        title: "Important Note",
        items: [
          "Standalone mongod does not support transactions",
          "Local dev often uses replica set",
          "Atlas supports by default",
          "Check environment early",
        ],
      },
    },
  },

  {
    id: 93,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "Single-Document Atomicity",
    type: "two-column",
    content: {
      left: {
        title: "Built-in Safety",
        items: [
          "Single document updates are atomic",
          "No transaction required",
          "Applies to embedded docs",
          "Preferred design approach",
        ],
      },
      right: {
        title: "Design Tip",
        items: [
          "Embed related data",
          "Reduce need for transactions",
          "Simpler and faster",
          "MongoDB best practice",
        ],
      },
    },
  },

  {
    id: 94,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "Starting a Transaction (Concept)",
    type: "code",
    content: {
      title: "Transaction Flow",
      keyPoints: [
        "Start session",
        "Begin transaction",
        "Commit or abort",
        "Session lifecycle matters",
      ],
      code: `const session = client.startSession();

session.startTransaction();
// operations here
session.commitTransaction();`,
      explanation: "Transactions are tied to client sessions.",
    },
  },

  {
    id: 95,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "Transaction Example (Two Collections)",
    type: "code",
    content: {
      title: "Money Transfer Example",
      keyPoints: [
        "All updates succeed or fail",
        "Critical business logic",
        "Rollback on error",
      ],
      code: `const session = client.startSession();

try {
  session.startTransaction();

  db.accounts.updateOne(
    { _id: fromId },
    { $inc: { balance: -100 } },
    { session }
  );

  db.accounts.updateOne(
    { _id: toId },
    { $inc: { balance: 100 } },
    { session }
  );

  session.commitTransaction();
} catch (e) {
  session.abortTransaction();
} finally {
  session.endSession();
}`,
      explanation: "Both balance updates succeed together or are rolled back.",
    },
  },

  {
    id: 96,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "Transaction Isolation Levels",
    type: "two-column",
    content: {
      left: {
        title: "Snapshot Isolation",
        items: [
          "Consistent view of data",
          "No dirty reads",
          "Isolation across operations",
          "Default in MongoDB",
        ],
      },
      right: {
        title: "Implications",
        items: [
          "Predictable reads",
          "Concurrent transactions supported",
          "Performance trade-off",
          "Safe concurrency",
        ],
      },
    },
  },

  {
    id: 97,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "Performance Considerations",
    type: "two-column",
    content: {
      left: {
        title: "Transaction Cost",
        items: [
          "Locks and coordination",
          "Higher latency",
          "Increased resource usage",
          "Throughput reduction",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Keep transactions short",
          "Avoid user interaction inside",
          "Retry on transient errors",
          "Use only when needed",
        ],
      },
    },
  },

  {
    id: 98,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "Error Handling & Retries",
    type: "two-column",
    content: {
      left: {
        title: "Transient Errors",
        items: [
          "Network issues",
          "Primary step-down",
          "Write conflicts",
          "Temporary failures",
        ],
      },
      right: {
        title: "Recommended Approach",
        items: [
          "Retry entire transaction",
          "Use retryable writes",
          "Handle aborts gracefully",
          "Log failures",
        ],
      },
    },
  },

  {
    id: 99,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "Common Transaction Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using transactions unnecessarily",
          "Long-running transactions",
          "Ignoring retries",
          "Using standalone MongoDB",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Design for single-document updates",
          "Keep transactions short",
          "Implement retry logic",
          "Verify deployment topology",
        ],
      },
    },
  },

  {
    id: 100,
    moduleId: 8,
    moduleTitle: "Transactions & Data Consistency",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Security & authentication",
          "Users and roles",
          "Access control",
          "Production hardening",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand transactions",
          "You know when to use them",
          "You design safer workflows",
          "Ready for security",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 9: Security, Authentication & Authorization
  // =========================

  {
    id: 101,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "Why MongoDB Security Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Security",
        items: [
          "Unauthorized data access",
          "Data breaches",
          "Accidental data loss",
          "Compliance violations",
        ],
      },
      right: {
        title: "With Proper Security",
        items: [
          "Controlled access",
          "Data protection",
          "Audit readiness",
          "Production safety",
        ],
      },
    },
  },

  {
    id: 102,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "MongoDB Security Layers",
    type: "two-column",
    content: {
      left: {
        title: "Core Layers",
        items: [
          "Authentication",
          "Authorization",
          "Encryption",
          "Network security",
        ],
      },
      right: {
        title: "Defense-in-Depth",
        items: [
          "Multiple protection layers",
          "Fail-safe design",
          "Least privilege principle",
          "Industry best practice",
        ],
      },
    },
  },

  {
    id: 103,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "Authentication vs Authorization",
    type: "two-column",
    content: {
      left: {
        title: "Authentication",
        items: [
          "Who are you?",
          "Identity verification",
          "Login process",
          "Credential-based",
        ],
      },
      right: {
        title: "Authorization",
        items: [
          "What can you do?",
          "Permission enforcement",
          "Role-based access",
          "Least privilege",
        ],
      },
    },
  },

  {
    id: 104,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "MongoDB Authentication Mechanisms",
    type: "two-column",
    content: {
      left: {
        title: "Supported Methods",
        items: [
          "SCRAM-SHA-256",
          "X.509 certificates",
          "LDAP (Enterprise)",
          "Kerberos (Enterprise)",
        ],
      },
      right: {
        title: "Common Choice",
        items: [
          "SCRAM-SHA-256",
          "Username + password",
          "Default for most deployments",
          "Strong hashing",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "Enabling Authentication",
    type: "two-column",
    content: {
      left: {
        title: "Key Steps",
        items: [
          "Create admin user",
          "Enable authorization",
          "Restart MongoDB",
          "Enforce authentication",
        ],
      },
      right: {
        title: "Important Note",
        items: [
          "Always create admin first",
          "Lockout risk if skipped",
          "Test locally before production",
          "Atlas handles this automatically",
        ],
      },
    },
  },

  {
    id: 106,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "Creating an Admin User",
    type: "code",
    content: {
      title: "Admin User Creation",
      keyPoints: [
        "Run before enabling auth",
        "Use admin database",
        "Assign root role",
      ],
      code: `use admin

db.createUser({
  user: "admin",
  pwd: "strongPassword",
  roles: [ { role: "root", db: "admin" } ]
});`,
      explanation: "The admin user has full control over the MongoDB instance.",
    },
  },

  {
    id: 107,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "Enabling Authorization",
    type: "code",
    content: {
      title: "mongod Configuration",
      keyPoints: [
        "Authorization enabled via config",
        "Requires restart",
        "Enforces authentication",
      ],
      code: `security:
  authorization: enabled`,
      explanation: "This setting forces all connections to authenticate.",
    },
  },

  {
    id: 108,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "Connecting with Authentication",
    type: "code",
    content: {
      title: "Authenticated Connection",
      keyPoints: [
        "Provide username and password",
        "Specify auth database",
        "Required after auth enabled",
      ],
      code: `mongosh -u admin -p --authenticationDatabase admin`,
      explanation: "MongoDB prompts for password and authenticates the user.",
    },
  },

  {
    id: 109,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "MongoDB Roles",
    type: "two-column",
    content: {
      left: {
        title: "Built-in Roles",
        items: ["read", "readWrite", "dbAdmin", "userAdmin"],
      },
      right: {
        title: "Role Design",
        items: [
          "Database-specific",
          "Least privilege",
          "Composable roles",
          "Production standard",
        ],
      },
    },
  },

  {
    id: 110,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "Creating Application Users",
    type: "code",
    content: {
      title: "App User Example",
      keyPoints: [
        "Grant minimal permissions",
        "Separate app and admin users",
        "Security best practice",
      ],
      code: `use myAppDb

db.createUser({
  user: "appUser",
  pwd: "appPassword",
  roles: [ { role: "readWrite", db: "myAppDb" } ]
});`,
      explanation: "Application users should never have admin privileges.",
    },
  },

  {
    id: 111,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "Network Security Basics",
    type: "two-column",
    content: {
      left: {
        title: "Network Controls",
        items: [
          "Bind IP address",
          "Firewall rules",
          "Private networks",
          "TLS encryption",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Never expose to public internet",
          "Use VPN or VPC",
          "Restrict IP ranges",
          "Encrypt connections",
        ],
      },
    },
  },

  {
    id: 112,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "Common Security Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Running without authentication",
          "Using admin user in apps",
          "Weak passwords",
          "Public exposure",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always enable auth",
          "Use least privilege",
          "Rotate credentials",
          "Audit access regularly",
        ],
      },
    },
  },

  {
    id: 113,
    moduleId: 9,
    moduleTitle: "Security, Authentication & Authorization",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Replication",
          "High availability",
          "Failover",
          "Production resilience",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You secure MongoDB",
          "You manage users and roles",
          "You apply least privilege",
          "Ready for replication",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 10: Replication & High Availability
  // =========================

  {
    id: 114,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Why Replication Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Replication",
        items: [
          "Single point of failure",
          "Downtime during crashes",
          "Risk of data loss",
          "No fault tolerance",
        ],
      },
      right: {
        title: "With Replication",
        items: [
          "High availability",
          "Automatic failover",
          "Data redundancy",
          "Production resilience",
        ],
      },
    },
  },

  {
    id: 115,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "What Is a Replica Set?",
    type: "two-column",
    content: {
      left: {
        title: "Replica Set Explained",
        items: [
          "Group of mongod instances",
          "Maintain same data set",
          "One primary, multiple secondaries",
          "Automatic failover",
        ],
      },
      right: {
        title: "Key Benefits",
        items: [
          "No single point of failure",
          "Read scalability",
          "Disaster recovery",
          "Zero-downtime maintenance",
        ],
      },
    },
  },

  {
    id: 116,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Primary and Secondary Nodes",
    type: "two-column",
    content: {
      left: {
        title: "Primary Node",
        items: [
          "Handles all writes",
          "Strong consistency",
          "One at a time",
          "Elected automatically",
        ],
      },
      right: {
        title: "Secondary Nodes",
        items: [
          "Replicate data from primary",
          "Can serve reads",
          "Participate in elections",
          "Promoted on failover",
        ],
      },
    },
  },

  {
    id: 117,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Replica Set Election Process",
    type: "two-column",
    content: {
      left: {
        title: "When Elections Happen",
        items: [
          "Primary failure",
          "Network partition",
          "Maintenance restart",
          "Step-down event",
        ],
      },
      right: {
        title: "Election Outcome",
        items: [
          "New primary elected",
          "Writes resume automatically",
          "Minimal downtime",
          "Client reconnects",
        ],
      },
    },
  },

  {
    id: 118,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Replication Mechanics",
    type: "two-column",
    content: {
      left: {
        title: "How Data Replicates",
        items: [
          "Oplog (operations log)",
          "Secondaries pull data",
          "Asynchronous replication",
          "Ordered operations",
        ],
      },
      right: {
        title: "Consistency Implication",
        items: [
          "Eventual consistency for reads",
          "Strong consistency for writes",
          "Configurable read concern",
          "Configurable write concern",
        ],
      },
    },
  },

  {
    id: 119,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Read Preferences",
    type: "two-column",
    content: {
      left: {
        title: "Read Preference Options",
        items: ["primary", "primaryPreferred", "secondary", "nearest"],
      },
      right: {
        title: "Use Cases",
        items: [
          "Strong consistency",
          "Load balancing",
          "Analytics queries",
          "Geographically distributed reads",
        ],
      },
    },
  },

  {
    id: 120,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Write Concerns",
    type: "two-column",
    content: {
      left: {
        title: "Write Concern Explained",
        items: [
          "Acknowledgment level",
          "Controls durability",
          "Trade-off with latency",
          "Critical for safety",
        ],
      },
      right: {
        title: "Common Values",
        items: [
          "w: 1 (primary)",
          "w: majority",
          "j: true (journaled)",
          "Timeout settings",
        ],
      },
    },
  },

  {
    id: 121,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Replica Set Configuration (Concept)",
    type: "code",
    content: {
      title: "Initializing a Replica Set",
      keyPoints: ["Define members", "Run rs.initiate", "Assign priorities"],
      code: `rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" }
  ]
});`,
      explanation: "This initializes a three-node replica set.",
    },
  },

  {
    id: 122,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Arbiters",
    type: "two-column",
    content: {
      left: {
        title: "What Is an Arbiter?",
        items: [
          "Participates in elections",
          "Does not store data",
          "Breaks ties",
          "Lightweight node",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Odd number of votes",
          "Resource constraints",
          "Avoid data storage",
          "Use sparingly",
        ],
      },
    },
  },

  {
    id: 123,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Monitoring Replica Sets",
    type: "two-column",
    content: {
      left: {
        title: "Monitoring Focus",
        items: [
          "Replication lag",
          "Node health",
          "Election events",
          "Disk usage",
        ],
      },
      right: {
        title: "Tools",
        items: [
          "MongoDB Atlas",
          "mongostat",
          "mongotop",
          "Monitoring dashboards",
        ],
      },
    },
  },

  {
    id: 124,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "Common Replication Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Single-node production",
          "Ignoring replication lag",
          "Wrong read preference",
          "No monitoring",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Always use replica sets",
          "Monitor continuously",
          "Choose read/write concerns carefully",
          "Test failover scenarios",
        ],
      },
    },
  },

  {
    id: 125,
    moduleId: 10,
    moduleTitle: "Replication & High Availability",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Sharding",
          "Horizontal scaling",
          "Large dataset handling",
          "Distributed architecture",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand replication",
          "You design for availability",
          "You handle failover",
          "Ready for sharding",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 11: Sharding & Horizontal Scaling
  // =========================

  {
    id: 126,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Why Sharding Is Needed",
    type: "two-column",
    content: {
      left: {
        title: "Limits of Vertical Scaling",
        items: [
          "CPU and RAM limits",
          "Expensive hardware upgrades",
          "Single machine bottleneck",
          "Finite growth ceiling",
        ],
      },
      right: {
        title: "Sharding Benefits",
        items: [
          "Horizontal scaling",
          "Distribute data across machines",
          "Higher throughput",
          "Massive dataset support",
        ],
      },
    },
  },

  {
    id: 127,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "What Is Sharding?",
    type: "two-column",
    content: {
      left: {
        title: "Sharding Explained",
        items: [
          "Partitioning data across nodes",
          "Each shard stores a subset of data",
          "Queries routed automatically",
          "Transparent to application",
        ],
      },
      right: {
        title: "Key Components",
        items: ["Shards", "Config servers", "mongos routers", "Shard keys"],
      },
    },
  },

  {
    id: 128,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Sharded Cluster Architecture",
    type: "two-column",
    content: {
      left: {
        title: "Cluster Components",
        items: [
          "Shard (replica set)",
          "Config servers",
          "mongos query routers",
          "Clients",
        ],
      },
      right: {
        title: "How They Work Together",
        items: [
          "mongos routes queries",
          "Config servers store metadata",
          "Shards store actual data",
          "System scales transparently",
        ],
      },
    },
  },

  {
    id: 129,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Shard Keys Explained",
    type: "two-column",
    content: {
      left: {
        title: "Shard Key Purpose",
        items: [
          "Determines data distribution",
          "Controls query routing",
          "Critical design decision",
          "Immutable once chosen",
        ],
      },
      right: {
        title: "Good Shard Key Traits",
        items: [
          "High cardinality",
          "Even distribution",
          "Included in queries",
          "Avoids hotspots",
        ],
      },
    },
  },

  {
    id: 130,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Shard Key Examples",
    type: "two-column",
    content: {
      left: {
        title: "Poor Shard Keys",
        items: [
          "Boolean fields",
          "Low-cardinality fields",
          "Monotonically increasing values",
          "Fields not used in queries",
        ],
      },
      right: {
        title: "Better Choices",
        items: [
          "User ID",
          "Hashed fields",
          "Compound shard keys",
          "Natural partition keys",
        ],
      },
    },
  },

  {
    id: 131,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Hashed Shard Keys",
    type: "two-column",
    content: {
      left: {
        title: "Hashed Keys Explained",
        items: [
          "Hash-based distribution",
          "Even data spread",
          "Avoids write hotspots",
          "Randomized distribution",
        ],
      },
      right: {
        title: "Trade-offs",
        items: [
          "Poor range queries",
          "Targeted queries harder",
          "Good for write-heavy workloads",
          "Common default choice",
        ],
      },
    },
  },

  {
    id: 132,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Enabling Sharding (Concept)",
    type: "code",
    content: {
      title: "Sharding Setup Flow",
      keyPoints: [
        "Enable sharding for database",
        "Choose shard key",
        "Shard collection",
        "Monitor balance",
      ],
      code: `sh.enableSharding("myAppDb");

sh.shardCollection(
  "myAppDb.orders",
  { userId: "hashed" }
);`,
      explanation:
        "This enables sharding and distributes data using a hashed shard key.",
    },
  },

  {
    id: 133,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Chunk Management",
    type: "two-column",
    content: {
      left: {
        title: "Chunks Explained",
        items: [
          "Data stored in chunks",
          "Chunks split automatically",
          "Balanced across shards",
          "Migration occurs in background",
        ],
      },
      right: {
        title: "Balancing Process",
        items: [
          "Balancer runs automatically",
          "Even distribution enforced",
          "Minimal impact on queries",
          "Can be scheduled",
        ],
      },
    },
  },

  {
    id: 134,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Query Routing in Sharded Clusters",
    type: "two-column",
    content: {
      left: {
        title: "Targeted Queries",
        items: [
          "Include shard key",
          "Route to specific shard",
          "Fast execution",
          "Preferred pattern",
        ],
      },
      right: {
        title: "Scatter-Gather Queries",
        items: [
          "Missing shard key",
          "Query all shards",
          "Slower performance",
          "Avoid when possible",
        ],
      },
    },
  },

  {
    id: 135,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Sharding Performance Considerations",
    type: "two-column",
    content: {
      left: {
        title: "Costs",
        items: [
          "Operational complexity",
          "More infrastructure",
          "Query planning overhead",
          "Monitoring required",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Shard only when needed",
          "Choose shard key carefully",
          "Design queries upfront",
          "Use Atlas automation",
        ],
      },
    },
  },

  {
    id: 136,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "Common Sharding Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Early sharding",
          "Poor shard key choice",
          "Ignoring query patterns",
          "No monitoring",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Start with replica sets",
          "Model data carefully",
          "Test shard key behavior",
          "Monitor chunk distribution",
        ],
      },
    },
  },

  {
    id: 137,
    moduleId: 11,
    moduleTitle: "Sharding & Horizontal Scaling",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "MongoDB with applications",
          "Node.js integration",
          "Mongoose vs native driver",
          "Real API usage",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You understand sharding",
          "You design for horizontal scale",
          "You choose shard keys wisely",
          "Ready for app integration",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 12: MongoDB with Applications (Node.js Integration)
  // =========================

  {
    id: 138,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Why Application Integration Matters",
    type: "two-column",
    content: {
      left: {
        title: "Database Alone Is Not Enough",
        items: [
          "Applications drive database usage",
          "APIs abstract database logic",
          "Security enforced at app layer",
          "Business rules live in code",
        ],
      },
      right: {
        title: "What You’ll Build",
        items: [
          "Node.js connection to MongoDB",
          "CRUD APIs",
          "Production-ready patterns",
          "Clean separation of concerns",
        ],
      },
    },
  },

  {
    id: 139,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "MongoDB Drivers Overview",
    type: "two-column",
    content: {
      left: {
        title: "Native MongoDB Driver",
        items: [
          "Official MongoDB driver",
          "Low-level control",
          "High performance",
          "Closer to MongoDB concepts",
        ],
      },
      right: {
        title: "ODM / Abstractions",
        items: [
          "Mongoose (popular ODM)",
          "Schema-based modeling",
          "Validation and hooks",
          "Higher-level abstraction",
        ],
      },
    },
  },

  {
    id: 140,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "When to Use Native Driver vs Mongoose",
    type: "two-column",
    content: {
      left: {
        title: "Use Native Driver When",
        items: [
          "You need full MongoDB features",
          "High-performance systems",
          "Custom aggregation logic",
          "Minimal abstraction preferred",
        ],
      },
      right: {
        title: "Use Mongoose When",
        items: [
          "Rapid development",
          "Strong schema enforcement",
          "Middleware/hooks needed",
          "Team familiarity",
        ],
      },
    },
  },

  {
    id: 141,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Installing Dependencies",
    type: "code",
    content: {
      title: "Project Setup",
      keyPoints: [
        "mongodb is the official driver",
        "dotenv for environment variables",
        "Express commonly used with MongoDB",
      ],
      code: `npm install mongodb express dotenv`,
      explanation:
        "These packages are commonly used in MongoDB-backed Node.js apps.",
    },
  },

  {
    id: 142,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Connecting to MongoDB (Native Driver)",
    type: "code",
    content: {
      title: "MongoClient Connection",
      keyPoints: [
        "Use connection string",
        "Client reused across app",
        "Async connection",
      ],
      code: `const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);

async function connect() {
  await client.connect();
  return client.db("myAppDb");
}

module.exports = connect;`,
      explanation: "The MongoClient manages pooled connections to MongoDB.",
    },
  },

  {
    id: 143,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Environment Configuration",
    type: "two-column",
    content: {
      left: {
        title: "Why Env Vars",
        items: [
          "Keep secrets out of code",
          "Environment-specific config",
          "Security best practice",
          "Deployment-friendly",
        ],
      },
      right: {
        title: "Typical Variables",
        items: ["MONGO_URI", "DB_NAME", "NODE_ENV", "PORT"],
      },
    },
  },

  {
    id: 144,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Basic Express API Structure",
    type: "code",
    content: {
      title: "Express App Skeleton",
      keyPoints: [
        "Separate app and server",
        "Middleware first",
        "Routes after setup",
      ],
      code: `const express = require("express");
const connect = require("./db");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;`,
      explanation: "This is a minimal Express application structure.",
    },
  },

  {
    id: 145,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Creating a CRUD API Endpoint",
    type: "code",
    content: {
      title: "Create User Endpoint",
      keyPoints: ["Validate input", "Insert document", "Return response"],
      code: `app.post("/users", async (req, res) => {
  const db = await connect();
  const result = await db.collection("users").insertOne(req.body);
  res.status(201).json(result);
});`,
      explanation: "This endpoint creates a new user document in MongoDB.",
    },
  },

  {
    id: 146,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Reading Data in an API",
    type: "code",
    content: {
      title: "Fetch Users Endpoint",
      keyPoints: [
        "Use find() with toArray()",
        "Avoid returning cursors",
        "Paginate in production",
      ],
      code: `app.get("/users", async (req, res) => {
  const db = await connect();
  const users = await db.collection("users").find({}).toArray();
  res.json(users);
});`,
      explanation: "toArray converts the cursor into JSON data.",
    },
  },

  {
    id: 147,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Updating Documents in an API",
    type: "code",
    content: {
      title: "Update Endpoint",
      keyPoints: [
        "Use ObjectId",
        "Never trust client input",
        "Return update status",
      ],
      code: `const { ObjectId } = require("mongodb");

app.put("/users/:id", async (req, res) => {
  const db = await connect();
  const result = await db.collection("users").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(result);
});`,
      explanation: "ObjectId conversion is required for _id matching.",
    },
  },

  {
    id: 148,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Deleting Documents in an API",
    type: "code",
    content: {
      title: "Delete Endpoint",
      keyPoints: [
        "Permanent operation",
        "Confirm target document",
        "Audit deletions in production",
      ],
      code: `app.delete("/users/:id", async (req, res) => {
  const db = await connect();
  await db.collection("users").deleteOne({
    _id: new ObjectId(req.params.id)
  });
  res.status(204).end();
});`,
      explanation: "DELETE endpoints should return minimal responses.",
    },
  },

  {
    id: 149,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "Common Integration Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Creating new client per request",
          "No error handling",
          "Returning raw DB errors",
          "No validation",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Reuse MongoClient",
          "Handle errors centrally",
          "Sanitize responses",
          "Validate input",
        ],
      },
    },
  },

  {
    id: 150,
    moduleId: 12,
    moduleTitle: "MongoDB with Applications (Node.js Integration)",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Mongoose deep dive",
          "Schemas and models",
          "Middleware and validation",
          "ODM trade-offs",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You connect MongoDB to Node.js",
          "You build CRUD APIs",
          "You follow best practices",
          "Ready for Mongoose",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 13: Mongoose ODM – Schemas, Models & Middleware
  // =========================

  {
    id: 151,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Why Use Mongoose?",
    type: "two-column",
    content: {
      left: {
        title: "Challenges with Native Driver",
        items: [
          "No schema enforcement",
          "Manual validation",
          "Boilerplate code",
          "Inconsistent data shapes",
        ],
      },
      right: {
        title: "What Mongoose Provides",
        items: [
          "Schema-based modeling",
          "Built-in validation",
          "Middleware (hooks)",
          "Cleaner application code",
        ],
      },
    },
  },

  {
    id: 152,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "What Is an ODM?",
    type: "two-column",
    content: {
      left: {
        title: "ODM Explained",
        items: [
          "Object Data Modeling",
          "Maps objects to documents",
          "Adds structure on top of MongoDB",
          "Application-level abstraction",
        ],
      },
      right: {
        title: "ODM vs ORM",
        items: [
          "ODM for NoSQL",
          "ORM for SQL",
          "Flexible but structured",
          "Different philosophy",
        ],
      },
    },
  },

  {
    id: 153,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Installing and Connecting Mongoose",
    type: "code",
    content: {
      title: "Mongoose Setup",
      keyPoints: [
        "Mongoose manages connections",
        "Uses MongoDB connection string",
        "Promise-based API",
      ],
      code: `npm install mongoose`,
      explanation:
        "Mongoose is installed as a separate dependency from the native driver.",
    },
  },

  {
    id: 154,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Connecting to MongoDB with Mongoose",
    type: "code",
    content: {
      title: "mongoose.connect",
      keyPoints: [
        "Single global connection",
        "Connection pooling handled internally",
        "Use environment variables",
      ],
      code: `const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected"))
  .catch(err => console.error(err));`,
      explanation: "Mongoose manages the MongoDB connection lifecycle.",
    },
  },

  {
    id: 155,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Defining a Schema",
    type: "code",
    content: {
      title: "Schema Definition",
      keyPoints: [
        "Defines document structure",
        "Supports validation",
        "Types and constraints",
      ],
      code: `const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 }
});`,
      explanation:
        "Schemas define how documents should look in the application.",
    },
  },

  {
    id: 156,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Creating a Model",
    type: "code",
    content: {
      title: "Model Creation",
      keyPoints: [
        "Model represents a collection",
        "Provides query methods",
        "Central access point",
      ],
      code: `const User = mongoose.model("User", userSchema);`,
      explanation: "Models are used to create, query, and update documents.",
    },
  },

  {
    id: 157,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Creating Documents with Mongoose",
    type: "code",
    content: {
      title: "Saving a Document",
      keyPoints: [
        "Validation runs automatically",
        "Returns a promise",
        "Clean API",
      ],
      code: `const user = new User({
  name: "Alice",
  email: "alice@example.com",
  age: 25
});

await user.save();`,
      explanation: "Mongoose validates data before saving to MongoDB.",
    },
  },

  {
    id: 158,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Querying with Models",
    type: "code",
    content: {
      title: "Common Query Methods",
      keyPoints: [
        "find, findOne, findById",
        "Chainable queries",
        "Returns promises",
      ],
      code: `const users = await User.find({ age: { $gte: 18 } });`,
      explanation: "Mongoose queries map closely to MongoDB queries.",
    },
  },

  {
    id: 159,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Updating Documents",
    type: "code",
    content: {
      title: "Update Operations",
      keyPoints: [
        "updateOne, findByIdAndUpdate",
        "Use $set",
        "Validation optional",
      ],
      code: `await User.findByIdAndUpdate(
  userId,
  { age: 30 },
  { runValidators: true }
);`,
      explanation:
        "runValidators ensures schema rules are enforced on updates.",
    },
  },

  {
    id: 160,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Deleting Documents",
    type: "code",
    content: {
      title: "Delete Operations",
      keyPoints: [
        "deleteOne, findByIdAndDelete",
        "Permanent removal",
        "Soft deletes recommended in prod",
      ],
      code: `await User.findByIdAndDelete(userId);`,
      explanation:
        "Deletes remove documents permanently unless soft-delete is implemented.",
    },
  },

  {
    id: 161,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Schema Validation",
    type: "two-column",
    content: {
      left: {
        title: "Built-in Validators",
        items: ["required", "min / max", "enum", "match (regex)"],
      },
      right: {
        title: "Why Validation Matters",
        items: [
          "Protects database integrity",
          "Catches bugs early",
          "Consistent data",
          "Cleaner APIs",
        ],
      },
    },
  },

  {
    id: 162,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Middleware (Hooks)",
    type: "two-column",
    content: {
      left: {
        title: "What Is Middleware?",
        items: [
          "Functions that run before/after actions",
          "pre and post hooks",
          "Encapsulate logic",
          "Cross-cutting concerns",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Password hashing",
          "Audit logging",
          "Data normalization",
          "Cleanup logic",
        ],
      },
    },
  },

  {
    id: 163,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Middleware Example",
    type: "code",
    content: {
      title: "pre('save') Hook",
      keyPoints: [
        "Runs before save",
        "Modify data safely",
        "Common for hashing",
      ],
      code: `userSchema.pre("save", function (next) {
  this.email = this.email.toLowerCase();
  next();
});`,
      explanation: "Middleware runs automatically during model operations.",
    },
  },

  {
    id: 164,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Mongoose vs Native Driver (Revisited)",
    type: "two-column",
    content: {
      left: {
        title: "Mongoose Strengths",
        items: [
          "Developer productivity",
          "Strong schemas",
          "Middleware support",
          "Validation built-in",
        ],
      },
      right: {
        title: "Native Driver Strengths",
        items: [
          "Full MongoDB feature set",
          "Lower overhead",
          "Advanced aggregation",
          "Fine-grained control",
        ],
      },
    },
  },

  {
    id: 165,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "Common Mongoose Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Overusing schemas",
          "Ignoring indexes",
          "Not handling async errors",
          "Leaking business logic",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Design schemas carefully",
          "Define indexes explicitly",
          "Centralize error handling",
          "Keep models focused",
        ],
      },
    },
  },

  {
    id: 166,
    moduleId: 13,
    moduleTitle: "Mongoose ODM – Schemas, Models & Middleware",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Performance tuning with Mongoose",
          "Indexes and lean queries",
          "Population",
          "Production patterns",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You use Mongoose confidently",
          "You define schemas and models",
          "You apply middleware",
          "Ready for optimization",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 14: Mongoose Performance, Population & Production Patterns
  // =========================

  {
    id: 167,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Why Performance Matters with Mongoose",
    type: "two-column",
    content: {
      left: {
        title: "Hidden Costs",
        items: [
          "Document hydration overhead",
          "Unnecessary middleware execution",
          "Inefficient queries",
          "Memory pressure",
        ],
      },
      right: {
        title: "Optimization Goals",
        items: [
          "Faster response times",
          "Lower memory usage",
          "Predictable performance",
          "Production stability",
        ],
      },
    },
  },

  {
    id: 168,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Understanding Document Hydration",
    type: "two-column",
    content: {
      left: {
        title: "What Is Hydration?",
        items: [
          "Conversion to Mongoose documents",
          "Adds methods and getters",
          "Extra processing cost",
          "Default behavior",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Higher CPU usage",
          "More memory allocation",
          "Slower large queries",
          "Often unnecessary",
        ],
      },
    },
  },

  {
    id: 169,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Using lean() Queries",
    type: "code",
    content: {
      title: "lean() Optimization",
      keyPoints: [
        "Returns plain JavaScript objects",
        "Skips document hydration",
        "Much faster for read-heavy APIs",
      ],
      code: `const users = await User.find({ isActive: true }).lean();`,
      explanation:
        "lean() dramatically improves performance for read-only queries.",
    },
  },

  {
    id: 170,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Indexing with Mongoose",
    type: "two-column",
    content: {
      left: {
        title: "Defining Indexes",
        items: [
          "Indexes defined at schema level",
          "Sync with MongoDB indexes",
          "Critical for query performance",
          "Explicit is better",
        ],
      },
      right: {
        title: "Index Types",
        items: [
          "Single-field indexes",
          "Compound indexes",
          "Unique indexes",
          "Text indexes",
        ],
      },
    },
  },

  {
    id: 171,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Index Definition Example",
    type: "code",
    content: {
      title: "Schema Indexes",
      keyPoints: [
        "Indexes defined once",
        "Applied automatically",
        "Align with query patterns",
      ],
      code: `userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ createdAt: -1 });`,
      explanation: "Indexes should reflect how the application queries data.",
    },
  },

  {
    id: 172,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Population Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Is populate()?",
        items: [
          "Simulates joins",
          "Fetches referenced documents",
          "Convenience feature",
          "Application-level operation",
        ],
      },
      right: {
        title: "Important Reality",
        items: [
          "Not a database join",
          "Multiple queries under the hood",
          "Performance cost",
          "Use carefully",
        ],
      },
    },
  },

  {
    id: 173,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Population Example",
    type: "code",
    content: {
      title: "Using populate()",
      keyPoints: [
        "Reference via ObjectId",
        "Populate replaces id with document",
        "Readable API",
      ],
      code: `const orders = await Order.find()
  .populate("userId");`,
      explanation: "populate fetches user documents for each order.",
    },
  },

  {
    id: 174,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "When to Avoid Population",
    type: "two-column",
    content: {
      left: {
        title: "Warning Signs",
        items: [
          "Large result sets",
          "Deeply nested populate",
          "High-traffic endpoints",
          "Performance bottlenecks",
        ],
      },
      right: {
        title: "Better Alternatives",
        items: [
          "Manual aggregation ($lookup)",
          "Embedding data",
          "Denormalization",
          "Caching",
        ],
      },
    },
  },

  {
    id: 175,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Pagination Strategies",
    type: "two-column",
    content: {
      left: {
        title: "Offset Pagination",
        items: [
          "Uses skip and limit",
          "Simple to implement",
          "Poor performance at scale",
          "Not index-friendly",
        ],
      },
      right: {
        title: "Cursor Pagination",
        items: [
          "Uses last seen value",
          "Highly performant",
          "Index-friendly",
          "Production standard",
        ],
      },
    },
  },

  {
    id: 176,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Cursor Pagination Example",
    type: "code",
    content: {
      title: "Cursor-Based Pagination",
      keyPoints: ["Uses indexed field", "Avoids skip", "Scales well"],
      code: `const users = await User.find({
  _id: { $gt: lastId }
})
.sort({ _id: 1 })
.limit(20)
.lean();`,
      explanation: "Cursor pagination is efficient for large datasets.",
    },
  },

  {
    id: 177,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Connection Management",
    type: "two-column",
    content: {
      left: {
        title: "Bad Practices",
        items: [
          "Opening multiple connections",
          "Connecting per request",
          "No graceful shutdown",
          "Unhandled errors",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Single shared connection",
          "Connection pooling",
          "Handle SIGTERM",
          "Graceful shutdown",
        ],
      },
    },
  },

  {
    id: 178,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Production Readiness Checklist",
    type: "two-column",
    content: {
      left: {
        title: "Before Deployment",
        items: [
          "Indexes reviewed",
          "lean() applied",
          "Population audited",
          "Error handling in place",
        ],
      },
      right: {
        title: "Ongoing",
        items: [
          "Monitor query performance",
          "Review slow queries",
          "Audit indexes",
          "Capacity planning",
        ],
      },
    },
  },

  {
    id: 179,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "Common Performance Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using populate everywhere",
          "Skipping indexes",
          "Returning full documents",
          "Ignoring query patterns",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Measure and profile",
          "Design schemas intentionally",
          "Use lean and projection",
          "Optimize incrementally",
        ],
      },
    },
  },

  {
    id: 180,
    moduleId: 14,
    moduleTitle: "Mongoose Performance, Population & Production Patterns",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Backup and restore",
          "Monitoring and observability",
          "MongoDB Atlas tools",
          "Operational excellence",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You optimize Mongoose apps",
          "You avoid performance traps",
          "You design scalable APIs",
          "Ready for operations",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 15: Backup, Restore & Monitoring (Operations)
  // =========================

  {
    id: 181,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Why Operations Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Operations",
        items: [
          "Data loss",
          "Blind production failures",
          "Slow incident response",
          "Business downtime",
        ],
      },
      right: {
        title: "With Proper Ops",
        items: [
          "Disaster recovery",
          "System visibility",
          "Predictable performance",
          "Operational confidence",
        ],
      },
    },
  },

  {
    id: 182,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Backup Strategies",
    type: "two-column",
    content: {
      left: {
        title: "Common Approaches",
        items: [
          "Logical backups",
          "Physical backups",
          "Snapshots",
          "Continuous backups",
        ],
      },
      right: {
        title: "Choosing a Strategy",
        items: [
          "Data size",
          "Recovery time objective (RTO)",
          "Recovery point objective (RPO)",
          "Operational complexity",
        ],
      },
    },
  },

  {
    id: 183,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Logical Backups (mongodump)",
    type: "code",
    content: {
      title: "Using mongodump",
      keyPoints: [
        "Exports BSON data",
        "Collection or database level",
        "Portable backups",
      ],
      code: `mongodump --db myAppDb --out ./backup`,
      explanation: "mongodump creates a logical backup of MongoDB data.",
    },
  },

  {
    id: 184,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Restoring Data (mongorestore)",
    type: "code",
    content: {
      title: "Using mongorestore",
      keyPoints: [
        "Restores from BSON dumps",
        "Can target specific DB",
        "Supports overwrite",
      ],
      code: `mongorestore --db myAppDb ./backup/myAppDb`,
      explanation: "mongorestore restores data from a logical backup.",
    },
  },

  {
    id: 185,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Atlas Backups",
    type: "two-column",
    content: {
      left: {
        title: "Atlas Features",
        items: [
          "Automated snapshots",
          "Point-in-time recovery",
          "Cross-region backups",
          "Managed retention",
        ],
      },
      right: {
        title: "Why Use Atlas",
        items: [
          "Zero setup",
          "Production-grade",
          "Compliance support",
          "Reduced ops burden",
        ],
      },
    },
  },

  {
    id: 186,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Monitoring MongoDB",
    type: "two-column",
    content: {
      left: {
        title: "What to Monitor",
        items: [
          "CPU and memory",
          "Disk usage",
          "Replication lag",
          "Query performance",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Early problem detection",
          "Capacity planning",
          "Performance tuning",
          "Incident prevention",
        ],
      },
    },
  },

  {
    id: 187,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "MongoDB Monitoring Tools",
    type: "two-column",
    content: {
      left: {
        title: "Native Tools",
        items: [
          "mongostat",
          "mongotop",
          "db.serverStatus()",
          "Atlas monitoring",
        ],
      },
      right: {
        title: "External Tools",
        items: ["Prometheus", "Grafana", "Datadog", "New Relic"],
      },
    },
  },

  {
    id: 188,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Understanding Slow Queries",
    type: "two-column",
    content: {
      left: {
        title: "Causes",
        items: [
          "Missing indexes",
          "Inefficient queries",
          "Large result sets",
          "Resource contention",
        ],
      },
      right: {
        title: "Detection",
        items: [
          "Slow query logs",
          "Explain plans",
          "Monitoring dashboards",
          "Latency alerts",
        ],
      },
    },
  },

  {
    id: 189,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Setting Performance Alerts",
    type: "two-column",
    content: {
      left: {
        title: "Key Alerts",
        items: [
          "High CPU usage",
          "Low disk space",
          "Replication lag",
          "Connection spikes",
        ],
      },
      right: {
        title: "Alerting Best Practices",
        items: [
          "Actionable thresholds",
          "Avoid alert fatigue",
          "Clear escalation",
          "Runbooks",
        ],
      },
    },
  },

  {
    id: 190,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Disaster Recovery Planning",
    type: "two-column",
    content: {
      left: {
        title: "DR Components",
        items: [
          "Regular backups",
          "Tested restore procedures",
          "Multi-region deployment",
          "Clear ownership",
        ],
      },
      right: {
        title: "Reality Check",
        items: [
          "Backups are useless if untested",
          "Practice restores",
          "Document procedures",
          "Review periodically",
        ],
      },
    },
  },

  {
    id: 191,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "Common Operational Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "No backups",
          "Never testing restores",
          "No monitoring",
          "Reactive ops",
        ],
      },
      right: {
        title: "How to Avoid Them",
        items: [
          "Automate backups",
          "Schedule restore tests",
          "Monitor proactively",
          "Prepare runbooks",
        ],
      },
    },
  },

  {
    id: 192,
    moduleId: 15,
    moduleTitle: "Backup, Restore & Monitoring",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "MongoDB best practices",
          "Anti-patterns",
          "Real-world lessons",
          "Capstone project",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You protect data",
          "You monitor MongoDB",
          "You plan for failures",
          "Ready for final synthesis",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 16: Best Practices, Anti-Patterns & Real-World Design
  // =========================

  {
    id: 193,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Why Best Practices Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Best Practices",
        items: [
          "Unpredictable performance",
          "Scaling problems",
          "Security gaps",
          "High maintenance cost",
        ],
      },
      right: {
        title: "With Best Practices",
        items: [
          "Stable systems",
          "Scalable architecture",
          "Operational confidence",
          "Clean team handover",
        ],
      },
    },
  },

  {
    id: 194,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Core MongoDB Best Practices",
    type: "two-column",
    content: {
      left: {
        title: "Design Principles",
        items: [
          "Design for query patterns",
          "Prefer embedding when possible",
          "Index intentionally",
          "Keep documents small",
        ],
      },
      right: {
        title: "Operational Principles",
        items: [
          "Use replica sets always",
          "Monitor continuously",
          "Automate backups",
          "Test failure scenarios",
        ],
      },
    },
  },

  {
    id: 195,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Schema Design Do’s",
    type: "two-column",
    content: {
      left: {
        title: "Do This",
        items: [
          "Model data around reads",
          "Cap growing arrays",
          "Use schema validation",
          "Plan indexes early",
        ],
      },
      right: {
        title: "Why It Works",
        items: [
          "Fast queries",
          "Predictable growth",
          "Data consistency",
          "Easier refactoring",
        ],
      },
    },
  },

  {
    id: 196,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Schema Design Anti-Patterns",
    type: "two-column",
    content: {
      left: {
        title: "Anti-Patterns",
        items: [
          "Modeling like SQL",
          "Unbounded embedded arrays",
          "Over-normalization",
          "No schema rules",
        ],
      },
      right: {
        title: "Consequences",
        items: [
          "Slow queries",
          "Document size explosions",
          "Complex application logic",
          "Data corruption",
        ],
      },
    },
  },

  {
    id: 197,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Indexing Best Practices",
    type: "two-column",
    content: {
      left: {
        title: "Good Index Habits",
        items: [
          "Index query filters",
          "Index sort fields",
          "Review index usage",
          "Remove unused indexes",
        ],
      },
      right: {
        title: "What to Avoid",
        items: [
          "Indexing everything",
          "Ignoring write cost",
          "Wrong compound order",
          "Never checking explain()",
        ],
      },
    },
  },

  {
    id: 198,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Application Integration Pitfalls",
    type: "two-column",
    content: {
      left: {
        title: "Common Pitfalls",
        items: [
          "New DB connection per request",
          "No input validation",
          "Returning raw documents",
          "Ignoring pagination",
        ],
      },
      right: {
        title: "Correct Approach",
        items: [
          "Reuse connections",
          "Validate and sanitize input",
          "Use projection",
          "Paginate large results",
        ],
      },
    },
  },

  {
    id: 199,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Production Security Lessons",
    type: "two-column",
    content: {
      left: {
        title: "Security Failures",
        items: [
          "Publicly exposed databases",
          "Using admin in apps",
          "Weak credentials",
          "No TLS",
        ],
      },
      right: {
        title: "Security Discipline",
        items: [
          "Enable auth always",
          "Least privilege roles",
          "Network isolation",
          "Rotate secrets",
        ],
      },
    },
  },

  {
    id: 200,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Scaling Lessons from Production",
    type: "two-column",
    content: {
      left: {
        title: "What Breaks at Scale",
        items: [
          "Offset pagination",
          "Hot shard keys",
          "Large documents",
          "Unindexed queries",
        ],
      },
      right: {
        title: "What Scales Well",
        items: [
          "Cursor pagination",
          "Even shard keys",
          "Lean documents",
          "Targeted queries",
        ],
      },
    },
  },

  {
    id: 201,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Decision Framework: MongoDB or Not?",
    type: "two-column",
    content: {
      left: {
        title: "Good Fit",
        items: [
          "Document-centric data",
          "Flexible schemas",
          "Read-heavy workloads",
          "Rapid iteration",
        ],
      },
      right: {
        title: "Poor Fit",
        items: [
          "Heavy joins",
          "Strict relational integrity",
          "Complex transactions everywhere",
          "Reporting-heavy SQL needs",
        ],
      },
    },
  },

  {
    id: 202,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "Pre-Production Checklist",
    type: "two-column",
    content: {
      left: {
        title: "Technical Checks",
        items: [
          "Indexes verified",
          "Schema validated",
          "Backups tested",
          "Monitoring active",
        ],
      },
      right: {
        title: "Operational Checks",
        items: [
          "Failover tested",
          "Access reviewed",
          "Runbooks prepared",
          "Alerts configured",
        ],
      },
    },
  },

  {
    id: 203,
    moduleId: 16,
    moduleTitle: "Best Practices, Anti-Patterns & Real-World Design",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Final Module",
        items: [
          "Capstone project",
          "End-to-end system",
          "Architecture review",
          "Production mindset",
        ],
      },
      right: {
        title: "Your Progress",
        items: [
          "You design robust systems",
          "You avoid common traps",
          "You think like a production engineer",
          "Ready to build end-to-end",
        ],
      },
    },
  },
  // =========================
  // MongoDB Module 17: Capstone Project – Production-Ready MongoDB API
  // =========================

  {
    id: 204,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Capstone Overview",
    type: "two-column",
    content: {
      left: {
        title: "What You Will Build",
        items: [
          "A real-world REST API",
          "MongoDB-backed system",
          "Production-grade architecture",
          "End-to-end data flow",
        ],
      },
      right: {
        title: "Skills Validated",
        items: [
          "Schema design",
          "Indexing and performance",
          "Security and roles",
          "Operational readiness",
        ],
      },
    },
  },

  {
    id: 205,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Project Scenario",
    type: "two-column",
    content: {
      left: {
        title: "Business Context",
        items: [
          "User management system",
          "Orders and transactions",
          "Role-based access",
          "Audit and reporting",
        ],
      },
      right: {
        title: "Realism",
        items: [
          "Common SaaS pattern",
          "Scales horizontally",
          "Security-sensitive",
          "Industry-aligned use case",
        ],
      },
    },
  },

  {
    id: 206,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "System Requirements",
    type: "two-column",
    content: {
      left: {
        title: "Functional Requirements",
        items: [
          "Create and manage users",
          "Create and manage orders",
          "Role-based permissions",
          "Paginated APIs",
        ],
      },
      right: {
        title: "Non-Functional Requirements",
        items: [
          "Secure authentication",
          "High availability",
          "Scalable design",
          "Monitoring enabled",
        ],
      },
    },
  },

  {
    id: 207,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Data Model Design",
    type: "two-column",
    content: {
      left: {
        title: "Core Collections",
        items: ["users", "orders", "roles", "auditLogs"],
      },
      right: {
        title: "Design Choices",
        items: [
          "Embedded role permissions",
          "Referenced orders",
          "Indexed access paths",
          "Validated schemas",
        ],
      },
    },
  },

  {
    id: 208,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "User Schema",
    type: "code",
    content: {
      title: "users Collection",
      keyPoints: ["Unique email", "Role-based access", "Timestamps enabled"],
      code: `const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" }
}, { timestamps: true });`,
      explanation: "Users are modeled for authentication and authorization.",
    },
  },

  {
    id: 209,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Order Schema",
    type: "code",
    content: {
      title: "orders Collection",
      keyPoints: [
        "References user",
        "Indexed for queries",
        "Transaction-safe updates",
      ],
      code: `const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "paid"], index: true }
}, { timestamps: true });`,
      explanation: "Orders are referenced to users for scalable growth.",
    },
  },

  {
    id: 210,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Indexes Strategy",
    type: "two-column",
    content: {
      left: {
        title: "Indexes Defined",
        items: [
          "users.email (unique)",
          "orders.userId",
          "orders.status + createdAt",
          "auditLogs.createdAt",
        ],
      },
      right: {
        title: "Why These Indexes",
        items: [
          "Fast login",
          "User-based queries",
          "Reporting and analytics",
          "Time-based pagination",
        ],
      },
    },
  },

  {
    id: 211,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Authentication Flow",
    type: "two-column",
    content: {
      left: {
        title: "Login Flow",
        items: [
          "User submits credentials",
          "Password hash verification",
          "JWT issued",
          "Role embedded in token",
        ],
      },
      right: {
        title: "Security Measures",
        items: [
          "Hashed passwords",
          "Token expiration",
          "Least privilege",
          "Protected routes",
        ],
      },
    },
  },

  {
    id: 212,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Transaction Use Case",
    type: "code",
    content: {
      title: "Order Payment Transaction",
      keyPoints: [
        "Atomic balance update",
        "Order status change",
        "Rollback on failure",
      ],
      code: `const session = await mongoose.startSession();

await session.withTransaction(async () => {
  await Order.updateOne(
    { _id: orderId },
    { status: "paid" },
    { session }
  );

  await AuditLog.create([{
    action: "ORDER_PAID",
    orderId
  }], { session });
});`,
      explanation:
        "Transactions ensure business consistency across collections.",
    },
  },

  {
    id: 213,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Pagination Strategy",
    type: "two-column",
    content: {
      left: {
        title: "Chosen Approach",
        items: [
          "Cursor-based pagination",
          "Indexed _id field",
          "Consistent ordering",
          "High performance",
        ],
      },
      right: {
        title: "Why Not Offset",
        items: [
          "Poor performance",
          "Inconsistent pages",
          "Scales badly",
          "Avoided in production",
        ],
      },
    },
  },

  {
    id: 214,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Operational Setup",
    type: "two-column",
    content: {
      left: {
        title: "Deployment",
        items: [
          "Replica set enabled",
          "Backups configured",
          "Monitoring active",
          "Alerts defined",
        ],
      },
      right: {
        title: "Security",
        items: [
          "Auth enabled",
          "App-specific users",
          "Network isolation",
          "TLS enforced",
        ],
      },
    },
  },

  {
    id: 215,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Evaluation Checklist",
    type: "two-column",
    content: {
      left: {
        title: "Technical Review",
        items: [
          "Schema correctness",
          "Index effectiveness",
          "Query performance",
          "Transaction safety",
        ],
      },
      right: {
        title: "Production Review",
        items: [
          "Security posture",
          "Scalability",
          "Observability",
          "Failure handling",
        ],
      },
    },
  },

  {
    id: 216,
    moduleId: 17,
    moduleTitle: "Capstone Project – Production-Ready MongoDB API",
    title: "Course Completion",
    type: "two-column",
    content: {
      left: {
        title: "You Can Now",
        items: [
          "Design MongoDB schemas",
          "Build production APIs",
          "Scale and secure systems",
          "Operate MongoDB confidently",
        ],
      },
      right: {
        title: "Next Logical Paths",
        items: [
          "Advanced MongoDB internals",
          "Cloud-native architectures",
          "Data engineering pipelines",
          "System design interviews",
        ],
      },
    },
  },
];
