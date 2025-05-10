import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder for teams data - in a real app, this would come from a backend/CMS
const teamsData: { [key: string]: { name: string; logo: string; roster: string[]; preview: string; coachNotes: string; photos: string[]; videos: string[] } } = {
  'eagles': {
    name: 'Eastside Eagles',
    logo: '/images/placeholder-logo.png',
    roster: ['Player 1 (QB)', 'Player 2 (RB)', 'Player 3 (WR)'],
    preview: 'The Eastside Eagles are looking strong this season, with a powerful offense and a determined defense. Watch out for their star quarterback...',
    coachNotes: 'Coach says: We&apos;re focused and ready to compete every week!',
    photos: ['/images/placeholder-team-photo1.jpg', '/images/placeholder-team-photo2.jpg'],
    videos: ['youtube_video_id_1', 'youtube_video_id_2']
  },
  'panthers': {
    name: 'Westwood Panthers',
    logo: '/images/placeholder-logo.png',
    roster: ['Player A (DE)', 'Player B (LB)', 'Player C (S)'],
    preview: 'The Westwood Panthers boast a formidable defense, known for their aggressive play and teamwork. They are a top contender for the district title.',
    coachNotes: 'Coach says: Our team is putting in the hard work day in and day out.',
    photos: ['/images/placeholder-team-photo3.jpg'],
    videos: ['youtube_video_id_3']
  },
  // Add more teams as needed
};

async function getTeamData(teamId: string) {
  if (teamsData[teamId]) {
    return teamsData[teamId];
  }
  return null;
}

export default async function TeamIdPage({ params }: { params: { teamId: string } }) {
  const team = await getTeamData(params.teamId);

  if (!team) {
    notFound();
    return null;
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mr-0 md:mr-6 mb-4 md:mb-0">
            <Image src={team.logo} alt={`${team.name} Logo`} layout="fill" objectFit="contain" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-oswald text-center md:text-left">{team.name}</h1>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-oswald border-b-2 border-red-600 pb-2">Team Preview</h2>
          <p className="text-gray-700 font-open-sans leading-relaxed" dangerouslySetInnerHTML={{ __html: team.preview.replace(/\n/g, '<br />').replace(/'/g, "&apos;") }} />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-oswald border-b-2 border-red-600 pb-2">Roster</h2>
          <ul className="list-disc list-inside text-gray-700 font-open-sans space-y-1">
            {team.roster.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8 p-4 bg-red-50 border border-red-200 rounded-md">
          <h2 className="text-2xl font-bold mb-3 font-oswald text-red-700">Coach&apos;s Corner</h2>
          <p className="text-gray-700 font-open-sans italic">{team.coachNotes.replace(/'/g, "&apos;")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 font-oswald border-b-2 border-red-600 pb-2">Photo Gallery</h2>
          {team.photos && team.photos.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {team.photos.map((photoSrc, index) => (
                <div key={index} className="relative aspect-square">
                  <Image src={photoSrc} alt={`${team.name} photo ${index + 1}`} layout="fill" objectFit="cover" className="rounded shadow-md" />
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
         <div className="mt-8 text-center">
          <Link href="/teams" legacyBehavior>
            <a className="inline-block bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors font-bebas-neue">
              Back to Teams
            </a>
          </Link>
        </div>
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
