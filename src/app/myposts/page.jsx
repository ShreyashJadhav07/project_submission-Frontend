
"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserPosts } from "@/lib/post";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import Link from "next/link";

export default function MyPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const user = useSelector((state) => state.user.user);

  const formatTimeAgo = (dateString) => {
    if (!dateString) return "Unknown time";
    
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString();
  };

  useEffect(() => {
    if (!user?._id) {
      setLoading(false);
      return;
    }

    getUserPosts(user._id)
      .then((res) => {
        setPosts(res.posts || []);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch your posts");
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto pt-28 px-4">
        <h1 className="text-2xl font-semibold mb-6">My Posts</h1>
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto pt-28 px-4">
        <h1 className="text-2xl font-semibold mb-6">My Posts</h1>
        <div className="text-center">Please log in to view your posts</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pt-28 px-4">
      <h1 className="text-2xl font-semibold mb-6">My Posts</h1>
      
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">You haven't posted anything yet.</p>
          <Link href={"/"}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
              Create Your First Post
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post._id} className="border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Avatar>
                    <AvatarFallback>
                      {user?.name?.[0]?.toUpperCase() ?? "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{user?.name || "You"}</p>
                    <p className="text-sm text-gray-500">
                      {formatTimeAgo(post.createdAt)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-800">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
