"use client";

import React, { useState } from 'react';

// Placeholder for game data - in a real app, this would come from a backend/CMS
const weeklyGames = [
  { id: 1, week: 1, teamA: 'Eagles', teamB: 'Panthers', options: ['Eagles', 'Panthers'] },
  { id: 2, week: 1, teamA: 'Lions', teamB: 'Tigers', options: ['Lions', 'Tigers'] },
  { id: 3, week: 1, teamA: 'Bears', teamB: 'Sharks', options: ['Bears', 'Sharks'] },
  // Add more games as needed
];

export default function PickEmPage() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [picks, setPicks] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handlePickChange = (gameId: number, pickedTeam: string) => {
    setPicks(prevPicks => ({
      ...prevPicks,
      [gameId]: pickedTeam,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Basic validation
    if (!userName || !userEmail || Object.keys(picks).length !== weeklyGames.length) {
      alert('Please fill in your name, email, and make a pick for every game.');
      return;
    }
    // In a real app, you would submit this data to a backend
    console.log('Picks Submitted:', { userName, userEmail, picks });
    setSubmitted(true);
    alert('Your picks have been submitted! Good luck!');
  };

  if (submitted) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-oswald">Picks Submitted!</h1>
          <p className="text-lg font-open-sans mb-4">Thank you, {userName}, for submitting your picks for this week.</p>
          <p className="text-lg font-open-sans">We\'ve sent a confirmation to {userEmail}.</p>
          <p className="text-lg font-open-sans mt-6">Check back later for results and leaderboards (feature coming soon!).</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-6 md:p-12 lg:p-24 bg-gray-100 text-black">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 font-oswald text-center">Weekly Pick\'em Challenge</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700 font-open-sans">Your Name:</label>
            <input 
              type="text" 
              id="userName" 
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 font-open-sans">Your Email:</label>
            <input 
              type="email" 
              id="userEmail" 
              name="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>

          <fieldset className="space-y-4">
            <legend className="text-xl font-semibold mb-4 font-oswald">This Week\'s Games:</legend>
            {weeklyGames.map((game) => (
              <div key={game.id} className="p-4 border border-gray-200 rounded-md">
                <p className="text-lg font-semibold font-montserrat mb-2">{game.teamA} vs {game.teamB}</p>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  {game.options.map(option => (
                    <label key={option} className="inline-flex items-center mb-2 sm:mb-0">
                      <input 
                        type="radio" 
                        name={`game-${game.id}`}
                        value={option}
                        checked={picks[game.id] === option}
                        onChange={() => handlePickChange(game.id, option)}
                        required
                        className="form-radio h-5 w-5 text-red-600"
                      />
                      <span className="ml-2 font-open-sans">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </fieldset>

          <div className="text-center">
            <button 
              type="submit" 
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 font-bebas-neue transition-colors"
            >
              Submit Your Picks
            </button>
          </div>
        </form>
        <p className="text-xs text-gray-500 mt-6 text-center font-open-sans">Optional login or leaderboard system will be considered for future enhancement.</p>
      </div>
    </main>
  );
}
