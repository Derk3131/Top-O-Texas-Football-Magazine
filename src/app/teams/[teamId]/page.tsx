import { notFound } from 'next/navigation';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';

// Placeholder for fetching team data based on teamId
// In a real app, this would come from a backend/CMS
const teamsData: { [key: string]: any } = {
  'eagles': {
    id: 'eagles',
    name: 'Eastside Eagles',
    logo: '/images/placeholder-logo.png',
    banner: '/images/placeholder-team-banner.jpg',
    description: 'The Eastside Eagles are known for their strong offense and dedicated fanbase. They have a rich history of success in the league.',
    coach: 'Coach John Doe',
    keyPlayers: ['QB Mike Smith', 'RB Lisa Jones', 'WR David Chen'],
    schedule: [
      { opponent: 'Westwood Panthers', date: 'Oct 5, 2024', result: 'W 28-14' },
      { opponent: 'North Lions', date: 'Oct 12, 2024', result: 'L 10-17' },
    ],
    news: [
      { title: 'Eagles Secure Victory in Season Opener', date: 'Oct 6, 2024', link: '#' },
      { title: 'Upcoming Match Against the Lions', date: 'Oct 10, 2024', link: '#' },
    ]
  },
  // Add more teams with similar structure as needed
  'panthers': {
    id: 'panthers',
    name: 'Westwood Panthers',
    logo: '/images/placeholder-logo.png',
    banner: '/images/placeholder-team-banner.jpg',
    description: 'The Westwood Panthers boast a formidable defense and a never-give-up attitude. They are always a tough opponent.',
    coach: 'Coach Jane Roe',
    keyPlayers: ['LB Kevin Brown', 'S Sarah Davis', 'DE Tom Wilson'],
    schedule: [
      { opponent: 'Eastside Eagles', date: 'Oct 5, 2024', result: 'L 14-28' },
    ],
    news: [] 
  },
};

async function getTeamData(teamId: string) {
  if (teamsData[teamId]) {
    return teamsData[teamId];
  }
  return null;
}

// Define props for the page, including params
interface TeamPageProps {
  params: {
    teamId: string;
  };
}

export default async function TeamPage({ params }: TeamPageProps) {
  const team = await getTeamData(params.teamId);

  if (!team) {
    notFound();
    return null; // Ensure notFound() is followed by a return or throw
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Team Banner */}
        <div className="relative w-full h-64 md:h-80">
          <Image 
            src={team.banner || '/images/default-banner.jpg'} 
            alt={`${team.name} Banner`} 
            layout="fill" 
            objectFit="cover"
            priority 
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-4">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
              <Image 
                src={team.logo || '/images/default-team-logo.png'} 
                alt={`${team.name} Logo`} 
                layout="fill" 
                objectFit="contain" 
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-oswald text-center">{team.name}</h1>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {/* Team Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3 font-oswald">About the {team.name}</h2>
            <p className="text-gray-700 font-open-sans leading-relaxed">{team.description}</p>
          </section>

          {/* Coach & Key Players */}
          <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 font-oswald">Head Coach</h3>
              <p className="text-gray-700 font-open-sans">{team.coach}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 font-oswald">Key Players</h3>
              <ul className="list-disc list-inside text-gray-700 font-open-sans">
                {team.keyPlayers.map((player: string) => <li key={player}>{player}</li>)}
              </ul>
            </div>
          </section>

          {/* Schedule & Results */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3 font-oswald">Schedule & Results</h2>
            <div className="space-y-3">
              {team.schedule.map((game: any, index: number) => (
                <div key={index} className="p-3 bg-gray-50 rounded-md border border-gray-200">
                  <p className="font-semibold font-montserrat">vs {game.opponent} <span className="text-sm text-gray-600">({game.date})</span></p>
                  <p className="text-gray-700 font-open-sans">Result: {game.result}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Latest News */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3 font-oswald">Latest News</h2>
            {team.news.length > 0 ? (
              <div className="space-y-3">
                {team.news.map((item: any, index: number) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-md border border-gray-200">
                    <h4 className="font-semibold font-montserrat">{item.title}</h4>
                    <p className="text-sm text-gray-600 font-open-sans mb-1">{item.date}</p>
                    <Link href={item.link} legacyBehavior><a className="text-red-600 hover:underline font-semibold">Read More</a></Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 font-open-sans">No recent news for the {team.name}.</p>
            )}
          </section>

          <div className="mt-10 text-center">
            <Link href="/teams" legacyBehavior>
              <a className="inline-block bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors font-bebas-neue">
                Back to All Teams
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

// Optional: Generate static paths if you know all team slugs at build time
// export async function generateStaticParams() {
//   const teamIds = Object.keys(teamsData);
//   return teamIds.map((teamId) => ({
//     teamId: teamId,
//   }));
// }
