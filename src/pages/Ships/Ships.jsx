import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Image from '../../assets/landing1.jpg';
import useInfiniteScroll from '../../customHooks/useInfiniteScroll';
import SkeletonLoader from '../../components/SkeletonLoader';
import { GET_SHIPS } from '../../graphql/query/getQuery';

const Ships = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_SHIPS, {
        variables: { limit: 12, offset: 0 },
    });

    const fetchMoreData = async () => {
        if (data) {
            await fetchMore({
                variables: {
                    offset: data.ships.length,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult || fetchMoreResult.ships.length === 0) {
                        setHasMore(false);
                        return prev;
                    }
                    return {
                        ...prev,
                        ships: [...prev.ships, ...fetchMoreResult.ships],
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
        return <div className='pt-16 px-6'><SkeletonLoader /></div>
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div className="bg-black min-h-screen text-white pt-16">
            <div className="mx-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8 py-8">Ships</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.ships.map((ship, index) => (
                        <div key={ship.id} className="flex flex-col">
                            <div className="bg-white text-black rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                                <img src={ship.image} loading='lazy' alt={ship.name} className="w-full h-56 object-cover bg-gray-500" />
                                <div className="p-4 flex-grow">
                                    <h2 className="text-xl font-bold mb-2">{ship.name}</h2>
                                    <p className="text-gray-800">Home Port: {ship.home_port}</p>
                                    <p className="text-gray-800">Year Built: {ship.year_built}</p>
                                </div>
                            </div>
                            {data.ships.length === index + 1 && hasMore && (
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
                        <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center">
                            <p>No more ships to display.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Ships;