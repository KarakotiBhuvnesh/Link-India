// src/pages/MarkdownTest.tsx
import ReactMarkdown from "react-markdown";

export default function MarkdownTest() {
  return (
    <div className="p-6">
      <ReactMarkdown>normal **bold** _italic_</ReactMarkdown>
    </div>
  );
}
