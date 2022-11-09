import React from 'react';
import useTitle from '../../hooks/useTitle';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
    // useTitle('addService')
    const handlerAddProduct=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.imgUrl.value;
        const price = form.price.value;
        const details = form.details.value;
        const productAdd = {
            name: name,
            img: img,
            price: price,
            details: details
        }

        fetch('http://localhost:5000/services',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(productAdd)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
           if(data.success){
            toast.success(data.message);
            alert(data.message)
           }else{
            toast.error(data.error);
           }
            
        })
        console.log(productAdd)

    }
    return (
        <div>
        <div className="hero min-h-screen">
        <div className="hero-content flex-col ">
            <div className="text-center">
            <h1 className="text-5xl font-bold my-3">Add Product</h1>
            </div>
            <form onSubmit={handlerAddProduct} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input type="text" name='name' placeholder="product name" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Product img url</span>
                </label>
                <input type="text" name='imgUrl' placeholder="img url" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Price</span>
                </label>
                <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Product Details</span>
                </label>
                <input type="text" name='details' placeholder="product details" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">Add product</button>
                </div>
                
            </div>
            
            </form>
        </div>
        </div>
    </div>
    );
};

export default AddService;