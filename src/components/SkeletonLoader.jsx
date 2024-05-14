import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { RingLoader } from 'react-spinners';

const SkeletonLoader = () => {
    return (
        <div className="">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 opacity-50 mt-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                            <Skeleton height={224} />
                            <div className="p-4">
                                <Skeleton width={`80%`} height={24} className="mb-2" />
                                <Skeleton count={3} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center w-full">
                <RingLoader color={"#ffffff"} loading={true} size={100} />
            </div>
        </div>
    );
};

export default SkeletonLoader;