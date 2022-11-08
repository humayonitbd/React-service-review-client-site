import React from 'react';
import './OthersSec.css'

const OthersSec = () => {
    return (
        <div className='othersContainer'>
            <div className='lg:mx-10 md:mx-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10'>
            <div className='text-white'>
            <h2 className='text-2xl mt-5 lg:mt-10 font-bold'>Planning Dental Implants</h2>
            <h1 className='font-bold text-lg my-3'>COMPLETE DENTURES</h1>
            <p>A complete denture is a removable acrylic replacement for teeth and bone lost in an entire dental arch. Complete dentures are relatively economical, easy to fabricate and repair, and provide a level of esthetics and function acceptable to many patients.</p>
            </div>
            <div className='flex justify-end items-center'>
                <button className='btn bg-red-600 text-white'>contact</button>
            </div>
        </div>
        </div>
    );
};

export default OthersSec;