import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import reviewUser from '../../images/user.jpg'

const ReviewDetails = ({reviews, reviewDeleteHandler}) => {
    const {user} = useContext(AuthContext)
    const {name, review, rating, _id, serviceId, dateTime} = reviews;
    const [orderService, setOrderService] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/allService/${serviceId}`)
        .then(res =>res.json())
        .then(data =>{
            // console.log(data)
            setOrderService(data)
        })
    },[serviceId])



    return (
        <div className='lg:w-8/12 md:w-8/12 mb-5 mx-2 lg:mx-auto md:mx-auto'>
            <div className='border p-5 lg:flex md:flex justify-between items-center border-black rounded'>
                <div className='w-80'>
                    <div className='flex mb-3 justify-start items-center'>
                    {user?.email && user?.uid ? <img src={user.photoURL} className='w-16 h-16 mr-2 rounded-full' alt="" />: <img src={reviewUser} className='w-16 mr-2 h-16 rounded-full' alt="" />}
                    <div>
                    <h3 className='font-bold'>{name}</h3>
                    <p>{dateTime}</p>
                    <p>rating: {rating}</p>
                    </div>
                    </div>
                    <div>
                    <p className='text-lg font-bold'>Product name: {orderService.name}</p>
                    <p>{review}</p>
                    </div>
                </div>
                
                <div className='lg:text-end text-start md:text-end w-50'>
                    <button onClick={()=>reviewDeleteHandler(_id)} className='btn bg-red-600 mr-5'>Delete</button>
                    <Link to={`/myReview/${_id}`}><button className='btn btn-primary'>Update</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewDetails;