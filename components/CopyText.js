import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ClipboardCopyIcon, CheckIcon } from 'lucide-react';

export default function CopyText({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="flex items-center gap-2 border p-3 rounded-lg  text-gray-700">
      <span className="text-sm break-all">{text}</span>
      <Button onClick={handleCopy} className="flex items-center gap-1">
        {copied ? <CheckIcon size={16} /> : <ClipboardCopyIcon size={16} />}
        {copied ? 'Copied' : 'Copy'}
      </Button>
    </div>
  );
}
