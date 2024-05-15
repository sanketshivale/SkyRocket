import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CAPSULES_BY_ID } from '../../graphql/query/getQuery';
import { useLocation } from 'react-router-dom';

const SingleCapsule = () => {
    const capsuleId = useLocation().pathname.split('/')[2];
    const { loading, error, data } = useQuery(GET_CAPSULES_BY_ID, {
        variables: { capsuleId },
    });

    if (loading) return <div className='pt-16 mx-4'><p>Loading...</p></div>;
    if (error) return <div className='pt-16 mx-4'><p>Error fetching data: {error.message}</p></div>;

    const { id, landings, original_launch, reuse_count, status, type, dragon, missions } = data.capsule;

    return (
        <div className="bg-gray-100 text-black pt-16 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
                <h1 className="text-2xl font-bold mb-4">Capsule Details</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold">ID:</p>
                        <p>{id}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Landings:</p>
                        <p>{landings ? landings : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Original Launch:</p>
                        <p>{original_launch ? original_launch : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Reuse Count:</p>
                        <p>{reuse_count}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Status:</p>
                        <p>{status}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Type:</p>
                        <p>{type}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Dragon ID:</p>
                        <p>{dragon ? dragon.id : 'N/A'}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-semibold">Missions:</p>
                        <p>{missions ? missions.map(mission => mission.name).join(', ') : 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCapsule;