import React from 'react'
import { Link } from 'react-router-dom'

const Wellcom = () => {
  return (
    <div className=' md:p-40'>
      <div className='relative '>
        <span className=''>
          <svg 
          id="sw-js-blob-svg" 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg">                    
          <defs>                         
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                           
              <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>                            
              <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                        
            </linearGradient>                    
          </defs>                
          <path fill="url(#sw-gradient)" d="M24.3,-29.5C27.9,-26,24.6,-14.9,25.8,-5C27.1,5,33,13.7,29.5,14.5C26,15.3,13.2,8.3,6.1,6.4C-1,4.4,-2.5,7.6,-8.1,10.6C-13.6,13.6,-23.3,16.3,-30.3,13.2C-37.2,10,-41.4,1,-41.1,-8.4C-40.9,-17.9,-36.2,-27.7,-28.6,-30.4C-21,-33.1,-10.5,-28.8,0,-28.7C10.4,-28.7,20.8,-32.9,24.3,-29.5Z" 
                width="100%" height="100%" 
                transform="translate(50 50)" 
                stroke-width="0" 
                style={{transition: "all 0.3s ease 0s"}}>
            </path>              
          </svg>
        </span>
      </div>
      {/* <Link to='/register' >Register</Link>
      <div className=' text-xl'>
      <Link to='/home' >guest</Link>
      </div> */}
    </div>
  )
}

export default Wellcom
