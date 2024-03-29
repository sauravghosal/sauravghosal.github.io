import React from "react";

const Tag = ({ tag }) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-slate-600 dark:text-slate-300">
      #{tag}
    </span>
  );
};

export default Tag;
