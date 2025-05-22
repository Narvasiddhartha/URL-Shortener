import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import LoginForm from './components/LoginForm'
import AuthPage from './pages/AuthPage'
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/NavBar'

const RootLayout = () => {
  const [showContact, setShowContact] = useState(false);

  // Handler to open Contact Us page
  const handleContactClick = () => setShowContact(true);

  // Handler to close Contact Us page when navigating
  const handleNav = (navFn) => {
    if (showContact) setShowContact(false);
    navFn();
  };

  return (
    <>
      <Navbar
        onContactClick={handleContactClick}
        onNav={handleNav}
      />
      {showContact ? (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white relative transition-all duration-500 overflow-hidden">
          {/* No animated background, just white */}
          <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md flex flex-col items-center animate-fade-in-up relative mt-24 mb-24 z-10">
            <h3 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Contact Us</h3>
            <div className="space-y-6 text-center w-full flex flex-col items-center">
              <div className="text-lg font-semibold text-gray-800">Developed by: Narva Siddhartha</div>
              <div className="flex justify-center space-x-8 mt-4">
                <a href="mailto:narvasiddhartha@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition" aria-label="Email">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/narva-siddhartha-4b04bb211/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <style>{`
            .animate-fade-in-up { animation: fadeInUp 0.4s; }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          `}</style>
        </div>
      ) : (
        <Outlet />
      )}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-3 shadow z-40">
        <span className="font-semibold">Developed by Narva Siddhartha</span> &nbsp;|&nbsp;
        <a href="mailto:narvasiddhartha@gmail.com" className="underline hover:text-blue-200">narvasiddhartha@gmail.com</a> &nbsp;|&nbsp;
        <a href="https://www.linkedin.com/in/narva-siddhartha-4b04bb211/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-200">LinkedIn</a>
      </footer>
    </>
  )
}

export default RootLayout