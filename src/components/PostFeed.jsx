// "use client";

// import { useEffect, useState } from "react";
// import { getAllPosts } from "@/lib/post";



// import { toast } from "sonner";
// import { Skeleton } from "./ui/skeleton";
// import { Avatar, AvatarFallback } from "./ui/avatar";
// import { Card, CardContent } from "./ui/card";


// export default function PostFeed() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchPosts = async () => {
//     try {
//       const res = await getAllPosts();
//       setPosts(res.posts || []);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch posts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="space-y-4 mt-6">
//         {[...Array(3)].map((_, i) => (
//           <Skeleton key={i} className="h-[120px] w-full rounded-xl" />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4 mt-6 max-w-xl w-full mx-auto">
//       {posts.map((post) => (
//         <Card key={post._id}>
//           <CardContent className="p-4 space-y-2">
//             <div className="flex items-center space-x-3">
//               <Avatar>
//                 <AvatarFallback>
//                   {post.author?.name?.[0] ?? "U"}
//                 </AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="font-semibold">{post.author?.name}</p>
//                 <p className="text-xs text-muted-foreground">
//                   {post.author?.email}
//                 </p>
//               </div>
//             </div>
//             <p className="text-sm">{post.content}</p>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { getAllPosts } from "@/lib/post";
// import { toast } from "sonner";
// import { Skeleton } from "./ui/skeleton";
// import { Avatar, AvatarFallback } from "./ui/avatar";
// import { Card, CardContent } from "./ui/card";

// export default function PostFeed() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchPosts = async () => {
//     try {
//       const res = await getAllPosts();
//       setPosts(res.posts || []);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch posts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
//     if (diffInHours < 1) return "Just now";
//     if (diffInHours < 24) return `${diffInHours}h ago`;
//     if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
//     return date.toLocaleDateString();
//   };

//   if (loading) {
//     return (
//       <div className="space-y-4">
//         {[...Array(3)].map((_, i) => (
//           <Card key={i} className="border-gray-200 dark:border-gray-700">
//             <CardContent className="p-4 space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Skeleton className="h-10 w-10 rounded-full" />
//                 <div className="space-y-2">
//                   <Skeleton className="h-4 w-24" />
//                   <Skeleton className="h-3 w-32" />
//                 </div>
//               </div>
//               <Skeleton className="h-16 w-full" />
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     );
//   }

