import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative transition-all duration-500 overflow-hidden">
      {/* No animated background, just white */}
      {/* Hero Section: Two separate boxes, left and right, flush to edges */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-8 px-0 md:px-8 mt-12 mb-16 mx-auto relative z-10">
        {/* Left: Welcome and SaaS-style Description in its own box */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col justify-center items-start min-w-0 max-w-xl border border-gray-100">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-2 leading-tight">
            <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-blue-400 bg-clip-text text-transparent">Supercharge Your Links</span>
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Your Modern URL Shortener</h2>
          <p className="text-lg text-blue-700 font-semibold mb-4">
            Effortlessly manage, share, and track your links with our powerful SaaS platform.
          </p>
          <p className="text-base text-gray-600 mb-4">
            Instantly transform long, unwieldy links into short, memorable URLs. Monitor real-time analytics, boost your click-through rates, and manage all your links in one secure, user-friendly dashboard.
          </p>
          <ul className="list-disc pl-6 mb-4 text-base text-gray-700 space-y-2">
            <li><span className="font-semibold text-blue-700">One-Click Shortening:</span> Paste your link and get a short URL instantly.</li>
            <li><span className="font-semibold text-blue-700">Custom Slugs:</span> Personalize your short links for branding or easy recall (login required).</li>
            <li><span className="font-semibold text-blue-700">Analytics Dashboard:</span> Track clicks and performance in real time.</li>
            <li><span className="font-semibold text-blue-700">No Sign-Up Needed:</span> Start shortening links right away—advanced features available after login.</li>
            <li><span className="font-semibold text-blue-700">Secure & Reliable:</span> Your data and links are always protected.</li>
            <li><span className="font-semibold text-blue-700">Mobile Friendly:</span> Manage and share links from any device, anywhere.</li>
          </ul>
          <p className="text-base text-gray-600">
            <span className="font-semibold">Get started now and experience the next generation of link management!</span>
          </p>
        </div>
        {/* Right: URL Shortener Card in its own box */}
        <div className="flex-1 flex justify-end items-center min-w-0 max-w-md">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 w-full flex flex-col items-center border border-gray-100 animate-fade-in relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-gray-300"></div>
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8 tracking-tight">URL Shortener</h2>
            <p className="text-base text-gray-600 mb-4 text-center">Transform your long URLs into short, shareable links in seconds.</p>
            <UrlForm/>
          </div>
        </div>
      </div>

      {/* Additional Details Above URL Shortener */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
            <p className="text-gray-600">Our platform is designed for speed and simplicity, making link management a breeze.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-gray-600">Gain insights into your link performance with detailed analytics and reporting.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Paste Your URL</h3>
            <p className="text-gray-600">Simply paste your long URL into the input field.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Get Your Short Link</h3>
            <p className="text-gray-600">Our system instantly generates a short, memorable link for you.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Share & Track</h3>
            <p className="text-gray-600">Share your link and monitor its performance in real-time.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
            <p className="text-gray-600">Track clicks, geographic data, and more with our comprehensive analytics dashboard.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Custom Branding</h3>
            <p className="text-gray-600">Personalize your short links with custom slugs and branded domains.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Your data and links are always protected with our secure infrastructure.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
            <p className="text-gray-600">Manage and share links from any device, anywhere.</p>
          </div>
        </div>
      </div>

      <style>{`
        .animate-fade-in { animation: fadeIn 0.4s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  )
}

export default HomePage