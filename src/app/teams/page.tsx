import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

// Placeholder for teams data - in a real app, this would come from a backend/CMS
const teams = [
  { id: 'eagles', name: 'Eastside Eagles', logo: '/images/placeholder-logo.png' },
  { id: 'panthers', name: 'Westwood Panthers', logo: '/images/placeholder-logo.png' },
  { id: 'lions', name: 'North Lions', logo: '/images/placeholder-logo.png' },
  { id: 'tigers', name: 'South Tigers', logo: '/images/placeholder-logo.png' },
  // Add more teams as needed
];

export default function TeamsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-oswald text-center">Meet the Teams</h1>
        
        {/* Teams Grid or List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teams.map((team) => (
            <Link key={team.id} href={`/teams/${team.id}`} legacyBehavior>
              <a className="block p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow bg-white">
                <div className="relative w-24 h-24 mx-auto mb-4"> {/* Container for responsive image */}
                  <Image 
                    src={team.logo || '/images/default-team-logo.png'} 
                    alt={`${team.name} Logo`} 
                    layout="fill" // Makes the image fill the container
                    objectFit="contain" // Scales the image to maintain aspect ratio while filling container
                  />
                </div>
                <h2 className="text-xl font-semibold font-montserrat text-center text-red-600">{team.name}</h2>
              </a>
            </Link>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-8 text-center font-open-sans">Team subpages will include roster info, coach-submitted content, photos/videos, and a team preview.</p>
      </div>
    </main>
  );
}
