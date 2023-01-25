import {useEffect ,useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Header from '../components/Header';

function Groups() {
  const [error, setError] = useState(null);
  const [group, setGroup] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      fetch("http://localhost:4000/api/user/content/63ccff9ae3d10a5797919529")
      .then((res)=> res.json())
      .then(data => {
       let groups = data.content.map(group => group.group);
        setGroup(groups)
      })
      .catch(err => setError(err));
    }, []);

    const sortedGroup = Array.from(new Set(group));
    
  return (
    <>
    <Header />
    <div className='flex flex-col'>
      <div className='flex justify-around p-2'>
        <div className='text-red-900'>Expens</div>
        <div className='text-green-900'>Income</div>
      </div>
      <div className='grid grid-cols-2'>
        { sortedGroup && sortedGroup.map(item => (
          
          <div key={item} onClick={()=> navigate('/contents',{state: item})} className='p-2 border m-1'>{item}</div>
        ))
        }
      </div>
    </div>
    </>
  )
}

export default Groups
