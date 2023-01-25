import { useState } from 'react';
import { useNavigate } from 'react-router'
import Header from '../components/Header';
import { useEffect } from 'react'

function Report() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      fetch("http://localhost:4000/api/user/content/63ccff9ae3d10a5797919529")
      .then((res)=> res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => setError(err));
    }, []);
  
  return (
    <div>
      <Header />
           <nav className='flex justify-evenly py-2 bg-slate-300'>
            <button>today</button>
            <button>week</button>
            <button>month</button>
            <button>year</button>
            <button>all</button>
        </nav>
        <div className='px-3  flex flex-col bg-slate-100'>
          <div className='py-1'>
            <nav className='flex justify-evenly font-bold'>
                <div className='text-green-800'>
                  <p>Income</p>
                  <p>{data.assets && data.assets.income}</p>
                </div>
                <div className='text-red-800'>
                  <p>Expense</p>
                  <p>{data.assets && data.assets.expens}</p>
                </div>
                <div className='text-blue-800'>
                  <p>Total</p>
                  <p>{data.assets && data.assets.income - data.assets.expens}</p>
                </div>
            </nav>
          </div>
              {data.content && data.content.map(item => (
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

export default Report
