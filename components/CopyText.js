import React, { useState } from "react";
import { ClipboardCopyIcon, CheckIcon } from "lucide-react";

export default function CopyText({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!navigator.clipboard) {
      alert("Clipboard API is not supported in your browser.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text:", err);
      alert("Failed to copy text. Please try again.");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-800 dark:text-gray-200">{text}</span>
      <button
        onClick={handleCopy}
        className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition"
      >
        {copied ? <CheckIcon size={18} /> : <ClipboardCopyIcon size={18} />}
      </button>
    </div>
  );
}
