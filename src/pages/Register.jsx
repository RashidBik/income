import axios from 'axios';
import { useContext,useState} from 'react';
import { useNavigate } from 'react-router';
import Back from '../components/Back';
import authContext from '../helper/AuthContext';

const Register = () => {

    const [error, setError] = useState([]);
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {lang, color} = useContext(authContext);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault()
       axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}/api/user/register`,  
          data: {name, job, email, password}   
       })
        .then(() => {
          navigate('/login');
        })
        .catch(err => {
            setError(err)
        })
    }

    return (
    <div className='h-full flex flex-col'>
      <header style={color.C1} className='flex justify-end p-4'> 
        <Back />
      </header>
      <div className='flex flex-col justify-center align-middle h-full items-center'>
        <form style={color.C1} className=' bg-inherit border px-4 py-10 rounded-xl ' onSubmit={handleSubmit}>
          <div className='text-xl'>
            {lang.register[0]}
          </div>
        <div className='relative'>
            <input className='px-3 py-2 mt-4 rounded-xl text-gray-900' placeholder={lang.register[1]} type="text"  required
            onChange={(e)=> setName(e.target.value)} value={name} />
        </div>
        <div className='relative'>
            <input className='px-3 py-2 mt-4 rounded-xl text-gray-900' placeholder={lang.register[2]} type="text" required
            onChange={(e)=> setJob(e.target.value)} value={job} />
        </div>
        <div className='relative'>
            <input className='px-3 py-2 mt-4 rounded-xl text-gray-900' placeholder={lang.register[3]} type="email" required
            onChange={(e)=> setEmail(e.target.value)} value={email} />
        </div>
        <div className='relative'>
            <input className='px-3 py-2 mt-4 rounded-xl text-gray-900' placeholder={lang.register[4]} type="password" required
            onChange={(e)=> setPassword(e.target.value)} value={password} />
        </div>
        <div className='relative px-5 mt-8 text-center font-bold  border rounded-xl'>
            <input className='px-3 py-2 rounded-xl visited:bg-orange-500 text-green-300' type="submit" value={lang.register[5]}/>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Register
