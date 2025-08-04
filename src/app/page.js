
"use client";

import { useEffect, useState } from "react";
import CreatePostForm from "@/components/createPostForm";
import PostFeed from "@/components/PostFeed";
import { getAllPosts } from "@/lib/post";
import { toast } from "sonner";

export default function Home() {
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20">
       
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Social Feed
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Share your thoughts and connect with others
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
       
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Posts
              </h2>
              <div className="max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
                <PostFeed posts={posts} loading={loading} />
              </div>
            </div>
          </div>

          {/* Create Post Form */}
          <div className="lg:col-span-1 order-1 lg:order-2 h-fit">
            <div className="sticky top-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Create Post
                </h2>
                <CreatePostForm onPostCreated={fetchPosts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
