"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserPosts } from "@/lib/post";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function MyPostsPage() {
  const [posts, setPosts] = useState([]);

  
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user?._id) return;

    getUserPosts(user._id)
      .then((res) => setPosts(res.posts || []))
      .catch(() => toast.error("Failed to fetch your posts"));
  }, [user]);

  return (
    <div className="max-w-xl mx-auto py-6 space-y-4">
      <h1 className="text-xl font-semibold">My Posts</h1>
      {posts.map((post) => (
        <Card key={post._id}>
          <CardContent className="p-4">
            <p className="text-sm">{post.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
