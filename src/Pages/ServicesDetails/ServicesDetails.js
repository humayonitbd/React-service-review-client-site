import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import userimg from '../../images/user.jpg';
import toast, { Toaster } from 'react-hot-toast';

const ServicesDetails = () => {
    const singleService = useLoaderData();
    const [rating, setRating] = useState(0);
    // console.log(singleService)
    const {user} = useContext(AuthContext);
    const {name, img, _id, price, details} = singleService;
    // console.log(user)
    
    console.log(rating)
    const showDate = new Date();
    const date = showDate.toDateString();
    const time = showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds();
    // console.log(time,date)

    const reviewPostHandler=(e)=>{
        e.preventDefault();
        const form = e.target;
        const reviewMessage = form.reviewMessage.value;
        const reviewPost = {
            serviceId: _id,
            review: reviewMessage,
            name: user?.displayName,
            img:user?.photoURL,
            email: user?.email,
            date: date,
            time: time,
            rating: rating
            
        }
        fetch('https://assinment-server-side.vercel.app/reviewMessage',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(reviewPost)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.success){
               toast.success(data.message)
                e.target.reset();
            }else{
                toast.error(data.error)
            }
        })
        .catch(error =>console.log(error.message))

        console.log(reviewPost)
    }

    //review data load 
    const [peopleReview, setPeopleReview] = useState([]);
    useEffect(()=>{
        fetch(`https://assinment-server-side.vercel.app/reviewMessage/${_id}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setPeopleReview(data)
        })

    },[_id])
    console.log(peopleReview)



    return (
        <div className='grid grid-cols-1 mx-5 my-10 lg:grid-cols-2 md:grid-cols-2 gap-10'>
            <div>
            <h3 className='text-center text-2xl font-bold my-5'>Review Section</h3>
            {
            user?.email ? 
            <>
            <div className='text-center lg:order-none md:order-none sm:order-last order-last'>
                <div className='flex justify-start w-80 mx-auto items-center '>
                    {user?.email && user?.photoURL ? <img className='w-10 h-10 rounded-full mr-2' src={user.photoURL} alt="" /> : <img className='w-10 h-10 rounded-full mr-2' src={userimg} alt="" /> }
                    {user?.email && <h3 className='font-bold'>{user.displayName}</h3>}
                </div>
                <form onSubmit={reviewPostHandler}>
                    <p className='text-start mx-auto mt-5 w-80'>Type reviews message</p>
                <div className='flex w-80 mx-auto justify-start items-start'>
                <textarea className="textarea textarea-bordered w-full my-4" name='reviewMessage' placeholder="Please type review message..."></textarea>
           
                <select className='border mt-4 pb-1' onChange={(e)=>setRating(e.target.value)}>
                        <option   value="Ratting">Ratting</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                </select>
                </div>
                <br />
                <input type="submit" className='bg-blue-500 w-80 py-3 rounded text-white font-bold' value="Send" />
                </form>
           </div>
            </>
            :
            <>
            <div className='text-center my-8'>
                <h3 className='text-red-500 font-bold text-2xl mb-5'>your don't  account</h3>
                <Link to='/login'><button className='btn btn-primary'>login</button></Link> 
            </div>
            </>
           }
            </div>
           
           <div className='lg:order-none md:order-none sm:order-first order-first'>
            <h3 className='text-center text-2xl font-bold my-5'>Service Details</h3>
            <div className='AllService'>
          <div className="card bg-base-100 shadow-xl">
          <figure><img src={img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Price: ${price}</p>
            <p>{`${details}`}</p>
            
           </div>
            </div>
        </div>
        <div className='my-10'>
        <h2 className='my-3 text-red-600 font-bold'>Product all Review</h2>
            {
                peopleReview?.map(preview => {
                    return(
                        <div>
                            
                            <div className='border-2 mb-3 p-3 rounded'>
                            <div className='flex justify-start items-start'>
                                <img className='w-12 h-12 mr-2 rounded-full' src={preview?.img} alt="" />
                                <div>
                                <h3>{preview.name}</h3>
                                <p>
                                    <span>{preview.time}-</span> 
                                    <span>{preview.date}</span> 
                                </p>
                                </div>
                            </div>
                            <div>
                                <p>Service: {name}</p>
                                <p>{preview.review}</p>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
           </div>
        </div>
    );
};

export default ServicesDetails;