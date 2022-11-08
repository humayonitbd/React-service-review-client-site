import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewDetails from './ReviewDetails';

const MyReviews = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviewData, setReviewData] = useState([]);
    // useTitle('myReview');

    useEffect(()=>{
        fetch(`http://localhost:5000/reviewMessage?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('review-project')}`
            }
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            return res.json()
        })
        .then(data =>{
            setReviewData(data)
            console.log(data)
        })


    },[user?.email, logOut])

    const reviewDeleteHandler=(id)=>{
        fetch(`http://localhost:5000/reviewMessage/${id}`,{
            method: 'DELETE',

        })
        .then(res =>res.json())
        .then(data =>{
            if(data.success){
                alert(data.message);
                const remaining = reviewData.filter(review => review._id !== id)
                setReviewData(remaining);
            }else{
                alert(data.error)
            }

        })

    }


    return (
        <div>
            <h3 className='text-red-600 text-center font-bold text-3xl my-6'>Your review</h3>
            <div>
                {
                reviewData.map(reviews => <ReviewDetails key={reviews._id} reviews={reviews} reviewDeleteHandler={reviewDeleteHandler}></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default MyReviews;