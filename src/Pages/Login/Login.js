import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)
    const navigete = useNavigate();
    const handlerlogin=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            alert('Login successfull!!')
            form.reset();
            navigete('/')
        })
        .catch(error =>{
            alert(error.message)
        })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                <h1 className="text-5xl font-bold my-3">Login</h1>
                </div>
                <form onSubmit={handlerlogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type Email</span>
                    </label>
                    <input type="email" name='email' placeholder="type email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Type Password</span>
                    </label>
                    <input type="password" name='password' placeholder="type password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                    <button type='submit' className="btn btn-primary">Submit</button>
                    </div>
                    <p>Are you new user? <Link to='/register' className='text-red-500 font-bold'>register</Link></p>
                </div>
                
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;