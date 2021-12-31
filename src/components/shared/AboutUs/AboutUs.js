import React from 'react';
import timeImg from '../../../img/bike-feature-1.png';
import helmetImg from '../../../img/ic_bike_feature_2.png';
import rideImg from '../../../img/ic_bike_feature_3.png';
import travelImg from '../../../img/ic_Car_Feature_1.png';
import comfortImg from '../../../img/ic_Car_Feature_2.png';
import hassleFreeImg from '../../../img/ic_Car_Feature_3.png';

const AboutUs = () => {
    return (
        <div className='container mx-auto '>
            <div className='flex md:flex-row flex-col py-12 font-sans'>
                <div className='px-12'>
                    <img src={timeImg} alt='' />
                    <h2 className='text-3xl font-bold text-center my-4'>
                        Beat the Traffic, Save Time
                    </h2>
                    <p>
                        Nothing beats traffic like Pathao Bikes and you know it!
                        Save time and save money by ride-sharing with Pathao
                        Bikes.
                    </p>
                </div>
                <div className='px-12'>
                    <img src={helmetImg} alt='' />
                    <h2 className='text-3xl font-bold text-center my-4'>
                        We Got You Covered
                    </h2>
                    <p>
                        Our rides are insured, so when ride-sharing with us you
                        get the safest rides.
                    </p>
                </div>
                <div className='px-12'>
                    <img src={rideImg} alt='' />
                    <h2 className='text-3xl font-bold text-center my-4'>
                        Always Available
                    </h2>
                    <p>
                        Be it early in the morning or late in the night, our
                        expert riders are always available to provide you with
                        the best ride-sharing experience!
                    </p>
                </div>
            </div>
            <div className='flex md:flex-row flex-col py-12 font-sans'>
                <div className='px-12'>
                    <img src={travelImg} alt='' />
                    <h2 className='text-3xl font-bold text-center my-4'>
                        Travel at Your Convenience
                    </h2>
                    <p>
                        Ride-sharing, but budget is tight? Try Pathao Car Lite!
                        Want to travel in extra comfort? Use Pathao Car Plus!
                    </p>
                </div>
                <div className='px-12'>
                    <img src={comfortImg} alt='' />
                    <h2 className='text-3xl font-bold text-center my-4'>
                        Comfort With Affordability
                    </h2>
                    <p>
                        With Pathao’s competitive rates, even when you
                        ride-share with Car Plus you’ll be travelling with ease
                        and comfort that is affordable.
                    </p>
                </div>
                <div className='px-12'>
                    <img src={hassleFreeImg} alt='' />
                    <h2 className='text-3xl font-bold text-center my-4'>
                        Hasslefree and Quick
                    </h2>
                    <p>
                        With just a few clicks on the app, you can find a car
                        quickly and start ride-sharing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;