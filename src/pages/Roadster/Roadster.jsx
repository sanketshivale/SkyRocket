import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ROADSTER } from '../../graphql/query/getQuery';

const Roadster = () => {
    const { loading, error, data } = useQuery(GET_ROADSTER);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const {
        details,
        earth_distance_km,
        earth_distance_mi,
        eccentricity,
        epoch_jd,
        inclination,
        launch_date_unix,
        launch_date_utc,
        launch_mass_kg,
        launch_mass_lbs,
        longitude,
        mars_distance_km,
        mars_distance_mi,
        name,
        norad_id,
        periapsis_arg,
        periapsis_au,
        period_days,
        semi_major_axis_au,
        speed_kph,
        speed_mph,
        wikipedia,
        apoapsis_au
    } = data.roadster;

    return (

        <div className="bg-gray-100 pt-16 min-h-screen">
            <div className="text-black py-12">
                <div className="mx-4 p-6 bg-white rounded-lg">

                    <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
                    <p className="text-sm italic mt-2">
                        <a href={wikipedia} target="_blank" rel="noopener noreferrer" className="underline text-blue-500 hover:text-blue-700">Wikipedia</a>
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-3xl font-semibold mb-4">Launch Details</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li><strong>Launch Date (UTC):</strong> {launch_date_utc}</li>
                                <li><strong>Launch Date (Unix):</strong> {launch_date_unix}</li>
                                <li><strong>Launch Mass:</strong> {launch_mass_kg} kg ({launch_mass_lbs} lbs)</li>
                                <li><strong>NORAD ID:</strong> {norad_id}</li>
                                <li><strong>Epoch J2000:</strong> {epoch_jd}</li>
                                <li><strong>Periapsis:</strong> {periapsis_au.toFixed(6)} AU</li>
                                <li><strong>Periapsis Argument:</strong> {periapsis_arg.toFixed(2)}°</li>
                                <li><strong>Eccentricity:</strong> {eccentricity}</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-semibold mb-4">Orbit Details</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li><strong>Earth Distance:</strong> {earth_distance_km.toFixed(2)} km ({earth_distance_mi.toFixed(2)} mi)</li>
                                <li><strong>Mars Distance:</strong> {mars_distance_km.toFixed(2)} km ({mars_distance_mi.toFixed(2)} mi)</li>
                                <li><strong>Speed:</strong> {speed_kph.toFixed(2)} kph ({speed_mph.toFixed(2)} mph)</li>
                                <li><strong>Inclination:</strong> {inclination.toFixed(2)}°</li>
                                <li><strong>Longitude:</strong> {longitude.toFixed(2)}</li>
                                <li><strong>Apoapsis:</strong> {apoapsis_au.toFixed(6)} AU</li>
                                <li><strong>Semi-Major Axis:</strong> {semi_major_axis_au.toFixed(6)} AU</li>
                                <li><strong>Orbital Period:</strong> {period_days.toFixed(2)} days</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadster;