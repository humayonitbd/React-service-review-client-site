import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { jwtHandler } from '../../Utilitis/Utilitis';

const Login = () => {
    const {login, loginGoogle} = useContext(AuthContext)
    // useTitle('login');
    const navigete = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
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
            jwtHandler(user)
            alert('Login successfull!!')
            form.reset();
            navigete(from, {replace: true})
        })
        .catch(error =>{
            alert(error.message)
        })

    }

    const googleLoginHandler=()=>{
        loginGoogle()
        .then(result =>{
            const user = result.user
            console.log(user)
            alert('Login successfully !!')
            navigete(from, {replace: true})
        })
        .catch(error =>console.log(error))
    }



    return (
        <div>
            <div className="hero min-h-screen">
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
                    <div>
                        <button onClick={googleLoginHandler} className='btn btn-primary w-full'>Google login</button>
                    </div>
                </div>
                
                </form>
            </div>
            </div>
        </div>
    );
};

export default Login;