//   if (posts.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
//           <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//           </svg>
//         </div>
//         <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
//           No posts yet
//         </h3>
//         <p className="text-gray-500 dark:text-gray-400">
//           Be the first to share something!
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {posts.map((post) => (
//         <Card key={post._id} className="border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
//           <CardContent className="p-4 space-y-3">
//             <div className="flex items-start justify-between">
//               <div className="flex items-center space-x-3">
//                 <Avatar className="border-2 border-gray-100 dark:border-gray-600">
//                   <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
//                     {post.author?.name?.[0]?.toUpperCase() ?? "U"}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white">
//                     {post.author?.name || "Anonymous"}
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     {post.author?.email} • {formatDate(post.createdAt)}
//                   </p>
//                 </div>
//               </div>
              
//               {/* Optional: Add more actions here */}
//               <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
//                 </svg>
//               </button>
//             </div>
            
//             <div className="pl-0">
//               <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
//                 {post.content}
//               </p>
//             </div>

//             {/* Optional: Add engagement buttons */}
//             <div className="flex items-center space-x-4 pt-2 border-t border-gray-100 dark:border-gray-700">
//               <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//                 <span className="text-sm">Like</span>
//               </button>
//               <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                 </svg>
//                 <span className="text-sm">Comment</span>
//               </button>
//               <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
//                 </svg>
//                 <span className="text-sm">Share</span>
//               </button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { getAllPosts } from "@/lib/post";
// import { toast } from "sonner";
// import { Skeleton } from "./ui/skeleton";
// import { Avatar, AvatarFallback } from "./ui/avatar";
// import { Card, CardContent } from "./ui/card";

// export default function PostFeed() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchPosts = async () => {
//     try {
//       const res = await getAllPosts();
//       console.log("Raw posts data:", res.posts); // Debug line
//       setPosts(res.posts || []);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch posts");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
    
//     // Listen for new posts
//     const handlePostCreated = () => {
//       fetchPosts();
//     };
    
//     window.addEventListener('postCreated', handlePostCreated);
    
//     return () => {
//       window.removeEventListener('postCreated', handlePostCreated);
//     };
//   }, []);

//   const formatTimeAgo = (dateString) => {
//     if (!dateString) return "Unknown time";
    
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffInMs = now - date;
//     const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
//     const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
//     const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
//     console.log("Date debug:", {
//       originalDate: dateString,
//       parsedDate: date,
//       now: now,
//       diffInMs: diffInMs,
//       diffInMinutes: diffInMinutes
//     });
    
//     if (diffInMinutes < 1) return "Just now";
//     if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
//     if (diffInHours < 24) return `${diffInHours}h ago`;
//     if (diffInDays < 7) return `${diffInDays}d ago`;
//     if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`;
    
//     // For older posts, show actual date
//     return date.toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
//     });
//   };

//   if (loading) {
//     return (
//       <div className="space-y-4">
//         {[...Array(3)].map((_, i) => (
//           <Card key={i} className="border-gray-200 dark:border-gray-700">
//             <CardContent className="p-4 space-y-3">
//               <div className="flex items-center space-x-3">
//                 <Skeleton className="h-10 w-10 rounded-full" />
//                 <div className="space-y-2">
//                   <Skeleton className="h-4 w-24" />
//                   <Skeleton className="h-3 w-32" />
//                 </div>
//               </div>
//               <Skeleton className="h-16 w-full" />
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     );
//   }

//   if (posts.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
//           <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//           </svg>
//         </div>
//         <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
//           No posts yet
//         </h3>
//         <p className="text-gray-500 dark:text-gray-400">
//           Be the first to share something!
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {posts.map((post) => (
//         <Card key={post._id} className="border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
//           <CardContent className="p-4 space-y-3">
//             <div className="flex items-start justify-between">
//               <div className="flex items-center space-x-3">
//                 <Avatar className="border-2 border-gray-100 dark:border-gray-600">
//                   <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
//                     {post.author?.name?.[0]?.toUpperCase() ?? "U"}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <p className="font-semibold text-gray-900 dark:text-white">
//                     {post.author?.name || "Anonymous"}
//                   </p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">
//                     {post.author?.email} • {formatTimeAgo(post.createdAt)}
//                   </p>
//                 </div>
//               </div>
              
//               {/* <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
//                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
//                 </svg>
//               </button> */}
//             </div>
            
//             <div className="pl-0">
//               <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
//                 {post.content}
//               </p>
//             </div>

//             <div className="flex items-center space-x-4 pt-2 border-t border-gray-100 dark:border-gray-700">
//               <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                 </svg>
//                 <span className="text-sm">Like</span>
//               </button>
//               <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                 </svg>
//                 <span className="text-sm">Comment</span>
//               </button>
//               <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
//                 </svg>
//                 <span className="text-sm">Share</span>
//               </button>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

"use client";

import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

export default function PostFeed({ posts, loading }) {
  const formatTimeAgo = (dateString) => {
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
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
    });
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="border-gray-200 dark:border-gray-700">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
              <Skeleton className="h-16 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <p>No posts yet. Be the first to share something!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card
          key={post._id}
          className="border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          <CardContent className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="border-2 border-gray-100 dark:border-gray-600">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                    {post.author?.name?.[0]?.toUpperCase() ?? "U"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {post.author?.name || "Anonymous"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {post.author?.email} • {formatTimeAgo(post.createdAt)}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
              {post.content}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
