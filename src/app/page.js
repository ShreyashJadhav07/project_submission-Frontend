import CreatePostForm from "@/components/createPostForm";
import PostFeed from "@/components/PostFeed";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-6 space-y-6">
      <CreatePostForm></CreatePostForm>

      
    
      
      <PostFeed></PostFeed>

    </div>
    
   
  );
}
