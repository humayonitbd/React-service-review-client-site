import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewDetails from './ReviewDetails';
import toast, { Toaster } from 'react-hot-toast';

const MyReviews = () => {
    const {user, logOut} = useContext(AuthContext);
    const [reviewData, setReviewData] = useState([]);
    useTitle('myReview');
    console.log(reviewData)
    useEffect(()=>{
        fetch(`https://assinment-server-side.vercel.app/reviewMessage?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('review-project')}`
            }
        })
        .then(res =>{
            if(res.status === 401 || res.status === 403){
                // return logOut();
            }
            return res.json()
        })
        .then(data =>{
            const reviewData = [...data].reverse();
            setReviewData(reviewData)
            console.log(reviewData)
        })


    },[user?.email])

    const reviewDeleteHandler=(id)=>{
        fetch(`https://assinment-server-side.vercel.app/reviewMessage/${id}`,{
            method: 'DELETE',

        })
        .then(res =>res.json())
        .then(data =>{
            if(data.success){
                toast.success(data.message)
                const remaining = reviewData.filter(review => review._id !== id)
                setReviewData(remaining);
            }else{
                alert(data.error)
                toast.error(data.error)
            }

        })

    }


    return (
        <div>
            <h3 className='text-red-600 text-center font-bold text-3xl my-6'>Your review</h3>
            {
                reviewData?.length === 0 ? <>
                <h3 className='text-2xl text-center font-bold text-red-600 my-10'>You don't have reviews! Please  You give some reviews </h3>
                </> : <>
                <div>
                {
              reviewData?.length && reviewData?.map(reviews => <ReviewDetails key={reviews._id} reviews={reviews} reviewDeleteHandler={reviewDeleteHandler}></ReviewDetails>)
                }
            </div>
                </>
            }
            
        </div>
    );
};

export default MyReviews;