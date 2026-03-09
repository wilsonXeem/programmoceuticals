const ALLOWED_TAGS = new Set([
  "a",
  "b",
  "blockquote",
  "br",
  "code",
  "div",
  "em",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "i",
  "img",
  "li",
  "ol",
  "p",
  "pre",
  "span",
  "strong",
  "sub",
  "sup",
  "table",
  "tbody",
  "td",
  "th",
  "thead",
  "tr",
  "u",
  "ul"
]);

const ALLOWED_ATTRIBUTES = new Set([
  "alt",
  "colspan",
  "height",
  "href",
  "rel",
  "rowspan",
  "src",
  "target",
  "title",
  "width"
]);

const URL_ATTRIBUTES = new Set(["href", "src"]);
const SAFE_URL_PATTERN = /^(https?:|mailto:|tel:|data:image\/|blob:|#)/i;

const UNSAFE_TAGS = [
  "script",
  "style",
  "iframe",
  "object",
  "embed",
  "link",
  "meta",
  "form",
  "input",
  "button",
  "textarea",
  "select",
  "option"
];

export const sanitizeHtml = (html) => {
  if (typeof html !== "string" || !html.trim()) {
    return "";
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  UNSAFE_TAGS.forEach((tag) => {
    doc.querySelectorAll(tag).forEach((node) => node.remove());
  });

  const nodes = [];
  const walker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT);
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const tag = node.tagName.toLowerCase();

    if (!ALLOWED_TAGS.has(tag)) {
      const parent = node.parentNode;
      if (!parent) return;
      while (node.firstChild) {
        parent.insertBefore(node.firstChild, node);
      }
      parent.removeChild(node);
      return;
    }

    Array.from(node.attributes).forEach((attribute) => {
      const attrName = attribute.name.toLowerCase();
      const attrValue = attribute.value?.trim() || "";

      if (attrName.startsWith("on")) {
        node.removeAttribute(attribute.name);
        return;
      }

      if (!ALLOWED_ATTRIBUTES.has(attrName)) {
        node.removeAttribute(attribute.name);
        return;
      }

      if (URL_ATTRIBUTES.has(attrName) && attrValue && !SAFE_URL_PATTERN.test(attrValue)) {
        node.removeAttribute(attribute.name);
      }
    });

    if (tag === "a" && node.getAttribute("href")) {
      node.setAttribute("rel", "noopener noreferrer");
      if (!node.getAttribute("target")) {
        node.setAttribute("target", "_blank");
      }
    }
  });

  return doc.body.innerHTML;
};
