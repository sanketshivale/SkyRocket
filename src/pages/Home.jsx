import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Image from '../assets/landing1.jpg';
import { GET_LAUNCHES } from '../graphql/query/getQuery';
import SkeletonLoader from '../components/SkeletonLoader';
import useInfiniteScroll from '../customHooks/useInfiniteScroll';

const Home = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_LAUNCHES, {
        variables: { limit: 12, offset: 0 },
    });

    const fetchMoreData = async () => {
        if (data) {
            await fetchMore({
                variables: {
                    offset: data.launches.length,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult || fetchMoreResult.launches.length === 0) {
                        setHasMore(false);
                        return prev;
                    }
                    return {
                        ...prev,
                        launches: [...prev.launches, ...fetchMoreResult.launches],
                    };
                },
            });
        }
    };

    const [hasMore, setHasMore] = useState(true);

    const { lastElementRef, isFetchingMore } = useInfiniteScroll({
        fetchMore: fetchMoreData,
        loading,
        data,
        hasMore,
    });

    if (loading && !data && !isFetchingMore) {
        return <SkeletonLoader />
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div className="bg-black min-h-screen text-white">
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
                            {data.launches.length === index + 1 && hasMore && (
                                <div ref={lastElementRef}></div>
                            )}
                        </div>
                    ))}
                    {isFetchingMore && hasMore && (
                        <div className="col-span-1 md:col-span-2 lg:col-span-4">
                            <SkeletonLoader />
                        </div>
                    )}
                    {!hasMore && (
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center">
                            <p>No more launches to display.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;