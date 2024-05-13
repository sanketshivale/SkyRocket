import React, { useState, useRef, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import Image from '../assets/landing1.jpg';
import { GET_LAUNCHES } from '../graphql/query/getQuery';


const Home = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_LAUNCHES, {
        variables: {
            limit: 12,
            offset: 0,
        },
    });
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const observer = useRef();

    const lastLaunchRef = useCallback((node) => {
        if (loading || error || !data) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isFetchingMore) {
                setIsFetchingMore(true);
                fetchMore({
                    variables: {
                        offset: data.launches.length,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                        setIsFetchingMore(false);
                        if (!fetchMoreResult) return prev;
                        return {
                            ...prev,
                            launches: [...prev.launches, ...fetchMoreResult.launches],
                        };
                    },
                });
            }
        });

        if (node) observer.current.observe(node);
    }, [loading, error, data, isFetchingMore, fetchMore]);

    if (loading && !data && !isFetchingMore) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div className="bg-black min-h-screen text-white">
            
            {/* Main Content */}
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Welcome to the SpaceX Data API Home Page</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.launches.map((launch, index) => (
                        <div key={launch.id} className="flex flex-col">
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                                <img src={Image} alt="SpaceX" className="w-full h-56 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">{launch.launch_date_local}</h2>
                                    <p className="text-gray-300">{launch.details}</p>
                                </div>
                            </div>
                            {/* Conditionally render observer for last launch */}
                            {data.launches.length === index + 1 && (
                                <div ref={lastLaunchRef}></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            
        </div>
    );
};

export default Home;