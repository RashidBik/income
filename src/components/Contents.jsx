import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router'
import Header from '../components/Header';
import { useEffect } from 'react'

function Contents() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation()
    useEffect(() => {
      fetch(`http://localhost:4000/api/user/content/63ccff9ae3d10a5797919529/group/${location.state}`)
      .then((res)=> res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => setError(err));
    }, []);
  
  return (
    <div>
      <Header />
        <div className='px-3  flex flex-col bg-slate-100'>
          <div className='py-1 text-center text-xl uppercase'>
          {data.groups && data.groups[0].group}
          </div>
              {data.groups && data.groups.map(item => (
                  <div key={item._id} className='flex flex-col'>
                      <div onClick={()=> navigate('/card',{state: item._id})} className='bg-gray-200 flex justify-around m-1'>
                          <span className='p-1'>{item.amount}</span>
                          <span className='p-1'>cash</span>
                          <span className='p-1'>{item.group}</span>
                      </div>
                  </div>
              ))}
        </div>
    </div>
  )
}

export default Contents
