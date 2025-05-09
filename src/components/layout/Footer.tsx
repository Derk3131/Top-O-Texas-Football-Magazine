import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react'; // Assuming lucide-react for icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm font-open-sans">&copy; {currentYear} Top O&apos; Texas Football. All Rights Reserved.</p>
          <p className="text-xs font-open-sans mt-1">Designed with passion for Panhandle sports.</p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 font-bebas-neue tracking-wider text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/" legacyBehavior><a className="hover:text-red-500 text-sm font-open-sans">Home</a></Link></li>
            <li><Link href="/scores" legacyBehavior><a className="hover:text-red-500 text-sm font-open-sans">Scores</a></Link></li>
            <li><Link href="/pickem" legacyBehavior><a className="hover:text-red-500 text-sm font-open-sans">Pick&apos;em</a></Link></li>
            <li><Link href="/teams" legacyBehavior><a className="hover:text-red-500 text-sm font-open-sans">Teams</a></Link></li>
            <li><Link href="/sales" legacyBehavior><a className="hover:text-red-500 text-sm font-open-sans">Magazine/Merch</a></Link></li>
            {/* <li><Link href="/contact" legacyBehavior><a className="hover:text-red-500 text-sm font-open-sans">Contact Us</a></Link></li> */}
            <li><Link href="/coach-portal" legacyBehavior><a className="hover:text-red-500 text-sm font-open-sans">Coach Portal</a></Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
            <Facebook size={24} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
