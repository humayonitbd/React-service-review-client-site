import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const updateProduct = useLoaderData();
    console.log(updateProduct)
    const updateHandletbtn=(e)=>{
        e.preventDefault();
        const form = e.target;
        const reviewMessage = form.updateReview.value;
        const updateReview ={
            review: reviewMessage
        }
        console.log(updateReview)

        fetch(`http://localhost:5000/reviewMessage/${updateProduct._id}`, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateReview)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            alert(data.message)
            
        })
    }
    return (
        <form onSubmit={updateHandletbtn} className='flex justify-center items-center my-10'>
            <div>
            <h3 className='text-red-600 my-10 text-2xl font-bold'>update raview</h3>
            <label className='text-start'>Review update:</label><br />
            <textarea className="textarea mb-5 w-96 textarea-primary" placeholder="Type update review" name='updateReview' defaultValue={updateProduct.review}></textarea><br />
            <button className='btn btn-primary'  type='submit'>Update Review</button>
            </div>
        </form>
    );
};

export default UpdateReview;