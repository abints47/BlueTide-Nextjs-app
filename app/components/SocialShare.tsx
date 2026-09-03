"use client";

import { useState } from "react";
import { Twitter, Facebook, LinkIcon, Check } from "lucide-react";

interface SocialShareProps {
  title: string;
  url?: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  function handleCopyLink() {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400 mr-1">Share</span>

      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="inline-flex items-center justify-center size-9 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-[#2B2B28] transition-colors"
      >
        <Twitter className="size-4" />
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="inline-flex items-center justify-center size-9 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-[#2B2B28] transition-colors"
      >
        <Facebook className="size-4" />
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopyLink}
        aria-label="Copy link"
        className="inline-flex items-center justify-center size-9 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-[#2B2B28] transition-colors"
      >
        {copied ? <Check className="size-4 text-green-600" /> : <LinkIcon className="size-4" />}
      </button>
    </div>
  );
}
