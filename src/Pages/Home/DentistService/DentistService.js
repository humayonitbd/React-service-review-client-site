import React from 'react';
import detal1 from '../../../images/home-section-img/dental1.jpg'
import detal2 from '../../../images/home-section-img/dental2.jpg'


const DentistService = () => {
    return (
        <div className='my-20 mx-5'>
            <div className='grid grid-cols-1 md:mx-10 lg:mx-10 lg:grid-cols-2 md:grid-cols-2 gap-10'>
            <div className=''>
                <h2 className='text-red-600 my-3 font-bold text-4xl'>Dental <span className='text-black'>Implant</span></h2>
                <p className='text-lg'>Dental implants are medical devices surgically implanted into the jaw to restore a person's ability to chew or their appearance. They provide support for artificial (fake) teeth, such as crowns, bridges, or dentures.Dental implant surgery is a procedure that replaces tooth roots with metal, screwlike posts and replaces damaged or missing teeth with artificial teeth that look and function much like real ones. Dental implant surgery can offer a welcome alternative to dentures or bridgework that doesn't fit well and can offer an option when a lack of natural teeth roots don't allow building denture or bridgework tooth replacements.</p>
                <button className='btn bg-red-600 mt-10'>Dental Details</button>
            </div>
            <div className='flex justify-end items-center'>
                <img className='h-96 rounded-3xl' src={detal1} alt="dental" />
            </div>
        </div>

            <div>
            <div className='grid grid-cols-1 mt-10 md:mx-10 lg:mx-10 lg:grid-cols-2 md:grid-cols-2 gap-10 '>
            <div className='flex justify-start items-center order-last lg:order-none md:order-none'>
            <img className='h-96 rounded-3xl' src={detal2} alt="dental" />
            </div>

            <div className=''>
            <h2 className='text-red-600 my-3 font-bold text-4xl'>Root Cause :  <span className='text-black'>Cavities</span></h2>
                <p className='text-lg'>Tooth  decay on the root surface of teeth may also be called root cavities, root decay, or root caries. It is a potentially detrimental oral health problem that needs immediate treatment to prevent severe dental damage. In this blog, you can learn more about what root decay is, why it happens, how it’s connected to gum disease and soft tissue recession, and what treatments are available to repair your teeth and soft tissue. If you’re concerned you have decay on your tooth’s root surface, contact your dentist in Greenbelt, MD as soon as possible to begin repairs.While many people are fortunate enough to have tough tooth enamel that is seemingly cavity resistant, few people have cavity resistant root surfaces. The root surface does not have a hard, protective enamel covering that is as thick and durable as the crown of the tooth. When gums recede below the enamel line or pull an only occur if the r</p>
                <button className='btn bg-red-600 mt-10'>Cavities Details</button>
                
            </div>
        </div>
                
            </div>
        </div>
    );
};

export default DentistService;