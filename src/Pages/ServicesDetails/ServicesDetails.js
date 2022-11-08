import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import userimg from '../../images/user.jpg';

const ServicesDetails = () => {
    const singleService = useLoaderData();
    // console.log(singleService)
    const {user} = useContext(AuthContext);
    const {name, img, _id, price, details} = singleService;
    console.log(user)
    return (
        <div className='grid grid-cols-1 mx-5 my-10 lg:grid-cols-2 md:grid-cols-2 gap-10'>
            <div>
            <h3 className='text-center text-2xl font-bold my-5'>Review Section</h3>
            {
            user?.email ? 
            <>
            <div className='text-center'>
                <div className='flex justify-start w-80 mx-auto items-center '>
                    {user?.email ? <img className='w-10 h-10 rounded-full mr-2' src={user.photoURL} alt="" /> : <img className='w-10 h-10 rounded-full mr-2' src={userimg} alt="" /> }
                    {user?.email && <h3 className='font-bold'>{user.displayName}</h3>}
                </div>
                <form>
                    <p className='text-start mx-auto mt-5 w-80'>Type reviews message</p>
                <textarea className="textarea textarea-bordered w-80 my-4" placeholder="Please type review message..."></textarea><br />
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
           
           <div className=''>
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
           </div>
        </div>
    );
};

export default ServicesDetails;