import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";       // **bold**, _italic_, tables, strikethrough, task lists
import remarkBreaks from "remark-breaks"; // respect single line breaks as <br/>
import rehypeRaw from "rehype-raw";       // allow HTML in markdown (optional)
import rehypeSanitize from "rehype-sanitize"; // sanitize any raw HTML (critical if rehypeRaw is used)

// Set this to true only if you intentionally allow embedded HTML in your Markdown
const ALLOW_HTML = false;

type Props = {
  markdown: string;
  className?: string; // pass extra classes if needed
};

export default function Markdown({ markdown, className }: Props) {
  return (
    <div className={`prose prose-zinc max-w-none ${className ?? ""}`}>
      <ReactMarkdown
        // Enable GitHub-flavored markdown and soft line breaks
        remarkPlugins={[remarkGfm, remarkBreaks]}
        // Only enable rehypeRaw if you want to render HTML tags inside the content
        rehypePlugins={
          ALLOW_HTML ? [rehypeRaw, rehypeSanitize] : undefined
        }
        // Make links open in new tab safely
        components={{
          a: ({node, ...props}) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          img: ({node, ...props}) => (
            <img {...props} loading="lazy" decoding="async" />
          ),
          // Optional: style headings, code, lists further if desired
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
