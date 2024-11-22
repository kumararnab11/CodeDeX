import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPlatformData } from './redux/platformSlice';

function Platforms() {
  const platformData = useSelector((state) => state.platform);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Current platform data:', platformData);
  }, [platformData]);

  const handleRefresh = () => {
    console.log('Dispatching fetchPlatformData...');
    dispatch(fetchPlatformData()).then((action) => {
      console.log('Fetched platform data:', action);
    }).catch((err) => {
      console.error('Error fetching platform data:', err);
    });
  };

  return (
    <div className="w-[55%] mx-auto p-4">
      <h2 className="text-center text-2xl font-serif font-bold mb-6 text-gray-500" style={{ textShadow: '2px 2px 4px rgba(30, 30, 30, 0.3)' }}>Platforms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Leetcode */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">{platformData.leetcode.name}</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Questions Solved:</span>
              <span className="font-semibold">{platformData.leetcode.questions}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Points:</span>
              <span className="font-semibold">{platformData.leetcode.points}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Rating:</span>
              <span className="font-semibold">{platformData.leetcode.rating}</span>
            </div>
          </div>
        </div>

        {/* Gfg */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">{platformData.gfg.name}</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Questions Solved:</span>
              <span className="font-semibold">{platformData.gfg.questions}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Score:</span>
              <span className="font-semibold">{platformData.gfg.score}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Institute Rank:</span>
              <span className="font-semibold">{platformData.gfg.instituterank}</span>
            </div>
          </div>
        </div>

        {/* Codeforces */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">{platformData.codeforces.name}</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Rating:</span>
              <span className="font-semibold">{platformData.codeforces.rating}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Max Rating:</span>
              <span className="font-semibold">{platformData.codeforces.maxrating}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Rank:</span>
              <span className="font-semibold">{platformData.codeforces.badge}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Best Rank:</span>
              <span className="font-semibold">{platformData.codeforces.maxBadge}</span>
            </div>
          </div>
        </div>

        {/* Codechef */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">{platformData.codechef.name}</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Rating:</span>
              <span className="font-semibold">{platformData.codechef.rating}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Max Rating:</span>
              <span className="font-semibold">{platformData.codechef.maxrating}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Stars:</span>
              <span className="font-semibold">{platformData.codechef.badge}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200">Country Rank:</span>
              <span className="font-semibold">{platformData.codechef.countryRank}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <button
          className="mt-4 mr-4 w-full bg-green-100 text-green-600 border hover:border-green-700 font-semibold py-2 rounded"
          onClick={() => navigate('/updateusernames')}
        >
          Update Usernames
        </button>
        <button
          className="mt-4 ml-4 w-full bg-green-100 text-green-600 border hover:border-green-700 font-semibold py-2 rounded"
          onClick={handleRefresh}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default Platforms;
