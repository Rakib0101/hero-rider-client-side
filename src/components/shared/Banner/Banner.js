import React from 'react';

const Banner = () => {
    return (
        <div
            className='py-20'
            style={{
                backgroundImage: `url(https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/02-bike.png)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='md:w-3/5 mx-4'>
                        <div className='md:text-5xl text-3xl text-left font-bold'>
                            <h2>
                                <span className='text-primary'>Hero</span> Rider
                            </h2>
                            <h2 className='text-red-600 mt-4'>
                                Beat the Traffic <br />
                                <span className='text-black'>Save Time</span>
                            </h2>
                        </div>
                        <div className='py-8 md:pr-24 text-left'>
                            <p className='mb-2'>
                                You can’t be happier, if you won’t ride your
                                bike. A long, long ride in your bike will clear
                                your mind. And the cycle can sing on the streets
                                of a city.
                            </p>
                            <p>
                                Always back your scooter into the curb and sit
                                where you can see it. The sound of the throttle
                                makes me fall in love with our bike. King of the
                                bikes
                            </p>
                        </div>
                        <div>
                            <button className='bg-primary px-2 py-1 rounded text-white font-semibold'>
                                Check Our Bikes
                            </button>
                        </div>
                    </div>
                    <div className='w-2/5 '></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;