import React from 'react';

function PlatformCard({ platformName, questionsSolved, contestsGiven, rating }) {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">{platformName}</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-200">Questions Solved:</span>
          <span className="font-semibold">{questionsSolved}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-200">Contests Given:</span>
          <span className="font-semibold">{contestsGiven}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-200">Rating:</span>
          <span className="font-semibold">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default PlatformCard;
