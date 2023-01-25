import React from 'react'
import { useNavigate } from 'react-router'

const Settings = () => {
  const navigate = useNavigate()
  return (
    <div className='grid'>
      <div className='bg-gray-300 p-4 text-center'>Settings</div>
      <div onClick={()=> navigate('/account')} className="p-4 hover:bg-slate-400">Account</div>
      <div onClick={()=> navigate('/profile')} className="p-4 hover:bg-slate-400">Profile</div>
      <div onClick={()=> navigate('/language')} className="p-4 hover:bg-slate-400">Language</div>
      <div onClick={()=> navigate('/about')} className="p-4 hover:bg-slate-400">About</div>
      <div onClick={()=> navigate('/theme')} className="p-4 hover:bg-slate-400">Theme</div>
    </div>
  )
}

export default Settings
