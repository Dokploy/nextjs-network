import { query } from '../lib/db';

interface Post {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

export default async function PostsList() {
  async function getPosts(): Promise<Post[]> {
    const result = await query('SELECT * FROM posts ORDER BY created_at DESC');
    return result.rows as unknown as Post[];
  }

  const posts = await getPosts();

  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <small>Created at: {new Date(post.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
