import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import authContext from '../helper/AuthContext';

const About = () => {
    const {color} = useContext(authContext);
  return (
    <>
    <header style={color.C1} className='flex justify-end p-4 md:hidden'> 
        <Link to="/setting" className='px-2 font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
        </Link> 
    </header>
        <div className=' h-full flex md:flex-col justify-center align-middle items-center text-3xl md:p-4'>
            About Rashid
            <p className='text-sm max-w-3xl p-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quas laudantium possimus, non recusandae neque eos dolor voluptas quo ex at excepturi perspiciatis repellat iusto quod, fugit totam numquam animi.
            </p>
                &copy; all rights reserved
        </div>
    </>
  )
}

export default About
