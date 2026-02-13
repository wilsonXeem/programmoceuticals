import React, { useState } from "react";
import "./CodeBlock.css";

const CodeBlock = ({
  code = "",
  patterns = [],
  highlightLines = [], // e.g. [2, 3, 5]
  showLineNumbers = true,
}) => {
  const [copied, setCopied] = useState(false);
  const lines = code.split("\n");

  const highlightSyntax = (line) => {
    let tokens = [{ text: line, className: null }];

    patterns.forEach(({ regex, className }) => {
      const next = [];

      tokens.forEach((token) => {
        if (token.className) {
          next.push(token);
          return;
        }

        let lastIndex = 0;
        let match;

        while ((match = regex.exec(token.text)) !== null) {
          if (match.index > lastIndex) {
            next.push({
              text: token.text.slice(lastIndex, match.index),
              className: null,
            });
          }

          next.push({
            text: match[0],
            className,
          });

          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < token.text.length) {
          next.push({
            text: token.text.slice(lastIndex),
            className: null,
          });
        }
      });

      tokens = next;
    });

    return tokens;
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-block">
      <div className="code-toolbar">
        <button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
      </div>

      <pre className="code-pre">
        <div className="code-grid">
          {showLineNumbers && (
            <div className="line-numbers">
              {lines.map((_, i) => (
                <div key={i} className="line-number">
                  {i + 1}
                </div>
              ))}
            </div>
          )}

          <div className="code-content">
            {lines.map((line, lineIndex) => {
              const isHighlighted = highlightLines.includes(lineIndex + 1);
              const tokens = highlightSyntax(line);

              return (
                <div
                  key={lineIndex}
                  className={`code-line ${
                    isHighlighted ? "highlight-line" : ""
                  }`}
                >
                  {tokens.map((token, i) =>
                    token.className ? (
                      <span key={i} className={token.className}>
                        {token.text}
                      </span>
                    ) : (
                      <span key={i}>{token.text}</span>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </pre>
    </div>
  );
};

export default CodeBlock;
