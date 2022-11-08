import React from 'react';
import carImg1 from '../../../images/home-section-img/images.jpg'
import carImg2 from '../../../images/home-section-img/images-_1_.jpg'
import carImg3 from '../../../images/home-section-img/images-_2_.jpg'
import carImg4 from '../../../images/home-section-img/images-_3_.jpg'
import './CarService.css'

const CarService = () => {
    return (
        <div className='bg-black py-10 my-20'>
           <h3 className='text-white text-center text-3xl my-6'>Relative services</h3>
            <div className='grid mx-10 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6'>
            <div className='serviceImg1 text-center'>
                <img src={carImg1} alt="" />
                <h2 className='service-title'>service1</h2>
            </div>
            <div className='serviceImg1'>
                <img src={carImg2} alt="" />
                <h2 className='service-title'>service2</h2>
            </div>
            <div className='serviceImg1'>
                <img src={carImg3} alt="" />
                <h2 className='service-title'>service3</h2>
            </div>
            <div className='serviceImg1'>
                <img src={carImg4} alt="" />
                <h2 className='service-title'>service4</h2>
            </div>
        </div>
        </div>
    );
};

export default CarService;