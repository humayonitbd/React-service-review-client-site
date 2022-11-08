import React from 'react';
import aboutImg from '../../../images/about section.jpg';

const OthersSec = () => {
    return (
        <div className='my-20 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
            <div>
                <h2 className='font-bold text-2xl'>WHO WE ARE</h2>
                <p className='text-2xl font-semibold my-5'>Professional Auto washing and detailing services</p>
                <p className='text-lg'>Over the past 6 years we cleaned over 34,000 cars, saved over 8.9 million liters of water from being used in car washing and employed 50 youth. Our legacy is in the youth that gained work and life skills, grew their confidence and have moved on to bigger.</p>
            </div>
            <div>
                <img src={aboutImg} alt="aboute img" />
            </div>
        </div>
    );
};

export default OthersSec;