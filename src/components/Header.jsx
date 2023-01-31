import React, { useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import authContext from '../helper/AuthContext';

const Header = ({searchData}) => {
  const [keyword, setKeyword] = useState('');
  const {lang, color} = useContext(authContext);
const changHandler = (e) => {
  if (e.target.value !== " ") {
    setKeyword(e.target.value)
    searchData(keyword)
  } 
}
  return (
    <div style={color.C1}>
      <header className='flex justify-between p-4 w-full border-b'>
          <div>
            <input 
              className=' outline-none bg-inherit' 
              type="search" 
              placeholder={lang.header[0]} 
              value={keyword} onChange={changHandler} 
              />
          </div>
          <div><Link to="/setting">{lang.header[1]}</Link></div>
        </header>
    </div>
  )
}

export default Header
