export const dsaSlidesData = [
  // =========================
  // DSA Module 1: What Are Data Structures & Algorithms?
  // =========================

  {
    id: 1,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Why Learn Data Structures & Algorithms?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem",
          items: [
          "Programs become slow as data grows",
          "Naive solutions don’t scale",
          "Code that works today may fail tomorrow",
          "Performance bugs are hard to fix late",
          ],
        },
        {
          title: "What DSA Solves",
          items: [
          "Efficient data storage",
          "Faster data access",
          "Predictable performance",
          "Scalable systems",
          ],
        },
      ],
    },
  },

  {
    id: 2,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "What Is a Data Structure?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Definition",
          items: [
          "A way to organize data in memory",
          "Defines how data is stored",
          "Defines how data is accessed",
          "Optimized for specific operations",
          ],
        },
        {
          title: "Examples",
          items: [
          "Arrays / Lists",
          "Stacks & Queues",
          "Hash Tables",
          "Trees & Graphs",
          ],
        },
      ],
    },
  },

  {
    id: 3,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "What Is an Algorithm?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Definition",
          items: [
          "A step-by-step procedure",
          "Transforms input to output",
          "Finite and well-defined",
          "Language independent",
          ],
        },
        {
          title: "Examples",
          items: [
          "Searching for an item",
          "Sorting a list",
          "Finding a shortest path",
          "Validating input",
          ],
        },
      ],
    },
  },

  {
    id: 4,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Data Structures vs Algorithms",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Data Structures",
          items: [
          "How data is stored",
          "Memory-focused",
          "Defines operations",
          "Foundation layer",
          ],
        },
        {
          title: "Algorithms",
          items: [
          "How data is processed",
          "Logic-focused",
          "Uses data structures",
          "Execution layer",
          ],
        },
      ],
    },
  },

  {
    id: 5,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Real-World Analogy",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Library Analogy",
          items: [
          "Books = data",
          "Shelves = data structure",
          "Finding a book = algorithm",
          "Indexing improves speed",
          ],
        },
        {
          title: "Key Insight",
          items: [
          "Same data, different structures",
          "Different performance outcomes",
          "Choice matters",
          "Design before coding",
          ],
        },
      ],
    },
  },

  {
    id: 6,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Why Language Does Not Matter (Conceptually)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Truth",
          items: [
          "Algorithms are ideas",
          "Data structures are concepts",
          "Languages only express them",
          "Logic stays the same",
          ],
        },
        {
          title: "What Changes",
          items: [
          "Syntax",
          "Built-in helpers",
          "Standard libraries",
          "Implementation details",
          ],
        },
      ],
    },
  },

  {
    id: 7,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Same Idea, Two Languages",
    type: "code-plus",
    content: {
      title: "Storing a List of Numbers",
      points: [
        "Same structure: list / array",
        "Different syntax",
        "Same behavior",
      ],
      code: `# Python
numbers = [1, 2, 3, 4]
numbers.append(5)
print(numbers)

# JavaScript
const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);`,
      note:
        "Both languages store and manipulate data in an ordered list.",
    },
  },

  {
    id: 8,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Why DSA Matters for Python Developers",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Python Strengths",
          items: [
          "High-level abstractions",
          "Rich standard library",
          "Fast to write code",
          "Readable syntax",
          ],
        },
        {
          title: "DSA Still Matters",
          items: [
          "Hidden performance costs",
          "Large datasets",
          "Backend scalability",
          "Interview expectations",
          ],
        },
      ],
    },
  },

  {
    id: 9,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Why DSA Matters for JavaScript Developers",
    type: "infographic",
    content: {
      cards: [
        {
          title: "JavaScript Reality",
          items: [
          "Runs in the browser",
          "User-perceived performance",
          "Large UI data sets",
          "Async-heavy logic",
          ],
        },
        {
          title: "DSA Benefits",
          items: [
          "Faster UI updates",
          "Efficient state handling",
          "Optimized rendering logic",
          "Better architectural decisions",
          ],
        },
      ],
    },
  },

  {
    id: 10,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Common Beginner Misconceptions",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Misconceptions",
          items: [
          "DSA is only for interviews",
          "Frameworks replace DSA",
          "Built-ins mean no thinking",
          "Optimization is premature",
          ],
        },
        {
          title: "Reality",
          items: [
          "DSA shows up in real systems",
          "Frameworks rely on DSA",
          "Built-ins still have costs",
          "Understanding prevents bugs",
          ],
        },
      ],
    },
  },

  {
    id: 11,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "How This Course Will Work",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Teaching Approach",
          items: [
          "Concept first",
          "Visual mental models",
          "Then Python & JavaScript",
          "Then complexity",
          ],
        },
        {
          title: "What You Will Gain",
          items: [
          "Deep understanding",
          "Language flexibility",
          "Interview readiness",
          "Real-world confidence",
          ],
        },
      ],
    },
  },

  {
    id: 12,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Linear Search Example",
    type: "code-plus",
    content: {
      title: "Simple Algorithm",
      points: [
        "Scan items one by one",
        "Works on unsorted data",
        "O(n) time complexity",
      ],
      code: `def linear_search(nums, target):
    for i, value in enumerate(nums):
        if value == target:
            return i
    return -1
`,
      note: "Linear search is the baseline for searching.",
    },
  },
  {
    id: 13,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "Sum of Array",
    type: "code-plus",
    content: {
      title: "Count Total",
      points: [
        "Loop through values",
        "Add to running total",
        "O(n) time",
      ],
      code: `nums = [2, 4, 6]
 total = 0
for n in nums:
    total += n
print(total)
`,
      note: "Simple loops illustrate linear time.",
    },
  },
  {
    id: 14,
    moduleId: 1,
    moduleTitle: "What Are Data Structures & Algorithms?",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Big-O notation",
          "Time complexity",
          "Space complexity",
          "Why performance matters",
          ],
        },
        {
          title: "Preparation",
          items: [
          "No advanced math required",
          "Focus on reasoning",
          "Think in growth rates",
          "Build intuition",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 2: Big-O Notation & Complexity
  // =========================

  {
    id: 15,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "Why Performance Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Naive Belief",
          items: [
          "If code works, it is good enough",
          "Modern computers are fast",
          "Optimization can wait",
          "Small inputs hide problems",
          ],
        },
        {
          title: "The Reality",
          items: [
          "Data grows over time",
          "Users increase",
          "Performance bugs appear late",
          "Fixing late is expensive",
          ],
        },
      ],
    },
  },

  {
    id: 16,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "What Do We Mean by Performance?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Time Complexity",
          items: [
          "How long code takes to run",
          "Measured as input grows",
          "Independent of machine speed",
          "Focuses on growth trend",
          ],
        },
        {
          title: "Space Complexity",
          items: [
          "How much memory code uses",
          "Extra memory beyond input",
          "Important for large data",
          "Often overlooked by beginners",
          ],
        },
      ],
    },
  },

  {
    id: 17,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "Why We Don’t Measure Time in Seconds",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Seconds Fail",
          items: [
          "Different machines",
          "Different loads",
          "Background processes",
          "Unreliable comparisons",
          ],
        },
        {
          title: "What We Measure Instead",
          items: [
          "Number of operations",
          "Growth as input increases",
          "Relative performance",
          "Scalability",
          ],
        },
      ],
    },
  },

  {
    id: 18,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "The Core Question Big-O Answers",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Key Question",
          items: [
          "What happens when input doubles?",
          "Does runtime double?",
          "Does it grow faster?",
          "Does it explode?",
          ],
        },
        {
          title: "Why This Matters",
          items: [
          "Predicts future behavior",
          "Prevents scalability surprises",
          "Guides algorithm choice",
          "Separates good from bad designs",
          ],
        },
      ],
    },
  },

  {
    id: 19,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "Constant Time – O(1)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What It Means",
          items: [
          "Runtime does not change",
          "Input size does not matter",
          "Always the same work",
          "Best possible case",
          ],
        },
        {
          title: "Common Examples",
          items: [
          "Accessing array element",
          "Reading a variable",
          "Hash lookup (average)",
          "Simple assignment",
          ],
        },
      ],
    },
  },

  {
    id: 20,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "O(1) Example (Python & JavaScript)",
    type: "code-plus",
    content: {
      title: "Direct Access",
      points: ["No loops", "Single operation", "Input size irrelevant"],
      code: `# Python
numbers = [10, 20, 30]
print(numbers[1])

# JavaScript
const numbers = [10, 20, 30];
console.log(numbers[1]);`,
      note:
        "Accessing an element by index takes constant time in both languages.",
    },
  },

  {
    id: 21,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "Linear Time – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What It Means",
          items: [
          "Runtime grows with input",
          "One operation per element",
          "Doubling input doubles work",
          "Very common pattern",
          ],
        },
        {
          title: "Typical Scenarios",
          items: [
          "Looping through a list",
          "Searching unsorted data",
          "Counting elements",
          "Validation checks",
          ],
        },
      ],
    },
  },

  {
    id: 22,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "O(n) Example (Python & JavaScript)",
    type: "code-plus",
    content: {
      title: "Looping Through Data",
      points: ["One pass", "Work grows with input", "Predictable growth"],
      code: `# Python
def print_items(items):
    for item in items:
        print(item)

# JavaScript
function printItems(items) {
  for (const item of items) {
    console.log(item);
  }
}`,
      note: "Each element is processed once, resulting in linear time.",
    },
  },

  {
    id: 23,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "Quadratic Time – O(n²)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What It Means",
          items: [
          "Nested loops",
          "Work grows very fast",
          "Doubling input quadruples work",
          "Dangerous at scale",
          ],
        },
        {
          title: "Warning Signs",
          items: [
          "Loop inside a loop",
          "Comparing all pairs",
          "Brute-force approaches",
          "Performance bottlenecks",
          ],
        },
      ],
    },
  },

  {
    id: 24,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "O(n²) Example (Python & JavaScript)",
    type: "code-plus",
    content: {
      title: "Nested Loops",
      points: ["Two loops", "Explosive growth", "Avoid for large data"],
      code: `# Python
for i in range(len(items)):
    for j in range(len(items)):
        print(items[i], items[j])

# JavaScript
for (let i = 0; i < items.length; i++) {
  for (let j = 0; j < items.length; j++) {
    console.log(items[i], items[j]);
  }
}`,
      note: "Nested loops cause quadratic growth as input increases.",
    },
  },

  {
    id: 25,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "Ignoring Constants & Lower Terms",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why We Ignore Them",
          items: [
          "They don’t affect growth",
          "Big-O is about scale",
          "Simplifies comparison",
          "Keeps reasoning clean",
          ],
        },
        {
          title: "Example",
          items: [
          "O(2n) → O(n)",
          "O(n + 10) → O(n)",
          "O(n² + n) → O(n²)",
          "Growth dominates",
          ],
        },
      ],
    },
  },

  {
    id: 26,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "Big-O Example",
    type: "code-plus",
    content: {
      title: "O(1) vs O(n)",
      points: [
        "Index access is constant time",
        "Looping grows with input",
        "Know your bottleneck",
      ],
      code: `nums = [3, 5, 7, 9]
first = nums[0]   # O(1)

for n in nums:    # O(n)
    print(n)
`,
      note: "Big-O compares how time grows with input size.",
    },
  },
  {
    id: 27,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "Space Complexity Example",
    type: "code-plus",
    content: {
      title: "Extra Memory",
      points: [
        "Input size is n",
        "Aux array uses O(n)",
        "Memory matters too",
      ],
      code: `nums = [1, 2, 3]
copy = nums[:]
print(copy)
`,
      note: "Copying arrays increases space usage.",
    },
  },
  {
    id: 28,
    moduleId: 2,
    moduleTitle: "Big-O Notation & Complexity",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Arrays & lists",
          "Memory layout intuition",
          "Access vs insertion",
          "Python vs JavaScript behavior",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Performance is about growth",
          "Big-O predicts the future",
          "Design matters early",
          "You are now thinking like an engineer",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 3: Arrays & Lists
  // =========================

  {
    id: 29,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Why Arrays and Lists Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why This Module Is Important",
          items: [
          "Arrays are the foundation of most data structures",
          "Many algorithms are built on arrays",
          "Lists appear everywhere in real applications",
          "Understanding arrays improves overall DSA intuition",
          ],
        },
        {
          title: "Real-World Examples",
          items: [
          "User lists",
          "Product catalogs",
          "Scores and metrics",
          "UI rendering collections",
          ],
        },
      ],
    },
  },

  {
    id: 30,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "What Is an Array (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "A collection of elements",
          "Stored in a specific order",
          "Indexed access",
          "Same type conceptually",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Think of numbered boxes",
          "Each box holds one value",
          "Indexes start at 0",
          "Direct access by position",
          ],
        },
      ],
    },
  },

  {
    id: 31,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Arrays vs Lists (Important Distinction)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Arrays (Theory)",
          items: [
          "Fixed size",
          "Contiguous memory",
          "Fast index access",
          "Expensive insertions",
          ],
        },
        {
          title: "Lists in Python & JavaScript",
          items: [
          "Dynamic resizing",
          "Abstract away memory details",
          "Array-backed internally",
          "Behave like dynamic arrays",
          ],
        },
      ],
    },
  },

  {
    id: 32,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Creating Arrays (Python & JavaScript)",
    type: "code-plus",
    content: {
      title: "Basic Creation",
      points: [
        "Dynamic sizing",
        "Ordered collection",
        "Zero-based indexing",
      ],
      code: `# Python
numbers = [10, 20, 30, 40]

# JavaScript
const numbers = [10, 20, 30, 40];`,
      note:
        "Both Python lists and JavaScript arrays behave as dynamic arrays.",
    },
  },

  {
    id: 33,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Accessing Elements by Index – O(1)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Happens",
          items: [
          "Direct jump to memory location",
          "No looping required",
          "Extremely fast",
          "Constant time",
          ],
        },
        {
          title: "Why It’s Powerful",
          items: [
          "Predictable performance",
          "Used in most algorithms",
          "Foundation of fast lookups",
          "Key DSA advantage",
          ],
        },
      ],
    },
  },

  {
    id: 34,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Index Access Example",
    type: "code-plus",
    content: {
      title: "Reading by Index",
      points: [
        "Same cost regardless of size",
        "Index-based access",
        "O(1) operation",
      ],
      code: `# Python
print(numbers[2])

# JavaScript
console.log(numbers[2]);`,
      note: "Index access does not depend on array size.",
    },
  },

  {
    id: 35,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Iterating Over Arrays – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Iteration Costs More",
          items: [
          "Each element must be visited",
          "Work grows with size",
          "Linear time complexity",
          "Very common pattern",
          ],
        },
        {
          title: "Typical Use Cases",
          items: [
          "Searching unsorted data",
          "Summing values",
          "Validation",
          "Transformations",
          ],
        },
      ],
    },
  },

  {
    id: 36,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Iteration Example",
    type: "code-plus",
    content: {
      title: "Looping Through Elements",
      points: [
        "One operation per element",
        "Linear growth",
        "O(n) complexity",
      ],
      code: `# Python
for num in numbers:
    print(num)

# JavaScript
for (const num of numbers) {
  console.log(num);
}`,
      note: "Every element is processed once.",
    },
  },

  {
    id: 37,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Appending Elements – Amortized O(1)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Happens Internally",
          items: [
          "Element added to the end",
          "Occasional resize",
          "Most operations are fast",
          "Rare expensive operations",
          ],
        },
        {
          title: "Key Term: Amortized",
          items: [
          "Average cost over time",
          "Not worst-case every time",
          "Important DSA concept",
          "Very common in practice",
          ],
        },
      ],
    },
  },

  {
    id: 38,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Append Example",
    type: "code-plus",
    content: {
      title: "Adding to the End",
      points: [
        "Fast in most cases",
        "Preferred insertion method",
        "Amortized O(1)",
      ],
      code: `# Python
numbers.append(50)

# JavaScript
numbers.push(50);`,
      note: "Appending is efficient in dynamic arrays.",
    },
  },

  {
    id: 39,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Inserting at the Beginning – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why It’s Slow",
          items: [
          "Elements must shift",
          "Memory movement required",
          "Cost grows with size",
          "Linear time",
          ],
        },
        {
          title: "Practical Insight",
          items: [
          "Avoid frequent front insertions",
          "Use other data structures if needed",
          "Queues handle this better",
          "Design choice matters",
          ],
        },
      ],
    },
  },

  {
    id: 40,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Insert at Beginning Example",
    type: "code-plus",
    content: {
      title: "Costly Insertion",
      points: [
        "All elements shift",
        "O(n) operation",
        "Be careful at scale",
      ],
      code: `# Python
numbers.insert(0, 5)

# JavaScript
numbers.unshift(5);`,
      note: "Front insertion requires shifting existing elements.",
    },
  },

  {
    id: 41,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Deleting Elements – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Deletion Cost",
          items: [
          "Elements shift to fill gap",
          "Index positions change",
          "Linear time complexity",
          "Cost depends on position",
          ],
        },
        {
          title: "Best Practice",
          items: [
          "Delete from end when possible",
          "Avoid frequent middle deletes",
          "Consider alternative structures",
          "Design for usage patterns",
          ],
        },
      ],
    },
  },

  {
    id: 42,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Deletion Example",
    type: "code-plus",
    content: {
      title: "Removing Elements",
      points: ["Shifting required", "O(n) operation", "Position matters"],
      code: `# Python
numbers.pop(1)

# JavaScript
numbers.splice(1, 1);`,
      note: "Removing from the middle shifts remaining elements.",
    },
  },

  {
    id: 43,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Overusing front insertions",
          "Ignoring time complexity",
          "Assuming all operations are O(1)",
          "Using arrays for everything",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Understand operation costs",
          "Choose based on use case",
          "Design for scale",
          "DSA is about trade-offs",
          ],
        },
      ],
    },
  },

  {
    id: 44,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Summary: Arrays at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Fast index access",
          "Simple structure",
          "Cache-friendly",
          "Widely supported",
          ],
        },
        {
          title: "Weaknesses",
          items: [
          "Slow insertions/deletions",
          "Inefficient for front operations",
          "Shifting overhead",
          "Not ideal for all scenarios",
          ],
        },
      ],
    },
  },

  {
    id: 45,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Array Insert/Delete",
    type: "code-plus",
    content: {
      title: "Basic List Ops",
      points: [
        "Insert at index",
        "Delete by value",
        "Know the cost of shifting",
      ],
      code: `nums = [1, 2, 3, 4]
nums.insert(1, 99)  # [1, 99, 2, 3, 4]
nums.remove(3)      # [1, 99, 2, 4]
`,
      note: "Insert/remove in arrays can cost O(n).",
    },
  },
  {
    id: 46,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "Array Slicing",
    type: "code-plus",
    content: {
      title: "Subarray",
      points: [
        "Slice creates a new list",
        "O(k) for k elements",
        "Useful but not free",
      ],
      code: `nums = [1, 2, 3, 4, 5]
sub = nums[1:4]  # [2, 3, 4]
`,
      note: "Slicing is convenient but creates a new array.",
    },
  },
  {
    id: 47,
    moduleId: 3,
    moduleTitle: "Arrays & Lists",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Strings as data structures",
          "Character arrays",
          "Immutability concepts",
          "Python vs JavaScript differences",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Arrays are foundational",
          "Performance depends on operation",
          "Design choices matter",
          "You are building intuition",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 4: Strings
  // =========================

  {
    id: 48,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Why Strings Deserve Their Own Module",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Common Misconception",
          items: [
          "Strings are just arrays of characters",
          "String operations are always cheap",
          "Languages handle strings for you",
          "No need to think about performance",
          ],
        },
        {
          title: "The Reality",
          items: [
          "Strings are one of the most used data types",
          "Many algorithms are string-heavy",
          "Immutability affects performance",
          "Subtle bugs are common",
          ],
        },
      ],
    },
  },

  {
    id: 49,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "What Is a String (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Definition",
          items: [
          "A sequence of characters",
          "Ordered and indexable",
          "Represents text data",
          "Built on top of arrays",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Think of characters in order",
          "Each character has a position",
          "Index-based access",
          "Read-heavy structure",
          ],
        },
      ],
    },
  },

  {
    id: 50,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Strings Are Immutable (Critical Concept)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Immutability Explained",
          items: [
          "Once created, cannot be changed",
          "Any modification creates a new string",
          "Original string stays intact",
          "Applies to both Python and JavaScript",
          ],
        },
        {
          title: "Why Languages Do This",
          items: [
          "Memory safety",
          "Predictable behavior",
          "Performance optimizations",
          "Thread safety (in some runtimes)",
          ],
        },
      ],
    },
  },

  {
    id: 51,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Immutability Example (Python & JavaScript)",
    type: "code-plus",
    content: {
      title: "What Really Happens When You Modify a String",
      points: [
        "Original string is unchanged",
        "New string is created",
        "Important for performance reasoning",
      ],
      code: `# Python
s = "hello"
s = s + " world"
print(s)

# JavaScript
let s = "hello";
s = s + " world";
console.log(s);`,
      note:
        "Both languages create a new string when concatenation occurs.",
    },
  },

  {
    id: 52,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Accessing Characters by Index – O(1)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Access Behavior",
          items: [
          "Characters can be indexed",
          "Direct access",
          "Constant time operation",
          "Similar to arrays",
          ],
        },
        {
          title: "Examples",
          items: [
          "Reading characters",
          "Comparisons",
          "Pattern checks",
          "Parsing logic",
          ],
        },
      ],
    },
  },

  {
    id: 53,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Index Access Example",
    type: "code-plus",
    content: {
      title: "Reading Characters",
      points: [
        "Index-based access",
        "O(1) time",
        "Same concept across languages",
      ],
      code: `# Python
word = "data"
print(word[1])

# JavaScript
const word = "data";
console.log(word[1]);`,
      note:
        "Accessing a character by index is a constant-time operation.",
    },
  },

  {
    id: 54,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Iterating Over a String – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Iteration Is Linear",
          items: [
          "Each character must be visited",
          "Work grows with string length",
          "Very common in text processing",
          "Foundation of many algorithms",
          ],
        },
        {
          title: "Use Cases",
          items: [
          "Validation",
          "Searching characters",
          "Counting frequency",
          "Parsing input",
          ],
        },
      ],
    },
  },

  {
    id: 55,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Iteration Example",
    type: "code-plus",
    content: {
      title: "Looping Through Characters",
      points: ["One pass through string", "Linear time", "Predictable cost"],
      code: `# Python
for char in "abc":
    print(char)

# JavaScript
for (const char of "abc") {
  console.log(char);
}`,
      note: "Each character is processed once, resulting in O(n) time.",
    },
  },

  {
    id: 56,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "String Length – O(1)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Important Insight",
          items: [
          "Length is stored internally",
          "No need to count characters",
          "Constant-time operation",
          "Often misunderstood",
          ],
        },
        {
          title: "Practical Impact",
          items: [
          "Safe to use frequently",
          "Used in conditions",
          "Does not slow down loops",
          "Useful in validation",
          ],
        },
      ],
    },
  },

  {
    id: 57,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Length Example",
    type: "code-plus",
    content: {
      title: "Getting String Length",
      points: [
        "O(1) operation",
        "Same idea in both languages",
        "Cheap to call",
      ],
      code: `# Python
print(len("hello"))

# JavaScript
console.log("hello".length);`,
      note: "String length is retrieved in constant time.",
    },
  },

  {
    id: 58,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Concatenation Cost – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Concatenation Is Costly",
          items: [
          "New string must be created",
          "Characters are copied",
          "Cost grows with size",
          "Hidden performance trap",
          ],
        },
        {
          title: "When This Matters",
          items: [
          "Loops with concatenation",
          "Building large strings",
          "Repeated appends",
          "Text processing",
          ],
        },
      ],
    },
  },

  {
    id: 59,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Concatenation in a Loop (Anti-Pattern)",
    type: "code-plus",
    content: {
      title: "What Not to Do",
      points: [
        "Repeated string creation",
        "Quadratic behavior",
        "Scales poorly",
      ],
      code: `# Python
s = ""
for char in ["a", "b", "c", "d"]:
    s += char

# JavaScript
let s = "";
for (const char of ["a", "b", "c", "d"]) {
  s += char;
}`,
      note: "Repeated concatenation can lead to poor performance.",
    },
  },

  {
    id: 60,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Efficient String Building",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Better Approach",
          items: [
          "Collect pieces first",
          "Join once at the end",
          "Avoid repeated copying",
          "Linear overall cost",
          ],
        },
        {
          title: "Why This Works",
          items: [
          "Single allocation",
          "Predictable performance",
          "Common DSA optimization",
          "Cleaner logic",
          ],
        },
      ],
    },
  },

  {
    id: 61,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Efficient String Building Example",
    type: "code-plus",
    content: {
      title: "Collect Then Join",
      points: ["Linear time", "Preferred pattern", "Scales well"],
      code: `# Python
chars = ["a", "b", "c", "d"]
result = "".join(chars)

# JavaScript
const chars = ["a", "b", "c", "d"];
const result = chars.join("");`,
      note: "Joining once avoids repeated string copying.",
    },
  },

  {
    id: 62,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Substring Operations – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Substring Behavior",
          items: [
          "Creates a new string",
          "Characters are copied",
          "Cost depends on length",
          "Not constant time",
          ],
        },
        {
          title: "Common Use Cases",
          items: ["Slicing", "Parsing", "Pattern matching", "Tokenization"],
        },
      ],
    },
  },

  {
    id: 63,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Substring Example",
    type: "code-plus",
    content: {
      title: "Extracting Part of a String",
      points: [
        "Creates new string",
        "Linear in substring length",
        "Be mindful in loops",
      ],
      code: `# Python
text = "algorithm"
print(text[0:4])

# JavaScript
const text = "algorithm";
console.log(text.slice(0, 4));`,
      note: "Substrings require copying characters.",
    },
  },

  {
    id: 64,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Assuming strings are mutable",
          "Concatenating in loops",
          "Ignoring substring cost",
          "Treating strings like cheap arrays",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Strings are immutable",
          "Think in copies",
          "Plan string construction",
          "Understand hidden costs",
          ],
        },
      ],
    },
  },

  {
    id: 65,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Summary: Strings at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Simple abstraction",
          "Safe and predictable",
          "Easy to use",
          "Widely supported",
          ],
        },
        {
          title: "Limitations",
          items: [
          "Immutability cost",
          "Expensive modifications",
          "Hidden performance traps",
          "Needs careful handling",
          ],
        },
      ],
    },
  },

  {
    id: 66,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "String Reverse",
    type: "code-plus",
    content: {
      title: "Common String Task",
      points: [
        "Reverse characters",
        "Useful in many problems",
        "O(n) time",
      ],
      code: `s = "algorithm"
rev = s[::-1]
print(rev)
`,
      note: "Slicing is a quick reverse in Python.",
    },
  },
  {
    id: 67,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "Palindrome Check",
    type: "code-plus",
    content: {
      title: "Two Pointers",
      points: [
        "Compare ends",
        "Move inward",
        "O(n) time",
      ],
      code: `def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
`,
      note: "Two pointers is a common string pattern.",
    },
  },
  {
    id: 68,
    moduleId: 4,
    moduleTitle: "Strings",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Stacks",
          "LIFO behavior",
          "Practical applications",
          "Python & JavaScript implementations",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Strings are not trivial",
          "Immutability changes everything",
          "Performance awareness matters",
          "You are progressing correctly",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 5: Stacks
  // =========================

  {
    id: 69,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Why Study Stacks?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem They Solve",
          items: [
          "Need to reverse actions",
          "Track nested operations",
          "Undo/redo behavior",
          "Temporary state management",
          ],
        },
        {
          title: "Where You See Them",
          items: [
          "Function calls (call stack)",
          "Undo in editors",
          "Browser navigation",
          "Expression evaluation",
          ],
        },
      ],
    },
  },

  {
    id: 70,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "What Is a Stack (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "Last In, First Out (LIFO)",
          "Only one end is accessible",
          "Push adds to the top",
          "Pop removes from the top",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Stack of plates",
          "Add to the top",
          "Remove from the top",
          "No access to the middle",
          ],
        },
      ],
    },
  },

  {
    id: 71,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Basic Stack Operations",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Operations",
          items: [
          "Push (add element)",
          "Pop (remove element)",
          "Peek (view top)",
          "IsEmpty (check state)",
          ],
        },
        {
          title: "Performance",
          items: ["Push: O(1)", "Pop: O(1)", "Peek: O(1)", "Very efficient"],
        },
      ],
    },
  },

  {
    id: 72,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Implementing a Stack Using Arrays",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Arrays Work Well",
          items: [
          "Fast append",
          "Fast removal from end",
          "Simple implementation",
          "Built-in support",
          ],
        },
        {
          title: "Design Choice",
          items: [
          "Top of stack = end of array",
          "Avoid front operations",
          "Keep operations O(1)",
          "Predictable behavior",
          ],
        },
      ],
    },
  },

  {
    id: 73,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Stack Push Example",
    type: "code-plus",
    content: {
      title: "Adding to the Stack",
      points: [
        "Push adds to the top",
        "Constant time",
        "Same concept in both languages",
      ],
      code: `# Python
stack = []
stack.append(10)
stack.append(20)

# JavaScript
const stack = [];
stack.push(10);
stack.push(20);`,
      note: "Appending to the end represents pushing onto the stack.",
    },
  },

  {
    id: 74,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Stack Pop Example",
    type: "code-plus",
    content: {
      title: "Removing from the Stack",
      points: [
        "Pop removes the top element",
        "Constant time",
        "Last in is removed first",
      ],
      code: `# Python
top = stack.pop()

# JavaScript
const top = stack.pop();`,
      note: "Pop removes and returns the most recently added element.",
    },
  },

  {
    id: 75,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Peek Operation",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Peek Does",
          items: [
          "View top element",
          "Does not remove it",
          "Safe inspection",
          "Common operation",
          ],
        },
        {
          title: "Implementation Insight",
          items: [
          "Access last element",
          "No modification",
          "O(1) operation",
          "Simple logic",
          ],
        },
      ],
    },
  },

  {
    id: 76,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Peek Example",
    type: "code-plus",
    content: {
      title: "Viewing the Top",
      points: ["No mutation", "Constant time", "Index-based access"],
      code: `# Python
top = stack[-1]

# JavaScript
const top = stack[stack.length - 1];`,
      note: "Peek reads the last element without modifying the stack.",
    },
  },

  {
    id: 77,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Stack Size & Empty Check",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why It Matters",
          items: [
          "Avoid popping empty stack",
          "Control program flow",
          "Prevent runtime errors",
          "Common guard condition",
          ],
        },
        {
          title: "Typical Checks",
          items: [
          "Length comparison",
          "Boolean flags",
          "Precondition checks",
          "Defensive programming",
          ],
        },
      ],
    },
  },

  {
    id: 78,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Empty Check Example",
    type: "code-plus",
    content: {
      title: "Is the Stack Empty?",
      points: ["Simple condition", "Prevents errors", "Good practice"],
      code: `# Python
if not stack:
    print("Empty stack")

# JavaScript
if (stack.length === 0) {
  console.log("Empty stack");
}`,
      note: "Checking emptiness prevents invalid pop operations.",
    },
  },

  {
    id: 79,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Call Stack (Important Concept)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Is the Call Stack?",
          items: [
          "Tracks function calls",
          "Manages execution order",
          "Stores local variables",
          "Uses stack behavior",
          ],
        },
        {
          title: "Why It Matters",
          items: [
          "Explains recursion",
          "Helps debug crashes",
          "Stack overflow errors",
          "Execution tracing",
          ],
        },
      ],
    },
  },

  {
    id: 80,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Real-World Use Cases",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Applications",
          items: [
          "Undo / redo",
          "Expression evaluation",
          "Syntax parsing",
          "Backtracking",
          ],
        },
        {
          title: "DSA Insight",
          items: [
          "Stacks model nested behavior",
          "Order matters",
          "Temporary storage",
          "Foundation for algorithms",
          ],
        },
      ],
    },
  },

  {
    id: 81,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Using front of array as stack",
          "Forgetting empty checks",
          "Mixing stack and queue logic",
          "Ignoring call stack limits",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Use end of array",
          "Guard operations",
          "Respect LIFO behavior",
          "Understand recursion depth",
          ],
        },
      ],
    },
  },

  {
    id: 82,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Summary: Stacks at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Simple structure",
          "Fast operations",
          "Predictable behavior",
          "Widely applicable",
          ],
        },
        {
          title: "Limitations",
          items: [
          "Limited access",
          "Not searchable",
          "LIFO only",
          "Specialized use",
          ],
        },
      ],
    },
  },

  {
    id: 83,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Stack Example",
    type: "code-plus",
    content: {
      title: "LIFO Behavior",
      points: [
        "Push adds to top",
        "Pop removes from top",
        "Used in undo and parsing",
      ],
      code: `stack = []
stack.append(1)
stack.append(2)
stack.append(3)
last = stack.pop()  # 3
`,
      note: "Stacks are last-in, first-out.",
    },
  },
  {
    id: 84,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "Valid Parentheses",
    type: "code-plus",
    content: {
      title: "Stack Pattern",
      points: [
        "Push opening brackets",
        "Pop on closing",
        "Stack must end empty",
      ],
      code: `def is_valid(s):
    stack = []
    pairs = {')': '(', ']': '[', '}': '{'}
    for ch in s:
        if ch in pairs.values():
            stack.append(ch)
        elif ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
    return not stack
`,
      note: "Stacks help match nested symbols.",
    },
  },
  {
    id: 85,
    moduleId: 5,
    moduleTitle: "Stacks",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Queues",
          "FIFO behavior",
          "Scheduling problems",
          "Python & JavaScript implementations",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Stacks control order",
          "LIFO is powerful",
          "Foundational for recursion",
          "Essential DSA tool",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 6: Queues & Deques
  // =========================

  {
    id: 86,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Why Queues Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problems Queues Solve",
          items: [
          "Order must be preserved",
          "Tasks handled in arrival order",
          "Fair scheduling",
          "Stream processing",
          ],
        },
        {
          title: "Where You See Them",
          items: [
          "Task scheduling",
          "Print queues",
          "Request handling",
          "Breadth-first algorithms",
          ],
        },
      ],
    },
  },

  {
    id: 87,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "What Is a Queue (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "First In, First Out (FIFO)",
          "Add at the back",
          "Remove from the front",
          "Order is preserved",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "People in a line",
          "First person served first",
          "New arrivals go to the end",
          "Fair and predictable",
          ],
        },
      ],
    },
  },

  {
    id: 88,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Basic Queue Operations",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Operations",
          items: ["Enqueue (add)", "Dequeue (remove)", "Peek (front)", "IsEmpty"],
        },
        {
          title: "Performance Goal",
          items: [
          "Enqueue: O(1)",
          "Dequeue: O(1)",
          "Avoid shifting",
          "Choose structure carefully",
          ],
        },
      ],
    },
  },

  {
    id: 89,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Why Arrays Are a Bad Queue (Front Removal)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem",
          items: [
          "Removing from front shifts elements",
          "O(n) per dequeue",
          "Performance degrades fast",
          "Hidden cost",
          ],
        },
        {
          title: "Design Insight",
          items: [
          "Stacks use end of array",
          "Queues need fast front removal",
          "Different structure needed",
          "Choose by access pattern",
          ],
        },
      ],
    },
  },

  {
    id: 90,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Queue Using Collections (Python & JavaScript)",
    type: "code-plus",
    content: {
      title: "Efficient Queue Implementations",
      points: [
        "Use deque in Python",
        "Use pointers or shift carefully in JS",
        "Aim for O(1) operations",
      ],
      code: `# Python
from collections import deque
queue = deque()
queue.append(10)
queue.append(20)
queue.popleft()

# JavaScript
const queue = [];
queue.push(10);
queue.push(20);
queue.shift();`,
      note:
        "Python provides deque for efficient queues; JS arrays require care.",
    },
  },

  {
    id: 91,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Understanding Deques",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Is a Deque?",
          items: [
          "Double-ended queue",
          "Add/remove at both ends",
          "Flexible structure",
          "Efficient operations",
          ],
        },
        {
          title: "Why Deques Matter",
          items: [
          "Support both stack & queue behavior",
          "Useful in sliding window problems",
          "Avoids array shifting",
          "Very powerful abstraction",
          ],
        },
      ],
    },
  },

  {
    id: 92,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Deque Operations Example",
    type: "code-plus",
    content: {
      title: "Adding & Removing at Both Ends",
      points: [
        "Constant time operations",
        "Flexible usage",
        "Same concept in both languages",
      ],
      code: `# Python
dq = deque()
dq.append(1)
dq.appendleft(0)
dq.pop()
dq.popleft()

# JavaScript (conceptual using array)
const dq = [];
dq.push(1);
dq.unshift(0);
dq.pop();
dq.shift();`,
      note: "Deques allow insertion and removal at both ends.",
    },
  },

  {
    id: 93,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Queue vs Stack (Key Comparison)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Queue",
          items: ["FIFO", "Fair scheduling", "Used in BFS", "Order preservation"],
        },
        {
          title: "Stack",
          items: [
          "LIFO",
          "Nested operations",
          "Used in DFS/recursion",
          "Backtracking",
          ],
        },
      ],
    },
  },

  {
    id: 94,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Real-World Applications",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Common Uses",
          items: [
          "CPU task scheduling",
          "Message queues",
          "Event handling",
          "Breadth-first search",
          ],
        },
        {
          title: "DSA Insight",
          items: [
          "Queues model time order",
          "Predictable processing",
          "Essential for graphs",
          "Core system primitive",
          ],
        },
      ],
    },
  },

  {
    id: 95,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Using array shift in hot paths",
          "Ignoring operation cost",
          "Confusing stack and queue",
          "Overengineering early",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Match structure to access pattern",
          "Think in FIFO vs LIFO",
          "Measure performance",
          "Keep designs simple",
          ],
        },
      ],
    },
  },

  {
    id: 96,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Summary: Queues & Deques at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Order preservation",
          "Fair processing",
          "Efficient operations",
          "Widely applicable",
          ],
        },
        {
          title: "Limitations",
          items: [
          "Limited random access",
          "Requires correct structure",
          "Misuse causes slowdown",
          "Conceptual confusion for beginners",
          ],
        },
      ],
    },
  },

  {
    id: 97,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Queue with Deque",
    type: "code-plus",
    content: {
      title: "FIFO Behavior",
      points: [
        "Enqueue at right",
        "Dequeue from left",
        "Efficient with deque",
      ],
      code: `from collections import deque

q = deque()
q.append('a')
q.append('b')
first = q.popleft()  # 'a'
`,
      note: "Deque supports O(1) append and popleft.",
    },
  },
  {
    id: 98,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "Queue with Two Stacks",
    type: "code-plus",
    content: {
      title: "FIFO via LIFO",
      points: [
        "Use two stacks",
        "Push to one",
        "Pop from the other",
      ],
      code: `class MyQueue:
    def __init__(self):
        self.in_stack = []
        self.out_stack = []

    def enqueue(self, x):
        self.in_stack.append(x)

    def dequeue(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
        return self.out_stack.pop()
`,
      note: "Two stacks simulate a queue.",
    },
  },
  {
    id: 99,
    moduleId: 6,
    moduleTitle: "Queues & Deques",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Hash Tables / Dictionaries",
          "Key-value storage",
          "Fast lookups",
          "Python & JavaScript internals",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Queues preserve order",
          "Deques add flexibility",
          "Structure choice matters",
          "You are building systems intuition",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 7: Hash Tables (Dictionaries & Maps)
  // =========================

  {
    id: 100,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Why Hash Tables Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem",
          items: [
          "Need fast lookups by key",
          "Searching lists is too slow",
          "Frequent existence checks",
          "Mapping relationships",
          ],
        },
        {
          title: "What Hash Tables Provide",
          items: [
          "Average O(1) lookup",
          "Key → value mapping",
          "Scales well with data",
          "Core system primitive",
          ],
        },
      ],
    },
  },

  {
    id: 101,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "What Is a Hash Table (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "Store values by key",
          "Use a hash function",
          "Keys map to indices",
          "Fast access by design",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Labeled lockers",
          "Key determines location",
          "Go directly to the locker",
          "No scanning required",
          ],
        },
      ],
    },
  },

  {
    id: 102,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "What Is a Hash Function?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Hash Function Role",
          items: [
          "Converts key to number",
          "Deterministic mapping",
          "Distributes keys",
          "Foundation of performance",
          ],
        },
        {
          title: "Good Hash Properties",
          items: [
          "Fast to compute",
          "Uniform distribution",
          "Low collision rate",
          "Consistent output",
          ],
        },
      ],
    },
  },

  {
    id: 103,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Creating Hash Tables (Python & JavaScript)",
    type: "code-plus",
    content: {
      title: "Basic Creation",
      points: ["Key-value pairs", "Dynamic size", "Built-in support"],
      code: `# Python
scores = {"alice": 90, "bob": 85}

# JavaScript
const scores = { alice: 90, bob: 85 };
// or
const scoresMap = new Map([["alice", 90], ["bob", 85]]);`,
      note: "Both languages provide native hash table abstractions.",
    },
  },

  {
    id: 104,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Lookup by Key – Average O(1)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Lookups Are Fast",
          items: [
          "Direct index via hash",
          "No iteration",
          "Constant average time",
          "Independent of size",
          ],
        },
        {
          title: "Common Uses",
          items: [
          "Existence checks",
          "Caching",
          "Counting frequency",
          "Indexing data",
          ],
        },
      ],
    },
  },

  {
    id: 105,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Lookup Example",
    type: "code-plus",
    content: {
      title: "Reading Values by Key",
      points: ["Direct access", "Fast operation", "Common DSA pattern"],
      code: `# Python
print(scores["alice"])

# JavaScript
console.log(scores["alice"]);
console.log(scoresMap.get("alice"));`,
      note: "Hash tables allow fast access by key.",
    },
  },

  {
    id: 106,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Inserting & Updating – Average O(1)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Insertion Behavior",
          items: [
          "Compute hash",
          "Place value",
          "Overwrite if key exists",
          "Fast on average",
          ],
        },
        {
          title: "Use Cases",
          items: ["Counters", "Caches", "State storage", "Configuration maps"],
        },
      ],
    },
  },

  {
    id: 107,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Insert & Update Example",
    type: "code-plus",
    content: {
      title: "Adding or Updating Keys",
      points: [
        "Same syntax for insert/update",
        "Average O(1)",
        "Very common",
      ],
      code: `# Python
scores["charlie"] = 88
scores["alice"] = 95

# JavaScript
scores["charlie"] = 88;
scores["alice"] = 95;
scoresMap.set("charlie", 88);`,
      note: "Inserting or updating uses the same operation.",
    },
  },

  {
    id: 108,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Collisions (Important Reality)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Is a Collision?",
          items: [
          "Two keys map to same index",
          "Unavoidable in practice",
          "Handled internally",
          "Affects worst-case",
          ],
        },
        {
          title: "Collision Handling",
          items: [
          "Chaining",
          "Open addressing",
          "Language-managed",
          "Abstracted from user",
          ],
        },
      ],
    },
  },

  {
    id: 109,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Time Complexity Reality",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Average Case",
          items: [
          "Lookup: O(1)",
          "Insert: O(1)",
          "Delete: O(1)",
          "Assumes good hashing",
          ],
        },
        {
          title: "Worst Case",
          items: [
          "O(n) due to collisions",
          "Rare in practice",
          "Mitigated by implementations",
          "Still important to know",
          ],
        },
      ],
    },
  },

  {
    id: 110,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "When NOT to Use a Hash Table",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Poor Fit Scenarios",
          items: [
          "Ordered data required",
          "Range queries",
          "Frequent sorting",
          "Index-based access needed",
          ],
        },
        {
          title: "Better Alternatives",
          items: ["Arrays / Lists", "Trees", "Heaps", "Specialized structures"],
        },
      ],
    },
  },

  {
    id: 111,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Assuming worst-case never happens",
          "Using mutable keys",
          "Overusing objects for everything",
          "Ignoring memory cost",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Understand average vs worst",
          "Choose keys carefully",
          "Use maps intentionally",
          "Think in trade-offs",
          ],
        },
      ],
    },
  },

  {
    id: 112,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Summary: Hash Tables at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Very fast lookups",
          "Flexible keys",
          "Widely used",
          "Core DSA tool",
          ],
        },
        {
          title: "Limitations",
          items: [
          "No inherent order",
          "Memory overhead",
          "Worst-case collisions",
          "Not for range queries",
          ],
        },
      ],
    },
  },

  {
    id: 113,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Hash Table Frequency",
    type: "code-plus",
    content: {
      title: "Count Occurrences",
      points: [
        "Use dict for counting",
        "Average O(1) lookup",
        "Common interview pattern",
      ],
      code: `counts = {}
for ch in "banana":
    counts[ch] = counts.get(ch, 0) + 1
print(counts)
`,
      note: "Hash tables are great for frequency counting.",
    },
  },
  {
    id: 114,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "Hash Map Lookup",
    type: "code-plus",
    content: {
      title: "Fast Access",
      points: [
        "Store key/value",
        "Check in O(1) average",
        "Great for caching",
      ],
      code: `prices = {"apple": 2, "banana": 1}
print(prices.get("apple"))
`,
      note: "Hash maps make lookups fast.",
    },
  },
  {
    id: 115,
    moduleId: 7,
    moduleTitle: "Hash Tables (Dictionaries & Maps)",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Linked Lists",
          "Node-based structures",
          "Pointer intuition",
          "Why they still matter",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Hash tables trade memory for speed",
          "Average-case thinking matters",
          "Keys unlock performance",
          "Essential for real systems",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 8: Linked Lists
  // =========================

  {
    id: 116,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Why Linked Lists Exist",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Limitation of Arrays",
          items: [
          "Insertions can be expensive",
          "Deletions require shifting",
          "Memory must be contiguous",
          "Resizing has hidden costs",
          ],
        },
        {
          title: "What Linked Lists Offer",
          items: [
          "Efficient insertions/deletions",
          "No shifting of elements",
          "Flexible memory usage",
          "Dynamic structure",
          ],
        },
      ],
    },
  },

  {
    id: 117,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "What Is a Linked List (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "Sequence of nodes",
          "Each node stores data",
          "Each node points to the next",
          "No contiguous memory",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Chain of boxes",
          "Each box knows the next",
          "You must start at the head",
          "Sequential access only",
          ],
        },
      ],
    },
  },

  {
    id: 118,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Node Structure",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What a Node Contains",
          items: [
          "Data value",
          "Reference to next node",
          "Sometimes reference to previous",
          "Small, simple unit",
          ],
        },
        {
          title: "Why This Matters",
          items: [
          "Enables dynamic growth",
          "Supports efficient updates",
          "Forms basis of many structures",
          "Used internally in systems",
          ],
        },
      ],
    },
  },

  {
    id: 119,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Creating a Node (Python & JavaScript)",
    type: "code-plus",
    content: {
      title: "Basic Node Definition",
      points: [
        "Stores value",
        "Stores next reference",
        "Language-agnostic concept",
      ],
      code: `# Python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

# JavaScript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}`,
      note: "Nodes are the building blocks of linked lists.",
    },
  },

  {
    id: 120,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Singly Linked List",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Characteristics",
          items: [
          "Each node points forward",
          "One-direction traversal",
          "Simple structure",
          "Low memory overhead",
          ],
        },
        {
          title: "Trade-Offs",
          items: [
          "No backward traversal",
          "Search is linear",
          "Extra pointer per node",
          "More complex than arrays",
          ],
        },
      ],
    },
  },

  {
    id: 121,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Traversing a Linked List – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Traversal Is Linear",
          items: [
          "Must start at head",
          "Visit nodes one by one",
          "No index-based access",
          "Sequential movement",
          ],
        },
        {
          title: "Implications",
          items: [
          "Search is slower than arrays",
          "Predictable performance",
          "Simple logic",
          "Acceptable for many cases",
          ],
        },
      ],
    },
  },

  {
    id: 122,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Traversal Example",
    type: "code-plus",
    content: {
      title: "Walking Through the List",
      points: ["Start at head", "Move using next", "Stop at null"],
      code: `# Python
current = head
while current:
    print(current.value)
    current = current.next

# JavaScript
let current = head;
while (current) {
  console.log(current.value);
  current = current.next;
}`,
      note: "Traversal requires visiting each node sequentially.",
    },
  },

  {
    id: 123,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Insertion at the Beginning – O(1)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why It’s Fast",
          items: [
          "No shifting required",
          "Just rewire pointers",
          "Constant time",
          "Very efficient operation",
          ],
        },
        {
          title: "Use Cases",
          items: [
          "Stacks implementation",
          "Frequent front inserts",
          "Streaming data",
          "Undo operations",
          ],
        },
      ],
    },
  },

  {
    id: 124,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Insert at Beginning Example",
    type: "code-plus",
    content: {
      title: "Adding a New Head",
      points: [
        "New node points to old head",
        "Head is updated",
        "O(1) operation",
      ],
      code: `# Python
new_node = Node(5)
new_node.next = head
head = new_node

# JavaScript
const newNode = new Node(5);
newNode.next = head;
head = newNode;`,
      note: "Only pointers change; no data movement.",
    },
  },

  {
    id: 125,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Insertion at the End – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why It Costs More",
          items: [
          "Must traverse to tail",
          "No direct tail access",
          "Linear time",
          "Depends on list length",
          ],
        },
        {
          title: "Optimization Insight",
          items: [
          "Maintain tail pointer",
          "Turns insertion into O(1)",
          "Common improvement",
          "Design decision matters",
          ],
        },
      ],
    },
  },

  {
    id: 126,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Deletion of a Node – O(n)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Deletion Mechanics",
          items: [
          "Find previous node",
          "Rewire next pointer",
          "Free removed node",
          "Traversal required",
          ],
        },
        {
          title: "Important Note",
          items: [
          "Deletion itself is O(1)",
          "Finding node is O(n)",
          "Cost depends on access",
          "Common interview trap",
          ],
        },
      ],
    },
  },

  {
    id: 127,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Deletion Example",
    type: "code-plus",
    content: {
      title: "Removing a Node",
      points: [
        "Track previous node",
        "Bypass target node",
        "List remains intact",
      ],
      code: `# Python
prev.next = current.next

# JavaScript
prev.next = current.next;`,
      note: "Deletion rewires pointers without shifting data.",
    },
  },

  {
    id: 128,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Linked Lists vs Arrays",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Linked Lists",
          items: [
          "Fast insertions/deletions",
          "No contiguous memory",
          "Sequential access",
          "Pointer overhead",
          ],
        },
        {
          title: "Arrays",
          items: [
          "Fast index access",
          "Contiguous memory",
          "Expensive inserts/deletes",
          "Cache-friendly",
          ],
        },
      ],
    },
  },

  {
    id: 129,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Expecting index access",
          "Forgetting to update pointers",
          "Losing head reference",
          "Ignoring null checks",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Think in nodes",
          "Trace pointers carefully",
          "Draw diagrams",
          "Be methodical",
          ],
        },
      ],
    },
  },

  {
    id: 130,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Summary: Linked Lists at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Efficient updates",
          "Flexible size",
          "Simple node model",
          "Foundational structure",
          ],
        },
        {
          title: "Limitations",
          items: [
          "Slow access",
          "Extra memory",
          "Pointer complexity",
          "Harder to debug",
          ],
        },
      ],
    },
  },

  {
    id: 131,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Linked List Traversal",
    type: "code-plus",
    content: {
      title: "Walk the Nodes",
      points: [
        "Each node points to next",
        "Traversal is O(n)",
        "Foundation for many problems",
      ],
      code: `class Node:
    def __init__(self, val, nxt=None):
        self.val = val
        self.next = nxt

head = Node(1, Node(2, Node(3)))
cur = head
while cur:
    print(cur.val)
    cur = cur.next
`,
      note: "Linked lists trade O(1) inserts for O(n) access.",
    },
  },
  {
    id: 132,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "Reverse Linked List",
    type: "code-plus",
    content: {
      title: "Iterative",
      points: [
        "Use prev and current",
        "Reverse pointers",
        "O(n) time",
      ],
      code: `def reverse(head):
    prev = None
    cur = head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev = cur
        cur = nxt
    return prev
`,
      note: "Pointer reversal is a classic linked list task.",
    },
  },
  {
    id: 133,
    moduleId: 8,
    moduleTitle: "Linked Lists",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Trees",
          "Hierarchical data",
          "Binary trees",
          "Traversal strategies",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Linked lists trade access for flexibility",
          "Pointers are powerful",
          "Design choices matter",
          "You are leveling up",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 9: Trees
  // =========================

  {
    id: 134,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Why Trees Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Limitation of Linear Structures",
          items: [
          "Lists grow long and slow to search",
          "Hierarchical data is hard to model",
          "Relationships are not flat",
          "Performance degrades at scale",
          ],
        },
        {
          title: "What Trees Provide",
          items: [
          "Hierarchical organization",
          "Faster search patterns",
          "Natural parent–child modeling",
          "Foundation of many systems",
          ],
        },
      ],
    },
  },

  {
    id: 135,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "What Is a Tree (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Definition",
          items: [
          "Non-linear data structure",
          "Made of nodes",
          "Connected by edges",
          "One root node",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Family tree",
          "Folder structure",
          "Organization chart",
          "Hierarchical flow",
          ],
        },
      ],
    },
  },

  {
    id: 136,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Tree Terminology (Must Know)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Key Terms",
          items: ["Root", "Parent", "Child", "Leaf"],
        },
        {
          title: "Structural Terms",
          items: ["Edge", "Subtree", "Depth", "Height"],
        },
      ],
    },
  },

  {
    id: 137,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Binary Trees",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Definition",
          items: [
          "Each node has at most two children",
          "Left child",
          "Right child",
          "Very common structure",
          ],
        },
        {
          title: "Why Binary Trees?",
          items: [
          "Simple rules",
          "Efficient traversal",
          "Foundation for BSTs",
          "Used in many algorithms",
          ],
        },
      ],
    },
  },

  {
    id: 138,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Tree Node Structure",
    type: "code-plus",
    content: {
      title: "Binary Tree Node",
      points: [
        "Stores value",
        "References left and right",
        "Same concept in both languages",
      ],
      code: `# Python
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

# JavaScript
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}`,
      note: "Tree nodes hold data and references to children.",
    },
  },

  {
    id: 139,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Why Trees Are Not Linear",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Key Difference",
          items: [
          "Multiple paths",
          "Branching structure",
          "No single next element",
          "Traversal choice matters",
          ],
        },
        {
          title: "DSA Insight",
          items: [
          "Algorithms must choose paths",
          "Traversal strategies are required",
          "Order is not implicit",
          "Power comes with complexity",
          ],
        },
      ],
    },
  },

  {
    id: 140,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Tree Traversal (Big Picture)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Traversal Means",
          items: [
          "Visiting all nodes",
          "In a specific order",
          "Systematic exploration",
          "Foundation of tree algorithms",
          ],
        },
        {
          title: "Main Types",
          items: [
          "Depth-First Search (DFS)",
          "Breadth-First Search (BFS)",
          "Recursive approaches",
          "Iterative approaches",
          ],
        },
      ],
    },
  },

  {
    id: 141,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Depth-First Traversal (DFS)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "DFS Idea",
          items: [
          "Go as deep as possible",
          "Explore one branch fully",
          "Uses stack or recursion",
          "Common pattern",
          ],
        },
        {
          title: "DFS Variants",
          items: [
          "Pre-order",
          "In-order",
          "Post-order",
          "Different visit timing",
          ],
        },
      ],
    },
  },

  {
    id: 142,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Pre-Order Traversal",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Visit Order",
          items: [
          "Visit node first",
          "Then left subtree",
          "Then right subtree",
          "Root-first approach",
          ],
        },
        {
          title: "Use Cases",
          items: [
          "Copying trees",
          "Prefix expressions",
          "Structure serialization",
          "Tree creation",
          ],
        },
      ],
    },
  },

  {
    id: 143,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Pre-Order Example",
    type: "code-plus",
    content: {
      title: "DFS Pre-Order",
      points: [
        "Root → Left → Right",
        "Recursive pattern",
        "Stack-based implicitly",
      ],
      code: `# Python
def preorder(node):
    if not node:
        return
    print(node.value)
    preorder(node.left)
    preorder(node.right)

# JavaScript
function preorder(node) {
  if (!node) return;
  console.log(node.value);
  preorder(node.left);
  preorder(node.right);
}`,
      note: "Pre-order visits the current node before its children.",
    },
  },

  {
    id: 144,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "In-Order Traversal",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Visit Order",
          items: [
          "Left subtree first",
          "Then current node",
          "Then right subtree",
          "Sorted output for BSTs",
          ],
        },
        {
          title: "Why It’s Important",
          items: [
          "Binary Search Trees",
          "Ordered data",
          "Range queries",
          "Traversal logic",
          ],
        },
      ],
    },
  },

  {
    id: 145,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "In-Order Example",
    type: "code-plus",
    content: {
      title: "DFS In-Order",
      points: [
        "Left → Root → Right",
        "Produces sorted order in BST",
        "Classic traversal",
      ],
      code: `# Python
def inorder(node):
    if not node:
        return
    inorder(node.left)
    print(node.value)
    inorder(node.right)

# JavaScript
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.value);
  inorder(node.right);
}`,
      note:
        "In-order traversal processes nodes in sorted order for BSTs.",
    },
  },

  {
    id: 146,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Breadth-First Traversal (BFS)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "BFS Idea",
          items: [
          "Level-by-level traversal",
          "Uses a queue",
          "Explores neighbors first",
          "Wider exploration",
          ],
        },
        {
          title: "When to Use BFS",
          items: [
          "Shortest path problems",
          "Level order output",
          "Hierarchy processing",
          "Balanced exploration",
          ],
        },
      ],
    },
  },

  {
    id: 147,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "BFS Example",
    type: "code-plus",
    content: {
      title: "Level-Order Traversal",
      points: ["Uses queue", "FIFO behavior", "Iterative approach"],
      code: `# Python
from collections import deque
def bfs(root):
    q = deque([root])
    while q:
        node = q.popleft()
        print(node.value)
        if node.left:
            q.append(node.left)
        if node.right:
            q.append(node.right)

# JavaScript
function bfs(root) {
  const q = [root];
  while (q.length) {
    const node = q.shift();
    console.log(node.value);
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
}`,
      note: "BFS explores the tree level by level.",
    },
  },

  {
    id: 148,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Confusing traversal orders",
          "Forgetting base cases",
          "Losing references",
          "Not visualizing the tree",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Draw the tree",
          "Trace recursion step by step",
          "Understand traversal purpose",
          "Practice small examples",
          ],
        },
      ],
    },
  },

  {
    id: 149,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Summary: Trees at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Hierarchical modeling",
          "Efficient traversal",
          "Scales well",
          "Very expressive",
          ],
        },
        {
          title: "Limitations",
          items: [
          "More complex than lists",
          "Traversal required",
          "Pointer-heavy",
          "Harder debugging",
          ],
        },
      ],
    },
  },

  {
    id: 150,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Inorder Traversal",
    type: "code-plus",
    content: {
      title: "Depth-First Example",
      points: [
        "Left → Node → Right",
        "Works on binary trees",
        "Outputs sorted order for BST",
      ],
      code: `def inorder(node):
    if not node:
        return
    inorder(node.left)
    print(node.val)
    inorder(node.right)
`,
      note: "Tree traversals are core DSA building blocks.",
    },
  },
  {
    id: 151,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "Preorder Traversal",
    type: "code-plus",
    content: {
      title: "Depth-First",
      points: [
        "Node → Left → Right",
        "Recursive",
        "Used for copying trees",
      ],
      code: `def preorder(node):
    if not node:
        return
    print(node.val)
    preorder(node.left)
    preorder(node.right)
`,
      note: "Preorder is another core tree traversal.",
    },
  },
  {
    id: 152,
    moduleId: 9,
    moduleTitle: "Trees",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Binary Search Trees (BST)",
          "Ordered trees",
          "Search efficiency",
          "Insert & delete logic",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Trees model hierarchy",
          "Traversal defines behavior",
          "DFS and BFS are fundamental",
          "You are entering advanced DSA",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 10: Binary Search Trees (BST)
  // =========================

  {
    id: 153,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "Why Binary Search Trees Exist",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Search Problem",
          items: [
          "Searching arrays is O(n)",
          "Hash tables lose ordering",
          "Sorted lists are costly to maintain",
          "Need structure + speed",
          ],
        },
        {
          title: "What BSTs Provide",
          items: [
          "Ordered data storage",
          "Faster search than lists",
          "Hierarchical structure",
          "Balance between speed and order",
          ],
        },
      ],
    },
  },

  {
    id: 154,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "BST Property (The Golden Rule)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "BST Rule",
          items: [
          "Left subtree < node",
          "Right subtree > node",
          "Rule applies recursively",
          "No duplicates (by design)",
          ],
        },
        {
          title: "Why This Matters",
          items: [
          "Enables binary search",
          "Predictable traversal",
          "Efficient operations",
          "Foundation of performance",
          ],
        },
      ],
    },
  },

  {
    id: 155,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "BST vs Regular Binary Tree",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Regular Binary Tree",
          items: [
          "No ordering rule",
          "Traversal order arbitrary",
          "Search is O(n)",
          "Structure only",
          ],
        },
        {
          title: "Binary Search Tree",
          items: [
          "Strict ordering",
          "Guided traversal",
          "Search is faster",
          "Structure + logic",
          ],
        },
      ],
    },
  },

  {
    id: 156,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "Searching in a BST",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Search Logic",
          items: [
          "Compare target with node",
          "Go left or right",
          "Eliminate half the tree",
          "Repeat until found or null",
          ],
        },
        {
          title: "Performance Insight",
          items: [
          "O(log n) when balanced",
          "O(n) when skewed",
          "Shape matters",
          "Balance is critical",
          ],
        },
      ],
    },
  },

  {
    id: 157,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "BST Search Example",
    type: "code-plus",
    content: {
      title: "Searching for a Value",
      points: [
        "Compare and branch",
        "Recursive or iterative",
        "Language-agnostic logic",
      ],
      code: `# Python
def search(node, target):
    if not node:
        return False
    if node.value == target:
        return True
    if target < node.value:
        return search(node.left, target)
    return search(node.right, target)

# JavaScript
function search(node, target) {
  if (!node) return false;
  if (node.value === target) return true;
  if (target < node.value) {
    return search(node.left, target);
  }
  return search(node.right, target);
}`,
      note:
        "BST search eliminates half the tree at each step when balanced.",
    },
  },

  {
    id: 158,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "Inserting into a BST",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Insertion Logic",
          items: [
          "Compare with current node",
          "Move left or right",
          "Insert at leaf position",
          "Preserve BST rule",
          ],
        },
        {
          title: "Performance",
          items: [
          "O(log n) when balanced",
          "O(n) when skewed",
          "Insertion affects shape",
          "Order of inserts matters",
          ],
        },
      ],
    },
  },

  {
    id: 159,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "BST Insert Example",
    type: "code-plus",
    content: {
      title: "Adding a New Node",
      points: [
        "Traverse until null",
        "Attach new node",
        "Maintain ordering",
      ],
      code: `# Python
def insert(node, value):
    if not node:
        return TreeNode(value)
    if value < node.value:
        node.left = insert(node.left, value)
    else:
        node.right = insert(node.right, value)
    return node

# JavaScript
function insert(node, value) {
  if (!node) return new TreeNode(value);
  if (value < node.value) {
    node.left = insert(node.left, value);
  } else {
    node.right = insert(node.right, value);
  }
  return node;
}`,
      note: "Insertion follows the BST ordering rule recursively.",
    },
  },

  {
    id: 160,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "Deletion Is Harder (Why?)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Deletion Cases",
          items: [
          "Node with no children",
          "Node with one child",
          "Node with two children",
          "Each case handled differently",
          ],
        },
        {
          title: "Why It’s Tricky",
          items: [
          "Must preserve ordering",
          "Tree shape changes",
          "Multiple valid outcomes",
          "Common source of bugs",
          ],
        },
      ],
    },
  },

  {
    id: 161,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "Balanced vs Skewed Trees",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Balanced Tree",
          items: [
          "Height ≈ log n",
          "Fast operations",
          "Efficient structure",
          "Desired state",
          ],
        },
        {
          title: "Skewed Tree",
          items: [
          "Height ≈ n",
          "Degenerates to list",
          "Poor performance",
          "Avoid in practice",
          ],
        },
      ],
    },
  },

  {
    id: 162,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "Why Self-Balancing Trees Exist",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem",
          items: [
          "Insertion order affects shape",
          "Manual balancing is hard",
          "Performance degrades silently",
          "Worst-case behavior appears",
          ],
        },
        {
          title: "The Solution",
          items: [
          "AVL Trees",
          "Red-Black Trees",
          "Automatic rotations",
          "Guaranteed performance",
          ],
        },
      ],
    },
  },

  {
    id: 163,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Assuming BSTs are always fast",
          "Ignoring tree balance",
          "Mixing up traversal orders",
          "Forgetting edge cases",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Shape affects performance",
          "Balance matters",
          "Trace operations carefully",
          "Think in recursion",
          ],
        },
      ],
    },
  },

  {
    id: 164,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "Summary: BSTs at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Ordered storage",
          "Faster search than lists",
          "Hierarchical structure",
          "Foundational DSA concept",
          ],
        },
        {
          title: "Limitations",
          items: [
          "Can become unbalanced",
          "Deletion complexity",
          "More complex than arrays",
          "Needs careful implementation",
          ],
        },
      ],
    },
  },

  {
    id: 165,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "BST Insert",
    type: "code-plus",
    content: {
      title: "Binary Search Tree",
      points: [
        "Left is smaller, right is larger",
        "Insert recursively",
        "Average O(log n)",
      ],
      code: `def insert(node, value):
    if not node:
        return Node(value)
    if value < node.val:
        node.left = insert(node.left, value)
    else:
        node.right = insert(node.right, value)
    return node
`,
      note: "BST insert keeps ordering for fast search.",
    },
  },
  {
    id: 166,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "BST Search",
    type: "code-plus",
    content: {
      title: "Find a Value",
      points: [
        "Compare and go left/right",
        "Average O(log n)",
        "Worst O(n)",
      ],
      code: `def search(node, target):
    if not node:
        return False
    if node.val == target:
        return True
    if target < node.val:
        return search(node.left, target)
    return search(node.right, target)
`,
      note: "BST search follows the ordering property.",
    },
  },
  {
    id: 167,
    moduleId: 10,
    moduleTitle: "Binary Search Trees (BST)",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Heaps & Priority Queues",
          "Partial ordering",
          "Efficient min/max access",
          "Scheduling problems",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "BSTs combine order and structure",
          "Balance determines performance",
          "Tree shape matters",
          "You are now deep into DSA",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 11: Heaps & Priority Queues
  // =========================

  {
    id: 168,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "Why Heaps Exist",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem",
          items: [
          "Need fast access to min or max",
          "Sorting everything is wasteful",
          "Queues don’t prioritize",
          "Frequent top-element queries",
          ],
        },
        {
          title: "What Heaps Provide",
          items: [
          "Fast min/max access",
          "Partial ordering",
          "Efficient insert/remove",
          "Foundation of priority queues",
          ],
        },
      ],
    },
  },

  {
    id: 169,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "What Is a Heap (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "A special tree structure",
          "Partially ordered",
          "Parent dominates children",
          "Not fully sorted",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Tournament bracket",
          "Winner always on top",
          "Local comparisons only",
          "Efficient top access",
          ],
        },
      ],
    },
  },

  {
    id: 170,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "Min-Heap vs Max-Heap",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Min-Heap",
          items: [
          "Smallest element at root",
          "Parent ≤ children",
          "Fast min access",
          "Common default",
          ],
        },
        {
          title: "Max-Heap",
          items: [
          "Largest element at root",
          "Parent ≥ children",
          "Fast max access",
          "Used for ranking",
          ],
        },
      ],
    },
  },

  {
    id: 171,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "Heap as an Array (Important Insight)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Arrays Work",
          items: [
          "Complete binary tree",
          "No gaps",
          "Index math replaces pointers",
          "Memory efficient",
          ],
        },
        {
          title: "Index Relationships",
          items: [
          "Parent: (i - 1) // 2",
          "Left child: 2i + 1",
          "Right child: 2i + 2",
          "Language-independent",
          ],
        },
      ],
    },
  },

  {
    id: 172,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "Heap Operations & Complexity",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Operations",
          items: ["Insert", "Peek (top)", "Remove top", "Heapify"],
        },
        {
          title: "Time Complexity",
          items: [
          "Peek: O(1)",
          "Insert: O(log n)",
          "Remove: O(log n)",
          "Heapify: O(n)",
          ],
        },
      ],
    },
  },

  {
    id: 173,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "Using Heaps in Python & JavaScript",
    type: "code-plus",
    content: {
      title: "Built-in Support",
      points: [
        "Python: heapq (min-heap)",
        "JavaScript: custom or library",
        "Same conceptual behavior",
      ],
      code: `# Python
import heapq
heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 2)
heapq.heappush(heap, 8)
print(heapq.heappop(heap))  # 2

# JavaScript (conceptual using array + sort)
const heap = [];
heap.push(5, 2, 8);
heap.sort((a, b) => a - b);
console.log(heap.shift()); // 2`,
      note:
        "Python provides native heap support; JavaScript requires custom handling or libraries.",
    },
  },

  {
    id: 174,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "What Is a Priority Queue?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Definition",
          items: [
          "Queue with priorities",
          "Highest priority served first",
          "Not FIFO",
          "Heap-backed",
          ],
        },
        {
          title: "Why It Matters",
          items: [
          "Scheduling tasks",
          "Event simulation",
          "Shortest-path algorithms",
          "System design staple",
          ],
        },
      ],
    },
  },

  {
    id: 175,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "When to Use Heaps",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Good Use Cases",
          items: [
          "Top-K problems",
          "Streaming data",
          "Repeated min/max queries",
          "Dynamic priorities",
          ],
        },
        {
          title: "When NOT to Use",
          items: [
          "Need full sorting",
          "Random access required",
          "Simple queues suffice",
          "Overhead unnecessary",
          ],
        },
      ],
    },
  },

  {
    id: 176,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Assuming heap is fully sorted",
          "Using heaps for simple cases",
          "Ignoring log n cost",
          "Confusing with BSTs",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Heap is partially ordered",
          "Use for priority access",
          "Choose by operation needs",
          "Understand trade-offs",
          ],
        },
      ],
    },
  },

  {
    id: 177,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "Summary: Heaps at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Fast top access",
          "Efficient inserts/removals",
          "Scales well",
          "Priority handling",
          ],
        },
        {
          title: "Limitations",
          items: [
          "No fast search",
          "Not fully ordered",
          "More complex than arrays",
          "Needs careful implementation",
          ],
        },
      ],
    },
  },

  {
    id: 178,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "Heap Example",
    type: "code-plus",
    content: {
      title: "Priority Queue",
      points: [
        "Heap keeps smallest item on top",
        "Efficient push/pop",
        "Used in scheduling",
      ],
      code: `import heapq

heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 2)
heapq.heappush(heap, 9)
smallest = heapq.heappop(heap)  # 2
`,
      note: "Heaps give O(log n) insert and remove.",
    },
  },
  {
    id: 179,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "Heapify",
    type: "code-plus",
    content: {
      title: "Build Heap",
      points: [
        "Convert list to heap",
        "O(n) time",
        "Prepares for priority ops",
      ],
      code: `import heapq

nums = [9, 5, 1, 3]
heapq.heapify(nums)
`,
      note: "heapify builds a heap in linear time.",
    },
  },
  {
    id: 180,
    moduleId: 11,
    moduleTitle: "Heaps & Priority Queues",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Recursion",
          "Call stack mechanics",
          "Base cases",
          "Thinking recursively",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Heaps optimize priority access",
          "Partial order is powerful",
          "Logarithmic operations matter",
          "You are ready for recursion",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 12: Recursion
  // =========================

  {
    id: 181,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "Why Recursion Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Initial Fear",
          items: [
          "Feels abstract and confusing",
          "Hard to trace mentally",
          "Often taught too early",
          "Seen as magic",
          ],
        },
        {
          title: "The Reality",
          items: [
          "Natural way to solve nested problems",
          "Matches tree-like structures",
          "Built on stack behavior",
          "Essential for advanced DSA",
          ],
        },
      ],
    },
  },

  {
    id: 182,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "What Is Recursion (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Definition",
          items: [
          "A function calling itself",
          "Solves smaller subproblems",
          "Each call reduces the problem",
          "Stops at a base case",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Delegation",
          "Solve one step and trust the rest",
          "Stack of responsibilities",
          "Unwinding at the end",
          ],
        },
      ],
    },
  },

  {
    id: 183,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "The Two Required Parts",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Base Case",
          items: [
          "Stopping condition",
          "Prevents infinite calls",
          "Simplest problem",
          "Always checked first",
          ],
        },
        {
          title: "Recursive Case",
          items: [
          "Calls itself",
          "Moves toward base case",
          "Reduces problem size",
          "Defines repetition",
          ],
        },
      ],
    },
  },

  {
    id: 184,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "Why the Call Stack Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Call Stack Role",
          items: [
          "Stores function calls",
          "Remembers local variables",
          "Tracks return points",
          "Uses stack (LIFO) behavior",
          ],
        },
        {
          title: "Important Implications",
          items: [
          "Each call uses memory",
          "Deep recursion risks overflow",
          "Order of execution matters",
          "Explains recursion behavior",
          ],
        },
      ],
    },
  },

  {
    id: 185,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "Simple Recursion Example",
    type: "code-plus",
    content: {
      title: "Counting Down",
      points: ["Clear base case", "Single recursive call", "Easy to trace"],
      code: `# Python
def countdown(n):
    if n == 0:
        return
    print(n)
    countdown(n - 1)

# JavaScript
function countdown(n) {
  if (n === 0) return;
  console.log(n);
  countdown(n - 1);
}`,
      note: "Each call reduces n until the base case is reached.",
    },
  },

  {
    id: 186,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "Tracing Recursion (Step-by-Step)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Call Phase",
          items: ["countdown(3)", "countdown(2)", "countdown(1)", "countdown(0)"],
        },
        {
          title: "Return Phase",
          items: [
          "Return from countdown(0)",
          "Return from countdown(1)",
          "Return from countdown(2)",
          "Return from countdown(3)",
          ],
        },
      ],
    },
  },

  {
    id: 187,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "Recursion vs Loops",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Recursion",
          items: [
          "Elegant for hierarchical problems",
          "Natural for trees and graphs",
          "Clear problem decomposition",
          "Uses call stack",
          ],
        },
        {
          title: "Loops",
          items: [
          "Often more memory-efficient",
          "Better for simple repetition",
          "Explicit control flow",
          "No stack overhead",
          ],
        },
      ],
    },
  },

  {
    id: 188,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "When Recursion Is a Bad Idea",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Red Flags",
          items: [
          "Very deep recursion",
          "Simple linear repetition",
          "Risk of stack overflow",
          "Performance-critical loops",
          ],
        },
        {
          title: "Better Alternatives",
          items: [
          "Iterative loops",
          "Explicit stacks",
          "Bottom-up approaches",
          "Hybrid solutions",
          ],
        },
      ],
    },
  },

  {
    id: 189,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Missing base case",
          "Base case never reached",
          "Too much work per call",
          "Fear of recursion",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Always define base case first",
          "Ensure progress toward base case",
          "Think in smaller problems",
          "Trust the recursion",
          ],
        },
      ],
    },
  },

  {
    id: 190,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "Recursive Factorial",
    type: "code-plus",
    content: {
      title: "Base + Recursive Case",
      points: [
        "Base case stops recursion",
        "Each call solves smaller problem",
        "Easy to reason about",
      ],
      code: `def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)
`,
      note: "Recursion needs a clear base case.",
    },
  },
  {
    id: 191,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "Recursive Sum",
    type: "code-plus",
    content: {
      title: "Reduce Problem",
      points: [
        "Add first element",
        "Recurse on rest",
        "Base case for empty",
      ],
      code: `def sum_list(nums):
    if not nums:
        return 0
    return nums[0] + sum_list(nums[1:])
`,
      note: "Recursion often reduces input size each call.",
    },
  },
  {
    id: 192,
    moduleId: 12,
    moduleTitle: "Recursion",
    title: "Recursion Prepares You For",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Upcoming Topics",
          items: [
          "Tree traversals",
          "Divide & conquer",
          "Dynamic programming",
          "Graph algorithms",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Recursion is not magic",
          "It relies on stacks",
          "Base cases are everything",
          "Mastery unlocks advanced DSA",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 13: Searching Algorithms
  // =========================

  {
    id: 193,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Why Searching Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Core Problem",
          items: [
          "Find data efficiently",
          "Repeated lookups are common",
          "Naive scans are slow",
          "Scale changes everything",
          ],
        },
        {
          title: "What Searching Solves",
          items: [
          "Fast retrieval",
          "Decision making",
          "Index utilization",
          "Performance guarantees",
          ],
        },
      ],
    },
  },

  {
    id: 194,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "What Is Searching (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Definition",
          items: [
          "Locate a target value",
          "Within a data structure",
          "Return position or existence",
          "Stop when found or exhausted",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Looking up a name",
          "Checking shelves",
          "Narrowing possibilities",
          "Elimination process",
          ],
        },
      ],
    },
  },

  {
    id: 195,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Linear Search",
    type: "infographic",
    content: {
      cards: [
        {
          title: "How It Works",
          items: [
          "Check elements one by one",
          "Start from the beginning",
          "Stop when found",
          "Works on any list",
          ],
        },
        {
          title: "Performance",
          items: [
          "Time: O(n)",
          "Space: O(1)",
          "Simple but slow",
          "Baseline approach",
          ],
        },
      ],
    },
  },

  {
    id: 196,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Linear Search Example",
    type: "code-plus",
    content: {
      title: "Sequential Scan",
      points: [
        "No assumptions",
        "Works on unsorted data",
        "Predictable behavior",
      ],
      code: `# Python
def linear_search(arr, target):
    for i, val in enumerate(arr):
        if val == target:
            return i
    return -1

# JavaScript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,
      note:
        "Linear search checks each element until the target is found.",
    },
  },

  {
    id: 197,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "When Linear Search Is Acceptable",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Good Scenarios",
          items: [
          "Small datasets",
          "One-off searches",
          "Unsorted data",
          "Early exits likely",
          ],
        },
        {
          title: "Poor Scenarios",
          items: [
          "Large datasets",
          "Repeated searches",
          "Performance-critical paths",
          "Sorted data available",
          ],
        },
      ],
    },
  },

  {
    id: 198,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Binary Search (The Upgrade)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "Divide search space in half",
          "Compare with middle",
          "Eliminate half each step",
          "Repeat until found",
          ],
        },
        {
          title: "Critical Requirement",
          items: [
          "Data must be sorted",
          "Random access needed",
          "Order is essential",
          "Assumption must hold",
          ],
        },
      ],
    },
  },

  {
    id: 199,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Binary Search Complexity",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Performance",
          items: [
          "Time: O(log n)",
          "Space: O(1) iterative",
          "Very scalable",
          "Huge improvement",
          ],
        },
        {
          title: "Why It’s Fast",
          items: [
          "Halves problem size",
          "Logarithmic growth",
          "Predictable steps",
          "Mathematically optimal",
          ],
        },
      ],
    },
  },

  {
    id: 200,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Binary Search Example",
    type: "code-plus",
    content: {
      title: "Divide and Conquer Search",
      points: ["Sorted input", "Midpoint comparison", "Iterative version"],
      code: `# Python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        if target < arr[mid]:
            right = mid - 1
        else:
            left = mid + 1
    return -1

# JavaScript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (target < arr[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}`,
      note: "Binary search repeatedly halves the search space.",
    },
  },

  {
    id: 201,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Binary Search Pitfalls",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Common Errors",
          items: [
          "Using unsorted data",
          "Off-by-one mistakes",
          "Infinite loops",
          "Wrong mid calculation",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Validate preconditions",
          "Careful boundary updates",
          "Test edge cases",
          "Trace iterations",
          ],
        },
      ],
    },
  },

  {
    id: 202,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Searching Beyond Arrays",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Other Structures",
          items: [
          "BSTs (log n search)",
          "Hash tables (O(1) avg)",
          "Graphs (BFS/DFS)",
          "Tries (strings)",
          ],
        },
        {
          title: "Key Insight",
          items: [
          "Search depends on structure",
          "Choose wisely",
          "Trade-offs exist",
          "No one-size-fits-all",
          ],
        },
      ],
    },
  },

  {
    id: 203,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Always using linear search",
          "Forgetting sort requirement",
          "Overusing binary search",
          "Ignoring data structure choice",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Match algorithm to data",
          "Validate assumptions",
          "Optimize only when needed",
          "Think in complexity",
          ],
        },
      ],
    },
  },

  {
    id: 204,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Summary: Searching at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Linear Search",
          items: ["Simple", "No requirements", "O(n)", "Baseline"],
        },
        {
          title: "Binary Search",
          items: ["Fast", "Requires sorted data", "O(log n)", "Scalable"],
        },
      ],
    },
  },

  {
    id: 205,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Binary Search",
    type: "code-plus",
    content: {
      title: "Search Sorted Data",
      points: [
        "Cut search space in half",
        "Works only on sorted arrays",
        "O(log n)",
      ],
      code: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
`,
      note: "Binary search is a must-know interview algorithm.",
    },
  },
  {
    id: 206,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "Binary Search (Recursive)",
    type: "code-plus",
    content: {
      title: "Divide & Conquer",
      points: [
        "Recursive halves",
        "Base case on range",
        "O(log n)",
      ],
      code: `def bs(nums, target, left, right):
    if left > right:
        return -1
    mid = (left + right) // 2
    if nums[mid] == target:
        return mid
    if nums[mid] < target:
        return bs(nums, target, mid + 1, right)
    return bs(nums, target, left, mid - 1)
`,
      note: "Recursive binary search mirrors the logic cleanly.",
    },
  },
  {
    id: 207,
    moduleId: 13,
    moduleTitle: "Searching Algorithms",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Sorting Algorithms",
          "Ordering data",
          "Performance trade-offs",
          "Classic algorithms",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Searching is foundational",
          "Structure dictates speed",
          "Binary search is powerful",
          "Sorting unlocks efficiency",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 14: Sorting Algorithms
  // =========================

  {
    id: 208,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Why Sorting Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Core Problem",
          items: [
          "Unordered data is hard to search",
          "Humans expect order",
          "Many algorithms assume sorted input",
          "Performance depends on order",
          ],
        },
        {
          title: "What Sorting Enables",
          items: [
          "Binary search",
          "Efficient grouping",
          "Range queries",
          "Cleaner logic",
          ],
        },
      ],
    },
  },

  {
    id: 209,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "What Is Sorting (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Definition",
          items: [
          "Rearranging elements",
          "Based on a comparison rule",
          "Ascending or descending",
          "Deterministic process",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Arranging books by title",
          "Ranking scores",
          "Ordering prices",
          "Creating structure from chaos",
          ],
        },
      ],
    },
  },

  {
    id: 210,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Sorting Trade-Offs (Big Picture)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Key Questions",
          items: [
          "How fast is it?",
          "How much memory does it use?",
          "Is it stable?",
          "Is input size small or large?",
          ],
        },
        {
          title: "Why Many Algorithms Exist",
          items: [
          "Different constraints",
          "Different data shapes",
          "Different performance goals",
          "No universal best sort",
          ],
        },
      ],
    },
  },

  {
    id: 211,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Bubble Sort (Learning Tool)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "How It Works",
          items: [
          "Repeatedly compare neighbors",
          "Swap if out of order",
          "Largest elements bubble up",
          "Multiple passes",
          ],
        },
        {
          title: "Performance",
          items: ["Time: O(n²)", "Space: O(1)", "Stable", "Not used in practice"],
        },
      ],
    },
  },

  {
    id: 212,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Bubble Sort Example",
    type: "code-plus",
    content: {
      title: "Simple but Inefficient",
      points: ["Nested loops", "Many comparisons", "Educational value"],
      code: `# Python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# JavaScript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}`,
      note: "Bubble sort repeatedly swaps adjacent elements.",
    },
  },

  {
    id: 213,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Selection Sort",
    type: "infographic",
    content: {
      cards: [
        {
          title: "How It Works",
          items: [
          "Find smallest element",
          "Place it at the front",
          "Shrink unsorted region",
          "Repeat",
          ],
        },
        {
          title: "Performance",
          items: [
          "Time: O(n²)",
          "Space: O(1)",
          "Not stable by default",
          "Fewer swaps than bubble sort",
          ],
        },
      ],
    },
  },

  {
    id: 214,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Selection Sort Example",
    type: "code-plus",
    content: {
      title: "Simple Selection",
      points: ["Minimal swaps", "Predictable comparisons", "Educational"],
      code: `# Python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

# JavaScript
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
}`,
      note:
        "Selection sort places the smallest element in order each pass.",
    },
  },

  {
    id: 215,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Insertion Sort",
    type: "infographic",
    content: {
      cards: [
        {
          title: "How It Works",
          items: [
          "Build sorted portion gradually",
          "Insert element into correct position",
          "Shifts elements as needed",
          "Efficient for small or nearly sorted data",
          ],
        },
        {
          title: "Performance",
          items: [
          "Time: O(n²) worst-case",
          "Time: O(n) best-case",
          "Space: O(1)",
          "Stable",
          ],
        },
      ],
    },
  },

  {
    id: 216,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Insertion Sort Example",
    type: "code-plus",
    content: {
      title: "Practical for Small Inputs",
      points: ["Adaptive", "Low overhead", "Used internally"],
      code: `# Python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key

# JavaScript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}`,
      note: "Insertion sort is efficient for nearly sorted arrays.",
    },
  },

  {
    id: 217,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Merge Sort (Divide & Conquer)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "Divide array in halves",
          "Sort recursively",
          "Merge sorted halves",
          "Guaranteed performance",
          ],
        },
        {
          title: "Performance",
          items: ["Time: O(n log n)", "Space: O(n)", "Stable", "Very reliable"],
        },
      ],
    },
  },

  {
    id: 218,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Merge Sort Example",
    type: "code-plus",
    content: {
      title: "Reliable and Predictable",
      points: ["Recursive", "Extra memory", "Consistent speed"],
      code: `# Python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

# JavaScript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}`,
      note: "Merge sort guarantees O(n log n) time.",
    },
  },

  {
    id: 219,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Quick Sort (Average-Case Champion)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Idea",
          items: [
          "Choose a pivot",
          "Partition around pivot",
          "Recursively sort partitions",
          "In-place sorting",
          ],
        },
        {
          title: "Performance",
          items: [
          "Average: O(n log n)",
          "Worst: O(n²)",
          "Space: O(log n)",
          "Very fast in practice",
          ],
        },
      ],
    },
  },

  {
    id: 220,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Quick Sort Example",
    type: "code-plus",
    content: {
      title: "Fast in Practice",
      points: ["Pivot choice matters", "In-place", "Widely used"],
      code: `# Python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)

# JavaScript
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...middle, ...quickSort(right)];
}`,
      note: "Quick sort is fast on average but depends on pivot choice.",
    },
  },

  {
    id: 221,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Sorting Algorithm Comparison",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Simple Sorts",
          items: [
          "Bubble: O(n²)",
          "Selection: O(n²)",
          "Insertion: O(n²)",
          "Educational",
          ],
        },
        {
          title: "Efficient Sorts",
          items: [
          "Merge: O(n log n)",
          "Quick: O(n log n) avg",
          "Heap: O(n log n)",
          "Production-grade",
          ],
        },
      ],
    },
  },

  {
    id: 222,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Memorizing without understanding",
          "Using slow sorts on large data",
          "Ignoring space complexity",
          "Reimplementing built-ins blindly",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Understand trade-offs",
          "Use built-ins wisely",
          "Choose by constraints",
          "Think in complexity",
          ],
        },
      ],
    },
  },

  {
    id: 223,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Merge Sort",
    type: "code-plus",
    content: {
      title: "Divide and Merge",
      points: [
        "Split array in halves",
        "Merge sorted halves",
        "O(n log n)",
      ],
      code: `def merge_sort(nums):
    if len(nums) <= 1:
        return nums
    mid = len(nums) // 2
    left = merge_sort(nums[:mid])
    right = merge_sort(nums[mid:])
    return merge(left, right)
`,
      note: "Merge sort is stable and predictable.",
    },
  },
  {
    id: 224,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Bubble Sort",
    type: "code-plus",
    content: {
      title: "Simple Sorting",
      points: [
        "Repeatedly swap neighbors",
        "Easy to understand",
        "O(n^2) time",
      ],
      code: `def bubble(nums):
    n = len(nums)
    for i in range(n):
        for j in range(0, n - i - 1):
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
    return nums
`,
      note: "Bubble sort is slow but intuitive.",
    },
  },
  {
    id: 225,
    moduleId: 14,
    moduleTitle: "Sorting Algorithms",
    title: "Summary: Sorting at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Key Insight",
          items: [
          "Sorting enables efficiency",
          "Many algorithms exist for a reason",
          "Trade-offs matter",
          "Order unlocks power",
          ],
        },
        {
          title: "Next Step",
          items: [
          "Greedy Algorithms",
          "Choosing locally optimal solutions",
          "Optimization mindset",
          "Algorithmic thinking",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 15: Greedy Algorithms
  // =========================

  {
    id: 226,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Why Greedy Algorithms Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Problem Space",
          items: [
          "Need fast, simple decisions",
          "Optimal solutions are expensive to compute",
          "Problems with local choices",
          "Real-time constraints",
          ],
        },
        {
          title: "What Greedy Solves",
          items: [
          "Quick decision-making",
          "Often optimal or near-optimal",
          "Low computational cost",
          "Simple implementation",
          ],
        },
      ],
    },
  },

  {
    id: 227,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "What Is a Greedy Algorithm?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Definition",
          items: [
          "Makes the best local choice",
          "Does not reconsider decisions",
          "Builds solution step by step",
          "Hopes local optimum leads to global optimum",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Always take the biggest win now",
          "Never look back",
          "Short-term gain mindset",
          "Fast but risky",
          ],
        },
      ],
    },
  },

  {
    id: 228,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "When Greedy Works (And When It Fails)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Works Well When",
          items: [
          "Problem has greedy-choice property",
          "Optimal substructure exists",
          "Choices don’t affect future feasibility",
          "Proof of correctness exists",
          ],
        },
        {
          title: "Fails When",
          items: [
          "Early decisions block better solutions",
          "Global view is required",
          "Problem needs backtracking",
          "Greedy choice is misleading",
          ],
        },
      ],
    },
  },

  {
    id: 229,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Classic Greedy Example: Coin Change (Greedy Version)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problem",
          items: [
          "Make change with minimum coins",
          "Coins have fixed denominations",
          "Greedy picks largest coin first",
          "Fast approach",
          ],
        },
        {
          title: "Important Note",
          items: [
          "Works for some coin systems",
          "Fails for others",
          "Good teaching example",
          "Highlights greedy limits",
          ],
        },
      ],
    },
  },

  {
    id: 230,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Coin Change (Greedy) Example",
    type: "code-plus",
    content: {
      title: "Greedy Coin Selection",
      points: [
        "Pick largest coin first",
        "Reduce remaining amount",
        "Repeat until done",
      ],
      code: `# Python
def greedy_coin_change(coins, amount):
    result = []
    for coin in sorted(coins, reverse=True):
        while amount >= coin:
            amount -= coin
            result.append(coin)
    return result

# JavaScript
function greedyCoinChange(coins, amount) {
  const result = [];
  coins.sort((a, b) => b - a);
  for (const coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}`,
      note: "Greedy coin change is fast but not always optimal.",
    },
  },

  {
    id: 231,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Activity Selection Problem",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problem Statement",
          items: [
          "Select maximum non-overlapping activities",
          "Each activity has start and end time",
          "Greedy by earliest finish time",
          "Classic greedy success",
          ],
        },
        {
          title: "Why It Works",
          items: [
          "Early finishing leaves more room",
          "Local choice leads to global optimum",
          "Provable correctness",
          "Common interview problem",
          ],
        },
      ],
    },
  },

  {
    id: 232,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Activity Selection Example",
    type: "code-plus",
    content: {
      title: "Earliest Finish First",
      points: [
        "Sort by end time",
        "Pick compatible activities",
        "Linear pass after sort",
      ],
      code: `# Python
def activity_selection(activities):
    activities.sort(key=lambda x: x[1])
    selected = [activities[0]]
    last_end = activities[0][1]

    for start, end in activities[1:]:
        if start >= last_end:
            selected.append((start, end))
            last_end = end
    return selected

# JavaScript
function activitySelection(activities) {
  activities.sort((a, b) => a[1] - b[1]);
  const selected = [activities[0]];
  let lastEnd = activities[0][1];

  for (let i = 1; i < activities.length; i++) {
    const [start, end] = activities[i];
    if (start >= lastEnd) {
      selected.push([start, end]);
      lastEnd = end;
    }
  }
  return selected;
}`,
      note: "Sorting by end time enables an optimal greedy strategy.",
    },
  },

  {
    id: 233,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Greedy vs Dynamic Programming",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Greedy",
          items: [
          "Fast and simple",
          "No backtracking",
          "Local decisions",
          "May fail",
          ],
        },
        {
          title: "Dynamic Programming",
          items: [
          "Considers all possibilities",
          "Guaranteed optimal",
          "More memory/time",
          "Complex implementation",
          ],
        },
      ],
    },
  },

  {
    id: 234,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Assuming greedy always works",
          "Not proving correctness",
          "Ignoring counterexamples",
          "Using greedy by intuition only",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Ask if greedy-choice property exists",
          "Test edge cases",
          "Compare with DP when unsure",
          "Reason formally",
          ],
        },
      ],
    },
  },

  {
    id: 235,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Summary: Greedy Algorithms at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Simple logic",
          "Fast execution",
          "Low memory usage",
          "Elegant solutions",
          ],
        },
        {
          title: "Limitations",
          items: [
          "Not always optimal",
          "Problem-specific",
          "Requires proof",
          "Easy to misuse",
          ],
        },
      ],
    },
  },

  {
    id: 236,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Greedy Coin Change",
    type: "code-plus",
    content: {
      title: "Pick Largest First",
      points: [
        "Take biggest coin first",
        "Works for canonical systems",
        "Fast and simple",
      ],
      code: `def make_change(amount, coins):
    result = []
    for c in sorted(coins, reverse=True):
        while amount >= c:
            amount -= c
            result.append(c)
    return result
`,
      note: "Greedy is optimal only for some coin systems.",
    },
  },
  {
    id: 237,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "Activity Selection",
    type: "code-plus",
    content: {
      title: "Greedy Choice",
      points: [
        "Sort by end time",
        "Pick earliest finish",
        "Maximize count",
      ],
      code: `def select(activities):
    activities.sort(key=lambda x: x[1])
    result = []
    end = -1
    for s, e in activities:
        if s >= end:
            result.append((s, e))
            end = e
    return result
`,
      note: "Greedy works for interval scheduling.",
    },
  },
  {
    id: 238,
    moduleId: 15,
    moduleTitle: "Greedy Algorithms",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Divide & Conquer",
          "Breaking problems down",
          "Recursive structure",
          "Advanced algorithms",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Greedy is powerful but dangerous",
          "Correctness matters",
          "Speed vs optimality trade-off",
          "Think before choosing greedy",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 16: Divide & Conquer
  // =========================

  {
    id: 239,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Why Divide & Conquer Matters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Core Challenge",
          items: [
          "Large problems are hard to solve directly",
          "Brute force does not scale",
          "Complexity explodes quickly",
          "We need structured reduction",
          ],
        },
        {
          title: "What Divide & Conquer Provides",
          items: [
          "Problem size reduction",
          "Clear recursive structure",
          "Predictable performance",
          "Foundation of many fast algorithms",
          ],
        },
      ],
    },
  },

  {
    id: 240,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "What Is Divide & Conquer?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Three Steps",
          items: [
          "Divide the problem",
          "Conquer subproblems",
          "Combine the results",
          "Repeat recursively",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Break task into smaller tasks",
          "Solve independently",
          "Assemble final answer",
          "Trust recursion",
          ],
        },
      ],
    },
  },

  {
    id: 241,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Why Recursion Fits Perfectly",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Structural Match",
          items: [
          "Problems shrink naturally",
          "Same logic repeats",
          "Clear base cases",
          "Clean implementations",
          ],
        },
        {
          title: "Performance Insight",
          items: [
          "Often leads to O(n log n)",
          "Balanced work distribution",
          "Efficient resource usage",
          "Scales well",
          ],
        },
      ],
    },
  },

  {
    id: 242,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Classic Example: Binary Search",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why It Fits",
          items: [
          "Divides search space in half",
          "Solves one half recursively",
          "Base case is found or empty",
          "Logarithmic depth",
          ],
        },
        {
          title: "Key Insight",
          items: [
          "Not all recursion is divide & conquer",
          "Binary search is the purest form",
          "Divide step is explicit",
          "Conquer is trivial",
          ],
        },
      ],
    },
  },

  {
    id: 243,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Divide & Conquer vs Greedy",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Divide & Conquer",
          items: [
          "Solves all subproblems",
          "Combines results",
          "More computation",
          "Guaranteed correctness",
          ],
        },
        {
          title: "Greedy",
          items: [
          "Makes one local choice",
          "Does not revisit decisions",
          "Less computation",
          "May fail",
          ],
        },
      ],
    },
  },

  {
    id: 244,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Merge Sort Revisited",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Divide Step",
          items: [
          "Split array into halves",
          "Repeat until size 1",
          "Simple partitioning",
          "Balanced recursion",
          ],
        },
        {
          title: "Conquer + Combine",
          items: [
          "Sort each half",
          "Merge sorted halves",
          "Linear merge step",
          "Predictable complexity",
          ],
        },
      ],
    },
  },

  {
    id: 245,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Divide & Conquer Complexity Pattern",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Typical Pattern",
          items: [
          "Divide into k subproblems",
          "Each of size n/k",
          "Combine in linear time",
          "Repeats log n times",
          ],
        },
        {
          title: "Resulting Complexity",
          items: [
          "Often O(n log n)",
          "Balanced recursion tree",
          "Efficient scaling",
          "Predictable performance",
          ],
        },
      ],
    },
  },

  {
    id: 246,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "When Divide & Conquer Is a Bad Fit",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Red Flags",
          items: [
          "Subproblems overlap heavily",
          "Recomputing same results",
          "Excessive recursion depth",
          "High memory overhead",
          ],
        },
        {
          title: "Better Alternatives",
          items: [
          "Dynamic programming",
          "Greedy algorithms",
          "Iterative solutions",
          "Hybrid approaches",
          ],
        },
      ],
    },
  },

  {
    id: 247,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Confusing with simple recursion",
          "Missing combine step",
          "Overusing recursion",
          "Ignoring stack cost",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Explicit divide step",
          "Clear combine logic",
          "Measure overlapping work",
          "Think in recursion trees",
          ],
        },
      ],
    },
  },

  {
    id: 248,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Summary: Divide & Conquer at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Elegant problem decomposition",
          "Predictable performance",
          "Scales efficiently",
          "Foundation of fast algorithms",
          ],
        },
        {
          title: "Limitations",
          items: [
          "Recursion overhead",
          "Memory usage",
          "Not always optimal",
          "Requires careful design",
          ],
        },
      ],
    },
  },

  {
    id: 249,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Quick Sort (Partition)",
    type: "code-plus",
    content: {
      title: "Divide & Conquer",
      points: [
        "Pick pivot",
        "Partition into two sides",
        "Recursively sort",
      ],
      code: `def quicksort(nums):
    if len(nums) <= 1:
        return nums
    pivot = nums[len(nums) // 2]
    left = [x for x in nums if x < pivot]
    middle = [x for x in nums if x == pivot]
    right = [x for x in nums if x > pivot]
    return quicksort(left) + middle + quicksort(right)
`,
      note: "Quicksort is fast in practice.",
    },
  },
  {
    id: 250,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "Power Function",
    type: "code-plus",
    content: {
      title: "Divide & Conquer",
      points: [
        "Split exponent",
        "Reduce multiplications",
        "O(log n)",
      ],
      code: `def power(x, n):
    if n == 0:
        return 1
    half = power(x, n // 2)
    if n % 2 == 0:
        return half * half
    return half * half * x
`,
      note: "Fast power is a classic divide & conquer example.",
    },
  },
  {
    id: 251,
    moduleId: 16,
    moduleTitle: "Divide & Conquer",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Dynamic Programming",
          "Overlapping subproblems",
          "Optimization problems",
          "Advanced problem solving",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Divide & conquer breaks scale",
          "Recursion gives structure",
          "Combine step is crucial",
          "You are entering expert territory",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 17: Dynamic Programming
  // =========================

  {
    id: 252,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "Why Dynamic Programming Exists",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Core Problem",
          items: [
          "Divide & conquer recomputes work",
          "Recursive solutions become slow",
          "Overlapping subproblems exist",
          "Brute force explodes exponentially",
          ],
        },
        {
          title: "What DP Provides",
          items: [
          "Reuse of computed results",
          "Dramatic performance improvement",
          "Optimal solutions",
          "Systematic optimization",
          ],
        },
      ],
    },
  },

  {
    id: 253,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "What Is Dynamic Programming?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Definition",
          items: [
          "Optimization technique",
          "Breaks problem into subproblems",
          "Stores intermediate results",
          "Avoids recomputation",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Solve once, reuse forever",
          "Trading memory for speed",
          "Build solutions gradually",
          "Controlled recursion",
          ],
        },
      ],
    },
  },

  {
    id: 254,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "When a Problem Is a DP Problem",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Required Properties",
          items: [
          "Overlapping subproblems",
          "Optimal substructure",
          "Recursive solution exists",
          "Exponential brute force",
          ],
        },
        {
          title: "Red Flags",
          items: [
          "Independent subproblems",
          "No reuse possible",
          "Simple greedy works",
          "Single-pass solution",
          ],
        },
      ],
    },
  },

  {
    id: 255,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "DP vs Divide & Conquer",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Divide & Conquer",
          items: [
          "Solves subproblems independently",
          "No memory of past work",
          "Recomputes results",
          "Simpler logic",
          ],
        },
        {
          title: "Dynamic Programming",
          items: [
          "Stores results",
          "Avoids recomputation",
          "Faster execution",
          "More memory usage",
          ],
        },
      ],
    },
  },

  {
    id: 256,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "Top-Down DP (Memoization)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "How It Works",
          items: [
          "Start from original problem",
          "Use recursion",
          "Cache results",
          "Reuse cached values",
          ],
        },
        {
          title: "Why It’s Useful",
          items: [
          "Minimal code changes",
          "Easy transition from recursion",
          "Clear logic",
          "Good first DP step",
          ],
        },
      ],
    },
  },

  {
    id: 257,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "Memoization Example (Fibonacci)",
    type: "code-plus",
    content: {
      title: "Top-Down Optimization",
      points: ["Cache results", "Avoid repeated calls", "Massive speedup"],
      code: `# Python
def fib(n, memo={}):
    if n <= 1:
        return n
    if n not in memo:
        memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]

# JavaScript
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (!(n in memo)) {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }
  return memo[n];
}`,
      note:
        "Memoization stores results of subproblems to avoid recomputation.",
    },
  },

  {
    id: 258,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "Bottom-Up DP (Tabulation)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "How It Works",
          items: [
          "Start from smallest subproblems",
          "Build table iteratively",
          "No recursion",
          "Deterministic execution",
          ],
        },
        {
          title: "Why It’s Powerful",
          items: [
          "No stack overflow risk",
          "Explicit state transitions",
          "Often faster",
          "Easy to optimize space",
          ],
        },
      ],
    },
  },

  {
    id: 259,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "Tabulation Example (Fibonacci)",
    type: "code-plus",
    content: {
      title: "Bottom-Up Approach",
      points: [
        "Iterative build",
        "Constant extra memory possible",
        "Predictable flow",
      ],
      code: `# Python
def fib(n):
    if n <= 1:
        return n
    dp = [0, 1]
    for i in range(2, n + 1):
        dp.append(dp[i - 1] + dp[i - 2])
    return dp[n]

# JavaScript
function fib(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp[n];
}`,
      note: "Tabulation builds solutions from the bottom up.",
    },
  },

  {
    id: 260,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "State, Transition, Base Case",
    type: "infographic",
    content: {
      cards: [
        {
          title: "State",
          items: [
          "What defines a subproblem",
          "Parameters that change",
          "Minimal information needed",
          "DP table dimensions",
          ],
        },
        {
          title: "Transition",
          items: [
          "How states relate",
          "Recurrence relation",
          "Move toward solution",
          "Defines algorithm",
          ],
        },
      ],
    },
  },

  {
    id: 261,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "Common DP Problem Types",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Patterns",
          items: [
          "1D DP (Fibonacci, stairs)",
          "2D DP (grid paths)",
          "Knapsack problems",
          "Subsequence problems",
          ],
        },
        {
          title: "Skills Built",
          items: [
          "Problem decomposition",
          "Pattern recognition",
          "Optimization thinking",
          "State modeling",
          ],
        },
      ],
    },
  },

  {
    id: 262,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Jumping to DP too early",
          "Poor state definition",
          "Huge DP tables",
          "Ignoring space optimization",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Start with brute force",
          "Optimize step by step",
          "Define minimal state",
          "Ask what truly changes",
          ],
        },
      ],
    },
  },

  {
    id: 263,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "Summary: Dynamic Programming at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Massive speedups",
          "Guaranteed optimal solutions",
          "Handles complex problems",
          "Core expert skill",
          ],
        },
        {
          title: "Limitations",
          items: [
          "High memory usage",
          "Complex state design",
          "Steep learning curve",
          "Overkill for simple problems",
          ],
        },
      ],
    },
  },

  {
    id: 264,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "DP Fibonacci",
    type: "code-plus",
    content: {
      title: "Tabulation",
      points: [
        "Build from base cases",
        "Avoid repeated work",
        "O(n) time",
      ],
      code: `def fib(n):
    if n <= 1:
        return n
    dp = [0, 1]
    for i in range(2, n + 1):
        dp.append(dp[i - 1] + dp[i - 2])
    return dp[n]
`,
      note: "Dynamic programming caches results.",
    },
  },
  {
    id: 265,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "Coin Change DP",
    type: "code-plus",
    content: {
      title: "Min Coins",
      points: [
        "Build dp array",
        "Reuse solutions",
        "O(n * coins)",
      ],
      code: `def coin_change(coins, amount):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for c in coins:
            if a - c >= 0:
                dp[a] = min(dp[a], 1 + dp[a - c])
    return dp[amount] if dp[amount] <= amount else -1
`,
      note: "DP solves overlapping subproblems efficiently.",
    },
  },
  {
    id: 266,
    moduleId: 17,
    moduleTitle: "Dynamic Programming",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Graphs",
          "Non-linear relationships",
          "Traversal algorithms",
          "Real-world networks",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "DP is optimized recursion",
          "Memory trades for speed",
          "State definition is everything",
          "You are now at expert level",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 18: Graphs
  // =========================

  {
    id: 267,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Why Graphs Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Real-World Problem",
          items: [
          "Many systems are not linear or hierarchical",
          "Relationships are many-to-many",
          "Connections matter more than order",
          "Complex networks are everywhere",
          ],
        },
        {
          title: "What Graphs Model",
          items: [
          "Social networks",
          "Road maps and navigation",
          "Computer networks",
          "Dependency systems",
          ],
        },
      ],
    },
  },

  {
    id: 268,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "What Is a Graph (Conceptually)?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Definition",
          items: [
          "Collection of nodes (vertices)",
          "Connections called edges",
          "Edges link two vertices",
          "General-purpose structure",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Cities connected by roads",
          "People connected by friendships",
          "Devices connected by cables",
          "Anything with relationships",
          ],
        },
      ],
    },
  },

  {
    id: 269,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Graph Terminology (Must Know)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Vertices & Edges",
          items: ["Vertex (node)", "Edge (connection)", "Degree", "Path"],
        },
        {
          title: "Advanced Terms",
          items: [
          "Cycle",
          "Connected component",
          "Directed vs undirected",
          "Weighted vs unweighted",
          ],
        },
      ],
    },
  },

  {
    id: 270,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Directed vs Undirected Graphs",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Undirected Graph",
          items: [
          "Edges have no direction",
          "A ↔ B relationship",
          "Mutual connection",
          "Symmetric",
          ],
        },
        {
          title: "Directed Graph",
          items: [
          "Edges have direction",
          "A → B relationship",
          "One-way connection",
          "Asymmetric",
          ],
        },
      ],
    },
  },

  {
    id: 271,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Weighted vs Unweighted Graphs",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Unweighted Graph",
          items: [
          "All edges equal",
          "Only connectivity matters",
          "Simpler algorithms",
          "Common in theory",
          ],
        },
        {
          title: "Weighted Graph",
          items: [
          "Edges have costs/weights",
          "Distance, time, cost modeling",
          "More complex algorithms",
          "Real-world relevance",
          ],
        },
      ],
    },
  },

  {
    id: 272,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Graph Representations",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Adjacency List",
          items: [
          "Each node stores neighbors",
          "Memory efficient",
          "Fast iteration",
          "Most commonly used",
          ],
        },
        {
          title: "Adjacency Matrix",
          items: [
          "2D grid representation",
          "Fast edge lookup",
          "High memory usage",
          "Dense graphs only",
          ],
        },
      ],
    },
  },

  {
    id: 273,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Adjacency List Example",
    type: "code-plus",
    content: {
      title: "Representing a Graph",
      points: [
        "Node → neighbors mapping",
        "Flexible structure",
        "Language-independent idea",
      ],
      code: `# Python
graph = {
  "A": ["B", "C"],
  "B": ["A", "D"],
  "C": ["A"],
  "D": ["B"]
}

# JavaScript
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"]
};`,
      note: "Adjacency lists store only existing edges.",
    },
  },

  {
    id: 274,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Graph Traversal (Big Picture)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Why Traverse Graphs",
          items: [
          "Visit all reachable nodes",
          "Search for targets",
          "Detect cycles",
          "Analyze connectivity",
          ],
        },
        {
          title: "Main Strategies",
          items: [
          "Depth-First Search (DFS)",
          "Breadth-First Search (BFS)",
          "Iterative or recursive",
          "State tracking required",
          ],
        },
      ],
    },
  },

  {
    id: 275,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Depth-First Search (DFS)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "DFS Idea",
          items: [
          "Go deep before wide",
          "Explore one path fully",
          "Uses stack or recursion",
          "Backtracks naturally",
          ],
        },
        {
          title: "Common Uses",
          items: [
          "Cycle detection",
          "Connected components",
          "Topological sorting",
          "Path existence",
          ],
        },
      ],
    },
  },

  {
    id: 276,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "DFS Example",
    type: "code-plus",
    content: {
      title: "Depth-First Traversal",
      points: [
        "Visited set required",
        "Avoid infinite loops",
        "Recursive pattern",
      ],
      code: `# Python
def dfs(graph, node, visited=set()):
    if node in visited:
        return
    visited.add(node)
    print(node)
    for neighbor in graph[node]:
        dfs(graph, neighbor, visited)

# JavaScript
function dfs(graph, node, visited = new Set()) {
  if (visited.has(node)) return;
  visited.add(node);
  console.log(node);
  for (const neighbor of graph[node]) {
    dfs(graph, neighbor, visited);
  }
}`,
      note: "DFS explores as deep as possible before backtracking.",
    },
  },

  {
    id: 277,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Breadth-First Search (BFS)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "BFS Idea",
          items: [
          "Explore level by level",
          "Uses a queue",
          "Finds shortest path (unweighted)",
          "Wide exploration",
          ],
        },
        {
          title: "Common Uses",
          items: [
          "Shortest path (unweighted)",
          "Level order traversal",
          "Minimum steps problems",
          "Network broadcasting",
          ],
        },
      ],
    },
  },

  {
    id: 278,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "BFS Example",
    type: "code-plus",
    content: {
      title: "Breadth-First Traversal",
      points: ["Queue-based", "Visited tracking", "Shortest-path friendly"],
      code: `# Python
from collections import deque
def bfs(graph, start):
    visited = set([start])
    q = deque([start])
    while q:
        node = q.popleft()
        print(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                q.append(neighbor)

# JavaScript
function bfs(graph, start) {
  const visited = new Set([start]);
  const q = [start];
  while (q.length) {
    const node = q.shift();
    console.log(node);
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        q.push(neighbor);
      }
    }
  }
}`,
      note: "BFS explores nodes by distance from the start.",
    },
  },

  {
    id: 279,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Common Graph Problems",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Typical Questions",
          items: [
          "Is there a path?",
          "How many components?",
          "Is there a cycle?",
          "Shortest path?",
          ],
        },
        {
          title: "Skills Built",
          items: [
          "Traversal mastery",
          "State management",
          "Algorithm selection",
          "Systems thinking",
          ],
        },
      ],
    },
  },

  {
    id: 280,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Forgetting visited set",
          "Infinite loops",
          "Confusing BFS and DFS",
          "Wrong graph representation",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Always track visited nodes",
          "Choose traversal intentionally",
          "Draw the graph",
          "Understand the question",
          ],
        },
      ],
    },
  },

  {
    id: 281,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Summary: Graphs at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Strengths",
          items: [
          "Models complex relationships",
          "Extremely flexible",
          "Core of many systems",
          "Powerful algorithms",
          ],
        },
        {
          title: "Limitations",
          items: [
          "Conceptual complexity",
          "Easy to make mistakes",
          "Performance depends on representation",
          "Requires careful traversal",
          ],
        },
      ],
    },
  },

  {
    id: 282,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Graph BFS",
    type: "code-plus",
    content: {
      title: "Breadth-First Search",
      points: [
        "Explore neighbors level by level",
        "Uses a queue",
        "Finds shortest path in unweighted graphs",
      ],
      code: `from collections import deque

def bfs(graph, start):
    visited = set([start])
    q = deque([start])
    while q:
        node = q.popleft()
        for nei in graph[node]:
            if nei not in visited:
                visited.add(nei)
                q.append(nei)
`,
      note: "BFS is essential for shortest-path problems.",
    },
  },
  {
    id: 283,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "Graph DFS",
    type: "code-plus",
    content: {
      title: "Depth-First Search",
      points: [
        "Explore deep paths",
        "Uses recursion or stack",
        "Great for components",
      ],
      code: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for nei in graph[start]:
        if nei not in visited:
            dfs(graph, nei, visited)
`,
      note: "DFS is useful for connectivity and cycles.",
    },
  },
  {
    id: 284,
    moduleId: 18,
    moduleTitle: "Graphs",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Next Module",
          items: [
          "Interview Patterns",
          "Recognizing problem types",
          "Strategic approaches",
          "Confidence building",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Graphs model relationships",
          "Traversal is the foundation",
          "BFS vs DFS choice matters",
          "You now understand real networks",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 19: Interview Patterns
  // =========================

  {
    id: 285,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Why Interview Patterns Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Interview Reality",
          items: [
          "Problems look different on the surface",
          "Time pressure is high",
          "Brute force rarely passes",
          "Pattern recognition wins",
          ],
        },
        {
          title: "What Patterns Provide",
          items: [
          "Faster problem understanding",
          "Reusable solution strategies",
          "Reduced cognitive load",
          "Consistent success",
          ],
        },
      ],
    },
  },

  {
    id: 286,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "What Is an Interview Pattern?",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Definition",
          items: [
          "A recurring solution strategy",
          "Applies to many problems",
          "Independent of language",
          "Built on DSA fundamentals",
          ],
        },
        {
          title: "Mental Model",
          items: [
          "Blueprint, not answer",
          "Lens to view problems",
          "Shortcut to insight",
          "Structure over memorization",
          ],
        },
      ],
    },
  },

  {
    id: 287,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Pattern 1: Two Pointers",
    type: "infographic",
    content: {
      cards: [
        {
          title: "When to Use",
          items: [
          "Sorted arrays or strings",
          "Need pairs or ranges",
          "Opposite-end scanning",
          "Reducing search space",
          ],
        },
        {
          title: "Key Insight",
          items: [
          "Move pointers strategically",
          "One pass instead of nested loops",
          "O(n) instead of O(n²)",
          "Very common pattern",
          ],
        },
      ],
    },
  },

  {
    id: 288,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Two Pointers Example",
    type: "code-plus",
    content: {
      title: "Finding Pair With Target Sum",
      points: ["Sorted input", "Left/right pointers", "Shrink window"],
      code: `# Python
def two_sum(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return [left, right]
        if s < target:
            left += 1
        else:
            right -= 1
    return []

# JavaScript
function twoSum(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}`,
      note: "Two pointers eliminate unnecessary comparisons.",
    },
  },

  {
    id: 289,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Pattern 2: Sliding Window",
    type: "infographic",
    content: {
      cards: [
        {
          title: "When to Use",
          items: [
          "Subarrays or substrings",
          "Contiguous ranges",
          "Fixed or variable window",
          "Maximum/minimum problems",
          ],
        },
        {
          title: "Key Insight",
          items: [
          "Reuse previous work",
          "Expand and shrink window",
          "Avoid recomputation",
          "Linear-time solutions",
          ],
        },
      ],
    },
  },

  {
    id: 290,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Sliding Window Example",
    type: "code-plus",
    content: {
      title: "Maximum Sum Subarray of Size K",
      points: ["Fixed window", "Add right, remove left", "O(n) time"],
      code: `# Python
def max_sum_subarray(nums, k):
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

# JavaScript
function maxSumSubarray(nums, k) {
  let windowSum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}`,
      note: "Sliding window reuses previous computation efficiently.",
    },
  },

  {
    id: 291,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Pattern 3: Hash Map / Frequency Counter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "When to Use",
          items: [
          "Counting occurrences",
          "Tracking seen elements",
          "Fast lookups needed",
          "Avoid nested loops",
          ],
        },
        {
          title: "Key Insight",
          items: [
          "Trade memory for speed",
          "O(1) average lookup",
          "Very common in interviews",
          "Works across languages",
          ],
        },
      ],
    },
  },

  {
    id: 292,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Hash Map Pattern Example",
    type: "code-plus",
    content: {
      title: "First Non-Repeating Character",
      points: ["Count frequency", "Second pass to decide", "Clean logic"],
      code: `# Python
def first_unique(s):
    freq = {}
    for c in s:
        freq[c] = freq.get(c, 0) + 1
    for i, c in enumerate(s):
        if freq[c] == 1:
            return i
    return -1

# JavaScript
function firstUnique(s) {
  const freq = {};
  for (const c of s) {
    freq[c] = (freq[c] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) return i;
  }
  return -1;
}`,
      note: "Hash maps reduce nested loops to linear time.",
    },
  },

  {
    id: 293,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Pattern 4: DFS / BFS",
    type: "infographic",
    content: {
      cards: [
        {
          title: "When to Use",
          items: [
          "Trees or graphs",
          "Path existence",
          "Traversal problems",
          "Connectivity questions",
          ],
        },
        {
          title: "Key Insight",
          items: [
          "Traversal order matters",
          "Visited tracking is critical",
          "Choose DFS or BFS intentionally",
          "Foundation of graph problems",
          ],
        },
      ],
    },
  },

  {
    id: 294,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Pattern 5: Dynamic Programming",
    type: "infographic",
    content: {
      cards: [
        {
          title: "When to Use",
          items: [
          "Optimization problems",
          "Overlapping subproblems",
          "Choices affect future",
          "Brute force is exponential",
          ],
        },
        {
          title: "Key Insight",
          items: [
          "Define state clearly",
          "Reuse results",
          "Top-down or bottom-up",
          "Practice pattern recognition",
          ],
        },
      ],
    },
  },

  {
    id: 295,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "How to Identify the Right Pattern",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Questions to Ask",
          items: [
          "Is data sorted?",
          "Is a range involved?",
          "Do I revisit states?",
          "Is this a traversal?",
          ],
        },
        {
          title: "Strategy",
          items: [
          "Classify before coding",
          "Avoid jumping to code",
          "Think in patterns",
          "Explain reasoning aloud",
          ],
        },
      ],
    },
  },

  {
    id: 296,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Common Beginner Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Trying random approaches",
          "Over-optimizing early",
          "Ignoring constraints",
          "Memorizing answers",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Recognize patterns first",
          "Start simple, then optimize",
          "Use constraints as clues",
          "Explain clearly",
          ],
        },
      ],
    },
  },

  {
    id: 297,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Summary: Interview Patterns at a Glance",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Core Patterns",
          items: [
          "Two pointers",
          "Sliding window",
          "Hash maps",
          "DFS / BFS",
          "Dynamic programming",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Patterns beat memorization",
          "Recognition is a skill",
          "DSA fundamentals pay off",
          "You are interview-ready",
          ],
        },
      ],
    },
  },

  {
    id: 298,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Two Pointers",
    type: "code-plus",
    content: {
      title: "Array Pair Sum",
      points: [
        "Works on sorted arrays",
        "Move pointers inward",
        "O(n) time",
      ],
      code: `def has_pair(nums, target):
    left, right = 0, len(nums) - 1
    while left < right:
        s = nums[left] + nums[right]
        if s == target:
            return True
        if s < target:
            left += 1
        else:
            right -= 1
    return False
`,
      note: "Two pointers is a common interview pattern.",
    },
  },
  {
    id: 299,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "Prefix Sum",
    type: "code-plus",
    content: {
      title: "Fast Range Sum",
      points: [
        "Precompute sums",
        "O(1) range query",
        "O(n) build",
      ],
      code: `nums = [1, 2, 3, 4]
prefix = [0]
for n in nums:
    prefix.append(prefix[-1] + n)
# sum from i to j inclusive
 i, j = 1, 3
range_sum = prefix[j + 1] - prefix[i]
`,
      note: "Prefix sums speed up range queries.",
    },
  },
  {
    id: 300,
    moduleId: 19,
    moduleTitle: "Interview Patterns",
    title: "What Comes Next",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Final Module",
          items: [
          "Capstone Problems",
          "End-to-end problem solving",
          "Mixed patterns",
          "Real interview simulation",
          ],
        },
        {
          title: "Key Takeaway",
          items: [
          "Interviews test thinking",
          "Patterns guide solutions",
          "Practice builds confidence",
          "You are ready for the capstone",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 20: Capstone Problems
  // =========================

  {
    id: 301,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Why Capstone Problems Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Final Challenge",
          items: [
          "Real problems mix multiple patterns",
          "No clear labels in interviews",
          "Requires structured thinking",
          "Tests true understanding",
          ],
        },
        {
          title: "What Capstones Achieve",
          items: [
          "Pattern integration",
          "End-to-end reasoning",
          "Confidence under ambiguity",
          "Interview readiness",
          ],
        },
      ],
    },
  },

  {
    id: 302,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "How to Approach Any Capstone Problem",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Structured Thinking",
          items: [
          "Clarify the problem",
          "Identify constraints",
          "Start with brute force",
          "Optimize step by step",
          ],
        },
        {
          title: "Mental Checklist",
          items: [
          "Data structure choice",
          "Relevant patterns",
          "Edge cases",
          "Complexity analysis",
          ],
        },
      ],
    },
  },

  {
    id: 303,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 1: Longest Substring Without Repeating Characters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problem Summary",
          items: [
          "Input: string",
          "Find longest unique substring",
          "Return length",
          "Classic interview problem",
          ],
        },
        {
          title: "Patterns Involved",
          items: [
          "Sliding window",
          "Hash map / set",
          "Two pointers",
          "Linear optimization",
          ],
        },
      ],
    },
  },

  {
    id: 304,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 1: Key Insights",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Brute Force",
          items: [
          "Check all substrings",
          "Verify uniqueness",
          "Time: O(n³)",
          "Not scalable",
          ],
        },
        {
          title: "Optimized Thinking",
          items: [
          "Window expands and shrinks",
          "Track seen characters",
          "Reuse previous work",
          "Time: O(n)",
          ],
        },
      ],
    },
  },

  {
    id: 305,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 1: Solution",
    type: "code-plus",
    content: {
      title: "Sliding Window Solution",
      points: ["Two pointers", "Set for uniqueness", "Linear time"],
      code: `# Python
def longest_unique_substring(s):
    seen = set()
    left = 0
    max_len = 0
    for right in range(len(s)):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

# JavaScript
function longestUniqueSubstring(s) {
  const seen = new Set();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
      note:
        "Sliding window ensures each character is processed at most twice.",
    },
  },

  {
    id: 306,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 2: Number of Islands",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problem Summary",
          items: [
          "Input: 2D grid",
          "Count connected land regions",
          "Adjacency matters",
          "Very common problem",
          ],
        },
        {
          title: "Patterns Involved",
          items: [
          "DFS / BFS",
          "Graph traversal",
          "Visited tracking",
          "Grid as graph",
          ],
        },
      ],
    },
  },

  {
    id: 307,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 2: Key Insights",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mental Model",
          items: [
          "Each cell is a node",
          "Neighbors form edges",
          "Traverse connected components",
          "Count traversals",
          ],
        },
        {
          title: "Critical Details",
          items: [
          "Mark visited cells",
          "Avoid revisiting",
          "Boundaries matter",
          "Grid traversal rules",
          ],
        },
      ],
    },
  },

  {
    id: 308,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 2: Solution",
    type: "code-plus",
    content: {
      title: "DFS Grid Traversal",
      points: ["Recursive DFS", "In-place marking", "Linear complexity"],
      code: `# Python
def num_islands(grid):
    if not grid:
        return 0

    def dfs(r, c):
        if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] == '0':
            return
        grid[r][c] = '0'
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    count = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count

# JavaScript
function numIslands(grid) {
  if (!grid.length) return 0;

  function dfs(r, c) {
    if (
      r < 0 || c < 0 ||
      r >= grid.length || c >= grid[0].length ||
      grid[r][c] === '0'
    ) return;
    grid[r][c] = '0';
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        dfs(r, c);
        count++;
      }
    }
  }
  return count;
}`,
      note: "Each DFS marks an entire island.",
    },
  },

  {
    id: 309,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 3: Coin Change (Optimal)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problem Summary",
          items: [
          "Find minimum coins",
          "Unlimited coin supply",
          "Return minimum count",
          "Optimization problem",
          ],
        },
        {
          title: "Patterns Involved",
          items: [
          "Dynamic programming",
          "Bottom-up table",
          "State transition",
          "Classic DP problem",
          ],
        },
      ],
    },
  },

  {
    id: 310,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 3: Solution",
    type: "code-plus",
    content: {
      title: "DP Tabulation",
      points: [
        "dp[i] = min coins for amount i",
        "Iterative build",
        "Guaranteed optimal",
      ],
      code: `# Python
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if i - coin >= 0:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

# JavaScript
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
      note: "Dynamic programming guarantees the optimal solution.",
    },
  },

  {
    id: 311,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "How to Explain Your Solution in Interviews",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Interviewers Want",
          items: [
          "Clear reasoning",
          "Pattern recognition",
          "Trade-off awareness",
          "Correct complexity",
          ],
        },
        {
          title: "Best Practices",
          items: [
          "Explain before coding",
          "State assumptions",
          "Mention alternatives",
          "Analyze complexity",
          ],
        },
      ],
    },
  },

  {
    id: 312,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Common Capstone Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Jumping straight to code",
          "Ignoring constraints",
          "Overcomplicating solution",
          "Poor explanation",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Think first, code second",
          "Choose simplest working approach",
          "Optimize only when needed",
          "Communicate clearly",
          ],
        },
      ],
    },
  },

  {
    id: 313,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Final Summary: From Beginner to Expert",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What You Now Have",
          items: [
          "Solid DSA foundation",
          "Pattern-based thinking",
          "Multi-language fluency",
          "Interview readiness",
          ],
        },
        {
          title: "What Makes This Course Different",
          items: [
          "Scaffolded learning",
          "Concepts before code",
          "Patterns over memorization",
          "Expert-level reasoning",
          ],
        },
      ],
    },
  },
  // =========================
  // DSA Module 20: Capstone Problems
  // =========================

  {
    id: 314,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Why Capstone Problems Matter",
    type: "infographic",
    content: {
      cards: [
        {
          title: "The Final Challenge",
          items: [
          "Real problems mix multiple patterns",
          "No clear labels in interviews",
          "Requires structured thinking",
          "Tests true understanding",
          ],
        },
        {
          title: "What Capstones Achieve",
          items: [
          "Pattern integration",
          "End-to-end reasoning",
          "Confidence under ambiguity",
          "Interview readiness",
          ],
        },
      ],
    },
  },

  {
    id: 315,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "How to Approach Any Capstone Problem",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Structured Thinking",
          items: [
          "Clarify the problem",
          "Identify constraints",
          "Start with brute force",
          "Optimize step by step",
          ],
        },
        {
          title: "Mental Checklist",
          items: [
          "Data structure choice",
          "Relevant patterns",
          "Edge cases",
          "Complexity analysis",
          ],
        },
      ],
    },
  },

  {
    id: 316,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 1: Longest Substring Without Repeating Characters",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problem Summary",
          items: [
          "Input: string",
          "Find longest unique substring",
          "Return length",
          "Classic interview problem",
          ],
        },
        {
          title: "Patterns Involved",
          items: [
          "Sliding window",
          "Hash map / set",
          "Two pointers",
          "Linear optimization",
          ],
        },
      ],
    },
  },

  {
    id: 317,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 1: Key Insights",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Brute Force",
          items: [
          "Check all substrings",
          "Verify uniqueness",
          "Time: O(n³)",
          "Not scalable",
          ],
        },
        {
          title: "Optimized Thinking",
          items: [
          "Window expands and shrinks",
          "Track seen characters",
          "Reuse previous work",
          "Time: O(n)",
          ],
        },
      ],
    },
  },

  {
    id: 318,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 1: Solution",
    type: "code-plus",
    content: {
      title: "Sliding Window Solution",
      points: ["Two pointers", "Set for uniqueness", "Linear time"],
      code: `# Python
def longest_unique_substring(s):
    seen = set()
    left = 0
    max_len = 0
    for right in range(len(s)):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        seen.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

# JavaScript
function longestUniqueSubstring(s) {
  const seen = new Set();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
      note:
        "Sliding window ensures each character is processed at most twice.",
    },
  },

  {
    id: 319,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 2: Number of Islands",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problem Summary",
          items: [
          "Input: 2D grid",
          "Count connected land regions",
          "Adjacency matters",
          "Very common problem",
          ],
        },
        {
          title: "Patterns Involved",
          items: [
          "DFS / BFS",
          "Graph traversal",
          "Visited tracking",
          "Grid as graph",
          ],
        },
      ],
    },
  },

  {
    id: 320,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 2: Key Insights",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mental Model",
          items: [
          "Each cell is a node",
          "Neighbors form edges",
          "Traverse connected components",
          "Count traversals",
          ],
        },
        {
          title: "Critical Details",
          items: [
          "Mark visited cells",
          "Avoid revisiting",
          "Boundaries matter",
          "Grid traversal rules",
          ],
        },
      ],
    },
  },

  {
    id: 321,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 2: Solution",
    type: "code-plus",
    content: {
      title: "DFS Grid Traversal",
      points: ["Recursive DFS", "In-place marking", "Linear complexity"],
      code: `# Python
def num_islands(grid):
    if not grid:
        return 0

    def dfs(r, c):
        if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] == '0':
            return
        grid[r][c] = '0'
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    count = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count

# JavaScript
function numIslands(grid) {
  if (!grid.length) return 0;

  function dfs(r, c) {
    if (
      r < 0 || c < 0 ||
      r >= grid.length || c >= grid[0].length ||
      grid[r][c] === '0'
    ) return;
    grid[r][c] = '0';
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === '1') {
        dfs(r, c);
        count++;
      }
    }
  }
  return count;
}`,
      note: "Each DFS marks an entire island.",
    },
  },

  {
    id: 322,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 3: Coin Change (Optimal)",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Problem Summary",
          items: [
          "Find minimum coins",
          "Unlimited coin supply",
          "Return minimum count",
          "Optimization problem",
          ],
        },
        {
          title: "Patterns Involved",
          items: [
          "Dynamic programming",
          "Bottom-up table",
          "State transition",
          "Classic DP problem",
          ],
        },
      ],
    },
  },

  {
    id: 323,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Capstone 3: Solution",
    type: "code-plus",
    content: {
      title: "DP Tabulation",
      points: [
        "dp[i] = min coins for amount i",
        "Iterative build",
        "Guaranteed optimal",
      ],
      code: `# Python
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if i - coin >= 0:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

# JavaScript
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}`,
      note: "Dynamic programming guarantees the optimal solution.",
    },
  },

  {
    id: 324,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "How to Explain Your Solution in Interviews",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What Interviewers Want",
          items: [
          "Clear reasoning",
          "Pattern recognition",
          "Trade-off awareness",
          "Correct complexity",
          ],
        },
        {
          title: "Best Practices",
          items: [
          "Explain before coding",
          "State assumptions",
          "Mention alternatives",
          "Analyze complexity",
          ],
        },
      ],
    },
  },

  {
    id: 325,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Common Capstone Mistakes",
    type: "infographic",
    content: {
      cards: [
        {
          title: "Mistakes",
          items: [
          "Jumping straight to code",
          "Ignoring constraints",
          "Overcomplicating solution",
          "Poor explanation",
          ],
        },
        {
          title: "Correct Thinking",
          items: [
          "Think first, code second",
          "Choose simplest working approach",
          "Optimize only when needed",
          "Communicate clearly",
          ],
        },
      ],
    },
  },

  {
    id: 326,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Sliding Window",
    type: "code-plus",
    content: {
      title: "Max Sum Subarray",
      points: [
        "Keep a moving window",
        "Update sum in O(1)",
        "Efficient for contiguous ranges",
      ],
      code: `def max_sum(nums, k):
    window = sum(nums[:k])
    best = window
    for i in range(k, len(nums)):
        window += nums[i] - nums[i - k]
        best = max(best, window)
    return best
`,
      note: "Sliding window turns O(nk) into O(n).",
    },
  },
  {
    id: 327,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Two Sum",
    type: "code-plus",
    content: {
      title: "Hash Map Pattern",
      points: [
        "Store seen numbers",
        "Check complements",
        "O(n) time",
      ],
      code: `def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        diff = target - n
        if diff in seen:
            return [seen[diff], i]
        seen[n] = i
    return []
`,
      note: "Two sum is a classic hash map problem.",
    },
  },
  {
    id: 328,
    moduleId: 20,
    moduleTitle: "Capstone Problems",
    title: "Final Summary: From Beginner to Expert",
    type: "infographic",
    content: {
      cards: [
        {
          title: "What You Now Have",
          items: [
          "Solid DSA foundation",
          "Pattern-based thinking",
          "Multi-language fluency",
          "Interview readiness",
          ],
        },
        {
          title: "What Makes This Course Different",
          items: [
          "Scaffolded learning",
          "Concepts before code",
          "Patterns over memorization",
          "Expert-level reasoning",
          ],
        },
      ],
    },
  },
];
