import CreatePostForm from "@/components/createPostForm";
import PostFeed from "@/components/PostFeed";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
     <div className="py-6 space-y-6 min-h-screen">
  <div className="border border-red-500 bg-yellow-200 p-8">
    <CreatePostForm />
  </div>
  <div className="border border-green-500 bg-green-200 p-8">
    <PostFeed />
  </div>
</div>
    </main>
  );
}



// "use client";

// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import CreatePostForm from "@/components/createPostForm";
// import PostFeed from "@/components/PostFeed";

// export default function Home() {
//   const { isLoggedIn } = useSelector((state) => state.user);
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Give time for Redux to hydrate
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//       if (!isLoggedIn) {
//         router.push("/login");
//       }
//     }, 100); // Small delay to let Redux hydrate

//     return () => clearTimeout(timer);
//   }, [isLoggedIn, router]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-2 text-gray-600">Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!isLoggedIn) return null;

//   return (
//     <main className="min-h-screen bg-gray-50">
//       <div className="py-6 space-y-6 min-h-screen">
//         <div className="border border-red-500 bg-yellow-200 p-8">
//           <CreatePostForm />
//         </div>
//         <div className="border border-green-500 bg-green-200 p-8">
//           <PostFeed />
//         </div>
//       </div>
//     </main>
//   );
// }