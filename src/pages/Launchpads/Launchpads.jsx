import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import useInfiniteScroll from '../../customHooks/useInfiniteScroll';
import SkeletonLoader from '../../components/SkeletonLoader';
import { GET_LAUNCHPADS } from '../../graphql/query/getQuery';

const Launchpads = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_LAUNCHPADS, {
        variables: { limit: 12, offset: 0 },
    });

    const fetchMoreData = async () => {
        if (data) {
            await fetchMore({
                variables: {
                    offset: data.launchpads.length,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult || fetchMoreResult.launchpads.length === 0) {
                        setHasMore(false);
                        return prev;
                    }
                    return {
                        ...prev,
                        launchpads: [...prev.launchpads, ...fetchMoreResult.launchpads],
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
                <h1 className="text-4xl font-bold text-center mb-8 py-8">Launchpads</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.launchpads.map((launchpad, index) => (
                        <div key={launchpad.id} className="flex flex-col">
                            <div className="bg-white text-black rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                                <h1 className="text-xl font-bold mb-2 p-4">{launchpad.name} </h1>
                                <div className="p-4 flex-grow">
                                    <p className="text-gray-800">Status: {launchpad.status}</p>
                                    <p className="text-gray-800">WIKI: <a  className='text-blue-800'   target='_blank' rel='noopener noreferrer' href={launchpad.wikipedia}>{launchpad.wikipedia}</a></p>
                                </div>
                            </div>
                            {data.launchpads.length === index + 1 && hasMore && (
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
                            <p>No more launchpads to display.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Launchpads;
