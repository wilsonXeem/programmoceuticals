// Code Execution Service for Programming Notepad

class CodeExecutionService {
  static pyodideInstance = null;
  static pyodideLoadingPromise = null;

  static stringifyValue(value) {
    if (typeof value === "string") return value;
    if (typeof value === "undefined") return "";
    try {
      return JSON.stringify(value, null, 2);
    } catch (error) {
      return String(value);
    }
  }

  static async executeJavaScript(code) {
    const captured = [];
    const originalConsole = {
      log: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error,
    };

    const capture = (...args) => {
      captured.push(args.map((arg) => this.stringifyValue(arg)).join(" "));
    };

    try {
      console.log = capture;
      console.info = capture;
      console.warn = capture;
      console.error = capture;

      // eslint-disable-next-line no-new-func
      const runner = new Function(
        `"use strict";
return (async () => {
${code}
})();`
      );
      const result = await runner();

      if (captured.length > 0) {
        return captured.join("\n");
      }

      if (typeof result !== "undefined") {
        return this.stringifyValue(result);
      }

      return "Code executed successfully";
    } catch (error) {
      return `Error: ${error.message}`;
    } finally {
      console.log = originalConsole.log;
      console.info = originalConsole.info;
      console.warn = originalConsole.warn;
      console.error = originalConsole.error;
    }
  }

  static async getPyodide() {
    if (this.pyodideInstance) {
      return this.pyodideInstance;
    }

    if (this.pyodideLoadingPromise) {
      return this.pyodideLoadingPromise;
    }

    if (typeof window === "undefined" || typeof window.loadPyodide !== "function") {
      throw new Error(
        "Python runtime is unavailable. Ensure pyodide.js is loaded in index.html."
      );
    }

    this.pyodideLoadingPromise = window
      .loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
      })
      .then((instance) => {
        this.pyodideInstance = instance;
        return instance;
      })
      .finally(() => {
        this.pyodideLoadingPromise = null;
      });

    return this.pyodideLoadingPromise;
  }

  static async executePython(code) {
    try {
      const pyodide = await this.getPyodide();
      pyodide.globals.set("__notepad_user_code", code);

      await pyodide.runPythonAsync(`
import io
import sys
import traceback

_stdout = io.StringIO()
_stderr = io.StringIO()
_prev_stdout = sys.stdout
_prev_stderr = sys.stderr
sys.stdout = _stdout
sys.stderr = _stderr
_result_repr = ""

try:
    _globals = {}
    exec(__notepad_user_code, _globals)
    if "result" in _globals:
        _result_repr = repr(_globals["result"])
except Exception:
    traceback.print_exc()
finally:
    sys.stdout = _prev_stdout
    sys.stderr = _prev_stderr

__notepad_stdout = _stdout.getvalue()
__notepad_stderr = _stderr.getvalue()
__notepad_result = _result_repr
      `);

      const stdout = pyodide.globals.get("__notepad_stdout") || "";
      const stderr = pyodide.globals.get("__notepad_stderr") || "";
      const result = pyodide.globals.get("__notepad_result") || "";

      pyodide.globals.delete("__notepad_user_code");
      pyodide.globals.delete("__notepad_stdout");
      pyodide.globals.delete("__notepad_stderr");
      pyodide.globals.delete("__notepad_result");

      const trimmedStdout = String(stdout).trim();
      const trimmedStderr = String(stderr).trim();
      const trimmedResult = String(result).trim();

      if (trimmedStderr) {
        return `Error:\n${trimmedStderr}`;
      }

      if (trimmedStdout && trimmedResult) {
        return `${trimmedStdout}\n${trimmedResult}`;
      }

      if (trimmedStdout) {
        return trimmedStdout;
      }

      if (trimmedResult) {
        return trimmedResult;
      }

      return "Code executed successfully";
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  static async executeJava(code) {
    return `Java execution not implemented yet.\nCode to execute:\n${code}`;
  }

  static async executeCpp(code) {
    return `C++ execution not implemented yet.\nCode to execute:\n${code}`;
  }

  static async executeHTML(code) {
    // For HTML, we can show a preview
    return `HTML Preview:\n${code}`;
  }

  static async executeCSS(code) {
    return `CSS code:\n${code}`;
  }

  static async execute(code, language) {
    if (!code.trim()) {
      return 'No code to execute';
    }

    switch (language.toLowerCase()) {
      case 'javascript':
        return await this.executeJavaScript(code);
      case 'python':
        return await this.executePython(code);
      case 'java':
        return await this.executeJava(code);
      case 'cpp':
        return await this.executeCpp(code);
      case 'html':
        return await this.executeHTML(code);
      case 'css':
        return await this.executeCSS(code);
      default:
        return `Execution for ${language} not supported yet`;
    }
  }
}

// Code snippet templates for different languages
export const codeTemplates = {
  javascript: {
    'Hello World': 'console.log("Hello, World!");',
    'Variables': 'let name = "Student";\nlet age = 20;\nconsole.log(`Hello ${name}, you are ${age} years old`);',
    'Function': 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("World"));',
    'Array': 'const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled);',
    'Object': 'const person = {\n  name: "John",\n  age: 30,\n  greet() {\n    return `Hi, I\'m ${this.name}`;\n  }\n};\n\nconsole.log(person.greet());'
  },
  python: {
    'Hello World': 'print("Hello, World!")',
    'Variables': 'name = "Student"\nage = 20\nprint(f"Hello {name}, you are {age} years old")',
    'Function': 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))',
    'List': 'numbers = [1, 2, 3, 4, 5]\ndoubled = [n * 2 for n in numbers]\nprint(doubled)',
    'Class': 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f"Hi, I\'m {self.name}"\n\nperson = Person("John", 30)\nprint(person.greet())'
  },
  java: {
    'Hello World': 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
    'Variables': 'String name = "Student";\nint age = 20;\nSystem.out.println("Hello " + name + ", you are " + age + " years old");',
    'Method': 'public static String greet(String name) {\n    return "Hello, " + name + "!";\n}\n\nSystem.out.println(greet("World"));'
  },
  html: {
    'Basic Structure': '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Hello, World!</h1>\n    <p>This is a paragraph.</p>\n</body>\n</html>',
    'Form': '<form>\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n    <button type="submit">Submit</button>\n</form>'
  },
  css: {
    'Basic Styling': 'body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 20px;\n}\n\nh1 {\n    color: #333;\n    text-align: center;\n}',
    'Flexbox': '.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}\n\n.item {\n    padding: 20px;\n    background: #f0f0f0;\n    border-radius: 8px;\n}'
  }
};

export default CodeExecutionService;
