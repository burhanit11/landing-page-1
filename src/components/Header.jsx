import React from 'react'

function Header() {
  return (
    <div>
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
           <div className="flex iems-center">
            <img src="/logo.png" alt="ASLingo Logo" className='h-10 mr-2'/>
            <span className="text-2xl font-bold text-orange-500">
                ALSingo
            </span>
           </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="text-gray-600 hover:text-orange-500 ">Home</a></li>
                    <li><a href="#features" className="text-gray-600 hover:text-orange-500 ">Features</a></li>
                    <li><a href="#testimonials" className="text-gray-600 hover:text-orange-500 ">Testimonials</a></li>
                    <li><a href="#contact" className="text-gray-600 hover:text-orange-500 ">Stay in Touch</a></li>
                </ul>
            </nav>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Get the App</button>
        </div>
      </header>
    </div>
  )
}

export default Header
