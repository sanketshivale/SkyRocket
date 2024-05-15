import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DRAGON_BY_ID } from '../../graphql/query/getQuery';
import { useLocation } from 'react-router-dom';

const SingleDragon = () => {
    const dragonId = useLocation().pathname.split('/')[2];
    const { loading, error, data } = useQuery(GET_DRAGON_BY_ID, {
        variables: { dragonId },
    });

    if (loading) return <div className='pt-16 mx-4'><p>Loading...</p></div>;
    if (error) return <div className='pt-16 mx-4'><p>Error fetching data: {error.message}</p></div>;

    const { active, crew_capacity, description, dry_mass_kg, dry_mass_lb, first_flight, id, name, orbit_duration_yr, sidewall_angle_deg, type, wikipedia, diameter, heat_shield, height_w_trunk, launch_payload_mass, launch_payload_vol, pressurized_capsule, return_payload_mass, return_payload_vol, thrusters, trunk } = data.dragon;

    return (
        <div className="bg-gray-100 pt-24 text-black min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl w-full">
                <h1 className="text-2xl font-bold mb-4">{name} Details</h1>
                <p className="mb-6">{description}</p>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold">ID:</p>
                        <p>{id}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Active:</p>
                        <p>{active ? 'Yes' : 'No'}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Crew Capacity:</p>
                        <p>{crew_capacity}</p>
                    </div>
                    <div>
                        <p className="font-semibold">First Flight:</p>
                        <p>{first_flight}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Type:</p>
                        <p>{type}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Orbit Duration (years):</p>
                        <p>{orbit_duration_yr}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Sidewall Angle (degrees):</p>
                        <p>{sidewall_angle_deg}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Dry Mass:</p>
                        <p>{dry_mass_kg} kg ({dry_mass_lb} lb)</p>
                    </div>
                    <div>
                        <p className="font-semibold">Diameter:</p>
                        <p>{diameter.meters} m ({diameter.feet} ft)</p>
                    </div>
                    <div>
                        <p className="font-semibold">Height with Trunk:</p>
                        <p>{height_w_trunk.meters} m ({height_w_trunk.feet} ft)</p>
                    </div>
                    <div>
                        <p className="font-semibold">Launch Payload Mass:</p>
                        <p>{launch_payload_mass.kg} kg ({launch_payload_mass.lb} lb)</p>
                    </div>
                    <div>
                        <p className="font-semibold">Launch Payload Volume:</p>
                        <p>{launch_payload_vol.cubic_meters} m³ ({launch_payload_vol.cubic_feet} ft³)</p>
                    </div>
                    <div>
                        <p className="font-semibold">Pressurized Capsule Volume:</p>
                        <p>{pressurized_capsule.payload_volume.cubic_meters} m³ ({pressurized_capsule.payload_volume.cubic_feet} ft³)</p>
                    </div>
                    <div>
                        <p className="font-semibold">Return Payload Mass:</p>
                        <p>{return_payload_mass.kg} kg ({return_payload_mass.lb} lb)</p>
                    </div>
                    <div>
                        <p className="font-semibold">Return Payload Volume:</p>
                        <p>{return_payload_vol.cubic_meters} m³ ({return_payload_vol.cubic_feet} ft³)</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-semibold">Heat Shield:</p>
                        <p>Material: {heat_shield.material}</p>
                        <p>Developer: {heat_shield.dev_partner}</p>
                        <p>Size: {heat_shield.size_meters} m</p>
                        <p>Temperature Resistance: {heat_shield.temp_degrees} °C</p>
                    </div>
                    <div className="col-span-2">
                        <p className="font-semibold">Thrusters:</p>
                        {thrusters.map((thruster, index) => (
                            <div key={index}>
                                <p>Type: {thruster.type}</p>
                                <p>Amount: {thruster.amount}</p>
                                <p>Fuel: {thruster.fuel_1} / {thruster.fuel_2}</p>
                                <p>Pods: {thruster.pods}</p>
                                <p>Thrust: {thruster.thrust.kN} kN ({thruster.thrust.lbf} lbf)</p>
                            </div>
                        ))}
                    </div>
                    <div className="col-span-2">
                        <p className="font-semibold">Trunk:</p>
                        <p>Solar Arrays: {trunk.cargo.solar_array}</p>
                        <p>Unpressurized Cargo: {trunk.cargo.unpressurized_cargo ? 'Yes' : 'No'}</p>
                        <p>Volume: {trunk.trunk_volume.cubic_meters} m³ ({trunk.trunk_volume.cubic_feet} ft³)</p>
                    </div>
                </div>
                <div className="mt-6">
                    <a href={wikipedia} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Read more on Wikipedia</a>
                </div>
            </div>
        </div>
    );
};

export default SingleDragon;