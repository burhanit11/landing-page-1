import React from "react";

function Home() {
  return (
    <section className="bg-white py-32">
      <div className="container mx-auto flex  flex-col  sm:flex-row  items-center me-40 ">
        <div className="flex-1 md:w-1/2 p-1 me-32 md:mx-20 lg:p">
          <h3 className="text-5xl sm:text-sm  font-bold text-orange-500 mb-4 leading-2">
            Discover Sign Language
          </h3>
          <h6 className="text-5xl font-bold  text-orange-500  ">
            {" "}
            Fun, Fast, and Easy Learning
          </h6>
          <p className="text-gray-600 md:text-orange-800 lg:pt-40 lg:border-2 border-black sm:pt-0 text-xl sm:text-3xl mb-6">
            Immersive Learning Experience Dive into real-life conversations,
            personalised learning paths, and engaging flashcards.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md"
            >
              <img
                src="/Apple.jfif"
                alt="Apple"
                className="h-6 md:h-20 md:w-40 mr-4"
              />
              <div>
                <p className="text-xs text-gray-500">Download on the</p>
                <p className="text-sm font-semibold text-gray-800">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center border border-gray-300 rounded-lg p-2 shadow-md"
            >
              <img src="/google.png" alt="Google Play" className="h-6 mr-2" />
              <div>
                <p className="text-xs text-gray-500">Download on the</p>
                <p className="text-sm font-semibold text-gray-800">
                  Google Play
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="flex-1 md:w-1/2 p-4 flex justify-center relative">
          <img
            src="Vector.png"
            alt="Vector"
            className="absolute top-64 left-0 transform scale-75 -translate-x-10 z-0"
          />
          <img
            src="main screen.png"
            alt="Main"
            className="relative z-10 transform scale-90"
          />
          <img
            src="home screen.png"
            alt="Home"
            className="absolute top-0 right-0 transform scale-100 translate-x-10 z-20"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
