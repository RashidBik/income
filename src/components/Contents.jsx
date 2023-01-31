import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router'
import Header from '../components/Header';
import { useEffect } from 'react'
import { useContext } from 'react';
import authContext from '../helper/AuthContext';
import { Link } from 'react-router-dom';

function Contents() {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation()
  const {color} = useContext(authContext);
  const userid = localStorage.getItem('userid');

    useEffect(() => {
      fetch(`http://localhost:4000/api/user/content/${userid}/group/${location.state}`)
      .then((res)=> res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => setError(err));
    }, []);
  
  return (
    <div>
       <header style={color.C1} className='flex justify-end p-4'> 
        <Link to="/group" className='px-2 font-bold'>back</Link>
      </header>
      <div style={color.C2} className='py-1 text-center text-xl uppercase'>
      {data.groups && data.groups[0].group}
      </div>
        <div className='px-4 flex flex-col'>
              {data.groups && data.groups.map(item => (
                  <div key={item._id} className='flex mt-2 flex-col'>
                      <div onClick={()=> navigate('/card',{state: item._id})} 
                      className='flex justify-around rounded-lg border p-1'
                      style={item.type === "income" ? color.C2: color.C3}
                      >
                          <span style={{color: item.type === "income" ? "green": "red"}} className='p-1'>{item.amount}</span>
                          <span style={{color: item.type === "income" ? "green": "red"}} className='p-1'>cash</span>
                          <span style={{color: item.type === "income" ? "green": "red"}} className='p-1'>{item.group}</span>
                      </div>
                  </div>
              ))}
        </div>
    </div>
  )
}

export default Contents