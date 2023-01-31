import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import authContext from '../helper/AuthContext';

const Register = () => {

    const [error, setError] = useState([]);
    const [message, setMessage] = useState([]);
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setAuth, lang, color} = useContext(authContext);
    const navigate = useNavigate();
    const data = {name, job, email, password};
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post("http://localhost:4000/api/user",data)
        const json = await response.data
        if (json) {
          localStorage.setItem("userid", json.data)
          setAuth(true);
          navigate('/home')
        } else {
          setAuth(false);
        }
    }

    return (
    <div className='h-full flex flex-col'>
      <header style={color.C1} className='flex justify-end p-4'> 
          <Link to="/setting" className='px-2 font-bold'>back</Link>
      </header>
      <div className='flex flex-col justify-center align-middle h-full items-center'>
        <form style={color.C1} className=' bg-inherit border px-4 py-10 rounded-xl' onSubmit={handleSubmit}>
          <div className='text-xl'>
            SIGN UP
          </div>
        <div className='relative'>
            <input className='px-3 py-2 mt-4 rounded-xl' placeholder='Insert Your Name' type="text"  
            onChange={(e)=> setName(e.target.value)} value={name} />
        </div>
        <div className='relative'>
            <input className='px-3 py-2 mt-4 rounded-xl' placeholder='Whats Your Job' type="text" 
            onChange={(e)=> setJob(e.target.value)} value={job} />
        </div>
        <div className='relative'>
            <input className='px-3 py-2 mt-4 rounded-xl' placeholder='example@gmail.com' type="email" 
            onChange={(e)=> setEmail(e.target.value)} value={email} />
        </div>
        <div className='relative'>
            <input className='px-3 py-2 mt-4 rounded-xl' placeholder='Insert A Password' type="password" 
            onChange={(e)=> setPassword(e.target.value)} value={password} />
        </div>
        <div className='relative px-5 mt-8 text-center font-bold  border rounded-xl'>
            <input className='px-3 py-2 rounded-xl' type="submit" value="Register" />
        </div>
        <div>{error}</div>
        </form>
      </div>
    </div>
  )
}

export default Register
