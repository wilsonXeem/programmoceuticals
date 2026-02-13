export const sqlSlidesData = [
  {
    id: 0,
    moduleId: 1,
    moduleTitle: "Module 1: SQL Database Fundamentals",
    title: "SQL Database Fundamentals",
    type: "title",
    content: {
      title: "🗄️ SQL Database Mastery",
      subtitle: "Master database queries and data manipulation with SQL",
      description:
        "Learn SELECT statements, JOINs, database design, stored procedures, and advanced SQL techniques for data analysis",
    },
    codeExample: "",
    language: "sql",
  }, // =========================
  // SQL Module 1: Introduction to Databases & SQL
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "What Is a Database?",
    type: "two-column",
    content: {
      left: {
        title: "Database Defined",
        items: [
          "Organized collection of data",
          "Stored electronically",
          "Structured for easy access",
          "Used by applications",
        ],
      },
      right: {
        title: "Why Databases Matter",
        items: [
          "Handle large data",
          "Fast retrieval",
          "Data consistency",
          "Multi-user access",
        ],
      },
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "Real-World Examples of Databases",
    type: "two-column",
    content: {
      left: {
        title: "Everyday Systems",
        items: [
          "Banking systems",
          "Hospital records",
          "School portals",
          "E-commerce platforms",
        ],
      },
      right: {
        title: "What They Store",
        items: ["User data", "Transactions", "Inventory", "Logs & history"],
      },
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "What Is SQL?",
    type: "two-column",
    content: {
      left: {
        title: "SQL Defined",
        items: [
          "Structured Query Language",
          "Used to talk to databases",
          "Standardized language",
          "Declarative (what, not how)",
        ],
      },
      right: {
        title: "What SQL Can Do",
        items: [
          "Retrieve data",
          "Insert new records",
          "Update existing data",
          "Delete data safely",
        ],
      },
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "SQL vs Excel",
    type: "two-column",
    content: {
      left: {
        title: "Excel",
        items: [
          "File-based",
          "Manual limits",
          "Single-user focus",
          "Best for analysis",
        ],
      },
      right: {
        title: "SQL Databases",
        items: [
          "Server-based",
          "Handles millions of rows",
          "Multi-user access",
          "Best for storage & retrieval",
        ],
      },
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "Types of Databases",
    type: "two-column",
    content: {
      left: {
        title: "Relational Databases",
        items: [
          "Data in tables",
          "Rows & columns",
          "Relationships between tables",
          "Uses SQL",
        ],
      },
      right: {
        title: "Examples",
        items: ["MySQL", "PostgreSQL", "SQL Server", "Oracle"],
      },
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "Tables, Rows & Columns",
    type: "two-column",
    content: {
      left: {
        title: "Table Structure",
        items: [
          "Table = spreadsheet",
          "Row = record",
          "Column = field",
          "Schema defines structure",
        ],
      },
      right: {
        title: "Example Table",
        items: [
          "users",
          "id, name, email",
          "One row per user",
          "Consistent format",
        ],
      },
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "Primary Keys (Concept)",
    type: "two-column",
    content: {
      left: {
        title: "What Is a Primary Key?",
        items: [
          "Uniquely identifies a row",
          "No duplicates",
          "Cannot be null",
          "Usually an ID",
        ],
      },
      right: {
        title: "Why It Matters",
        items: [
          "Data integrity",
          "Fast lookups",
          "Relationships",
          "Reliable references",
        ],
      },
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "What You Need to Learn SQL",
    type: "two-column",
    content: {
      left: {
        title: "Requirements",
        items: [
          "Basic computer skills",
          "Logical thinking",
          "Comfort with tables",
          "Curiosity",
        ],
      },
      right: {
        title: "What You Do NOT Need",
        items: [
          "Advanced math",
          "Prior programming",
          "Complex tools",
          "Database admin skills",
        ],
      },
    },
  },

  {
    id: 9,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "How This Course Is Structured",
    type: "two-column",
    content: {
      left: {
        title: "Learning Path",
        items: [
          "SQL fundamentals",
          "Querying data",
          "Joins & relationships",
          "Real-world use cases",
        ],
      },
      right: {
        title: "Outcome",
        items: [
          "Write SQL confidently",
          "Query real databases",
          "Support applications",
          "Job-ready foundation",
        ],
      },
    },
  },

  {
    id: 10,
    moduleId: 1,
    moduleTitle: "Introduction to Databases & SQL",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "SELECT statements",
          "Querying data",
          "Filtering results",
          "Your first SQL queries",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Database concepts understood",
          "SQL purpose clear",
          "Ready to write queries",
          "Foundation set",
        ],
      },
    },
  },
  // =========================
  // SQL Module 2: SELECT Statements & Basic Queries
  // =========================

  {
    id: 11,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "Your First SQL Query",
    type: "two-column",
    content: {
      left: {
        title: "SELECT Statement",
        items: [
          "Used to retrieve data",
          "Read-only operation",
          "Most common SQL command",
          "Foundation of all queries",
        ],
      },
      right: {
        title: "Plain English Meaning",
        items: [
          "Ask the database for data",
          "Specify what you want",
          "Database decides how",
          "Results returned as a table",
        ],
      },
    },
  },

  {
    id: 12,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "Basic SELECT Syntax",
    type: "code",
    content: {
      description: "Selecting all columns from a table.",
      code: `SELECT * 
FROM users;`,
    },
  },

  {
    id: 13,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "Selecting Specific Columns",
    type: "two-column",
    content: {
      left: {
        title: "Why Select Specific Columns?",
        items: [
          "Better performance",
          "Clearer results",
          "Less data transfer",
          "Professional practice",
        ],
      },
      right: {
        title: "Example Columns",
        items: ["id", "name", "email", "created_at"],
      },
    },
  },

  {
    id: 14,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "SELECT Specific Columns Example",
    type: "code",
    content: {
      description: "Retrieving only needed fields.",
      code: `SELECT id, name, email
FROM users;`,
    },
  },

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "Understanding SELECT *",
    type: "two-column",
    content: {
      left: {
        title: "SELECT * Pros",
        items: [
          "Quick exploration",
          "Easy for beginners",
          "Shows table structure",
          "Good for testing",
        ],
      },
      right: {
        title: "SELECT * Cons",
        items: [
          "Unnecessary data",
          "Slower queries",
          "Harder to read",
          "Bad for production",
        ],
      },
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "Using WHERE to Filter Data",
    type: "two-column",
    content: {
      left: {
        title: "WHERE Clause",
        items: [
          "Filters rows",
          "Applies conditions",
          "Reduces result set",
          "Very powerful",
        ],
      },
      right: {
        title: "Common Conditions",
        items: ["=", "> / <", ">=", "<>", "LIKE"],
      },
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "WHERE Clause Example",
    type: "code",
    content: {
      description: "Filtering records.",
      code: `SELECT name, email
FROM users
WHERE active = true;`,
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "Filtering Text Values",
    type: "two-column",
    content: {
      left: {
        title: "Text Filtering Rules",
        items: [
          "Use single quotes",
          "Case sensitivity depends on DB",
          "Exact match by default",
          "LIKE for patterns",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "country = 'Nigeria'",
          "status = 'active'",
          "role = 'admin'",
          "name LIKE 'A%'",
        ],
      },
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "Using LIKE for Pattern Matching",
    type: "two-column",
    content: {
      left: {
        title: "LIKE Wildcards",
        items: [
          "% → any characters",
          "_ → single character",
          "Flexible text search",
          "Case rules vary",
        ],
      },
      right: {
        title: "Common Patterns",
        items: [
          "'A%' → starts with A",
          "'%son' → ends with son",
          "'%ann%' → contains ann",
          "'_a%' → second letter a",
        ],
      },
    },
  },

  {
    id: 20,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "LIKE Example",
    type: "code",
    content: {
      description: "Pattern-based filtering.",
      code: `SELECT name
FROM users
WHERE name LIKE 'J%';`,
    },
  },

  {
    id: 21,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "Sorting Results with ORDER BY",
    type: "two-column",
    content: {
      left: {
        title: "ORDER BY Clause",
        items: [
          "Sorts result set",
          "Ascending by default",
          "DESC for descending",
          "Applies after WHERE",
        ],
      },
      right: {
        title: "Common Uses",
        items: [
          "Latest records",
          "Top scores",
          "Alphabetical lists",
          "Ranked outputs",
        ],
      },
    },
  },

  {
    id: 22,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "ORDER BY Example",
    type: "code",
    content: {
      description: "Sorting query results.",
      code: `SELECT name, created_at
FROM users
ORDER BY created_at DESC;`,
    },
  },

  {
    id: 23,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "LIMIT & OFFSET",
    type: "two-column",
    content: {
      left: {
        title: "LIMIT",
        items: [
          "Restricts number of rows",
          "Used for pagination",
          "Improves performance",
          "Top-N queries",
        ],
      },
      right: {
        title: "OFFSET",
        items: [
          "Skips rows",
          "Works with LIMIT",
          "Paging results",
          "Controlled retrieval",
        ],
      },
    },
  },

  {
    id: 24,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "LIMIT & OFFSET Example",
    type: "code",
    content: {
      description: "Paginating results.",
      code: `SELECT id, name
FROM users
ORDER BY id
LIMIT 10 OFFSET 20;`,
    },
  },

  {
    id: 25,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using SELECT * everywhere",
          "Forgetting WHERE clause",
          "Wrong quotes for text",
          "Unsorted result assumptions",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Select only needed columns",
          "Filter intentionally",
          "Use quotes correctly",
          "Always define order when needed",
        ],
      },
    },
  },

  {
    id: 26,
    moduleId: 2,
    moduleTitle: "SELECT Statements & Basic Queries",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Aggregate functions",
          "COUNT, SUM, AVG",
          "GROUP BY",
          "Data summarization",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "SELECT mastered",
          "Filtering understood",
          "Sorting applied",
          "Ready for aggregation",
        ],
      },
    },
  },
  // =========================
  // SQL Module 3: Aggregate Functions & GROUP BY
  // =========================

  {
    id: 27,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "Why Aggregation Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Aggregation",
        items: [
          "Too many raw rows",
          "Hard to summarize data",
          "Manual calculations",
          "Poor decision support",
        ],
      },
      right: {
        title: "With Aggregation",
        items: [
          "Summarized insights",
          "Trend identification",
          "Business-ready metrics",
          "Efficient analysis",
        ],
      },
    },
  },

  {
    id: 28,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "What Are Aggregate Functions?",
    type: "two-column",
    content: {
      left: {
        title: "Aggregate Defined",
        items: [
          "Operate on many rows",
          "Return a single value",
          "Used for summaries",
          "Very common in reports",
        ],
      },
      right: {
        title: "Common Aggregates",
        items: ["COUNT", "SUM", "AVG", "MIN / MAX"],
      },
    },
  },

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "COUNT Function",
    type: "two-column",
    content: {
      left: {
        title: "COUNT Variants",
        items: [
          "COUNT(*) → all rows",
          "COUNT(column) → non-NULL",
          "Counts records",
          "Used everywhere",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "Number of users",
          "Orders per customer",
          "Daily signups",
          "Inventory size",
        ],
      },
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "COUNT Example",
    type: "code",
    content: {
      description: "Counting rows.",
      code: `SELECT COUNT(*) AS total_users
FROM users;`,
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "SUM Function",
    type: "two-column",
    content: {
      left: {
        title: "What SUM Does",
        items: [
          "Adds numeric values",
          "Ignores NULLs",
          "Requires numeric column",
          "Financial staple",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "Total sales",
          "Revenue per month",
          "Total quantity sold",
          "Budget analysis",
        ],
      },
    },
  },

  {
    id: 32,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "SUM Example",
    type: "code",
    content: {
      description: "Summing values.",
      code: `SELECT SUM(amount) AS total_revenue
FROM orders;`,
    },
  },

  {
    id: 33,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "AVG Function",
    type: "two-column",
    content: {
      left: {
        title: "What AVG Does",
        items: [
          "Calculates mean value",
          "Ignores NULLs",
          "Numeric columns only",
          "Performance metrics",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "Average order value",
          "Mean score",
          "Typical transaction size",
          "Trend comparison",
        ],
      },
    },
  },

  {
    id: 34,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "AVG Example",
    type: "code",
    content: {
      description: "Calculating averages.",
      code: `SELECT AVG(amount) AS avg_order_value
FROM orders;`,
    },
  },

  {
    id: 35,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "MIN & MAX Functions",
    type: "two-column",
    content: {
      left: {
        title: "MIN / MAX",
        items: [
          "Find smallest / largest value",
          "Work on numbers & dates",
          "Ignore NULLs",
          "Quick extremes",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "First order date",
          "Highest score",
          "Lowest price",
          "Range checks",
        ],
      },
    },
  },

  {
    id: 36,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "MIN & MAX Example",
    type: "code",
    content: {
      description: "Finding extremes.",
      code: `SELECT MIN(created_at) AS first_signup,
       MAX(created_at) AS latest_signup
FROM users;`,
    },
  },

  {
    id: 37,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "Introducing GROUP BY",
    type: "two-column",
    content: {
      left: {
        title: "What GROUP BY Does",
        items: [
          "Groups rows by column",
          "Applies aggregates per group",
          "Creates summaries",
          "Core SQL concept",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Summarize per category",
          "One result per group",
          "Collapses rows",
          "Business reporting",
        ],
      },
    },
  },

  {
    id: 38,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "GROUP BY Example",
    type: "code",
    content: {
      description: "Sales per customer.",
      code: `SELECT customer_id, SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id;`,
    },
  },

  {
    id: 39,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "GROUP BY Rules",
    type: "two-column",
    content: {
      left: {
        title: "Rules to Remember",
        items: [
          "All non-aggregates must be grouped",
          "GROUP BY comes after WHERE",
          "Aliases not allowed in GROUP BY",
          "Order matters",
        ],
      },
      right: {
        title: "Why Rules Exist",
        items: [
          "Prevent ambiguity",
          "Ensure consistency",
          "Clear query logic",
          "Predictable results",
        ],
      },
    },
  },

  {
    id: 40,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Forgetting GROUP BY",
          "Mixing aggregates & raw columns",
          "Grouping unnecessary columns",
          "Misreading results",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Group intentionally",
          "Check business meaning",
          "Keep groups minimal",
          "Validate totals",
        ],
      },
    },
  },

  {
    id: 41,
    moduleId: 3,
    moduleTitle: "Aggregate Functions & GROUP BY",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "HAVING clause",
          "Filtering grouped data",
          "Advanced aggregation",
          "Cleaner reports",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Aggregates mastered",
          "GROUP BY understood",
          "Summaries created",
          "Ready for HAVING",
        ],
      },
    },
  },
  // =========================
  // SQL Module 4: HAVING, Advanced Filtering & Aggregation Logic
  // =========================

  {
    id: 42,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "WHERE vs HAVING",
    type: "two-column",
    content: {
      left: {
        title: "WHERE Clause",
        items: [
          "Filters rows before grouping",
          "Works on raw data",
          "Cannot use aggregates",
          "Applied early",
        ],
      },
      right: {
        title: "HAVING Clause",
        items: [
          "Filters after GROUP BY",
          "Works on aggregated results",
          "Uses SUM, COUNT, AVG",
          "Applied late",
        ],
      },
    },
  },

  {
    id: 43,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "Why HAVING Is Needed",
    type: "two-column",
    content: {
      left: {
        title: "Problem Without HAVING",
        items: [
          "Cannot filter aggregated data",
          "Messy post-processing",
          "Incorrect logic",
          "Limited reporting",
        ],
      },
      right: {
        title: "What HAVING Solves",
        items: [
          "Filter group results",
          "Cleaner queries",
          "Business-ready summaries",
          "Accurate insights",
        ],
      },
    },
  },

  {
    id: 44,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "HAVING Basic Example",
    type: "code",
    content: {
      description: "Customers with total spending above a threshold.",
      code: `SELECT customer_id, SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 100000;`,
    },
  },

  {
    id: 45,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "Combining WHERE and HAVING",
    type: "two-column",
    content: {
      left: {
        title: "Correct Order",
        items: ["FROM", "WHERE", "GROUP BY", "HAVING", "ORDER BY"],
      },
      right: {
        title: "Why Order Matters",
        items: [
          "Logical flow",
          "Performance optimization",
          "Correct results",
          "Readable SQL",
        ],
      },
    },
  },

  {
    id: 46,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "WHERE + HAVING Example",
    type: "code",
    content: {
      description: "High-value customers in a specific year.",
      code: `SELECT customer_id, SUM(amount) AS total_spent
FROM orders
WHERE order_date >= '2024-01-01'
GROUP BY customer_id
HAVING SUM(amount) > 50000;`,
    },
  },

  {
    id: 47,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "Multiple Conditions in HAVING",
    type: "two-column",
    content: {
      left: {
        title: "Logical Operators",
        items: ["AND", "OR", "NOT", "Complex rules"],
      },
      right: {
        title: "Use Cases",
        items: [
          "Minimum count + total",
          "Performance thresholds",
          "Business qualification rules",
          "Compliance checks",
        ],
      },
    },
  },

  {
    id: 48,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "Multiple HAVING Conditions Example",
    type: "code",
    content: {
      description: "Active customers with many orders and high spend.",
      code: `SELECT customer_id,
       COUNT(*) AS orders_count,
       SUM(amount) AS total_spent
FROM orders
GROUP BY customer_id
HAVING COUNT(*) >= 5
   AND SUM(amount) >= 20000;`,
    },
  },

  {
    id: 49,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "Using Aliases with HAVING",
    type: "two-column",
    content: {
      left: {
        title: "Alias Rules",
        items: [
          "Some DBs allow aliases in HAVING",
          "Not portable across all engines",
          "Safer to repeat aggregate",
          "Consistency matters",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Repeat aggregate expression",
          "Avoid engine-specific behavior",
          "Prioritize clarity",
          "Write portable SQL",
        ],
      },
    },
  },

  {
    id: 50,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using WHERE instead of HAVING",
          "Filtering aggregates too early",
          "Over-grouping columns",
          "Confusing query order",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "WHERE for rows, HAVING for groups",
          "Group intentionally",
          "Read queries top-to-bottom",
          "Validate business meaning",
        ],
      },
    },
  },

  {
    id: 51,
    moduleId: 4,
    moduleTitle: "HAVING, Advanced Filtering & Aggregation Logic",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Joins",
          "Combining tables",
          "Relational queries",
          "Real-world schemas",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "HAVING mastered",
          "Advanced filtering applied",
          "Clean summary logic",
          "Ready for joins",
        ],
      },
    },
  },
  // =========================
  // SQL Module 5: JOINs (INNER, LEFT, RIGHT & FULL)
  // =========================

  {
    id: 52,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "Why JOINs Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without JOINs",
        items: [
          "Data locked in silos",
          "Duplicate tables",
          "Incomplete insights",
          "Manual reconciliation",
        ],
      },
      right: {
        title: "With JOINs",
        items: [
          "Combine related data",
          "Single source of truth",
          "Powerful reporting",
          "Real-world queries",
        ],
      },
    },
  },

  {
    id: 53,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "Relational Thinking",
    type: "two-column",
    content: {
      left: {
        title: "Core Idea",
        items: [
          "Tables are related by keys",
          "Primary key ↔ foreign key",
          "Rows match via values",
          "Relationships drive joins",
        ],
      },
      right: {
        title: "Example Tables",
        items: [
          "users(id)",
          "orders(user_id)",
          "products(id)",
          "order_items(product_id)",
        ],
      },
    },
  },

  {
    id: 54,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "INNER JOIN Explained",
    type: "two-column",
    content: {
      left: {
        title: "INNER JOIN",
        items: [
          "Returns matching rows only",
          "Excludes non-matches",
          "Most common join",
          "Default join logic",
        ],
      },
      right: {
        title: "Plain Meaning",
        items: [
          "Only rows that exist in both tables",
          "Intersection of datasets",
          "Clean, strict results",
          "Best for core reports",
        ],
      },
    },
  },

  {
    id: 55,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "INNER JOIN Example",
    type: "code",
    content: {
      description: "Users with their orders.",
      code: `SELECT u.id, u.name, o.id AS order_id, o.amount
FROM users u
INNER JOIN orders o
  ON u.id = o.user_id;`,
    },
  },

  {
    id: 56,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "LEFT JOIN Explained",
    type: "two-column",
    content: {
      left: {
        title: "LEFT JOIN",
        items: [
          "All rows from left table",
          "Matches from right if available",
          "NULLs for missing matches",
          "Keeps primary list intact",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Users with or without orders",
          "Inventory with no sales",
          "Master data completeness",
          "Gap analysis",
        ],
      },
    },
  },

  {
    id: 57,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "LEFT JOIN Example",
    type: "code",
    content: {
      description: "All users, even those without orders.",
      code: `SELECT u.id, u.name, o.id AS order_id
FROM users u
LEFT JOIN orders o
  ON u.id = o.user_id;`,
    },
  },

  {
    id: 58,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "RIGHT JOIN Explained",
    type: "two-column",
    content: {
      left: {
        title: "RIGHT JOIN",
        items: [
          "All rows from right table",
          "Matches from left if available",
          "NULLs for missing matches",
          "Mirror of LEFT JOIN",
        ],
      },
      right: {
        title: "Practical Note",
        items: [
          "Less commonly used",
          "Often replaceable with LEFT JOIN",
          "Can reduce readability",
          "Use sparingly",
        ],
      },
    },
  },

  {
    id: 59,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "RIGHT JOIN Example",
    type: "code",
    content: {
      description: "All orders, even without users (rare).",
      code: `SELECT u.name, o.id AS order_id
FROM users u
RIGHT JOIN orders o
  ON u.id = o.user_id;`,
    },
  },

  {
    id: 60,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "FULL OUTER JOIN Explained",
    type: "two-column",
    content: {
      left: {
        title: "FULL OUTER JOIN",
        items: [
          "All rows from both tables",
          "Matches where possible",
          "NULLs where no match",
          "Union of LEFT and RIGHT",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Data reconciliation",
          "Comparing datasets",
          "Audits",
          "Completeness checks",
        ],
      },
    },
  },

  {
    id: 61,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "FULL OUTER JOIN Example",
    type: "code",
    content: {
      description: "All users and all orders.",
      code: `SELECT u.id, u.name, o.id AS order_id
FROM users u
FULL OUTER JOIN orders o
  ON u.id = o.user_id;`,
    },
  },

  {
    id: 62,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "JOIN Conditions & ON Clause",
    type: "two-column",
    content: {
      left: {
        title: "ON Clause",
        items: [
          "Defines how tables relate",
          "Uses key columns",
          "Can include multiple conditions",
          "Critical for correctness",
        ],
      },
      right: {
        title: "Best Practices",
        items: [
          "Join on indexed keys",
          "Be explicit",
          "Avoid ambiguous columns",
          "Validate cardinality",
        ],
      },
    },
  },

  {
    id: 63,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Missing join condition (cartesian product)",
          "Using WHERE instead of ON",
          "Wrong join type",
          "Ambiguous column names",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Always define ON",
          "Choose join intentionally",
          "Use table aliases",
          "Test row counts",
        ],
      },
    },
  },

  {
    id: 64,
    moduleId: 5,
    moduleTitle: "JOINs (INNER, LEFT, RIGHT & FULL)",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: ["Subqueries", "CTEs", "Nested logic", "Readable SQL patterns"],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "JOIN types mastered",
          "Multi-table queries written",
          "Relational thinking developed",
          "Ready for subqueries",
        ],
      },
    },
  },
  // =========================
  // SQL Module 6: Subqueries & Common Table Expressions (CTEs)
  // =========================

  {
    id: 65,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "Why Nested Queries Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Nested Queries",
        items: [
          "Hardcoded values",
          "Repeated logic",
          "Limited flexibility",
          "Messy SQL",
        ],
      },
      right: {
        title: "With Subqueries & CTEs",
        items: [
          "Reusable logic",
          "Dynamic calculations",
          "Cleaner queries",
          "Scalable reporting",
        ],
      },
    },
  },

  {
    id: 66,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "What Is a Subquery?",
    type: "two-column",
    content: {
      left: {
        title: "Subquery Defined",
        items: [
          "Query inside another query",
          "Runs first",
          "Feeds result to outer query",
          "Nested logic",
        ],
      },
      right: {
        title: "Where Subqueries Appear",
        items: [
          "SELECT clause",
          "WHERE clause",
          "FROM clause",
          "HAVING clause",
        ],
      },
    },
  },

  {
    id: 67,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "Subquery in WHERE Clause",
    type: "code",
    content: {
      description: "Filtering using a subquery.",
      code: `SELECT name, email
FROM users
WHERE id IN (
  SELECT user_id
  FROM orders
);`,
    },
  },

  {
    id: 68,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "Subquery in SELECT Clause",
    type: "code",
    content: {
      description: "Calculating derived values.",
      code: `SELECT name,
       (SELECT COUNT(*)
        FROM orders
        WHERE orders.user_id = users.id) AS order_count
FROM users;`,
    },
  },

  {
    id: 69,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "Subquery in FROM Clause",
    type: "two-column",
    content: {
      left: {
        title: "Derived Tables",
        items: [
          "Subquery acts like a table",
          "Must have an alias",
          "Used for intermediate results",
          "Powerful but harder to read",
        ],
      },
      right: {
        title: "Example Use Case",
        items: [
          "Pre-aggregated data",
          "Complex filters",
          "Layered logic",
          "Temporary views",
        ],
      },
    },
  },

  {
    id: 70,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "FROM Subquery Example",
    type: "code",
    content: {
      description: "Using a subquery as a table.",
      code: `SELECT region, total_sales
FROM (
  SELECT region, SUM(amount) AS total_sales
  FROM orders
  GROUP BY region
) AS regional_sales;`,
    },
  },

  {
    id: 71,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "Subqueries: Pros & Cons",
    type: "two-column",
    content: {
      left: {
        title: "Pros",
        items: [
          "Expressive logic",
          "Compact queries",
          "No extra syntax",
          "Widely supported",
        ],
      },
      right: {
        title: "Cons",
        items: [
          "Hard to read",
          "Difficult to debug",
          "Repeated execution risk",
          "Poor scalability if abused",
        ],
      },
    },
  },

  {
    id: 72,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "What Is a CTE?",
    type: "two-column",
    content: {
      left: {
        title: "CTE Defined",
        items: [
          "Common Table Expression",
          "Named temporary result",
          "Defined with WITH",
          "Readable alternative to subqueries",
        ],
      },
      right: {
        title: "Why Use CTEs",
        items: [
          "Improved readability",
          "Reusable logic",
          "Step-by-step queries",
          "Easier maintenance",
        ],
      },
    },
  },

  {
    id: 73,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "Basic CTE Syntax",
    type: "code",
    content: {
      description: "Defining a CTE.",
      code: `WITH regional_sales AS (
  SELECT region, SUM(amount) AS total_sales
  FROM orders
  GROUP BY region
)
SELECT *
FROM regional_sales;`,
    },
  },

  {
    id: 74,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "CTEs vs Subqueries",
    type: "two-column",
    content: {
      left: {
        title: "Subqueries",
        items: ["Inline logic", "Less readable", "Harder to reuse", "Compact"],
      },
      right: {
        title: "CTEs",
        items: [
          "Named steps",
          "Highly readable",
          "Reusable",
          "Best for complex queries",
        ],
      },
    },
  },

  {
    id: 75,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Deeply nested subqueries",
          "Forgetting aliases",
          "Overusing CTEs for simple queries",
          "Assuming performance gains",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Prefer CTEs for clarity",
          "Name CTEs clearly",
          "Keep logic readable",
          "Test performance",
        ],
      },
    },
  },

  {
    id: 76,
    moduleId: 6,
    moduleTitle: "Subqueries & Common Table Expressions (CTEs)",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Constraints",
          "Indexes",
          "Data integrity",
          "Performance basics",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Subqueries understood",
          "CTEs mastered",
          "Readable SQL written",
          "Ready for schema design",
        ],
      },
    },
  },
  // =========================
  // SQL Module 7: Constraints, Indexes & Data Integrity
  // =========================

  {
    id: 77,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "Why Data Integrity Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Constraints",
        items: [
          "Duplicate records",
          "Invalid data entries",
          "Broken relationships",
          "Unreliable systems",
        ],
      },
      right: {
        title: "With Constraints",
        items: [
          "Clean, reliable data",
          "Enforced business rules",
          "Safer applications",
          "Trustworthy databases",
        ],
      },
    },
  },

  {
    id: 78,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "What Are Constraints?",
    type: "two-column",
    content: {
      left: {
        title: "Constraints Defined",
        items: [
          "Rules applied to columns or tables",
          "Enforced by the database engine",
          "Prevent invalid data",
          "Applied automatically",
        ],
      },
      right: {
        title: "Why They Matter",
        items: [
          "Protect data quality",
          "Reduce application bugs",
          "Enforce consistency",
          "Simplify validation logic",
        ],
      },
    },
  },

  {
    id: 79,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "PRIMARY KEY Constraint",
    type: "two-column",
    content: {
      left: {
        title: "PRIMARY KEY",
        items: [
          "Uniquely identifies each row",
          "Cannot be NULL",
          "Automatically indexed",
          "One per table",
        ],
      },
      right: {
        title: "Typical Usage",
        items: [
          "User IDs",
          "Order IDs",
          "Transaction IDs",
          "System identifiers",
        ],
      },
    },
  },

  {
    id: 80,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "PRIMARY KEY Example",
    type: "code",
    content: {
      description: "Defining a primary key.",
      code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);`,
    },
  },

  {
    id: 81,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "FOREIGN KEY Constraint",
    type: "two-column",
    content: {
      left: {
        title: "FOREIGN KEY",
        items: [
          "Creates table relationships",
          "References primary key",
          "Prevents orphan records",
          "Maintains referential integrity",
        ],
      },
      right: {
        title: "Real Example",
        items: [
          "orders.user_id → users.id",
          "Enrollments → students",
          "Payments → invoices",
          "Comments → posts",
        ],
      },
    },
  },

  {
    id: 82,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "FOREIGN KEY Example",
    type: "code",
    content: {
      description: "Linking tables safely.",
      code: `CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  amount NUMERIC
);`,
    },
  },

  {
    id: 83,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "UNIQUE Constraint",
    type: "two-column",
    content: {
      left: {
        title: "UNIQUE",
        items: [
          "Prevents duplicate values",
          "Allows NULLs (DB-dependent)",
          "Enforces uniqueness",
          "Often used with emails",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "Email addresses",
          "Usernames",
          "Account numbers",
          "Reference codes",
        ],
      },
    },
  },

  {
    id: 84,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "UNIQUE Example",
    type: "code",
    content: {
      description: "Preventing duplicates.",
      code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE
);`,
    },
  },

  {
    id: 85,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "NOT NULL Constraint",
    type: "two-column",
    content: {
      left: {
        title: "NOT NULL",
        items: [
          "Disallows empty values",
          "Forces required fields",
          "Simple but powerful",
          "Common in core columns",
        ],
      },
      right: {
        title: "Examples",
        items: ["Names", "Passwords", "Dates", "Amounts"],
      },
    },
  },

  {
    id: 86,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "CHECK Constraint",
    type: "two-column",
    content: {
      left: {
        title: "CHECK",
        items: [
          "Enforces logical rules",
          "Validates ranges",
          "Custom conditions",
          "Business rules",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "Age >= 18",
          "Score between 0 and 100",
          "Amount > 0",
          "Status IN list",
        ],
      },
    },
  },

  {
    id: 87,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "CHECK Example",
    type: "code",
    content: {
      description: "Enforcing value rules.",
      code: `CREATE TABLE payments (
  amount NUMERIC CHECK (amount > 0)
);`,
    },
  },

  {
    id: 88,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "Indexes Explained",
    type: "two-column",
    content: {
      left: {
        title: "What Is an Index?",
        items: [
          "Data structure for fast lookup",
          "Improves query speed",
          "Works like a book index",
          "Trades space for speed",
        ],
      },
      right: {
        title: "When Indexes Help",
        items: [
          "Frequent WHERE clauses",
          "JOIN conditions",
          "ORDER BY operations",
          "Large tables",
        ],
      },
    },
  },

  {
    id: 89,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "Index Example",
    type: "code",
    content: {
      description: "Creating an index.",
      code: `CREATE INDEX idx_users_email
ON users(email);`,
    },
  },

  {
    id: 90,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Relying only on application validation",
          "Over-indexing tables",
          "Ignoring foreign keys",
          "Poor schema planning",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Enforce rules at DB level",
          "Index strategically",
          "Use relationships properly",
          "Design schemas carefully",
        ],
      },
    },
  },

  {
    id: 91,
    moduleId: 7,
    moduleTitle: "Constraints, Indexes & Data Integrity",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "INSERT, UPDATE, DELETE",
          "Modifying data",
          "Transactions",
          "Safe data changes",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Integrity rules mastered",
          "Indexes understood",
          "Schemas strengthened",
          "Ready to modify data",
        ],
      },
    },
  },
  // =========================
  // SQL Module 8: INSERT, UPDATE, DELETE & Transactions
  // =========================

  {
    id: 92,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "Why Data Modification Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without Proper Data Control",
        items: [
          "Accidental data loss",
          "Inconsistent records",
          "Irreversible mistakes",
          "Unstable systems",
        ],
      },
      right: {
        title: "With Controlled Modifications",
        items: [
          "Safe data changes",
          "Reliable updates",
          "Audit-friendly operations",
          "Production-ready databases",
        ],
      },
    },
  },

  {
    id: 93,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "INSERT Statement",
    type: "two-column",
    content: {
      left: {
        title: "INSERT Purpose",
        items: [
          "Adds new records",
          "Creates data rows",
          "Triggers constraints",
          "Permanent operation",
        ],
      },
      right: {
        title: "When INSERT Is Used",
        items: [
          "User registration",
          "Order creation",
          "Log entries",
          "Data migration",
        ],
      },
    },
  },

  {
    id: 94,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "INSERT Example",
    type: "code",
    content: {
      description: "Adding a new user.",
      code: `INSERT INTO users (name, email)
VALUES ('Ada Okafor', 'ada@example.com');`,
    },
  },

  {
    id: 95,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "INSERT Multiple Rows",
    type: "code",
    content: {
      description: "Inserting more than one record.",
      code: `INSERT INTO users (name, email)
VALUES 
  ('John Doe', 'john@example.com'),
  ('Mary Smith', 'mary@example.com');`,
    },
  },

  {
    id: 96,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "UPDATE Statement",
    type: "two-column",
    content: {
      left: {
        title: "UPDATE Purpose",
        items: [
          "Modifies existing data",
          "Permanent change",
          "Must be precise",
          "High-risk if careless",
        ],
      },
      right: {
        title: "Typical Updates",
        items: [
          "Profile changes",
          "Status updates",
          "Corrections",
          "Business logic updates",
        ],
      },
    },
  },

  {
    id: 97,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "UPDATE Example",
    type: "code",
    content: {
      description: "Updating a user record.",
      code: `UPDATE users
SET email = 'newemail@example.com'
WHERE id = 3;`,
    },
  },

  {
    id: 98,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "The Importance of WHERE in UPDATE",
    type: "two-column",
    content: {
      left: {
        title: "Without WHERE",
        items: [
          "Every row is updated",
          "Data corruption risk",
          "Production disaster",
          "Often irreversible",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Always preview with SELECT",
          "Use primary keys",
          "Wrap in transaction",
          "Double-check conditions",
        ],
      },
    },
  },

  {
    id: 99,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "DELETE Statement",
    type: "two-column",
    content: {
      left: {
        title: "DELETE Purpose",
        items: [
          "Removes records",
          "Triggers constraints",
          "Permanent action",
          "High responsibility",
        ],
      },
      right: {
        title: "Common Use Cases",
        items: [
          "Removing test data",
          "Cleaning duplicates",
          "Account deletion",
          "Data retention rules",
        ],
      },
    },
  },

  {
    id: 100,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "DELETE Example",
    type: "code",
    content: {
      description: "Deleting a record safely.",
      code: `DELETE FROM users
WHERE id = 10;`,
    },
  },

  {
    id: 101,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "DELETE vs TRUNCATE",
    type: "two-column",
    content: {
      left: {
        title: "DELETE",
        items: [
          "Row-by-row removal",
          "Supports WHERE",
          "Transactional",
          "Slower but safer",
        ],
      },
      right: {
        title: "TRUNCATE",
        items: [
          "Removes all rows",
          "No WHERE clause",
          "Not transactional (DB-dependent)",
          "Very fast but dangerous",
        ],
      },
    },
  },

  {
    id: 102,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "Transactions Explained",
    type: "two-column",
    content: {
      left: {
        title: "Transaction Concept",
        items: [
          "Group of operations",
          "All succeed or none",
          "Maintains consistency",
          "Critical for safety",
        ],
      },
      right: {
        title: "ACID Properties",
        items: ["Atomicity", "Consistency", "Isolation", "Durability"],
      },
    },
  },

  {
    id: 103,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "Transaction Example",
    type: "code",
    content: {
      description: "Safe multi-step update.",
      code: `BEGIN;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

UPDATE accounts
SET balance = balance + 500
WHERE id = 2;

COMMIT;`,
    },
  },

  {
    id: 104,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "ROLLBACK Explained",
    type: "two-column",
    content: {
      left: {
        title: "ROLLBACK",
        items: [
          "Undo changes",
          "Used when error occurs",
          "Restores previous state",
          "Safety mechanism",
        ],
      },
      right: {
        title: "When to Rollback",
        items: [
          "Validation failure",
          "Unexpected results",
          "Partial updates",
          "Application errors",
        ],
      },
    },
  },

  {
    id: 105,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Running UPDATE without WHERE",
          "Not using transactions",
          "Deleting production data",
          "Ignoring constraints",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "SELECT before UPDATE/DELETE",
          "Use transactions",
          "Test in staging first",
          "Respect data integrity",
        ],
      },
    },
  },

  {
    id: 106,
    moduleId: 8,
    moduleTitle: "INSERT, UPDATE, DELETE & Transactions",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Views",
          "Stored logic",
          "Reusable queries",
          "Abstraction layers",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Safe data modification",
          "Transaction control",
          "Production awareness",
          "Ready for views",
        ],
      },
    },
  },
  // =========================
  // SQL Module 9: Views, Stored Queries & Abstraction
  // =========================

  {
    id: 107,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "Why Abstraction Matters in SQL",
    type: "two-column",
    content: {
      left: {
        title: "Without Abstraction",
        items: [
          "Repeated complex queries",
          "Hard-to-maintain SQL",
          "High error risk",
          "Tight coupling to tables",
        ],
      },
      right: {
        title: "With Abstraction",
        items: [
          "Reusable logic",
          "Cleaner queries",
          "Improved security",
          "Easier maintenance",
        ],
      },
    },
  },

  {
    id: 108,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "What Is a View?",
    type: "two-column",
    content: {
      left: {
        title: "View Defined",
        items: [
          "Saved SQL query",
          "Acts like a virtual table",
          "Does not store data",
          "Always up to date",
        ],
      },
      right: {
        title: "Why Use Views",
        items: [
          "Simplify complex joins",
          "Hide sensitive columns",
          "Standardize reports",
          "Improve readability",
        ],
      },
    },
  },

  {
    id: 109,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "Creating a View",
    type: "code",
    content: {
      description: "Creating a reusable sales summary.",
      code: `CREATE VIEW customer_sales AS
SELECT u.id AS user_id,
       u.name,
       SUM(o.amount) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;`,
    },
  },

  {
    id: 110,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "Querying a View",
    type: "code",
    content: {
      description: "Using a view like a table.",
      code: `SELECT *
FROM customer_sales
WHERE total_spent > 50000;`,
    },
  },

  {
    id: 111,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "Views vs Tables",
    type: "two-column",
    content: {
      left: {
        title: "Views",
        items: ["Virtual", "Always current", "Lightweight", "Read-focused"],
      },
      right: {
        title: "Tables",
        items: [
          "Physically stored",
          "Consumes storage",
          "Directly editable",
          "Primary data source",
        ],
      },
    },
  },

  {
    id: 112,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "Updating Data Through Views",
    type: "two-column",
    content: {
      left: {
        title: "When Updates Are Allowed",
        items: [
          "Single base table",
          "No aggregates",
          "No GROUP BY",
          "DB-specific rules",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Use views mainly for SELECT",
          "Update base tables directly",
          "Avoid ambiguity",
          "Check DB documentation",
        ],
      },
    },
  },

  {
    id: 113,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "Security Benefits of Views",
    type: "two-column",
    content: {
      left: {
        title: "Security Use",
        items: [
          "Hide sensitive columns",
          "Limit row access",
          "Expose safe datasets",
          "Role-based access",
        ],
      },
      right: {
        title: "Example",
        items: [
          "Hide salaries",
          "Expose only active users",
          "Share read-only views",
          "Compliance support",
        ],
      },
    },
  },

  {
    id: 114,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "Materialized Views (Concept)",
    type: "two-column",
    content: {
      left: {
        title: "Materialized Views",
        items: [
          "Store query results",
          "Faster reads",
          "Require refresh",
          "DB-dependent feature",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Heavy aggregations",
          "Large datasets",
          "Reporting workloads",
          "Performance tuning",
        ],
      },
    },
  },

  {
    id: 115,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "Dropping or Replacing Views",
    type: "code",
    content: {
      description: "Managing view lifecycle.",
      code: `DROP VIEW customer_sales;

CREATE OR REPLACE VIEW customer_sales AS
SELECT ...;`,
    },
  },

  {
    id: 116,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using views as tables",
          "Over-nesting views",
          "Assuming performance gains",
          "Not documenting views",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use views for clarity",
          "Keep views simple",
          "Profile performance",
          "Name views clearly",
        ],
      },
    },
  },

  {
    id: 117,
    moduleId: 9,
    moduleTitle: "Views, Stored Queries & Abstraction",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Window functions",
          "Analytical queries",
          "Advanced reporting",
          "Ranking & running totals",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Views understood",
          "Reusable SQL created",
          "Security-aware querying",
          "Ready for analytics",
        ],
      },
    },
  },
  // =========================
  // SQL Module 10: Window Functions & Analytical Queries
  // =========================

  {
    id: 118,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "Why Window Functions Matter",
    type: "two-column",
    content: {
      left: {
        title: "Without Window Functions",
        items: [
          "Complex subqueries",
          "Loss of row-level detail",
          "Hard-to-read SQL",
          "Limited analytics",
        ],
      },
      right: {
        title: "With Window Functions",
        items: [
          "Advanced analytics",
          "Row-level + aggregate insight",
          "Cleaner SQL",
          "Professional reporting",
        ],
      },
    },
  },

  {
    id: 119,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "What Is a Window Function?",
    type: "two-column",
    content: {
      left: {
        title: "Window Function Defined",
        items: [
          "Performs calculations over a set of rows",
          "Does not collapse rows",
          "Uses OVER() clause",
          "Analytical, not aggregating",
        ],
      },
      right: {
        title: "Key Difference",
        items: [
          "GROUP BY collapses rows",
          "Window functions keep rows",
          "More analytical power",
          "Essential for rankings",
        ],
      },
    },
  },

  {
    id: 120,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "OVER() Clause Explained",
    type: "two-column",
    content: {
      left: {
        title: "OVER() Purpose",
        items: [
          "Defines window of rows",
          "Controls calculation scope",
          "Required for window functions",
          "Flexible configuration",
        ],
      },
      right: {
        title: "OVER() Components",
        items: [
          "PARTITION BY",
          "ORDER BY",
          "Frame specification",
          "Logical grouping",
        ],
      },
    },
  },

  {
    id: 121,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "Basic Window Function Example",
    type: "code",
    content: {
      description: "Total sales alongside each order.",
      code: `SELECT id,
       amount,
       SUM(amount) OVER () AS total_sales
FROM orders;`,
    },
  },

  {
    id: 122,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "PARTITION BY Explained",
    type: "two-column",
    content: {
      left: {
        title: "PARTITION BY",
        items: [
          "Splits data into groups",
          "Like GROUP BY but keeps rows",
          "Resets calculation per group",
          "Very powerful",
        ],
      },
      right: {
        title: "Use Cases",
        items: [
          "Sales per customer",
          "Running totals per region",
          "Ranking within categories",
          "Segment analysis",
        ],
      },
    },
  },

  {
    id: 123,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "PARTITION BY Example",
    type: "code",
    content: {
      description: "Customer-level totals.",
      code: `SELECT id,
       customer_id,
       amount,
       SUM(amount) OVER (PARTITION BY customer_id) AS customer_total
FROM orders;`,
    },
  },

  {
    id: 124,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "ORDER BY in Window Functions",
    type: "two-column",
    content: {
      left: {
        title: "ORDER BY Purpose",
        items: [
          "Defines row sequence",
          "Required for running totals",
          "Used for ranking",
          "Controls window frame",
        ],
      },
      right: {
        title: "Common Use",
        items: [
          "Time-based analysis",
          "Cumulative metrics",
          "Trend tracking",
          "Sequential calculations",
        ],
      },
    },
  },

  {
    id: 125,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "Running Total Example",
    type: "code",
    content: {
      description: "Cumulative sales over time.",
      code: `SELECT order_date,
       amount,
       SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;`,
    },
  },

  {
    id: 126,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "Ranking Functions",
    type: "two-column",
    content: {
      left: {
        title: "Ranking Functions",
        items: ["ROW_NUMBER", "RANK", "DENSE_RANK", "NTILE"],
      },
      right: {
        title: "Differences",
        items: [
          "ROW_NUMBER: unique order",
          "RANK: gaps allowed",
          "DENSE_RANK: no gaps",
          "NTILE: buckets",
        ],
      },
    },
  },

  {
    id: 127,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "Ranking Example",
    type: "code",
    content: {
      description: "Ranking customers by spending.",
      code: `SELECT customer_id,
       SUM(amount) AS total_spent,
       RANK() OVER (ORDER BY SUM(amount) DESC) AS rank_position
FROM orders
GROUP BY customer_id;`,
    },
  },

  {
    id: 128,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "Window Frames (Concept)",
    type: "two-column",
    content: {
      left: {
        title: "Window Frames",
        items: [
          "Define row range",
          "ROWS vs RANGE",
          "Preceding / following",
          "Advanced usage",
        ],
      },
      right: {
        title: "When to Use",
        items: [
          "Moving averages",
          "Rolling metrics",
          "Time windows",
          "Advanced analytics",
        ],
      },
    },
  },

  {
    id: 129,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Confusing GROUP BY with OVER()",
          "Missing ORDER BY",
          "Overusing window functions",
          "Ignoring performance",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Choose the right tool",
          "Be explicit in OVER()",
          "Test on small datasets",
          "Profile queries",
        ],
      },
    },
  },

  {
    id: 130,
    moduleId: 10,
    moduleTitle: "Window Functions & Analytical Queries",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "SQL performance basics",
          "Query optimization",
          "Indexes in practice",
          "EXPLAIN plans",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Window functions mastered",
          "Analytical SQL written",
          "Advanced reporting skills",
          "Ready for optimization",
        ],
      },
    },
  },
  // =========================
  // SQL Module 11: Query Performance, Indexing Strategy & Optimization Basics
  // =========================

  {
    id: 131,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "Why SQL Performance Matters",
    type: "two-column",
    content: {
      left: {
        title: "Poor Performance Symptoms",
        items: [
          "Slow queries",
          "Timeouts",
          "High server load",
          "Unhappy users",
        ],
      },
      right: {
        title: "Optimized SQL Benefits",
        items: [
          "Fast responses",
          "Scalable systems",
          "Lower infrastructure cost",
          "Production reliability",
        ],
      },
    },
  },

  {
    id: 132,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "How Databases Execute Queries",
    type: "two-column",
    content: {
      left: {
        title: "Execution Overview",
        items: [
          "Parse SQL",
          "Create query plan",
          "Access data",
          "Return results",
        ],
      },
      right: {
        title: "Key Insight",
        items: [
          "Databases choose execution paths",
          "Indexes influence plans",
          "Bad queries waste resources",
          "Optimization is collaborative",
        ],
      },
    },
  },

  {
    id: 133,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "What Makes Queries Slow?",
    type: "two-column",
    content: {
      left: {
        title: "Common Causes",
        items: [
          "Full table scans",
          "Missing indexes",
          "Unnecessary columns",
          "Inefficient joins",
        ],
      },
      right: {
        title: "Red Flags",
        items: [
          "SELECT *",
          "No WHERE clause",
          "Functions in WHERE",
          "Large result sets",
        ],
      },
    },
  },

  {
    id: 134,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "Indexes in Practice",
    type: "two-column",
    content: {
      left: {
        title: "What Indexes Help With",
        items: [
          "WHERE filters",
          "JOIN conditions",
          "ORDER BY",
          "GROUP BY (sometimes)",
        ],
      },
      right: {
        title: "What Indexes Don’t Help",
        items: [
          "Small tables",
          "Low-selectivity columns",
          "Frequent writes",
          "Overlapping indexes",
        ],
      },
    },
  },

  {
    id: 135,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "Indexing Strategy Basics",
    type: "two-column",
    content: {
      left: {
        title: "Good Index Candidates",
        items: [
          "Primary keys",
          "Foreign keys",
          "Frequently filtered columns",
          "Columns used in joins",
        ],
      },
      right: {
        title: "Poor Index Candidates",
        items: [
          "Boolean columns",
          "Very small tables",
          "Frequently updated columns",
          "Low-cardinality data",
        ],
      },
    },
  },

  {
    id: 136,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "Using EXPLAIN",
    type: "two-column",
    content: {
      left: {
        title: "EXPLAIN Purpose",
        items: [
          "Shows query plan",
          "Reveals index usage",
          "Identifies bottlenecks",
          "Optimization tool",
        ],
      },
      right: {
        title: "What to Look For",
        items: [
          "Seq Scan vs Index Scan",
          "Join methods",
          "Estimated row counts",
          "Cost indicators",
        ],
      },
    },
  },

  {
    id: 137,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "EXPLAIN Example",
    type: "code",
    content: {
      description: "Analyzing a query.",
      code: `EXPLAIN
SELECT *
FROM orders
WHERE customer_id = 42;`,
    },
  },

  {
    id: 138,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "Query Optimization Best Practices",
    type: "two-column",
    content: {
      left: {
        title: "Best Practices",
        items: [
          "Select only needed columns",
          "Filter early with WHERE",
          "Use appropriate indexes",
          "Avoid unnecessary complexity",
        ],
      },
      right: {
        title: "Mindset",
        items: [
          "Think in sets",
          "Measure before optimizing",
          "Prefer clarity over tricks",
          "Test under real data sizes",
        ],
      },
    },
  },

  {
    id: 139,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Over-indexing",
          "Optimizing too early",
          "Ignoring execution plans",
          "Assuming DB will fix everything",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Index intentionally",
          "Profile first",
          "Understand plans",
          "Optimize where it matters",
        ],
      },
    },
  },

  {
    id: 140,
    moduleId: 11,
    moduleTitle: "Query Performance, Indexing Strategy & Optimization Basics",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "SQL security basics",
          "User roles & permissions",
          "SQL injection awareness",
          "Production safety",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Performance mindset developed",
          "Indexes used wisely",
          "Queries optimized",
          "Ready for secure SQL usage",
        ],
      },
    },
  },
  // =========================
  // SQL Module 12: SQL Security, Roles & Permissions
  // =========================

  {
    id: 141,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Why SQL Security Matters",
    type: "two-column",
    content: {
      left: {
        title: "Without SQL Security",
        items: [
          "Unauthorized data access",
          "Accidental data deletion",
          "Privilege abuse",
          "Compliance failures",
        ],
      },
      right: {
        title: "With Proper Security",
        items: [
          "Controlled access",
          "Least-privilege enforcement",
          "Auditable systems",
          "Production safety",
        ],
      },
    },
  },

  {
    id: 142,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Authentication vs Authorization",
    type: "two-column",
    content: {
      left: {
        title: "Authentication",
        items: [
          "Who are you?",
          "Login credentials",
          "Identity verification",
          "Account-based",
        ],
      },
      right: {
        title: "Authorization",
        items: [
          "What can you do?",
          "Permissions & roles",
          "Access control",
          "Policy-driven",
        ],
      },
    },
  },

  {
    id: 143,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Database Users & Roles",
    type: "two-column",
    content: {
      left: {
        title: "Users",
        items: [
          "Individual accounts",
          "Used by people or apps",
          "Authenticated identities",
          "Mapped to roles",
        ],
      },
      right: {
        title: "Roles",
        items: [
          "Group of permissions",
          "Reusable access profiles",
          "Simplify management",
          "Best practice approach",
        ],
      },
    },
  },

  {
    id: 144,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Common Permission Types",
    type: "two-column",
    content: {
      left: {
        title: "Data Permissions",
        items: ["SELECT", "INSERT", "UPDATE", "DELETE"],
      },
      right: {
        title: "Schema & Admin Permissions",
        items: ["CREATE", "ALTER", "DROP", "EXECUTE"],
      },
    },
  },

  {
    id: 145,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Granting Permissions",
    type: "code",
    content: {
      description: "Granting read access to a role.",
      code: `GRANT SELECT
ON orders
TO reporting_role;`,
    },
  },

  {
    id: 146,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Revoking Permissions",
    type: "code",
    content: {
      description: "Removing access safely.",
      code: `REVOKE DELETE
ON users
FROM app_user;`,
    },
  },

  {
    id: 147,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Principle of Least Privilege",
    type: "two-column",
    content: {
      left: {
        title: "Core Idea",
        items: [
          "Give minimum required access",
          "Limit blast radius",
          "Reduce mistakes",
          "Improve security posture",
        ],
      },
      right: {
        title: "Examples",
        items: [
          "Read-only reporting users",
          "No DROP in production",
          "Separate admin roles",
          "Environment-specific access",
        ],
      },
    },
  },

  {
    id: 148,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "SQL Injection (Concept)",
    type: "two-column",
    content: {
      left: {
        title: "What Is SQL Injection?",
        items: [
          "Malicious SQL execution",
          "User input abuse",
          "Application-level vulnerability",
          "Security critical",
        ],
      },
      right: {
        title: "Why SQL Still Matters",
        items: [
          "SQL is powerful",
          "Databases trust queries",
          "Bad input = bad SQL",
          "Defense required",
        ],
      },
    },
  },

  {
    id: 149,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Preventing SQL Injection",
    type: "two-column",
    content: {
      left: {
        title: "Prevention Techniques",
        items: [
          "Parameterized queries",
          "Prepared statements",
          "Input validation",
          "ORM usage",
        ],
      },
      right: {
        title: "DB-Level Safety",
        items: [
          "Least privilege",
          "Read-only accounts",
          "No dynamic SQL",
          "Auditing",
        ],
      },
    },
  },

  {
    id: 150,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Environment Separation",
    type: "two-column",
    content: {
      left: {
        title: "Environments",
        items: [
          "Development",
          "Testing / Staging",
          "Production",
          "Disaster recovery",
        ],
      },
      right: {
        title: "Best Practice",
        items: [
          "Separate credentials",
          "Restricted production access",
          "Audit logging",
          "Change control",
        ],
      },
    },
  },

  {
    id: 151,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "Common Beginner Mistakes",
    type: "two-column",
    content: {
      left: {
        title: "Mistakes",
        items: [
          "Using admin accounts in apps",
          "Over-granting permissions",
          "Ignoring injection risks",
          "No role structure",
        ],
      },
      right: {
        title: "Correct Practice",
        items: [
          "Use roles",
          "Apply least privilege",
          "Secure app queries",
          "Review access regularly",
        ],
      },
    },
  },

  {
    id: 152,
    moduleId: 12,
    moduleTitle: "SQL Security, Roles & Permissions",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "Database design",
          "Normalization",
          "Schema modeling",
          "Real-world data modeling",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Secure SQL usage",
          "Permission management",
          "Injection awareness",
          "Production readiness",
        ],
      },
    },
  },
  // =========================
  // SQL Module 13: Database Design, Normalization & Schema Modeling
  // =========================

  {
    id: 153,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "Why Database Design Matters",
    type: "two-column",
    content: {
      left: {
        title: "Poor Design Consequences",
        items: [
          "Duplicate data",
          "Inconsistent updates",
          "Complex queries",
          "Scalability issues",
        ],
      },
      right: {
        title: "Good Design Benefits",
        items: [
          "Clean data structure",
          "Efficient storage",
          "Simpler queries",
          "Long-term scalability",
        ],
      },
    },
  },

  {
    id: 154,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "What Is Database Design?",
    type: "two-column",
    content: {
      left: {
        title: "Design Defined",
        items: [
          "Planning table structure",
          "Defining relationships",
          "Choosing keys",
          "Applying constraints",
        ],
      },
      right: {
        title: "Design Goals",
        items: ["Accuracy", "Efficiency", "Maintainability", "Data integrity"],
      },
    },
  },

  {
    id: 155,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "Entities & Attributes",
    type: "two-column",
    content: {
      left: {
        title: "Entities",
        items: [
          "Real-world objects",
          "Become tables",
          "Represent nouns",
          "Core system concepts",
        ],
      },
      right: {
        title: "Attributes",
        items: [
          "Properties of entities",
          "Become columns",
          "Represent details",
          "Atomic values",
        ],
      },
    },
  },

  {
    id: 156,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "Primary Keys Revisited",
    type: "two-column",
    content: {
      left: {
        title: "Choosing a Primary Key",
        items: [
          "Uniquely identifies rows",
          "Stable over time",
          "Never reused",
          "Prefer surrogate keys",
        ],
      },
      right: {
        title: "Common Choices",
        items: [
          "Auto-increment IDs",
          "UUIDs",
          "Natural keys (rarely)",
          "Composite keys (advanced)",
        ],
      },
    },
  },

  {
    id: 157,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "Relationships Between Tables",
    type: "two-column",
    content: {
      left: {
        title: "Relationship Types",
        items: ["One-to-One", "One-to-Many", "Many-to-Many", "Hierarchical"],
      },
      right: {
        title: "Implementation",
        items: ["Foreign keys", "Join tables", "Constraints", "Indexes"],
      },
    },
  },

  {
    id: 158,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "Many-to-Many Relationships",
    type: "two-column",
    content: {
      left: {
        title: "Why Join Tables Are Needed",
        items: [
          "Relational limitation",
          "Avoid duplication",
          "Flexible relationships",
          "Scalable design",
        ],
      },
      right: {
        title: "Example",
        items: [
          "students ↔ courses",
          "users ↔ roles",
          "products ↔ categories",
          "orders ↔ products",
        ],
      },
    },
  },

  {
    id: 159,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "Normalization Overview",
    type: "two-column",
    content: {
      left: {
        title: "Normalization Defined",
        items: [
          "Organizing data efficiently",
          "Reducing redundancy",
          "Preventing anomalies",
          "Structured design process",
        ],
      },
      right: {
        title: "Why Normalize",
        items: [
          "Data consistency",
          "Easier maintenance",
          "Reliable updates",
          "Cleaner schemas",
        ],
      },
    },
  },

  {
    id: 160,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "First Normal Form (1NF)",
    type: "two-column",
    content: {
      left: {
        title: "1NF Rules",
        items: [
          "Atomic values",
          "No repeating groups",
          "Unique rows",
          "Consistent data types",
        ],
      },
      right: {
        title: "Violation Example",
        items: [
          "Multiple phone numbers in one column",
          "Comma-separated values",
          "Nested data",
          "Arrays in relational tables",
        ],
      },
    },
  },

  {
    id: 161,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "Second Normal Form (2NF)",
    type: "two-column",
    content: {
      left: {
        title: "2NF Rules",
        items: [
          "Already in 1NF",
          "No partial dependency",
          "Depends on full primary key",
          "Applies to composite keys",
        ],
      },
      right: {
        title: "Example Issue",
        items: [
          "Order + product data mixed",
          "Product name depends on product_id only",
          "Redundant attributes",
          "Update anomalies",
        ],
      },
    },
  },

  {
    id: 162,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "Third Normal Form (3NF)",
    type: "two-column",
    content: {
      left: {
        title: "3NF Rules",
        items: [
          "Already in 2NF",
          "No transitive dependency",
          "Non-key depends only on key",
          "Clean separation",
        ],
      },
      right: {
        title: "Example Issue",
        items: [
          "Storing department name in employee table",
          "Derived attributes",
          "Repeated descriptive data",
          "Hidden dependencies",
        ],
      },
    },
  },

  {
    id: 163,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "When to Denormalize",
    type: "two-column",
    content: {
      left: {
        title: "Denormalization",
        items: [
          "Intentional redundancy",
          "Performance-driven",
          "Read-heavy systems",
          "Advanced trade-off",
        ],
      },
      right: {
        title: "Use With Caution",
        items: [
          "Increased maintenance",
          "Risk of inconsistency",
          "Requires discipline",
          "Measure before applying",
        ],
      },
    },
  },

  {
    id: 164,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "Schema Design Best Practices",
    type: "two-column",
    content: {
      left: {
        title: "Best Practices",
        items: [
          "Clear naming conventions",
          "Consistent data types",
          "Use constraints",
          "Document schema",
        ],
      },
      right: {
        title: "Design Mindset",
        items: [
          "Model the real world",
          "Plan for change",
          "Optimize later",
          "Think long-term",
        ],
      },
    },
  },

  {
    id: 165,
    moduleId: 13,
    moduleTitle: "Database Design, Normalization & Schema Modeling",
    title: "What Comes Next",
    type: "two-column",
    content: {
      left: {
        title: "Next Module",
        items: [
          "SQL capstone project",
          "End-to-end database design",
          "Query implementation",
          "Real-world scenario",
        ],
      },
      right: {
        title: "Learning Outcome",
        items: [
          "Schema design skills",
          "Normalization understood",
          "Real-world modeling ability",
          "Ready for capstone",
        ],
      },
    },
  },
  // =========================
  // SQL Capstone Project: End-to-End Database Design & Querying
  // =========================

  {
    id: 166,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Capstone Overview",
    type: "two-column",
    content: {
      left: {
        title: "Project Goal",
        items: [
          "Apply all SQL concepts learned",
          "Design a real-world database",
          "Write practical queries",
          "Demonstrate job-ready skills",
        ],
      },
      right: {
        title: "What You Will Build",
        items: [
          "A simple e-commerce database",
          "Multiple related tables",
          "Business-driven queries",
          "Performance-aware design",
        ],
      },
    },
  },

  {
    id: 167,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Business Scenario",
    type: "two-column",
    content: {
      left: {
        title: "Scenario",
        items: [
          "Online store system",
          "Customers place orders",
          "Orders contain products",
          "Payments are recorded",
        ],
      },
      right: {
        title: "Core Requirements",
        items: [
          "Track users",
          "Track products",
          "Track orders",
          "Generate reports",
        ],
      },
    },
  },

  {
    id: 168,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Entity Identification",
    type: "two-column",
    content: {
      left: {
        title: "Main Entities",
        items: ["users", "products", "orders", "order_items", "payments"],
      },
      right: {
        title: "Why These Entities",
        items: [
          "Reflect real systems",
          "Cover relationships",
          "Enable analytics",
          "Support scaling",
        ],
      },
    },
  },

  {
    id: 169,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Schema Design (High Level)",
    type: "two-column",
    content: {
      left: {
        title: "Relationships",
        items: [
          "users → orders (1:N)",
          "orders → order_items (1:N)",
          "products → order_items (1:N)",
          "orders → payments (1:1)",
        ],
      },
      right: {
        title: "Design Principles Used",
        items: [
          "Normalization (3NF)",
          "Primary & foreign keys",
          "Constraints",
          "Indexes where needed",
        ],
      },
    },
  },

  {
    id: 170,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Table Creation (Users & Products)",
    type: "code",
    content: {
      description: "Core reference tables.",
      code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC CHECK (price > 0),
  stock INT CHECK (stock >= 0)
);`,
    },
  },

  {
    id: 171,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Table Creation (Orders & Order Items)",
    type: "code",
    content: {
      description: "Transactional tables.",
      code: `CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  order_id INT REFERENCES orders(id),
  product_id INT REFERENCES products(id),
  quantity INT CHECK (quantity > 0),
  PRIMARY KEY (order_id, product_id)
);`,
    },
  },

  {
    id: 172,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Table Creation (Payments)",
    type: "code",
    content: {
      description: "Payment tracking.",
      code: `CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  order_id INT UNIQUE REFERENCES orders(id),
  amount NUMERIC CHECK (amount > 0),
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
    },
  },

  {
    id: 173,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Sample Business Queries",
    type: "two-column",
    content: {
      left: {
        title: "Required Queries",
        items: [
          "Total sales per customer",
          "Top-selling products",
          "Monthly revenue",
          "Customers with no orders",
        ],
      },
      right: {
        title: "Concepts Tested",
        items: [
          "JOINs",
          "GROUP BY & HAVING",
          "Subqueries / CTEs",
          "Aggregations",
        ],
      },
    },
  },

  {
    id: 174,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Example Report Query",
    type: "code",
    content: {
      description: "Top customers by spending.",
      code: `SELECT u.name,
       SUM(oi.quantity * p.price) AS total_spent
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
GROUP BY u.name
ORDER BY total_spent DESC;`,
    },
  },

  {
    id: 175,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Performance & Integrity Checks",
    type: "two-column",
    content: {
      left: {
        title: "Performance",
        items: [
          "Indexes on foreign keys",
          "Avoid SELECT *",
          "Use EXPLAIN",
          "Optimize joins",
        ],
      },
      right: {
        title: "Integrity",
        items: [
          "Constraints enforced",
          "Transactions for updates",
          "No orphan records",
          "Consistent data types",
        ],
      },
    },
  },

  {
    id: 176,
    moduleId: 14,
    moduleTitle: "SQL Capstone Project",
    title: "Capstone Completion Criteria",
    type: "two-column",
    content: {
      left: {
        title: "You Are Done When",
        items: [
          "Schema is fully created",
          "All relationships work",
          "Queries return correct results",
          "Data integrity is enforced",
        ],
      },
      right: {
        title: "What This Proves",
        items: [
          "End-to-end SQL ability",
          "Real-world readiness",
          "Strong database thinking",
          "Portfolio-worthy project",
        ],
      },
    },
  },
];
