import { useNavigate } from 'react-router'
import axios from 'axios';
import { useContext,useState,useEffect } from 'react';
import authContext from '../helper/AuthContext';
import Back from '../components/Back';

const Account = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const {admin} = useContext(authContext);
  const accessToken = localStorage.getItem('accessToken');
  const userid = localStorage.getItem('userid');
  const {color} = useContext(authContext);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}/api/user/content/${userid}`,
      headers: accessToken
    })
    .then((res)=> res.json())
    .then(data => {
      setData(data.content)
    })
    .catch(err => {
      setError(err)
    });
  }, []);

  const handleDelete = async (contentId) => {
   const result = prompt(`if you are sure press "Y" else "N"`);
   if (result === 'y') {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/api/user/content/${userid}/${contentId}`)
    const json = await response.data
    console.log(json);
   }
   if (result === 'n') {
    return
   }
  }
  return (
    <>
           <header style={color.C1} className='flex justify-end p-4'> 
      <Back/>
      </header>
    <div className='grid overflow-auto pb-16'>
      <div className="grid mt-2 p-4">
        {!data ? <h1>Loading...</h1>: (
         data.map(content => (
               <div key={content._id} className='bg-gray-100 flex flex-col justify-around p-3 mt-4'>
               <div className='m-auto p-2'>
                 <span className='text-3xl text-center' style={{color: content.type === 'income'? 'green': 'red'}}>{content.amount}</span>
                 <span>{content.deal}</span>
               </div>            
               <div className='flex flex-col items-center'>
                <span className='text-xl p-1'>{content.group}</span>
                <span className='text-center'>{content.report}</span>
               </div>
               <div className='flex justify-around p-2 '> 
                 <button className='border px-2 rounded' 
                 onClick={()=> admin ? navigate('/update',{state: content._id}): navigate('/login')}>update</button>
                 <button className='border px-2 rounded' 
                 onClick={()=> handleDelete(content._id)} >delete</button>
               </div>
           </div>
        )))}
      </div>
      {error}
    </div>
    </>
  )
}

export default Account
