import React from 'react';
import aboutImg from '../../../images/about section.jpg';

const OthersSec = () => {
    return (
        <div className='bg-black text-white py-8'>
            <div className='my-20 mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
            <div>
                <h2 className='font-bold text-2xl'>WELCOME TO OUR WORKSHOP</h2>
                <p className='text-2xl font-semibold my-5'>Committed to Give High Quality Repairing & Services</p>
                <p className='text-lg'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps</p>
            </div>
            <div className=''>
                <img className='rounded-3xl' src={aboutImg} alt="aboute img" />
            </div>
        </div>
        </div>
    );
};

export default OthersSec;