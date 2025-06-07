import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data: PostProps[] = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Recent Posts</h1>
        <div className="grid gap-4">
          {posts.map(post => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsPage;
