import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from '../../images/logoDentice.jpg';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const {logOut, user} = useContext(AuthContext);
  const handlerLogout=()=>{
    logOut()
    .then(() =>{
      alert('logOut successfull!!')
    })
    .catch(error =>{
      alert(error.message)
    })
  }
    return (
  <div className='bg-base-300'>
    <div className="navbar w-10/12 mx-auto ">
  <div className="flex-1">
    <img src={logo} className='w-20 h-12 rounded-lg' alt="" />
    <Link className="font-bold ml-1 text-xl">Dentist Reviews </Link>
  </div>
  <div className="flex-none gap-2">
    <ul className='hidden lg:block lg:flex justify-center items-center'>
        <li className='mr-10'><Link to='/'>Home</Link></li>
        <li className='mr-10'><Link to='/blog'>Blog</Link></li>
        <li className='mr-10'><Link to='/service'>Service</Link></li>
        {user && user?.email ? <>
        <li className='mr-10'><Link to='/myReview'>My Reviews</Link></li>
        <li className='mr-10'><Link to='/addService'>Add Service</Link></li>
        <li className='mr-10' onClick={handlerLogout}><Link>Logout</Link></li>
        </> :
        <>
        <li className='mr-10'><Link to='/login'>Login</Link></li>
        <li className='mr-10'><Link to='/register'>Register</Link></li>
        </>
        }
        

    </ul>
    <div className="dropdown dropdown-end lg:hidden">
      <label tabIndex={0} >
        <div className=" ">
          <FaBars/>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li className='mr-10'><Link to='/'>Home</Link></li>
        <li className='mr-10'><Link to='/blog'>Blog</Link></li>
        <li className='mr-10'><Link to='/service'>Service</Link></li>
        {user && user?.email ? <>
        <li className='mr-10'><Link to='/myReview'>My Reviews</Link></li>
        <li className='mr-10'><Link to='/addService'>Add Service</Link></li>
        <li className='mr-10' onClick={handlerLogout}><Link>Logout</Link></li>
        </> :
        <>
        <li className='mr-10'><Link to='/login'>Login</Link></li>
        <li className='mr-10'><Link to='/register'>Register</Link></li>
        </>
        }
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;