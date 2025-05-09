import React from 'react';

export default function SalesPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-oswald text-center">Magazine & Merchandise</h1>

        {/* Magazine Promotion Section */}
        <section className="mb-12 p-6 border border-red-200 rounded-lg bg-red-50">
          <h2 className="text-2xl font-bold mb-4 font-oswald text-red-700">Top O' Texas Football Magazine</h2>
          <div className="md:flex md:items-center">
            <img src="/images/placeholder-magazine.jpg" alt="Magazine Cover" className="w-full md:w-1/3 h-auto object-cover rounded shadow-md mb-4 md:mb-0 md:mr-6"/>
            <div>
              <p className="text-gray-700 font-open-sans leading-relaxed mb-4">
                Get exclusive insights, in-depth team previews, player spotlights, and stunning photography with your subscription to Top O' Texas Football Magazine! 
                The ultimate companion for every Panhandle football fan.
              </p>
              <p className="text-lg font-semibold text-red-600 font-montserrat mb-2">Subscription Options:</p>
              <ul className="list-disc list-inside text-gray-700 font-open-sans mb-4">
                <li>Digital Edition: $19.99/year</li>
                <li>Print Edition (mailed to your home): $39.99/year</li>
                <li>Digital + Print Bundle: $49.99/year</li>
              </ul>
              <button className="inline-block bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors font-bebas-neue">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>

        {/* Merchandise Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-oswald text-center md:text-left">Official Merchandise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Merch Item 1 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center border border-gray-200">
              <img src="/images/placeholder-merch1.jpg" alt="T-Shirt" className="w-full h-56 object-contain rounded mb-3"/>
              <h3 className="text-xl font-semibold mb-1 font-montserrat">TOTF Logo T-Shirt</h3>
              <p className="text-gray-600 font-open-sans mb-2">Show your support! (Red, Black, White)</p>
              <p className="text-lg font-bold text-red-600 font-oswald mb-3">$24.99</p>
              <button className="w-full bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors font-bebas-neue">
                Add to Cart
              </button>
            </div>
            {/* Merch Item 2 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center border border-gray-200">
              <img src="/images/placeholder-merch2.jpg" alt="Hat" className="w-full h-56 object-contain rounded mb-3"/>
              <h3 className="text-xl font-semibold mb-1 font-montserrat">TOTF Embroidered Hat</h3>
              <p className="text-gray-600 font-open-sans mb-2">Stay cool on game day. (Adjustable)</p>
              <p className="text-lg font-bold text-red-600 font-oswald mb-3">$19.99</p>
              <button className="w-full bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors font-bebas-neue">
                Add to Cart
              </button>
            </div>
            {/* Merch Item 3 */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-md text-center border border-gray-200">
              <img src="/images/placeholder-merch3.jpg" alt="Mug" className="w-full h-56 object-contain rounded mb-3"/>
              <h3 className="text-xl font-semibold mb-1 font-montserrat">TOTF Coffee Mug</h3>
              <p className="text-gray-600 font-open-sans mb-2">Perfect for your morning brew.</p>
              <p className="text-lg font-bold text-red-600 font-oswald mb-3">$14.99</p>
              <button className="w-full bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors font-bebas-neue">
                Add to Cart
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center font-open-sans">Simple shopping cart functionality is a placeholder. Full e-commerce integration (e.g., WooCommerce) will be considered for future enhancement.</p>
        </section>

        {/* Advertising Call-to-Action */}
        <section className="p-6 bg-black text-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 font-oswald text-center">Advertise With Us!</h2>
          <p className="text-gray-300 font-open-sans leading-relaxed text-center mb-4">
            Reach thousands of passionate high school football fans, parents, and community members across the Texas Panhandle. 
            We offer a variety of advertising packages to fit your business needs.
          </p>
          <div className="text-center">
            <button className="inline-block bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors font-bebas-neue">
              Learn More About Advertising
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}

