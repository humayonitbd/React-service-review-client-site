import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import './AllServiceData.css'

const AllServiceData = ({singleService}) => {
    const {details, img, name, price, _id} = singleService;
    return (
        
        <PhotoProvider>
            <PhotoView src={img}>
            <div className='AllService'>
          <div className="card bg-base-100 shadow-xl">
          <figure><img src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price: ${price}</p>
            <p>{`${details ? details.slice(0, 100) : details}`}</p>
            <div className='text-right mt-2'>
                <Link to={`/service/${_id}`}><button className='btn btn-primary'>View details</button></Link>
            </div>
           </div>
            </div>
        </div>
            </PhotoView>
        </PhotoProvider>
            
        
    );
};

export default AllServiceData;