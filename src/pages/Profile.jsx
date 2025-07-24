import React from 'react';

const Profile = () => {
  return (
    <div className="text-gray-300 font-sans p-4 sm:p-6 md:p-8">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Update Profile Card */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-white">
                Update Profile
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    defaultValue="rs"
                    className="mt-1 block w-full px-4 py-3 bg-black/20 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="rohankumarsingh2209@gmail.com"
                    className="mt-1 block w-full px-4 py-3 bg-black/20 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-transform"
                >
                  Update Profile
                </button>
              </form>
            </div>

            {/* Change Password Card */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-center text-white">
                Change Password
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-4 py-3 bg-black/20 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-4 py-3 bg-black/20 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full px-4 py-3 bg-black/20 border border-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:scale-105 transition-transform"
                >
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
