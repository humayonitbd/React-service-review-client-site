import React, { useEffect, useState } from 'react';
import ServiceProduct from './ServiceProduct';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            setServices(data)
        })
    },[])
console.log(services)


    return (
        <div>
            <div className='my-8 text-center'>
                <h3 className='text-red-600 text-2xl font-bold'>Services</h3>
                <p className='font-bold text-3xl'>Our best services product</p>
            </div>
            <div className='mx-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8'>
                {
                    services?.map(services =><ServiceProduct key={services._id}  services={services}></ServiceProduct>)
                }
            </div>
            <div className='text-center my-8'>
              <button className='btn btn-primary'>see more</button>
            </div>

        </div>
    );
};

export default Services;