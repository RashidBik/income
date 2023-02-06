import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import Back from '../components/Back';
import authContext from '../helper/AuthContext';

const Login = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setAdmin, color, lang} = useContext(authContext);

  const navigate = useNavigate()
   
  const handleSubmit = (e) => {
    e.preventDefault();
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_API_URL}/api/user/login/`,
    data: {email, password}
  })
    .then(res => res.data)
    .then(data => {
      localStorage.setItem('accessToken', data.token)
      setAdmin(true)
      navigate('/home')
    })
    .catch(err => {
      setError(err)
      navigate('/')
    });    

  }

  return (
    <>
     <header style={color.C1} className='flex justify-end p-4'> 
      <Back/>
    </header>
    <div className='flex justify-center items-center px-4 py-10 align-middle h-full '>
       <form onSubmit={handleSubmit} style={color.C1} className='flex flex-col p-4 rounded-xl'>
        <div>{lang.login[0]}</div>
        <input className='px-3 py-2 mt-4 rounded-xl text-gray-900' type="email" placeholder={lang.login[1]} required
               value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input className='px-3 py-2 mt-4 rounded-xl text-gray-900' type="password" placeholder={lang.login[2]} required
               value={password} onChange={(e)=> setPassword(e.target.value)} />
        <input className='border mt-4 px-3 py-2 rounded-xl text-green-300' type="submit" value={lang.login[0]} /> 
       </form>
       <div>{error}</div>
    </div>
    </>
  )
}

export default Login
