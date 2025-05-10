import React from 'react';

// Placeholder for scores data - in a real app, this would come from a backend/CMS or a live feed
const weeklyScores = [
  { id: 1, week: 1, teamA: 'Eagles', scoreA: 28, teamB: 'Panthers', scoreB: 14, status: 'Final' },
  { id: 2, week: 1, teamA: 'Lions', scoreA: 21, teamB: 'Tigers', scoreB: 24, status: 'Final' },
  { id: 3, week: 1, teamA: 'Bears', scoreA: 10, teamB: 'Sharks', scoreB: 7, status: 'Q3 - 5:23' },
  { id: 4, week: 2, teamA: 'Knights', scoreA: 0, teamB: 'Dragons', scoreB: 0, status: 'Upcoming - Sat 7:00 PM' },
  // Add more games as needed
];

const upcomingGames = [
  { id: 5, date: 'Saturday, Oct 26th', time: '7:00 PM', teamA: 'Warriors', teamB: 'Giants', location: 'Warriors Stadium' },
  { id: 6, date: 'Saturday, Oct 26th', time: '7:30 PM', teamA: 'Jets', teamB: 'Rockets', location: 'Jets Field' },
];

export default function ScoresPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-oswald text-center">Game Scores & Schedules</h1>

        {/* Weekly Matchups and Results */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-oswald">This Week&apos;s Scores</h2>
          <div className="space-y-4">
            {weeklyScores.filter(game => game.week === 1).map((game) => (
              <div key={game.id} className="p-4 border border-gray-200 rounded-md flex flex-col sm:flex-row justify-between items-center">
                <div className="flex-1 mb-2 sm:mb-0">
                  <span className={`font-semibold font-montserrat ${game.scoreA > game.scoreB ? 'text-red-600' : ''}`}>{game.teamA}</span>
                  <span className="mx-2">vs</span>
                  <span className={`font-semibold font-montserrat ${game.scoreB > game.scoreA ? 'text-red-600' : ''}`}>{game.teamB}</span>
                </div>
                <div className="flex-1 text-center mb-2 sm:mb-0">
                  <span className={`text-xl font-bold font-oswald ${game.scoreA > game.scoreB ? 'text-red-600' : ''}`}>{game.scoreA}</span>
                  <span className="mx-2 text-xl font-bold font-oswald">-</span>
                  <span className={`text-xl font-bold font-oswald ${game.scoreB > game.scoreA ? 'text-red-600' : ''}`}>{game.scoreB}</span>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-sm text-gray-600 font-open-sans bg-gray-200 px-2 py-1 rounded">{game.status}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center font-open-sans">Live scoreboard embedding (e.g., ScoreStream) will be considered for future enhancement.</p>
        </section>

        {/* Upcoming Games Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 font-oswald">Upcoming Games</h2>
          <div className="space-y-4">
            {upcomingGames.map((game) => (
              <div key={game.id} className="p-4 border border-gray-200 rounded-md">
                <p className="text-lg font-semibold font-montserrat">{game.teamA} vs {game.teamB}</p>
                <p className="text-gray-700 font-open-sans">{game.date} at {game.time}</p>
                <p className="text-sm text-gray-600 font-open-sans">Location: {game.location}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}