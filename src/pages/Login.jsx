import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import authContext from '../helper/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setAdmin, color, lang} = useContext(authContext);
  const navigate = useNavigate()
  const user = {email, password};

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4000/api/user/login/63d173c9c6fb6e7638a9dd3a`,{data: user})
    .then(res => res.data)
    .then(data => {
      localStorage.setItem('accessToken', data)
      setAdmin(true)
      navigate('/home')
    })
    .catch(err => console.log(err));    

  }


  return (
    <>
     <header style={color.C1} className='flex justify-end p-4'> 
        <Link to="/setting" className='px-2 font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
        </Link>
    </header>
    <div className='flex justify-center items-center px-4 py-10 align-middle h-full '>
       <form style={color.C1} className='flex flex-col p-4 rounded-xl' onSubmit={handleSubmit}>
        <div>SIGN IN</div>
        <input className='px-3 py-2 mt-4 rounded-xl' type="email" placeholder='email' 
               value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input className='px-3 py-2 mt-4 rounded-xl' type="password" placeholder='password' 
               value={password} onChange={(e)=> setPassword(e.target.value)} />
        <input className='px-3 py-2 mt-4 rounded-xl border' type="submit" value="Login"/> 
       </form>
    </div>
    </>
  )
}

export default Login
