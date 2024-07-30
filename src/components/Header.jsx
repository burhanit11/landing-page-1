import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full">
    <div className="container mx-auto p-4 flex justify-between items-center ">
      <div className= "flex items-center space-x-4">
        <img src="/Vector.png" alt="ASL" className="h-8" />
        <span className="text-lg font-bold">
         FitFuel
        </span>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="text-textColor hover:text-gray-800">About Us</Link>
        <Link to="/" className="text-textColor hover:text-gray-800">Feature</Link>
        <Link to="/" className="text-textColor hover:text-gray-800">Pricing</Link>
        <Link to="/" className="text-textColor hover:text-gray-800">FAQ</Link>
      </nav>
      <div className="hidden md:block">
        <button className="bg-buttonColor text-white px-4 py-2 rounded-lg">Get the App</button>
      </div>
      <div>
        <button>button</button>
      </div>
    </div>

     </header>
  )
}

export default Header
