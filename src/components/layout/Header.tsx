import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Link href="/" legacyBehavior>
            <a className="text-2xl font-bold font-oswald hover:text-red-500 transition-colors">
              Top O&apos; Texas Football
            </a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" legacyBehavior><a className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium font-bebas-neue tracking-wider">Home</a></Link>
          <Link href="/scores" legacyBehavior><a className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium font-bebas-neue tracking-wider">Scores</a></Link>
          <Link href="/pickem" legacyBehavior><a className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium font-bebas-neue tracking-wider">Pick&apos;em</a></Link>
          <Link href="/teams" legacyBehavior><a className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium font-bebas-neue tracking-wider">Teams</a></Link>
          <Link href="/sales" legacyBehavior><a className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium font-bebas-neue tracking-wider">Magazine/Merch</a></Link>
          {/* <Link href="/contact" legacyBehavior><a className="hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium font-bebas-neue tracking-wider">Contact</a></Link> */}
        </div>
        {/* Mobile Menu Button - to be implemented with state and interactivity */}
        <div className="md:hidden">
          <button className="text-white hover:text-red-500 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
