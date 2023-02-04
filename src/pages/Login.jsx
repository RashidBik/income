import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import authContext from '../helper/AuthContext';

const Login = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setAdmin, color, lang} = useContext(authContext);

  const userid = localStorage.getItem('userid')
  const navigate = useNavigate()
  const user = {email, password};

  useEffect(() => {
     if ( email && password) {
       setIsEmpty(false)
     }
   }, [email, password]);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/api/user/login/${userid}`,{data: user})
    .then(res => res.data)
    .then(data => {
      localStorage.setItem('accessToken', data)
      setAdmin(true)
      navigate('/account')
      console.log(data);
    })
    .catch(err => {
      setError(err)
      navigate('/home')
    });    

  }
console.log(error);

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
        <div>{lang.login[0]}</div>
        <input className='px-3 py-2 mt-4 rounded-xl text-gray-900' type="email" placeholder={lang.login[1]} 
               value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input className='px-3 py-2 mt-4 rounded-xl text-gray-900' type="password" placeholder={lang.login[2]} 
               value={password} onChange={(e)=> setPassword(e.target.value)} />
        <input className={isEmpty ? ' text-red-300 px-3 py-2 rounded-xl border mt-4': 'border mt-4 px-3 py-2 rounded-xl text-green-300'} type="submit" value={lang.login[0]} /> 
       </form>
       <div>{error}</div>
    </div>
    </>
  )
}

export default Login
