import React from 'react';
import Image from '../assets/landing1.jpg';
import Button from '../components/Button';

const Landing = () => {
  return (
    <>
    <div
      className="bg-black flex flex-wrap text-white items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="w-full h-full flex">
        <div className="absolute top-16 lg:top-36 left-0 right-0 flex flex-col items-center text-center p-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome to SpaceX GraphQL
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl">
            Discover the power of SpaceX data through our GraphQL API.
          </p>
          <Button data={"Get Started"} />
        </div>
      </div>
    </div>
    <div className="mx-auto py-8 text-black bg-white">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to the SpaceX Data API Home Page</h1>
      <p className="text-lg text-center">
        The SpaceX Data API is a RESTful API that provides data about SpaceX launches, rockets, capsules, and more. The API is free to use and requires no authentication.
      </p>
    </div>
    
    </>
  );
};

export default Landing;