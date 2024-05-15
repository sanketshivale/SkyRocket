import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SHIP_BY_ID } from '../../graphql/query/getQuery';
import { useLocation } from 'react-router-dom';

const SingleShip = () => {
    const shipId = useLocation().pathname.split('/')[2];
    const { loading, error, data } = useQuery(GET_SHIP_BY_ID, {
        variables: { shipId },
    });

    if (loading) return <div className='pt-16 mx-4'><p>Loading...</p></div>;
    if (error) return <div className='pt-16 mx-4'><p>Error fetching data: {error.message}</p></div>;

    const {
        abs,
        active,
        attempted_landings,
        class: shipClass,
        course_deg,
        home_port,
        id,
        image,
        imo,
        mmsi,
        roles,
        status,
        year_built,
    } = data.ship;

    return (
        <div className="bg-gray-100 text-black pt-24 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl w-full">
                <h1 className="text-2xl font-bold mb-4">Ship Details</h1>
                {image && (
                    <div className="mb-6">
                        <img src={image} alt={id} className="rounded-lg shadow-lg w-full" />
                    </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold">ID:</p>
                        <p>{shipId}</p>
                    </div>
                    <div>
                        <p className="font-semibold">ABS:</p>
                        <p>{abs ? abs : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Active:</p>
                        <p>{active ? 'Yes' : 'No'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Attempted Landings:</p>
                        <p>{attempted_landings}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Class:</p>
                        <p>{shipClass ? shipClass : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Course (degrees):</p>
                        <p>{course_deg ? course_deg : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Home Port:</p>
                        <p>{home_port ? home_port : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">IMO:</p>
                        <p>{imo ? imo : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">MMSI:</p>
                        <p>{mmsi ? mmsi : 'N/A'}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-semibold">Roles:</p>
                        <p>{roles ? roles.join(', ') : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Status:</p>
                        <p>{status ? status : 'N/A'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Year Built:</p>
                        <p>{year_built ? year_built : 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleShip;