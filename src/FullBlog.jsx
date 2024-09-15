import React, { useEffect, useState } from "react";
import MarkdownPreview from '@uiw/react-markdown-preview';

const FullBlog = ({ markdownFile }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(markdownFile)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, [markdownFile]);

  return (
    <main className="prose max-w-none mx-auto py-8 px-4 dark:prose-dark">
      <article>
        <MarkdownPreview
          source={content}
          style={{ padding: 16 }}
          rehypeRewrite={(node, index, parent) => {
            if (node.tagName === "a" && parent && /^h(1|2|3|4|5|6)/.test(parent.tagName)) {
              parent.children = parent.children.slice(1);
            }
          }}
        />
      </article>
    </main>
  );
};

export default FullBlog;
