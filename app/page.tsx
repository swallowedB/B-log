import { getAllPosts } from "@/lib/posts/repository";

export default function HomePage() {
  const all = getAllPosts();

  return (
      <main>
      <h1>mdx 연동 렌더링</h1>
      <ul>
        {all.map((post) => (
          <li key={post.slug}>
            {post.title} ({post.category}) - {post.date}
          </li>
        ))}
      </ul>
    </main>
  )
}
