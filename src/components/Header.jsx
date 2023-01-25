import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='flex justify-between p-4 w-full border-b'>
          <div>
            <input type="search" placeholder='Search' />
          </div>
          <div><Link to="/setting">Setting</Link></div>
        </header>
    </div>
  )
}

export default Header
