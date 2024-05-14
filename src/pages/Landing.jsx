import React from 'react';
import Image from '../assets/landing1.jpg';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/home');
  };

  return (
    <>
      <div
        className="bg-black flex flex-wrap text-white items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="w-full h-full flex">
          <div className="absolute top-16 lg:top-36 left-0 right-0 flex flex-col items-center text-center p-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to SpaceX GraphQL Assignment
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl">
              Explore the SpaceX data through my GraphQL implementation.
            </p>
            <Button data={"Get Started"} onClick={onClick} />
          </div>
        </div>
      </div>
      <div className=" py-8 text-black bg-white">

        <div className="px-4">
          <h2 className="text-3xl font-bold mb-4">My Contribution to Vesatogo Innovations</h2>
          <p className="mb-4">
            I completed a React.js application using the SpaceX GraphQL API to display and query SpaceX data. Key features include infinite scrolling, detailed item views, sorting, and filtering.
          </p>
          <h3 className="text-2xl font-bold mb-2">Key Contributions</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Frontend Development</strong>: Built a dynamic and responsive UI using ReactJS. Styled with TailwindCSS for a modern look.</li>
            <li><strong>GraphQL Integration</strong>: Used Apollo Client for efficient data fetching from the SpaceX GraphQL API.</li>
            <li><strong>Features</strong>: Implemented infinite scrolling, routing for detailed views, and sorting/filtering options.</li>
            <li><strong>Deployment</strong>: Hosted the application on a <a target='blank' href='https://vercel.com' className='text-blue-800'>vercel.com</a> ensuring easy access, continue integration and continue deployment for your ease of evalution.</li>
          </ul>
          <h3 className="text-2xl font-bold mb-2">Technical Stack</h3>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Frontend</strong>: ReactJS</li>
            <li><strong>Styling</strong>: TailwindCSS</li>
            <li><strong>Data</strong>: Apollo Client, GraphQL</li>
            <li><strong>Routing</strong>: react-router-dom</li>
            <li><strong>Infinite Scrolling</strong>: IntersectionObserver  API (Default HTML)</li>
            <li><strong>Hosting</strong>: Vercel</li>
            <li><strong>Version Control</strong>: Git, GitHub: <a target='blank' className='text-blue-800' href='https://github.com/sanketshivale/SkyRocket'>https://github.com/sanketshivale/SkyRocket</a></li>
            <li><strong>Extras</strong>: react-icons, react-loading-skeleton, react-spinners</li>

          </ul>
          <h3 className="text-2xl font-bold mb-2">Impact</h3>
          <p>
            My work demonstrates the ability to deliver robust, user-friendly applications using modern web technologies, contributing to Vesatogo Innovations by enhancing frontend capabilities and ensuring scalable, maintainable code.
          </p>
          <h3 className="text-2xl font-bold mt-4 mb-2">Learning</h3>
          <p className='mb-4'>
            This project provided me with valuable experience in working with GraphQL, Apollo Client, and ReactJS. I gained insights into building dynamic, responsive UIs and learned how to integrate third-party APIs effectively. I also improved my skills in state management, routing, and data fetching, which will be beneficial for future projects. I look forward to applying my knowledge and skills to future projects and contributing to Vesatogo Innovations' success.
          </p>
          <h3 className="text-2xl font-bold mb-2">Fall Backs</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Mutation Query are not working so enable to implement.</li>
            <li>Same case with Subscription for realtime.</li>
            <li>Some Query Api are not working or provide empty or null values.</li>
            <li>I have not implemented the testing for the application.</li>
          </ul>
          <h3 className="text-2xl font-bold mb-2">Optimization</h3>
          <p className='mb-4'>More components can be created to make the code more modular and reusable <strong> one such example is every list view has same functionality of view this can be modularize</strong>. The application can be optimized further by implementing code splitting, and server-side rendering. Additionally, performance can be improved by optimizing queries, caching data, and reducing the number of network requests. I would be happy to discuss these optimizations further and implement them as needed.</p>
          <h3 className="text-2xl font-bold mb-2">Thank you for the opportunity to contribute to Vesatogo Innovations!</h3>
        </div>
      </div>
    </>
  );
};

export default Landing;
