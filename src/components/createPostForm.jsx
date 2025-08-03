"use client";

import { useState } from "react";
import { createPost } from "@/lib/post";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CreatePostForm({ onPostCreated }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
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

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-md space-y-3 max-w-xl w-full mx-auto">
      <Textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="resize-none min-h-[100px]"
      />
      <div className="flex justify-end">
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Posting..." : "Post"}
        </Button>
      </div>
    </div>
  );
}
