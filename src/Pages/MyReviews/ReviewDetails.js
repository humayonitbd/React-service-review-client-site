import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import reviewUser from '../../images/user.jpg'

const ReviewDetails = ({reviews}) => {
    const {user} = useContext(AuthContext)
    const {name, review, rating, _id, serviceId, dateTime} = reviews;
    return (
        <div className='w-8/12 mb-5  mx-auto'>
            <div className='border p-5 flex justify-between items-center border-black rounded'>
                <div className=''>
                    <div className='flex mb-3 justify-start items-center'>
                    {user?.email && user?.photoURL ? <img src={user?.photoURL} className='w-16 h-16 rounded-full' alt="" />: <img src={reviewUser} className='w-16 h-16 rounded-full' alt="" />}
                    <div>
                    <h3>{name}</h3>
                    <p>{dateTime}</p>
                    <p>rating: {rating}</p>
                    </div>
                    </div>
                    <div>
                    <p>{review}</p>
                    </div>
                </div>
                
                <div>
                    <button className='btn bg-red-600 mr-5'>Delete</button>
                    <button className='btn btn-primary'>Update</button>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewDetails;