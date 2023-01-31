import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import authContext from '../helper/AuthContext'

const Settings = () => {
  const navigate = useNavigate()
  const {lang, admin, color } = useContext(authContext);
  
  return (
    <div className='grid'>
      <div style={color.C1} className='p-4 text-center'>{lang.setting[0]}</div>
      <div style={color.C1} onClick={()=> navigate('/register')} className="p-4 mt-1">{lang.setting[1]}</div>
      <div style={color.C1} onClick={()=> navigate('/login')} className="p-4">{lang.setting[2]}</div>
      <div style={color.C1} onClick={()=> {admin ? navigate('/account'): navigate('/login')}} className="p-4 ">{lang.setting[3]}</div>
      <div style={color.C1} onClick={()=> {admin ? navigate('/profile'): navigate('/login')}} className="p-4 ">{lang.setting[4]}</div>
      <div style={color.C1} onClick={()=> navigate('/lang')} className="p-4 ">{lang.setting[5]}</div>
      <div style={color.C1} onClick={()=> navigate('/about')} className="p-4 ">{lang.setting[6]}</div>
      <div style={color.C1} onClick={()=> navigate('/theme')} className="p-4 ">{lang.setting[7]}</div>
    </div>
  )
}

export default Settings
