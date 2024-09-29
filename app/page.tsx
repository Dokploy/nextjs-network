// app/posts/page.js
import PostsList from '@/components/PostList';
import { query } from '../lib/db';
import { revalidatePath } from 'next/cache';

export default function PostsPage() {
  async function savePost(formData: { get: (arg0: string) => any; }) {
    'use server';
    
    const title = formData.get('title');
    const description = formData.get('description');
    
    if (!title || !description) {
      throw new Error('Both title and description are required');
    }

    try {
      await query('INSERT INTO posts (title, description) VALUES ($1, $2)', [
        title,
        description,
      ]);

      revalidatePath('/');
    } catch (error) {
      console.error('Error saving post:', error);
      throw new Error('Failed to save the post.');
    }
  }

  return (
    <div>
      <PostsList />
      <h1>Create a New Post</h1>
      <form action={savePost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          required
        />
        <button type="submit">Save Post</button>
      </form>
    </div>
  );
}
