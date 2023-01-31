import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import authContext from '../helper/AuthContext';

const Footer = () => {
  const {lang, color} = useContext(authContext);
  return (
    <div>
        <footer style={color.C1} className='absolute bottom-0 flex justify-around w-full p-4 border-t'>
          <div className=' '>
            <Link to="/group" >{lang.footer[0]}</Link>
          </div>
          <div className=' '>
            <Link to='/report'>{lang.footer[1]}</Link>
          </div>
          <div className=' '>
            <Link to='/home'>{lang.footer[2]}</Link>
          </div>
        </footer>
    </div>
  )
}

export default Footer
