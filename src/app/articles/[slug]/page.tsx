// src/app/articles/[slug]/page.tsx
export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Article Slug: {params.slug}</h1>
      <p>This is a simplified page for testing the dynamic route parameter.</p>
    </div>
  );
}
