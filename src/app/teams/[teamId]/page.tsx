import { notFound } from 'next/navigation';
import Image from 'next/image'; // Import Next.js Image component

// Placeholder for teams data - in a real app, this would come from a backend/CMS
const teamsData: { [key: string]: { name: string; logo: string; roster: string[]; preview: string; coachNotes: string; photos: string[]; videos: string[] } } = {
  'eagles': {
    name: 'Eastside Eagles',
    logo: '/images/placeholder-logo.png', // Assuming you have a placeholder logo here
    roster: ['Player 1 (QB)', 'Player 2 (RB)', 'Player 3 (WR)'],
    preview: 'The Eastside Eagles are looking strong this season, with a powerful offense and a determined defense. Watch out for their star quarterback...',
    coachNotes: 'Coach says: We are focused and ready to compete every week!',
    photos: ['/images/placeholder-team-photo1.jpg', '/images/placeholder-team-photo2.jpg'],
    videos: ['youtube_video_id_1', 'youtube_video_id_2'] // Example YouTube video IDs
  },
  'panthers': {
    name: 'Westwood Panthers',
    logo: '/images/placeholder-logo.png', // Assuming you have a placeholder logo here
    roster: ['Player A (DE)', 'Player B (LB)', 'Player C (S)'],
    preview: 'The Westwood Panthers boast a formidable defense, known for their aggressive playstyle and ability to shut down opponents. Their linebacker core is one to watch.',
    coachNotes: 'Coach says: Defense wins championships, and we are building a wall!',
    photos: ['/images/placeholder-team-photo1.jpg', '/images/placeholder-team-photo2.jpg'],
    videos: []
  },
  // Add more team data as needed
};

async function getTeamData(teamId: string) {
  if (teamsData[teamId]) {
    return teamsData[teamId];
  }
  return null;
}

export default async function TeamSubPage({ params }: { params: { teamId: string } }) {
  const team = await getTeamData(params.teamId);

  if (!team) {
    notFound();
    return null; // Ensure function returns or throws after calling notFound()
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col sm:flex-row items-center mb-8">
          {team.logo && 
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4 sm:mb-0 sm:mr-8">
              <Image src={team.logo} alt={`${team.name} Logo`} layout="fill" objectFit="contain" className="rounded-full border-2 border-red-600" />
            </div>
          }
          <h1 className="text-3xl md:text-4xl font-bold font-oswald text-center sm:text-left">{team.name}</h1>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-oswald border-b-2 border-red-600 pb-2">Team Preview</h2>
          <p className="text-gray-700 font-open-sans leading-relaxed">{team.preview || 'Team preview coming soon.'}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-oswald border-b-2 border-red-600 pb-2">Roster</h2>
          {team.roster && team.roster.length > 0 ? (
            <ul className="list-disc list-inside space-y-1 font-open-sans">
              {team.roster.map((player, index) => (
                <li key={index}>{player}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 font-open-sans">Roster information will be updated soon.</p>
          )}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-oswald border-b-2 border-red-600 pb-2">Coach&apos;s Corner</h2>
          <p className="text-gray-700 font-open-sans italic">{team.coachNotes || 'No coach notes available at this time.'}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-oswald border-b-2 border-red-600 pb-2">Photo Gallery</h2>
          {team.photos && team.photos.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {team.photos.map((photoUrl, index) => (
                <div key={index} className="relative w-full h-40"> {/* Adjust height as needed */}
                  <Image src={photoUrl} alt={`${team.name} photo ${index + 1}`} layout="fill" objectFit="cover" className="rounded shadow-md" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 font-open-sans">No photos available yet.</p>
          )}
        </section>

        {team.videos && team.videos.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4 font-oswald border-b-2 border-red-600 pb-2">Video Highlights</h2>
            <div className="space-y-4">
              {team.videos.map((videoId, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={`https://www.youtube.com/embed/${videoId}`} 
                    title={`${team.name} video ${index + 1}`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full rounded shadow-md"
                  ></iframe>
                </div>
              ) )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

// Optional: Generate static paths if you know all team IDs at build time
// export async function generateStaticParams() {
//   const teamIds = Object.keys(teamsData);
//   return teamIds.map((teamId) => ({
//     teamId: teamId,
//   }));
// }
