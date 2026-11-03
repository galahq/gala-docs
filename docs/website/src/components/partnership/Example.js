import React from "react";

// Case-study card used on the partnership page
export default function Example({ title, children }) {
  return (
    <div className="card margin-bottom--md">
      <div className="card__header">
        <h4>
          <span aria-hidden="true">🔍</span> {title}
        </h4>
      </div>
      <div className="card__body">{children}</div>
    </div>
  );
}
