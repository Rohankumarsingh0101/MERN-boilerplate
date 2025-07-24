import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalProjects: 12,
    completedTasks: 48,
    pendingTasks: 7,
    teamMembers: 5,
  });

  const [recentActivity] = useState([
    {
      id: 1,
      action: 'Created new project',
      time: '2 hours ago',
      type: 'success',
    },
    {
      id: 2,
      action: 'Completed task "Update API"',
      time: '4 hours ago',
      type: 'info',
    },
    {
      id: 3,
      action: 'Team meeting scheduled',
      time: '1 day ago',
      type: 'warning',
    },
    { id: 4, action: 'Profile updated', time: '2 days ago', type: 'info' },
  ]);

  useEffect(() => {
    // Simulate API call to fetch dashboard data
    const fetchDashboardData = async () => {
      // This would normally be an API call
      // const response = await api.get('/dashboard/stats');
      // setStats(response.data);
    };

    fetchDashboardData();
  }, []);

  const formatDate = date => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="text-gray-300 font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="mt-2 text-gray-400">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
            <div className="text-4xl font-bold text-indigo-400">
              {stats.totalProjects}
            </div>
            <div className="text-sm text-gray-400 mt-2">Total Projects</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-400">
              {stats.completedTasks}
            </div>
            <div className="text-sm text-gray-400 mt-2">Completed Tasks</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-400">
              {stats.pendingTasks}
            </div>
            <div className="text-sm text-gray-400 mt-2">Pending Tasks</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400">
              {stats.teamMembers}
            </div>
            <div className="text-sm text-gray-400 mt-2">Team Members</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Info Card */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Account Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Name
                </label>
                <p className="mt-1 text-lg text-white">{user?.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <p className="mt-1 text-lg text-white">{user?.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Role
                </label>
                <p className="mt-1 text-lg text-white capitalize">
                  {user?.role}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Member Since
                </label>
                <p className="mt-1 text-lg text-white">
                  {user?.createdAt ? formatDate(user.createdAt) : 'N/A'}
                </p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div key={activity.id} className="flex items-center space-x-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      activity.type === 'success'
                        ? 'bg-green-500'
                        : activity.type === 'warning'
                          ? 'bg-yellow-500'
                          : 'bg-blue-500'
                    }`}
                  ></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-transform">
                Create Project
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-black/30 hover:bg-black/40 transition-colors">
                Add Task
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-black/30 hover:bg-black/40 transition-colors">
                Invite Team Member
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-black/30 hover:bg-black/40 transition-colors">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
