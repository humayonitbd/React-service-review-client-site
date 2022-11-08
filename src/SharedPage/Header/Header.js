import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-base-100'>
            <div className="navbar w-10/12 mx-auto ">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl">Books reviews project</Link>
  </div>
  <div className="flex-none gap-2">
    <ul className='hidden lg:block lg:flex justify-center items-center'>
        <li className='mr-10'><Link to='/'>Home</Link></li>
        <li className='mr-10'><Link to='/about'>About</Link></li>
        <li className='mr-10'><Link to='/service'>Service</Link></li>
        <li className='mr-10'><Link>Logout</Link></li>
        <li className='mr-10'><Link to='/login'>Login</Link></li>
        <li className='mr-10'><Link to='/register'>Register</Link></li>
        

    </ul>
    <div className="dropdown dropdown-end lg:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
      <li className='mr-10'><Link to='/'>Home</Link></li>
        <li className='mr-10'><Link to='/about'>About</Link></li>
        <li className='mr-10'><Link to='/service'>Service</Link></li>
        <li className='mr-10'><Link>Logout</Link></li>
        <li className='mr-10'><Link to='/login'>Login</Link></li>
        <li className='mr-10'><Link to='/register'>Register</Link></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;