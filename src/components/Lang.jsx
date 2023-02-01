import React from 'react'
import { useState } from 'react';
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import authContext from '../helper/AuthContext';
import { En } from '../languages/En';
import { Farsi } from '../languages/Farsi';

const Lang = () => {
  const [dir, setDir] = useState('ltr');
    const {setLang, color} = useContext(authContext);
    useEffect(() => {
      document.dir = dir
  }, [dir]);
  const handleEng = () => {
    setLang(En) 
    setDir('ltr')
  }
  const handleFa = () => {
    setLang(Farsi) 
    setDir('rtl')
  }
  return (
    <>
    <header style={color.C1} className='flex justify-end p-4'> 
        <Link to="/setting" className='px-2 font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </Link>
    </header>
        <div className='flex flex-col p-8'>
            <button style={color.C1} className='mt-2 p-2 rounded-xl font-black border inset-2' onClick={handleEng}>English</button>
            <button style={color.C1} className='mt-2 p-2 rounded-xl font-black border inset-2' onClick={handleFa}>فارسی</button>
        </div>
    </>
  )
}

export default Lang
