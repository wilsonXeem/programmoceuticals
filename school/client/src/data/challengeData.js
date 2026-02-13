export const challenges = [
  /* =====================================================
     1. Reverse a String
  ===================================================== */
  {
    id: 1,
    module: "fundamentals",
    moduleId: 1,

    title: "Reverse a String",
    slug: "reverse-a-string",

    concepts: ["strings", "iteration"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 20,
    status: "published",

    problem: {
      statement: "Given a string, return the string reversed.",
      constraints: ["Input is a non-empty string"],
      clarifications: ["Whitespace and symbols should be preserved"],
    },

    examples: [
      {
        input: "hello",
        output: "olleh",
        explanation: "Characters are reversed in order.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain what it means to reverse a string.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Reverse the string using a loop.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "code",
        instruction: "Reverse the string using built-in helpers.",
        required: false,
      },
      {
        id: 4,
        level: "advanced",
        taskType: "text",
        instruction: "Compare both approaches.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "You can access characters by index." },
      { level: 2, text: "Some languages provide reverse helpers." },
    ],

    solutions: [
      {
        approach: "iterative",
        explanation: "Iterate from the end to the start.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)",
        code: {
          python: `
def solution(s):
    return s[::-1]
          `,
          javascript: `
function solution(s) {
  return s.split("").reverse().join("");
}
          `,
        },
      },
    ],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: ["hello"],
        expected: "olleh",
      },
      {
        language: "python",
        level: "early",
        input: ["hello"],
        expected: "olleh",
      },
    ],
  },

  /* =====================================================
     2. Find Maximum in an Array
  ===================================================== */
  {
    id: 2,
    module: "fundamentals",
    moduleId: 1,

    title: "Find the Maximum in an Array",
    slug: "find-maximum-in-array",

    concepts: ["arrays", "iteration"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 20,
    status: "published",

    problem: {
      statement: "Given an array of numbers, return the largest value.",
      constraints: ["Array length ≥ 1"],
      clarifications: ["Numbers may be negative"],
    },

    examples: [
      { input: [3, 1, 4, 2], output: 4, confirms: "4 is the largest number." },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how you would find the maximum value.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Find the maximum using a loop.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "code",
        instruction: "Solve using built-in helpers.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Track the largest value as you iterate." }],

    solutions: [
      {
        approach: "iteration",
        explanation: "Track max while iterating.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: {
          python: `def solution(nums): return max(nums)`,
          javascript: `function solution(nums){ return Math.max(...nums); }`,
        },
      },
    ],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[3, 1, 4, 2]],
        expected: 4,
      },
      {
        language: "python",
        level: "early",
        input: [[3, 1, 4, 2]],
        expected: 4,
      },
    ],
  },

  /* =====================================================
     3. Sum of Array Elements
  ===================================================== */
  {
    id: 3,
    module: "fundamentals",
    moduleId: 1,

    title: "Sum of Array Elements",
    slug: "sum-of-array-elements",

    concepts: ["arrays", "accumulation"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 15,
    status: "published",

    problem: {
      statement: "Return the sum of all numbers in an array.",
      constraints: ["Array may contain negative numbers"],
      clarifications: ["Empty array will not be provided"],
    },

    examples: [{ input: [1, 2, 3], output: 6, explanation: "1 + 2 + 3 = 6" }],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Describe how summation works.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Sum values using a loop.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "code",
        instruction: "Use reduce-style helpers.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Use a running total." }],

    solutions: [
      {
        approach: "accumulator",
        explanation: "Add numbers sequentially.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)",
        code: {
          python: `def solution(nums): return sum(nums)`,
          javascript: `function solution(nums){ return nums.reduce((a,b)=>a+b,0); }`,
        },
      },
    ],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[1, 2, 3]],
        expected: 6,
      },
      { language: "python", level: "early", input: [[1, 2, 3]], expected: 6 },
    ],
  },

  /* =====================================================
     4. Maximum Subarray Sum
     (Already approved fundamental)
  ===================================================== */
  {
    id: 4,
    module: "fundamentals",
    moduleId: 1,

    title: "Maximum Subarray Sum",
    slug: "maximum-subarray-sum",

    concepts: ["arrays", "optimization"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 45,
    status: "published",

    problem: {
      statement: "Find the maximum sum of any contiguous subarray.",
      constraints: ["At least one element"],
      clarifications: ["Subarray must be contiguous"],
    },

    examples: [
      {
        input: [1, -3, 2, 1, -1],
        output: 3,
        explanation: "[2,1] gives max sum",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain the goal of this problem.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Brute-force solution.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "code",
        instruction: "Optimize to O(n).",
        required: false,
      },
      {
        id: 4,
        level: "advanced",
        taskType: "text",
        instruction: "Explain the optimization.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "Try all subarrays first." },
      { level: 2, text: "Reuse previous sums." },
    ],

    solutions: [],
    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[1, -3, 2, 1, -1]],
        expected: 3,
      },
      {
        language: "python",
        level: "early",
        input: [[1, -3, 2, 1, -1]],
        expected: 3,
      },
    ],
  },

  /* =====================================================
     5. Two Sum
  ===================================================== */
  {
    id: 5,
    module: "fundamentals",
    moduleId: 1,

    title: "Two Sum",
    slug: "two-sum",

    concepts: ["arrays", "hash-maps"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 30,
    status: "published",

    problem: {
      statement: "Return indices of two numbers that add up to a target.",
      constraints: ["Exactly one solution"],
      clarifications: ["Do not reuse same element"],
    },

    examples: [
      {
        input: { nums: [2, 7, 11, 15], target: 9 },
        output: [0, 1],
        explanation: "2+7=9",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain the problem.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Nested loop solution.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "code",
        instruction: "Hash map optimization.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "Think in pairs." },
      { level: 2, text: "Store seen values." },
    ],

    solutions: [],
    testCases: [
      {
        language: "javascript",
        level: "intermediate",
        input: [[2, 7, 11, 15], 9],
        expected: [0, 1],
      },
      {
        language: "python",
        level: "intermediate",
        input: [[2, 7, 11, 15], 9],
        expected: [0, 1],
      },
    ],
  },
  {
    id: 6,
    module: "fundamentals",
    moduleId: 1,

    title: "Valid Parentheses",
    slug: "valid-parentheses",

    concepts: ["strings", "stack"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 30,
    status: "published",

    problem: {
      statement:
        "Given a string containing parentheses, brackets, and braces, determine if the input string is valid.",
      constraints: ["String contains only (), {}, []"],
      clarifications: [
        "An opening bracket must be closed by the same type",
        "Brackets must close in the correct order",
      ],
    },

    examples: [
      {
        input: "()[]{}",
        output: true,
        explanation: "All brackets are properly closed.",
      },
      {
        input: "(]",
        output: false,
        explanation: "Mismatched brackets.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain what makes parentheses valid.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Check validity using a stack.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain why a stack is the right structure.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "The last opened bracket must close first." },
      { level: 2, text: "Stacks follow LIFO order." },
    ],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: ["()[]{}"],
        expected: true,
      },
      { language: "python", level: "early", input: ["()[]{}"], expected: true },
      {
        language: "javascript",
        level: "early",
        input: ["(]"],
        expected: false,
      },
      { language: "python", level: "early", input: ["(]"], expected: false },
    ],
  },
  {
    id: 11,
    module: "data-structures",
    moduleId: 2,

    title: "Array Operations: Insert, Delete, Access",
    slug: "array-operations",

    concepts: ["arrays", "indexing", "time-complexity"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 35,
    status: "published",

    problem: {
      statement:
        "Demonstrate how insertion, deletion, and access work in arrays.",
      constraints: ["Array contains numbers only"],
      clarifications: ["Focus on understanding cost of operations"],
    },

    examples: [
      {
        input: [1, 2, 3],
        output: "Access O(1), Insert/Delete O(n)",
        explanation: "Array operations have different time costs.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how accessing an element in an array works.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Access, insert, and delete elements in an array.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "text",
        instruction: "Explain why insertion and deletion can be expensive.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "Arrays use contiguous memory." },
      { level: 2, text: "Shifting elements costs time." },
    ],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[1, 2, 3]],
        expected: true,
      },
      {
        language: "python",
        level: "early",
        input: [[1, 2, 3]],
        expected: true,
      },
    ],
  },
  {
    id: 12,
    module: "data-structures",
    moduleId: 2,

    title: "String Operations",
    slug: "string-operations",

    concepts: ["strings", "immutability"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 30,
    status: "published",

    problem: {
      statement:
        "Work with strings to understand access, concatenation, and immutability.",
      constraints: ["Strings contain letters only"],
      clarifications: ["Strings may be immutable depending on language"],
    },

    examples: [
      {
        input: "hello",
        output: "h e l l o",
        explanation: "Characters can be accessed by index.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how strings differ from arrays.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Access characters and concatenate strings.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain why string immutability matters.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "Strings are indexed like arrays." },
      { level: 2, text: "Modifying strings creates new ones." },
    ],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: ["hello"],
        expected: true,
      },
      {
        language: "python",
        level: "early",
        input: ["hello"],
        expected: true,
      },
    ],
  },
  {
    id: 13,
    module: "data-structures",
    moduleId: 2,

    title: "Hash Map: Implementation and Usage",
    slug: "hash-map-basics",

    concepts: ["hash-maps", "key-value", "time-complexity"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 40,
    status: "published",

    problem: {
      statement:
        "Understand how hash maps store key-value pairs and provide fast lookups.",
      constraints: ["Keys are strings", "Values are integers"],
      clarifications: ["Focus on usage, not hashing internals"],
    },

    examples: [
      {
        input: { a: 1, b: 2 },
        output: 2,
        explanation: "Accessing a value by key is fast.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain what a hash map is.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Store and retrieve values by key.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "text",
        instruction: "Explain why hash maps are fast.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "Keys map directly to values." },
      { level: 2, text: "Average lookup time is constant." },
    ],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [], expected: true },
      { language: "python", level: "early", input: [], expected: true },
    ],
  },
  {
    id: 14,
    module: "data-structures",
    moduleId: 2,

    title: "Linked List Basics",
    slug: "linked-list-basics",

    concepts: ["linked-lists", "nodes", "pointers"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 45,
    status: "published",

    problem: {
      statement:
        "Understand how linked lists store data using nodes and pointers.",
      constraints: ["Singly linked list only"],
      clarifications: ["Each node points to the next node"],
    },

    examples: [
      {
        input: "1 -> 2 -> 3",
        output: "Traversal order maintained",
        explanation: "Nodes are connected via pointers.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how a linked list differs from an array.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Create nodes and link them.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain advantages and disadvantages.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Nodes store data and a reference." }],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [], expected: true },
      { language: "python", level: "early", input: [], expected: true },
    ],
  },
  {
    id: 15,
    module: "data-structures",
    moduleId: 2,

    title: "Stack: Deep Dive",
    slug: "stack-deep-dive",

    concepts: ["stack", "lifo"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 30,
    status: "published",

    problem: {
      statement:
        "Reinforce stack behavior through implementation and reasoning.",
      constraints: ["Use array-based implementation"],
      clarifications: ["Focus on push/pop behavior"],
    },

    examples: [
      {
        input: "push(1), push(2), pop()",
        output: 2,
        explanation: "Last in, first out.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain LIFO behavior.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement stack operations.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain stack use cases.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Think of stacking plates." }],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [], expected: true },
      { language: "python", level: "early", input: [], expected: true },
    ],
  },
  {
    id: 16,
    module: "data-structures",
    moduleId: 2,

    title: "Queue: Deep Dive",
    slug: "queue-deep-dive",

    concepts: ["queue", "fifo"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 30,
    status: "published",

    problem: {
      statement:
        "Reinforce queue behavior through implementation and reasoning.",
      constraints: ["Use array-based implementation"],
      clarifications: ["Focus on enqueue/dequeue behavior"],
    },

    examples: [
      {
        input: "enqueue(1), enqueue(2), dequeue()",
        output: 1,
        explanation: "First in, first out.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain FIFO behavior.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement queue operations.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain real-world queue examples.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Think of a line at a store." }],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [], expected: true },
      { language: "python", level: "early", input: [], expected: true },
    ],
  },
  {
    id: 17,
    module: "data-structures",
    moduleId: 2,

    title: "Set and Duplicate Detection",
    slug: "set-duplicate-detection",

    concepts: ["sets", "uniqueness"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 25,
    status: "published",

    problem: {
      statement: "Determine whether an array contains duplicate values.",
      constraints: ["Array contains integers only"],
      clarifications: ["Return true if duplicates exist"],
    },

    examples: [
      {
        input: [1, 2, 3, 1],
        output: true,
        explanation: "1 appears more than once.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain what duplicates mean.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Detect duplicates using a set.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "text",
        instruction: "Explain why sets help.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Sets store unique values." }],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[1, 2, 3, 1]],
        expected: true,
      },
      {
        language: "python",
        level: "early",
        input: [[1, 2, 3, 1]],
        expected: true,
      },
    ],
  },
  {
    id: 18,
    module: "algorithms",
    moduleId: 3,

    title: "Linear Search",
    slug: "linear-search",

    concepts: ["searching", "iteration"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 20,
    status: "published",

    problem: {
      statement:
        "Given an array and a target value, return the index of the target if found, otherwise return -1.",
      constraints: ["Array contains integers"],
      clarifications: ["Return the first occurrence"],
    },

    examples: [
      {
        input: { nums: [4, 2, 7, 1], target: 7 },
        output: 2,
        explanation: "7 is found at index 2.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how linear search works.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Search by checking each element.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain the time complexity.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Check elements one by one." }],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[4, 2, 7, 1], 7],
        expected: 2,
      },
      {
        language: "python",
        level: "early",
        input: [[4, 2, 7, 1], 7],
        expected: 2,
      },
    ],
  },
  {
    id: 19,
    module: "algorithms",
    moduleId: 3,

    title: "Binary Search",
    slug: "binary-search",

    concepts: ["searching", "divide-and-conquer"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 30,
    status: "published",

    problem: {
      statement:
        "Given a sorted array and a target value, return the index of the target using binary search.",
      constraints: ["Array must be sorted"],
      clarifications: ["Return -1 if target does not exist"],
    },

    examples: [
      {
        input: { nums: [1, 3, 5, 7, 9], target: 7 },
        output: 3,
        explanation: "Binary search halves the search space.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain why the array must be sorted.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement binary search iteratively.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "code",
        instruction: "Implement binary search recursively.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Compare with the middle element." }],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[1, 3, 5, 7, 9], 7],
        expected: 3,
      },
      {
        language: "python",
        level: "early",
        input: [[1, 3, 5, 7, 9], 7],
        expected: 3,
      },
    ],
  },
  {
    id: 20,
    module: "algorithms",
    moduleId: 3,

    title: "Two Pointers Technique",
    slug: "two-pointers-technique",

    concepts: ["two-pointers", "arrays"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 35,
    status: "published",

    problem: {
      statement: "Use two pointers to solve problems efficiently on arrays.",
      constraints: ["Array may be sorted or unsorted"],
      clarifications: ["Pointers move based on conditions"],
    },

    examples: [
      {
        input: [1, 2, 3, 4, 5],
        output: "Efficient traversal",
        explanation: "Pointers move toward each other.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain what two pointers mean.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Use two pointers to find a pair.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain why this reduces time complexity.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Start from both ends." }],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[1, 2, 3, 4, 5]],
        expected: true,
      },
      {
        language: "python",
        level: "early",
        input: [[1, 2, 3, 4, 5]],
        expected: true,
      },
    ],
  },
  {
    id: 21,
    module: "algorithms",
    moduleId: 3,

    title: "Sliding Window Technique",
    slug: "sliding-window-technique",

    concepts: ["sliding-window", "arrays"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 40,
    status: "published",

    problem: {
      statement:
        "Use the sliding window technique to process subarrays efficiently.",
      constraints: ["Window size may be fixed or dynamic"],
      clarifications: ["Avoid recalculating sums repeatedly"],
    },

    examples: [
      {
        input: [2, 1, 5, 1, 3, 2],
        output: "Max sum window",
        explanation: "Window slides forward while maintaining state.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain what a sliding window is.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Find max sum of fixed-size window.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "code",
        instruction: "Handle variable window size.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Remove outgoing element, add incoming one." }],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[2, 1, 5, 1, 3, 2], 3],
        expected: 9,
      },
      {
        language: "python",
        level: "early",
        input: [[2, 1, 5, 1, 3, 2], 3],
        expected: 9,
      },
    ],
  },
  {
    id: 22,
    module: "algorithms",
    moduleId: 3,

    title: "Recursion Basics",
    slug: "recursion-basics",

    concepts: ["recursion", "call-stack"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 35,
    status: "published",

    problem: {
      statement:
        "Understand recursion by solving problems that call themselves.",
      constraints: ["Base case is required"],
      clarifications: ["Avoid infinite recursion"],
    },

    examples: [
      {
        input: 5,
        output: 120,
        explanation: "Factorial of 5 is 120.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain recursion in your own words.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement factorial recursively.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain recursion vs iteration.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "Every recursive call moves closer to the base case." },
    ],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [5], expected: 120 },
      { language: "python", level: "early", input: [5], expected: 120 },
    ],
  },
  {
    id: 23,
    module: "algorithms",
    moduleId: 3,

    title: "Bubble Sort",
    slug: "bubble-sort",

    concepts: ["sorting", "comparison", "nested-loops"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 30,
    status: "published",

    problem: {
      statement:
        "Sort an array of numbers in ascending order using Bubble Sort.",
      constraints: ["Array contains integers only"],
      clarifications: ["Bubble Sort repeatedly swaps adjacent elements"],
    },

    examples: [
      {
        input: [5, 1, 4, 2, 8],
        output: [1, 2, 4, 5, 8],
        explanation: "Larger values bubble to the end.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how Bubble Sort works step by step.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement Bubble Sort.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain why Bubble Sort is inefficient for large arrays.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "Compare adjacent elements." },
      { level: 2, text: "Repeat passes until no swaps occur." },
    ],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[5, 1, 4, 2, 8]],
        expected: [1, 2, 4, 5, 8],
      },
      {
        language: "python",
        level: "early",
        input: [[5, 1, 4, 2, 8]],
        expected: [1, 2, 4, 5, 8],
      },
    ],
  },
  {
    id: 24,
    module: "algorithms",
    moduleId: 3,

    title: "Selection Sort",
    slug: "selection-sort",

    concepts: ["sorting", "selection"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 30,
    status: "published",

    problem: {
      statement:
        "Sort an array by repeatedly selecting the smallest remaining element.",
      constraints: ["Array contains integers only"],
      clarifications: ["Selection Sort minimizes swaps"],
    },

    examples: [
      {
        input: [64, 25, 12, 22, 11],
        output: [11, 12, 22, 25, 64],
        explanation: "Smallest elements are selected one by one.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how Selection Sort differs from Bubble Sort.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement Selection Sort.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Discuss time complexity regardless of input order.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Find the smallest element each pass." }],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[64, 25, 12, 22, 11]],
        expected: [11, 12, 22, 25, 64],
      },
      {
        language: "python",
        level: "early",
        input: [[64, 25, 12, 22, 11]],
        expected: [11, 12, 22, 25, 64],
      },
    ],
  },
  {
    id: 25,
    module: "algorithms",
    moduleId: 3,

    title: "Insertion Sort",
    slug: "insertion-sort",

    concepts: ["sorting", "insertion"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 35,
    status: "published",

    problem: {
      statement:
        "Sort an array by inserting each element into its correct position.",
      constraints: ["Array contains integers only"],
      clarifications: ["Insertion Sort works well for nearly sorted arrays"],
    },

    examples: [
      {
        input: [12, 11, 13, 5, 6],
        output: [5, 6, 11, 12, 13],
        explanation: "Elements are inserted into the sorted portion.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how Insertion Sort builds a sorted section.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement Insertion Sort.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction:
          "Explain why Insertion Sort can outperform Bubble Sort in practice.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Assume the first element is already sorted." }],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[12, 11, 13, 5, 6]],
        expected: [5, 6, 11, 12, 13],
      },
      {
        language: "python",
        level: "early",
        input: [[12, 11, 13, 5, 6]],
        expected: [5, 6, 11, 12, 13],
      },
    ],
  },
  {
    id: 26,
    module: "algorithms",
    moduleId: 3,

    title: "Merge Sort",
    slug: "merge-sort",

    concepts: ["sorting", "divide-and-conquer", "recursion"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 45,
    status: "published",

    problem: {
      statement: "Sort an array using the Merge Sort algorithm.",
      constraints: ["Array contains integers only"],
      clarifications: ["Merge Sort uses recursion and merging"],
    },

    examples: [
      {
        input: [38, 27, 43, 3, 9, 82, 10],
        output: [3, 9, 10, 27, 38, 43, 82],
        explanation: "Array is divided and merged in sorted order.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain divide-and-conquer in Merge Sort.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement Merge Sort.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain why Merge Sort guarantees O(n log n) time.",
        required: false,
      },
    ],

    hints: [
      { level: 1, text: "Divide until subarrays have one element." },
      { level: 2, text: "Merge sorted halves carefully." },
    ],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[38, 27, 43, 3, 9, 82, 10]],
        expected: [3, 9, 10, 27, 38, 43, 82],
      },
      {
        language: "python",
        level: "early",
        input: [[38, 27, 43, 3, 9, 82, 10]],
        expected: [3, 9, 10, 27, 38, 43, 82],
      },
    ],
  },
  {
    id: 27,
    module: "algorithms",
    moduleId: 3,

    title: "Quick Sort",
    slug: "quick-sort",

    concepts: ["sorting", "partitioning", "divide-and-conquer"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 45,
    status: "published",

    problem: {
      statement: "Sort an array using the Quick Sort algorithm.",
      constraints: ["Array contains integers only"],
      clarifications: ["Choose a pivot and partition the array"],
    },

    examples: [
      {
        input: [10, 7, 8, 9, 1, 5],
        output: [1, 5, 7, 8, 9, 10],
        explanation: "Elements are partitioned around a pivot.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how partitioning works in Quick Sort.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement Quick Sort.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Discuss best, average, and worst-case time complexity.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Elements less than pivot go left." }],

    solutions: [],

    testCases: [
      {
        language: "javascript",
        level: "early",
        input: [[10, 7, 8, 9, 1, 5]],
        expected: [1, 5, 7, 8, 9, 10],
      },
      {
        language: "python",
        level: "early",
        input: [[10, 7, 8, 9, 1, 5]],
        expected: [1, 5, 7, 8, 9, 10],
      },
    ],
  },
  {
    id: 28,
    module: "algorithms",
    moduleId: 4,

    title: "Tree Basics: Nodes and Terminology",
    slug: "tree-basics",

    concepts: ["trees", "nodes", "hierarchy"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 30,
    status: "published",

    problem: {
      statement: "Understand the basic structure and terminology of trees.",
      constraints: ["Binary trees only"],
      clarifications: ["Focus on conceptual understanding, not implementation"],
    },

    examples: [
      {
        input: "Root → Children → Leaves",
        output: "Hierarchical structure",
        explanation: "Trees branch from a single root node.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction:
          "Explain what a tree is and how it differs from a linear structure.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Create a simple tree node with left and right children.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain real-world systems that resemble trees.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Each node can have children." }],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [], expected: true },
      { language: "python", level: "early", input: [], expected: true },
    ],
  },
  {
    id: 29,
    module: "algorithms",
    moduleId: 4,

    title: "Binary Tree Traversal (DFS)",
    slug: "binary-tree-dfs",

    concepts: ["trees", "dfs", "recursion"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 40,
    status: "published",

    problem: {
      statement: "Traverse a binary tree using depth-first traversal methods.",
      constraints: ["Binary tree only"],
      clarifications: ["Support preorder, inorder, and postorder traversal"],
    },

    examples: [
      {
        input: "Tree with root 1",
        output: "Traversal order",
        explanation: "DFS explores depth before breadth.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction:
          "Explain the difference between preorder, inorder, and postorder.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement inorder traversal using recursion.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "code",
        instruction: "Implement preorder and postorder traversal.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Left subtree comes before right subtree." }],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [], expected: true },
      { language: "python", level: "early", input: [], expected: true },
    ],
  },
  {
    id: 30,
    module: "algorithms",
    moduleId: 4,

    title: "Binary Tree Level Order Traversal",
    slug: "binary-tree-bfs",

    concepts: ["trees", "bfs", "queue"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 40,
    status: "published",

    problem: {
      statement: "Traverse a binary tree level by level.",
      constraints: ["Binary tree only"],
      clarifications: ["Use a queue-based approach"],
    },

    examples: [
      {
        input: "Tree with root 1",
        output: "[[1], [2,3]]",
        explanation: "Each level is processed separately.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain how level-order traversal works.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Implement level-order traversal using a queue.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Compare BFS and DFS use cases.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Queues process nodes in FIFO show." }],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [], expected: true },
      { language: "python", level: "early", input: [], expected: true },
    ],
  },
  {
    id: 31,
    module: "algorithms",
    moduleId: 4,

    title: "Binary Search Tree Basics",
    slug: "bst-basics",

    concepts: ["trees", "bst", "ordering"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 45,
    status: "published",

    problem: {
      statement: "Understand the properties of a Binary Search Tree.",
      constraints: ["Left < Root < Right"],
      clarifications: ["BST enables efficient searching"],
    },

    examples: [
      {
        input: "Insert 5, 3, 7",
        output: "Valid BST",
        explanation: "Left subtree < root < right subtree.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain the BST property.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Insert a value into a BST.",
        required: false,
      },
      {
        id: 3,
        level: "intermediate",
        taskType: "code",
        instruction: "Search for a value in a BST.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Compare value with current node." }],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [], expected: true },
      { language: "python", level: "early", input: [], expected: true },
    ],
  },
  {
    id: 32,
    module: "algorithms",
    moduleId: 4,

    title: "Validate a Binary Search Tree",
    slug: "validate-bst",

    concepts: ["trees", "bst", "recursion"],
    languages: ["javascript", "python"],

    difficultyTag: "core",
    estimatedTimeMinutes: 45,
    status: "published",

    problem: {
      statement:
        "Determine whether a binary tree is a valid Binary Search Tree.",
      constraints: ["All nodes must satisfy BST ordering rules"],
      clarifications: ["Duplicates are not allowed"],
    },

    examples: [
      {
        input: "Tree with root 2",
        output: true,
        explanation: "BST property holds for all nodes.",
      },
    ],

    tasks: [
      {
        id: 1,
        level: "beginner",
        taskType: "text",
        instruction: "Explain what could make a BST invalid.",
        required: true,
      },
      {
        id: 2,
        level: "early",
        taskType: "code",
        instruction: "Validate BST using recursion.",
        required: false,
      },
      {
        id: 3,
        level: "advanced",
        taskType: "text",
        instruction: "Explain why passing ranges is safer than local checks.",
        required: false,
      },
    ],

    hints: [{ level: 1, text: "Each node has min and max bounds." }],

    solutions: [],

    testCases: [
      { language: "javascript", level: "early", input: [], expected: true },
      { language: "python", level: "early", input: [], expected: true },
    ],
  },];
