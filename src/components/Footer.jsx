import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className='absolute bottom-0 flex justify-around w-full p-4 border-t '>
          <div className=' '>
            <Link to="/group" >Groups</Link>
          </div>
          <div className=' '>
            <Link to='/report'>Reports</Link>
          </div>
          <div className=' '>
            <Link to='/'>Home</Link>
          </div>
        </footer>
    </div>
  )
}

export default Footer
