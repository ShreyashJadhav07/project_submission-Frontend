"use client";

import { useEffect, useState } from "react";
import { getAllPosts } from "@/lib/post";



import { toast } from "sonner";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";


export default function PostFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await getAllPosts();
      setPosts(res.posts || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4 mt-6">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-[120px] w-full rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-6 max-w-xl w-full mx-auto">
      {posts.map((post) => (
        <Card key={post._id}>
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback>
                  {post.author?.name?.[0] ?? "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author?.name}</p>
                <p className="text-xs text-muted-foreground">
                  {post.author?.email}
                </p>
              </div>
            </div>
            <p className="text-sm">{post.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
