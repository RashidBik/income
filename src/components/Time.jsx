import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import authContext from '../helper/AuthContext';

const Time = (props) => {
    const [todaySort, settoDaySort] = useState();
    const {lang} = useContext(authContext);
  useEffect(() => {
       props.sortDate(todaySort)
  }, [todaySort]);
    
  return (
    <div className='flex justify-evenly lg:min-w-[10em]'>
        <button onClick={()=> settoDaySort(new Date().getDate())} className=''>{lang.reports.bar[0]}</button>
        <button onClick={()=> settoDaySort(new Date().getMonth())} className=''>{lang.reports.bar[1]}</button>
        <button onClick={()=> settoDaySort(new Date().getFullYear())} className=''>{lang.reports.bar[2]}</button>
        <button onClick={()=> settoDaySort(new Date().getFullYear())} className=''>{lang.reports.bar[3]}</button>
    </div>
  )
}

export default Time
