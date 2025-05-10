// src/app/articles/[slug]/page.tsx
// Synchronous version for testing

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Basic check to ensure params.slug is used and avoid unused variable warnings
  if (!params || !params.slug) {
    // In a real scenario, you might want to handle this case explicitly
  }

  return (
    <div>
      <h1>Article Slug: {params.slug}</h1>
      <p>This is a simplified synchronous page for testing the dynamic route parameter.</p>
    </div>
  );
}

// You can add a simple generateStaticParams if needed for Next.js.
// export async function generateStaticParams() {
//   // Example: return a list of possible slug values
//   return [{ slug: 'test-article' }, { slug: 'another-article' }];
// }
