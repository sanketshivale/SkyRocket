import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import useInfiniteScroll from '../../customHooks/useInfiniteScroll';
import SkeletonLoader from '../../components/SkeletonLoader';
import { GET_LANDPADS } from '../../graphql/query/getQuery';

const Landpads = () => {
    const { loading, error, data, fetchMore } = useQuery(GET_LANDPADS, {
        variables: { limit: 12, offset: 0 },
    });

    const fetchMoreData = async () => {
        if (data) {
            await fetchMore({
                variables: {
                    offset: data.landpads.length,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult || fetchMoreResult.landpads.length === 0) {
                        setHasMore(false);
                        return prev;
                    }
                    return {
                        ...prev,
                        landpads: [...prev.landpads, ...fetchMoreResult.landpads],
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
                <h1 className="text-4xl font-bold text-center mb-8 py-8">Landpads</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.landpads.map((landpad, index) => (
                        <div key={landpad.id} className="flex flex-col">
                            <div className="bg-white text-black rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                                <h1 className="text-xl font-bold mb-2 p-4">{landpad.full_name} </h1>
                                <div className="p-4 flex-grow">
                                    <p className="text-gray-800">Status: {landpad.status}</p>
                                    <p className="text-gray-800">WIKI: <a className='text-blue-800' target='_blank' rel='noopener noreferrer' href={landpad.wikipedia}>{landpad.wikipedia}</a></p>
                                </div>
                            </div>
                            {data.landpads.length === index + 1 && hasMore && (
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
                            <p>No more landpads to display.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Landpads;
