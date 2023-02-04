import { useContext } from 'react';
import {useEffect ,useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NewInser from '../components/NewInser';
import authContext from '../helper/AuthContext';

function Groups() {
  const [error, setError] = useState(null);
  const [group, setGroup] = useState();
  const navigate = useNavigate();
  const userid = localStorage.getItem('userid');
const {lang, color} = useContext(authContext);

    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/api/user/content/${userid}`)
      .then((res)=> res.json())
      .then(data => {
       let groups = data.content.map(group => group.group)
      setGroup(groups)
    })
    .catch(err => setError(err));
  }, []);

 const sortedGroup = Array.from(new Set(group))
  return (
    <>
     <div className=' md:hidden'>
        <Header err={error} />
      </div>
    <NewInser/>      
    <div className='flex flex-col lg:p-40'>
      <div style={color.C2} className='flex justify-around p-2'>
        <div 
        className='text-red-900' 
        >{lang.groups[0]}</div>
        <div 
        className='text-green-900' 
        >{lang.groups[1]}</div>
      </div>
            <div className='grid grid-cols-2 mt-1 p-3'>
            { sortedGroup && sortedGroup.map((item, index) => (
              <div
                style={color.C1} 
                key={index} 
                onClick={()=> navigate('/contents',{state: item})} 
                className='p-2 rounded-lg text-xl m-1'>
                {item}
              </div>
            ))
            }
          </div>
    </div>
    </>
  )
}

export default Groups
