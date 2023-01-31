import { useContext } from 'react';
import {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import authContext from '../helper/AuthContext';

const Card = (props) => {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {admin ,color} = useContext(authContext);
  const userid = localStorage.getItem('userid');

    useEffect(() => {
      fetch(`http://localhost:4000/api/user/content/${userid}/${location.state}`)
      .then((res)=> res.json())
      .then(data => {
        setData(data.content)
      })
      .catch(err => setError(err));
    }, []);
    

  return (
    <>
      <header style={color.C1} className='flex justify-end p-4'> 
        <Link to="/group" className='px-2 font-bold'>back</Link>
      </header>
      <div className='flex flex-col'>
        <div className='text-center font-bold p-2 text-lg'>2020/10/11</div>
        <div className='flex p-6'>
            <div className='flex flex-col text-lg'>
              <p className='p-2'>From</p>
              <p className='p-2'>Type</p>
              <p className='p-2'>Amount</p>
              <p className='p-2'>Deal</p>
              <p className='p-2'>Report</p>
            </div>
            <div className='flex flex-col text-lg'>
              <p className='p-2'>{data && data.group}</p>
              <p className='p-2'>{data && data.type}</p>
              <p className='p-2'>{data && data.amount}</p>
              <p className='p-2'>{data && data.deal}</p>
              <p className='p-2'>{data && data.report}</p>
            </div>
        </div>
        <div className='grid p-4'>
          <button style={color.C1} onClick={()=> admin ? navigate('/update',{state: data._id}): navigate('/login')} className='p-1 py-2 rounded-xl'>update</button>
        </div>
      </div>
      </>
  )
}

export default Card
