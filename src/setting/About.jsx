import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Back from '../components/Back';
import authContext from '../helper/AuthContext';

const About = () => {
    const {color} = useContext(authContext);
  return (
    <>
    <header style={color.C1} className='flex justify-end p-4 md:hidden'> 
    <Back />
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
