import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const singleService = useLoaderData();
    console.log(singleService)
    const {name, img, _id, price, details} = singleService;
    return (
        <div className='grid grid-cols-1 mx-5 my-10 lg:grid-cols-2 md:grid-cols-2 gap-10'>
           <div className='text-center'>
                <h3 className='text-center text-2xl font-bold my-5'>Review Section</h3>
                <form>
                <input type="text" placeholder="Type name" className="input input-bordered w-full max-w-xs" /><br />
                <textarea className="textarea textarea-bordered w-80 my-4" placeholder="message..."></textarea><br />
                <input type="submit" className='bg-blue-500 w-80 py-3 rounded text-white font-bold' value="Send" />
                </form>
           </div>
           <div className=''>
            <h3 className='text-center text-2xl font-bold my-5'>Service Details</h3>
            <div className='AllService'>
          <div className="card bg-base-100 shadow-xl">
          <figure><img src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price: ${price}</p>
            <p>{`${details}`}</p>
            
           </div>
            </div>
        </div>
           </div>
        </div>
    );
};

export default ServicesDetails;