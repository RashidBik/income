import React from 'react'
import { Link } from 'react-router-dom'

const Wellcom = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center align-middle md:p-40 '>
      <div className='relative '>
        <span className='text-3xl'>
            Wellcome
        </span>
      </div>
      <Link to='/register' >Register</Link>
      <div className=' text-xl'>
      <Link to='/login' >Login</Link>
      </div>
    </div>
  )
}

export default Wellcom
