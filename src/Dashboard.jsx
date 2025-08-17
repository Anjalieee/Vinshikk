// Dashboard.jsx
import React from 'react';
import './App.css'

function Dashboard  ()  {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="flex">

                {/* Left Sidebar */}
                <div className="w-60 bg-gray-900 min-h-screen border-r border-gray-700">

                    {/* Logo area */}
                    <div className="p-6 border-b border-gray-700">
                        <h2 className="text-2xl font-bold">
                            Vin<span className="text-red-500 font-bold">Shik</span>
                        </h2>
                    </div>

                    {/* Menu items */}
                    <div className="p-4">
                        <a href="#" className="flex items-center px-4 py-3 mb-2 bg-red-500 text-white rounded-lg">
                            <span className="mr-3">🏠</span>
                            Home
                        </a>

                        <a href="#" className="flex items-center px-4 py-3 mb-2 text-gray-300 hover:bg-gray-800 rounded-lg">
                            <span className="mr-3">📅</span>
                            Calendar
                        </a>

                        <a href="#" className="flex items-center px-4 py-3 mb-2 text-gray-300 hover:bg-gray-800 rounded-lg">
                            <span className="mr-3">🗺</span>
                            Map
                        </a>

                        <a href="#" className="flex items-center px-4 py-3 mb-2 text-gray-300 hover:bg-gray-800 rounded-lg">
                            <span className="mr-3">👥</span>
                            Clients
                        </a>

                        <a href="#" className="flex items-center px-4 py-3 mb-2 text-gray-300 hover:bg-gray-800 rounded-lg">
                            <span className="mr-3">💼</span>
                            Jobs
                        </a>

                        <a href="#" className="flex items-center px-4 py-3 mb-2 text-gray-300 hover:bg-gray-800 rounded-lg">
                            <span className="mr-3">📄</span>
                            Quotes
                        </a>

                        <a href="#" className="flex items-center px-4 py-3 mb-2 text-gray-300 hover:bg-gray-800 rounded-lg">
                            <span className="mr-3">⚙</span>
                            My Services
                        </a>
                    </div>
                </div>

                {/* Main content area */}
                <div className="flex-1 bg-gray-900">

                    {/* Top header */}
                    <div className="bg-black p-6 border-b border-gray-700">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">
                                    Welcome back, <span className="text-red-500">Julie</span> 👋
                                </h1>
                                <p className="text-gray-400">Here's what you need to focus on today</p>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button className="text-gray-400 hover:text-white">📧</button>
                                <button className="text-gray-400 hover:text-white">⚙</button>
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                                    J
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards section */}
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {/* Card 1 - Active Jobs */}
                            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-gray-400 text-sm">Active Jobs</p>
                                    <span className="text-green-400 text-sm">+12.2%</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">43.7k</h3>
                                <div className="flex space-x-1">
                                    <div className="w-3 h-8 bg-blue-500 rounded"></div>
                                    <div className="w-3 h-4 bg-blue-500 rounded"></div>
                                    <div className="w-3 h-10 bg-blue-500 rounded"></div>
                                    <div className="w-3 h-6 bg-blue-500 rounded"></div>
                                    <div className="w-3 h-12 bg-blue-500 rounded"></div>
                                    <div className="w-3 h-5 bg-blue-500 rounded"></div>
                                </div>
                            </div>

                            {/* Card 2 - Jobs in Progress */}
                            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-gray-400 text-sm">Jobs in Progress</p>
                                    <span className="text-red-400 text-sm">-31%</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">92.3k</h3>
                                <div className="flex space-x-1">
                                    <div className="w-3 h-6 bg-orange-500 rounded"></div>
                                    <div className="w-3 h-10 bg-orange-500 rounded"></div>
                                    <div className="w-3 h-4 bg-orange-500 rounded"></div>
                                    <div className="w-3 h-8 bg-orange-500 rounded"></div>
                                    <div className="w-3 h-3 bg-orange-500 rounded"></div>
                                    <div className="w-3 h-7 bg-orange-500 rounded"></div>
                                </div>
                            </div>

                            {/* Card 3 - Finished Jobs */}
                            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-gray-400 text-sm">Finished Jobs</p>
                                    <span className="text-green-400 text-sm">+3.3%</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">66.3k</h3>
                                <div className="flex space-x-1">
                                    <div className="w-3 h-7 bg-green-500 rounded"></div>
                                    <div className="w-3 h-12 bg-green-500 rounded"></div>
                                    <div className="w-3 h-9 bg-green-500 rounded"></div>
                                    <div className="w-3 h-14 bg-green-500 rounded"></div>
                                    <div className="w-3 h-10 bg-green-500 rounded"></div>
                                    <div className="w-3 h-16 bg-green-500 rounded"></div>
                                </div>
                            </div>

                            {/* Card 4 - New Leads */}
                            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-red-500">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-gray-400 text-sm">New Leads</p>
                                    <span className="text-green-400 text-sm">+31%</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">92.3k</h3>
                                <div className="flex space-x-1">
                                    <div className="w-3 h-9 bg-purple-500 rounded"></div>
                                    <div className="w-3 h-6 bg-purple-500 rounded"></div>
                                    <div className="w-3 h-11 bg-purple-500 rounded"></div>
                                    <div className="w-3 h-8 bg-purple-500 rounded"></div>
                                    <div className="w-3 h-13 bg-purple-500 rounded"></div>
                                    <div className="w-3 h-10 bg-purple-500 rounded"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;