import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Define Props type for the page
type Props = {
  params: { slug: string };
  // searchParams?: { [key: string]: string | string[] | undefined }; // Include if you use searchParams in the future
};

// Placeholder for fetching article data based on slug
async function getArticleData(slug: string) {
  // In a real application, you would fetch this from a CMS or database
  const articles: { [key: string]: { title: string; content: string; image?: string; video?: string } } = {
    'top-story': { title: 'Top Story Headline', content: 'Full content of the top story...', image: '/images/placeholder-hero.jpg' },
    'article-1': { title: 'Article Title 1', content: 'Full content of article 1...', image: '/images/placeholder-article.jpg' },
    'article-2': { title: 'Article Title 2', content: 'Full content of article 2...', image: '/images/placeholder-article.jpg' },
    'article-3': { title: 'Article Title 3', content: 'Full content of article 3...', image: '/images/placeholder-article.jpg' },
  };
  if (articles[slug]) {
    return articles[slug];
  }
  return null;
}

export default async function ArticlePage({ params }: Props) { // Use the defined Props type here
  const article = await getArticleData(params.slug);

  if (!article) {
    notFound();
    return null; 
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      <article className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 font-oswald text-center">{article.title}</h1>
        {article.image && (
          <div className="relative w-full h-96 mb-6"> 
            <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" className="rounded" />
          </div>
        )}
        <div className="prose prose-lg max-w-none font-open-sans" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />').replace(/'/g, '&apos;') }} />
        {article.video && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 font-oswald">Video Highlight</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={`https://www.youtube.com/embed/${article.video}`} 
                title={`${article.title} Video`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 mt-2">Video embed placeholder (e.g., HUDL or YouTube highlights) </p>
          </div>
        )}
        <div className="mt-8 text-center">
          <Link href="/" legacyBehavior>
            <a className="inline-block bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors font-bebas-neue">
              Back to Home
            </a>
          </Link>
        </div>
      </article>
    </main>
  );
}

// Optional: Generate static paths if you know all slugs at build time
// export async function generateStaticParams() {
//   const articles = ['top-story', 'article-1', 'article-2', 'article-3']; // Example slugs
//   return articles.map((slug) => ({
//     slug: slug,
//   }));
// }
