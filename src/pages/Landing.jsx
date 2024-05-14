import React from 'react';
import Image from '../assets/landing1.jpg';
import Button from '../components/Button';

const Landing = () => {
  return (
    
    <div className="bg-black text-white items-center justify-center min-h-screen">
      <div className=" w-full h-full">
        <img src={Image} alt="Landing" className="w-full h-full object-cover opacity-50" />
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
  );
};

export default Landing;