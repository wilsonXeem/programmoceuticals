// Example usage of CodeBlock with syntax highlighting

import CodeBlock from './components/CodeBlock';

// JavaScript syntax patterns
const jsPatterns = [
  { regex: /\b(function|const|let|var|if|else|for|while|return|class|extends|import|export|from|default)\b/g, className: 'keyword' },
  { regex: /"[^"]*"|'[^']*'|`[^`]*`/g, className: 'string' },
  { regex: /\b\d+\.?\d*\b/g, className: 'number' },
  { regex: /\/\/.*$/gm, className: 'comment' },
  { regex: /\/\*[\s\S]*?\*\//g, className: 'comment' },
  { regex: /\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\s*\()/g, className: 'func' },
  { regex: /[+\-*/%=<>!&|^~?:]/g, className: 'operator' },
  { regex: /\b(true|false)\b/g, className: 'boolean' },
  { regex: /\b(null|undefined)\b/g, className: 'null' }
];

const exampleCode = `
function greet(name) {
    const message = "Hello, " + name + "!";
    return message;
}

let user = "Alice";
console.log(greet(user));
`;

// Usage in component
<CodeBlock 
  code={exampleCode}
  patterns={jsPatterns}
  highlightLines={[2, 6]}
  showLineNumbers={true}
/>