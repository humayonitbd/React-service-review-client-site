import React from 'react';
import icon1 from '../../../images/home-section-img/icon1.png'
import icon2 from '../../../images/home-section-img/icon2.png'
import icon3 from '../../../images/home-section-img/icon3.png'

import './CarService.css'

const CarService = () => {
    return (
        <div className='grid md:mx-10 lg:mx-10 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10 my-36'>
            <div className='flex justify-center items-center'>
                <h2 className='text-3xl'>
             <span className='text-red-500 font-bold text-3xl md:text-7xl lg:text-8xl'> 100% </span>Satisfaction Guarantee
                </h2>
            </div>

            <div className=' lg:text-start text-center '>
            <div className='flex lg:justify-start md:justify-start justify-center items-center'> <img className='' src={icon1} alt="" /></div>
                <h1 className='text-2xl py-2 font-bold'>Quality Support</h1>
                <p>our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
            </div>

            <div className=' lg:text-start text-center'>
           <div className='flex lg:justify-start md:justify-start justify-center items-center'> <img className='' src={icon2} alt="" /></div>
                <h1 className='text-2xl py-2 font-bold'>All Car Makes</h1>
                <p>our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>

            </div>
            <div className='lg:text-start text-center'>
            <div className='flex lg:justify-start md:justify-start justify-center items-center'> <img className='' src={icon3} alt="" /></div>
                <h1 className='text-2xl py-2 font-bold'>All Car Makes</h1>
                <p>our Repair Services offers quality help programs for any vehicles that permit them to consistently.</p>
            </div>
           
        </div>
    );
};

export default CarService;