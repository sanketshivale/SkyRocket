import React from 'react';
import Button from '../components/Button';
import { useQuery } from '@apollo/client';
import { GET_COMPANY } from '../graphql/query/getQuery';

const Home = () => {
  const { loading, error, data } = useQuery(GET_COMPANY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const {
    ceo,
    coo,
    cto,
    cto_propulsion,
    employees,
    founded,
    founder,
    launch_sites,
    name,
    summary,
    test_sites,
    valuation,
    vehicles,
    headquarters: { address, city, state },
    links: { elon_twitter, flickr, twitter, website }
  } = data.company;

  return (
    <div className="bg-gray-100 pt-16 min-h-screen">
      <div className="text-black py-12">
        <div className="mx-4 p-6 bg-white rounded-lg">

          <h1 className="text-5xl font-bold mb-4">{name}</h1>
          <p className="text-xl mb-4">{summary}</p>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <button className='bg-black hover:bg-slate-50 text-white hover:text-black font-bold py-2 px-4 sm:py-3 sm:px-6 rounded'>Visit Website</button>
          </a>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Company Details</h2>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Founder:</strong> {founder}</li>
                <li><strong>CEO:</strong> {ceo}</li>
                <li><strong>COO:</strong> {coo}</li>
                <li><strong>CTO:</strong> {cto}</li>
                <li><strong>CTO of Propulsion:</strong> {cto_propulsion}</li>
                <li><strong>Founded:</strong> {founded}</li>
                <li><strong>Employees:</strong> {employees}</li>
                <li><strong>Launch Sites:</strong> {launch_sites}</li>
                <li><strong>Test Sites:</strong> {test_sites}</li>
                <li><strong>Vehicles:</strong> {vehicles}</li>
                <li><strong>Valuation:</strong> ${valuation.toLocaleString()}</li>
                <li><strong>Headquarters:</strong> {address}, {city}, {state}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">Connect with Us</h2>
              <ul className="space-y-2 text-blue-500">
                <li>
                  <a href={elon_twitter} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">Elon Musk Twitter</a>
                </li>
                <li>
                  <a href={twitter} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">SpaceX Twitter</a>
                </li>
                <li>
                  <a href={flickr} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">SpaceX Flickr</a>
                </li>
                <li>
                  <a href={website} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">Official Website</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
