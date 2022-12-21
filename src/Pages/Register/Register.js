import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { jwtHandler } from '../../Utilitis/Utilitis';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const {createUser, profileUpdate } = useContext(AuthContext);
    useTitle('register');
    const navigate = useNavigate();
    const handlerRegister=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            jwtHandler(user)
            handlerUpdate(name)
            // alert('Create successfull!!!')
            toast.success('Create successfull!!!')
            form.reset();
            navigate('/');
        })
        .catch(error =>{
            toast.error('Do not create account!!')
        })


        const handlerUpdate =(name)=>{
            profileUpdate(name)
            .then(() =>{
                console.log('name update')
            })
            .catch(error =>console.log(error.message))

        }
    }
    return (
        <div>
            <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold my-5">Register now!</h1>
                </div>
                <form onSubmit={handlerRegister} className="card w-full shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type Name</span>
                    </label>
                    <input type="text" name='name' placeholder="type name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type Email</span>
                    </label>
                    <input type="email" name='email' placeholder="type email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type Password</span>
                    </label>
                    <input type="password" name='password' placeholder="type password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Submit</button>
                    </div>
                    <p>You have any account? <Link to='/login' className='text-red-500 font-bold'>login</Link></p>
                </div>
                
                </form>
            </div>
            </div>
        </div>
    );
};

export default Register;