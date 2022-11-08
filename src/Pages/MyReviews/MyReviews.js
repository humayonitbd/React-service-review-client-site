import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewDetails from './ReviewDetails';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviewData, setReviewData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviewMessage?email=${user?.email}`)
        .then(res =>res.json())
        .then(data =>{
            setReviewData(data)
            console.log(data)
        })


    },[user?.email])


    return (
        <div>
            <h3 className='text-red-600 text-center font-bold text-3xl my-6'>Your review</h3>
            <div>
                {
                reviewData?.map(reviews => <ReviewDetails key={reviews._id} reviews={reviews}></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default MyReviews;