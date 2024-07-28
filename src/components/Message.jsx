import React from 'react'

function Message() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">I'm Sorry</h2>
        <p className="text-black-600 text-lg mb-6">
        I think my words hurt you. Please forgive me if I upset you. 
        I was just kidding.
        </p>
        <button
          onClick={() => alert('Message acknowledged!')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Acknowledge
        </button>
      </div>
    </div>
  )
}

export default Message
