// src/app/articles/[slug]/page.tsx
import { notFound } from 'next/navigation';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  // Basic check to ensure params.slug is used and avoid unused variable warnings
  if (!params || !params.slug) {
    // In a real scenario, you might want to handle this case explicitly
    // For now, we'll assume Next.js routing ensures slug is present
    // or call notFound() if appropriate.
    // For this test, let's assume slug is always provided if the route matches.
  }

  return (
    <div>
      <h1>Article Slug: {params.slug}</h1>
      <p>This is a simplified page for testing the dynamic route parameter.</p>
    </div>
  );
}

// You can add a simple generateStaticParams if needed for Next.js, though it might not be related to this specific type error.
// export async function generateStaticParams() {
//   // Example: return a list of possible slug values
//   return [{ slug: 'test-article' }, { slug: 'another-article' }];
// }

