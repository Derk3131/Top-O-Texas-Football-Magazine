import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      {/* Header/Navigation will be a separate component */}
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mb-12 text-center">
        <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-oswald">TOP STORY HEADLINE</h1>
          <img src="/images/placeholder-hero.jpg" alt="Top Story Image" className="w-full h-auto max-h-96 object-cover rounded mb-4"/>
          <p className="text-lg md:text-xl mb-6 font-open-sans">This is a teaser for the top story. It provides a brief overview of the article content, enticing users to read more.</p>
          <a href="/articles/top-story" className="inline-block bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition-colors font-bebas-neue">
            Read More
          </a>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="w-full max-w-7xl mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left font-oswald">High School News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/images/placeholder-article.jpg" alt="Article Image" className="w-full h-48 object-cover rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-2 font-oswald">Article Title 1</h3>
            <p className="text-gray-700 mb-4 font-open-sans">Short description of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/articles/article-1" className="text-red-600 hover:underline font-semibold font-bebas-neue">Read More</a>
          </div>
          {/* Article Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/images/placeholder-article.jpg" alt="Article Image" className="w-full h-48 object-cover rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-2 font-oswald">Article Title 2</h3>
            <p className="text-gray-700 mb-4 font-open-sans">Short description of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/articles/article-2" className="text-red-600 hover:underline font-semibold font-bebas-neue">Read More</a>
          </div>
          {/* Article Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src="/images/placeholder-article.jpg" alt="Article Image" className="w-full h-48 object-cover rounded mb-4"/>
            <h3 className="text-xl font-semibold mb-2 font-oswald">Article Title 3</h3>
            <p className="text-gray-700 mb-4 font-open-sans">Short description of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/articles/article-3" className="text-red-600 hover:underline font-semibold font-bebas-neue">Read More</a>
          </div>
        </div>
      </section>

      {/* Scoreboard Callout */}
      <section className="w-full max-w-7xl mb-12 text-center">
        <div className="bg-black text-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 font-oswald">Latest Scores</h2>
          <p className="mb-4 font-open-sans">Team A: 28 - Team B: 14 (Final)</p>
          <a href="/scores" className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors font-bebas-neue">
            View Full Scoreboard
          </a>
        </div>
      </section>

      {/* Other Sections (7-on-7, Coach Updates) */}
      <section className="w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left font-oswald">7-on-7 & Coach Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 font-oswald">7-on-7 Tournament News</h3>
            <p className="text-gray-700 font-open-sans">Updates and highlights from recent 7-on-7 games and tournaments.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 font-oswald">Coach Updates & Insights</h3>
            <p className="text-gray-700 font-open-sans">Latest news, strategies, and insights from coaches across the region.</p>
          </div>
        </div>
      </section>

      {/* Footer will be a separate component */}
    </main>
  );
}

