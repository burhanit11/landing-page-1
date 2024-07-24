import React from 'react'

function Home() {
  return (
    <section className="bg-gray-50 py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="flex-1 md:w-1/2 p-1">
                <h1 className="text-5xl font-bold text-orange-500 mb-4">Discover Sign Language</h1>
                <h2 className="text-5xl font-bold  text-orange-500 mb-4"> Fun, Fast, and Easy Learning</h2>
                <p className="text-gray-600 mb-6">Immersive Learning Experience Dive into real-life conversations, personalised learning paths, and engaging flashcards.
                </p>
                <div className="flex space-x-4">
            <a href="#" className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md">
              <img src="/Apple.jfif" alt="Apple" className="h-6 mr-4" />
              <div>
                <p className="text-xs text-gray-500">Download on the</p>
                <p className="text-sm font-semibold text-gray-800">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md">
              <img src="/google.png" alt="Google Play" className="h-6 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Download on the</p>
                <p className="text-sm font-semibold text-gray-800">Google Play</p>
              </div>
            </a>
          </div>
            </div>
            <div className="flex-1 md:w-1/2 p-4">
                <img/>
            </div>
            <div>
              
            </div>
        </div>
    </section>
  )
}

export default Home
