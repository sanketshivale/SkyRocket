import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import useInfiniteScroll from '../../customHooks/useInfiniteScroll';
import SkeletonLoader from '../../components/SkeletonLoader';
import { GET_LAUNCHES } from '../../graphql/query/getQuery';

const Launches = () => {
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
        return <div className='pt-16 mx-4'><SkeletonLoader /></div>
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div className="bg-black min-h-screen text-white pt-16">
            <div className="mx-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8 py-8">Launches</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.launches.map((launch, index) => (
                        <div key={launch.id} className="flex flex-col">
                            <div className="bg-white text-black rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                                <h1 className="text-xl font-bold mb-2 p-4">Launch {index + 1} </h1>
                                <div className="p-4 flex-grow">
                                    <p className="text-gray-800">Mission Name: {launch.mission_name}</p>
                                    <p className="text-gray-800">Lauch Date (local): {launch.launch_date_local}</p>
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
                        <div className="col-span-1 md:col-span-2 lg:col-span-4 text-center">
                            <p>No more launches to display.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Launches;
