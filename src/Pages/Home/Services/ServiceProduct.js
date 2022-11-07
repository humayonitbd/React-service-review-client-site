import React from 'react';
import './ServiceProduct.css'

const ServiceProduct = ({services}) => {
    const {name, _id, price, details, img} = services;
    return (
        <div className='service'>
          <div className="card bg-base-100 shadow-xl">
          <figure><img src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price: {price}</p>
            <p>{`${details ? details.slice(0, 100) : details}`}</p>
           </div>
            </div>
            
        </div>
    );
};

export default ServiceProduct;