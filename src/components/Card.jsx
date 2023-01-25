import {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router'

const Card = (props) => {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // const {state, dispatch} =  useIncomeContext();

    useEffect(() => {
      fetch(`http://localhost:4000/api/user/content/63ccff9ae3d10a5797919529/${location.state}`)
      .then((res)=> res.json())
      .then(data => {
        setData(data.content)
      })
      .catch(err => setError(err));
    }, []);
    

  return (
      <div className='flex flex-col'>
        <div className='text-center font-bold p-2 text-lg'>2020/10/11</div>
        <div className='grid grid-cols-4 p-4'>
            <div className='flex flex-col'>
              <p className='m-2'>from</p>
              <p className='m-2'>type</p>
              <p className='m-2'>amount</p>
              <p className='m-2'>report</p>
            </div>
            <div className='flex flex-col col-span-3 space-x-2'>
              <p className='m-2'>{data && data.group}</p>
              <p className='m-2'>{data && data.type}</p>
              <p className='m-2'>{data && data.amount}</p>
              <p className='m-2'>{data && data.report}</p>
            </div>
        </div>
        <div className='grid p-4'>
          <button onClick={()=> navigate('/update')} className='bg-red-700 p-1'>update</button>
        </div>
      </div>
  )
}

export default Card
