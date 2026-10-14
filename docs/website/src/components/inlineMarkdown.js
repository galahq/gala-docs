/*
Renders the small Markdown subset that Tina writes for short rich-text fields:
paragraphs, [links](url), **bold** and *italics*.
*/

import React from "react";

const INLINE_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|\*(.+?)\*|_(.+?)_/g;

function renderInline(text, keyPrefix) {
  // A fresh regex per call: nested calls would otherwise reset a shared lastIndex.
  const inline = new RegExp(INLINE_PATTERN);
  const parts = [];
  let last = 0;
  let match;
  while ((match = inline.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const key = `${keyPrefix}-${match.index}`;
    const [, linkText, url, bold, em1, em2] = match;
    if (url) {
      parts.push(<a key={key} href={url}>{renderInline(linkText, key)}</a>);
    } else if (bold) {
      parts.push(<strong key={key}>{renderInline(bold, key)}</strong>);
    } else {
      parts.push(<em key={key}>{renderInline(em1 || em2, key)}</em>);
    }
    last = inline.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function InlineMarkdown({ text = "" }) {
  return text
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph, idx) => (
      <p key={idx}>{renderInline(paragraph.replace(/\\(.)/g, "$1"), idx)}</p>
    ));
}
