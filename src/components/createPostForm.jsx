
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { createPost } from "@/lib/post";
import Link from "next/link";

export default function CreatePostForm({ onPostCreated }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.user);

  const handleSubmit = async () => {
    if (!user?._id) {
      toast.error("You must be logged in to post.");
      return;
    }

    if (!content.trim()) {
      toast.warning("Please enter post content");
      return;
    }

    try {
      setLoading(true);
      const res = await createPost({ content });
      setContent("");
      toast.success("Post created successfully!");

      if (onPostCreated) onPostCreated();
    } catch (err) {
      console.error(err);
      toast.error("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // 👇 Return message and login button if not logged in
  if (!user) {
    return (
      <div className="text-center text-gray-600 py-10">
        <p className="mb-4">You must be logged in to create a post.</p>
        <Link
          href="/login"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="What's on your mind? Share something interesting..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          className="resize-none min-h-[120px] border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
          maxLength={1000}
        />
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          {content.length}/1000
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Button
          onClick={handleSubmit}
          disabled={loading || !content.trim()}
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors cursor-pointer"
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Posting...</span>
            </div>
          ) : (
            "Post"
          )}
        </Button>
      </div>
    </div>
  );
}
