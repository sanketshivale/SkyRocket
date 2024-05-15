import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HISTORY_BY_ID } from '../../graphql/query/getQuery';
import { useLocation } from 'react-router-dom';

const SingleHistory = () => {
    const historyId = useLocation().pathname.split('/')[2];
    const { loading, error, data } = useQuery(GET_HISTORY_BY_ID, {
        variables: { historyId },
    });

    if (loading) return <div className='pt-16 mx-4'><p>Loading...</p></div>;
    if (error) return <div className='pt-16 mx-4'><p>Error fetching data: {error.message}</p></div>;

    const { details, event_date_unix, event_date_utc, id, title, links } = data.history;

    return (
        <div className="bg-gray-100 text-black pt-16 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p className="mb-6">{details}</p>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold">ID:</p>
                        <p>{id}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Event Date (UTC):</p>
                        <p>{new Date(event_date_utc).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Event Date (Unix):</p>
                        <p>{new Date(event_date_unix * 1000).toLocaleString()}</p>
                    </div>
                </div>
                <div className="mt-6">
                    {links.article && <a href={links.article} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Read Article</a>}
                    {links.reddit && <a href={links.reddit} target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500 underline">Reddit</a>}
                    {links.wikipedia && <a href={links.wikipedia} target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500 underline">Wikipedia</a>}
                </div>
            </div>
        </div>
    );
};

export default SingleHistory;