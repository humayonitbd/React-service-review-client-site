import React, { useEffect, useState } from 'react';
import AllServiceData from './AllServiceData';


const ServicePage = () => {
    const [allServices, setAllServices] = useState([]);

    useEffect(()=>{
        fetch(`https://assinment-server-side.vercel.app/allService`)
        .then(res =>res.json())
        .then(data =>{
            setAllServices(data)
        })
    },[])
    // console.log(allServices)

    return (
        <div>
           <div className='text-center my-10'>
            <h3 className='text-3xl font-bold'>Services All Product!!</h3>
           </div>
           {
            allServices?.length === 0 ? <><div className='text-center'><button className="btn btn-square loading"></button></div></> : <>
            <div className='mx-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8 my-5'>
            {
                allServices?.map(singleService => <AllServiceData key={singleService._id} singleService={singleService}></AllServiceData>)
            }
           </div>
            </>
           }
           
        </div>
    );
};

export default ServicePage;