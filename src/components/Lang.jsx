import React from 'react'
import { useState } from 'react';
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import authContext from '../helper/AuthContext';
import { En } from '../languages/En';
import { Farsi } from '../languages/Farsi';
import Back from './Back';

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
     <Back />
    </header>
        <div className='flex flex-col p-8'>
            <button style={color.C1} className='mt-2 p-2 rounded-xl font-black border inset-2' onClick={handleEng}>English</button>
            <button style={color.C1} className='mt-2 p-2 rounded-xl font-black border inset-2' onClick={handleFa}>فارسی</button>
        </div>
    </>
  )
}

export default Lang
