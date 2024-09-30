// app/posts/page.js
import PostsList from '@/components/PostList';
import NewPost from '@/components/NewPost';

export default function PostsPage() {
  return (
    <main>
      <PostsList />
      <NewPost />
    </main>
  );
}
